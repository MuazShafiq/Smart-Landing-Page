function Header() {
  return (
    <header id="home" className='transform scale-[79.5%] z-50'>
      <nav className='flex py-[1.56rem] justify-center items-center'>
        <ul className='flex items-end justify-center gap-10 font-montserrat'>
          <li className='font-semibold text-white text-sm uppercase'>
            <a href="#home">Home</a>
          </li>
          <li className='font-semibold text-white text-sm uppercase'>
            <a href="#idea">Idea</a>
          </li>
          <li className='font-semibold text-white text-sm uppercase'>
            <a href="#competition">Competition</a>
          </li>
          <li className='font-semibold text-white text-sm uppercase'>
            <a href="#design-criteria">Design Criteria</a>
          </li>
          <li className='font-semibold text-white text-sm uppercase'>
            <a href="#submission">Requirements</a>
          </li>
          <li className='font-semibold text-white text-sm uppercase'>
            <a href="#prizes">Prize</a>
          </li>
          <li className='font-semibold text-white text-sm uppercase'>
            <a href="#judging-panel">Judging</a>
          </li>
          <li className='font-semibold text-white text-sm uppercase'>
            <a href="#event-apply">Registration</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header