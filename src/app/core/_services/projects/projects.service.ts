import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { Project } from '../../../models/Project';
import { Observable, catchError, of, tap } from 'rxjs';

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

addProject(newProject: any): Observable<Project[]> {
  // Simulate adding a new project locally
  this.projects.push(newProject);
  // Update the JSON file (you can't directly update the file in the assets folder, this is just an in-memory update)
  return this.http.put<Project[]>(this.projectsUrl, this.projects)
    .pipe(
      tap(_ => console.log(`added project id=${newProject.titleEn}`)),
      catchError(this.handleError<Project[]>('addProject'))
    );
}
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}
}
