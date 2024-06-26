import { Link } from 'react-router-dom';
import id_img from '../../../assets/unsplash.png';

const Hero = () => {
  return (
    <div className="justify-center items-center self-stretch flex w-full flex-col px-20 max-md:max-w-full max-lg:px-8 overflow-hidden">
      <div className="items-start self-center flex w-full flex-col max-md:max-w-full">
        <div className="justify-between self-stretch max-md:max-w-full">
          <div className="gap-5 flex justify-between max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
              <div className="items-start flex mr-0 flex-col my-auto max-md:max-w-full max-md:mt-10 max-sm:mt-0">
                <div className="justify-center items-center flex max-w-full flex-col self-start">
                  <div className="text-6xl font-bold leading-tight self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[52px] max-sm:text-3xl max-sm:leading-relaxed">
                    <span className="">Welcome to </span>
                    <span className="text-cs-light-purple">iris</span>
                    <span className="text-blue-500 irish">-I</span>
                  </div>
                  <div className="text-xl leading-relaxed self-stretch mt-6 max-md:max-w-full max-md:mt-10 max-sm:text-sm max-sm:mt-4 max-sm:leading-loose">
                    All-in-one identity verification platform to onboard more users
                  </div>
                </div>
                <div className="items-start flex max-w-full justify-between gap-5 mt-14 self-start max-md:flex-wrap max-md:mt-10 max-sm:gap-2 max-sm:mt-8">
                  <Link
                    to="/verify"
                    className="text-white bg-blue-500 text-xl font-bold self-center whitespace-nowrap justify-center items-center bg-cs-light-purple flex-1 px-7 py-3 rounded-2xl max-md:px-5 max-sm:text-sm max-sm:px-4 max-sm:py-2 max-sm:rounded-xl"
                  >
                    Enter App
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[90%] translate-x-40 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src={id_img}
                alt=""
                className="aspect-[1.23] translate-x-[-15%] object-contain object-center w-full overflow-hidden grow max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;