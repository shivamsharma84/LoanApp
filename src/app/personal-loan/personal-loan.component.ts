import { Component, OnInit } from '@angular/core';
import{Router, RouterModule} from '@angular/router';
@Component({
  selector: 'app-personal-loan',
  templateUrl: './personal-loan.component.html',
  styleUrls: ['./personal-loan.component.css']
})
export class PersonalLoanComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  data:any;
  sendData(){
    this.data = (<HTMLInputElement>document.getElementById("amount")).value;
    this.router.navigate(['/Result'],{state:{data:this.data}});
  }
}
