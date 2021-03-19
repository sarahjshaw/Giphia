import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  chooseAvatar = new Subject<string>();
}
