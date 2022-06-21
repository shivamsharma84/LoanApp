import { Component, OnInit } from '@angular/core';
import{Router, RouterModule} from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private router:Router) { }
  onBack():void{
    this.router.navigate(['Result']);
  }
  data:any;
  ngOnInit(): void {
    this.data = 13*(history.state.data);
  }

}
