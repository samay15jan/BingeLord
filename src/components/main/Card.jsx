import react from 'react'

function Card({ data }) {
    return (
        <>
            <h1>{data.title}</h1>
            <h2>{data.id}</h2>
            <h2>{data.vote_average}</h2>
            <h2>{data.release_date}</h2>
            <h2>{data.overview}</h2>
            <img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} />
            <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} />
        </>
    )
}

export default Card