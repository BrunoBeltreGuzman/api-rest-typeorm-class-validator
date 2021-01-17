# api-rest-typeorm-class-validator

**Api rest validating the columns with the class-validator library**

_This is a simple rest api using Typescript, TypeORM, Mysql, Nodejs and class-validator using its entities and its abstract functions_

**class-validator**
Allows use of decorator and non-decorator based validation. Internally uses validator.js to perform validation. Class-validator works on both browser and node.js platforms.

**More information:** https://github.com/typestack/class-validator

**Entity**

```typescript
@Entity()
@Unique(["email"])
export class User {
       @PrimaryGeneratedColumn()
       @IsNotEmpty()
       @IsNumber()
       @IsInt()
       @IsNotEmpty()
       id: number;

       @Column()
       @IsNotEmpty()
       @IsString()
       @MinLength(20)
       name: string;

       @Column()
       @IsNotEmpty()
       @IsString()
       @MinLength(30)
       @IsEmail()
       email: string;

       @Column()
       @IsNotEmpty()
       @IsString()
       @MinLength(255)
       password: string;

       @Column()
       @IsNotEmpty()
       @CreateDateColumn()
       @IsDate()
       createAt: Date;

       @Column()
       @IsNotEmpty()
       @UpdateDateColumn()
       @IsDate()
       updataAt: Date;
}
```

Steps to run this project:

1. Run `npm i` command

```console
$ npm i
```

2. Setup database settings inside `ormconfig.json` file

```json
{
       "type": "mysql",
       "host": "localhost",
       "port": 3306,
       "username": "user",
       "password": "password",
       "database": "database",
       "synchronize": true,
       "logging": false,
       "entities": ["src/entity/**/*.ts"],
       "migrations": ["src/migration/**/*.ts"],
       "subscribers": ["src/subscriber/**/*.ts"],
       "cli": {
              "entitiesDir": "src/entity",
              "migrationsDir": "src/migration",
              "subscribersDir": "src/subscriber"
       }
}
```

3. Run `npm start` command

```console
$ npm start
```
