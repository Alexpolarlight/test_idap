import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  profileForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  })

  onSubmit() {
    alert("Valar Morghulis!");
  }

  constructor() { }

  ngOnInit() {
  }

}
