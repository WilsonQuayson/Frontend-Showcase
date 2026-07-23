import logo from '../assets/logo.svg';
import menu from '../assets/icon-menu.svg'
import close from '../assets/icon-close.svg'
import bed from '../assets/icon-bed.svg'
import house from '../assets/icon-house.svg'
import pin from '../assets/icon-pin.svg'
import weather from '../assets/icon-weather.svg'
import breakfast from '../assets/icon-breakfast-outline.svg'
import mail from '../assets/icon-mail.svg'


import { useState } from 'react';
import MenuButton from './MenuButton';

type MenuItemId = "stay" | "rate" | "details" | "breakfast" | "mail";

const menuItems: Array<{ id: MenuItemId; label: string; icon: string }> = [
  { id: "stay", label: "Your stay", icon: bed },
  { id: "rate", label: "The house", icon: house },
  { id: "details", label: "Around town", icon: pin },
  { id: "breakfast", label: "Breakfast", icon: breakfast },
  { id: "mail", label: "Messages", icon: mail },
];

const Nav = () => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState<MenuItemId>("stay");

    return(
        <nav className={`w-full bg-sun-50 p-4 flex flex-col ${open ? "fixed inset-0 z-50 h-screen" : "relative"}`}>
            <section className='pb-4 flex justify-between border-b border-neutral-300'>
                <section>
                    <img src={logo} alt="" /> 
                </section>
                <section>
                    <button onClick={() => setOpen(!open)} className='border border-neutral-300 rounded-md p-1 hover:cursor-pointer'>
                        <img src={open ? close : menu} alt="" /> 
                    </button>
                </section>
            </section>
            {open && (
                <section className='flex-1 flex flex-col justify-between animate-nav-open'>
                    <section className="w-full pt-4 flex flex-col gap-2">
                        {menuItems.map((item) => (
                            <MenuButton
                            key={item.id}
                            label={item.label}
                            icon={item.icon}
                            isActive={activeItem === item.id}
                            onClick={() => setActiveItem(item.id)}
                            />
                        ))}
                    </section>
                    <section>
                        <section className='w-full py-2 px-4 bg-sun-200 rounded-2xl relative overflow-hidden'>
                            <img className='absolute -right-2 -top-7' src={weather} alt="" />
                            <h3 className='uppercase font-mono text-xs text-neutral-700'>today in cassis</h3>
                            <p className='text-3xl font-display pt-2'>27°</p>
                            <p className='text-neutral-700 text-xs'>Sunny · light breeze</p>
                        </section>
                        <hr className='text-neutral-300 my-4' />
                        <section className='text-neutral-500 text-xs'>
                            <p >EST. 1987</p>
                            <p className='py-2'>MAISON SOLEIL · 12 RUE DES OLIVIERS · CASSIS</p>
                            <p>© 2026 MAISON SOLEIL</p>
                        </section>
                    </section>
                </section>
            )}
        </nav>
    )
}

export default Nav;