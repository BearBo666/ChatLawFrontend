TAG=${1:-latest}

docker tag chatlaw-frontend:latest panda1024/chatlaw-frontend:${TAG}
docker push panda1024/chatlaw-frontend:${TAG}
