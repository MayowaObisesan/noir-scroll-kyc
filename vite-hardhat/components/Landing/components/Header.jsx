// import { Link } from 'react-router-dom';
import NavButton from './NavButton';
import { SiHiveBlockchain } from 'react-icons/si';

const Header = () => {
  return (
    <header>
      <nav
        className="flex items-center justify-between px-8 py-6 lg:px-20 lg:py-10"
        aria-label="Global"
      >
        <div className="justify-between items-center self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
          <a
            href="/"
            className="text-3xl font-bold major-flex gap-2 bg-clip-text max-md:text-2xl max-sm:text-xl"
          >
            {/* <SiHiveBlockchain className="text-cs-light-purple" /> */}
            zk<span className='text-blue-500'>ID</span>
          </a>
          <div className="flex lg:hidden">
            <NavButton />
          </div>
          <div className="items-start self-center hidden lg:flex w-[521px] max-w-full justify-between gap-5 my-auto max-md:flex-wrap max-md:justify-center">
            <div className="text-blue-500 text-xl self-stretch">Home</div>
            <div className="text-gray-500 text-xl self-stretch">About</div>
            <div className="text-gray-500 text-xl self-stretch">Pricing</div>
          </div>
          <a
            href="/app"
            className="text-white bg-blue-500 text-xl hidden lg:flex font-bold self-stretch whitespace-nowrap justify-center items-center bg-cs-light-purple px-6 py-3 rounded-xl max-md:px-5"
          >
            Enter App
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;