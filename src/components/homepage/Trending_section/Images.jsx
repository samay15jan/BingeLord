import React, { useEffect, useState } from 'react';

const Images = () => {
    const [Images, setImages] = useState()
    const ids = []

    // Getting IDs
    useEffect(() => {
        const getId = () => {
            apiData?.results.map((data, index) => {
            ids.push(data.id)
            });
        };

        getId()
    }, [apiData])

    // Getting Images Based on ID
    useEffect(()=> {
        const getImages = async () => {
            if(ids.length > 0) {
            const response = await axios.get(`/api/movie_images?id=${ids[0]}`)
            var filteredBackdrops = response.data.backdrops.filter(backdrop => {
                return backdrop.vote_count >= 10.0;
            });

            if (filteredBackdrops.length < 5) {
                filteredBackdrops = response.data.backdrops.filter(backdrop => {
                    return backdrop.vote_count >= 5.0;
                });
            }
              setImages(filteredBackdrops.reverse());
            }
            console.log(Images)
        }

        getImages()
    }, [ids])

  return (
    <div>Images</div>
  )
}

export default Images