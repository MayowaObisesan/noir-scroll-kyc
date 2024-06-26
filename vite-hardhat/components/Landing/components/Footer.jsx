import { FaFacebookF, FaLinkedin, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="justify-center items-center self-stretch flex w-full flex-col px-20 pt-16 pb-8 border-t-zinc-500 border-t-opacity-50 border-t border-solid max-md:max-w-full max-md:px-5 max-md:py-24 max-sm:p-8">
      <div className="items-start self-center flex mb-0 w-full flex-col max-md:max-w-full max-md:mb-2.5">
        <div className="self-stretch max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[36%] max-md:w-full max-md:ml-0">
              <div className="items-start flex flex-col max-md:mt-10">
                <div className="items-start self-stretch flex flex-col">
                  <div className="text-4xl font-bold self-stretch whitespace-nowrap max-md:text-3xl max-sm:text-xl">
                    iris<span className='text-blue-500 irish'>-I</span>
                  </div>
                  <div className="text-neutral-400 leading-7 self-stretch mt-4 max-sm:text-sm max-sm:mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, vel!
                  </div>
                </div>
                <div className="items-start self-stretch flex w-full gap-6 mt-8 max-sm:mt-4">
                  <FaFacebookF />
                  <FaXTwitter />
                  <FaLinkedinIn />
                  <FaYoutube />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[64%] ml-5 max-md:w-full max-md:ml-0">
              <div className="grow mt-8 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
                    <div className="items-start flex w-full grow justify-start gap-20 max-md:mt-10 max-sm:mt-0">
                      <div className="items-start self-stretch flex flex-col">
                        <div className="text-xl font-bold self-stretch whitespace-nowrap max-sm:text-base">
                          Home
                        </div>
                        <div className="items-start self-stretch flex grow flex-col mt-10 max-sm:mt-7 max-sm:text-sm">
                          <div className="self-stretch whitespace-nowrap">Home</div>
                          <div className="self-stretch whitespace-nowrap mt-8 max-sm:mt-5">
                            About
                          </div>
                          <div className="self-stretch whitespace-nowrap mt-8 max-sm:mt-5">
                            App
                          </div>
                        </div>
                      </div>
                      <div className="items-start self-stretch flex flex-col">
                        <div className="text-xl font-bold self-stretch whitespace-nowrap max-sm:text-base">
                          Lorem
                        </div>
                        <div className="items-start self-stretch flex grow flex-col mt-10 max-sm:mt-7 max-sm:text-sm">
                          <div className="self-stretch whitespace-nowrap">Lorem</div>
                          <div className="self-stretch whitespace-nowrap mt-8 max-sm:mt-5">
                            Ipsum
                          </div>
                          <div className="self-stretch whitespace-nowrap mt-8 max-sm:mt-5">
                            Dolor
                          </div>
                          <div className="self-stretch whitespace-nowrap mt-8 max-sm:mt-5">Sit</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-start flex flex-col max-md:mt-10">
                      <div className="items-start self-stretch flex flex-col">
                        <div className="text-xl font-bold self-stretch whitespace-nowrap max-sm:text-base">
                          Subscribe to our newsletter
                        </div>
                        <div className="text-neutral-400 leading-7 self-stretch mt-4 max-sm:mt-2 max-sm:text-sm">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, vel!
                        </div>
                      </div>
                      <input
                        type="email"
                        className="border outline-none pl-4 bg-gray-100 bg-opacity-50 self-stretch flex w-full h-[48px] flex-col mt-10 rounded-lg border-solid border-gray-400 max-sm:mt-5 max-sm:h-[36px] max-sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center items-center self-stretch flex grow flex-col mt-16 pt-9 px-20 border-t-zinc-500 border-t-opacity-50 border-t border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="text-center self-center whitespace-nowrap max-sm:text-xs">
            <span className="">Copyright @ </span>
            <span className="text-blue-500">2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;