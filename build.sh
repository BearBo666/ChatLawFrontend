TAG=${1:-latest}

docker build -t chatlaw-frontend:$TAG  -f ./docker/Dockerfile .
