import logo from'./assets/logo-text.png'

function Nav() {
    return(
        <nav className=' sticky top-0 z-50 bg-white h-20  flex items-center justify-between border-b border-gray-100 w-full'>
               
               {/* Navbar Logo  */}
            <img src={logo} alt=""  className='w-32'/>

            {/* List items */}

            <ul className='flex items-center gap-7 text-sm text-gray-600'>
                <li className='text-pink-500 cursor-pointer'> Home </li>
                <li> Technologies </li>
                <li> Projects </li>
                <li>  About </li>
                <li> Contact </li>
            </ul>

            {/* Sing Up button  */}

            <div className='flex items-center gap-4'>

                 <button className='text-sm text-gray-700'> Sign In </button>
                 <button className='bg-pink-500 text-white px-5 py-2 rounded-full text-sm'> Sign Up  </button>

            </div>

        </nav>


    )
}

     export default Nav;
