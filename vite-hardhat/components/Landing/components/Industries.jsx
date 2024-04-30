const Industries = () => {
  const chainData = ['Financial Services', 'Fintech', 'Crypto Exchanges', 'Gaming', 'Real Estate', 'E-Commerce', 'Healthcare'];

  return (
    <div className="justify-center items-center self-stretch flex w-full flex-col pt-20 px-12 max-md:max-w-full max-md:px-5 max-sm:pt-10 max-sm:px-6">
      <div className="justify-center items-center self-center flex w-full max-w-[1101px] flex-col max-md:max-w-full">
        <div className="text-4xl self-center whitespace-nowrap max-md:text-3xl max-sm:text-xl">
          SUPPORTED INDUSTRIES
        </div>
        <div className="items-center flex flex-col mt-10 max-md:max-w-full max-md:mt-10">
          <div className="justify-around items-center flex flex-wrap w-[70%] gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            {chainData.map((chain, index) => (
              <div key={index} className='border rounded-full w-44 text-center border-blue-400 py-2 self-center max-w-full my-auto max-sm:w-20'>{chain}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;