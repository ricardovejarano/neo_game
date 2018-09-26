import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// import * as $ from 'jquery';

declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  option;
  isLoser = false;
  isWinner = false;

  @ViewChild('In1') input1: ElementRef;
  @ViewChild('In2') input2: ElementRef;
  @ViewChild('In3') input3: ElementRef;
  @ViewChild('In4') input4: ElementRef;
  @ViewChild('In5') input5: ElementRef;
  @ViewChild('In10') inputHidden: ElementRef;
  numbrer1;
  numbrer2;
  numbrer3;
  numbrer4;
  numbrer5;
  completeCode = '';

  // Contraseña de administrador
  adminPass = '';
  correctAdminPass = 'admin';
  flagAdmin = false;
  isPlay = false;
  // Variables de premio
  premio1 = 'Sigue intentando 1';
  premio2 = 'Sigue intentando 2';
  premio3 = 'Viaje a Dubai';
  premio4 = 'Viaje a Buga';

  // Numeros ganadores
  winnerNumber1 = '';
  winnerNumber2 = '';
  winnerNumber3 = '';


  constructor() {
  }

  ngOnInit() {
    this.getWinnerNumbers();
    this.jqueryFunction();
  }

  jqueryFunction() {
    $(document).ready(function () {
      this.option = {
        speed: 15,
        duration: 7,
        stopImageNumber: 0,
      };
      $('div.roulette')
        .roulette('option', this.option);
    });
  }

  getWinnerNumbers() {
    if (localStorage.getItem('winner1')) {
      this.winnerNumber1 = localStorage.getItem('winner1');
    }
    if (localStorage.getItem('winner2')) {
      this.winnerNumber2 = localStorage.getItem('winner2');
    }
    if (localStorage.getItem('winner3')) {
      this.winnerNumber3 = localStorage.getItem('winner3');
    }
  }

  play() {
    this.isPlay = true;
    this.isWinner = false;
    this.isLoser = false;

    // completeCode has the code entry by the client
    this.completeCode = this.numbrer1.toString() + this.numbrer2.toString() + this.numbrer3.toString() +
      this.numbrer4.toString() + this.numbrer5.toString();

    // If is not the winner code  
    if (this.completeCode !== this.winnerNumber1.toString() && this.completeCode !== this.winnerNumber2.toString() &&
      this.completeCode !== this.winnerNumber3.toString()) {
      const randomLose = Math.floor(Math.random() * ((4 - 1) + 1) + 1);
      console.log('Codigo incorrecto', randomLose);
      this.option = {
        speed: 15,
        duration: 7,
        stopImageNumber: randomLose,
      };

      $('div.roulette')
        .roulette('option', this.option)
        .roulette('start');
      setTimeout(() => {
        // $('div.roulette').roulette('stop');
        if (randomLose !== 4) {
          this.isLoser = true;
        } else {
          this.isWinner = true;
        }
        this.isPlay = false;

      }, 7000);

    } else {

      const randomWin = Math.floor(Math.random() * ((6 - 5) + 1) + 5);
      console.log('Codigo correcto', randomWin);
      this.option = {
        speed: 15,
        duration: 7,
        stopImageNumber: randomWin,
      };

      $('div.roulette')
        .roulette('option', this.option)
        .roulette('start');
      setTimeout(() => {
        // $('div.roulette').roulette('stop');
        this.isPlay = false;
        this.isWinner = true;
      }, 7000);
      console.log('Numero ganador!!!');
    }
  }

  onSearchChange(value: number) {
    switch (value) {
      case 0:
        if (!this.numbrer2) {
          this.input2.nativeElement.focus();
        } else {
          // this.numbrer1 = '';
          this.numbrer2 = '';
          this.numbrer3 = '';
          this.numbrer4 = '';
          this.numbrer5 = '';
          this.input2.nativeElement.focus();
        }
        break;
      case 1:
        if (!this.numbrer3) {
          this.input3.nativeElement.focus();
        } else {
          this.numbrer3 = '';
          this.input3.nativeElement.focus();
        }
        break;
      case 2:
        if (!this.numbrer4) {
          this.input4.nativeElement.focus();
        } else {
          this.numbrer4 = '';
          this.input4.nativeElement.focus();
        }
        break;
      case 3:
        if (!this.numbrer5) {
          this.input5.nativeElement.focus();
        } else {
          this.numbrer5 = '';
          this.input5.nativeElement.focus();
        }
        break;
      case 4:
        this.input5.nativeElement.blur();
        break;
    }
  }

  onFocus(value: Number) {
    switch (value) {
      case 0:
        this.numbrer1 = '';
        break;
      case 1:
        this.numbrer2 = '';
        break;
      case 2:
        this.numbrer3 = '';
        break;
      case 3:
        this.numbrer4 = '';
        break;
      case 4:
        this.numbrer5 = '';
        break;
    }
  }

  verifyPass() {
    if (this.adminPass === this.correctAdminPass) {
      this.flagAdmin = true;
    } else {
      alert('Contraseña incorrecta');
    }
  }

  saveNumbers() {
    localStorage.setItem('winner1', this.winnerNumber1);
    localStorage.setItem('winner2', this.winnerNumber2);
    localStorage.setItem('winner3', this.winnerNumber3);
    alert('Numeros guardados satisfactoriamente');
    this.adminPass = '';
    this.flagAdmin = false;
  }

}
