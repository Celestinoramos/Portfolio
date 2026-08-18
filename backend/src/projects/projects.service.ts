import { Injectable, NotFoundException } from '@nestjs/common';
import { PROJECTS, Project } from './project.data';

@Injectable()
export class ProjectsService {
  findAll(featuredOnly?: boolean): Project[] {
    if (featuredOnly) {
      return PROJECTS.filter((p) => p.featured);
    }
    return PROJECTS;
  }

  findOne(slug: string): Project {
    const project = PROJECTS.find((p) => p.slug === slug);
    if (!project) {
      throw new NotFoundException(`Projeto "${slug}" não encontrado`);
    }
    return project;
  }
}
