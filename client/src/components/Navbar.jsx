import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Navbar = () => {
    const { navigate, token, logout } = useAppContext()

    return (
        <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>
            <img
                onClick={() => navigate('/')}
                src={assets.logo}
                alt='logo'
                className='w-32 sm:w-44 cursor-pointer'
            />
            <div className='flex items-center gap-4'>
                {token ? (
                    <>
                        <button
                            onClick={() => navigate('/admin')}
                            className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'
                        >
                            Dashboard
                            <img src={assets.arrow} className='w-3' alt='arrow' />
                        </button>
                        <button
                            onClick={logout}
                            className='rounded-full text-sm cursor-pointer bg-gray-200 text-primary px-6 py-2.5 hover:bg-gray-300 transition-all'
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <button
                        onClick={() => navigate('/admin')}
                        className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'
                    >
                        Login
                        <img src={assets.arrow} className='w-3' alt='arrow' />
                    </button>
                )}
            </div>
        </div>
    )
}

export default Navbar