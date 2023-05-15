import { Button, Divider, Typography } from "@mui/material";
import useSoldOutStore from "../ViewModel/checkSoldOut";
import useAvailableStore from "../ViewModel/available";

export default function CheckoutButton() {
    const { isSoldOut } = useSoldOutStore();
    const { isAvailable } = useAvailableStore();
    return (
        <>
            {!isAvailable ? (
                <Button variant="contained" disabled>
                    <Typography color={"white"} fontSize={30}>
                        Not Available
                    </Typography>
                </Button>
            ) : isSoldOut ? (
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
