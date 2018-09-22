import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.css']
})

export class PagetwoComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z0-9_-]+$'),
  ]);
}
