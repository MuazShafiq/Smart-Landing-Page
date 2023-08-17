function JudgingCriteria() {
    return (
        <section id="judging-criteria" className='-mt-[1.75rem] flex flex-col bg-[#E9F5C2] items-center pt-[3.87rem] pb-[6.19rem] gap-14 -z-10 transform scale-[79.5%] min-w-[125.8%]'>
            <h5 className='text-[#2E2E2E] font-youlit text-[2.5rem] uppercase text-center'>
                Judging Criteria
            </h5>
            <ul className='flex gap-24'>
                <li className=''>
                    <div className='flex flex-col space-between text-4xl text-[#2E2E2E] font-raleway font-bold items-center'>
                        <h6>
                            30<span className='text-2xl'>%</span>
                        </h6>
                        <p className='text-[#2E2E2E] font-roboto text-base font-bold text-center mt-[1.88rem]'>
                            Creativity and innovation
                        </p>
                    </div>
                </li>
                <li className=''>
                    <div className='flex flex-col space-between text-4xl text-[#2E2E2E] font-raleway font-bold items-center'>
                        <h6>
                            25<span className='text-2xl'>%</span>
                        </h6>
                        <p className='text-[#2E2E2E] font-roboto text-base font-bold mt-[1.88rem] text-center'>
                            Sustainability and environmental impact
                        </p>
                    </div>
                </li>
                <li className=''>
                    <div className='flex flex-col space-between text-4xl text-[#2E2E2E] font-raleway font-bold items-center'>
                        <h6>
                            25<span className='text-2xl'>%</span>
                        </h6>
                        <p className='text-[#2E2E2E] font-roboto text-base font-bold mt-[1.88rem] text-center'>
                            Cost effectiveness and scalability
                        </p>
                    </div>
                </li>
                <li className=''>
                    <div className='flex flex-col space-between text-4xl text-[#2E2E2E] font-raleway font-bold items-center'>
                        <h6>
                            20<span className='text-2xl'>%</span>
                        </h6>
                        <p className='text-[#2E2E2E] font-roboto text-base font-bold mt-[1.88rem] text-center'>
                            User experience and accessibility
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default JudgingCriteria