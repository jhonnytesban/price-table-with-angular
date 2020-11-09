import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // moneyBasic: number = 19.99

  @Input() moneyBasic
  @Input() moneyProfessional
  @Input() moneyMaster

  constructor() {
    
   }

  ngOnInit(): void {
  }



}
