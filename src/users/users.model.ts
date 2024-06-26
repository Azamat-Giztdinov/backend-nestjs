import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Posts } from "src/posts/pots.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table( { tableName: 'users' } )
export class User extends Model<User, UserCreationAttrs> {
    
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true,primaryKey: true})
    id: number;
    
    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрем'})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    email: string;
    
    @ApiProperty({example: '123456789', description: 'Пароль'})
    @Column({type: DataType.STRING, allowNull:false})
    password: string;

    @ApiProperty({example: 'true', description: 'Заблокирован или нет'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'За спам', description: 'Причина блокировки'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(()=> Role, ()=> UserRoles)
    roles: Role[];

    @HasMany(()=> Posts)
    posts: Posts[]
}