import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-screen-three',
  templateUrl: './screen-three.component.html',
  styleUrls: ['./screen-three.component.css'],
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
export class ScreenThreeComponent implements OnInit {

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

  question: string = "O que você percebeu sobre o número de pontos nos cartões?";

  answers: string[] = ["Possuem metade do valor anterior", "São valores aleatórios", "São a soma do próximo com o anterior", "Estão em ordem crescente"];

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.answers.sort(() => Math.random() - 0.5);
  }

  toggleFlip(card:number): void {
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

  changeAnswers(value: string) {
    if(value === "Possuem metade do valor anterior") {
      this.answers = ["24", "20", "32", "18"];
      this.question = "Quantos pontos teria o próximo cartão à esquerda?";
    }
    if(value === "32") {
      this.answers = ["01101", "10001", "10011", "01001"];
      this.question = "Como seria o número 17 em binário? <br> Dica: veja os números abaixo dos cartões.";
    }
    if(value === "10001") {
      this.router.navigate(['fase-1-4']);
    }
    this.answers.sort(() => Math.random() - 0.5);
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

}
