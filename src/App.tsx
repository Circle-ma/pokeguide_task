import { useEffect } from "react";
import useGoodStore from "./Service/fetchData";

function App() {
    const { good, setGood } = useGoodStore();

    useEffect(() => {
        setGood();
    }, []);

    console.log(good);
}

export default App;
