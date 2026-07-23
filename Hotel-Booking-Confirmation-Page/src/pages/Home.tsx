import iconSun from '../assets/icon-sun.svg';

const Home = () => {
    return(
        <main className="px-4 text-[14px]">
            <section>
                <p className="uppercase text-neutral-500 font-mono">booking · confirmed</p>
                <h1 className="text-4xl font-display">Bienvenue, <span className="text-terracotta-500 italic">Lucia.</span></h1>
                <section className="flex gap-4 mt-4">
                    <button className="border border-neutral-900 font-bold w-full rounded-2xl h-8 hover:cursor-pointer">Print receipt</button>
                    <button className="border bg-neutral-900 text-sun-50 w-full rounded-2xl hover:cursor-pointer">Add to calendar</button>
                </section>
            </section>
            <section>
                <div className="relative mt-8 flex h-60 w-full flex-col rounded-2xl bg-linear-to-tr from-terracotta-700 to-terracotta-400 p-4">
                    <hr className="border-t-2 border-dashed border-sun-200/20" />
                    <h3 className="uppercase mt-4 text-[12px] text-sun-50">welcome card</h3>
                    <img src={iconSun} className='size-12 absolute right-3 top-8' alt="" />
                    <p className='mt-12 font-display italic'>A note from your host,</p>
                </div>
            </section>
        </main>
    )
}

export default Home;