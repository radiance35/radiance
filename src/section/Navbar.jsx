import { useState } from 'react'
import { navLinks } from '../constants'

const NavItems=()=>{
    return(
        <ul className='nav-ul'>
            {navLinks.map(({id,name,href})=>(
                <li key={id} className='nav-li'> 
                    <a href={href} className='nav-li_a ' onClick={()=>{}}>{name}</a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <header className='text-white fixed top-0 left-0 right-0 z-50 bg-black/90'>
  <div className='max-w-7xl mx-auto px-4'>
    <div className='flex justify-between items-center py-5 c-space'>
      <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
        Priyanshu
      </a>
      <button
        onClick={() => setOpen(!isOpen)}
        className='text-neutral-400 hover:text-white focus:outline-none sm:hidden'
        aria-label='Toggle Menu'
      >
        <img
          src={isOpen ? "src/assets/close.svg" : "src/assets/menu.svg"}
          alt="toggle"
          className='w-6 h-6'
        />
      </button>
      <nav className='sm:flex hidden'>
        <NavItems/>
      </nav>
    </div> 
  </div>
  <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
  <nav className='p-5'>
    <NavItems />
  </nav>
</div>

</header>

    )
}

export default Navbar