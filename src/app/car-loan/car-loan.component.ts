import { Component, OnInit } from '@angular/core';
import{Router, RouterModule} from '@angular/router';
@Component({
  selector: 'app-car-loan',
  templateUrl: './car-loan.component.html',
  styleUrls: ['./car-loan.component.css']
})
export class CarLoanComponent implements OnInit {

  constructor(private router:Router) { }
  
  onBack():void{
    this.router.navigate(['/HomeLoan']);
  }
  ngOnInit(): void {

  }
  data:any;
  sendData(){
    this.data = (<HTMLInputElement>document.getElementById("amount")).value;
    this.router.navigate(['/Result'],{state:{data:this.data}});
  }

}