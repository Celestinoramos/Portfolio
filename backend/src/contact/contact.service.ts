import { Injectable, Logger } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);

  // Guarda as mensagens em memória. Reinicia quando o servidor reinicia —
  // suficiente para começar. Para produção, troca por uma base de dados
  // (ex: Postgres + Prisma) ou por um serviço de email (ex: Resend, Nodemailer).
  private messages: (CreateContactDto & { receivedAt: Date })[] = [];

  async create(dto: CreateContactDto) {
    const entry = { ...dto, receivedAt: new Date() };
    this.messages.push(entry);

    // TODO: substituir por envio real de email, por exemplo com Resend:
    //
    // await resend.emails.send({
    //   from: 'portfolio@teudominio.com',
    //   to: 'ramoscumbica2@outlook.com',
    //   subject: `Novo contacto de ${dto.name}`,
    //   text: dto.message,
    // });
    this.logger.log(`Nova mensagem de contacto: ${dto.name} <${dto.email}>`);

    return { success: true, message: 'Mensagem recebida. Obrigado pelo contacto!' };
  }

  findAll() {
    return this.messages;
  }
}
