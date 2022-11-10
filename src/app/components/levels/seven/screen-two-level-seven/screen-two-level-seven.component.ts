import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../toast.service';

@Component({
  selector: 'app-screen-two-level-seven',
  templateUrl: './screen-two-level-seven.component.html',
  styleUrls: ['./screen-two-level-seven.component.css']
})
export class ScreenTwoLevelSevenComponent implements OnInit {

  btnClass1: string = "";
  btnClass2: string = "";
  btnClass3: string = "";
  btnClass4: string = "";
  btnClass5: string = "";

  imageRef: number | undefined;

  attempts: number = 0;

  question: string = "O que pode acontece quando você coloca um 0 à direita de um número binário?";

  answers: string[] = ["É dividido por 2", "Nada acontece", "É multiplicado por 10", "O número é dobrado"];

  constructor(private router: Router, public toastService: ToastService) {

  }

  ngOnInit(): void {
    this.answers.sort(() => Math.random() - 0.5);
    this.imageRef = 1;
  }

  changeAnswers(value: string, btn: number): void {
    if(value === "O número é dobrado" && this.imageRef === 1) {
      this.buttonClass(btn, true);
      setTimeout(() => {
        this.answers = ["9", "18", "20", "11"];
        this.question = "Qual número deve estar no lugar da (?) na imagem?";
        this.answers.sort(() => Math.random() - 0.5);
        this.imageRef = 2;
      },1000);
    } else if(value === "18" && this.imageRef === 2) {
        this.buttonClass(btn, true);
        setTimeout(() => {
          this.answers = ["128", "64", "256", "32"];
          this.question = "Um computador precisa de 7 bits para representar todos os caracteres. Isto permite representar até quantos caracteres?";
          this.answers.sort(() => Math.random() - 0.5);
          this.imageRef = 3;
        },1000);
    } else if(value === "128" && this.imageRef === 3) {
        this.buttonClass(btn, true);
        setTimeout(() => {
          this.router.navigate(['fase-7-3']);
        },1000);
    } else {
      this.buttonClass(btn, false);
    }
  }

  pickAnswer(answer: string): void {
    if(answer !== "O número é dobrado" && answer !== "18" && answer !== "128") {
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
