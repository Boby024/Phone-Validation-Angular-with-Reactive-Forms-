import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.css']
})
export class FormularComponent implements OnInit {
formsInfos = this.fb.group({
  name: ['', Validators.required],
  phone: ['', [
    Validators.pattern('^[ \s\+\s\/0-9]*$'),
    Validators.minLength(4), Validators.maxLength(10), Validators.required] ]
});
  inputChar: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  // only number will be add
  keyPress(event) {
    const pattern = /[0-9\+\-\ ]/;
    // this.inputChar = String.fromCharCode(event.charCode);
    this.inputChar = event.key || String.fromCharCode(event.which);
   //  console.log(String.fromCharCode(event.which));
    if (event.keypress !== 8 && !pattern.test(this.inputChar)) {
      event.preventDefault();
    }
  }
  onpPaste(event) {
    this.inputChar = (event.clipboardData ).getData('text');
    const character = this.inputChar.split('');
    console.log(character);
    character.forEach(char => this.checker(char, event));
  }
  onDrop(event) {
    const text = event.dataTransfer.getData('text');
    const splitedText = text.split('');
    splitedText.forEach(char => this.checker(char, event));
  }
  checker(char: string, event) {
    const pattern = /[0-9\+\-\ ]/;
    if ( !pattern.test(char)) {
      event.preventDefault();
    }
  }
  get phone() { return this.formsInfos.get('phone'); }
  onSubmit() {
    console.log(this.formsInfos.value);
  }

}
