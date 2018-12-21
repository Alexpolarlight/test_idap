import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() {
    console.log("Validate service connected...")    
  }

  // const validateForm: OperatorFunction<Response, any> = map();

  getForms(uname, lin){
    console.log('ValidateService ran...');
    if((uname || lin) == '') {
      return alert('Fill both forms, please.')
    }
        alert(uname + "  " + lin);
  }
}
