import { create } from "zustand";
import Good from "../Model/good";
import { useEffect } from "react";

interface Store {
    data: any;
    fetchData: () => Promise<void>;
}

const useDataStore = create<Store>((set) => ({
    data: null,
    fetchData: async () => {
        const response = await fetch(
            "https://orderhkuat.pokeguide.com/api/v1/goods/2"
        );
        const data = await response.json();
        set({ data: data });
    },
}));

function transformData(): Good {
    const { data, fetchData } = useDataStore();

    useEffect(() => {
        fetchData();
    }, []);

    const good = data.good;

    const options = good.options.map(
        (option: {
            option_id: any;
            option_name: any;
            option_values: any[];
        }) => ({
            optionId: option.option_id,
            optionName: option.option_name,
            optionValues: option.option_values.map(
                (optionValue: {
                    option_value_id: any;
                    option_value_name: any;
                }) => ({
                    optionValueId: optionValue.option_value_id,
                    optionValueName: optionValue.option_value_name,
                })
            ),
        })
    );

    const sku = good.goods_sku.map(
        (sku: {
            id: any;
            price: any;
            remaining_inventory: any;
            sku_images: string | any[];
            price_options: any[];
        }) => ({
            id: sku.id,
            price: sku.price,
            remainingInventory: sku.remaining_inventory,
            image:
                sku.sku_images.length > 0
                    ? sku.sku_images[0].url
                    : good.goods_images[0].url,
            skuOptionMappings: sku.price_options.map(
                (priceOption: { id: any }) => ({
                    optionId:
                        good.options.find((option: { option_values: any[] }) =>
                            option.option_values.some(
                                (optionValue: { option_value_id: any }) =>
                                    optionValue.option_value_id ===
                                    priceOption.id
                            )
                        )?.option_id ?? -1,
                    optionValueId: priceOption.id,
                })
            ),
        })
    );

    return {
        id: good.goods_id,
        name: good.goods_name,
        sku,
        maxPrice: good.max_price,
        minPrice: good.min_price,
        image:
            good.goods_images.length > 0 ? good.goods_images[0].url : undefined,
        options,
        is_sold_out: good.is_sold_out,
    };
}

export default transformData;
