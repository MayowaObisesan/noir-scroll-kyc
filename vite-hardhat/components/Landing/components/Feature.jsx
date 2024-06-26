function Feature({ title, imageUrl, description }) {
    return (
      <div className="flex flex-col items-stretch my-4 max-md:w-full max-md:ml-0 max-sm:-my-2">
        <div className="bg-blue-100 shadow-cs-5md flex w-[80vw] md:w-[36vw] lg:w-[24vw] grow flex-col mx-auto px-11 py-14 rounded-2xl max-md:mt-10 max-md:px-5 max-sm:py-8 max-sm:w-[75vw]">
          <div className="items-center self-stretch flex flex-col">
            <img
              loading="lazy"
              alt=""
              src={imageUrl}
              className="aspect-square w-40 scale-50 object-contain object-center justify-center items-center overflow-hidden self-center max-w-full"
            />
            <div className="text-center">
              <div className="text-2xl font-bold leading-10 self-stretch mt-5 max-sm:mt-0 max-sm:text-base">
                {title}
              </div>
              <p className="text-gray-900">{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Feature;