import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  empForm:FormGroup;
  Roles=['Admin','Manager','Employee']
  Departments=['DevOps','HR','Analyst']
  constructor() {
    this.empForm=new FormGroup({
    EmployeeId: new FormControl(null,Validators.required),
    FirstName: new FormControl(null,Validators.required),
    LastName: new FormControl(null,Validators.required),
    MangerId: new FormControl(null,Validators.required),
    Email: new FormControl(null,Validators.email),
    Role: new FormControl(null,Validators.required),
    Dept: new FormControl(null,Validators.required)
    })
    
   }

  ngOnInit() {
  }
  isValid(controlName)
  {
    return this.empForm.get(controlName).invalid || this.empForm.get(controlName).untouched;
  }

  submit()
  {
    if(this.empForm.valid)
    {
      console.log('it is valid');
      console.log(this.empForm.value);
    
    }
    else{
      console.log('All fileds mandatory');
    }
  }
  clear()
  {
    this.empForm.reset();
  }
}
