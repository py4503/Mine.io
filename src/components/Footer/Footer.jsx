import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import Button from '../Button'

const handleSubmit = (e) =>{
    e.prevenDefault()
    console.log("get updates")
}

function Footer() {
  return (
<section className="relative overflow-hidden bg-gray-950 text-gray-300 py-5 px-2 sm:px-6 lg:px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
    
    {/* Logo and Description */}
    <div>
      <Logo width="120px" />
      <p className="mt-4 text-sm text-gray-400">
        Creating better experiences through modern UI. Designed for devs, by devs.
      </p>
      <p className="mt-6 text-xs text-gray-500">&copy; {new Date().getFullYear()} DevUI. All rights reserved.</p>
    </div>

    {/* Company */}
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Company</h3>
      <ul className="space-y-3">
        <li><Link to="/" className="hover:text-white transition">Features</Link></li>
        <li><Link to="/" className="hover:text-white transition">Pricing</Link></li>
        <li><Link to="/" className="hover:text-white transition">Affiliate Program</Link></li>
        <li><Link to="/" className="hover:text-white transition">Press Kit</Link></li>
      </ul>
    </div>

    {/* Support */}
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Support</h3>
      <ul className="space-y-3">
        <li><Link to="/" className="hover:text-white transition">Account</Link></li>
        <li><Link to="/" className="hover:text-white transition">Help Center</Link></li>
        <li><Link to="/" className="hover:text-white transition">Contact Us</Link></li>
        <li><Link to="/" className="hover:text-white transition">Guides</Link></li>
      </ul>
    </div>

    {/* Newsletter or Social */}
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Stay Updated</h3>
      <p className="text-sm mb-4 text-gray-400">Get updates on new features and releases.</p>
      <form className="flex items-center space-x-2" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email"
          className="w-full px-3 py-2 rounded-lg bg-gray-800 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <Button type='submit'>Subscribe</Button>
      </form>

      {/* Social Icons */}
      <div className="flex space-x-4 mt-6">
        {/* {[
          { icon: '🐦', label: 'Twitter' },
          { icon: '📘', label: 'Facebook' },
          { icon: '📷', label: 'Instagram' },
          { icon: '💼', label: 'LinkedIn' }
        ].map(({ icon, label }) => (
          <button
            key={label}
            className="text-gray-400 hover:text-white text-xl"
            aria-label={label}
          >
            {icon}
          </button>
        ))} */}
      </div>
    </div>
  </div>

  {/* Divider */}
  <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-600">
    Built using React & Tailwind CSS
  </div>
</section>

  )
}

export default Footer
