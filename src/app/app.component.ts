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
  isFinished = false;
  @ViewChild('In1') input1: ElementRef;
  @ViewChild('In2') input2: ElementRef;
  @ViewChild('In3') input3: ElementRef;
  @ViewChild('In4') input4: ElementRef;
  @ViewChild('In5') input5: ElementRef;
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

  // 

  stopImageNumberDinamyc = 0;

  constructor() {
  }

  ngOnInit() {
    this.getWinnerNumbers();
    // this.jqueryFunction();
  }

  jqueryFunction() {
    $(document).ready(function () {
      this.option = {
        speed: 2,
        duration: 10,
        stopImageNumber: this.stopImageNumberDinamyc,
      };


      $('#playButton').click(function () {
        // $('div.roulette').roulette(this.option);

      });
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

  onSearchChange(value: number) {
    switch (value) {
      case 0:
        if (!this.numbrer2) {
          this.input2.nativeElement.focus();
        } else {
          this.numbrer2 = '';
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
        this.input1.nativeElement.focus();
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

  play() {
    this.isPlay = true;
    this.isFinished = false;

    this.completeCode = this.numbrer1.toString() + this.numbrer2.toString() + this.numbrer3.toString() +
      this.numbrer4.toString() + this.numbrer5.toString();
    console.log(this.completeCode);
    console.log(this.winnerNumber1, this.winnerNumber2, this.winnerNumber3);
    if (this.completeCode !== this.winnerNumber1.toString() && this.completeCode !== this.winnerNumber2.toString() &&
      this.completeCode !== this.winnerNumber3.toString()) {
      console.log('Sigue intentando');
      this.option = {
        speed: 30,
        duration: 10,
        stopImageNumber: 0,
      };

      $('div.roulette')
        .roulette('option', this.option)
        .roulette('start');
      setTimeout(() => {
        $('div.roulette').roulette('stop');
        this.isPlay = false;
        this.isFinished = true;
      }, 5000);
      // alert('Sigue intentando');
    } else {
      this.option = {
        speed: 30,
        duration: 10,
        stopImageNumber: 2,
      };

      $('div.roulette')
        .roulette('option', this.option)
        .roulette('start');
      setTimeout(() => {
        $('div.roulette').roulette('stop');
        this.isPlay = false;
        this.isFinished = true;
      }, 5000);
      console.log('Numero ganador!!!');
      alert('GANASTE!!');
    }
    this.numbrer1 = '';
    this.numbrer2 = '';
    this.numbrer3 = '';
    this.numbrer4 = '';
    this.numbrer5 = '';
  }

}
