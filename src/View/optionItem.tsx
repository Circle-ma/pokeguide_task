import {
    Box,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";
import Good, { Option } from "../Model/good";
import useUserOptionsStore from "../ViewModel/userOptions";
import Sku from "../Model/sku";
import useGoodStore from "../Service/fetchData";
import useMatchedSku from "../ViewModel/matchSku";
import useSoldOutStore from "../ViewModel/checkSoldOut";
import { useEffect } from "react";

export default function OptionItem({ option }: { option?: Option }) {
    const { userOptions, setUserOptions } = useUserOptionsStore();
    const { good } = useGoodStore();
    const { setMatchedSku, matchedSku } = useMatchedSku();
    const { isSoldOut, setIsSoldOut } = useSoldOutStore();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newUserOptions = [...userOptions];
        newUserOptions[option?.optionId != null ? option.optionId - 2 : 0] =
            parseInt(event.target.value);
        setUserOptions(newUserOptions);
        const sku = findMatchingSku(good, newUserOptions);
        console.log(sku);
        if (sku !== undefined) {
            setMatchedSku(sku);
        }
        console.log(newUserOptions);
    };

    function findMatchingSku(
        good: Good | null,
        userInput: number[]
    ): Sku | undefined {
        return good?.sku.find((sku) => {
            return sku.skuOptionMappings.every((mapping) => {
                return userInput.includes(mapping.optionValueId);
            });
        });
    }

    useEffect(() => {
        if (matchedSku && matchedSku.remainingInventory <= 0) {
            setIsSoldOut(true);
        } else if (isSoldOut) {
            setIsSoldOut(false);
        }
    }, [matchedSku, setIsSoldOut, isSoldOut]);

    return (
        <>
            <Box display="flex" alignItems="center">
                <FormControl>
                    <Typography variant="h4">{option?.optionName}</Typography>
                    <RadioGroup row onChange={handleChange}>
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
