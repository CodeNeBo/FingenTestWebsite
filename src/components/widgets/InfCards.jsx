import React, { useState, useEffect } from 'react';
import InfCard from './InfCard.jsx';

const InfCards = () => {
    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch the JSON file from the public directory
                const response = await fetch('/landingData/data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                const newData = jsonData.infCards.infCardsData.map((item, index) => ({
                    ...item,
                    id: index + 1, // Add an ID for each item
                }));

                setData(newData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsFetching(false); // Set fetching status to false
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center py-1 gap-6 overflow-x-clip overflow-y-visible relative">
            <div className='bg-gradient-to-b from-primary to-transparent w-full absolute top-0 left-0 h-32 z-50'></div>
            <div className='bg-gradient-to-t from-primary to-transparent w-full absolute bottom-0 left-0 h-32 z-50'></div>
            <div className="mx-auto grid place-content-center relative h-96 overflow-clip gap-4">
                {isFetching ? (
                    <p>Loading...</p>
                ) : (
                    data.map((infCardData, index) => (
                        <InfCard
                            key={index}
                            topicName={infCardData.topicName}
                            topicHeadline={infCardData.topicHeadline}
                            prediction={infCardData.prediction}
                            outlookType={infCardData.outlookType}
                            outlook={infCardData.outlook}
                            author={infCardData.author}
                            date={infCardData.date}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default InfCards;
