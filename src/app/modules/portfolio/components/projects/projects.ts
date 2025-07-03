import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjects } from '../dialogs/dialog-projects/dialog-projects';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/images/projects/capa_nlw.webp',
      alt: 'Primeiro Projeto Feito',
      title: 'NLW eSports',
      width: '120px',
      height: '120px',
      description: 'Primeiro Projeto realizado junto a RocketSeat em um evento NLW, onde o objetivo era introduzir os participantes ao mundo do desenvolvimento web, utilizando HTML, CSS, tendo como tema o eSports.',
      links: [
        {
          name: 'NLW eSports',
          href: 'https://bmulim.github.io/NLW-eSports/'
        },
      ],
    },

    // {
    //   src: 'assets/images/projects/vfull.png',
    //   alt: '',
    //   title: '',
    //   width: '100px',
    //   height: '100px',
    //   description: '',
    //   links: [
    //     {
    //       name: 'conheça o projeto',
    //       href: '#'
    //     },
    //   ],
    // },
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjects, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
