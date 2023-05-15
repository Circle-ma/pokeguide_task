import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
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
}: {
    image: string | undefined;
    name: string | undefined;
    minPrice: number | undefined;
    maxPrice: number | undefined;
}) {
    return (
        <>
            <Box textAlign={"center"} marginTop={3}>
                <Image src={image} alt={name} />
                <Typography variant="h4">{name}</Typography>
                <Box padding={4} />
                <Typography
                    sx={{ color: "#ffb600" }}
                    variant="h3"
                    align="right"
                >
                    HK${minPrice}~HK${maxPrice}
                </Typography>
            </Box>
        </>
    );
}
