import React from 'react'
import { Link } from 'react-router-dom'
import BookPic from "../assets/awardBooks.jpg"

const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <h2 className='text-4xl font-bold mb-6 leading-snug'>Mfumu Buku Awards 2024</h2>
            <p className='py-3'>Le prix du meilleur lecteur en milieu scolaire, du livre le plus vendu et le plus lu par nos clients</p>
            <Link to="/shop" className='block'>
                    <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Avoir un code promo</button>
            </Link>
        </div>
        <div>
            <img src={BookPic} alt="" className='w-96'/>
        </div>
      </div>  
    </div>
  )
}

export default PromoBanner