import React from 'react'
import BannerCard from '../Home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center '>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}

            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Achetez et vendez vos livres</h2>
                <p className='md:w-4/5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero delectus aliquid soluta id culpa temporibus autem similique fuga architecto? Rem accusantium nisi consequatur cum consequuntur nulla aspernatur debitis quam est?</p>
                <div>
                    <input type='search' name='recherche' id='search' placeholder='Trouver un livre' className='py-2 px-2 rounded-s-sm outline-none'/>
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Rechercher</button>
                </div>
            </div>

            {/* left side */}
            <div>
                <BannerCard />
            </div>
        </div>
    </div>
  )
}

export default Banner