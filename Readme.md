# Hm-design - Back-end

[![server_hm_design - CI](https://github.com/hernandemonteiro/server_hm_design/actions/workflows/ci.preview.yml/badge.svg)](https://github.com/hernandemonteiro/server_hm_design/actions/workflows/ci.preview.yml)

<hr>

<div id="summary">

## Summary:

<ol>
<li><a href="#summary">Summary</a></li>
<li><a href="#description">Description</a></li>
<li><a href="#projectStructure">Project Structure</a></li>
<li><a href="#endpoints">Endpoints</a></li>
<li><a href="#resources">Tools and Resources</a></li>
<li><a href="#deploy">Deploy</a></li>
</ol>
</div>
<hr>
<div id="description">

## Description:

    E-commerce back-end developed using
    Typescript and NodeJS;

</div>
<hr>
<div id="projectStructure">

## Project Structure:

<ul>

<li><h5>./index.ts:</h5></li>

<ul>
 application starts implementation (run express server);
</ul>

<li><h5>./src/:</h5></li>

<ul>
folder to organize the application;
</ul>

<li><h5>./src/_tests_/:</h5></li>

<ul>
units and integrations tests wrote in jest;
</ul>

<li><h5>./src/contracts/:</h5></li>

<ul>
interfaces types for services implementation;
</ul>

<li><h5>./src/controllers/:</h5></li>

<ul>
controllers to receive requests from routes and create service calls;
</ul>

<li><h5>./src/infra/:</h5></li>

<ul>
database connection and pagination returned value configs;
</ul>

<li><h5>./src/models/:</h5></li>

<ul>
models Schemas to moongose configuration;
</ul>

<li><h5>./src/repository/:</h5></li>

<ul>
repositorys mongoose configuration using Schemas from ./models/;
</ul>

<li><h5>./src/router/:</h5></li>

<ul>
routes declarations;
</ul>

<li><h5>./src/services/:</h5></li>

<ul>
objects for database management with contracts implementations;
</ul>

<li><h5>./src/utils/:</h5></li>

<ul>
all utils/helpers functions;
</ul>

<li><h5>./src/StartUp.ts:</h5></li>

<ul>
basic express.js configuration with routes;
</ul>

</ul>

</div>
<hr>
<div id="endpoints">

## Endpoints (routes):

    All params needed is marked with ":"!
    --
    after the routes is defined the method
    of request!
    --
    Example: /user/:id [GET]
    (*id is passed in the route as a parameter)

<ul>
<details>
<summary><b>Show cart routes:</b></summary>
<br>
        <ul>
            <li><b>/cart </b>[GET]:</li>
            - find all products in cart
            <br><br>
            <li><b>/cart/:page/:qtd </b>[GET]:</li>
            - find all products in cart with pagination
            <br><br>
            <li><b>/cart/:id </b>[GET]:</li>
            - find one product by ID
            <br><br>
            <li><b>/cart/register/:user_id/:quantity/:product_id/:product/:unit_price/:total_price/:order_id/:status </b>[PUT]:</li>
            - insert a product in cart
            <br><br>
            <li><b>/cart/:id </b>[DELETE]:</li>
            - delete one product by ID
            <br><br>
            <li><b>/cart/update/:id/:user_id/:quantity/:product_id/:product/:unit_price/:total_price/:status </b>[PUT]:</li>
            - update one product in cart by ID
            <br><br>
        </ul>
</details>
<details>
<summary><b>Show category routes:</b></summary>
<br>
        <ul>
            <li><b>/categorys </b>[GET]:</li>
            - find all categorys
            <br><br>
            <li><b>/categorys/:page/:qtd </b>[GET]:</li>
            - find all categorys with pagination
            <br><br>
            <li><b>/category/register/:category </b>[PUT]:</li>
            - register a category
            <br><br>
            <li><b>/category/:id </b>[DELETE]:</li>
            - delete a category by ID
            <br><br>
            <li><b>/category/update/:id/:category </b>[PUT]:</li>
            - update a category by ID
            <br><br>
        </ul>
</details>
<details>
<summary><b>Show password routes:</b></summary>
<br>
        <ul>
            <li><b>/forgotPassword/:email </b>[POST]:</li>
            - forgot password method to send an email with hash
            <br><br>
            <li><b>/confirmHash/:hash </b>[GET]:</li>
            - confirm the hash to update password
            <br><br>
            <li><b>/updatePassword/:hash/:password </b>[PUT]:</li>
            - update the password
            <br><br>
        </ul>
</details>
<details>
<summary><b>Show order routes:</b></summary>
<br>
        <ul>
            <li><b>/orders </b>[GET]:</li>
            - find all orders
            <br><br>
            <li><b>/order/:page/:qtd </b>[GET]:</li>
            - find all orders with pagination
            <br><br>
            <li><b>/order/:id </b>[GET]:</li>
            - find a order by ID
            <br><br>
            <li><b>/order/register/:user_id/:address/:order_id/:status </b>[PUT]:</li>
            - register a order
            <br><br>
            <li><b>/order/:id </b>[DELETE]:</li>
            - delete a order by ID
            <br><br>
            <li><b>/order/update/:id/:user_id/:address/:order_id/:status </b>[PUT]:</li>
            - update an order by ID
            <br><br>
        </ul>
</details>
<details>
<summary><b>Show product routes:</b></summary>
<br>
        <ul>
            <li><b>/products </b>[GET]:</li>
            - find all products
            <br><br>
            <li><b>/products/:page/:qtd </b>[GET]:</li>
            - find all products with pagination
            <br><br>
            <li><b>/product/:id </b>[GET]:</li>
            - find a products by ID
            <br><br>
            <li><b>/products/category/:category </b>[GET]:</li>
            - find products from category
            <br><br>
            <li><b>/products/search/:search </b>[GET]:</li>
            - find products from search
            <br><br>
            <li><b>/product/delete/:id </b>[DELETE]:</li>
            - delete a product by ID
            <br><br>
            <li><b>/product/register/:name/:price/:images/:description/:category/:options </b>[PUT]:</li>
            - register a product
            <br><br>
            <li><b>/product/update/:id/:name/:price/:images/:description/:status/:options </b>[PUT]:</li>
            - update an product by ID
            <br><br>
        </ul>
</details>
<details>
<summary><b>Show user routes:</b></summary>
<br>
       <ul>
            <li><b>/users </b>[GET]:</li>
            - find all users
            <br><br>
            <li><b>/users/:id </b>[GET]:</li>
            - find a users by ID
            <br><br>
            <li><b>/users/:name/:email/:password/:type </b>[POST]:</li>
            - register a user
            <br><br>
            <li><b>/users/:id </b>[DELETE]:</li>
            - delete a users by ID
            <br><br>
            <li><b>/users/update/:id/:name/:email/:password </b>[PUT]:</li>
            - update an user by ID
            <br><br>
            <li><b>/login/:email/:password </b>[GET]:</li>
            - login method, return a token with user id and type encrypted
            <br><br>
        </ul>
</details>
</ul>
</div>

<hr>
<div id="resources">

## Tools and Resources:

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

</div>
<hr>
<div id="deploy">

## Platform Deploy:

[![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://server-two-liart.vercel.app/)

</div>
