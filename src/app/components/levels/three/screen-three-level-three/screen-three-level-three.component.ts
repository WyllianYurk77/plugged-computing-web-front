import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../../toast.service';

@Component({
  selector: 'app-screen-three-level-three',
  templateUrl: './screen-three-level-three.component.html',
  styleUrls: ['./screen-three-level-three.component.css']
})
export class ScreenThreeLevelThreeComponent implements OnInit {

  btnClass1: string = "";

  imageRef: number | undefined;

  attempts: number = 0;

  question: string = "Ao invés de 1 e 0, poderíamos usar outros códigos para representar cartões virados ou não. Considerando isso, que valor decimal representariam esses códigos? Tente lembrar a quantidade de pontos em cada cartão para fazer essa conversão.";

  answer: any;

  constructor(private router: Router, public toastService: ToastService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.createForm();
    this.imageRef = 1;
  }

  createForm() {
    this.answer = this.fb.group({
      text: ['', [Validators.required]]
    });
  }

  changeAnswers(value: string): void {
    if(value === "9" && this.imageRef === 1) {
        this.buttonClass(true);
        setTimeout(() => {
          this.question = "Que número decimal está sendo representado por esses códigos?";
          this.createForm();
          this.imageRef = 2;
        },1000);
    } else if(value === "10" && this.imageRef === 2) {
        this.buttonClass(true);
        setTimeout(() => {
          this.createForm();
          this.imageRef = 3;
        },1000);
    } else if(value === "5" && this.imageRef === 3) {
        this.buttonClass(true);
        setTimeout(() => {
          this.createForm();
          this.imageRef = 4;
        },1000);
    } else if(value === "11" && this.imageRef === 4) {
        this.buttonClass(true);
        setTimeout(() => {
          this.createForm();
          this.imageRef = 5;
        },1000);
    } else if(value === "0" && this.imageRef === 5) {
        this.buttonClass(true);
        setTimeout(() => {
          this.createForm();
          this.imageRef = 6;
        },1000);
    } else if(value === "17" && this.imageRef === 6) {
        this.buttonClass(true);
        setTimeout(() => {
          this.createForm();
          this.imageRef = 7;
        },1000);
    } else if(value === "2" && this.imageRef === 7) {
        this.buttonClass(true);
        setTimeout(() => {
          this.createForm();
          this.imageRef = 8;
        },1000);
    } else if(value === "0" && this.imageRef === 8) {
        this.buttonClass(true);
        setTimeout(() => {
          this.createForm();
          this.imageRef = 9;
        },1000);
    } else if(value === "20" && this.imageRef === 9) {
        this.buttonClass(true);
        setTimeout(() => {
          this.createForm();
          this.imageRef = 10;
        },1000);
    } else if(value === "31" && this.imageRef === 10) {
        this.buttonClass(true);
        setTimeout(() => {
          this.router.navigate(['fase-3-4']);
        },1000);
    } else {
      this.buttonClass(false);
      this.toastService.show('Tente outra vez.');
      this.attempts += 1;
      console.log(this.attempts);
    }
  }

  buttonClass(status: boolean): void {
    this.btnClass1 = status ? "correct" : "incorrect";
    setTimeout(() => {this.btnClass1 = "";},1000);
  }

}
