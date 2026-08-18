import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateContactDto {
  @IsString()
  @MinLength(2, { message: 'O nome deve ter pelo menos 2 caracteres.' })
  @MaxLength(100)
  name: string;

  @IsEmail({}, { message: 'Indica um email válido.' })
  email: string;

  @IsString()
  @MinLength(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' })
  @MaxLength(2000)
  message: string;
}
