import React from 'react';
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();
    return (
        <>
            <AppBar position="fixed">
                <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>Dipti Rani | Bank with us</Typography>
                    <div>
                        <Button sx={{ml: 2, color: "#FFFFFF"}} onClick={() => router.push('/viewcustomer')}>Customers</Button>
                        <Button sx={{ml: 2, color: "#FFFFFF"}} onClick={() => router.push('/')}>Home</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}
