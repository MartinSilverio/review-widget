import { useEffect, useState } from 'react';

function CounterEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        console.log(count);
    }, [count]);

    return null;
}

export default CounterEffect;
