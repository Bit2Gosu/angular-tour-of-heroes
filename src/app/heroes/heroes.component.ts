import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less'],
})
export class HeroesComponent implements OnInit {
  heroes?: Hero[];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));

    // const p = new Promise((resolve) => {
    //   console.log('promise executer before');
    //   resolve(42);
    //   console.log('promise executer after');
    // });
    //
    // console.log('a');
    // p.then((value) => {
    //   console.log('received value', value);
    // });
    // console.log('b');
  }

  onSelect(selectedHero: Hero) {
    this.selectedHero = selectedHero;
    this.messageService.add(
      `HeroesComponent: Selected hero id=${selectedHero.id}`
    );
  }
}
