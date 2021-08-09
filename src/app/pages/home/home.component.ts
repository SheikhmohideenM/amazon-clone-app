import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  firstUrl:string = "../../../assets/images/hp/hp-1.jpg";
  firstColumn(firstEvent:any){
   this.firstUrl = firstEvent.target.src;
  }

  secondUrl:string = "../../../assets/images/lenovo/lenovo-1.jpg";
  secondColumn(secondEvent:any){
    this.secondUrl = secondEvent.target.src;
  }

  thirdUrl:string = "../../../assets/images/mac/mac-1.jpg";
  thirdColumn(thirdEvent:any){
    this.thirdUrl = thirdEvent.target.src;
  }

  fourthUrl:string = "../../../assets/images/dell/dell-1.jpg";
  fourthColumn(fourthEvent:any){
    this.fourthUrl = fourthEvent.target.src;
  }
}
