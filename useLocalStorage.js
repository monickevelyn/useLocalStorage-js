import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue){
    const [value, setValue] = useState(() => {
        let currentValue;
        try {
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
        } catch (error) {
            currentValue = defaultValue;
        }
        return currentValue;
    })

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);
    
    return [value, setValue];
}