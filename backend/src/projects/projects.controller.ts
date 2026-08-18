import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  // GET /api/projects            -> todos os projetos
  // GET /api/projects?featured=1 -> só os projetos em destaque
  @Get()
  findAll(@Query('featured') featured?: string) {
    return this.projectsService.findAll(featured === '1' || featured === 'true');
  }

  // GET /api/projects/:slug
  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.projectsService.findOne(slug);
  }
}
