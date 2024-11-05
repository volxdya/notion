<h1>Notion</h1>

## Description
> [!NOTE]
> <p>Application for notes, similar to Kanban, which you can share with your friends, work on them together, see the progress of their completion, write comments, view reporting and much more</p>

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# Development
$ npm run start

# Watch mode
$ npm run start:dev

# Production mode
$ npm run start:prod
```

## <a href="https://www.docker.com/">Docker</a>
> [!WARNING]
> <p>Now, when you run the project again, the database will be created. I'll fix it soon</p>

```bash
# Build 
$ docker-compose build 

# Start project
$ docker-compose up
```

## Stack
- [X] TypeScript
- [X] Nest.JS
- [X] Postgres
- [X] Docker
- [X] Grafana
- [X] Sequalize
- [X] Jest
- [X] Swagger

## Testing
<p>On my application i use jest unit-testing</p>

```bash
# Testing all application
$ npm run test
```

```bash
# Testing separate modules
$ npx jest modules/{name of module}/tests
```

## Migrations
<p>Check <a href="https://github.com/volxdya/notion/blob/main/database/README.md">README.md</a> on database directory</p>

## Documentation API
> [!TIP]
> You can watch docs api on http://localhost:{{port}}/docs
