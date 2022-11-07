import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../../toast.service';

@Component({
  selector: 'app-screen-three-level-four',
  templateUrl: './screen-three-level-four.component.html',
  styleUrls: ['./screen-three-level-four.component.css']
})
export class ScreenThreeLevelFourComponent implements OnInit {

  btnClass1: string = "";

  imageRef: number | undefined;

  attempts: number = 0;

  question: string = "Você pode identificar a mensagem enviada por Tom? Lembre-se de converter a combinação binária para decimal e fique atento pois as luzes apagadas representam o bit 0 e as luzes acesas representam o bit 1. Qual o decimal correspondente a esta configuração de lâmpadas?";

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
    if(value === "1" && this.imageRef === 1) {
        this.buttonClass(true);
        setTimeout(() => {
          this.question = "Qual o número decimal correspondente a esta configuração de lâmpadas?";
          this.createForm();
          this.imageRef = 2;
        },1000);
    } else if(value === "10" && this.imageRef === 2) {
        this.buttonClass(true);
        setTimeout(() => {
          this.createForm();
          this.imageRef = 3;
        },1000);
    } else if(value === "21" && this.imageRef === 3) {
        this.buttonClass(true);
        setTimeout(() => {
          this.createForm();
          this.imageRef = 4;
        },1000);
    } else if(value === "4" && this.imageRef === 4) {
        this.buttonClass(true);
        setTimeout(() => {
          this.createForm();
          this.imageRef = 5;
        },1000);
    } else if(value === "5" && this.imageRef === 5) {
        this.buttonClass(true);
        setTimeout(() => {
          this.createForm();
          this.imageRef = 6;
        },1000);
    } else if(value === "5" && this.imageRef === 6) {
        this.buttonClass(true);
        setTimeout(() => {
          this.createForm();
          this.imageRef = 7;
        },1000);
    } else if(value === "19" && this.imageRef === 7) {
        this.buttonClass(true);
        setTimeout(() => {
          this.createForm();
          this.imageRef = 8;
        },1000);
    } else if(value === "20" && this.imageRef === 8) {
        this.buttonClass(true);
        setTimeout(() => {
          this.createForm();
          this.imageRef = 9;
        },1000);
    } else if(value === "15" && this.imageRef === 9) {
        this.buttonClass(true);
        setTimeout(() => {
          this.createForm();
          this.imageRef = 10;
        },1000);
    } else if(value === "21" && this.imageRef === 10) {
        this.buttonClass(true);
        setTimeout(() => {
          this.createForm();
          this.imageRef = 11;
        },1000);
    } else if(value === "16" && this.imageRef === 11) {
        this.buttonClass(true);
        setTimeout(() => {
          this.createForm();
          this.imageRef = 12;
        },1000);
    } else if(value === "18" && this.imageRef === 12) {
        this.buttonClass(true);
        setTimeout(() => {
          this.createForm();
          this.imageRef = 13;
        },1000);
    } else if(value === "5" && this.imageRef === 13) {
        this.buttonClass(true);
        setTimeout(() => {
          this.createForm();
          this.imageRef = 14;
        },1000);
    } else if(value === "19" && this.imageRef === 14) {
        this.buttonClass(true);
        setTimeout(() => {
          this.createForm();
          this.imageRef = 15;
        },1000);
    } else if(value === "15" && this.imageRef === 15) {
        this.buttonClass(true);
        setTimeout(() => {
          this.question = "Esses foram os números que você selecionou: 1 10 21 4 5 &nbsp;&nbsp; 5 19 20 15 21 &nbsp;&nbsp; 16 18 5 19 15. Agora vamos traduzir a mensagem do Tom?";
          this.createForm();
          this.imageRef = 16;
        },1000);
    } else if(value.toLowerCase() === "ajude estou preso" && this.imageRef === 16) {
        this.buttonClass(true);
        setTimeout(() => {
          this.router.navigate(['fase-4-4']);
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
