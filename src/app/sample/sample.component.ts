import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
broadcastMessage:string;
  constructor(private user:UserService)
  {}

  ngOnInit() {
    this.user.broadcast.subscribe(broadcast=>this.broadcastMessage=broadcast)
  }

}
