import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Sku from "../Model/sku";
import { useState } from "react";
const Image = styled.img`
    width: 100%;
    max-width: 160px;
    height: auto;
    float: left;
`;

export default function Description({
    image,
    name,
    minPrice,
    maxPrice,
    sku,
}: {
    image: string | undefined;
    name: string | undefined;
    minPrice: number | undefined;
    maxPrice: number | undefined;
    sku: Sku | undefined;
}) {
    const [isSku, setIsSku] = useState(false);
    if (sku !== undefined && isSku == false) {
        setIsSku(true);
    }
    if (sku === undefined && isSku == true) {
        setIsSku(false);
    }
    return (
        <>
            <Box textAlign={"center"} marginTop={3}>
                {isSku ? (
                    <Image src={sku?.image} alt={name} />
                ) : (
                    <Image src={image} alt={name} />
                )}

                <Typography variant="h4">{name}</Typography>
                <Box padding={4} />
                {isSku ? (
                    <Typography
                        sx={{ color: "#ffb600" }}
                        variant="h3"
                        align="right"
                    >
                        HK${sku?.price}
                    </Typography>
                ) : (
                    <Typography
                        sx={{ color: "#ffb600" }}
                        variant="h3"
                        align="right"
                    >
                        HK${minPrice}~HK${maxPrice}
                    </Typography>
                )}
            </Box>
        </>
    );
}
