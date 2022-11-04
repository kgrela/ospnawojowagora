import { getDateDifference } from 'lib/date';
import Link from 'next/link';

const Hero = () => {
  const years = getDateDifference('1894-01-01');

  return (
    <header className="relative">
      <div className="absolute w-full h-full inset-0 z-0">
        <div className="w-full h-full absolute object-cover bg-gradient-to-b from-white via-white/50 to-white z-10"></div>
        <img src="woz.jpg" alt="Wóz strażacki OSP Nawojowa Góra" className="w-full h-full absolute object-cover z-0 object-top" />
      </div>
      <div className="container min-h-[480px] flex flex-col justify-center items-end gap-4">
        <h1 className="text-4xl text-right font-bold uppercase">
          Działamy <br /> nieprzerwanie <br /> już od {years} lat
        </h1>

        <div className="w-full grid grid-flow-row sm:grid-flow-col gap-3 sm:w-max">
          <Link className="w-full px-3 py-2 rounded font-bold border-2 border-primary bg-primary text-center uppercase text-white" href="/blog">
            Aktualności
          </Link>
          <Link className="w-full px-3 py-2 rounded font-bold  border-2 border-primary text-center uppercase text-primary" href="/historia">
            O Jednostce
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
