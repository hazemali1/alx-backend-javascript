"use strict";
/// <reference path="crud.d.ts" />
import * as CRUD from './crud.js';
var row = {
    firstName: "Guillaume",
    lastName: "Salva",
};
var row2 = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23,
};
var newRowID = CRUD.insertRow(row);
var updatedRow = CRUD.updateRow(newRowID, row2);
CRUD.deleteRow(newRowID);
