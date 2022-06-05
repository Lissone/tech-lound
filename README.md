# Ignite Lab 01 - Monorepo

- Yarn Workspaces
- NestJS
- GraphQL
- Apache Kafka
- Next.js
- Apollo Client (GraphQL)

## Funcionalidades

### Serviço de compras (purchases)

- [Admin] Cadastro de produtos
- [Admin] Listagem de produtos

- [Auth] Listagem de compras

- [Public] Compra de um produto
- [Public] Lista produtos disponíveis p/ compra

### Serviço de sala de aula (classroom)

- [Admin] Listar matrículas
- [Admin] Listar alunos
- [Admin] Listar cursos
- [Admin] Cadastrar cursos

- [Auth] Listar cursos que tenho acesso
- [Auth] Acessar conteúdo do curso

### Docker

```bash
# Sobe containers
docker-compose up -d
# Derruba containers
docker-compose down
# Visualiza todos os containers rodando
docker ps
```

### Prisma

```bash
# Cria referencia do Prisma Client pelo node_modules
npx prisma generate
# Cria migration de acordo com schema
npx prisma migrate dev
# Inicia servidor de studio do prisma
yarn prisma-studio
```
