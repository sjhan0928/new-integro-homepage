#!/bin/bash
# Blue-Green 배포 스크립트
# 주의: --network host는 Linux에서만 완전 지원됨 (macOS/Windows 미지원)
set -e

IMAGE=$1
[ -z "$IMAGE" ] && echo "Usage: $0 <image>" && exit 1

docker pull "$IMAGE"

# 현재 실행 중인 컨테이너 확인
if docker ps --format '{{.Names}}' | grep -q 'kkerp-blue'; then
  NEW="kkerp-green"; NEW_PORT=3001; OLD="kkerp-blue"
else
  NEW="kkerp-blue"; NEW_PORT=3000; OLD="kkerp-green"
fi

# 새 컨테이너 시작 (host 네트워크 사용)
docker stop "$NEW" 2>/dev/null || true
docker rm "$NEW" 2>/dev/null || true
docker run -d --name "$NEW" --restart unless-stopped --network host -e PORT="$NEW_PORT" "$IMAGE"

# 헬스체크 (최대 30초)
for i in {1..6}; do
  if curl -sf "http://localhost:$NEW_PORT" > /dev/null; then
    echo "✅ $NEW 정상 (port: $NEW_PORT)"
    docker stop "$OLD" 2>/dev/null || true
    docker rm "$OLD" 2>/dev/null || true
    echo "🗑️ $OLD 종료"
    exit 0
  fi
  echo "⏳ 헬스체크 대기... ($i/6)"
  sleep 5
done

echo "❌ 헬스체크 실패"
docker stop "$NEW" || true
docker rm "$NEW" || true
exit 1
