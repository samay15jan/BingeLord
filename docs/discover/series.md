---
order: 1000
icon: rel-file-path
---

# Series

Retrieves TV shows based on filters such as genre.

+++ Request
  HTTP
  ```http
    GET /api/discoverTV?genre={genre_id}
  ```
  cURL
  ```sh
    curl -X GET "https://bingelord-backend.onrender.com/api/discoverTV?genre=10765" // For action and adventure genre
  ```
+++ Response
  ```json
{
  "page": 1,
  "results": [
    {
      "backdrop_path": "/mAJ84W6I8I272Da87qplS2Dp9ST.jpg",
      "first_air_date": "2023-01-23",
      "genre_ids": [
        9648,
        18
      ],
      "id": 202250,
      "name": "Dirty Linen",
      "origin_country": [
        "PH"
      ],
      "original_language": "tl",
      "original_name": "Dirty Linen",
      "overview": "To exact vengeance, a young woman infiltrates the household of an influential family as a housemaid to expose their dirty secrets. However, love will get in the way of her revenge plot.",
      "popularity": 2684.061,
      "poster_path": "/ujlkQtHAVShWyWTloGU2Vh5Jbo9.jpg",
      "vote_average": 5,
      "vote_count": 13
    },
    {
      "backdrop_path": "/wJmcuxa0C4AERmA9mejxm9qRYDj.jpg",
      "first_air_date": "2022-06-06",
      "genre_ids": [
        80,
        9648
      ],
      "id": 203504,
      "name": "Aashiqana",
      "origin_country": [
        "IN"
      ],
      "original_language": "hi",
      "original_name": "आशिकाना",
      "overview": "A serial killer sparks the story of uptight Yashvardhan and feisty Chikki. Plagued by misunderstandings, how far do they have to go to nab the murderer?",
      "popularity": 2658.037,
      "poster_path": "/a4Z6Uohb6Ln5vcPvMUzwyn3WBjP.jpg",
      "vote_average": 6,
      "vote_count": 8
    },
    {
      "backdrop_path": "/xGKTgJlqCkq6tAK2sOTdULh7YaX.jpg",
      "first_air_date": "2022-10-10",
      "genre_ids": [
        10766,
        18,
        35
      ],
      "id": 204370,
      "name": "The Path",
      "origin_country": [
        "BR"
      ],
      "original_language": "pt",
      "original_name": "Travessia",
      "overview": "After having her life course changed by a fake image and losing her childhood sweetheart to greed and power, Brisa, a strong woman, will struggle to rebuild her journey, raise her son, rediscover true love, and discover the truth about her origin.",
      "popularity": 2576.505,
      "poster_path": "/raDj1xSVzBenwI87arenZY6eHmz.jpg",
      "vote_average": 4.7,
      "vote_count": 16
    },
    {
      "backdrop_path": null,
      "first_air_date": "2005-09-05",
      "genre_ids": [
        18,
        35
      ],
      "id": 36361,
      "name": "Ulice",
      "origin_country": [
        "CZ"
      ],
      "original_language": "cs",
      "original_name": "Ulice",
      "overview": "Ulice is a Czech soap opera produced and broadcast by Nova. In the Czech language Ulice means street.\n\nThe show describes the lives of the Farský, Jordán, Boháč, Nikl, and Liška families and many other people that live in Prague. Their daily battle against real problems of living in a modern world like divorce, love, betrayal and illness or disease. Ulice often shows crime.",
      "popularity": 2518.788,
      "poster_path": "/3ayWL13P1HeRnyVL9lU9flOdZjq.jpg",
      "vote_average": 2.2,
      "vote_count": 10
    },
    {
      "backdrop_path": "/azWBrlovNOOdy0eQYEe9BoiROoN.jpg",
      "first_air_date": "2023-03-20",
      "genre_ids": [
        18,
        10766
      ],
      "id": 209085,
      "name": "Amor Perfeito",
      "origin_country": [
        "BR"
      ],
      "original_language": "pt",
      "original_name": "Amor Perfeito",
      "overview": "",
      "popularity": 2256.176,
      "poster_path": "/aOPhyvHDauWFuc3rthpHArCNyrm.jpg",
      "vote_average": 3.5,
      "vote_count": 4
    },
    {
      "backdrop_path": "/69Jblm3seQgiPuPQMrJqg9Nxhaz.jpg",
      "first_air_date": "2011-01-10",
      "genre_ids": [
        10763,
        10767
      ],
      "id": 101463,
      "name": "Al rojo vivo",
      "origin_country": [
        "ES"
      ],
      "original_language": "es",
      "original_name": "Al rojo vivo",
      "overview": "",
      "popularity": 2216.112,
      "poster_path": "/ag6PmoBxkF2s1uY3An618NCEt3g.jpg",
      "vote_average": 1.5,
      "vote_count": 4
    },
    {
      "backdrop_path": "/t2rAdgjSh0WYbXzdOB5zTDqzdCI.jpg",
      "first_air_date": "2022-11-02",
      "genre_ids": [
        18
      ],
      "id": 213713,
      "name": "Faltu",
      "origin_country": [
        "IN"
      ],
      "original_language": "hi",
      "original_name": "Faltu",
      "overview": "What's in a name? Amidst the arid landscape of Rajasthan, a young woman with dreamy eyes struggles to prove her worth.",
      "popularity": 2022.814,
      "poster_path": "/lgyFuoXs7GvKJN0mNm7z7OMOFuZ.jpg",
      "vote_average": 4.7,
      "vote_count": 15
    },
    {
      "backdrop_path": "/3n2TjKw3HrwDqgVgcynvantOfS3.jpg",
      "first_air_date": "2023-01-04",
      "genre_ids": [
        18,
        10751
      ],
      "id": 215103,
      "name": "Teri Meri Doriyaann",
      "origin_country": [
        "IN"
      ],
      "original_language": "hi",
      "original_name": "Teri Meri Doriyaan",
      "overview": "It’s hate at first sight for Sahiba and Angad! But destined to be together, their lives get intertwined by a marriage alliance, and a love-hate story ensues.",
      "popularity": 1970.896,
      "poster_path": "/4BHDmYiuSnNL3nqKIOzLJKYX4AN.jpg",
      "vote_average": 4.9,
      "vote_count": 7
    },
    {
      "backdrop_path": null,
      "first_air_date": "2022-11-28",
      "genre_ids": [
        18
      ],
      "id": 215315,
      "name": "Rabb Se Hai Dua",
      "origin_country": [
        "IN"
      ],
      "original_language": "hi",
      "original_name": "रब्ब से है दुआ",
      "overview": "Dua and her husband are a perfect married couple in the eyes of their family. However, Dua’s life turns upside down when her husband seeks her permission to marry another woman.",
      "popularity": 1949.321,
      "poster_path": "/6ikbefd7VeopbBuGgioYMNU5bQj.jpg",
      "vote_average": 6,
      "vote_count": 2
    },
    {
      "backdrop_path": "/1Xm0WqoT0DjZm5JdG2V6YFabrOz.jpg",
      "first_air_date": "2023-02-13",
      "genre_ids": [
        10759,
        35,
        18
      ],
      "id": 215803,
      "name": "Batang Quiapo",
      "origin_country": [
        "PH"
      ],
      "original_language": "tl",
      "original_name": "Batang Quiapo",
      "overview": "A young man rises to be one of the biggest outlaws in the neighborhood while he navigates his way in life to survive in Quiapo. Hoping to earn the affection of his parents, his feat draws him closer to the truth about his identity.",
      "popularity": 1937.278,
      "poster_path": "/9McqS8mgMf5NJCAKZIY6J1oOl8y.jpg",
      "vote_average": 5.6,
      "vote_count": 8
    },
    {
      "backdrop_path": "/aqJPC5GXuiVbedajRmdOVMCb7mC.jpg",
      "first_air_date": "2022-12-05",
      "genre_ids": [
        18,
        10751,
        10766
      ],
      "id": 215902,
      "name": "Katha Ankahee",
      "origin_country": [
        "IN"
      ],
      "original_language": "hi",
      "original_name": "कथा अनकही",
      "overview": "Katha, a single parent, is in need of funds for her son's medical treatment. She comes across Viaan, who offers help but his conditions put her in an awkward situation.",
      "popularity": 1910.323,
      "poster_path": "/uhXU0SMPMlemKGHmwbldM60qqmW.jpg",
      "vote_average": 10,
      "vote_count": 1
    },
    {
      "backdrop_path": "/lcSvkJ2Rob3ICIOCUJahw3kgSYZ.jpg",
      "first_air_date": "2023-03-14",
      "genre_ids": [
        18
      ],
      "id": 216390,
      "name": "Woman in a Veil",
      "origin_country": [
        "KR"
      ],
      "original_language": "ko",
      "original_name": "비밀의 여자",
      "overview": "Jung Gyul Wool loses her vision and ability to walk because of her materialistic husband and his mistress. Despite her shortcomings, she hatches a plot to seek revenge.",
      "popularity": 1908.768,
      "poster_path": "/5ERr09UrnVm0hdXBeefNVtQMxI.jpg",
      "vote_average": 4.5,
      "vote_count": 2
    },
    {
      "backdrop_path": "/vW16JyrWiB1cW9wWzxhmjVHoqwJ.jpg",
      "first_air_date": "2023-03-13",
      "genre_ids": [
        10766
      ],
      "id": 217510,
      "name": "Queridos Papás",
      "origin_country": [
        "PT"
      ],
      "original_language": "pt",
      "original_name": "Queridos Papás",
      "overview": "",
      "popularity": 1870.906,
      "poster_path": "/m1aGGAPvLpWF5cGhkQeZjbpu2nr.jpg",
      "vote_average": 6,
      "vote_count": 2
    },
    {
      "backdrop_path": "/l7LRGYJY3NzIGBlpvHpMsNXHbm5.jpg",
      "first_air_date": "2023-01-09",
      "genre_ids": [
        10751,
        35
      ],
      "id": 218145,
      "name": "Mama na prenájom",
      "origin_country": [
        "SK"
      ],
      "original_language": "sk",
      "original_name": "Mama na prenájom",
      "overview": "",
      "popularity": 1823.094,
      "poster_path": "/fH7PP2Rkdlo414IHvZABBHhtoqd.jpg",
      "vote_average": 8,
      "vote_count": 1
    },
    {
      "backdrop_path": "/xkiv3e1daoqil5MRJitCJcwUgk2.jpg",
      "first_air_date": "2021-10-31",
      "genre_ids": [
        10764
      ],
      "id": 114294,
      "name": "Judy Justice",
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "Judy Justice",
      "overview": "The Honorable Judy Sheindlin, retired Judge of the Manhattan family Court, brings her signature blend of sharp wit and wisdom, hilarious candor and unwavering honesty that has made her America’s favorite judge for over 25 years, as she presides over real cases, arbitrates binding decisions and delivers what only she can: “Judy Justice.”",
      "popularity": 1764.592,
      "poster_path": "/4E8Rb9vPbixxC0ZdzSkvE5fpeQa.jpg",
      "vote_average": 4.1,
      "vote_count": 7
    },
    {
      "backdrop_path": "/w9uM2biYWGqwEpvIYs8CXRoAdVB.jpg",
      "first_air_date": "2023-02-26",
      "genre_ids": [
        10764,
        10767
      ],
      "id": 221249,
      "name": "O Triângulo",
      "origin_country": [
        "PT"
      ],
      "original_language": "pt",
      "original_name": "O Triângulo",
      "overview": "A series of physical, intellectual, emotional or psychological tests will test anonymous competitors, 24/7. In the end, only one will be victorious. Everything can change... At any time... When you least expect it!",
      "popularity": 1712.543,
      "poster_path": "/A2LE5B1IInR5h98OUNzyj9aQiIS.jpg",
      "vote_average": 2,
      "vote_count": 1
    },
    {
      "backdrop_path": "/peqIR6V2zZdzp3MEZBCwtqw1Bf2.jpg",
      "first_air_date": "2022-11-28",
      "genre_ids": [
        18
      ],
      "id": 215426,
      "name": "Pyaar Ke Saat Vachan - Dharam Patni",
      "origin_country": [
        "IN"
      ],
      "original_language": "hi",
      "original_name": "Pyaar Ke Saat Vachan - Dharam Patni",
      "overview": "What will happen when Ravi Randhawa, a business tycoon, meets Pratiksha Parekh, a simple school teacher? Will sparks fly? Or is there no happy-ever-after for the opposite personalities?",
      "popularity": 1592.844,
      "poster_path": "/fMR23wg4yNsTEhqyYIfvzDAOEae.jpg",
      "vote_average": 6,
      "vote_count": 1
    },
    {
      "backdrop_path": "/3FLHePl9Y3n4BidLVjIA9qSRDOE.jpg",
      "first_air_date": "2021-08-03",
      "genre_ids": [
        10766
      ],
      "id": 130542,
      "name": "Bhagya Lakshmi",
      "origin_country": [
        "IN"
      ],
      "original_language": "hi",
      "original_name": "Bhagya Lakshmi",
      "overview": "Hailing from a middle-class family, Lakshmi’s life is upended when she realises that her marriage to Rishi Oberoi, an industrialist’s son, is a sham to keep his death at bay.",
      "popularity": 1503.839,
      "poster_path": "/7wuKrFvbX7kAIF0ctotARsqayPo.jpg",
      "vote_average": 5,
      "vote_count": 33
    },
    {
      "backdrop_path": "/xYiI6QEZvx8Z4La1oHvApyZHpOU.jpg",
      "first_air_date": "2023-01-16",
      "genre_ids": [
        10766,
        35
      ],
      "id": 209117,
      "name": "Never Give Up",
      "origin_country": [
        "BR"
      ],
      "original_language": "pt",
      "original_name": "Vai na Fé",
      "overview": "Sol is a hardworking woman who has the chance to work as a backing vocalist for a funk singer and return to dancing, as she did in her youth. Torn between family pressure and passion for the stage, she must face the judgment of her church's members and conflicts with her family. The new chance will make her reconnect with her past in many ways, leading her to find her great youth love.",
      "popularity": 1495.953,
      "poster_path": "/6QNohzb7YUJ6eWZkXAYU8KGIq.jpg",
      "vote_average": 8.2,
      "vote_count": 6
    },
    {
      "backdrop_path": "/5fhS6Bh4VnF0SOZyZnhNpc0XHDb.jpg",
      "first_air_date": "2023-04-06",
      "genre_ids": [
        18
      ],
      "id": 137206,
      "name": "Till The End of The Moon",
      "origin_country": [
        "CN"
      ],
      "original_language": "zh",
      "original_name": "长月烬明",
      "overview": "In an era when the demons are in power, they are the masters of the despicable cultivators and mortals. The cultivator elders deem it necessary to send someone back in time, to determine the origin of the demon lord and to prevent his awakening. Li Su Su accepts the mission, becoming the mortal Ye Xi Wu, General Ye's third daughter who is married to Tantai Jin, the hostage prince and future demon lord. She is determined to destroy Tantai Jin, who in the future will massacre many. But as a witness to Tantai Jin's past life and rise to power, an unexpected tale emerges, one complicating her quest.",
      "popularity": 1370.218,
      "poster_path": "/xcKDmUKEzysLjJEJTjonNoMraht.jpg",
      "vote_average": 10,
      "vote_count": 2
    }
  ],
  "total_pages": 7414,
  "total_results": 148265
}
  ```
+++

### Query Parameters

| Parameter | Description                | Required |
|-----------|---------------------------|----------|
| [!badge variant="dark" text="genre"] | Genre filter for TV shows.  | [!badge variant="dark" text="false"] |

---

### Series Genres
==- List
| Genre | ID |
|--------|----|
| Action & Adventure | 10759 |
| Animation | 16 |
| Comedy | 35 |
| Crime | 80 |
| Documentary | 99 |
| Drama | 18 |
| Family | 10751 |
| Kids | 10762 |
| Mystery | 9648 |
| News | 10763 |
| Reality | 10764 |
| Sci-Fi & Fantasy | 10765 |
| Soap | 10766 |
| Talk | 10767 |
| War & Politics | 10768 |
| Western | 37 |
===
