import React from 'react';
import { Button } from '@mui/material';
import Image from 'next/image';
import transactionhistory from "../../assets/transactionhistory.svg";
import { useRouter } from 'next/router';

export default function TransactionButton() {
    const router = useRouter();
    const handleTransactionButton = (e) => {
        e.preventDefault();
        router.push('/history');
    }
    return(
        <div style={{display: "flex", flexDirection: "column"}}>
            <Image src={transactionhistory} alt="transactionhistory" width={300} height={300}/>
            <Button variant="outlined" onClick={handleTransactionButton}>Transaction History</Button>
        </div>
    )
}
