import { useEffect, useState } from 'react';
import BillboardLetter from './BillboardLetter';

function Billboard({ text }: { text: string }) {
    const [litNdx, setLitNdx] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLitNdx((prev) => {
                return (prev + 1) % text.length;
            });
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [text.length]);

    const textArr = text.split('');

    return (
        <div className="flex flex-col">
            {textArr.map((letter, ndx) => {
                return (
                    <BillboardLetter id={ndx} litId={litNdx} key={ndx}>
                        {letter}
                    </BillboardLetter>
                );
            })}
        </div>
    );
}

export default Billboard;
