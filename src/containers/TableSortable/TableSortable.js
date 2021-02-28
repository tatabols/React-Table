import React, { createContext, useReducer, useState } from 'react';
import { Table, Pagination } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const TableHeader = ({ columns }) => (
  <Table.Header>
    <Table.Row>
      {columns.map((col, i) => (
        <Table.HeaderCell key={i}>{col.title}</Table.HeaderCell>
      ))}
    </Table.Row>
  </Table.Header>
);

const TableBody = ({ rows, columns, link }) => (
  <Table.Body>
    {rows.map((row, i) => (
      <Table.Row key={i}>
        {columns.map((col, j) => (
          <Table.Cell key={j}>
            {col.isLink && link.newTab ? (
              <a
                href={`${link.baseUrl}${row[link.key]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {row[col.field]}
              </a>
            ) : col.isLink && !link.newTab ? (
              <a href={`${link.baseUrl}${row[link.key]}`}>{row[col.field]}</a>
            ) : (
              row[col.field]
            )}
          </Table.Cell>
        ))}
      </Table.Row>
    ))}
  </Table.Body>
);

const TablePagination = ({ totalPages, dispatch }) => {
  return (
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan="3">
          <Pagination
            defaultActivePage={1}
            boundaryRange={0}
            firstItem={null}
            lastItem={null}
            siblingRange={1}
            totalPages={totalPages}
            onPageChange={(e, d) =>
              dispatch({ type: 'PAGE_CHANGED', page: d.activePage })
            }
          />
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  );
};

const paginationReducer = (state, action) => {
  if (action.type === 'PAGE_CHANGED') {
    return { ...state, page: action.page };
  } else {
    return { ...state };
  }
};

const TableSortable = ({ dataSource, columns, link, maxRow }) => {
  const [state, dispatch] = useReducer(paginationReducer, {
    page: 1,
    data: dataSource,
  });

  const { page, data } = state;

  console.log('TableSortable', page, data);

  return (
    <Table striped>
      <TableHeader columns={columns} />
      <TableBody rows={data} columns={columns} link={link} />
      <TablePagination
        totalPages={Math.ceil(data.length / maxRow)}
        dispatch={dispatch}
      />
    </Table>
  );
};

export default TableSortable;
