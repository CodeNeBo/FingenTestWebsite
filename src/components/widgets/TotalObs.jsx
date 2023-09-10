const number = {
    value: '7,541,390',
  };

function DynamicNumber() {
    return (
        <h1 className="text-4xl">
            {number.value}
        </h1>
    )
}

function Description() {
    return (
        <>
            <div className="flex justify-center items-end gap-4">
                <p>FX &amp; Crypto</p>
                <button className="text-xs font-light tracking-widest pb-0.5">
                    DETAILS 
                </button>
            </div>
        </>
    );
  }

  export default function TotalObservations() {
    return (
      <div className="flex flex-col text-center font-bold gap-2 my-4">
        <h2 className="text-2xl">Total Observations</h2>
        <DynamicNumber />
        <Description />
      </div>
    );
  }