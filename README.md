<h1 align="center" justify="center">
  <img alt="tech-lound logo" src="https://tailwindui.com/img/logos/workflow-mark-teal-200-cyan-400.svg" width="25px">
  TechLound
</h1>

<p align="center">
  <a href="#description">Description</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requirements">Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#usage">Usage</a></a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#demonstration">Demonstration</a>
</p>
<br />
<p align="center">
  <img src="https://img.shields.io/static/v1?label=license&message=MIT" alt="License">
  <img src="https://img.shields.io/github/repo-size/Lissone/tech-lound" alt="Repo size" />
  <img src="https://img.shields.io/github/languages/top/Lissone/tech-lound" alt="Top lang" />
  <img src="https://img.shields.io/github/stars/Lissone/tech-lound" alt="Stars repo" />
  <img src="https://img.shields.io/github/forks/Lissone/tech-lound" alt="Forks repo" />
  <img src="https://img.shields.io/github/issues-pr/Lissone/tech-lound" alt="Pull requests" >
  <img src="https://img.shields.io/github/last-commit/Lissone/tech-lound" alt="Last commit" />
</p>

<p align="center">
  <a href="https://github.com/Lissone/tech-lound/issues">Report bug</a>
  ·
  <a href="https://github.com/Lissone/tech-lound/issues">Request feature</a>
</p>

<br />

## Description

The project is a **platform for programming courses**, divided into microservices with the idea of ​​separating business rules from the application and atomizing their processes.

The services communicate using **Apache Kafka** as Message Broker, and are integrated into a third service called **gateway**, which joins the purchases and classroom api using **Apollo Gateway** so that only one End-Point is needed to be consumed by the Front End, and application authentication is done using **Auth0**.

This project was developed for me to learn more about GraphQL, Apollo, Kafka and Docker. It was my **first contact with these technologies**, and I really enjoyed developing this project with them. I intend to use GraphQL in more projects that I will create in the future and this project was the basis for my knowledge of the technology.

I created an **Application Flow** to facilitate the understanding of the integration and union between the services:

<img src="./.github/application-flow.png" alt="Application Flow" width="100%" height="100%"/>

## Requirements

- [Nodejs](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Npm](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/)

## Technologies

- Yarn Workspaces
- Typescript
- NestJs
- GraphQL
- Apollo Federation
- Apollo Gateway
- Apache Kafka
- Prisma
- PostgreSQL
- Next.js
- Auth0
- Apollo Client
- Codegen
- TailwindCss
- Eslint
  - Airbnb-config with another pessoal rules
  - Import helpers plugin
- Prettier
- Commitlint
  - Commitizen

## Usage

You can clone it on your pc using the command:

```bash
git clone https://github.com/Lissone/tech-lound.git
cd tech-lound
```

>  ❗  You must have **Docker installed** on your machine to get the container up.
**Up Kafka and Postgres services** in a **Docker container** on your local machine using:

```bash
docker-compose up -d
# View all running containers
docker ps
```

>❗  As the application authentication was performed by a third-party service (**Auth0**), **it is necessary to configure it through the technology website**, accessing this [link](https://manage.auth0.com/dashboard). There you will get all the missing environment variables.

>❗  It is necessary to **configure the environment variables of each of the projects**, access the individual **.env.example** file of each of the projects to facilitate the addition.

Install dependencies using:

```bash
yarn
#or
npm install
```

**Generate the Prisma Client** on the two services that use Prisma, using:

```bash
# Purchases service
yarn purchases:prisma
# Classroom service
yarn classroom:prisma
# or using npm
```

Run **Purchases service**:

```bash
# Use a dedicated terminal 
yarn dev:purchases
#or
npm run dev:purchases
```

Run **Classroom service**:

```bash
# Use a dedicated terminal 
yarn dev:classroom
#or
npm run dev:classroom
```

Run **Gateway service**:

```bash
# Use a dedicated terminal 
yarn dev:gateway
#or
npm run dev:gateway
```

Run **Web**:

```bash
# Use a dedicated terminal 
yarn dev:web
#or
npm run dev:web
```

> ℹ️  You can **view the database** from Prisma Studio on the two services that use Prisma, using:

```bash
# Purchases / Classroom service
yarn prisma-studio
#or
npm run prisma-studio
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

<h4 align="center">
  Made with ❤️ by <a href="https://github.com/Lissone" target="_blank">Lissone</a>
</h4>

<hr />
