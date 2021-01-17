import {
       Entity,
       PrimaryGeneratedColumn,
       Column,
       CreateDateColumn,
       UpdateDateColumn,
       Unique,
} from "typeorm";

import {
       IsNotEmpty,
       IsString,
       IsDate,
       IsEmail,
       IsNumber,
       MinLength,
       IsInt,
} from "class-validator";

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
