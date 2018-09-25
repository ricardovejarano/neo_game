import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

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

  constructor() {

  }

  ngOnInit() {

  }

  onSearchChange(value: number) {
    switch (value) {
      case 0:
        if (!this.numbrer2) {
          this.input2.nativeElement.focus();
        }
        break;
      case 1:
        if (!this.numbrer3) {
          this.input3.nativeElement.focus();
        }
        break;
      case 2:
        if (!this.numbrer4) {
          this.input4.nativeElement.focus();
        }
        break;
      case 3:
        if (!this.numbrer5) {
          this.input5.nativeElement.focus();
        }
        break;
      case 4:
        break;
    }
  }

  play() {
    this.completeCode = this.numbrer1.toString() + this.numbrer2.toString() + this.numbrer3.toString() + 
    this.numbrer4.toString() + this.numbrer5.toString();
    console.log('Número a sortear', this.completeCode);
  }

}
