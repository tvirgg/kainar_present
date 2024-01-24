import {useEffect, useState} from "react";

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    function handleResize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    },[]);
    return windowSize;
}
