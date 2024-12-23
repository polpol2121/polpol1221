import { NavLink } from "react-router";

function Header() {
  return (
    <div className="bg-gray-800 text-white p-6">
    {/* Header Section */}
    <div className="flex justify-between items-center font-bold">
        <div className="text-4xl ml-9 tracking-wide font-sans">|Pams</div>
        <ul className="flex gap-6 mr-9 text-lg">
            <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white hover:text-yellow-300 transition-all duration-200'}>
                Home
            </NavLink>
            <NavLink 
                to="/Products" 
                className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white hover:text-yellow-300 transition-all duration-200'}>
                Products
            </NavLink>
            <NavLink 
                to="/About" 
                className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white hover:text-yellow-300 transition-all duration-200'}>
                About
            </NavLink>
        </ul>
    </div>
</div>

  )
}

export default Header