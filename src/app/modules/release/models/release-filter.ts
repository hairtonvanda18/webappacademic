import { FiltersBase } from '../../../core/models/filters-base';

export interface ReleaseFilters extends FiltersBase {
  sistema?: number;
  versao?: string;
}

export const InitFilters = () => {
  return {
    page: 1,
    pageSize: 5,
    sistema: 1,
    versao: undefined
  } as ReleaseFilters;
};
