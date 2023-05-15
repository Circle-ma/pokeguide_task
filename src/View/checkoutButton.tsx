import { Button, Divider, Typography } from "@mui/material";
import useSoldOutStore from "../ViewModel/checkSoldOut";

export default function CheckoutButton() {
    const { isSoldOut } = useSoldOutStore();
    return (
        <>
            {isSoldOut ? (
                <Button variant="contained" disabled>
                    <Typography color={"white"} fontSize={30}>
                        Sold Out
                    </Typography>
                </Button>
            ) : (
                <Button variant="contained">
                    <Typography color={"white"} fontSize={30}>
                        Checkout
                    </Typography>
                </Button>
            )}

            <Divider />
        </>
    );
}
