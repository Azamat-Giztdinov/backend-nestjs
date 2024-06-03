import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";

interface PostCreationAttrs {
    title: string;
    constent: string;
    userId: number;
    image: string;
}

@Table( { tableName: 'posts' } )
export class Posts extends Model<Posts, PostCreationAttrs> {
    
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true,primaryKey: true})
    id: number;
    
    @ApiProperty({example: 'Title', description: 'Уникальное название поста'})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    title: string;
    
    @ApiProperty({example: '....', description: 'Описание'})
    @Column({type: DataType.STRING, allowNull:false})
    content: string;

    @ApiProperty({example: '*.jpg', description: 'Изображение'})
    @Column({type: DataType.STRING, allowNull:false})
    image: string;

    @ApiProperty({example: '0', description: 'Индекс пользователя'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;
    
    @BelongsTo(() => User)
    author: User

}