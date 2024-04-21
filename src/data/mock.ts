import { ITable } from "@/types";

export const CustomerTable: ITable = {
  name: "Customer",
  columns: [
    {
      id: 1,
      name: "Customer_ID",
      type: "int",
      notNull: true,
      autoIncrease: true,
      primaryKey: true,
    },
    {
      id: 2,
      name: "Name",
      type: "string",
      notNull: true,
    },
    {
      id: 3,
      name: "Email",
      type: "string",
    },
    {
      id: 4,
      name: "Address",
      type: "string",
    },
  ],
};

export const OrderTable: ITable = {
  name: "Order",
  columns: [
    {
      id: 1,
      name: "Order_ID",
      type: "int",
      notNull: true,
      autoIncrease: true,
      primaryKey: true,
    },
    { id: 2, name: "Order_Date", type: "date", notNull: true },
    {
      id: 3,
      name: "Product_ID",
      type: "int",
      reference: { table: "Product", reference: "Product_ID" },
    },
    {
      id: 4,
      name: "Customer_ID",
      type: "int",
      reference: { table: "Customer", reference: "Customer_ID" },
    },
  ],
};

export const ProductTable: ITable = {
  name: "Product",
  columns: [
    {
      id: 1,
      name: "Product_ID",
      type: "int",
      notNull: true,
      autoIncrease: true,
      primaryKey: true,
    },
    { id: 2, name: "Product_Name", type: "string", notNull: true },
    {
      id: 3,
      name: "Category_ID",
      type: "int",
      reference: { table: "Category", reference: "Category_ID" },
    },
  ],
};
export const CategoryTable: ITable = {
  name: "Category",
  columns: [
    {
      id: 1,
      name: "Category_ID",
      type: "int",
      notNull: true,
      autoIncrease: true,
      primaryKey: true,
    },
    { id: 2, name: "Type", type: "string", notNull: true },
  ],
};

export const tables = [CustomerTable, OrderTable, ProductTable, CategoryTable];
