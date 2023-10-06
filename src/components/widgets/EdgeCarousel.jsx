import EdgeCard from '~/components/widgets/EdgeCard.jsx';

const ParentComponent = () => {
  const data = [
    { number: 1421, name: 'EUR / USD' },
    { number: -32, name: 'BTC / USD' },
    { number: 5590, name: 'USD / YEN' },
    { number: -7232, name: 'ETH / USD' },
    { number: 10012, name: 'GPB / USD' },
  ];

  return (
    <div className='bg-primary mb-16 md: w-fit mx-auto'>
      <EdgeCard data={data} />
    </div>
  );
};

export default ParentComponent;
