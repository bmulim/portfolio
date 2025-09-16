import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.html',
  styleUrl: './knowledge.scss',
})
export class Knowledge {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/html.svg',
      alt: 'HTML5',
    },
    {
      src: 'assets/icons/css3.svg',
      alt: 'CSS3',
    },
    {
      src: 'assets/icons/javascript.svg',
      alt: 'JavaScript',
    },
    {
      src: 'assets/icons/angular.svg',
      alt: 'Angular',
    },
    {
      src: 'assets/icons/next-js.svg',
      alt: 'Next.js',
    },
    {
      src: 'assets/icons/react.svg',
      alt: 'React',
    },
    {
      src: 'assets/icons/java.svg',
      alt: 'Java',
    },
    {
      src: 'assets/icons/mysql.svg',
      alt: 'MySQL',
    },
    {
      src: 'assets/icons/mongodb.svg',
      alt: 'MongoDB',
    },
    {
      src: 'assets/icons/springboot.svg',
      alt: 'Spring Boot',
    },
    {
      src: 'assets/icons/sass.svg',
      alt: 'SaSS',
    },
  ]);
}
