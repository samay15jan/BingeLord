---
order: 100
icon: rel-file-path
---

# Movies

Search for movies from TMDB using a query string.

+++ Request
  HTTP
  ```http
    GET /api/searchMovie?search={query}
  ```
  cURL
  ```sh
    curl -X GET "https://bingelord-backend.onrender.com/api/searchMovie?search=Inception"
  ```
+++ Response
  ```json

{
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
      "genre_ids": [
        18,
        53,
        35
      ],
      "id": 550,
      "original_language": "en",
      "original_title": "Fight Club",
      "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
      "popularity": 73.433,
      "poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
      "release_date": "1999-10-15",
      "title": "Fight Club",
      "video": false,
      "vote_average": 8.433,
      "vote_count": 26279
    },
    {
      "adult": false,
      "backdrop_path": "/1VqE5z4VIOcNcajJuHLk4fDkY9G.jpg",
      "genre_ids": [
        28,
        27
      ],
      "id": 289732,
      "original_language": "zh",
      "original_title": "屍城",
      "overview": "It's the end of the century at a corner of the city in a building riddled with crime - Everyone in the building has turned into zombies. After Jenny's boyfriend is killed in a zombie attack, she faces the challenge of surviving in the face of adversity. In order to stay alive, she struggles with Andy to flee danger.",
      "popularity": 15.263,
      "poster_path": "/u8u3KVq0qfJYmNDsaTVOXy4So6f.jpg",
      "release_date": "2014-10-23",
      "title": "Zombie Fight Club",
      "video": false,
      "vote_average": 4.721,
      "vote_count": 52
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        35,
        18
      ],
      "id": 323667,
      "original_language": "ru",
      "original_title": "Вставай и бейся",
      "overview": "Intertwined stories from the gladiator/athletes participating to the Calcio Storico Fiorentino yearly championship.",
      "popularity": 2.744,
      "poster_path": "/rPCOC0myV3Vr7nYGMAOAOpUXgH3.jpg",
      "release_date": "2015-06-21",
      "title": "Florence Fight Club",
      "video": false,
      "vote_average": 5.722,
      "vote_count": 9
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 973534,
      "original_language": "ru",
      "original_title": "Бойцовский клуб (русская версия)",
      "overview": "The Russian version of the movie \"Fight Club\" is not just a Russian version of a well-known cult film, it is the result and of the hard work of two young men and their love for cinema, Alexander Kukhar (GOLOBON-TV) and Dmitry Ivanov (GRIZLIK FILM) , who are responsible for this project, from the development of its idea and the selection of the cast, to the organization of filming and financial support.  Filming lasted a whole year. Everyday work, constant trips, searching for suitable film sets and an exhausting schedule - all this was not in vain and resulted in an unusually amazing and original project - the film \"Fight Club\", created in the very heart of southern Russia, in the city of Krasnodar, by two young people",
      "popularity": 0.874,
      "poster_path": null,
      "release_date": "",
      "title": "Fight Club (Russian version)",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 6
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 883656,
      "original_language": "en",
      "original_title": "GCW Fight Club",
      "overview": "GCW presents Fight Club straight from the Showboat Hotel in Atlantic City, NJ! The event features the GCW World Championship match where Mox defends against Gage in a match that we have been waiting for during the last decade. Who will be the new GCW World Champion?",
      "popularity": 1.953,
      "poster_path": "/a9RWdhRLyx3BqCjlwmZJHXyeMkR.jpg",
      "release_date": "2021-10-09",
      "title": "GCW Fight Club",
      "video": true,
      "vote_average": 6.5,
      "vote_count": 5
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        28
      ],
      "id": 347807,
      "original_language": "hi",
      "original_title": "Fight Club: Members Only",
      "overview": "Four friends head off to Bombay and get involved in the mother and father of all gang wars.",
      "popularity": 2.26,
      "poster_path": "/aXFmWfWYCCxQTkCn7K86RvDiMHZ.jpg",
      "release_date": "2006-02-17",
      "title": "Fight Club: Members Only",
      "video": false,
      "vote_average": 4.5,
      "vote_count": 12
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        99
      ],
      "id": 259016,
      "original_language": "en",
      "original_title": "Insane Fight Club",
      "overview": "A group of friends have created a brand new subculture that is taking over the streets of Glasgow. They've established their very own fight club, but this is no ordinary wrestling event - this is brutal, riotous chaos. Fights don't always stay inside the ring, people are bounced off the side of buses and thrown off balconies in pubs. They now plan the biggest show of their lives. The stakes are high, will it bring them the fame and recognition they need to survive?",
      "popularity": 1.614,
      "poster_path": null,
      "release_date": "2014-03-11",
      "title": "Insane Fight Club",
      "video": false,
      "vote_average": 4.333,
      "vote_count": 3
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        28,
        18,
        80
      ],
      "id": 51021,
      "original_language": "en",
      "original_title": "Lure: Teen Fight Club",
      "overview": "A community is under siege as three Belmont Highschool coed students go missing with no trace of their whereabouts. The pressure is on the police to capture the culprits responsible. Scouring the school hallways in search of clues, undercover female detective Maggie Rawdon (Jessica Sonnerborn) enters Belmont High as a transfer student in an attempt to solve the hideous disappearance of the students. Maggie makes a few new friends, and gets invited to a private rave in the country. Just as the group begins to suspect that they've taken a wrong turn, however, the trap is sprung and Maggie finds out firsthand what fate has befallen the missing girls.",
      "popularity": 0.983,
      "poster_path": "/ipl6NdM0LwyakzLH9gKBDn8YhmZ.jpg",
      "release_date": "2010-11-16",
      "title": "Lure: Teen Fight Club",
      "video": false,
      "vote_average": 5.556,
      "vote_count": 9
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        28,
        99,
        12
      ],
      "id": 104782,
      "original_language": "it",
      "original_title": "Florence Fight Club",
      "overview": "Four men decided to enter in the oldest Fight Club of the History, The Florentine Football tournament. A father and son, a black guy, an old champion and outsider clerk will enter in an arena of the time to win their fears, to go over their limits, to be heroes for a day.",
      "popularity": 0.6,
      "poster_path": null,
      "release_date": "2010-01-01",
      "title": "Florence Fight Club",
      "video": false,
      "vote_average": 7,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        99
      ],
      "id": 532155,
      "original_language": "en",
      "original_title": "Musangwe: Fight Club",
      "overview": "The first rule is that there are no rules. For the bare-knuckle combatants competing in Musangwe fights, anything goes - you can even put a curse on him. The sport, which dates back centuries, has become a South African institution. Any male from the age of nine to ninety can compete. We follow a group of fighters as they slug it out in the ring. Who will be this year's champion?",
      "popularity": 0.6,
      "poster_path": "/tZDxttt0LfgAKwvLIWyOO3fr01c.jpg",
      "release_date": "2007-10-01",
      "title": "Musangwe: Fight Club",
      "video": false,
      "vote_average": 6.25,
      "vote_count": 4
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 289100,
      "original_language": "en",
      "original_title": "Girls Fight Club",
      "overview": "The best women's wrestling competition of all time...and if you think it's fake you're in for a big surprise See LEGENDARY Mixed Martial Arts fighters coach their teams to victory in the cage! aka Chuck Lidell's Girl's Fight Club",
      "popularity": 0.6,
      "poster_path": null,
      "release_date": "2009-06-18",
      "title": "Girls Fight Club",
      "video": false,
      "vote_average": 5.25,
      "vote_count": 2
    },
    {
      "adult": false,
      "backdrop_path": "/lBENxZ1nmHXkTKV0AJu1agnW8Mg.jpg",
      "genre_ids": [],
      "id": 877672,
      "original_language": "en",
      "original_title": "Superhero Fight Club",
      "overview": "Oliver introduces Barry to his own little fight club which features such members as Roy Harper, Laurel Lance, Malcolm Merlyn and Ra's Al Ghul.",
      "popularity": 0.6,
      "poster_path": "/riAUCTb0NBakJxlBMB801gQlF1j.jpg",
      "release_date": "2015-04-13",
      "title": "Superhero Fight Club",
      "video": false,
      "vote_average": 6.375,
      "vote_count": 9
    },
    {
      "adult": false,
      "backdrop_path": "/z8MzErK9gYLHgvqYKMapqk7rqyZ.jpg",
      "genre_ids": [],
      "id": 877673,
      "original_language": "en",
      "original_title": "Superhero Fight Club 2.0",
      "overview": "Barry and Oliver introduce Supergirl to the new fight club, Felicity and Cisco applying additional features to the fight in which The Flash, Green Arrow, Supergirl, White Canary, Firestorm and Atom need to fight to stay alive.",
      "popularity": 0.632,
      "poster_path": "/edt0iegDlAqPddRunIixcpNsja4.jpg",
      "release_date": "2016-09-29",
      "title": "Superhero Fight Club 2.0",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 6
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        16,
        35
      ],
      "id": 615408,
      "original_language": "en",
      "original_title": "Fight Club But With Tennis And No Fight",
      "overview": "Drama descends upon two tennis-obsessed women as the tension moves from off the court and into the café.",
      "popularity": 0.6,
      "poster_path": "/8pEQqVtSpgCtb7dzhR55EO1dC3l.jpg",
      "release_date": "2019-07-13",
      "title": "Fight Club But With Tennis And No Fight",
      "video": false,
      "vote_average": 7,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 969532,
      "original_language": "en",
      "original_title": "GCW: Fight Club Houston",
      "overview": "On July 9th GCW presents Fight Club Houston straight from Premier Arena in Houston, Texas. The lineup is almost completed, check it below:  AJ Gray vs Bryan Keith  Nick Gage vs Sadika  Joey Janela vs Dante  Ninja Mack vs Jack Cartwheel  Effy vs Gino  Jimmy Lloyd vs Carter  Lucha Scramble  .... more to be added soon!",
      "popularity": 0.6,
      "poster_path": "/353CATo61TQERENVF6AqIqhUD51.jpg",
      "release_date": "2021-07-09",
      "title": "GCW: Fight Club Houston",
      "video": true,
      "vote_average": 5,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 944789,
      "original_language": "en",
      "original_title": "Leopard Fight Club",
      "overview": "Witness a remarkable coming-of-age story as we track a young leopard's journey from rookie to royalty in South Africa's lethal Big Five landscape. When we first meet Jack, he's clumsy, fearful, and weak, but he's a fast learner - and he'll need to be. He's destined for a showdown with the area's current leopard monarch, an alpha male with a real mean streak. We follow Jack as he hones his skills and builds up muscle for the ultimate catfight. It's a battle where only the winner will walk out alive.",
      "popularity": 0.6,
      "poster_path": "/pNhu0kvxvBJhpzDEwKf9Zdphbfg.jpg",
      "release_date": "",
      "title": "Leopard Fight Club",
      "video": false,
      "vote_average": 6,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        99
      ],
      "id": 151912,
      "original_language": "en",
      "original_title": "Jurassic Fight Club",
      "overview": "Jurassic Fight Club, a paleontology-based miniseries that ran for 12 episodes, depicts how prehistoric beasts hunted their prey, dissecting these battles and uncovering a predatory world far more calculated and complex than originally thought. It was hosted by George Blasing, a self-taught paleontologist.",
      "popularity": 0.742,
      "poster_path": null,
      "release_date": "2008-10-22",
      "title": "Jurassic Fight Club",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 5
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        99
      ],
      "id": 322772,
      "original_language": "en",
      "original_title": "Insane Fight Club II - This Time It’s Personal",
      "overview": "Insane Fight Club is back. This year the boys are taking their unique form of entertainment to England as they stage fight nights in Birmingham, Leeds, Liverpool and Newcastle.",
      "popularity": 2.348,
      "poster_path": null,
      "release_date": "2015-01-21",
      "title": "Insane Fight Club II - This Time It’s Personal",
      "video": false,
      "vote_average": 7,
      "vote_count": 2
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 818666,
      "original_language": "en",
      "original_title": "Triller Fight Club: Jake Paul vs Ben Askren",
      "overview": "Jake Paul vs. Ben Askren is an professional boxing match between YouTuber Jake Paul and former MMA fighter Ben Askren.  The bout took take place on April 17, 2021, at the Mercedes-Benz Stadium in Atlanta, Georgia.",
      "popularity": 1.467,
      "poster_path": "/pFxHnZhetfHpXlcYTNTFZFt6pBq.jpg",
      "release_date": "2021-04-17",
      "title": "Triller Fight Club: Jake Paul vs Ben Askren",
      "video": true,
      "vote_average": 5,
      "vote_count": 3
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 935845,
      "original_language": "en",
      "original_title": "GCW: Fight Club 2 Houston",
      "overview": "Are you ready for the GCW: Fight Club 2?  On February 4th GCW: Fight Club 2 is live on FITE straight from Houston Premier Arena, TX!  Check the full lineup below:  4-way match  Mascara Dorada vs Gringo Loco vs Blake Christian vs ASF  Atticus Cogar vs Gino Medina  All-Star Scramble  Matthew Justice vs Allie Katch vs Grim Reefer vs Jimmy Lloyd vs Jordan Oliver vs Chris Carter  GCW Extreme Championship  AJ Gray vs Mysterious Q  Bryan Keith vs Effy  Ninja Mack vs Nick Wayne  Loko Wrestling Championship  Dante Leon vs Sam Stackhouse  Matt Tremont vs Sadika  *lineup subject to change",
      "popularity": 0.6,
      "poster_path": "/bPPvoNxWcoqSvw0SnigOZpcxKmN.jpg",
      "release_date": "2022-02-04",
      "title": "GCW: Fight Club 2 Houston",
      "video": true,
      "vote_average": 8,
      "vote_count": 1
    }
  ],
  "total_pages": 2,
  "total_results": 39
}
  ```
+++

### Query Parameters

| Parameter | Description               | Default | Required |
|-----------|---------------------------|---------|----------|
| [!badge variant="dark" text="search"] | Search query for movies. | None | [!badge variant="dark" text="true"] |

### NOTE
==- Images sizes
Base URL for TMDB Images
```
  https://image.tmdb.org/t/p/
```
Available Image Sizes

    Poster Sizes: w92, w154, w185, w342, w500, w780, original
    Backdrop Sizes: w300, w780, w1280, original
    Still Sizes: w92, w185, w300, original
===