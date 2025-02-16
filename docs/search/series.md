---
order: 100
icon: rel-file-path
---

# Series

Search for TV shows from TMDB using a query string.

+++ Request
  HTTP
  ```http
    GET /api/searchTV?search={query}
  ```
  cURL
  ```sh
    curl -X GET "https://bingelord-backend.onrender.com/api/searchTV?search=Breaking Bad"
  ```
+++ Response
  ```json
{
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/bsNm9z2TJfe0WO3RedPGWQ8mG1X.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 1396,
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "Breaking Bad",
      "overview": "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
      "popularity": 298.884,
      "poster_path": "/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      "first_air_date": "2008-01-20",
      "name": "Breaking Bad",
      "vote_average": 8.879,
      "vote_count": 11536
    }
  ],
  "total_pages": 1,
  "total_results": 1
}
  ```
+++

### Query Parameters

| Parameter | Description               | Default | Required |
|-----------|---------------------------|---------|----------|
| [!badge variant="dark" text="search"] | Search query for TV shows. | None | [!badge variant="dark" text="true"] |

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