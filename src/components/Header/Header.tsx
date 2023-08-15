function Header() {
  return (
    <header className='transform scale-[79.5%] z-50'>
      <nav className='flex py-[1.56rem] justify-center items-center'>
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
    </header>
  )
}

export default Header