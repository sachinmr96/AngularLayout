import { Component } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AnngularLayout';
  url=''
  constructor(private router:Router){
    this.url=router.url;
    console.log(this.url);
  }
}
