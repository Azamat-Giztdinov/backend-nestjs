import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/cteate-user.dto';
import { AuthService } from './auth.service';


@ApiTags("Авторизация")
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @ApiOperation({summary: 'Авторизация польззователя'})
    @ApiResponse({
        status: 200,
        description: 'Успешная авторизация',
        schema: {
            example: {
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
            },
        },
    })
    @ApiResponse({
        status: 401,
        description: 'Unauthorized',
        schema: {
            example: {
            message: "Некорректный email или пароль"
            },
        },
    })
    @Post('/login')
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto);
    }

    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto)
    }
}
