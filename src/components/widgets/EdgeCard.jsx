const EdgeCard = ({ data }) => {
  const sortedData = data.slice().sort((a, b) => b.number - a.number);

  const formatNum = (number) => {
        return number.toLocaleString('en-US');
      };

  return (
    <div className="flex justify-start gap-3 ml-4 pr-4 overflow-x-scroll no-scrollbar">
      {sortedData.map((item, index) => (
        <div key={index} className="text-center">
          <div
            className={`rounded-3xl aspect-square w-32 h-32 flex justify-center items-center relative ${
              item.number > 0
                ? 'bg-gradient-to-tr from-accent to-gradient'
                : 'bg-gradient-to-tr from-accent to-bluegradient'
            }`}
          >
            <div className='bg-primary opacity-75 w-[7.5rem] h-[7.5rem] rounded-[22px] lg:rounded-[26px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
            <div className='z-20'>
                <div className='flex flex-col items-center gap-0'>
                    <h1 className="text-2xl font-semibold tracking-wide">{formatNum(item.number)}</h1>
                    <p className='uppercase text-[10px] tracking-wider -translate-y-0.5'>edge</p>
                </div>
                <h4 className="text-sm mt-2 tracking-wider uppercase translate-y-4">{item.name}</h4>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default EdgeCard;