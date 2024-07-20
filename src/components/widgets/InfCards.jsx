import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import InfCard from './InfCard.jsx';

const InfCards = () => {
    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        const serverUrl = 'https://52e7-75-33-147-14.ngrok-free.app';

        const fetchData = async () => {
            try {
                const response = await fetch(`${serverUrl}/`, {
                    headers: {
                        'ngrok-skip-browser-warning': 'true',
                    },
                });
                const jsonData = await response.json();
                const newData = jsonData.infCards.infCardsData.map((item, index) => ({
                    ...item,
                    id: index + 1,
                }));

                setData(newData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsFetching(false);
            }
        };

        fetchData();

        const socket = io(serverUrl.replace('https://', 'wss://'), {
            extraHeaders: {
                'ngrok-skip-browser-warning': 'true',
            },
        });

        socket.on('data', (jsonData) => {
            const newData = jsonData.infCards.infCardsData.map((item, index) => ({
                ...item,
                id: index + 1,
            }));
            setData(newData);
        });

        socket.on('connect_error', (err) => {
            console.error('Connection error:', err);
        });

        socket.on('error', (err) => {
            console.error('Server error:', err);
        });

        return () => socket.disconnect();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center py-1 gap-6 overflow-x-clip overflow-y-visible relative">
            <div className='bg-gradient-to-b from-primary to-transparent w-full absolute top-0 left-0 h-32 z-50'></div>
            <div className="mx-auto grid place-content-center relative h-96 overflow-clip gap-4">
                {data.map((infCardData, index) => (
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
    );
};

export default InfCards;
