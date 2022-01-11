import React from 'react';
import { Button } from '@mui/material';
import Image from 'next/image';
import transfermoney from "../../assets/transfermoney.svg";
import { useRouter } from 'next/router';

export default function TransferButton() {
    const router = useRouter();
    const handleTransferButton = (e) => {
        e.preventDefault();
        router.push('/viewcustomer');
    }
    return(
        <div style={{display: "flex", flexDirection: "column"}}>
            <Image src={transfermoney} alt="transfermoney" width={300} height={300}/>
            <Button variant="outlined" onClick={handleTransferButton}>Transfer Money</Button>
        </div>
    )
}
