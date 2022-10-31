import { ToastService } from '../../toast.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-screen-three-level-two',
  templateUrl: './screen-three-level-two.component.html',
  styleUrls: ['./screen-three-level-two.component.css'],
  animations: [
    trigger('flipState', [
      state(
        'active',
        style({
          transform: 'rotateY(179deg)',
        })
      ),
      state(
        'inactive',
        style({
          transform: 'rotateY(0)',
        })
      ),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in')),
    ]),
  ]
})
export class ScreenThreeLevelTwoComponent implements OnInit {

  flip1: string = 'inactive';
  flip2: string = 'active';
  flip4: string = 'active';
  flip8: string = 'inactive';
  flip16: string = 'active';

  byn1: number = 1;
  byn2: number = 0;
  byn4: number = 0;
  byn8: number = 1;
  byn16: number = 0;

  btnClass1: string = "";
  btnClass2: string = "";
  btnClass3: string = "";
  btnClass4: string = "";
  btnClass5: string = "";

  inputType: boolean = false;

  attempts: number = 0;

  question: string = "A sequência em binário 10011 corresponde a que número decimal?";

  answers: string[] = ["19", "5", "13", "7"];

  answer: any;

  constructor(private router: Router, public toastService: ToastService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.createForm();
    this.answers.sort(() => Math.random() - 0.5);
  }

  createForm() {
    this.answer = this.fb.group({
      text: ['', [Validators.required]]
    });
  }

  toggleFlip(card: number): void {
    if(card == 1) {
      this.flip1 = (this.flip1 == 'inactive') ? 'active' : 'inactive';
    } else if(card == 2) {
      this.flip2 = (this.flip2 == 'inactive') ? 'active' : 'inactive';
    } else if(card == 4) {
      this.flip4 = (this.flip4 == 'inactive') ? 'active' : 'inactive';
    } else if(card == 8) {
      this.flip8 = (this.flip8 == 'inactive') ? 'active' : 'inactive';
    } else if(card == 16) {
      this.flip16 = (this.flip16 == 'inactive') ? 'active' : 'inactive';
    }
    this.toggleBynaries();
  }

  changeAnswers(value: string, btn: number): void {
    if(value === "19") {
      this.buttonClass(btn, true);
      setTimeout(() => {
        this.answers = ["01101 e 00011", "10011 e 01101", "00011 e 01100", "01001 e 10001"];
        this.question = "Os números 3 e 12 correspondem respectivamente à:";
        this.answers.sort(() => Math.random() - 0.5);
      },1000);
    } else if(value === "00011 e 01100") {
        this.buttonClass(btn, true);
        setTimeout(() => {
          this.question = "Qual é o MAIOR número decimal que você pode formar utilizando esses cinco cartões?";
          this.inputType = true;
        },1000);
    } else if(value === "31") {
        this.buttonClass(btn, true);
        setTimeout(() => {
          this.question = "Ainda utilizando os cartões, qual é o MENOR número decimal que você pode formar?";
          this.createForm();
          this.inputType = true;
        },1000);
    } else if(value === "0") {
      this.buttonClass(btn, true);
      setTimeout(() => {
        this.router.navigate(['fase-2-4']);
      },1000);
    } else {
      this.buttonClass(btn, false);
    }
  }

  toggleBynaries():void {
    if(this.flip1 === 'active') {
      setTimeout(()=> {this.byn1 = 0;},400);
    } else {
      setTimeout(()=> {this.byn1 = 1;},400);
    }

    if(this.flip2 === 'active') {
      setTimeout(()=> {this.byn2 = 0;},400);
    } else {
      setTimeout(()=> {this.byn2 = 1;},400);
    }

    if(this.flip4 === 'active') {
      setTimeout(()=> {this.byn4 = 0;},400);
    } else {
      setTimeout(()=> {this.byn4 = 1;},400);
    }

    if(this.flip8 === 'active') {
      setTimeout(()=> {this.byn8 = 0;},400);
    } else {
      setTimeout(()=> {this.byn8 = 1;},400);
    }

    if(this.flip16 === 'active') {
      setTimeout(()=> {this.byn16 = 0;},400);
    } else {
      setTimeout(()=> {this.byn16 = 1;},400);
    }
  }

  pickAnswer(answer: string): void {
    if(answer !== "19" && answer !== "00011 e 01100" && answer !== "31" && answer !== "0") {
      this.toastService.show('Tente outra vez.');
      this.attempts += 1;
      console.log(this.attempts);
    }
  }

  buttonClass(button: number, status: boolean): void {
    if(button == 1) {
      this.btnClass1 = status ? "correct" : "incorrect";
      setTimeout(() => {this.btnClass1 = "";},1000);
    }
    if(button == 2) {
      this.btnClass2 = status ? "correct" : "incorrect";
      setTimeout(() => {this.btnClass2 = "";},1000);
    }
    if(button == 3) {
      this.btnClass3 = status ? "correct" : "incorrect";
      setTimeout(() => {this.btnClass3 = "";},1000);
    }
    if(button == 4) {
      this.btnClass4 = status ? "correct" : "incorrect";
      setTimeout(() => {this.btnClass4 = "";},1000);
    }
    if(button == 5) {
      this.btnClass5 = status ? "correct" : "incorrect";
      setTimeout(() => {this.btnClass5 = "";},1000);
    }
  }

}
