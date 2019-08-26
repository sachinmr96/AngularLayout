import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  addEmployee()
  {
    console.log('clicking........');
    this._router.navigate(['/AddEmployee'],{relativeTo:this._activatedRoute})
  }
  open(menu){
    menu.openMenu();
    }

}
