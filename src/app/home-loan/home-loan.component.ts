import { Component, OnInit } from '@angular/core';
import{Router, RouterModule} from '@angular/router';
@Component({
  selector: 'app-home-loan',
  templateUrl: './home-loan.component.html',
  styleUrls: ['./home-loan.component.css']
})
export class HomeLoanComponent implements OnInit {

  constructor(private router:Router) { 
  }
  
  

  ngOnInit(): void {
  }
  data:any;
  sendData(){
    this.data = (<HTMLInputElement>document.getElementById("amount")).value;
    this.router.navigate(['/Result'],{state:{data:this.data}});
  }

}
