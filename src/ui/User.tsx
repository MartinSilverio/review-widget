import { TReviewEntry } from '../sharedTypes/types';
import Profile from './Profile';

function User({ reviewEntry }: { reviewEntry: TReviewEntry }) {
    return (
        <div className="flex justify-center">
            <div>
                <Profile img={reviewEntry.img} />

                <div className="mt-5 text-center  text-lg capitalize tracking-widest">
                    {reviewEntry.name}
                </div>
                <div className="text-center font-robo text-sm capitalize text-blue-400">
                    {reviewEntry.job}
                </div>
            </div>
        </div>
    );
}

export default User;
