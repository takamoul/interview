import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';
import { Project } from '../../../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

private projectsUrl = environment.projectsUrl;
private projects: Project[] = [];

constructor(private http: HttpClient) {
  this.loadProjects();
}

 loadProjects() {
 return  this.http.get<Project[]>(this.projectsUrl)
}

addProject(newProject: Project): void {
  this.projects.push(newProject);
}
}
