import React from 'react';
import { Button } from '@mui/material';
import Image from 'next/image';
import transactionhistory from "../../assets/transactionhistory.svg";

export default function TransactionHistory() {
    return(
        <div style={{display: "flex", flexDirection: "column"}}>
            <Image src={transactionhistory} alt="transactionhistory" width={300} height={300}/>
            <Button variant="outlined">Transaction History</Button>
        </div>
    )
}
