import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import classes from './mainHeader.module.css';
import Image from 'next/image';
import HeaderBackground from './headerBackground';
import NavLink from './navLink';

const MainHeader = () => {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link href='/' className={classes.logo}>
          <Image src={logoImg} alt='A plate with food on it' priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href={'/meals'}>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href={'/community'}>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default MainHeader;
