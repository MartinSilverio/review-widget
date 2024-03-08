import { ReactNode } from 'react';

function AppLayout({ children }: { children: ReactNode }) {
    return (
        <div className="grid h-screen bg-slate-200">
            <main className="container m-3 flex h-96 w-[34rem] flex-col gap-1 self-center justify-self-center rounded-xl bg-gray-100 p-2 shadow-2xl">
                {children}
            </main>
        </div>
    );
}

export default AppLayout;
