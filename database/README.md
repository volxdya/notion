## Create migration

```bash
$ npx sequelize-cli migration:generate --name add-new-column-to-your-model
```

## Start migration 

```bash
$ npx sequelize-cli db:migrate
```

## Undo last migration

```bash
$ npx sequelize-cli db:migrate:undo
```

## Undo all migrations

```bash
$ npx sequelize-cli db:migrate:undo:all
```