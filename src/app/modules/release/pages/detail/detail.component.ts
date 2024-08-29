
import { Component, OnInit, inject } from '@angular/core';
import { NotificationService } from '../../../../shared/components/notification/notification.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  route = inject(ActivatedRoute);
  location = inject(Location);
  notificationService = inject(NotificationService);

  release: any;


  constructor() {
    this.release = [
      {
        id: '1',
        titulo: 'Solicitação de Acesso',
        descricao: 'Solicitação de acesso ao sistema para novo usuário.',
        numeroSolicitacao: 1001,
        tipoSolicitacao: 1
      },
      {
        id: '2',
        titulo: 'Solicitação de Suporte',
        descricao: 'Problema ao acessar o dashboard.',
        numeroSolicitacao: 1002,
        tipoSolicitacao: 2
      },
      {
        id: '3',
        titulo: 'Solicitação de Alteração de Dados',
        descricao: 'Alteração do endereço de e-mail do usuário.',
        numeroSolicitacao: 1003,
        tipoSolicitacao: 3
      },
      {
        id: '4',
        titulo: 'Solicitação de Reembolso',
        descricao: 'Solicitação de reembolso por serviço não utilizado.',
        numeroSolicitacao: 1004,
        tipoSolicitacao: 4
      },
      {
        id: '5',
        titulo: 'Solicitação de Cancelamento',
        descricao: 'Cancelamento da assinatura do serviço.',
        numeroSolicitacao: 1005,
        tipoSolicitacao: 5
      }
    ];
  }

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      const releaseID = '12345'; // Valor estático definido
    
      // Aqui você pode realizar qualquer operação que precise com o releaseID
      console.log('Release ID estático:', releaseID);
    
      // Se precisar manter a lógica de fallback
      if (!releaseID) {
        this.paginaAnterior(); // Retorna à página anterior se não houver ID
      }
    });
    
  }

  paginaAnterior() {
    this.location.back();
  }
}
