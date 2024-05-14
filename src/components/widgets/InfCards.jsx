import React, { useState, useEffect } from 'react';
import InfCard from './InfCard.jsx';

const InfCards = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./data/landingdata.json')
            .then((response) => response.json())
            .then((jsonData) => {
                setData(jsonData.infCards.infCardsData);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const generateItems = (items) => {
        return [...items, ...items]; 
    };

    const firstFiveItems = data.slice(0, 5);
    const nextFiveItems = data.slice(5, 10);
    const repeatedFirstFiveItems = generateItems(firstFiveItems);
    const repeatedNextFiveItems = generateItems(nextFiveItems);

    return (
        <div className="flex flex-col align-middle justify-center py-1 gap-6 overflow-x-clip overflow-y-visible relative">
            <div className='bg-gradient-to-r from-primary to-transparent w-16 absolute left-0 top-0 h-full z-50'></div>
            <div className='bg-gradient-to-r from-transparent to-primary w-16 absolute right-0 top-0 h-full z-50'></div>
            <div className='flex flex-row gap-6 relative'>
                <div className="relative flex flex-row gap-6 animate-infCardsRight">
                    {repeatedFirstFiveItems.map((infCardData, index) => (
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
                    ))}
                </div>
                <div className="pl-6 absolute top-0 flex flex-row gap-6 animate-infCardsRight2">
                    {repeatedFirstFiveItems.map((infCardData, index) => (
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
                    ))}
                </div>
            </div>
            <div className='flex flex-row gap-6 relative'>
                <div className="relative flex flex-row justify-end gap-6 animate-infCardsLeft">
                    {repeatedNextFiveItems.map((infCardData, index) => (
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
                    ))}
                </div>
                <div className="pl-6 absolute flex flex-row justify-end gap-6 animate-infCardsLeft2">
                    {repeatedNextFiveItems.map((infCardData, index) => (
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfCards;
