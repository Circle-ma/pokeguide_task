import { useEffect } from "react";
import useGoodStore from "./Service/fetchData";
import Appbar from "./View/appbar";
import { Container, Stack, ThemeProvider, createTheme } from "@mui/material";
import Description from "./View/description";
import Quantity from "./View/quantity";
import OptionsList from "./View/optionsList";
import CheckoutButton from "./View/checkoutButton";
import useMatchedSku from "./ViewModel/matchSku";

function App() {
    const { good, setGood } = useGoodStore();
    const { matchedSku } = useMatchedSku();

    useEffect(() => {
        setGood();
    }, []);

    const theme = createTheme({
        palette: {
            primary: {
                main: "#ffb600",
            },
        },
    });

    console.log(good);
    return (
        <>
            <ThemeProvider theme={theme}>
                <Appbar />
                <Container>
                    <Stack spacing={6}>
                        <Description
                            image={good?.image}
                            name={good?.name}
                            maxPrice={good?.maxPrice}
                            minPrice={good?.minPrice}
                            sku={matchedSku}
                        />
                        <Quantity />
                        <OptionsList options={good?.options} />
                        <CheckoutButton />
                    </Stack>
                </Container>
            </ThemeProvider>
        </>
    );
}

export default App;
