import iconSun from '../assets/icon-sun.svg';
import barcode from "../assets/icon-barcode.svg";
import key from "../assets/icon-key.svg";
import wifi from "../assets/icon-wifi.svg";
import bell from "../assets/icon-breakfast.svg";

const Home = () => {
    return(
        <main className="overflow-hidden px-4 pb-12 lg:pb-0 lg:p-8 text-[14px]">
            <section className='lg:flex lg:justify-between'>
                <div>
                    <p className="uppercase text-neutral-500 font-mono">booking · confirmed</p>
                    <h1 className="text-4xl font-display">Bienvenue, <span className="text-terracotta-500 italic">Lucia.</span></h1>
                </div>
                <div className="mt-4 flex gap-4">
                    <button className="h-8 lg:h-10 flex-1 rounded-2xl border border-neutral-900 font-bold hover:cursor-pointer lg:w-46 lg:rounded-4xl">Print receipt</button>
                    <button className="h-8 lg:h-10 flex-1 rounded-2xl border bg-neutral-900 text-sun-50 hover:cursor-pointer lg:w-46 lg:rounded-4xl">Add to calendar</button>
                </div>
            </section>
            <section className='lg:flex lg:justify-center lg:mt-16'>
                <div className="z-10 relative mt-8 flex w-full lg:w-100 flex-col rounded-2xl bg-linear-to-tr from-terracotta-700 to-terracotta-400 p-4 shadow-terracotta-700/50 shadow-xl rotate-2 lg:-rotate-6">
                    <hr className="border-t border-dashed border-sun-200/20" />
                    <h3 className="uppercase mt-4 text-[12px] text-sun-50">welcome card</h3>
                    <img src={iconSun} className='size-12 absolute right-3 top-8' alt="" />
                    <p className='mt-12 font-display italic text-sun-200/80 text-xl'>A note from your host,</p>
                    <p className='text-sun-50 text-4xl italic font-display mt-2'>Margaux.</p>
                    <p className='mt-6 text-sun-50'>We're so glad you're coming. the shutters will be open, the lemonade cold, and the cat - Poivre - pretending not to notice you.</p>
                    <section className='mt-12'>
                        <p className='uppercase text-sun-50 text-[8px]'>room</p>
                        <h3 className='font-display text-sun-50 text-xl font-light'>La Garrigue</h3>
                    </section>
                </div>
                <div className="flex w-full lg:w-100  flex-col bg-white rounded-2xl p-4 shadow-xl -rotate-2 lg:rotate-6">
                    <section className='flex justify-between'>
                        <div>
                            <p className='font-sans text-neutral-500'>Receipt</p>
                            <p className='font-display text-xl'>Your stay</p>
                        </div>
                        <div className='text-end text-xs'>
                            <p className='font-sans text-neutral-500'>No MS-2026</p>
                            <p className='font-sans text-neutral-500'>0421 - AH</p>
                        </div>
                    </section>
                    <hr className="border-t mt-4 border-dashed border-neutral-500/20" />
                    <section className='flex justify-between mt-4'>
                        <section className='flex flex-col gap-2 text-center'>
                            <p className='font-sans text-neutral-500'>CHECK IN</p>
                            <p className='text-4xl font-display'>25 Apr</p>
                            <p className='text-neutral-500'>Saturday · 15:00</p>
                        </section>
                        <section className='flex flex-col gap-2 text-center'>
                            <p className='font-sans text-neutral-500'>CHECK OUT</p>
                            <p className='text-4xl font-display'>29 Apr</p>
                            <p className='text-neutral-500'>Wednesday · 11:00</p>
                        </section>
                    </section>
                    <hr className="border-t mt-4 border-dashed border-neutral-500/20" />
                    <section className='py-4 flex flex-col gap-2'>
                        <div className='flex justify-between'>
                            <p className='font-sans'>Room · La Garrigie x 4 nights</p>
                            <p className='font-mono'>€ 620.00</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='font-sans'>Breakfast x 2 guests</p>
                            <p className='font-mono'>€ 96.00</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='font-sans'>Tourist tax</p>
                            <p className='font-mono'>€ 14.40</p>
                        </div>
                    </section>
                    <hr className="border-t mb-4 border-neutral-500" />
                    <section className='flex flex-col gap-4'>
                        <section className='flex items-center justify-between'>
                            <p className='uppercase'>total paid</p>
                            <p className='font-display text-3xl'>€ 14.40</p>
                        </section>
                        <section className='uppercase flex items-center justify-between'>
                            <p>paid · wise · gbp</p>
                            <img src={barcode} alt="" />
                        </section>
                    </section>
                </div>
            </section>
            <section className='mt-12 lg:mt-22 flex flex-col lg:flex-row gap-4'>
                <div className='bg-white w-full p-4 rounded-2xl border border-neutral-400 shadow-md lg:h-60'>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2 items-center'>
                            <div className='bg-terracotta-600 size-8 rounded-md flex justify-center items-center'>
                                <img src={key} alt="" className='size-6' />
                            </div>
                            <h3 className='uppercase font-mono text-terracotta-600 font-medium'>arrival</h3>
                        </div>
                        <p className='text-xl font-display text-terracotta-600'>01</p>
                    </div>
                    <div className='flex flex-col gap-2 mt-6'>
                        <p className='text-xl font-display'>Check-in-from- 15:00</p>
                        <p className='text-xs text-neutral-700'>Sat, 25 April</p>
                        <p className='mt-2 text-xs text-neutral-700'>Ring the brass bell by the blue door. if we're at the market, the keys is in the terracotta pot by the olive tree</p>
                    </div>
                </div>
                <div className='bg-white w-full p-4 rounded-2xl border border-neutral-400 shadow-md'>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2 items-center'>
                            <div className='bg-blue-800/70 size-8 rounded-md flex justify-center items-center'>
                                <img src={wifi} alt="" className='size-6' />
                            </div>
                            <h3 className='uppercase font-mono text-blue-800/70 font-medium'>arrival</h3>
                        </div>
                        <p className='text-xl font-display text-blue-800/70'>02</p>
                    </div>
                    <div className='flex flex-col gap-2 mt-6'>
                        <p className='text-xl font-display'>Check-in-from- 15:00</p>
                        <p className='text-xs text-neutral-700'>Sat, 25 April</p>
                        <p className='mt-2 text-xs text-neutral-700'>Ring the brass bell by the blue door. if we're at the market, the keys is in the terracotta pot by the olive tree</p>
                    </div>
                </div>
                <div className='bg-white w-full p-4 rounded-2xl border border-neutral-400 shadow-md'>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2 items-center'>
                            <div className='bg-pink-900/80 size-8 rounded-md flex justify-center items-center'>
                                <img src={bell} alt="" className='size-6' />
                            </div>
                            <h3 className='uppercase font-mono text-pink-900/80 font-medium'>arrival</h3>
                        </div>
                        <p className='text-xl font-display text-pink-900/80'>01</p>
                    </div>
                    <div className='flex flex-col gap-2 mt-6'>
                        <p className='text-xl font-display'>Check-in-from- 15:00</p>
                        <p className='text-xs text-neutral-700'>Sat, 25 April</p>
                        <p className='mt-2 text-xs text-neutral-700'>Ring the brass bell by the blue door. if we're at the market, the keys is in the terracotta pot by the olive tree</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;