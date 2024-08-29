export function enumToList<T extends object>(enumObj: T): { id: any, value: string }[] {
  return Object.keys(enumObj)
    .filter(key => isNaN(Number(key))) // Filtrar as chaves numéricas (valores do enum)
    .map(key => ({
      id: (enumObj as any)[key], // Convertendo o valor do enum para string
      value: key
    }));
}
