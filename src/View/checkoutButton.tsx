import { Button, Divider, Typography } from "@mui/material";

export default function CheckoutButton() {
    return (
        <>
            <Button variant="contained">
                <Typography color={"white"} fontSize={30}>
                    Checkout
                </Typography>
            </Button>
            <Divider />
        </>
    );
}
