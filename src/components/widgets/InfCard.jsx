import React from 'react';
import { IconTrendingUp } from '@tabler/icons-react';

const MyComponent = () => {
  return (
    <div className="p-px bg-gradient-to-br from-accent to-primary w-96 h-fit rounded-lg flex-shrink-0">
        <div className='p-4 flex flex-col gap-2 bg-primary w-full rounded-lg'>
            <div className='inline-flex gap-4 pb-1'>
                <div className='flex flex-col justify-between'>
                    <div className='w-full aspect-square'>
                        <IconTrendingUp stroke={1} className='w-full h-full aspect-square'/>
                    </div>
                    <div className="px-2 p-0.5 text-xs text-textcolor bg-bluegradient rounded-sm w-full">
                        <p>Growth</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className="text-xs text-muted font-main tracking-wide font-light">
                        Bitcoin
                    </div>

                    <div className="text-lg leading-tight text-textcolor font-main">
                        <span className='font-bold'>Bitcoin</span> - growth projected in the next 3 days.
                    </div>

                    <div className="text-xs text-muted font-main tracking-wide">
                        Outlook: Long term <span className='text-bluegradient'> Increased</span>
                    </div>
                </div>
            </div>
            
            <hr className='border-textdark' />

            <div className="inline-flex justify-between w-full text-xs text-muted font-main">
                <div>
                    Fingen Research
                </div>
                <div>
                    Mar 3, 2024
                </div>
            </div>
        </div>
    </div>
  );
};

export default MyComponent;
