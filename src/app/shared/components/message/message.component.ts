import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MessageEnum } from '../../../core/enums/message.enum';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './message.component.html'
})
export class MessageComponent implements OnInit {
  @Input() type: number = 0;

  title: string = '';
  message: string = '';
  ilustracao: string = '';

  ngOnInit(): void {
    this.selectMessage();
  }

  selectMessage = () => {
    switch (this.type) {
      case MessageEnum.NO_RESULT:
        this.title = 'Sem resultados!';
        this.message = 'Desculpe, não há resultados para esta pesquisa, por favor tente outra!';
        this.ilustracao = 'assets/images/no-result.svg';
        break;
      case MessageEnum.ERROR:
        this.title = 'Erro!';
        this.message = 'Parece que algo deu errado e não conseguimos encontrar o que você está procurando.';
        this.ilustracao = 'assets/images/error-message.svg';
        break;
      default:
      case MessageEnum.NO_CONTENT:
        this.title = 'Sem conteúdo!';
        this.message = 'Desculpe, mas no momento essa secção não possui dados.';
        this.ilustracao = 'assets/images/no-content.svg';
        break;
    }
  };
}
