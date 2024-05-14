import React from 'react';
import { IconTrendingUp, IconTrendingDown } from '@tabler/icons-react';

const autoScrollCards = ({ topicName, topicHeadline, prediction, outlookType, outlook, author, date }) => {
  const TrendingIcon = prediction.toLowerCase() === 'decline' ? IconTrendingDown : IconTrendingUp;
  const shouldAddGradient = prediction.toLowerCase() === 'decline';

  return (
    <div className="p-px bg-gradient-to-br from-accent to-primary w-96 h-fit rounded-lg flex-shrink-0 second:opacity-50">
        <div className='p-4 flex flex-col gap-2 bg-primary w-full rounded-lg'>
            <div className='inline-flex gap-4 pb-1'>
                <div className='flex flex-col justify-between'>
                    <div className='w-full aspect-square'>
                        <TrendingIcon stroke={1} className='w-full h-full aspect-square'/>
                    </div>
                    <div className={`px-2 p-0.5 text-xs text-textcolor ${shouldAddGradient ? 'bg-gradient' : 'bg-bluegradient'} rounded-sm w-full`}>
                        <p>{prediction}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className="text-xs text-muted font-main tracking-wide font-light">
                        {topicName}
                    </p>

                    <h3 className="text-lg leading-tight text-textcolor font-main">
                        {topicHeadline}
                    </h3>

                    <p className="text-xs text-muted font-main tracking-wide">
                        Outlook: {outlookType} <span className='text-bluegradient'>{outlook}</span>
                    </p>
                </div>
            </div>
            
            <hr className='border-textdark' />

            <div className="inline-flex justify-between w-full text-xs text-muted font-main">
                <div>
                    {author}
                </div>
                <div>
                    {date}
                </div>
            </div>
        </div>
    </div>
  );
};

export default autoScrollCards;
