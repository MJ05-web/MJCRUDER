import axios from 'axios';
import React, { useState } from 'react';
import by_default from '../assets/by_default.jpg';
import loader from '../assets/loader.gif';
import { useNavigate } from 'react-router-dom';


const AddCategory = () => {
    const [category, setCategory] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(by_default);
    const [isLoading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState('');

    let navigate = useNavigate();

    const fileHandler = (e) => {
        setSelectedFile(e.target.files[0]);
        setImageUrl(URL.createObjectURL(e.target.files[0]));
    };

    const submitHandler = (event) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('name', category);
        formData.append('photo', selectedFile); // 'photo' should match what your backend expects

        axios.post('http://localhost:3000/category', formData)
            .then(res => {
                console.log(res);
                setLoading(false);
                navigate('/category')
            })
            .catch(err => {
                console.error(err.message);
                setLoading(false);
                setHasError(true);
                setError(err.message);

            });
    };

    return (
        <>
        {isLoading && <div>
            <img style={{width : '200px'}} src = {loader}/>
        </div>}
        
        {!isLoading && <div>
            <h1>Add new Category</h1>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Category name"
                    onChange={(e) => setCategory(e.target.value)}
                    />
                <input
                    type="file"
                    accept="image/*"
                    onChange={fileHandler} 
                    />
                <button type="submit">PUSH</button>
                <br />
                <img style={{ width: '150px' }} src={imageUrl} alt="Preview" />
            </form>
            </div>}
            {hasError && <div>
                <p style={{color : '150px'}}>Error ;( {error}</p>
            </div>}
        </>
    )
};

export default AddCategory;
