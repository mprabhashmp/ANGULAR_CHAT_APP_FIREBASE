import { Injectable } from '@angular/core';
import { EnvironmentService } from '../environment.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private angularFireAuth:EnvironmentService ) {}

  
}
