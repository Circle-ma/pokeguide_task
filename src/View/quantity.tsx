import { IconButton, Stack, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import useQuantityStore from "../ViewModel/quantity";
import useMatchedSku from "../ViewModel/matchSku";
import useSoldOutStore from "../ViewModel/checkSoldOut";
import { useEffect } from "react";
import useAvailableStore from "../ViewModel/available";

export default function Quantity() {
    const { quantity, increase, decrease } = useQuantityStore();
    const { matchedSku } = useMatchedSku();
    const { isSoldOut, setIsSoldOut } = useSoldOutStore();
    const { isAvailable } = useAvailableStore();

    useEffect(() => {
        if (
            matchedSku &&
            (matchedSku.remainingInventory < quantity ||
                matchedSku.remainingInventory <= 0)
        ) {
            setIsSoldOut(true);
        } else if (isSoldOut) {
            setIsSoldOut(false);
        }
    }, [quantity]);

    return (
        <>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant="h4">Quantity</Typography>

                <Typography>
                    <IconButton
                        sx={{ color: "#ffb600" }}
                        onClick={decrease}
                        disabled={quantity <= 1}
                    >
                        <RemoveIcon />
                    </IconButton>
                    {quantity}
                    <IconButton
                        sx={{ color: "#ffb600" }}
                        disabled={isSoldOut || !isAvailable}
                        onClick={() => {
                            increase();
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Typography>
            </Stack>
        </>
    );
}
