import { Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/all-books")
          .then(res => res.json())  // Add parentheses to invoke the json() method
          .then(data => setAllBooks(data))
          .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = async (id) => {
    try {
      // ... your asynchronous code
      // console.log("Deleting book with ID:", id);
      const response = await fetch(`http://localhost:5000/book/${id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      // console.log("Response data:", data);
      alert('Votre livre est effacé avec succès');
      // Update your state or perform other actions based on the response data
      // setAllBooks(data);
    } catch (error) {
      console.error('Error deleting book:', error);
      // Handle the error (e.g., show a user-friendly error message)
    }
  };
  

  return (
    <div className="px-4 my-12">
        <h2 className="mb-8 text-3xl font-bold">Gerer vos livres</h2>

          {/* Table for Book data */}

        <Table className='lg:w-[950px]'>
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>  
          <Table.HeadCell>Tite du livre</Table.HeadCell>
          <Table.HeadCell>Auteur</Table.HeadCell>
          <Table.HeadCell>Categorie</Table.HeadCell>
          <Table.HeadCell>Prix</Table.HeadCell>
          <Table.HeadCell>Numéro ISBN</Table.HeadCell>
          <Table.HeadCell>
            <span>Editer</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allBooks.map((book, index) => <Table.Body className="divide-y" key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index + 1}
            </Table.Cell>
            <Table.Cell>{book.bookTitle}</Table.Cell>
            <Table.Cell>{book.authorName}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell>{book.price}</Table.Cell>
            <Table.Cell>{book.ISBN}</Table.Cell>
            <Table.Cell>
              <Link className='font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5' to={`/admin/dashboard/edit-books/${book._id}`}>
                Editer 
              </Link>
                <button onClick={() => handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-black'>Effacer</button>
            </Table.Cell>
          </Table.Row>

          </Table.Body>)
        }
      </Table>


    </div>
  )
}

export default ManageBooks