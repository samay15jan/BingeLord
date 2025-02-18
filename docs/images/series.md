---
order: 100
icon: rel-file-path
---

# Series

Retrieves specific images for a given TV show.

+++ Request
  HTTP
  ```http
    GET /api/imagesTV?id={tv_id}
  ```
  cURL
  ```sh
    curl -X GET "https://bingelord-backend.onrender.com/api/imagesTV?id=67890"
  ```
+++ Response
  ```json
{
  "backdrops": [
    {
      "aspect_ratio": 1.778,
      "height": 800,
      "iso_639_1": null,
      "file_path": "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
      "vote_average": 5.622,
      "vote_count": 20,
      "width": 1422
    },
    {
      "aspect_ratio": 1.778,
      "height": 720,
      "iso_639_1": "en",
      "file_path": "/fygeMr16EcxJiYhdiO1LEr7iHtI.jpg",
      "vote_average": 5.318,
      "vote_count": 3,
      "width": 1280
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": "en",
      "file_path": "/b9HyPoxwxjxkWEUL5ErZdhApQe2.jpg",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 1440,
      "iso_639_1": null,
      "file_path": "/c6OLXfKAk5BKeR6broC8pYiCquX.jpg",
      "vote_average": 5.292,
      "vote_count": 18,
      "width": 2560
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/3nv2TEz2u178xPXzdKlZdUh5uOI.jpg",
      "vote_average": 5.276,
      "vote_count": 12,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/yguBaPk5V0nZCcSBthre4YFMAgk.jpg",
      "vote_average": 5.212,
      "vote_count": 11,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/xRyINp9KfMLVjRiO5nCsoRDdvvF.jpg",
      "vote_average": 5.206,
      "vote_count": 9,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/bsfJoKVAqFzlhvbt8AffjvYAtN4.jpg",
      "vote_average": 5.19,
      "vote_count": 5,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/kpRWGjh3SsYjuF26HyRhCJJkMRk.jpg",
      "vote_average": 5.19,
      "vote_count": 5,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": "en",
      "file_path": "/5pxdgKVEDWDQBtvqIB2eB2oheml.jpg",
      "vote_average": 5.18,
      "vote_count": 3,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 720,
      "iso_639_1": "en",
      "file_path": "/yPeG1RQm5Am0eslu0IwUEJ4VXND.jpg",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 1280
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": "en",
      "file_path": "/jAvY6IN6MIxmPM2oAtNqYK7P2gi.jpg",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 1920
    },
    {
      "aspect_ratio": 1.777,
      "height": 793,
      "iso_639_1": null,
      "file_path": "/52AfXWuXCHn3UjD17rBruA9f5qb.jpg",
      "vote_average": 5.146,
      "vote_count": 10,
      "width": 1409
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/ruJPyRrHYPS071XzVGPX3peYi0x.jpg",
      "vote_average": 5.146,
      "vote_count": 10,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 1439,
      "iso_639_1": null,
      "file_path": "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
      "vote_average": 5.144,
      "vote_count": 23,
      "width": 2559
    },
    {
      "aspect_ratio": 1.778,
      "height": 1964,
      "iso_639_1": null,
      "file_path": "/8iVyhmjzUbvAGppkdCZPiyEHSoF.jpg",
      "vote_average": 5.138,
      "vote_count": 8,
      "width": 3492
    },
    {
      "aspect_ratio": 1.778,
      "height": 900,
      "iso_639_1": null,
      "file_path": "/3qFgjOYLnEUfBxt5yWRKmRRrh9w.jpg",
      "vote_average": 5.138,
      "vote_count": 8,
      "width": 1600
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/eZRY604RqrnT2Yxz0GwGo7tRChX.jpg",
      "vote_average": 5.128,
      "vote_count": 6,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/5OjjPVk14NZRp8N5UUS6k55hbfp.jpg",
      "vote_average": 5.118,
      "vote_count": 4,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 2160,
      "iso_639_1": null,
      "file_path": "/vxqKGixpgNndTz58YbFpTlw8lpB.jpg",
      "vote_average": 5.118,
      "vote_count": 4,
      "width": 3840
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/nHOaLyQeV9isvyxF7mMH2TUG8IK.jpg",
      "vote_average": 5.118,
      "vote_count": 4,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/rv972EWgze3DZitMMY8AEDzD9HK.jpg",
      "vote_average": 5.118,
      "vote_count": 4,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 2160,
      "iso_639_1": null,
      "file_path": "/vfEuh0ELDkHWu3UfJiEkWN8Z4tc.jpg",
      "vote_average": 5.118,
      "vote_count": 4,
      "width": 3840
    },
    {
      "aspect_ratio": 1.776,
      "height": 1172,
      "iso_639_1": null,
      "file_path": "/2SW1FZHZw4ncy61pb8jcgrzVQVk.jpg",
      "vote_average": 5.106,
      "vote_count": 2,
      "width": 2082
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/1lBuRNwlqUs4BeF7UR4RuAgp2KW.jpg",
      "vote_average": 5.106,
      "vote_count": 2,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/7XEtHQoy1hwa8XWaOkSv3rlteea.jpg",
      "vote_average": 5.09,
      "vote_count": 11,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/yrN6gon5NG6t7Lgh05byChFSZem.jpg",
      "vote_average": 5.08,
      "vote_count": 9,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 720,
      "iso_639_1": null,
      "file_path": "/qRNDy8RLjd7WAD8GGTBmzGAFFGF.jpg",
      "vote_average": 5.044,
      "vote_count": 3,
      "width": 1280
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/aKSnDPpYxaalpDkla9LyIzn2bjq.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/sty6obiES7ZMkEaCWt5dthRbvHT.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/9sxsHE74N1SXYpXzUEiO3PoDvan.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/o9PU3vpXhpl13qogQ8gLL30wH2Y.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/wRxE40hwcSWSkHUnj8zGMf5tnab.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/maCmEa61kG3cIvoCwdFtEbrJThT.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/mvvVcyJwj7n8iwgPsTFUWzc9N8L.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/tOciO9nqIZn1MbnMxu5Rweayd83.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/8KEWr4K6zyF77RDIqZAeMpi2MRV.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/fSJpyCCOPblKc2GHgTi682d7mqF.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/xJC7qhzgPJXEEi4EdAxYUF1WEGf.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778,
      "height": 1152,
      "iso_639_1": "pt",
      "file_path": "/rCMuTyJGT2GJzXcvWeYAVHQQRFS.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 2048
    },
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": "sv",
      "file_path": "/zSB4QpFOqQXGeugeKALCK7hoX68.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1920
    }
  ],
  "id": 550,
  "logos": [
    {
      "aspect_ratio": 5.203,
      "height": 79,
      "iso_639_1": "he",
      "file_path": "/c1KLulrIhUqY5fT42nmC5aERGCp.png",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 411
    },
    {
      "aspect_ratio": 8.502,
      "height": 235,
      "iso_639_1": "pt",
      "file_path": "/qqAcl1YIT5Sa2nx8tKQcervQCco.png",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 1998
    },
    {
      "aspect_ratio": 4.638,
      "height": 389,
      "iso_639_1": "en",
      "file_path": "/7Uqhv24pGJs4Ns31NoOPWFJGWNG.png",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 1804
    },
    {
      "aspect_ratio": 1.329,
      "height": 1275,
      "iso_639_1": "en",
      "file_path": "/v7JwpiYf2knmf2R2mLLvJmNxy9x.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1694
    },
    {
      "aspect_ratio": 0.848,
      "height": 1295,
      "iso_639_1": "en",
      "file_path": "/4XkF0Rf7gvSfea8fYLFbU5tmuJw.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1098
    },
    {
      "aspect_ratio": 1.5,
      "height": 290,
      "iso_639_1": "en",
      "file_path": "/y9dOBfqWvCdxQcwBSPT2nfXGJpi.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 435
    },
    {
      "aspect_ratio": 0.861,
      "height": 294,
      "iso_639_1": "en",
      "file_path": "/7s3aiqRnwRUVpwtxFLrWyMITHSC.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 253
    },
    {
      "aspect_ratio": 1.324,
      "height": 293,
      "iso_639_1": "es",
      "file_path": "/xJe4B5TVXvjldcdlwlSgJ7PtjDu.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 388
    },
    {
      "aspect_ratio": 2.134,
      "height": 298,
      "iso_639_1": "es",
      "file_path": "/z6yka0HngU3FPjcWBc4CSxokUg0.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 636
    },
    {
      "aspect_ratio": 1.29,
      "height": 310,
      "iso_639_1": "en",
      "file_path": "/ahnGkBeGqvUtpyfOqoWt9Cto9WR.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 400
    },
    {
      "aspect_ratio": 1.34,
      "height": 300,
      "iso_639_1": "en",
      "file_path": "/fI7UHnoU685iz4eG7lQu7aKfxPW.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 402
    },
    {
      "aspect_ratio": 1.766,
      "height": 295,
      "iso_639_1": "en",
      "file_path": "/hfbxs6yi35ciD6xcuGz0eeHfpm9.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 521
    },
    {
      "aspect_ratio": 0.868,
      "height": 296,
      "iso_639_1": "en",
      "file_path": "/ofkQTAMEY6N8MSiezFMxdQtej3o.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 257
    },
    {
      "aspect_ratio": 2.209,
      "height": 1298,
      "iso_639_1": "pt",
      "file_path": "/5TVHz85ylbxt1jTbZ2DfPsKioX0.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 2867
    },
    {
      "aspect_ratio": 2.209,
      "height": 1298,
      "iso_639_1": "pt",
      "file_path": "/k8KZ4lH1GRNNJo6n8FZjCDTBIaL.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 2867
    },
    {
      "aspect_ratio": 1.382,
      "height": 296,
      "iso_639_1": "en",
      "file_path": "/a3YV8Fnue6LTuSRuvnLxvEPeZxz.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 409
    },
    {
      "aspect_ratio": 3.365,
      "height": 233,
      "iso_639_1": "en",
      "file_path": "/yDcFmXCT4XUkTujDY3p1auO8Po5.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 784
    },
    {
      "aspect_ratio": 1.371,
      "height": 294,
      "iso_639_1": "en",
      "file_path": "/mjrGAw5IyGQIYsJaqGIyxgvnfZj.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 403
    },
    {
      "aspect_ratio": 2.085,
      "height": 295,
      "iso_639_1": "ru",
      "file_path": "/y9RSpK5PpMYEkfdCRofBp09KpW9.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 615
    },
    {
      "aspect_ratio": 1.749,
      "height": 299,
      "iso_639_1": "es",
      "file_path": "/tYztBlJpIClYUznEI1G0mQWxoCO.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 523
    },
    {
      "aspect_ratio": 2.103,
      "height": 428,
      "iso_639_1": "ru",
      "file_path": "/aj0TDYImCd1bd0woML4I5t3C2Qh.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 900
    },
    {
      "aspect_ratio": 1.041,
      "height": 244,
      "iso_639_1": "en",
      "file_path": "/40uRxnaxKNIxZPVKVMizbe76a8h.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 254
    },
    {
      "aspect_ratio": 1.474,
      "height": 661,
      "iso_639_1": "he",
      "file_path": "/nDZdalfIZ3v7vx56zHo3HtApGqG.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 974
    },
    {
      "aspect_ratio": 1.332,
      "height": 244,
      "iso_639_1": "pt",
      "file_path": "/l8pqQ4bwdU8IkdAvEM2PVYjqYCT.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 325
    },
    {
      "aspect_ratio": 1.472,
      "height": 536,
      "iso_639_1": "ro",
      "file_path": "/spz7zdPaSFQPicmSdCvpIzTwsHo.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 789
    },
    {
      "aspect_ratio": 2.536,
      "height": 304,
      "iso_639_1": "pl",
      "file_path": "/dYd6n3eOlijsiX25OV3sfHqCF10.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 771
    },
    {
      "aspect_ratio": 1.297,
      "height": 538,
      "iso_639_1": "th",
      "file_path": "/pHsyBpUS4uz288bpZtnCmPHYxmN.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 698
    },
    {
      "aspect_ratio": 7.313,
      "height": 297,
      "iso_639_1": "hu",
      "file_path": "/oMV5afEbMOxh1nowR1tLxFpIEhH.png",
      "vote_average": 0,
      "vote_count": 0,
      "width": 2172
    }
  ],
  "posters": [
    {
      "aspect_ratio": 0.667,
      "height": 900,
      "iso_639_1": "pt",
      "file_path": "/r3pPehX4ik8NLYPpbDRAh0YRtMb.jpg",
      "vote_average": 5.258,
      "vote_count": 6,
      "width": 600
    },
    {
      "aspect_ratio": 0.667,
      "height": 1350,
      "iso_639_1": "ru",
      "file_path": "/66RvLrRJTm4J8l3uHXWF09AICol.jpg",
      "vote_average": 5.522,
      "vote_count": 4,
      "width": 900
    },
    {
      "aspect_ratio": 0.667,
      "height": 3000,
      "iso_639_1": "en",
      "file_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
      "vote_average": 5.504,
      "vote_count": 46,
      "width": 2000
    },
    {
      "aspect_ratio": 0.667,
      "height": 3000,
      "iso_639_1": "en",
      "file_path": "/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
      "vote_average": 5.46,
      "vote_count": 25,
      "width": 2000
    },
    {
      "aspect_ratio": 0.706,
      "height": 2834,
      "iso_639_1": "en",
      "file_path": "/14Cs3sr6nus6QTHThldis8p4Nlm.jpg",
      "vote_average": 5.384,
      "vote_count": 2,
      "width": 2000
    },
    {
      "aspect_ratio": 0.667,
      "height": 2100,
      "iso_639_1": "tr",
      "file_path": "/yjMuqAyJUoQZGWsZ0vZuYj5inAR.jpg",
      "vote_average": 5.384,
      "vote_count": 2,
      "width": 1400
    },
    {
      "aspect_ratio": 0.667,
      "height": 3000,
      "iso_639_1": "he",
      "file_path": "/7Tmjr0jgVj8hHcd3UJD6HIilMKM.jpg",
      "vote_average": 5.384,
      "vote_count": 2,
      "width": 2000
    },
    {
      "aspect_ratio": 0.667,
      "height": 3000,
      "iso_639_1": "pt",
      "file_path": "/ohXr0v9U0TfFu9IXbSDm5zoGV3R.jpg",
      "vote_average": 5.33,
      "vote_count": 9,
      "width": 2000
    },
    {
      "aspect_ratio": 0.667,
      "height": 2100,
      "iso_639_1": "es",
      "file_path": "/1yWmCAIGSVNuTOGyz9F48W9g1Ux.jpg",
      "vote_average": 5.326,
      "vote_count": 7,
      "width": 1400
    },
    {
      "aspect_ratio": 0.667,
      "height": 1500,
      "iso_639_1": "ko",
      "file_path": "/eKZ07Ted7VHxQjbuZrRBFOamcKJ.jpg",
      "vote_average": 5.318,
      "vote_count": 3,
      "width": 1000
    },
    {
      "aspect_ratio": 0.666,
      "height": 1418,
      "iso_639_1": "uk",
      "file_path": "/266SbE7HFsEbvprMagQyf19PDsn.jpg",
      "vote_average": 5.318,
      "vote_count": 3,
      "width": 945
    },
    {
      "aspect_ratio": 0.667,
      "height": 3000,
      "iso_639_1": "es",
      "file_path": "/sgTAWJFaB2kBvdQxRGabYFiQqEK.jpg",
      "vote_average": 5.318,
      "vote_count": 3,
      "width": 2000
    },
    {
      "aspect_ratio": 0.667,
      "height": 3000,
      "iso_639_1": "es",
      "file_path": "/6HRbhpNd32STZ3QqtoRCuoow1EI.jpg",
      "vote_average": 5.318,
      "vote_count": 3,
      "width": 2000
    },
    {
      "aspect_ratio": 0.667,
      "height": 1500,
      "iso_639_1": "he",
      "file_path": "/d23jzgwz3G7CPBEj3gNusWmkd64.jpg",
      "vote_average": 5.318,
      "vote_count": 3,
      "width": 1000
    },
    {
      "aspect_ratio": 0.667,
      "height": 1200,
      "iso_639_1": "de",
      "file_path": "/rUPKPWBpr2ZbDXXZpT0qgYqTlG9.jpg",
      "vote_average": 5.318,
      "vote_count": 3,
      "width": 800
    },
    {
      "aspect_ratio": 0.667,
      "height": 2250,
      "iso_639_1": "it",
      "file_path": "/rtNLQ8HbPElzEfrHjrzSr07prKT.jpg",
      "vote_average": 5.318,
      "vote_count": 3,
      "width": 1500
    },
    {
      "aspect_ratio": 0.667,
      "height": 750,
      "iso_639_1": "pl",
      "file_path": "/efBb4gjjKneUoBVgfFOUu2OwihS.jpg",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 500
    },
    {
      "aspect_ratio": 0.667,
      "height": 2250,
      "iso_639_1": "it",
      "file_path": "/xEAX4Hq21wZcRhspT7VyGtTspsp.jpg",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 1500
    },
    {
      "aspect_ratio": 0.667,
      "height": 1620,
      "iso_639_1": "ru",
      "file_path": "/8GJpI9jGsnJQ6wSnYTbddrbjsWB.jpg",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 1080
    },
    {
      "aspect_ratio": 0.667,
      "height": 3000,
      "iso_639_1": "pt",
      "file_path": "/nu7FEmC4zBaZ7c3QYmVpDlZa2H0.jpg",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 2000
    },
    {
      "aspect_ratio": 0.667,
      "height": 1500,
      "iso_639_1": "en",
      "file_path": "/6DFl63gJmQPxWBPRucHegEJ2Qns.jpg",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 1000
    },
    {
      "aspect_ratio": 0.667,
      "height": 1200,
      "iso_639_1": "en",
      "file_path": "/9VOESirK1bX66Xenj9QHcl5GJU9.jpg",
      "vote_average": 5.282,
      "vote_count": 14,
      "width": 800
    },
    {
      "aspect_ratio": 0.667,
      "height": 3000,
      "iso_639_1": "en",
      "file_path": "/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg",
      "vote_average": 5.27,
      "vote_count": 10,
      "width": 2000
    },
    {
      "aspect_ratio": 0.667,
      "height": 3000,
      "iso_639_1": "pt",
      "file_path": "/mZDc9F3uNSgUNaudb1VtumPs3dL.jpg",
      "vote_average": 5.252,
      "vote_count": 4,
      "width": 2000
    },
    {
      "aspect_ratio": 0.667,
      "height": 1500,
      "iso_639_1": "fr",
      "file_path": "/6NdNO1dq9w54ujk2G4sK4ogsf0H.jpg",
      "vote_average": 5.252,
      "vote_count": 4,
      "width": 1000
    },
    {
      "aspect_ratio": 0.666,
      "height": 1000,
      "iso_639_1": "en",
      "file_path": "/b1ONg8Is4l760oryJa7Aw7LdPtM.jpg",
      "vote_average": 5.252,
      "vote_count": 4,
      "width": 666
    },
    {
      "aspect_ratio": 0.701,
      "height": 1426,
      "iso_639_1": "en",
      "file_path": "/8kNruSfhk5IoE4eZOc4UpvDn6tq.jpg",
      "vote_average": 5.25,
      "vote_count": 23,
      "width": 1000
    },
    {
      "aspect_ratio": 0.666,
      "height": 1522,
      "iso_639_1": "uk",
      "file_path": "/x43vYIPjcVvts7iHw6GH8sU1tiZ.jpg",
      "vote_average": 5.246,
      "vote_count": 2,
      "width": 1014
    },
    {
      "aspect_ratio": 0.721,
      "height": 1020,
      "iso_639_1": "he",
      "file_path": "/v7Y0dqAMYBsdkiPVM5btdNkhzmt.jpg",
      "vote_average": 5.246,
      "vote_count": 2,
      "width": 735
    },
    {
      "aspect_ratio": 0.721,
      "height": 1020,
      "iso_639_1": "he",
      "file_path": "/nXZ5rghMvQayEGytShNxiLaEWLk.jpg",
      "vote_average": 5.246,
      "vote_count": 2,
      "width": 735
    },
    {
      "aspect_ratio": 0.667,
      "height": 2100,
      "iso_639_1": "en",
      "file_path": "/obVTG7QMbQ7gV3oZAJuFjKBhsGk.jpg",
      "vote_average": 5.246,
      "vote_count": 2,
      "width": 1400
    },
    {
      "aspect_ratio": 0.667,
      "height": 1500,
      "iso_639_1": "en",
      "file_path": "/uVe8UnJTgLso26NtA8GB4M0RDLh.jpg",
      "vote_average": 5.246,
      "vote_count": 2,
      "width": 1000
    },
    {
      "aspect_ratio": 0.667,
      "height": 2400,
      "iso_639_1": "en",
      "file_path": "/dMgcjU3uaL9BhizmZbrGJsPQ8h4.jpg",
      "vote_average": 5.246,
      "vote_count": 2,
      "width": 1600
    },
    {
      "aspect_ratio": 0.667,
      "height": 1500,
      "iso_639_1": "de",
      "file_path": "/aRgu4CfNcCIHGOnbX81IPujQ3bO.jpg",
      "vote_average": 5.246,
      "vote_count": 2,
      "width": 1000
    },
    {
      "aspect_ratio": 0.698,
      "height": 2865,
      "iso_639_1": "ko",
      "file_path": "/uEsdm0noLfmkcVrZlyyuXp9e5I7.jpg",
      "vote_average": 5.246,
      "vote_count": 2,
      "width": 2000
    },
    {
      "aspect_ratio": 0.667,
      "height": 3000,
      "iso_639_1": "es",
      "file_path": "/6ZO199essPSa8taBHB4zLvOJLDD.jpg",
      "vote_average": 5.246,
      "vote_count": 2,
      "width": 2000
    },
    {
      "aspect_ratio": 0.669,
      "height": 2278,
      "iso_639_1": "en",
      "file_path": "/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
      "vote_average": 5.232,
      "vote_count": 17,
      "width": 1524
    },
    {
      "aspect_ratio": 0.754,
      "height": 1500,
      "iso_639_1": "en",
      "file_path": "/wR5HZWdVpcXx9sevV1bQi7rP4op.jpg",
      "vote_average": 5.212,
      "vote_count": 11,
      "width": 1131
    },
    {
      "aspect_ratio": 0.667,
      "height": 3000,
      "iso_639_1": "es",
      "file_path": "/63j6sG0Q7GpLLNbGKgmFmAp7xT9.jpg",
      "vote_average": 5.198,
      "vote_count": 7,
      "width": 2000
    },
    {
      "aspect_ratio": 0.667,
      "height": 1500,
      "iso_639_1": "es",
      "file_path": "/cm8dnS4MF3jtz0mvA9nEiDy0kxl.jpg",
      "vote_average": 5.19,
      "vote_count": 5,
      "width": 1000
    },
    {
      "aspect_ratio": 0.667,
      "height": 1500,
      "iso_639_1": "es",
      "file_path": "/xfRCDSmdMQSISmLxI0r8hQ9GIQa.jpg",
      "vote_average": 5.19,
      "vote_count": 5,
      "width": 1000
    },
    {
      "aspect_ratio": 0.667,
      "height": 3000,
      "iso_639_1": "es",
      "file_path": "/pOzC3JAt5kG6tJSNgp4N46T5QTI.jpg",
      "vote_average": 5.19,
      "vote_count": 5,
      "width": 2000
    },
    {
      "aspect_ratio": 0.698,
      "height": 1433,
      "iso_639_1": "ko",
      "file_path": "/kabpExFv9JLp778w9ZtCtZnWH9N.jpg",
      "vote_average": 5.18,
      "vote_count": 3,
      "width": 1000
    },
    {
      "aspect_ratio": 0.667,
      "height": 3000,
      "iso_639_1": null,
      "file_path": "/a1hxQhCl2i9DmbjKXixkukVW7zy.jpg",
      "vote_average": 5.18,
      "vote_count": 3,
      "width": 2000
    },
    {
      "aspect_ratio": 0.711,
      "height": 1066,
      "iso_639_1": "pt",
      "file_path": "/8pcOlY6jaupFKTIy2aeKCKZ2GMj.jpg",
      "vote_average": 5.18,
      "vote_count": 3,
      "width": 758
    },
    {
      "aspect_ratio": 0.666,
      "height": 1066,
      "iso_639_1": "pt",
      "file_path": "/lZcILaI9vvoCUVxl9KnUKeL6sKc.jpg",
      "vote_average": 5.18,
      "vote_count": 3,
      "width": 710
    },
    {
      "aspect_ratio": 0.707,
      "height": 1403,
      "iso_639_1": "en",
      "file_path": "/wlmGPHDbnOK4AwL37m6tegxO8A3.jpg",
      "vote_average": 5.18,
      "vote_count": 3,
      "width": 992
    },
    {
      "aspect_ratio": 0.667,
      "height": 2100,
      "iso_639_1": "en",
      "file_path": "/hPkAixiAyXzQb8uTOiovuhpDBK2.jpg",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 1400
    },
    {
      "aspect_ratio": 0.671,
      "height": 1361,
      "iso_639_1": "ko",
      "file_path": "/4quCAKpCylIy991IHkLCuXCzO1a.jpg",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 913
    },
    {
      "aspect_ratio": 0.671,
      "height": 1361,
      "iso_639_1": "ko",
      "file_path": "/kZfIYkflKe52rbzUruBUIqX5KOV.jpg",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 913
    },
    {
      "aspect_ratio": 0.667,
      "height": 2400,
      "iso_639_1": "en",
      "file_path": "/7Yl18M6LegCaMuwYDkEhohXsG1b.jpg",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 1600
    },
    {
      "aspect_ratio": 0.701,
      "height": 1426,
      "iso_639_1": "ta",
      "file_path": "/bo2IVEKV7BtHLHOWF1zfuqoHnfp.jpg",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 1000
    },
    {
      "aspect_ratio": 0.667,
      "height": 2400,
      "iso_639_1": "en",
      "file_path": "/tcmNYC8ub4E51gkErXoIgkbESZH.jpg",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 1600
    },
    {
      "aspect_ratio": 0.701,
      "height": 1426,
      "iso_639_1": "en",
      "file_path": "/k1lICEYRpJeFRIRfjxYwmpO9LTu.jpg",
      "vote_average": 5.128,
      "vote_count": 6,
      "width": 1000
    },
    {
      "aspect_ratio": 0.667,
      "height": 2100,
      "iso_639_1": "fr",
      "file_path": "/iqR0M1ln7Kobjp9liUj2Q7mtQZG.jpg",
      "vote_average": 5.118,
      "vote_count": 4,
      "width": 1400
    },
    {
      "aspect_ratio": 0.698,
      "height": 1433,
      "iso_639_1": "ko",
      "file_path": "/5vgorfLOTe6w8Ti68s25kzXxjun.jpg",
      "vote_average": 5.106,
      "vote_count": 2,
      "width": 1000
    },
    {
      "aspect_ratio": 0.667,
      "height": 3000,
      "iso_639_1": "es",
      "file_path": "/cp6PLg9gGItJBIQlnEfikqZMvah.jpg",
      "vote_average": 5.068,
      "vote_count": 7,
      "width": 2000
    },
    {
      "aspect_ratio": 0.667,
      "height": 1800,
      "iso_639_1": "en",
      "file_path": "/fCTjGJxKWZGWQDCGFGYMGvh4VNP.jpg",
      "vote_average": 5.068,
      "vote_count": 7,
      "width": 1200
    },
    {
      "aspect_ratio": 0.687,
      "height": 1200,
      "iso_639_1": "es",
      "file_path": "/974fFjwHSjMkZhH0HOZZcOyRM2h.jpg",
      "vote_average": 4.922,
      "vote_count": 5,
      "width": 824
    },
    {
      "aspect_ratio": 0.706,
      "height": 1000,
      "iso_639_1": "be",
      "file_path": "/eKtuGJQJ06iafhYl22mYCWidjmM.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 706
    },
    {
      "aspect_ratio": 0.667,
      "height": 1800,
      "iso_639_1": null,
      "file_path": "/fFkMxrBYnEBcEHotxTQwx2nAncy.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1200
    },
    {
      "aspect_ratio": 0.667,
      "height": 1800,
      "iso_639_1": "hu",
      "file_path": "/74RcH5EIo9IrPIgsZw7mGd989tW.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1200
    },
    {
      "aspect_ratio": 0.71,
      "height": 1353,
      "iso_639_1": "it",
      "file_path": "/4Fb5srk9F3jo561ig451r7O3EgR.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 960
    },
    {
      "aspect_ratio": 0.667,
      "height": 3000,
      "iso_639_1": "cs",
      "file_path": "/nYtec2BxtcupGTdOMcIscG6rkhQ.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 2000
    },
    {
      "aspect_ratio": 0.667,
      "height": 2100,
      "iso_639_1": "pt",
      "file_path": "/rwUtDfMvMQsGrjpyS27ASLlJ6J5.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1400
    },
    {
      "aspect_ratio": 0.667,
      "height": 1080,
      "iso_639_1": "en",
      "file_path": "/A86dg5r6tdUVvQBeOGhvgTXGoQi.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 720
    },
    {
      "aspect_ratio": 0.667,
      "height": 2100,
      "iso_639_1": "en",
      "file_path": "/m10ywT1Bnazwhccdymn6hap6Fmw.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1400
    },
    {
      "aspect_ratio": 0.667,
      "height": 3000,
      "iso_639_1": "en",
      "file_path": "/uwOQQvBHbOALl7l9LegJSGmVY9e.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 2000
    },
    {
      "aspect_ratio": 0.706,
      "height": 1464,
      "iso_639_1": "sk",
      "file_path": "/rc8sRTYamBPNjEoL6WsBuTqp5mW.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1034
    },
    {
      "aspect_ratio": 0.667,
      "height": 1800,
      "iso_639_1": "sk",
      "file_path": "/ibplTVmWaWCQ8TqFbmcJXBmuTtf.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1200
    },
    {
      "aspect_ratio": 0.667,
      "height": 3000,
      "iso_639_1": "sk",
      "file_path": "/f3EpLs1CfyRIDW7LuFj3kvBGZ4N.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 2000
    },
    {
      "aspect_ratio": 0.667,
      "height": 2928,
      "iso_639_1": "en",
      "file_path": "/zk4t5puCiXPvw2dwKBGUt4Hh977.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1952
    },
    {
      "aspect_ratio": 0.667,
      "height": 2100,
      "iso_639_1": "tr",
      "file_path": "/lNur5DYuFHkjz19Y2auJ1sLEP5q.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1400
    },
    {
      "aspect_ratio": 0.667,
      "height": 3000,
      "iso_639_1": "hu",
      "file_path": "/yBtDnvP3V4YY3K0u9IlyZdWyJA6.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 2000
    },
    {
      "aspect_ratio": 0.667,
      "height": 1500,
      "iso_639_1": "en",
      "file_path": "/krAoSoir6XtvQYAqqRRHzC5Xhiv.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1000
    },
    {
      "aspect_ratio": 0.667,
      "height": 3000,
      "iso_639_1": "es",
      "file_path": "/cB72WHqEKqHgV4P2z08aRqRVOvi.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 2000
    },
    {
      "aspect_ratio": 0.667,
      "height": 900,
      "iso_639_1": "vi",
      "file_path": "/wBxkCbNI8eDRRfUEl8w0G2rfLyu.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 600
    },
    {
      "aspect_ratio": 0.75,
      "height": 853,
      "iso_639_1": "en",
      "file_path": "/uA01tzxAfLDRRM5ZS3ethCdrqsJ.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 640
    },
    {
      "aspect_ratio": 0.666,
      "height": 2845,
      "iso_639_1": "en",
      "file_path": "/lhkwaKzS9Y7ZEotyPwyQ7Ye2Dx5.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1895
    },
    {
      "aspect_ratio": 0.75,
      "height": 1333,
      "iso_639_1": "fr",
      "file_path": "/dQqNAlqwwmxNyULZgQNvZENx2h7.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1000
    },
    {
      "aspect_ratio": 0.667,
      "height": 1500,
      "iso_639_1": "en",
      "file_path": "/fGkVDmJgrfvLtrDtYlCxwlkkSNY.jpg",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1000
    }
  ]
}
  ```
+++

### Query Parameters

| Parameter | Description               | Default | Required |
|-----------|---------------------------|---------|----------|
| [!badge variant="dark" text="id"] | TV Show ID to fetch images. | None | [!badge variant="dark" text="true"] |

