import { ReactNode } from 'react';

function BillboardLetter({
    id,
    litId,
    children,
}: {
    id: number;
    litId: number;
    children: ReactNode;
}) {
    return <div className="h-8 w-8">{litId === id && children}</div>;
}

export default BillboardLetter;
