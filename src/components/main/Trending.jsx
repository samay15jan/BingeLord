import { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

function Trending() {
    const [apiData, setApiData] = useState()

    useEffect(() => {
        axios.get('/api/trending')
            .then((response) => {
                setApiData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <>
            {apiData && apiData.results.map((data, index) => (
                <div key={data.id}>
                    <Card data={data} />
                </div>
            ))}
        </>
    )
}

export default Trending