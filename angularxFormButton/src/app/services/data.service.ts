import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import  'rxjs/add/operator/map';
import * as rxjs from 'rxjs/operators';
// import { map } from 'rxjs/add/operator/map';
import { Observable } from 'rxjs';


import { map } from 'rxjs/operators'
import { OperatorFunction } from 'rxjs';
import { Response } from '@angular/http';


const toJSON: OperatorFunction<Response, any> = map(res => res.json());

@Injectable()

export class DataService {

  constructor(public http:Http) { 
    console.log('Data service connected...')
  }


  getPosts(){
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(toJSON);
  }
}