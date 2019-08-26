import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu'
import {MatButtonModule,MatInputModule} from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';
import { AdminComponent } from './admin/admin.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { CheckAccessComponent } from './check-access/check-access.component';
import { RouterModule, Routes } from '@angular/router';
import {MatFormFieldModule,MatFormFieldControl} from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'AddEmployee', component: AddEmployeeComponent },
  { path: 'CheckAccess', component: CheckAccessComponent },
  

]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddEmployeeComponent,
    CheckAccessComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatBadgeModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule

  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
