import Sku from "./sku";

type Good = {
    id: number;
    name: string;
    sku: Sku[];
    maxPrice: number;
    minPrice: number;
    image: string;
    options: Option[];
};

type Option = {
    optionId: number;
    optionName: string;
    optionValues: OptionValue[];
};

type OptionValue = {
    optionValueId: number;
    optionValueName: string;
};

export default Good;
