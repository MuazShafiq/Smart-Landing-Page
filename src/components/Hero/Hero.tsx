function Hero() {
    return (
        <section id='hero' className="mt-[0.7rem]">
            <div className="container mx-auto flex flex-col justify-center items-center transform scale-[79.5%]">
                <div className=''>
                    <div className='container mx-auto'>
                        <img src="/images/logo.png" alt="Smart Bin Logo" className='mx-auto' />
                    </div>
                    <div data-name='content' className='mt-[1.26rem] flex flex-col gap-[2.5rem]'>
                        <h1 className='text-white px-28 uppercase text-center text-8xl font-youlit leading-[4.6875rem]'>
                            Lahore Waste Management Company Smart Bin Design Challenge’23
                        </h1>
                        <div className='container flex flex-col gap-[1rem]'>
                            <h6 className='text-[#DFF1A4] font-roboto font-bold text-center text-2xl'>
                                In collaboration with
                            </h6>
                            <div className='container flex justify-center items-center gap-8'>
                                <img src="/images/onebyte.png" alt="OneByte Logo" className='' />
                                <img src="/images/gsma.png" alt="GSMA Logo" className='' />
                            </div>
                        </div>
                        <div className='container mx-auto'>
                            <h2 className='font-roboto font-bold text-white text-[2.5rem] text-center'>
                                Get a chance to win <span className='text-[#CCF459] text-5xl'>Rs. 250,000</span> for your concept!
                            </h2>
                        </div>
                    </div>
                    <div className='mt-[1.69rem]'>
                        <h6 className='font-roboto text-white font-bold text-center text-2xl shadow-md'>
                            Deadline to Apply : May 15, 2023.
                        </h6>
                    </div>
                    <div className='mx-auto flex items-center justify-center mt-[1.19rem]'>
                        <button className='bg-white text-[#0D3120] font-montserrat font-bold text-2xl py-4 px-8 rounded-lg'>
                            Apply Now !
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Hero