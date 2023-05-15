import {
    Box,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";
import { Option } from "../Model/good";

export default function OptionItem({ option }: { option?: Option }) {
    return (
        <>
            <Box display="flex" alignItems="center">
                <FormControl>
                    <Typography variant="h4">{option?.optionName}</Typography>
                    <RadioGroup row>
                        {option?.optionValues.map((value) => (
                            <FormControlLabel
                                key={value.optionValueId}
                                value={value.optionValueId}
                                control={<Radio />}
                                label={value.optionValueName}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
            </Box>
        </>
    );
}
