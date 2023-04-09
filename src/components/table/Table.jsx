import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    let rows = [
        {
            id:2435576,
            product:"Acer Nitro 5",
            img:"https://m.media-amazon.com/images/I/61AmLbb0n0L._SL1024_.jpg",
            customer:"John Smith",
            date:"1 March",
            amount:768,
            method:"Cash On Delivery",
            status:"Approved",
        },
        {
            id:2435567,
            product:"PlayStation 5",
            img:"https://rukminim1.flixcart.com/image/416/416/xif0q/gamingconsole/r/1/p/-original-imaghyyk5zct4duf.jpeg?q=70",
            customer:"George Doe",
            date:"1 March",
            amount:900,
            method:"Cash On Delivery",
            status:"Pending",
        },
        {
            id:9874444,
            product:"Redragon S101",
            img:"https://m.media-amazon.com/images/I/71EMEQKULsL._SL1500_.jpg",
            customer:"John Smith",
            date:"1 March",
            amount:1200,
            method:"Online",
            status:"Approved",
        },
        {
            id:4587874,
            product:"Razer Blade 15",
            img:"https://m.media-amazon.com/images/I/71E+HK7AneL._SL1500_.jpg",
            customer:"Jane Smith",
            date:"1 March",
            amount:890,
            method:"Online",
            status:"Approved",
        },
        {
            id:3577666,
            product:"ASUS ROG Strix",
            img:"https://m.media-amazon.com/images/I/61bwqXfWiaL._SL1500_.jpg",
            customer:"Harold Carol",
            date:"1 March",
            amount:2000,
            method:"Online",
            status:"Pending",
        },
    ];


  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List;