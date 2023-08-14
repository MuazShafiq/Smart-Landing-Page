import './App.css'

function App() {

  return (
    <div className='flex flex-col items-center'>
      <section data-name='hero' className="min-h-screen max-h-screen bg-[url('/images/bgImg.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="container mx-auto flex flex-col justify-center items-center transform scale-[79.5%]">
          <nav className='-mt-[6.5rem] py-[3.12rem]'>
            <ul className='flex items-end justify-center gap-10 font-montserrat'>
              <li className='font-semibold text-white text-sm uppercase'>
                <a href="#">Home</a>
              </li>
              <li className='font-semibold text-white text-sm uppercase'>
                <a href="#">Idea</a>
              </li>
              <li className='font-semibold text-white text-sm uppercase'>
                <a href="#">Competition</a>
              </li>
              <li className='font-semibold text-white text-sm uppercase'>
                <a href="#">Design Criteria</a>
              </li>
              <li className='font-semibold text-white text-sm uppercase'>
                <a href="#">Requirements</a>
              </li>
              <li className='font-semibold text-white text-sm uppercase'>
                <a href="#">Prize</a>
              </li>
              <li className='font-semibold text-white text-sm uppercase'>
                <a href="#">Judging</a>
              </li>
              <li className='font-semibold text-white text-sm uppercase'>
                <a href="#">Registration</a>
              </li>
            </ul>
          </nav>
          <div className='mt-[3.5rem]'>
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
      <div data-name='pattern' className='container mx-auto relative -z-1'>
        <img src="/images/pattern.png" alt="" className='mt-[3.13rem] absolute flex justify-center items-center' />
      </div>
      <section data-name='idea' className='mt-[3.13rem] mx-44 flex gap-[4.38rem] justify-center items-center  transform scale-[79.5%]'>
        <img src="/images/ideaImg.png" alt="decoration" className='' />
        <div className='flex flex-col gap-8 justify-center'>
          <h5 className='text-[#2E2E2E] font-youlit text-[2.5rem] uppercase'>
            The Idea
          </h5>
          <p className='text-[#2E2E2E] font-roboto text-base opacity-70'>
            To invite creative, innovative, and sustainable smart bin designs that effectively address the waste management challenges faced by the city of Lahore, Pakistan. The competition aims to encourage the development of efficient, eco-friendly, and technologically advanced waste bins that contribute to a cleaner and greener city.
          </p>
        </div>
      </section>
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
      <section data-name='design-criteria' className='-mt-[3rem] flex justify-center px-10 items-center  transform scale-[79.5%]'>
        <div data-name='about-music' className='flex justify-center items-center gap-[6.81rem]'>
          <div data-name='content' className='justify-center flex flex-col gap-9 max-w-[35rem]'>
            <h5 className='text-[#2E2E2E] font-youlit text-[2.5rem] uppercase '>
              Design Criteria
            </h5>
            <p className='text-[#2E2E2E] font-roboto text-base opacity-70'>
              To invite creative, innovative, and sustainable smart bin designs that effectively address the waste management challenges faced by the city of Lahore, Pakistan. The competition aims to encourage the development of efficient, eco-friendly, and technologically advanced waste bins that contribute to a cleaner and greener city. You can design either a commercial smart bin, or a public space smart bin.
            </p>
          </div>
        </div>
        <div data-name='design1And3' className='flex flex-col ml-[6.81rem] mr-[1.87rem] gap-[2.38rem]'>
          <div data-name='design1' className='relative flex items-start justify-center'>
            <img src="images/design1.png" alt="Design Infographic" className='w-full h-auto' />
            <div className='absolute top-[6.5rem] left-[1.25rem] w-full h-full flex flex-col gap-[0.94rem]'>
              <h6 className='text-[#2E2E2E] font-montserrat text-xl font-bold'>
                Sustainability
              </h6>
              <p className='text-[#2E2E2E] font-roboto text-[0.875rem] leading-[1rem] mr-14'>
                To invite creative, innovative, and sustainable smart bin designs that effectively address the waste management challenges faced by the city of Lahore, Pakistan.
              </p>
            </div>
          </div>
          <div data-name='design3' className='relative flex items-start justify-center'>
            <img src="images/design3.png" alt="Design Infographic" className='w-full h-auto' />
            <div className='absolute top-[6.5rem] left-[1.25rem] w-full h-full flex flex-col gap-[0.94rem]'>
              <h6 className='text-[#2E2E2E] font-montserrat text-xl font-bold'>
                User Experience
              </h6>
              <p className='text-[#2E2E2E] font-roboto text-[0.875rem] leading-[1rem] mr-14'>
                To invite creative, innovative, and sustainable smart bin designs that effectively address the waste management challenges faced by the city of Lahore, Pakistan.
              </p>
            </div>
          </div>
        </div>
        <div data-name='design2-4-5' className='flex flex-col gap-[2.38rem]'>
          <div data-name='design2' className='relative flex items-start justify-center'>
            <img src="images/design2.png" alt="Design Infographic" className='w-full h-auto' />
            <div className='absolute top-[6.5rem] left-[1.25rem] w-full h-full flex flex-col gap-[0.94rem]'>
              <h6 className='text-[#2E2E2E] font-montserrat text-xl font-bold'>
                Innovation
              </h6>
              <p className='text-[#2E2E2E] font-roboto text-[0.875rem] leading-[1rem] mr-14'>
                To invite creative, innovative, and sustainable smart bin designs that effectively address the waste management challenges faced by the city of Lahore, Pakistan.
              </p>
            </div>
          </div>
          <div data-name='design4' className='relative flex items-start justify-center'>
            <img src="images/design4.png" alt="Design Infographic" className='w-full h-auto' />
            <div className='absolute top-[6.5rem] left-[1.25rem] w-full h-full flex flex-col gap-[0.94rem]'>
              <h6 className='text-[#2E2E2E] font-montserrat text-xl font-bold'>
                Cost-effectiveness
              </h6>
              <p className='text-[#2E2E2E] font-roboto text-[0.875rem] leading-[1rem] mr-14'>
                To invite creative, innovative, and sustainable smart bin designs that effectively address the waste management challenges faced by the city of Lahore, Pakistan.
              </p>
            </div>
          </div>
          <div data-name='design5' className='relative flex items-start justify-center'>
            <img src="images/design5.png" alt="Design Infographic" className='w-full h-auto' />
            <div className='absolute top-[6.5rem] left-[1.25rem] w-full h-full flex flex-col gap-[0.94rem]'>
              <h6 className='text-[#2E2E2E] font-montserrat text-xl font-bold'>
                Scalability
              </h6>
              <p className='text-[#2E2E2E] font-roboto text-[0.875rem] leading-[1rem] mr-14'>
                To invite creative, innovative, and sustainable smart bin designs that effectively address the waste management challenges faced by the city of Lahore, Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section data-name='submission' className='-mt-[2.75rem] mx-44 flex gap-[4.38rem] justify-center items-center  transform scale-[79.5%]'>
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
      <section data-name='prizes' className='-mt-[2rem] flex flex-col justify-center items-center mx-40  transform scale-[79.5%]'>
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
      <section data-name='judging-panel' className='-mt-[1.75rem] flex flex-col items-center mx-72  transform scale-[79.5%] -z-10'>
        <h5 className='text-[#2E2E2E] font-youlit text-[2.5rem] uppercase text-center'>
          The Judging Panel
        </h5>
        <p className='text-[#2E2E2E] font-roboto text-base opacity-70 mt-5 mb-[2.37rem] text-center mx-32'>
          The panel will consist of experts from various fields, including urban planners, environmental scientists, waste management professionals, designers and architects, and government officials.
        </p>
        <h3 className='text-[#8DB445] font-youlit text-center text-[5.3675rem]'>
          “ Panel will be announced soon “
        </h3>
      </section>
      <section data-name="judging-criteria" className='-mt-[1.75rem] flex flex-col bg-[#E9F5C2] items-center pt-[3.87rem] pb-[6.19rem] gap-14 -z-10 transform scale-[79.5%] min-w-[125.8%]'>
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
      <section data-name='event=apply' className='flex flex-col mt-[4rem] ml-[9rem] mr-[50rem]  transform scale-[79.5%]'>
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
      <footer className='bg-[#0D3120] flex items-center justify-center py-[1.35rem] mt-[24.69rem] transform scale-[79.5%] min-w-[125.8%] -mb-[1rem]'>
        <div>
          <p className='text-center text-sm fotn-roboto text-white'>
            © 2023 LWMC. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App