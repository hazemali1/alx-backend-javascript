import { RowID, RowElement } from './interface.ts';

declare function insertRow(row): RowID;
declare function updateRow(newRowID, row): RowElement;
declare function deleteRow(newRowID);


import * as CRUD from './crud.js'



