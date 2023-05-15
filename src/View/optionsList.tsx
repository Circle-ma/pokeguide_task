import { Option } from "../Model/good";
import OptionItem from "./optionItem";

export default function OptionsList({ options }: { options?: Option[] }) {
    return (
        <>
            {options?.map((option: Option) => (
                <OptionItem option={option} key={option.optionId} />
            ))}
        </>
    );
}
