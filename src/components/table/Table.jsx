import React from 'react'
import './table.scss'
import Tables from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Table = () => {
    const rows = [
        {
            id: 1225,
            product: "Acer Nitro 5",
            img: "https://picsum.photos/500",
            customer: "John Smith",
            amount: 526,
            method: "Cash on Delivery",
            status: "Approved"
        },
        {
            id: 1226,
            product: "MacBook Pro",
            img: "https://picsum.photos/400",
            customer: "Alice Brown",
            amount: 1200,
            method: "Online Payment",
            status: "Pending"
        },
        {
            id: 1227,
            product: "Dell XPS 13",
            img: "https://picsum.photos/200",
            customer: "Robert Johnson",
            amount: 980,
            method: "Credit Card",
            status: "Approved"
        },
        {
            id: 1228,
            product: "Lenovo Legion 5",
            img: "https://picsum.photos/800",
            customer: "Emily White",
            amount: 750,
            method: "Cash on Delivery",
            status: "Declined"
        },
        {
            id: 1229,
            product: "HP Spectre x360",
            img: "https://picsum.photos/200",
            customer: "Michael Green",
            amount: 1150,
            method: "Online Payment",
            status: "Approved"
        },
        {
            id: 1230,
            product: "Asus ROG Strix",
            img: "https://picsum.photos/200",
            customer: "Sophia Wilson",
            amount: 1320,
            method: "Bank Transfer",
            status: "Pending"
        },
        {
            id: 1231,
            product: "MSI Stealth 15M",
            img: "https://picsum.photos/200",
            customer: "William Brown",
            amount: 1100,
            method: "Credit Card",
            status: "Approved"
        },
        {
            id: 1232,
            product: "Razer Blade 15",
            img: "https://picsum.photos/200",
            customer: "Olivia Martin",
            amount: 1450,
            method: "Online Payment",
            status: "Pending"
        },
        {
            id: 1233,
            product: "Samsung Galaxy Book Pro",
            img: "https://picsum.photos/200",
            customer: "James Anderson",
            amount: 900,
            method: "Bank Transfer",
            status: "Declined"
        },
        {
            id: 1234,
            product: "LG Gram 17",
            img: "https://picsum.photos/200",
            customer: "Emma Scott",
            amount: 1300,
            method: "Cash on Delivery",
            status: "Approved"
        }
    ];


    return (
        <TableContainer component={Paper} className='table'>
            <Tables sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell className='tableCell'>Tracking Id</TableCell>
                        <TableCell className='tableCell'>Product</TableCell>
                        <TableCell className='tableCell'>Customer</TableCell>
                        <TableCell className='tableCell'>Payment Method</TableCell>
                        <TableCell className='tableCell'>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className='tableCell'>{row.id}</TableCell>
                            <TableCell className='tableCell'>
                                <div className="cellWrapper">
                                    <img src={row.img} alt="img" className='image' />
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell className='tableCell'>{row.customer}</TableCell>
                            <TableCell className='tableCell'>{row.amount}</TableCell>
                            <TableCell className='tableCell'>{row.method}</TableCell>
                            <TableCell className='tableCell'>
                                <span className={`status ${row.status}`}>
                                    {row.status} 
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Tables>
        </TableContainer>
    )
}

export default Table

