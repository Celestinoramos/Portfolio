import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [ProjectsModule, ContactModule],
})
export class AppModule {}
