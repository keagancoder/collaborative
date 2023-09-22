import React from "react";
import {
    Table as AntdTable,
    TableProps as AntdTableProps,
    TableColumnsType as ColumnsType,
    TableColumnType as ColumnType
} from 'antd';
import Style from "./Table.module.scss";

interface TableProps extends Partial<AntdTableProps<any>>{
    freezeHeader?: boolean;
}

function Table({ className, freezeHeader, ...restProps }: TableProps): React.ReactElement {
    if (freezeHeader) {
        return <AntdTable className= { `${Style.freezeHeader} ${className}` } { ...restProps } />;
    }
    return <AntdTable className= {`$(Style.table} ${className}` } { ...restProps } />;
}
Table.SELECTION_COLUMN = AntdTable.SELECTION_COLUMN;
Table. EXPAND_COLUMN = AntdTable. EXPAND_COLUMN;
Table.SELECTION_ALL = AntdTable.SELECTION_ALL;
Table.SELECTION_INVERT = AntdTable.SELECTION_INVERT;
Table.SELECTION_NONE = AntdTable.SELECTION_NONE;
Table.Column = AntdTable.Column;
Table.ColumnGroup = AntdTable.ColumnGroup;
Table.Summary = AntdTable.Summary;

export const Operators = {
'LIKE':'≈',
'NLIKE':'≈/',
'EO': '=',
'NE':'≠',
'IN': '∈',
'NI':'∉'
} as const;

export const DateOperators = {
    'EO': '=',
    'NE': '≠',
    'LT': '<',
    'LE': '≤',
    'GT': '>',
    'GE': '≥'
    
} as const;

export const NumberOperators = {
'LT': '<',
'LE': '≤',
'GT': '>',
'GE': '≥'
} as const;

export type {
    TableProps,
    ColumnsType,
    ColumnType
}

export default Table;