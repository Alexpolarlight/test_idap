import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'my-form-component',
    templateUrl: './my-form.component.html',
    styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {
    name:string = 'Dude'; 
    
    constructor(){};

    onSubmit() {
        alert("Valar Morghulis!");
    }

    ngOnInit() {
        this.name = "Mate";
    }
}
