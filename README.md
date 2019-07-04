# db-03
terceiro trabalho de db - nosql


## Limpar dados

```bash
mongo db_03 --eval "db.dropDatabase()"
```

## Inserir investimentos

```bash
 mongo db_03 < insert-investments.js
```

## Atualizar investimentos

```bash
python3 update-investments.py
```

## Inserir usuarios

```bash
 mongo db_03 < insert-users.js
```

## Inserir aplicacoes

```bash
 mongo db_03 < insert-applications.js
```
