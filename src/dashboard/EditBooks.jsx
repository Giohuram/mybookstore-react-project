import { Button, Select, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';
import  { useState } from 'react';


const EditBooks = () => {
  const {id} = useParams(); 
  const {bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL, price, ISBN } = useLoaderData()
  const BookCategory = [
    "Art",
    "Biographie",
    "Entreprise",
    "Enfants",
    "Religion",
    "Classiques",
    "Des bandes dessinées",
    "Livres de cuisine",
    "Ebooks",
    "Fantaisie",
    "Fiction",
    "Romans graphiques",
    "Fiction historique",
    "Histoire",
    "Horreur",
    "Mémoire",
    "Musique",
    "Mystère",
    "Non-fiction",
    "Poésie",
    "Psychologie",
    "Romance",
    "Science",
    "La science-fiction",
    "Auto-aide",
    "Des sports",
    "Thriller",
    "Voyage",
    "Livres scolaires",
]

const [selectedBookCategory, setSelectedBookCategory] = useState(BookCategory[28]);

const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
}

// handle book submission
const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;   
    const bookTitle = form.bookTitle.value; 
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value; 
    const categoryName = form.categoryName.value;
    const bookDescription = form.bookDescription.value; 
    const  bookPDFURL = form.bookPDFURL.value; 
    const  price = form.price.value; 
    const  ISBN = form.ISBN.value; 
    
    const updateBookObj ={
        bookTitle, authorName, imageURL, categoryName, bookDescription, bookPDFURL, price, ISBN
    }

    // console.log(bookObj); 

    // update book data 
    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {alert("votre livre a été mise à jour avec succès!")})
    form.reset(); 

}

return (
<div className="px-4 my-12">
    <h2 className="mb-8 text-3xl font-bold">Mettre à jour votre livre</h2>
    <form  onSubmit={handleUpdate} className="flex lg:w-[500px] flex-col flex-wrap gap-4">

         {/* First row */}

         {/* Book Title */}
        <div className='flex gap-8'>
            <div className='lg:w-1/2'>
                <div className="mb-2 block">
                <Label htmlFor="bookTitle" value="Titre du livre" />
                </div>
               <TextInput id="bookTitle" type="text" placeholder="Quel est le titre de votre livre?" defaultValue={bookTitle}required />
            </div>

            {/* Author Name */}

            <div className='lg:w-1/2'>
                <div className="mb-2 block">
                <Label htmlFor="authorName" value="Auteur du livre" />
                </div>
               <TextInput id="authorName" type="text" placeholder="Quel est le nom complet de l'auteur de ce livre?" defaultValue={authorName}required />
            </div>
        </div>

         {/* Second row */}
         {/* IMage URL */}
        <div className='flex gap-8'>
            <div className='lg:w-1/2'>
                <div className="mb-2 block">
                <Label htmlFor="imageURL" value="Couverture du Livre" defaultValue={imageURL}/>
                </div>
               <TextInput id="imageURL" type="imageURL" placeholder="Veuillez televerser l'url de la couverture de votre livre" required />
            </div>

            {/* Book category */}

            <div className='lg:w-1/2'>
                <div className="mb-2 block">
                <Label htmlFor="inputState" value="Categorie du livre" defaultValue={category}/>
                </div>
               <select id='inputState'   name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
                {
                    BookCategory.map((option) => <option key={option} value={option}>{option}</option>)
                }
               </select>
            </div>
            

        </div>

        {/* third row */}
         {/* book price */}
         <div className='flex gap-8'>
            <div className='lg:w-1/2'>
                <div className="mb-2 block">
                <Label htmlFor="price" value="Prix" />
                </div>
               <TextInput id="price" type="text" placeholder="combien coûte votre livre?"
               defaultValue={price} required />
            </div>

            {/* ISBN number */}

            <div className='lg:w-1/2'>
                <div className="mb-2 block">
                <Label htmlFor="ISBN" value="Numéro ISBN" />
                </div>
               <TextInput id="ISBN" name="ISBN" type="text" placeholder="Le numéro  ISBN de votre livre" defaultValue={ISBN} required />
            </div>
            

        </div>

        {/* Book description*/}
        <div>
            <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Decription du livre" />
            </div>
            <Textarea 
               id='bookDescription'
               name='bookDescription'
               placeholder='Veuillez écrire le resume de votre livre'
               defaultValue={bookDescription}
               required
               className='w-full'
               rows={4} 
            />
        </div>   

        {/* Book pdf Link */}   
        <div>
            <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="PDF de votre Livre" />
            </div>
            <TextInput id="bookPDFURL" type="text" placeholder="Le lien pdf de votre livre" name='bookPDFURL' defaultValue={bookPDFURL} required />
        </div>
        <Button type="submit" className='mt-5'>Mettre à jour votre livre</Button>



    </form>
</div>
)
}

export default EditBooks