# ChatLaw Frontend

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run start
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).





# Deploy(还没改)

To deploy run the following

- Run `./build.sh`
- Tag the latest build to a specific version `docker tag copernicus-frontend:latest docker.mirav.cn:5000/copernicus-frontend:vx.x`
- Push the image to registry with `docker push docker.mirav.cn:5000/copernicus-frontend:vx.x`

The `docker-compose.yml` is located at the `copernicus-backend`. Please make the corresponding changes there.

