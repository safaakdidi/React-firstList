import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h2>kedidi safa</h2>
      </div>
      <Link exact href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
