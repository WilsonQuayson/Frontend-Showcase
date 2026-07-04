type MenuButtonProps = {
    label: string;
    icon: string;
    isActive: boolean;
    onClick: () => void;
}

const MenuButton = ({label, icon, isActive, onClick}:MenuButtonProps) => {
    return(
        <button onClick={onClick} className={`w-full p-2 rounded-md hover:cursor-pointer ${isActive ? "bg-white shadow" : ""}`}>
            <div className='flex gap-2'>
                <img src={icon} alt="" className='size-6' />
                <h2>{label}</h2>
            </div>
        </button>
    )
}

export default MenuButton;