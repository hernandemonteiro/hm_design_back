# Hm-design - Back-end

[![server_hm_design - CI](https://github.com/hernandemonteiro/server_hm_design/actions/workflows/ci.preview.yml/badge.svg)](https://github.com/hernandemonteiro/server_hm_design/actions/workflows/ci.preview.yml)

## Description:

Hm-design e-commerce back-end(API) provider developed using typescript and NodeJS;

## Project Estructure:

<ul>

<li><b>./index.ts:</b></li>

<ul>
 application starts implementation (run express server);
</ul>

<li><b>./src/:</b></li>

<ul>
folder to organize the application;
</ul>

<li><b>./src/_tests_/:</b></li>

<ul>
units and integrations tests wrote in jest;
</ul>

<li><b>./src/contracts/:</b></li>

<ul>
interfaces types for services implementation;
</ul>

<li><b>./src/controllers/:</b></li>

<ul>
controllers to receive requests from routes and create service calls;
</ul>

<li><b>./src/infra/:</b></li>

<ul>
database connection and pagination returned value configs;
</ul>

<li><b>./src/models/:</b></li>

<ul>
models Schemas to moongose configuration;
</ul>

<li><b>./src/repository/:</b></li>

<ul>
repositorys mongoose configuration using Schemas from ./models/;
</ul>

<li><b>./src/router/:</b></li>

<ul>
routes declarations;
</ul>

<li><b>./src/services/:</b></li>

<ul>
objects for database management with contracts implementations;
</ul>

<li><b>./src/utils/:</b></li>

<ul>
all utils/helpers functions;
</ul>

<li><b>./src/StartUp.ts:</b></li>

<ul>
basic express.js configuration with routes;
</ul>

</ul>

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

### Platform Deploy:

[![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://server-two-liart.vercel.app/)
