import { Box, IconButton, Stack, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import useQuantityStore from "../ViewModel/quantity";

export default function Quantity() {
    const { quantity, increase, decrease } = useQuantityStore();
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
                    <IconButton sx={{ color: "#ffb600" }} onClick={increase}>
                        <AddIcon />
                    </IconButton>
                </Typography>
            </Stack>
        </>
    );
}
