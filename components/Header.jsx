import React from 'react';
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
    return (
        <>
            <AppBar position="fixed" color="transparent">
                <Toolbar variant="dense">
                    <Typography>Dipti Rani | Bank with us</Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}
