import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Appbar() {
    return (
        <>
            <AppBar position="static" sx={{ alignItems: "center" }}>
                <Toolbar>
                    <Typography color={"white"} variant="h3">
                        Buy
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}
