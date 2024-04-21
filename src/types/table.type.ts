export interface ITable {
  name: string;
  columns: ITableColumn<unknown>[];
}

export interface ITableColumn<T> {
  id: number;
  primaryKey?: boolean;
  name: string;
  type: string;
  notNull?: boolean;
  autoIncrease?: boolean;
  key?: string;
  default?: T;
  reference?: IForeignKey;
}

export interface IForeignKey {
  table: string;
  reference: string;
}
