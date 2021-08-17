import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example:"dimasalam@yandex.ru", description:"Email"})
    readonly email: string;

    @ApiProperty({example:"D76hyt%9", description:"Пароль"})
    readonly password: string;
}