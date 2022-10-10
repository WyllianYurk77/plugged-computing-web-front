import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-three',
  templateUrl: './screen-three.component.html',
  styleUrls: ['./screen-three.component.css']
})
export class ScreenThreeComponent implements OnInit {

  question: string = "O que você percebeu sobre o número de pontos nos cartões?"

  answers: string[] = ["Possuem metade do valor anterior", "São valores aleatórios", "São a soma do próximo com o anterior", "Estão em ordem crescente"];

  constructor(private router: Router) {
    //this.answers = ["Possuem metade do valor anterior", "São valores aleatórios", "São a soma do próximo com o anterior", "Estão em ordem crescente"];
  }

  ngOnInit(): void {
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
  }

}
