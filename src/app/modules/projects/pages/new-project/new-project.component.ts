import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../../../../core/_services/projects/projects.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TagModel } from 'ngx-chips/core/tag-model';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  projectImage:any
  qrCode:any
  projectForm!: FormGroup;
  submitted = false;
itemsAsObjects = [{value: 0, display: 'Angular'}, {value: 1, display: 'React'}];

  constructor(private fb: FormBuilder,private projectsService:ProjectsService,private router:Router) { }

  ngOnInit() {
    this.createProjectForm()
  }
  // initial form
  createProjectForm() {
    this.projectForm = this.fb.group({
      titleEn: ['', Validators.required],
      titleAr: ['', Validators.required],
      descriptionEn: ['', Validators.required],
      descriptionAr: ['', Validators.required],
      keywordsEn: ['', Validators.required],
      keywordsAr: ['', Validators.required],
      projectShow: [''],
      pageNumber: ['',  Validators.required],
      startDate: ['',  Validators.required],
      startEnd: ['',  Validators.required],
      qrCode: ['',  Validators.required],
      goalAmount: ['', Validators.required],
      smsLink: ['', Validators.required],
      paymentLink: ['', Validators.required],
      bankName: ['', Validators.required],
      iban: ['', Validators.required],
      accountNumber: ['', Validators.required],
      swiftNumber: ['', Validators.required],
      reference: ['', Validators.required],
      image: ['', Validators.required],
    })
  }
  selectImage(event: any) {
    let file = event.target.files[0] ;
      if (file.size / 1024 / 1024 <= 3) { // Check file size
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.projectImage = e.target.result // Handle the file data
          this.projectForm.controls['image'].setValue(this.projectImage);
        };
        reader.readAsDataURL(file);
      } else {
        console.error('File size exceeds 3 MB');
      }
    }
    selectQrCode(event: any) {
      let file = event.target.files[0] ;
        if (file.size / 1024 / 1024 <= 3) { // Check file size
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.qrCode = e.target.result // Handle the file data
            this.projectForm.controls['qrCode'].setValue(this.qrCode);
          };
          reader.readAsDataURL(file);
        } else {
          console.error('File size exceeds 3 MB');
        }
      }
    get f(): { [key: string]: AbstractControl } {
      return this.projectForm.controls;
    }
  addProject(){
    this.submitted = true;
    if (this.projectForm.invalid) {
      return;
    }
    let model = JSON.stringify(this.projectForm.value, null, 2)
    this.projectsService.addProject(model).subscribe((res)=>{
      this.router.navigate(['/all-projects'])
    }),(error:any)=>{
      console.log(error)
    }
  }
}
