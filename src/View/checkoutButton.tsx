import { Button, Divider, Typography } from "@mui/material";
import useSoldOutStore from "../ViewModel/checkSoldOut";
import useAvailableStore, { useChosenStore } from "../ViewModel/available";

export default function CheckoutButton() {
    const { isSoldOut } = useSoldOutStore();
    const { isAvailable } = useAvailableStore();
    const { isChosen } = useChosenStore();
    return (
        <>
            {isChosen ? (
                !isAvailable ? (
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
                )
            ) : (
                <Button variant="contained" disabled>
                    <Typography color={"white"} fontSize={30}>
                        Checkout
                    </Typography>
                </Button>
            )}

            <Divider />
        </>
    );
}
