import { Component, OnInit } from '@angular/core';
import { student } from 'src/model/Student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title!: string ;
  priceMax:number=9;
  tabStudent!:student[];

  
  constructor() { }

  ngOnInit(): void {
    this.title="djhgj" ;
    this.tabStudent=[
      {name:"ahmed",age:28,grade:"F",mail:"ahmed@esprit.tn"},
      {name:"ali",age:24,grade:"F",mail:"ali@esprit.tn"},
      {name:"mohamed",age:20,grade:"F",mail:"mohamed@esprit.tn"}
    ];

  }

  show() {
    this.title = 'Bouton cliqué !';
  }
  incrementGrade(i:number){
   
    let grades=["A","B","C","D","E","F"];
    let k=grades.indexOf(this.tabStudent[i].grade);
    k--;
    this.tabStudent[i].grade=grades[k];

  }

}
