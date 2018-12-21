import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { ValidateService } from '../../services/validate.service'
import { Observable } from 'rxjs';

import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';



@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {
  name:string = 'John Snow';
  logform:LogForm;
  lgform:LgForm;
  posts:Post[];

  constructor(
    private dataService:DataService,
    private validateService:ValidateService
  ) { 
    console.log('constructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit ran...');

    this.name = 'Ned Stark';
    let count:any;
    this.logform = {
      username: "",
      login: ""
    }
    
    this.lgform = {
      uname: "",
      lin: ""
    }

    // Getting posts service
    this.dataService.getPosts().subscribe((posts) => {
      // console.log(posts)
      this.posts = posts;
    });

    // Button click handling
    const button = document.getElementById('button_submit');
    
    fromEvent(button, 'click').pipe(
      scan(count => count + 1, 0)
    )
    .subscribe((count) => console.log(`ValarMorghulis ${count} times`));


    // Validation Service
    const validFormBtn = document.getElementById('validateForm');
    const clicks = fromEvent(validFormBtn, 'click');
    clicks.pipe(this.validateService.getForms(uname, lin))
    .subscribe((uname, lin) => 
      {
        this.lgform.uname = uname;
        this.lgform.lin = lin;
        console.log('validateService runs...');
      });
  }

  onClick(username, login) {
    this.logform.username = username;
    this.logform.login = login;
    console.log('Submit ran...');
    if((this.logform.username || this.logform.login) == '') {
      return alert('Fill both forms, please.')
    }
        alert(this.logform.username + "  " + this.logform.login);
  }

  changeName() {
    console.log('changeName ran...');
    if (this.name === "Arya Stark") {
      this.name = 'John Snow'
    } else {
      this.name = 'Arya Stark'
    };
  }
}

interface LogForm{
  username:string,
  login:string
}

interface LgForm{
  uname:string,
  lin:string
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}