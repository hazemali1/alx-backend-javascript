/// <reference path="crud.d.ts" />

import { RowID, RowElement } from './interface';

import * as CRUD from './crud.js'

let row: RowElement = {
	firstName: "Guillaume",
	lastName: "Salva",
}

let row2: RowElement = {
	firstName: "Guillaume",
	lastName: "Salva",
	age: 23,
}

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = CRUD.updateRow(newRowID, row2);

CRUD.deleteRow(newRowID);
