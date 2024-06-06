import { Component, OnInit } from '@angular/core';
import { Project } from '../../../../models/Project';
import { ProjectsService } from '../../../../core/_services/projects/projects.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent implements OnInit {
  projects: Project[] = [];
  bufferProject: any = {}
  constructor(private projectService:ProjectsService) { }

  ngOnInit() {
    this.projectService.loadProjects().subscribe(data => {
      this.projects = data;
    });
  }
setBufferProject(project:any){
  this.bufferProject = project
}
}
