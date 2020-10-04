import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  TableContainer,
  Paper,
  Table as MaterialTable,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  TablePagination,
} from '@material-ui/core';

import EnhancedTableToolbar from './EnhancedTableToolbar';
import EnhancedTableHeader from './EnhancedTableHeader';

import {
  handleSelectAllClick,
  stableSort,
  getComparator,
  isSelected,
  handleClick,
} from './functions';

import { Container, useStyles } from './styles';

export default function Table({ rows, columns }) {
  const classes = useStyles();

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('id');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  function handleChangePage(e, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(e) {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  }

  function handleRequestSort(e, property) {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  }

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar title="Produtos" numSelected={selected.length} />
        <TableContainer>
          <MaterialTable
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
          >
            <EnhancedTableHeader
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={(e) =>
                handleSelectAllClick(e, rows, setSelected)
              }
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={columns}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .splice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id, selected);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(e) =>
                        handleClick(e, row.id, selected, setSelected)
                      }
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      {columns.map((column) => (
                        <TableCell
                          key={`${labelId}-${row[column.id]}`}
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row[column.id]}
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </MaterialTable>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50, 75, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          labelRowsPerPage="Exibindo"
          labelDisplayedRows={({ from, to, count }) => {
            return `${from}-${to} de ${
              count !== -1 ? count : `do total de ${to}`
            }`;
          }}
        />
      </Paper>
    </Container>
  );
}

Table.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};
