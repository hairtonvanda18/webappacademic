import { Item } from "./item";

export interface Release {
  id: string;
  versao: string;
  sistema: number;
  dataPublicacao: string;
  itens: Item[];
}
