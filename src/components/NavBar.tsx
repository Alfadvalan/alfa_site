import { useState } from "react";
import logo_color from '../assets/logo_color.png';
import { CgMenu, CgClose } from "react-icons/cg";
import assistencia from '../assets/docs/assistencia.pdf';
import terceiros from '../assets/docs/terceiros.pdf';
import interno from '../assets/docs/interno.pdf';

const NavBar = () => {
    const [isNavDropdownOpen, setNavDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isIOS = /Ipad|Iphone|Ipod/.test(navigator.userAgent);
    const iosStoreLink = " https://apps.apple.com/br/app/alfa-clube/id1534942560";
    const androidStoreLink = "https://play.google.com/store/apps/details?id=hbrd.ileva.alfa";

    const downloadLink = isIOS ? iosStoreLink : androidStoreLink;

    const onToggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
  };

    const navDropdown = () => {
        setNavDropdownOpen((prevValue) => !prevValue);
    };

    const buttonClick = () => {
        window.location.href = ('https://boleto.alfacb.org.br/')
    };

    return (
        <nav className='flex items-center justify-between lg:w-[78%] w-[85%] mx-auto'>
            <div className="">
                <img src={logo_color} alt='logo' className='w-32 lg:w-40 bg-white' />
            </div>
            <div className={`lg:static absolute z-10 bg-white lg:min-h-fit p-4 ${isMobileMenuOpen ? 'top-20' : 'top-[-100%]'} w-full lg:w-auto left-0 flex items-center justify-center transition-transform duration-300 transform lg:${isNavDropdownOpen ? 'translate-y-0' : 'translate-y-full'}`}>
                <ul className='flex lg:flex-row flex-col items-center gap-8'>
                    <li>
                        <a className='hover:text-red-700' href={downloadLink} target="_blank" rel="noopener noreferrer">
                            Baixar App
                        </a>
                    </li>
                    <li className="">
                        <a
                            className='hover:text-red-700 hover:cursor-pointer'
                            onClick={navDropdown}
                        >
                            Regulamentos <span className={`font-mono ml-2 duration-300 ${isNavDropdownOpen ? 'rotate-90' : ''} inline-block`}>{'>'}</span>
                        </a>
                        {isNavDropdownOpen && (
                            <ul className='absolute cursor-pointer flex flex-col justify-center pt-5 px-2 bg-white'>
                                <li className="w-full border-b-1 p-2 border-gray-100 hover:bg-gray-50 text-center">
                                    <a href={interno} type="application/pdf" download="Regulamento Interno">Regulamento Interno</a>
                                </li>
                                <li className="w-full border-b-1 p-2 border-gray-100 hover:bg-gray-50 text-center">
                                    <a href={terceiros} type="application/pdf" download="Regulamento Terceiros">Regulamento Terceiros</a>
                                </li>
                                <li className="w-full border-b-1 p-2 border-gray-100 hover:bg-gray-50 text-center">
                                    <a href={assistencia} type="application/pdf" download="Manual da Assistência">Manual da Assistência</a>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-6'>
                <button className='bg-red-700 rounded-lg text-white capitalize font-extrabold hover:animate-spin shadow-md hover:shadow-red-700/80 shadow-red-700/50 hover:scale-[1.03] md:p-3 lg:text-base text-sm p-2' onClick={buttonClick}>2ª via de boleto</button>
                {isMobileMenuOpen ? (
                    <CgClose className="text-3xl cursor-pointer lg:hidden" onClick={onToggleMobileMenu} />
                ) : (
                    <CgMenu className="text-3xl cursor-pointer lg:hidden" onClick={onToggleMobileMenu} />
                )}
            </div>
        </nav>
    );
}

export default NavBar;
