import { create } from "zustand";
import Good from "../Model/good";

interface GoodState {
    good: Good | null;
    setGood: () => void;
}

const useGoodStore = create<GoodState>((set) => ({
    good: null,
    setGood: () => {
        fetch(
            "https://cors-anywhere.herokuapp.com/https://orderhkuat.pokeguide.com/api/v1/goods/2"
        )
            .then((response) => response.text())
            .then((text) => JSON.parse(text))
            .then((data) => {
                // Convert data to Good model
                const goodData = {
                    id: data.good.goods_id,
                    name: data.good.goods_name,
                    sku: data.good.goods_sku.map(
                        (sku: {
                            id: any;
                            price: any;
                            remaining_inventory: any;
                            sku_images: { url: any }[];
                            sku_option_mappings: any[];
                        }) => ({
                            id: sku.id,
                            price: sku.price,
                            remainingInventory: sku.remaining_inventory,
                            image: sku.sku_images[0].url,
                            skuOptionMappings: sku.sku_option_mappings.map(
                                (mapping: {
                                    option_id: any;
                                    option_value_id: any;
                                }) => ({
                                    optionId: mapping.option_id,
                                    optionValueId: mapping.option_value_id,
                                })
                            ),
                        })
                    ),
                    maxPrice: data.good.max_price,
                    minPrice: data.good.min_price,
                    image: data.good.goods_images[0].url,
                    options: data.good.options.map(
                        (option: {
                            option_id: any;
                            option_name: any;
                            option_values: any[];
                        }) => ({
                            optionId: option.option_id,
                            optionName: option.option_name,
                            optionValues: option.option_values.map(
                                (value: {
                                    option_value_id: any;
                                    option_value_name: any;
                                }) => ({
                                    optionValueId: value.option_value_id,
                                    optionValueName: value.option_value_name,
                                })
                            ),
                        })
                    ),
                    is_sold_out: data.good.is_sold_out,
                };
                console.log(goodData);
                set(() => ({ good: goodData }));
            })
            .catch((error) => console.error(error));
    },
}));

export default useGoodStore;
