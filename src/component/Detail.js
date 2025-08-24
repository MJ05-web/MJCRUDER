import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import loader from '../assets/loader.gif';



const Detail = () => {
    const [isLoading, setLoading] = useState(false);
    const [category, setCategory] = useState({});
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState('');

    let params = useParams();
    console.log(params.id);
    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:3000/category/' + params.id)
            .then(res => {
                setLoading(false);
                setHasError(false);
                console.log(res.data.category);
                setCategory(res.data.category);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                setHasError(true);
                setError(err.response.data.message);
            })
    }, [])
    return (
        <>
            {isLoading && <div>
                <img style={{ width: '200px' }} src={loader} />
            </div>}
            {!isLoading && <div>
                <img style={{ width: '250px' }} src={category.photo} />
                <h1>{category.name}</h1>
            </div>}

            {hasError && <div>
                <p style={{ color: '150px' }}>Error ;( {error}</p>
            </div>}

        </>
    )
}

export default Detail