type Sku = {
    id: number;
    price: number;
    remainingInventory: number;
    image: string;
    skuOptionMappings: SkuOptionMapping[];
};

type SkuOptionMapping = {
    optionId: number;
    optionValueId: number;
};

export default Sku;
