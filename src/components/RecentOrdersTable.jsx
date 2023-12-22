import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'product', label: 'Product/Service', minWidth: 170 },
  { id: 'description', label: 'Description', minWidth: 100 },
  {
    id: 'quantity',
    label: 'Quantity',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'amount',
    label: 'Amount',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'grand_total',
    label: 'Grand Total',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'order_date',
    label: 'Order Date',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'payment',
    label: 'Payment Status',
    minWidth: 100,
    align: 'right'
  },
  {
    id: 'status',
    label: 'Order Status',
    minWidth: 100,
    align: 'right'
  }
];

function createData(product, description, quantity, amount,grand_total, order_date, payment, status) {
  return { product, description, quantity, amount,grand_total, order_date, payment, status };
}

const rows = [
  createData('Laptop', '16GB RAM 512GB i7 core HP ELITE', 1, 33500, 67000, '12/12/2023', 'paid', 'delivered'),
  createData('Phone', 'Redmi note 11 pro+', 1, 56000, 56000,"01/01/2023", 'pending', 'delivered' )
];

export default function RecentOrdersTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden',marginTop: "20px" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}