import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  email : string = "";
  message : string = "";

  constructor() { }

  ngOnInit(): void {
  }
  send() :void{
    window.alert(this.email + "\n" +"Message:" + "\n" +this.message)
  }

}
