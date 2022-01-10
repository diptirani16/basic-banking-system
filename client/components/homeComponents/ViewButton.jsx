import React from 'react';
import { Button } from '@mui/material';
import Image from 'next/image';
import viewcustomer from "../../assets/viewcustomer.svg";
import { useRouter } from 'next/router';

export default function ViewButton() {
    const router = useRouter();
    const handleViewButton = (e) => {
        e.preventDefault();
        router.push('/viewcustomer');
    }

    return(
        <div style={{display: "flex", flexDirection: "column"}}>
            <Image src={viewcustomer} alt="viewcustomer" width={300} height={300}/>
            <Button variant="outlined" onClick={handleViewButton}>View All Customers</Button>
        </div>
    )
}
