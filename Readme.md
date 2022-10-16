# Hm-design - Back-end

## Description:

Hm-design e-commerce back-end(API) provider developed using typescript and NodeJS;

## Estructure:

    ./index.ts:
        application starts implementation (run express server);

    ./src/:
        folder to organize the application;

    ./src/__tests__/:
        units and integrations tests wrote in jest;

    ./src/contracts/:
        interfaces types for services implementation;

    ./src/controllers/:
        controllers to receive requests from routes and create service calls;

    ./src/infra/:
        database connection and pagination returned value configs;

    ./src/models/:
        models Schemas to moongose configuration;

    ./src/repository/:
        repositorys mongoose configuration using Schemas from ./models/;

    ./src/router/:
        routes declarations;

    ./src/services/:
        objects for database management with contracts implementations;

    ./src/utils/:
        all utils/helpers functions;
        
    ./src/StartUp.ts:
        basic express.js configuration with routes;

### Development Languages and tests:

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
<br>

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

### Database:

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

### Containers:

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

### CI:

![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
<br>

[![server_hm_design - CI](https://github.com/hernandemonteiro/server_hm_design/actions/workflows/ci.preview.yml/badge.svg)](https://github.com/hernandemonteiro/server_hm_design/actions/workflows/ci.preview.yml)

### Platform Deploy:

[![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://server-two-liart.vercel.app/)
