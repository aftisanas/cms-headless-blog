import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className="navbar bg-base-100 flex justify-between items-center">
                <Link href="/" className="btn btn-ghost text-7xl font-extrabold">Blog.</Link>
                <p className="text-sm">
                    A statically generated blog example using <a href="https://nextjs.org/" target="_blank" className='underline'>Next.js</a> and <a href="https://wordpress.org/" target="_blank" className='underline'>WordPress</a>.
                </p>
        </div>
    )
}

export default Header