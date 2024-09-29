import { RowID, RowElement } from './js/interface';

declare function insertRow(row: RowElement): number;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): number;