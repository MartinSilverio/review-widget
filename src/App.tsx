import { useState } from 'react';
import AppLayout from './ui/AppLayout';
import User from './ui/User';
import { reviews } from './data/quotes';
import Quote from './ui/Quote';

function App() {
    const [reviewEntries] = useState(reviews);
    const [currentId, setCurrentId] = useState(0);

    function handleNextReview() {
        setCurrentId((id) => {
            if (id === reviewEntries.length - 1) {
                return 0;
            }
            return id + 1;
        });
    }

    function handlePrevReview() {
        setCurrentId((id) => {
            if (id === 0) {
                return reviewEntries.length - 1;
            }
            return id - 1;
        });
    }

    function handleRandomize() {
        setCurrentId(Math.floor(Math.random() * reviewEntries.length));
    }

    return (
        <AppLayout>
            <User reviewEntry={reviewEntries[currentId]} key={currentId} />
            <Quote
                onNextReview={handleNextReview}
                onPrevReview={handlePrevReview}
                onRandomize={handleRandomize}
                reviewEntry={reviewEntries[currentId]}
            />
        </AppLayout>
    );
}

export default App;
