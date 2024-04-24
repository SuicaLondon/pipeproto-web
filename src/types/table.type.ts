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

export const ColumnValueType = {
  double: "double",
  float: "float",
  int32: "int32",
  int64: "int64",
  uint32: "uint32",
  uint64: "uint64",
  sint32: "sint32",
  sint64: "sint64",
  fixed32: "fixed32",
  fixed64: "fixed64",
  sfixed32: "sfixed32",
  sfixed64: "sfixed64",
  bool: "bool",
  string: "string",
  bytes: "bytes",
} as const;
