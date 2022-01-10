import React from 'react';
import { Button } from '@mui/material';
import Image from 'next/image';
import viewcustomer from "../../assets/viewcustomer.svg";

export default function ViewCustomers() {
    return(
        <div style={{display: "flex", flexDirection: "column"}}>
            <Image src={viewcustomer} alt="viewcustomer" width={300} height={300}/>
            <Button variant="outlined">View All Customers</Button>
        </div>
    )
}
