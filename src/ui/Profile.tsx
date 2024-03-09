import { useState } from 'react';

function Profile({ img }: { img: string }) {
    const [loaded, setIsLoaded] = useState(false);

    return (
        <div
            className={` mx-auto mt-5 flex h-[100px] w-[100px] justify-center rounded-full bg-gray-800 text-center  shadow-img-offset shadow-blue-400 before:absolute before:left-1 before:top-1 before:bg-blue-600 after:absolute after:h-10 after:w-10 after:-translate-x-9 after:rounded-full after:bg-blue-400 after:text-5xl  after:text-white after:content-['❞']`}
        >
            <img
                className={`rounded-full object-cover  ${!loaded ? 'hidden' : ''}`}
                onLoad={() => setIsLoaded(true)}
                src={img}
            />

            {!loaded && (
                <div className="h-[100px] w-[100px] rounded-full"></div>
            )}
        </div>
    );
}

export default Profile;
