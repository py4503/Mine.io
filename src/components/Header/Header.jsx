import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
    const authStatus = useSelector((state)=>state.auth.status)
    const userD = useSelector((state) => state.auth.userData)
    console.log("userData is header:",userD)
    const navigate = useNavigate()

    const navItems = [
        {
            name:'Home',
            slug: '/',
            active: true
        },{
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },{
            name: "SignUp",
            slug: "/signup",
            active: !authStatus
        },{
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus
        },{
            name: "Add Post",
            slug: "/add-post",
            active: authStatus
        }
    ]
  return (
   <header className="w-full bg-white sticky top-0 z-50">
  <Container>
    <nav className="flex items-center justify-between h-16">
      {/* Logo (Apple-like) */}
      <Link to="/" className="text-black font-semibold text-lg hover:opacity-70">
        <Logo />
      </Link>

      {/* Centered Nav Items */}
      <ul className="flex gap-6 justify-center text-sm text-gray-800 font-light tracking-wide">
        {navItems.map(
          (item) =>
            item.active && (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="hover:text-black transition-colors duration-200 cursor-pointer font-medium"
                >
                  {item.name}
                </button>
              </li>
            )
        )}
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        {authStatus && <LogoutBtn />}
        <button className="text-gray-600 hover:text-black transition">
          <i className="ri-search-line text-lg" />
        </button>
        <button className="text-gray-600 hover:text-black transition">
          <i className="ri-user-line text-lg" />
        </button>
      </div>
    </nav>
  </Container>
</header>
  )
}

export default Header
