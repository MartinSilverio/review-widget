import { useState } from 'react';
import { TReviewEntry } from '../sharedTypes/types';

function User({ reviewEntry: quoteEntry }: { reviewEntry: TReviewEntry }) {
    const [loaded, setIsLoaded] = useState(false);

    return (
        <div className="flex justify-center">
            <div>
                <div className="mx-auto mt-5 flex h-[100px] w-[100px] justify-center rounded-full bg-gray-800 shadow-img-offset shadow-blue-400  before:absolute before:left-1 before:top-1 before:bg-blue-600">
                    <img
                        className={`rounded-full object-cover  ${!loaded ? 'hidden' : ''}`}
                        onLoad={() => setIsLoaded(true)}
                        src={quoteEntry.img}
                    />

                    {!loaded && (
                        <div className="h-[100px] w-[100px] rounded-full"></div>
                    )}
                </div>

                <div className="mt-5 text-center  text-lg capitalize tracking-widest">
                    {quoteEntry.name}
                </div>
                <div className="text-center font-robo text-sm capitalize text-blue-400">
                    {quoteEntry.job}
                </div>
            </div>
        </div>
    );
}

export default User;
