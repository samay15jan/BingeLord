---
order: 100
icon: rel-file-path
---

# Movies

Retrieves a list of recommended movies based on a selected movie.

+++ Request
  HTTP
  ```http
    GET /api/recommendedMovies?id={movie_id}
  ```
  cURL
  ```sh
    curl -X GET "https://bingelord-backend.onrender.com/api/recommendedMovies?id=12345"
  ```
+++ Response
  ```json
  {
  "page": 1,
  "results": [
    {
      "backdrop_path": "/zgngWYj9kydOTP3bE1MZIi1YIq4.jpg",
      "id": 3412,
      "title": "Return from Death: Frankenstein 2000",
      "original_title": "Ritorno dalla morte",
      "overview": "When a woman is beaten into a coma and saved from being raped by her handyman (Donald O'Brien), the local security force does a cover-up to save the town's reputation and frames the saviour. After he hangs himself, the woman's strange comatose psi-powers revive him from the dead to exact revenge.",
      "poster_path": "/6zZKpFuzfO8ELyovhlHpVPNxQgK.jpg",
      "media_type": "movie",
      "adult": false,
      "original_language": "en",
      "genre_ids": [
        27
      ],
      "popularity": 2.002,
      "release_date": "1991-01-01",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 13
    },
    {
      "backdrop_path": "/xdH8k2O6mpLv4szeLkQGiM1aSOC.jpg",
      "id": 10372,
      "title": "Ewoks: The Battle for Endor",
      "original_title": "Ewoks: The Battle for Endor",
      "overview": "The army of the Marauders, led by King Terak and the witch Charal, attack the Ewoks village, killing Cindel's family. Cindel and the Ewok Wicket escape and meet Teek in the forest, a naughty and very fast animal. Teek takes them to a house in which an old man, Noa, lives. Like Cindel, he also crashed with his Starcruiser on Endor. Together they fight Terak and Charal.",
      "poster_path": "/ntgKdekb7xMKscyh2Hei706LBLf.jpg",
      "media_type": "movie",
      "adult": false,
      "original_language": "en",
      "genre_ids": [
        12,
        10751,
        10770,
        878,
        14
      ],
      "popularity": 11.168,
      "release_date": "1985-11-24",
      "video": false,
      "vote_average": 5.408,
      "vote_count": 310
    },
    {
      "backdrop_path": "/AuTfo1lbE8s2Y8RVTmlbJAeLWPK.jpg",
      "id": 850888,
      "title": "Sayen: The Huntress",
      "original_title": "Sayen: La cazadora",
      "overview": "Realizing that she cannot take down Fisk alone, Sayen teams up with an underground resistance group with a plan to expose and end Fisk's unchecked plundering once and for all.",
      "poster_path": "/upKD8UbH8vQ798aMWgwMxV8t4yk.jpg",
      "media_type": "movie",
      "adult": false,
      "original_language": "es",
      "genre_ids": [
        28,
        53
      ],
      "popularity": 21.596,
      "release_date": "2024-04-26",
      "video": false,
      "vote_average": 5.9,
      "vote_count": 162
    },
    {
      "backdrop_path": "/ceEx9V0sUiyL2rPc6G7rZXnVtd1.jpg",
      "id": 888768,
      "title": "Weekend Rebels",
      "original_title": "Wochenendrebellen",
      "overview": "Mirco von Juterczenka's novel \"Wir Wochenendrebellen\" is the story of a father and his ten-year-old son, who is Asperger's autistic. The boy has set his mind on finally finding his favourite football club. But his selection criteria are very specific and besides, he wants to experience all the clubs (no matter in which league they play) live in the stadium.",
      "poster_path": "/3H7rdXsFmoAA5coTaLOR7OTHyu4.jpg",
      "media_type": "movie",
      "adult": false,
      "original_language": "de",
      "genre_ids": [
        35,
        18
      ],
      "popularity": 11.944,
      "release_date": "2023-09-28",
      "video": false,
      "vote_average": 6.952,
      "vote_count": 84
    },
    {
      "backdrop_path": null,
      "id": 1075378,
      "title": "Dschugaswili from Georgia",
      "original_title": "Dschugaswili aus Georgien",
      "overview": "Forced collectivism, famines, errors and mistakes mark Stalin´s ruthless rise to dictorial power and only increase his madness until he even declares a chicken to be an English spy that should be liquidated.",
      "poster_path": null,
      "media_type": "movie",
      "adult": false,
      "original_language": "de",
      "genre_ids": [],
      "popularity": 2.097,
      "release_date": "1984-01-01",
      "video": false,
      "vote_average": 6.486,
      "vote_count": 36
    },
    {
      "backdrop_path": "/pR8oekLmk6ar3wF4vyJJwWg4JUE.jpg",
      "id": 221110,
      "title": "Kathleen Madigan: Madigan Again",
      "original_title": "Kathleen Madigan: Madigan Again",
      "overview": "Kathleen Madigan drops in on Detroit to deliver material derived from time spent with her Irish Catholic Midwest family, eating random pills out of her mother's purse, touring Afghanistan, and her love of John Denver and the Lunesta butterfly.",
      "poster_path": "/qZvuMcFIXtrAxqkcgF3JjQGXk1B.jpg",
      "media_type": "movie",
      "adult": false,
      "original_language": "en",
      "genre_ids": [
        35
      ],
      "popularity": 4.274,
      "release_date": "2013-09-11",
      "video": false,
      "vote_average": 7.594,
      "vote_count": 101
    },
    {
      "backdrop_path": null,
      "id": 1172384,
      "title": "Phosphor",
      "original_title": "Фосфор",
      "overview": "Returning wounded from the war Maksym was overcome by self-doubt, in his physiological state. He is undergoing rehabilitation. He loses contact with his wife. He is tormented by dreams. In one of his dreams Maksym goes to the island to catch a lot of fish, as the paramedic advised him. Maksym takes a boat, net, dynamite from the best man and sails to the island.",
      "poster_path": "/xDUzZpU4cXZ61rmxJR4CEFwvzhj.jpg",
      "media_type": "movie",
      "adult": false,
      "original_language": "uk",
      "genre_ids": [],
      "popularity": 2.741,
      "release_date": "2023-09-12",
      "video": false,
      "vote_average": 7.361,
      "vote_count": 36
    },
    {
      "backdrop_path": "/zNUmOf9vOk0f146jQBrBkdmrZyH.jpg",
      "id": 554279,
      "title": "Return to Christmas Creek",
      "original_title": "Return to Christmas Creek",
      "overview": "As Christmas approaches, Amelia Hughes, a career-focused Chicago app developer lacking in holiday spirit, returns to her small hometown of Christmas Creek to rediscover the meaning of Christmas. There, she reunites with her childhood best friend Mike and her estranged uncle Harry, whose mysterious rift with Amelia’s father divided her family during the holiday season when she was a child.",
      "poster_path": "/gCdjZCWM9x9vAbtkvZiIIYL7tOB.jpg",
      "media_type": "movie",
      "adult": false,
      "original_language": "en",
      "genre_ids": [
        10749,
        10751,
        10770
      ],
      "popularity": 8.344,
      "release_date": "2018-11-18",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 115
    },
    {
      "backdrop_path": "/vLlZ8eqPEEg74g7BiL0AUySzLn9.jpg",
      "id": 54728,
      "title": "WWE Wrestlemania XXVI",
      "original_title": "WWE Wrestlemania XXVI",
      "overview": "WrestleMania XXVI was the twenty-sixth annual WrestleMania PPV and was presented by Slim Jim. It took place on March 28, 2010 at the University of Phoenix Stadium in Glendale, Arizona. The first main event was a No DQ, no count-out match that featured The Undertaker versus Shawn Michaels. The second was a singles match for the WWE Championship that saw Batista defend the championship against John Cena. The third was a singles match for the World Heavyweight Championship featured the champion, Chris Jericho, defending against Edge for the title. Featured matches on the undercard included a 10-Diva tag team match, Bret Hart versus Vince McMahon in a No Holds Barred match, Rey Mysterio versus CM Punk, Triple H versus Sheamus, the sixth annual Money in the Bank ladder match, a Triple Threat match between Randy Orton, Ted DiBiase, and Cody Rhodes, and a WWE Tag Team Championship match between Big Show and The Miz, against John Morrison and R-Truth.",
      "poster_path": "/xCPycxd5YPw2YzZ3j5Cu80b7nr4.jpg",
      "media_type": "movie",
      "adult": false,
      "original_language": "en",
      "genre_ids": [
        28
      ],
      "popularity": 7.714,
      "release_date": "2010-03-28",
      "video": true,
      "vote_average": 7.7,
      "vote_count": 71
    },
    {
      "backdrop_path": "/7kQvHmGyKJv2wSKVfCUux50rd7A.jpg",
      "id": 920342,
      "title": "Monster's Battlefield",
      "original_title": "异兽战场",
      "overview": "The soldier king Qin Yang's fiancée Ye Qin met with an unknown beast and died tragically. Gu Ping invites him to participate in Ye Qin's scientific research before her death. But Gu Ping is using Ye Qin's research results to combine the genes of unknown beasts to create the \"Zero\" dragon creature. The intelligent dragon creature, coupled with the extra-terrestrial beast evolved by devouring,  an imminent city war is coming...",
      "poster_path": "/nBVYp2xxx2R02n21EGlDky8CgWR.jpg",
      "media_type": "movie",
      "adult": false,
      "original_language": "zh",
      "genre_ids": [
        878,
        28,
        27
      ],
      "popularity": 42.163,
      "release_date": "2021-12-27",
      "video": false,
      "vote_average": 6.806,
      "vote_count": 191
    },
    {
      "backdrop_path": "/r6Sh5HNF1nJkhzYBYT88RUQ7GVR.jpg",
      "id": 34862,
      "title": "Solar Attack",
      "original_title": "Solar Attack",
      "overview": "When the sun's increasing expulsions of plasma threaten to ignite methane in our atmosphere, international tensions rise while scientists race for a solution to avoid natural disaster.",
      "poster_path": "/dL5hDlxU8BLf1oVdnl9Llb2uoI.jpg",
      "media_type": "movie",
      "adult": false,
      "original_language": "en",
      "genre_ids": [
        28,
        878,
        53,
        10770
      ],
      "popularity": 6.359,
      "release_date": "2006-05-25",
      "video": false,
      "vote_average": 5.3,
      "vote_count": 42
    },
    {
      "backdrop_path": "/sTPXyadD38ri1rG4c1r4lewtKFp.jpg",
      "id": 50717,
      "title": "Davy Crockett and the River Pirates",
      "original_title": "Davy Crockett and the River Pirates",
      "overview": "Davy Crockett and his sidekick Georgie compete against boastful Mike Fink (\"King of the River\") in a boat race to New Orleans. Later, Davy and Georgie, allied with Fink, battle a group of river pirates trying to pass themselves off as Native Americans.",
      "poster_path": "/nK43dRSgNYglR37KbcCjsimj5PE.jpg",
      "media_type": "movie",
      "adult": false,
      "original_language": "en",
      "genre_ids": [
        12,
        10751,
        37
      ],
      "popularity": 6.246,
      "release_date": "1956-07-18",
      "video": false,
      "vote_average": 6.363,
      "vote_count": 62
    },
    {
      "backdrop_path": "/98MW3zxRdBzlnyLpAQvMdY0pe6G.jpg",
      "id": 37609,
      "title": "The Cheetah Girls 2",
      "original_title": "The Cheetah Girls 2",
      "overview": "Best friends Galleria, Chanel, Dorinda, and Aqua, A.K.A. the girl band \"The Cheetahs,\" get the opportunity of a lifetime when they strut their way to Barcelona, Spain, to perform in an international music festival. Along the way, the \"amigas Cheetahs\" learn that, although their paths are not the same, they are lucky to have one another for the journey.",
      "poster_path": "/cKLATvYcVUn6FfmgOU811TJgHWl.jpg",
      "media_type": "movie",
      "adult": false,
      "original_language": "en",
      "genre_ids": [
        10751,
        35,
        18,
        10402,
        10770
      ],
      "popularity": 10.858,
      "release_date": "2006-07-31",
      "video": false,
      "vote_average": 6.272,
      "vote_count": 402
    },
    {
      "backdrop_path": "/tDl62IXslf4ZVw9GcAsHPgFbmux.jpg",
      "id": 580333,
      "title": "Chou Deneiban SD Gundam Sangokuden Brave Battle Warriors",
      "original_title": "超電影版SDガンダム三国伝 Brave Battle Warriors",
      "overview": "A Romance of the Three Kingdoms retelling using SD Gundams.  (Source: Myanimelist.net)",
      "poster_path": "/sow8oeZ9sjwC5rbuEkFtl57rjpr.jpg",
      "media_type": "movie",
      "adult": false,
      "original_language": "ja",
      "genre_ids": [
        16,
        35,
        878
      ],
      "popularity": 2.508,
      "release_date": "2010-02-27",
      "video": false,
      "vote_average": 6.1,
      "vote_count": 46
    },
    {
      "backdrop_path": "/bMTY4wgV9sZHBxe1cMEUEfu30P7.jpg",
      "id": 854344,
      "title": "Senritsu Kaiki File Kowasugi! File 04: The Truth! Hanako-san in the Toilet",
      "original_title": "戦慄怪奇ファイル コワすぎ！FILE-04真相！トイレの花子さん",
      "overview": "A video recently posted by two teens shows something popping out of a closed toilet at an abandoned school.",
      "poster_path": "/wt1IqXEoKPtMkSAay2V9w4SJF9V.jpg",
      "media_type": "movie",
      "adult": false,
      "original_language": "ja",
      "genre_ids": [
        27
      ],
      "popularity": 0.991,
      "release_date": "2013-03-02",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 11
    },
    {
      "backdrop_path": "/oyjIJTUUsF1nMdVXk3Q0ExBr0pQ.jpg",
      "id": 14128,
      "title": "Cinderella II: Dreams Come True",
      "original_title": "Cinderella II: Dreams Come True",
      "overview": "As a newly crowned princess, Cinderella quickly learns that life at the Palace - and her royal responsibilities - are more challenging than she had imagined. In three heartwarming tales, Cinderella calls on her animal friends and her Fairy Godmother to help as she brings her own grace and charm to her regal role and discovers that being true to yourself is the best way to make your dreams come true.",
      "poster_path": "/kEDbtKhZsqPo7ypCzoz3fkq73Pc.jpg",
      "media_type": "movie",
      "adult": false,
      "original_language": "en",
      "genre_ids": [
        10751,
        16,
        10749,
        14
      ],
      "popularity": 45.51,
      "release_date": "2002-02-23",
      "video": false,
      "vote_average": 6.1,
      "vote_count": 1463
    },
    {
      "backdrop_path": "/13MNZaAKNoSZpOs5HULVNQwZYjB.jpg",
      "id": 882093,
      "title": "David and the Elves",
      "original_title": "Dawid i elfy",
      "overview": "Christmas is drawing near, but it’s not a happy time for David. After moving to a big city, his parents have been bogged down with work and forgotten the meaning of Christmas. David decides to change that. Together with Albert the Elf, who escaped from the land of Santa to figure out what Christmas is all about, David sets off to Tatra Mountains, where his grandparents live, on a journey full of adventures.",
      "poster_path": "/gdQml1N2kysb1wKAGqTu3ZuQADW.jpg",
      "media_type": "movie",
      "adult": false,
      "original_language": "pl",
      "genre_ids": [
        10751,
        14,
        35
      ],
      "popularity": 9.422,
      "release_date": "2021-12-06",
      "video": false,
      "vote_average": 6.1,
      "vote_count": 85
    },
    {
      "backdrop_path": "/zlpZzccypkAYFZIyYLQcchl90ZC.jpg",
      "id": 225914,
      "title": "Spider-Man",
      "original_title": "Spider-Man",
      "overview": "When an extortionist threatens to force a multi-suicide unless a huge ransom is paid, only Peter Parker can stop him with his new powers as Spider-Man.",
      "poster_path": "/jNxRHZ2cxVkNRtxgHuCtv7GY4JP.jpg",
      "media_type": "movie",
      "adult": false,
      "original_language": "en",
      "genre_ids": [
        878,
        28,
        80,
        10770
      ],
      "popularity": 17.034,
      "release_date": "1977-09-14",
      "video": false,
      "vote_average": 6.2,
      "vote_count": 184
    },
    {
      "backdrop_path": "/e0qpg4etbAOysm5MD8QQNOSZXwo.jpg",
      "id": 1219685,
      "title": "An Ideal Father",
      "original_title": "Un père idéal",
      "overview": "Michel, the jovial owner of the only café in a small Normandy town, sees his life turned upside down when his teenage daughter is murdered. The community has his back but soon rumor spreads and Michel is singled out. From the ideal father, he becomes the ideal culprit.",
      "poster_path": "/4xJd3uwtL1vCuZgEfEc8JXI9Uyx.jpg",
      "media_type": "movie",
      "adult": false,
      "original_language": "fr",
      "genre_ids": [
        18,
        10770
      ],
      "popularity": 12.264,
      "release_date": "2024-04-21",
      "video": false,
      "vote_average": 6.432,
      "vote_count": 110
    },
    {
      "backdrop_path": "/v8Rg963ryBoP3ECo8g8OK8QQ1CE.jpg",
      "id": 791333,
      "title": "Four's a Crowd",
      "original_title": "El cuarto pasajero",
      "overview": "Julián, a divorced man with financial problems, uses a cell phone application to share his car with strangers.",
      "poster_path": "/deOu3LDIbWtipp8vjCaszKz22LZ.jpg",
      "media_type": "movie",
      "adult": false,
      "original_language": "es",
      "genre_ids": [
        35
      ],
      "popularity": 8.985,
      "release_date": "2022-10-28",
      "video": false,
      "vote_average": 6.3,
      "vote_count": 114
    }
  ],
  "total_pages": 2,
  "total_results": 40
}
  ```
+++

### Query Parameters

| Parameter | Description               | Default | Required |
|-----------|---------------------------|---------|----------|
| [!badge variant="dark" text="id"] | Movie ID to fetch recommendations. | None | [!badge variant="dark" text="true"] |
