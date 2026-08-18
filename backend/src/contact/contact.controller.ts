import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  // POST /api/contact  { name, email, message }
  @Post()
  create(@Body() dto: CreateContactDto) {
    return this.contactService.create(dto);
  }

  // GET /api/contact  -> lista mensagens recebidas (usa isto só para debug local)
  @Get()
  findAll() {
    return this.contactService.findAll();
  }
}
