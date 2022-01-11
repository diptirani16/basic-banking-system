import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TransactionHistory() {
    const [transactionHistory, setTransactionHistory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/transactions')
            .then(res => res.json())
            .then(data => setTransactionHistory(data))
    }, []);

    return (
        <>
        <Header />
            <TableContainer component={Paper} sx={{mt: 8, display: 'flex', justifyContent: 'center'}}>
                <Table sx={{ width: 800 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>SENDER ID</TableCell>
                            <TableCell align="right">SENDER NAME</TableCell>
                            <TableCell align="right">RECIEPENT</TableCell>
                            <TableCell align="right">AMOUNT</TableCell>
                            <TableCell align="right">DATE</TableCell>
                            <TableCell align="right">STATUS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactionHistory.map((row) => (
                            <TableRow
                                key={row.userID}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.userID}
                                </TableCell>
                                <TableCell align="right">{row.sender}</TableCell>
                                <TableCell align="right">{row.reciepent}</TableCell>
                                <TableCell align="right">{row.amount}</TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                                { row.status == "success" ? 
                                    <TableCell align="right" sx={{color: "green"}}>{row.status}</TableCell> :
                                    <TableCell align="right" sx={{color: "red"}}>{row.status}</TableCell>
                                }
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Footer />
        </>
    )
}