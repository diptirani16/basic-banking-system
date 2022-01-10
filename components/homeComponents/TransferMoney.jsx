import React from 'react';
import { Button } from '@mui/material';
import Image from 'next/image';
import transfermoney from "../../assets/transfermoney.svg";

export default function TransferMoney() {
    return(
        <div style={{display: "flex", flexDirection: "column"}}>
            <Image src={transfermoney} alt="transfermoney" width={300} height={300}/>
            <Button variant="outlined">Transfer Money</Button>
        </div>
    )
}
