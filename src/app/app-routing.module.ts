import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLoanComponent } from './home-loan/home-loan.component';
import { PersonalLoanComponent } from './personal-loan/personal-loan.component';
import { CarLoanComponent } from './car-loan/car-loan.component';
import { ResultComponent } from './result/result.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'HomeLoan',component:HomeLoanComponent},
  {path:'PersonalLoan',component:PersonalLoanComponent},
  {path:'CarLoan',component:CarLoanComponent},
  {path:'Result',component:ResultComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
