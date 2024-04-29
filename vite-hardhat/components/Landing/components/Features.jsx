import a from '../../../assets/verification.png';
import b from '../../../assets/fraud.png';
import c from '../../../assets/onboard.png';
import Feature from './Feature';

function Features() {
  const featureData = [
    {
      title: 'KYC Verification',
      imageUrl: a,
      description: 'Comply with regulations and directives affecting your business.',
    },
    {
      title: 'Fraud Detection',
      imageUrl: b,
      description: 'Prevent fraud by securing your systems with biometric recognition service',
    },
    {
      title: 'Easy Onboarding',
      imageUrl: c,
      description: 'Minimize user onboarding and increase the volume of quality customers'
    },
  ];

  return (
    <div className="justify-center items-center self-stretch flex w-full flex-col px-20 max-md:max-w-full max-md:px-5 max-sm:py-8">
      <div className="items-center self-center flex w-full flex-col max-md:max-w-full">
        <div className="md:w-full text-center text-4xl max-md:text-3xl max-sm:text-xl font-bold self-center whitespace-nowrap">
          <span>zk</span>
          <span className="text-blue-500">ID</span>
          <span> is for you</span>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-12 max-md:mt-10 max-sm:mt-0 max-sm:gap-0">
          {featureData.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;