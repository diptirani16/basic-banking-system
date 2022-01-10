import React from "react";
import TransactionHistory from "./homeComponents/TransactionHistory";
import TransferMoney from "./homeComponents/TransferMoney";
import ViewCustomers from "./homeComponents/ViewCustomers";
import { Grid } from "@mui/material";

export default function Home() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                    <ViewCustomers />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                    <TransferMoney />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                    <TransactionHistory />
                </Grid>
            </Grid>
        </>
    )
}



