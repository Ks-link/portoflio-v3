import React from 'react'
import { motion } from 'framer-motion';

function Navbar() {
    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-lg px-6 py-2 rounded-full shadow-md">

                <ul className='flex space-x-6 text-white'>
                    {["Home", "About", "Projects", "Contact"].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} className="hover:text-gray-400">{item}</a>
                        </li>
                    ))}
                </ul>
            </motion.nav>
        </>
    )
}

export default Navbar;