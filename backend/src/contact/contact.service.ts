import { Injectable, Logger } from '@nestjs/common';
import { Resend } from 'resend';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);
  private readonly resend: Resend | null = null;
  private messages: (CreateContactDto & { receivedAt: Date })[] = [];

  constructor() {
    if (process.env.RESEND_API_KEY) {
      this.resend = new Resend(process.env.RESEND_API_KEY);
    }
  }

  async create(dto: CreateContactDto) {
    const entry = { ...dto, receivedAt: new Date() };
    this.messages.push(entry);

    if (this.resend) {
      const { error } = await this.resend.emails.send({
        from: process.env.RESEND_FROM ?? 'Portfolio <onboarding@resend.dev>',
        to: 'celestinocumbica03@gmail.com',
        subject: `Novo contacto de ${dto.name}`,
        text: `Nome: ${dto.name}\nEmail: ${dto.email}\n\n${dto.message}`,
      });
      if (error) {
        this.logger.error(`Falha ao enviar email: ${error.message}`);
        return { success: false, message: 'Não foi possível enviar a mensagem. Tenta novamente.' };
      }
    } else {
      this.logger.warn('RESEND_API_KEY não definida — mensagem não enviada.');
    }

    return { success: true, message: 'Mensagem recebida. Obrigado pelo contacto!' };
  }

  findAll() {
    return this.messages;
  }
}