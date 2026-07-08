import logo from '../assets/logo.svg';
import menu from '../assets/icon-menu.svg'
import close from '../assets/icon-close.svg'
import bed from '../assets/icon-bed.svg'
import house from '../assets/icon-house.svg'
import pin from '../assets/icon-pin.svg'


import { useState } from 'react';
import MenuButton from './MenuButton';

type MenuItemId = "stay" | "rate" | "details";

const menuItems: Array<{ id: MenuItemId; label: string; icon: string }> = [
  { id: "stay", label: "Your stay", icon: bed },
  { id: "rate", label: "The house", icon: house },
  { id: "details", label: "Around town", icon: pin },
];

const Nav = () => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState<MenuItemId>("stay");

    return(
        <nav className='h-screen p-4 flex flex-col'>
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
                        <section className='w-full py-2 px-4 bg-sun-200 rounded-2xl'>
                            <h3 className='uppercase text-neutral-600'>today in cassis</h3>
                            <p className='text-3xl font-display pt-2'>27°</p>
                            <p className='text-neutral-600'>Sunny · light breeze</p>
                        </section>
                        <hr className='text-neutral-300 my-4' />
                        <section className='text-neutral-500 text'>
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