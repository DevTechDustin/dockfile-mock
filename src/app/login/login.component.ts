import { LoggerService } from '../services/logger.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'DocFile Mockup';
  constructor(private router: Router, private logger: LoggerService) { }

  username: string;
  password: string;

  ngOnInit() {
  }

  login(): void {
      this.logger.log('username entered: ' + this.username + '\npassword entered: ' + this.password);
    if (this.username == 'admin' && this.password == 'admin'){
      this.router.navigate(['user']);
    } else {
      alert('Invalid Credentials');
    }
    }
  }

