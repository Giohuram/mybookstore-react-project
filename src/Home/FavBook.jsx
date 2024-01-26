import React from 'react'
import FavBookImg from "../assets/FavoriteBooks.jpg"
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
           <img src={FavBookImg} alt="" className='rounded md:w-10/12' /> 
        </div>

        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-4xl font-bold my-5 md:w-3/4 leading-snug'>Trouvez votre livre<span className='text-blue-700'>préféré ici</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eius dolorem ipsam ipsum numquam, dolores quod vitae, magnam alias delectus mollitia officiis natus recusandae consequuntur quasi saepe labore quam molestiae.</p>
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-1xl font-bold'>1000+</h3>
                    <p className='text-base'>Livres disponibles</p>
                </div>
                <div>
                    <h3 className='text-1xl font-bold'>500+</h3>
                    <p className='text-base'>Utilisateurs enregistres</p>
                </div>
                <div>
                    <h3 className='text-1xl font-bold'>500+</h3>
                    <p className='text-base'>Livres pour enfants</p>
                </div>
            </div>
            <div>
                <Link to="/shop" className='mt-12 block'>
                    <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Voir plus des livres</button>
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default FavBook