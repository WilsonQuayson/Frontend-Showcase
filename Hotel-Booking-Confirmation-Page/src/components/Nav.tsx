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
        <nav className='p-4'>
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
            )}
        </nav>
    )
}

export default Nav;