import React from 'react';

const growthIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      stroke="#ffffff"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 17l6 -6l4 4l8 -8" />
      <path d="M14 7l7 0l0 7" />
    </svg>
  );

const MyComponent = () => {
  return (
    <div className="p-px bg-gradient-to-br from-accent to-primary w-96 h-fit rounded-lg">
        <div className='p-4 flex flex-col gap-2 bg-primary w-full rounded-lg'>
            <div className='inline-flex gap-4'>
                <div>
                    <div className='w-full aspect-square'>
                        {growthIcon}
                    </div>

                    <div className="px-1 p-0.5 text-xs text-textcolor bg-bluegradient rounded-md w-full">
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
            
            <hr className='border-muted' />

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
