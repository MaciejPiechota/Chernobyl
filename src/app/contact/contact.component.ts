import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  myForm: FormGroup;
  post: any;
  constructor(private fb: FormBuilder) {
    this.myForm = fb.group({
      name: [
        null,
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.email
        ])
      ],
      message: [
        null,
        Validators.compose([Validators.required, Validators.minLength(10)])
      ]
    });
  }

  ngOnInit() {}
}
