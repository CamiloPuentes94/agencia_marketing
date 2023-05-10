import { useState } from 'react'
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo.jpg'
import { BeatLoader } from 'react-spinners';


function Navbar() {

  const [loading, setLoading] = useState(true)

  return (
    <nav className='w-full py-4 top-0 fixed'>
      <div className="bg-white px-4 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          <Link to='/' className="ml-4 mt-2">
            <img
              src={logo}
              width={160}
              height={120}
              className="" />
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink to='/casos' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Casos</NavLink>
            <NavLink to='/servicios' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Servicios</NavLink>
            <NavLink to='/nosotros' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Nosotros</NavLink>
            <NavLink to='/carreras' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Carreras</NavLink>
            <NavLink to='/blog' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Blog</NavLink>
            <NavLink to='/contacto' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Contacto</NavLink>

            <button
              type="button"
              className="inline-flex ml-12 items-center rounded-md border border-transparent bg-orange-button px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 trasnsition focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Hire us
              <BeatLoader className="ml-3 -mr-1 h-3.5 w-12" loading={loading} size={10} color='#f2f2f2' />
            </button>
            {/* <button
              type="button"
              className=" ml-12 relative inline-flex items-center rounded-md border border-transparent bg-orange-button px-6 py-2 text-lg font-bold text-white shadow-sm transition duration-300 hover:bg-black focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"

            >
              Hire us
              <BeatLoader loading={loading} size={10} color='#ffffff' />
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProp = state => ({

})

export default connect(mapStateToProp, {

})(Navbar)