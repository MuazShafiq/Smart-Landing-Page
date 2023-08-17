function Submission() {
    return (
        <section id='submission' className='-mt-[2.75rem] mx-44 flex gap-[4.38rem] justify-center items-center  transform scale-[79.5%]'>
            <img src="/images/submissionImg.png" alt="decoration" className='' />
            <div className='flex flex-col gap-8 justify-center pr-12'>
                <h5 className='text-[#2E2E2E] font-youlit text-[2.5rem] uppercase'>
                    Submission Requirements
                </h5>
                <ul className='flex flex-col gap-2'>
                    <li className='text-[#2E2E2E] font-roboto text-base font-medium flex items-center gap-[0.88rem]'>
                        <img src="/images/bullet.png" alt="" className='' />
                        Detailed project description (max. 1000 words)
                    </li>
                    <li className='text-[#2E2E2E] font-roboto text-base font-medium flex items-center gap-[0.88rem]'>
                        <img src="/images/bullet.png" alt="" className='' />
                        Design sketches or 3D renderings
                    </li>
                    <li className='text-[#2E2E2E] font-roboto text-base font-medium flex items-center gap-[0.88rem]'>
                        <img src="/images/bullet.png" alt="" className='' />
                        List of materials and technologies used
                    </li>
                    <li className='text-[#2E2E2E] font-roboto text-base font-medium flex items-center gap-[0.88rem]'>
                        <img src="/images/bullet.png" alt="" className='' />
                        Estimated cost of production and implementation
                    </li>
                    <li className='text-[#2E2E2E] font-roboto text-base font-medium flex items-start gap-[0.88rem]'>
                        <img src="/images/bullet.png" alt="" className='mt-2' />
                        Proof of concept, if applicable (e.g., prototype, working model, or video demonstration)
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Submission