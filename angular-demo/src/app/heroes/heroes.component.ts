import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
  testVar = 'test';

  constructor() { }

  ngOnInit() {
  }

  test() { }

  test2() {
    alert('i am test2');
  }

}
