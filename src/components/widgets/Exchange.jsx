const pair1 = {
    name1: 'USD',
    name2: 'EUR',
    value: '58546',
    difference: '1430',
};
const pair2 = {
    name1: 'USD',
    name2: 'JPY',
    value: '44768',
    difference: '1210',
};
const pair3 = {
    name1: 'GBP',
    name2: 'EUR',
    value: '34788',
    difference: '1032',
};
const pair4 = {
    name1: 'GBP',
    name2: 'USD',
    value: '33687',
    difference: '1001',
};
const pair5 = {
    name1: 'USD',
    name2: 'AUR',
    value: '23769',
    difference: '443',
};


function ExchangeLine() {
    return (
        <>
            <div className="flex items-center p-0 mx-4 my-2">
                <div className="bg-gradient-to-r from-accent to-gradient h-10 w-full font-bold rounded-full flex items-center">
                    <p className="pl-4">{pair1.name1} / {pair1.name2}</p>
                </div>
                <div className="flex flex-col pl-4 tracking-wide">
                    <p>{pair1.value}</p>
                    <p className="text-xs opacity-50">{pair1.difference}</p>
                </div>
            </div>
            <div className="flex items-center p-0 mx-4 my-2">
                <div className="bg-gradient-to-r from-accent to-gradient h-10 w-[75%] font-bold rounded-full flex items-center">
                    <p className="pl-4">{pair2.name1} / {pair2.name2}</p>
                </div>
                <div className="flex flex-col pl-4 tracking-wide">
                    <p>{pair2.value}</p>
                    <p className="text-xs opacity-50">{pair2.difference}</p>
                </div>
            </div>
            <div className="flex items-center p-0 mx-4 my-2">
                <div className="bg-gradient-to-r from-bluegradient to-accent h-10 w-[70%] font-bold rounded-full flex items-center">
                    <p className="pl-4">{pair3.name1} / {pair3.name2}</p>
                </div>
                <div className="flex flex-col pl-4 tracking-wide">
                    <p>{pair3.value}</p>
                    <p className="text-xs opacity-50">{pair3.difference}</p>
                </div>
            </div>
            <div className="flex items-center p-0 mx-4 my-2">
                <div className="bg-gradient-to-r from-bluegradient to-accent h-10 w-[50%] font-bold rounded-full flex items-center">
                    <p className="pl-4">{pair4.name1} / {pair4.name2}</p>
                </div>
                <div className="flex flex-col pl-4 tracking-wide">
                    <p>{pair4.value}</p>
                    <p className="text-xs opacity-50">{pair4.difference}</p>
                </div>
            </div>
            <div className="flex items-center p-0 mx-4 my-2">
                <div className="bg-gradient-to-r from-gradient to-secondary h-10 w-[35%] font-bold rounded-full flex items-center">
                    <p className="pl-4">{pair5.name1} / {pair5.name2}</p>
                </div>
                <div className="flex flex-col pl-4 tracking-wide">
                    <p>{pair5.value}</p>
                    <p className="text-xs opacity-50">{pair5.difference}</p>
                </div>
            </div>
        </>
    );
}

export default function Graph() {
    return (
      <div className="mb-6">
        <ExchangeLine></ExchangeLine>
      </div>
    );
  }