import { Component, OnInit, inject } from '@angular/core';
import { NotificationService } from '../../../../shared/components/notification/notification.service';
import { FormControl } from '@angular/forms';
import { Select } from '../../../../shared/components/select/types';
import { enumToList } from '../../../../shared/helpers/convert-enum-list';
import { SystemEnum } from '../../../../core/enums/system.enum';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  notificationService = inject(NotificationService);
  id = '28bc0050-63f1-44aa-a78b-50ae6562507a';
  releaseList: any;

  totalPages: number;

  showModalAddClient: boolean = false;
  searchTerm = new FormControl('');
  systems: Select[] = [];

  constructor() {
    this.releaseList = [
      {
        id: '1',
        versao: '1.0.0',
        sistema: 1,
        dataPublicacao: '2024-08-29',
        itens: [
          {
            id: '1',
            titulo: 'Correção de Bug',
            descricao: 'Correção do bug que impedia o login de novos usuários.',
            numeroSolicitacao: 1001,
            tipoSolicitacao: 1
          },
          {
            id: '2',
            titulo: 'Melhoria de Desempenho',
            descricao: 'Otimização das consultas ao banco de dados para reduzir o tempo de carregamento.',
            numeroSolicitacao: 1002,
            tipoSolicitacao: 2
          }
        ]
      },
      {
        id: '2',
        versao: '1.1.0',
        sistema: 2,
        dataPublicacao: '2024-09-15',
        itens: [
          {
            id: '3',
            titulo: 'Nova Funcionalidade',
            descricao: 'Adicionada a funcionalidade de exportação de relatórios em PDF.',
            numeroSolicitacao: 1003,
            tipoSolicitacao: 3
          },
          {
            id: '4',
            titulo: 'Atualização de Segurança',
            descricao: 'Melhoria nos mecanismos de autenticação para aumentar a segurança do sistema.',
            numeroSolicitacao: 1004,
            tipoSolicitacao: 4
          }
        ]
      },
      {
        id: '3',
        versao: '1.2.0',
        sistema: 1,
        dataPublicacao: '2024-10-01',
        itens: [
          {
            id: '5',
            titulo: 'Correção de Interface',
            descricao: 'Ajuste no alinhamento dos elementos na página principal.',
            numeroSolicitacao: 1005,
            tipoSolicitacao: 1
          },
          {
            id: '6',
            titulo: 'Integração com Terceiros',
            descricao: 'Adicionada integração com o sistema de pagamentos externo.',
            numeroSolicitacao: 1006,
            tipoSolicitacao: 3
          }
        ]
      }
    ];

    console.log(this.releaseList);
    this.totalPages = 3;


    this.systems = enumToList(SystemEnum);
  }

 
  trackByRelease(index: number, release: any): string {
    return release.id;
  }
  ngOnInit() {
    this.systems = enumToList(SystemEnum);
  }

  closeModal() {
    this.showModalAddClient = false;
  }


}
