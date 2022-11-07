import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private broadcastMessage=new BehaviorSubject<string>("This is the first message");
broadcast=this.broadcastMessage.asObservable();
  constructor() { }

  UpdateBroadcastMessage(newMessage:string)
  {
    this.broadcastMessage.next(newMessage);
  }
}
