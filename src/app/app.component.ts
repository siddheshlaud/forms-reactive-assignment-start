import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ProjectValidators } from './project.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  projectStatusOptions: string[] = ['Stable', 'Critical', 'Finished'];
  project: {
    projectName: string,
    mail: string,
    projectStatus: string
  };

  constructor() {}

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(
        null, 
        [Validators.required, ProjectValidators.validateProjectName], 
        ProjectValidators.validateProjectNameAsync),
      'mail': new FormControl(
        null, 
        [Validators.required, Validators.email]),
      'projectStatus': new FormControl(
        'Stable', 
        Validators.required),
    });
  }

  onSubmit() {
    this.project = {
      projectName: this.projectForm.value.projectName,
      mail: this.projectForm.value.mail,
      projectStatus: this.projectForm.value.projectStatus
    };
  }


}
