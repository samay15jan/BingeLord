<p align="center">
  <img src='src/assets/Logo.png' alt='' width='350'>
</p>

Welcome to Binge Lord, a project born out of my passion for movies/series and the desire to create an immersive streaming experience. Leveraging TMDB for movie data and Vidsrc for streaming, Binge Lord is a feature-packed platform built with React.

## Demo

https://github.com/samay15jan/BingeLord/assets/97271429/568d2228-bc2a-421a-89bf-fe5e7ff16303

## Features

- **Movie/Series Information**: Utilizes [TMDB](https://developer.themoviedb.org/docs/getting-started) API to fetch data.

- **Streaming**: Seamless video streaming powered by [Vidsrc](https://vidsrc.me/).
  
- **Real-time Search**: Find your favorite movies or TV shows instantly with filters.
  
- **Detailed Pages**: Discover trailers, images, ratings, cast, and more.
  
- **Watchlist**: Save movies/series for later with Firebase Realtime Database.
  
- **User Authentication**: Securely log in using Firebase authentication.

- **Responsive Design**: Experience a seamless UI on both desktop and mobile.



## Technologies Used


**Client:** React, TailwindCSS, React-Router, CSS-in-JS Libraries (styled + twin.macro)

**Server:** Node, Firebase, Express (As a proxy to make API calls)

**Hosting:** Render(Seperate Client and Server), Cron-Job (to keep server alive)



## Run Locally


Clone the project

```bash
  git clone https://github.com/samay15jan/bingelord
```

Go to the project directory

```bash
  cd bingelord
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

To run this project, you will need to add `TMDB_API` and `PORT` environment variables to your .env file.


## Future Plans

I'm considering a standlone desktop application with Electron and a self-hosted version. Stay tuned for updates!


## License
This project is licensed under the MIT License - see the  [License](https://github.com/samay15jan/BingeLord/blob/main/LICENSE) file for details.


Happy streaming! 🎬🍿
