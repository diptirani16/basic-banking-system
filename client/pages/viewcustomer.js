import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CustomersList() {
    const router = useRouter();
    const [customersList, setCustomersList] = useState([]);
    const [customerInfo, setCustomerInfo] = useState()

    useEffect(() => {
        fetch('http://localhost:3002/customers')
            .then(res => res.json())
            .then(data => setCustomersList(data))
    }, []);

    const handleCustomer = (id) => {
        fetch(`http://localhost:3002/customers/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCustomerInfo(data);
                router.push('/transfer');
            })
    }

    return (
        <>
        <Header />
            <TableContainer component={Paper} sx={{mt: 8, display: 'flex', justifyContent: 'center'}}>
                <Table sx={{ width: 800 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>USERID</TableCell>
                            <TableCell align="right">NAME</TableCell>
                            <TableCell align="right">EMAIL</TableCell>
                            <TableCell align="right">CURRENT BALANCE</TableCell>
                            <TableCell align="right">INFO</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customersList.map((row) => (
                            <TableRow
                                key={row.userID}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.userID}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.currentBalance}</TableCell>
                                <TableCell align="right"><button style={{border: 'none', color: 'blue'}} onClick={() => handleCustomer(row._id)}>view</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Footer />
        </>
    )
}