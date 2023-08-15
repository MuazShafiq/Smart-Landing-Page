function Header() {
    return (
        <section data-name='competition' className='flex flex-col items-center gap-11 transform scale-[79.5%] -mt-5'>
            <h5 className='text-[#2E2E2E] font-youlit text-[2.5rem] leading[3.25rem] uppercase text-center px-80'>
                The competition is open to individuals, teams, and organizations, including
            </h5>
            <div className='flex gap-4'>
                <div className='relative'>
                    <img src="images/comp1.png" alt="Backgorund Image" className='w-full h-auto' />
                    <div className='absolute top-[10.5rem] left-[1.25rem] w-full h-full flex'>
                        <p className='text-white font-roboto text-[1.375rem] font-bold'>
                            Students from universities and colleges
                        </p>
                    </div>
                </div>
                <div className='relative'>
                    <img src="images/comp2.png" alt="Backgorund Image" className='w-full h-auto' />
                    <div className='absolute top-[10.5rem] left-[1.25rem] w-full h-full flex'>
                        <p className='text-white font-roboto text-[1.375rem] font-bold'>
                            NGOs and community organizations
                        </p>
                    </div>
                </div>
                <div className='relative'>
                    <img src="images/comp3.png" alt="Backgorund Image" className='w-full h-auto' />
                    <div className='absolute top-[10.5rem] left-[1.25rem] w-full h-full flex'>
                        <p className='text-white font-roboto text-[1.375rem] font-bold'>
                            Start-ups and entrepreneurs
                        </p>
                    </div>
                </div>
                <div className='relative'>
                    <img src="images/comp4.png" alt="Backgorund Image" className='w-full h-auto' />
                    <div className='absolute top-[10.5rem] left-[1.25rem] w-full h-full flex'>
                        <p className='text-white font-roboto text-[1.375rem] font-bold'>
                            Design firms and professionals
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header