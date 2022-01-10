import React from 'react';
import { Button } from '@mui/material';
import viewcustomer from "../assets/viewcustomer.svg";

export default function ViewCustomers() {
    return(
        <>
            <img src={viewcustomer} alt="viewcustomer" width="80%"/>
            <Button variant="contained">View All Customers</Button>
        </>
    )
}