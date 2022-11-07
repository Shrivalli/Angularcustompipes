import { Component, OnInit } from '@angular/core';
import {filter,map} from 'rxjs/operators';
import { of, Observable, pipe } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
 // numbers:number[]
  broadcastMessage:string;
  constructor(private user:UserService) { 
   // this.numbers=[];
  }

  ngOnInit() {
    this.user.broadcast.subscribe(broadcast=>this.broadcastMessage=broadcast)
  }
  
  BroadcastnewMessage(newBroadcastMessage: HTMLInputElement)
  {
    this.user.UpdateBroadcastMessage(newBroadcastMessage.value);
    newBroadcastMessage.value="";
    newBroadcastMessage.focus();
  }



//   fn1()
//   {
//   const nums = of (1, 2, 3);
// const mulValues = map ((val: number) => val * 2);
// const mulNums = mulValues (nums);
// //console.log(mulNums.subscribe(x=>x));
// //mulNums.subscribe(x=>console.log(x));
// mulNums.subscribe(x=>this.numbers.push(x));
//   }

//   fn2()
//   {
//     const mulEven = of (1, 2, 3, 4, 5)
// . pipe (
// filter (n => n % 2 === 0),
// map (n => n * 2)
// );

// // Subscribe to get values
// //mulEven.subscribe(x => console.log(x));
// mulEven.subscribe(x=> this.numbers.push(x))

// //    const nums = of (1, 2, 3, 4, 5);
// // // A function that accepts an Observable.
// // const mulEvenVals = pipe (
// // filter ((n: number) => n % 2 === 0),
// // map (n => n * 2)
// // );
// // // Let’s create an Observable that will run the filter and map functions
// // const uneven = mulEvenVals(nums);
// // // Subscribe to run the combined functions
// // //uneven.subscribe(x => console.log(x));
// // uneven.subscribe(x=> this.numbers.push(x));
//   }

}
