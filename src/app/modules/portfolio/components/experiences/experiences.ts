import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.inteface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss'
})
export class Experiences {

  public arrayExperiences = signal<IExperiences[]>([
  {
    summary:{
      strong: "Mulim Advogados Associados", 
      p: "Advogado Gerente e Gerente de TI"
    },
    text: "Sim, sou advogado também, mas minha paixão sempre foi por tecnologia em meu escritório, o qual era sócio do meu pai, cuidei tanto dos processos, quanto do computadores e rede, sempre buscando melhorias para simplicar pesquisas de processos e o armazenamento de dados de processos e clientes, além da manutenção da rede e dos computadores do escritório essa experiência de 19 gerenciando o escritório na parte de TI me deu uma boa base e me fez ir a diante na área de informática então decidi cursar Análise e Desenvolvimento de Sistemas, melhorando o meu gerenciamento no escritório."
  },

  {
    summary:{
      strong: "Ministério Público do Trabalho", 
      p: "Estágio - Pela Faculdade de ADS"
    },
    text: "Estágio pela graduação de Analise e Desenvolvimento de Sistemas, auxiliei com a manuteção da rede de computadores da Central do MPT do Estado do Rio de Janeiro, pude trabalhar com Active Diretory e Microsoft Asure além de assistência remota. Além de adquirir uma excelente experiencia com o trabalho em equipe, o que era essencial no setor de TI, pois`chegavam inúmeros chamados de todo o estado"
  },
  ])
}
