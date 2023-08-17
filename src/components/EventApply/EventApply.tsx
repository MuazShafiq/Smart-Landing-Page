function EventApply() {
    return (
        <section id='event-apply' className='flex flex-col mt-[4rem] ml-[9rem] mr-[50rem]  transform scale-[79.5%]'>
            <h4 className='text-[#2E2E2E] font-montserrat text-4xl font-bold'>
                Hurry Up! Get Your Event Pass
            </h4>
            <p className='text-[#2E2E2E] font-roboto text-base opacity-70 mb-[2.44rem] mt-[3.77rem]'>
                For more info, visit the link in bio or our website to register for this challenge! Are you ready for it?
            </p>
            <div className='container mx-auto'>
                <button data-name='apply-now-button' className='px-8 py-4 bg-[#0D3120] flex justify-center text-white font-montserrat text-2xl font-bold items-center rounded-lg'>
                    Apply Now !
                </button>
            </div>
        </section>
    )
}

export default EventApply