import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../toast.service';

@Component({
  selector: 'app-screen-three-level-six',
  templateUrl: './screen-three-level-six.component.html',
  styleUrls: ['./screen-three-level-six.component.css']
})
export class ScreenThreeLevelSixComponent implements OnInit {

  btnClass1: string = "";
  btnClass2: string = "";
  btnClass3: string = "";
  btnClass4: string = "";
  btnClass5: string = "";

  imageRef: number | undefined;

  attempts: number = 0;

  question: string = "Utilizando apenas uma mão, qual a representação do número de 30 em binário?";

  answers: string[] = ["11110", "11101", "01001", "01111"];

  constructor(private router: Router, public toastService: ToastService) {

  }

  ngOnInit(): void {
    this.answers.sort(() => Math.random() - 0.5);
    this.imageRef = 1;
  }

  changeAnswers(value: string, btn: number): void {
    if(value === "11110" && this.imageRef === 1) {
      this.buttonClass(btn, true);
      setTimeout(() => {
        this.answers = ["080", "111", "394", "691"];
        this.question = "Agora com as duas mãos converta o número 1010110011 para decimal.";
        this.answers.sort(() => Math.random() - 0.5);
        this.imageRef = 2;
      },1000);
    } else if(value === "691" && this.imageRef === 2) {
        this.buttonClass(btn, true);
        setTimeout(() => {
          this.answers = ["32.768", "1.048.575", "33.554.432", "1.073.741"];
          this.question = "Se os dedos dos seus pés forem realmente flexíveis, seria possível obter números ainda maiores. Qual o maior número que se poderia contar utilizando seus 20 dedos?";
          this.answers.sort(() => Math.random() - 0.5);
          this.imageRef = 3;
        },1000);
    } else if(value === "1.048.575" && this.imageRef === 3) {
        this.buttonClass(btn, true);
        setTimeout(() => {
          this.router.navigate(['fase-6-4']);
        },1000);
    } else {
      this.buttonClass(btn, false);
    }
  }

  pickAnswer(answer: string): void {
    if(answer !== "11110" && answer !== "691" && answer !== "1.048.575") {
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
