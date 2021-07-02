import React, { useState } from 'react';
import './Admin.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

const Admin = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageURL, setImageURL] = useState(null)
  const onSubmit = data => {
    const bookData = {
      name: data.name,
      imageURL: imageURL,
      author: data.author,
      price: data.price
  }
  const url = `http://localhost:5002/addBook`;
  console.log(bookData);
  fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(bookData)
  })
  .then(res => console.log(res))
}

  const handleImageUpload = event => {
    // console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', '47421198e82bcf9b737d777253d940a1');
    imageData.append('image', event.target.files[0]);
    
    axios.post('https://api.imgbb.com/1/upload', 
      imageData
    )
    .then(function (response) {
      setImageURL(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  console.log(watch("example"));
    return (
        <div>
            <div className="sidebar">
                <header>Mambo Admin</header>
                <ul>
                    <li><a href="">Manage Books</a></li>
                    <li><a href="">Add Books</a></li>
                    <li><a href="">Edit Books</a></li>
                </ul>
            </div>
            <div className="main_content">
                <div className="title"><h1>Add Book</h1></div>
                <div className="form_container">
                    <form  className="form_main" action="" onSubmit={handleSubmit(onSubmit)}>
                        Name: <input type="text" name="name"  {...register("name")} />
                        <br/>
                        Image: <input type="file" onChange={handleImageUpload}/>
                        <br/>
                        Author: <input type="text" name="author" {...register("author")} />
                        <br/>
                        Price:<input type="number" name="price" {...register("price")}  />
                        <br/>
                        <input type="submit" />
                        <br/>
                        {/* <div>
                            <p><b>Book Name</b></p>
                            <input type="text" name="name" id="" />
                        </div>
                        <div>
                            <p><b>Add Book cover Photo</b></p>
                            <input type="file" name="image" id="" />
                        </div>
                        <div>
                            <p><b>Author Name</b></p>
                            <input type="text" name="author" id=""/>
                        </div>
                        <div className="lastinput">
                            <p><b>Add Price</b></p>
                            <input type="text" name="price" id=""/>
                        </div> */}
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;