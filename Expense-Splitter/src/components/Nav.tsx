import { useState } from "react";
import { groups } from "../data";

const themeOptions = [
    {
        id: "system",
        label: "System",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
        ),
    },
    {
        id: "light",
        label: "Light",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
        ),
    },
    {
        id: "dark",
        label: "Dark",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
        ),
    },
];

const Nav = () => {
    const [activeTheme, setActiveTheme] = useState("dark");
    const [selectedGroupId, setSelectedGroupId] = useState(groups[0]?.id ?? 1);

    return(
        <nav className="bg-[#0c0f16] w-80 border-r-2 border-r-white/30 flex flex-col justify-between">
            <div className=" p-4">
                <section className="flex items-center gap-4">
                    <div className="bg-blue-400 size-12 flex items-center justify-center rounded-xl">
                        <h2 className="font-bold text-white text-xl">ES</h2>
                    </div>
                    <h2 className="text-white text-2xl font-medium">Expense Splitter</h2>
                </section>
                <section className="mt-8">
                    <p className="uppercase text-white/60 font-medium">groups</p>
                    <ul className="mt-4">
                        {groups.map((group) => {
                            const isSelected = selectedGroupId === group.id;

                            return (
                                <li
                                    key={group.id}
                                    onClick={() => setSelectedGroupId(group.id)}
                                    className={`group mt-2 flex justify-between font-medium py-2 px-4 hover:cursor-pointer rounded-xl transition-colors ${
                                        isSelected
                                            ? "bg-blue-400/20 text-white"
                                            : "text-white/80 hover:bg-blue-400/50 hover:text-white"
                                    }`}
                                >
                                    <div className="flex gap-2.5">
                                        <div
                                            className={`w-1.5 rounded-xl h-full transition-colors ${
                                                isSelected ? "bg-blue-400" : "bg-blue-400/0 group-hover:bg-blue-400"
                                            }`}
                                        ></div>
                                        <h2 className="">{group.name}</h2>
                                    </div>
                                    <p className="text-[#3ec799]">+${group.balance}</p>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            </div>
            <div className="text-white/80">
                <section className="border-t border-t-white/30 p-4 flex flex-col gap-4">
                    <button className="self-start hover:cursor-pointer">+ New group</button>
                    <div className="flex items-center justify-between">
                        <p>Theme</p>
                        <section className="flex gap-0.5 border border-white/30 rounded-xl p-2">
                            {themeOptions.map((theme) => (
                                <button
                                    key={theme.id}
                                    type="button"
                                    aria-label={theme.label}
                                    onClick={() => setActiveTheme(theme.id)}
                                    className={`rounded-lg p-1 transition-colors ${
                                        activeTheme === theme.id ? "bg-blue-400/50" : "hover:bg-white/5"
                                    }`}
                                >
                                    {theme.icon}
                                </button>
                            ))}
                        </section>
                    </div>
                </section>
            </div>
        </nav>
    )
}

export default Nav;