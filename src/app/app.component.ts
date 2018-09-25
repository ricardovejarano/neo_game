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

  constructor() {

  }

  ngOnInit() {

  }

  onSearchChange(value: number) {
    switch (value) {
      case 0:
      console.log('Entra', value);
        this.input2.nativeElement.focus();
        break;
      case 1:
        this.input3.nativeElement.focus();
        break;
      case 2:
        this.input4.nativeElement.focus();
        break;
      case 3:
        this.input5.nativeElement.focus();
        break;
      case 4:
        break;

    }
  }

  play() {
    console.log('Se sortea al juego');
  }

}
