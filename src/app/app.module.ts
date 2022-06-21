import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLoanComponent } from './home-loan/home-loan.component';
import { PersonalLoanComponent } from './personal-loan/personal-loan.component';
import { CarLoanComponent } from './car-loan/car-loan.component';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path:'HomeLoan',component:HomeLoanComponent},
  {path:'PersonalLoan',component:PersonalLoanComponent},
  {path:'CarLoan',component:CarLoanComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeLoanComponent,
    PersonalLoanComponent,
    CarLoanComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
