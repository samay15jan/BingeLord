import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Images = ({ apiData }) => {
    const [Images, setImages] = useState()
    const ids = []

    // Getting IDs
    const getId = () => {
        apiData?.results.map((data, index) => {
            ids.push(data.id)
        });
    };
    getId()

    // Getting Images Based on ID
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
        }

        getImages()

  return (
    <div>
    </div>
  )
}

export default Images