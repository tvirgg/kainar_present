import {useEffect, useState} from "react";

export default function useWindowScroll() {
    const [windowSized, setWindowSized] = useState(undefined);
    function handleResized() {
        setWindowSized(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener("scroll", handleResized);
        handleResized();
        return () => window.removeEventListener("scroll", handleResized);
    },[]);
    useEffect(() => {
        window.addEventListener("wheel", handleResized);
        handleResized();
        return () => window.removeEventListener("wheel", handleResized);
    },[]);
    return windowSized;
}
