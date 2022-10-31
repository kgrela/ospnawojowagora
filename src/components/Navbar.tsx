import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="OSP Nawojowa Góra"
            width={48}
            height={48}
          />
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/">Strona główna</Link>
          <Link href="/blog">Aktualności</Link>
          <div className="peer relative">
            <span className="peer" tabIndex={0}>
              Jednostka
            </span>
            <div className="hidden  focus-visible:grid peer-focus-visible:grid grid-flow-row absolute top-full mt-4">
              <Link href="/jednostka/historia">Historia</Link>
            </div>
          </div>
          <Link href="/biblioteka">Biblioteka</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
