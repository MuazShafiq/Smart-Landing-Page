function Prizes() {
    return (
        <section id='prizes' className='-mt-[2rem] flex flex-col justify-center items-center mx-40  transform scale-[79.5%]'>
            <div className='min-w-full flex flex-col bg-[#E9F5C2] justify-center items-center rounded-[0.9375rem]'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='mt-[2.94rem]'>
                        <img src="/images/prizeTrophy.png" alt="Trophy Image" className='' />
                    </div>
                    <h6 className='text-[#8DB445] font-roboto text-[1.625rem] font-extrabold text-center justify-center items-center mt-[1.37rem] mb-2'>
                        1st Prize
                    </h6>
                    <h4 className='text-[#0D3120] font-roboto text-[2.5rem] font-extrabold mb-2'>
                        PKR 250,000
                    </h4>
                    <p className='text-[#2E2E2E] text-center font-roboto text-2xl font-bold mb-[2.88rem]'>
                        And a contract to implement the winning design in selected areas of Lahore
                    </p>
                </div>
            </div>
            <div className='flex between gap-[4.38rem] mt-[1.44rem] mb-[2rem]'>
                <div className='flex items-center border-[3px] border-[#8DB445] rounded-[0.9375rem] gap-[7.62rem] pt-[1.94rem] pb-[2rem]'>
                    <p className='text-[#8DB445] font-roboto text-2xl font-extrabold ml-[1.94rem]'>
                        2nd Prize
                    </p>
                    <p className='text-[#0D3120] font-roboto text-[2.125rem] font-extrabold mr-[6.31rem]'>
                        PKR 150,000
                    </p>
                </div>
                <div className='flex items-center justify-center border-[3px] border-[#8DB445] rounded-[0.9375rem] gap-[7.62rem] pt-[1.94rem] pb-[2rem]'>
                    <p className='text-[#8DB445] font-roboto text-2xl font-extrabold ml-[1.94rem]'>
                        3rd Prize
                    </p>
                    <p className='text-[#0D3120] font-roboto text-[2.125rem] font-extrabold mr-[6.31rem]'>
                        PKR 100,000
                    </p>
                </div>
            </div>
            <div>
                <p className='text-[#2E2E2E] text-center font-roboto text-base px-40'>
                    In addition to the cash prizes, winners will receive recognition and publicity through media coverage and an exhibition showcasing the top designs
                </p>
            </div>
        </section>
    )
}

export default Prizes