import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  public skills: Array<any> = [
    {
      skill: 'GIT',
      cssClass: 'label-success'
    },
    {
      skill: 'REDIS',
      cssClass: 'label-info'
    },
    {
      skill: 'Composer',
      cssClass: 'label-success'
    },
    {
      skill: 'Java',
      cssClass: 'label-primary'
    },
    {
      skill: 'REST',
      cssClass: 'label-default'
    },
    {
      skill: 'HTTP',
      cssClass: 'label-default'
    },
    {
      skill: 'MediaWiki',
      cssClass: 'label-success'
    },
    {
      skill: 'Shopify',
      cssClass: 'label-success'
    },
    {
      skill: 'JavaScript',
      cssClass: 'label-primary'
    },
    {
      skill: 'NPM',
      cssClass: 'label-success'
    },
    {
      skill: 'Angular 2',
      cssClass: 'label-danger'
    },
    {
      skill: 'C++',
      cssClass: 'label-primary'
    },
    {
      skill: 'NodeJS',
      cssClass: 'label-danger'
    },
    {
      skill: 'Doctrine',
      cssClass: 'label-danger'
    },
    {
      skill: 'HTML',
      cssClass: 'label-primary'
    },
    {
      skill: 'Docker',
      cssClass: 'label-success'
    },
    {
      skill: 'Design Patterns',
      cssClass: 'label-default'
    },
    {
      skill: 'scikit-learn',
      cssClass: 'label-warning'
    },
    {
      skill: 'xgboost',
      cssClass: 'label-warning'
    },
    {
      skill: 'Angular 1',
      cssClass: 'label-danger'
    },
    {
      skill: 'Python',
      cssClass: 'label-primary'
    },
    {
      skill: 'MYSQL',
      cssClass: 'label-info'
    },
    {
      skill: 'CSS',
      cssClass: 'label-primary'
    },
    {
      skill: 'ExpressJS',
      cssClass: 'label-danger'
    },
    {
      skill: 'Bootstrap',
      cssClass: 'label-danger'
    },
    {
      skill: 'SLIM',
      cssClass: 'label-danger'
    },
    {
      skill: 'TypeScript',
      cssClass: 'label-primary'
    },
    {
      skill: 'D3JS',
      cssClass: 'label-warning'
    },
    {
      skill: 'SQL',
      cssClass: 'label-primary'
    },
    {
      skill: 'PHP',
      cssClass: 'label-primary'
    }
  ];

  calcAge() {
    let birthday = new Date('1994-08-15');
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  shuffle(arr:Array<any>) {
    let j, x, i;
    for (i = arr.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = arr[i - 1];
        arr[i - 1] = arr[j];
        arr[j] = x;
    }
}

  ngOnInit(){
    this.shuffle(this.skills);
  }

}
