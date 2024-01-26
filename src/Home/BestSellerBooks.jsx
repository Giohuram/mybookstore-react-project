import React from 'react'
import { useState, useEffect } from 'react';
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]); 

    useEffect(() => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data.slice(0, 6))) /* books to be shown on the website */
    }, [])
  return (
    <div>
        <BookCards books={books} headline="Nos bestsellers"/>
    </div>
  )
}

export default BestSellerBooks