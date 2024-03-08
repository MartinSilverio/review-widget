import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { TReviewEntry } from '../sharedTypes/types';

interface TQuoteProps {
    reviewEntry: TReviewEntry;
    onNextReview(): void;
    onPrevReview(): void;
    onRandomize(): void;
}

function Quote({
    reviewEntry,
    onNextReview,
    onPrevReview,
    onRandomize,
}: TQuoteProps) {
    return (
        <div className="flex h-full flex-col items-center justify-between space-y-2 px-4">
            <p className="min-h-24 grow text-center font-medium text-cyan-800">
                {reviewEntry.text}
            </p>
            <div className="space-y-2 pb-4">
                <div className="flex justify-center text-3xl text-sky-600">
                    <button onClick={onPrevReview}>
                        <IoIosArrowBack />
                    </button>
                    <button onClick={onNextReview}>
                        <IoIosArrowForward />
                    </button>
                </div>
                <button
                    className="rounded-md border border-b-blue-700 border-l-blue-400 border-r-blue-700 border-t-blue-400 bg-blue-100 px-2 py-1 text-sm font-medium text-cyan-700"
                    onClick={onRandomize}
                >
                    Surprise Me
                </button>
            </div>
        </div>
    );
}

export default Quote;
