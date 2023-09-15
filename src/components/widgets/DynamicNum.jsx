const number = {
    value: '7,541,390',
  };

function DynamicNumber() {
    return (
        <h1 className="text-4xl md:text-4xl">
            {number.value}
        </h1>
    )
}

  export default function TotalObservations() {
    return (
        <DynamicNumber />
    );
  }