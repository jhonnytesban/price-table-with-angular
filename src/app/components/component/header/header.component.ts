import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  myClass: boolean = true
  button1: string = 'button1'
  button2: string = 'button2'

  moneyBasic: number = 19.99
  moneyProfessional: number = 24.99
  moneyMaster: number = 39.99

  constructor() { }

  ngOnInit(): void {
  }

  change() {
    this.myClass = !this.myClass
    if(this.moneyBasic === 19.99 && this.moneyProfessional === 24.99 && this.moneyMaster === 39.99){
      this.moneyBasic = 199.99
      this.moneyProfessional = 249.99
      this.moneyMaster = 399.99
    }else{
      this.moneyBasic = 19.99
      this.moneyProfessional = 24.99
      this.moneyMaster = 39.99
    }
  }
  


}
