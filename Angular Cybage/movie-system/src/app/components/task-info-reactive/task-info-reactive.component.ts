import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-task-info-reactive',
  templateUrl: './task-info-reactive.component.html',
  styleUrls: ['./task-info-reactive.component.scss']
})
export class TaskInfoReactiveComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }
  addTaskForm = this.formBuilder.group({
    taskName: ['', [Validators.required,Validators.minLength(4)]],
    taskType: ['',[Validators.required]],
    taskStatus: ['',[Validators.required]],
    assignedBy: ['',[Validators.required]],
    assignedTo: ['',[Validators.required]],
    duration: ['',[Validators.required]],
  });

  onSubmit() {
    if(this.addTaskForm.valid) {
      console.log(this.addTaskForm.value);
      alert("Add Task Form Validation Success")
    }else{
      alert("Add Task Form Validation Failed!! Please Enter All Values")
    }
  }
}
