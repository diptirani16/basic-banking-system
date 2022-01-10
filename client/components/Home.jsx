import React from "react";
import TransactionButton from "./homeComponents/TransactionButton";
import TransferButton from "./homeComponents/TransferButton";
import ViewButton from "./homeComponents/ViewButton";
import { Grid } from "@mui/material";

export default function Home() {
    return (
        <>
            <Grid container spacing={4}>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                    <ViewButton />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                    <TransferButton />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                    <TransactionButton />
                </Grid>
            </Grid>
        </>
    )
}
