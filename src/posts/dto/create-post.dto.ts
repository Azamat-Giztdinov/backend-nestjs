import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty({example: 'Title', description: 'Уникальное название поста'})
    readonly title: string;
    @ApiProperty({example: '....', description: 'Описание'})
    readonly content: string;
    @ApiProperty({example: '0', description: 'Индекс пользователя'})
    readonly userId: number;
}