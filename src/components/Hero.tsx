import { getDateDifference } from 'lib/date';

const Hero = () => {
  return (
    <header className="relative">
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <img className="w-full h-full object-cover md:object-contain z-0" src="/hero.png" alt="OSP Nawojowa Góra" />
      </div>
      <div className="container flex justify-center items-center py-44 md:py-52">
        <h2 className="text-3xl md:text-5xl grid grid-flow-row gap-4 text-shadow-lg text-white text-center font-semibold">
          <span>Działamy</span>
          <span>nieprzerwanie już od</span>
          <span>{getDateDifference('1894-01-01')} lat</span>
        </h2>
      </div>
    </header>
  );
};

export default Hero;
