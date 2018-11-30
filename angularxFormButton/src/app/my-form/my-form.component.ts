import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
    selector: 'my-form-component',
    templateUrl: './my-form.component.html',
    styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {

    profileForm = new FormGroup({
        userName: new FormControl(''),
        password: new FormControl(''),
    })

    onSubmit() {
        alert("Valar Morghulis!");
    }

    ngOnInit() {
    }

}
