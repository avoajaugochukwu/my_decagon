import Logo from '../img/ground_cofee_logo.png'

export default function NavBar() {

  return (
      <header className="lg:px-20 md:px-8 px-8 bg-white flex flex-wrap items-center py-4">
        <div className="flex-1 flex justify-between items-center">
          <a href="/" className="text-xl"><img alt="Logo" className="w-1/2" src={Logo} /></a>
        </div>

        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
          <svg className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li><a className="md:p-4 py-3 px-0 block" href="/">HOME</a></li>
              <li><a className="md:p-4 py-3 px-0 block" href="/">ABOUT US</a></li>
              <li><a className="md:p-4 py-3 px-0 block font-bold" href="/">CREATE YOUR PLAN</a></li>
            </ul>
          </nav>
        </div>
      </header>
  )
}
