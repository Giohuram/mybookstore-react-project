import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react'


const UploadBook = () => {
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
    const handleBookSubmit = (event) => {
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
        
        const bookObj ={
            bookTitle, authorName, imageURL, categoryName, bookDescription, bookPDFURL, price, ISBN
        }

        console.log(bookObj); 

        // send datadb
        // fetch("http://localhost:5000/upload-book", {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //     }, 
        //     body: JSON.stringify(bookObj)
        // }).then(res => res.json()).then(data => {
        //     alert("Livre téléchargé avec succès.")
        //     form.reset(); 
        // })
        try {
            const response = fetch("http://localhost:5000/upload-book", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(bookObj),
            });
          
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
          
            const data = response.json();
            alert("Livre téléchargé avec succès.");
            form.reset();
          } catch (error) {
            console.error("Error uploading book:", error);
            // Handle the error (e.g., show a user-friendly error message)
            // You might want to reset the form or handle the error in some other way
          }
          

    }

  return (
    <div className="px-4 my-12">
        <h2 className="mb-8 text-3xl font-bold">Téléverser un livre</h2>
        <form  onSubmit={handleBookSubmit} className="flex lg:w-[500px] flex-col flex-wrap gap-4">

             {/* First row */}

             {/* Book Title */}
            <div className='flex gap-8'>
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                    <Label htmlFor="bookTitle" value="Titre du livre" />
                    </div>
                   <TextInput id="bookTitle" type="text" placeholder="Quel est le titre de votre livre?" required />
                </div>

                {/* Author Name */}

                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                    <Label htmlFor="authorName" value="Auteur du livre" />
                    </div>
                   <TextInput id="authorName" type="text" placeholder="Quel est le nom complet de l'auteur de ce livre?" required />
                </div>
            </div>

             {/* Second row */}
             {/* IMage URL */}
            <div className='flex gap-8'>
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                    <Label htmlFor="imageURL" value="Couverture du Livre" />
                    </div>
                   <TextInput id="imageURL" type="imageURL" placeholder="Veuillez televerser l'url de la couverture de votre livre" required />
                </div>

                {/* Book category */}

                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                    <Label htmlFor="inputState" value="Categorie du livre" />
                    </div>
                   {/* <TextInput id="category" type="text" placeholder="Quel est le genre de votre livre?" required /> */}
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
                   <TextInput id="price" type="text" placeholder="combien coûte votre livre?" required />
                </div>

                {/* ISBN number */}

                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                    <Label htmlFor="ISBN" value="Numéro ISBN" />
                    </div>
                   <TextInput id="ISBN" type="text" placeholder="Le numéro  ISBN de votre livre" required />
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
                <TextInput id="bookPDFURL" type="text" placeholder="Le lien pdf de votre livre" name='bookPDFURL' required />
            </div>
            <Button type="submit" className='mt-5'>Soumettre le livre</Button>



        </form>
    </div>
  )
}

export default UploadBook