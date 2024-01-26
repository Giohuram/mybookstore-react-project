import { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';
import { HiShoppingCart } from 'react-icons/hi';
import { Button } from 'flowbite-react';

function Shop() {
  const [books, setBooks] = useState([]);

useEffect(() =>{
  fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data)); 
}, [])
  return (
    <div className='mt-28 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center'>Nos livres</h2>
        <div className='grid gap-10 my-8 lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
            {
              books.map(({ id, imageURL, bookTitle, authorName, category, price }) => (
                <Card key={id} className="max-w-sm" imgSrc={imageURL} horizontal>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {bookTitle}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-100">
                    {authorName}
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-100">
                    {category}
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-100">
                    {price}
                  </p>
                  {/* <button className="bg-blue-700 font-semibold text-white py-1 rounded">
                    Acheter maintenant
                  </button> */}
                  <Button className='bg-blue-700' >
                     <HiShoppingCart className="mr-2 h-5 w-5" />
                     Acheter
                  </Button>
                </Card>
              ))
              
            }

        </div>
    </div>

    
  )
}

export default Shop