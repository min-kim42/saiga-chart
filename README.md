# Saiga Chart
![](src/img/saiga-chart.gif)

## Project Description
[Saiga Chart](https://mjaything.github.io/saiga-chart/) is a popular song chart featuring 10 most popular music tracks of the day, made with React. Automatically updated daily, it lets users to follow the latest music trends in a simple way by providing 30 seconds preview clips and links to full songs on [Deezer](https://www.deezer.com/).

## Deezer API
Saiga chart gets data from [Deezer API](https://developers.deezer.com/api). Retrieved data include rank, artist name, artist profile image, track title, album cover image, preview clips, and the link to the track page on Deezer. Among numerous API objects available on API, Saiga chart uses Chart(track) object.

## CORS Proxy
When making use of APIs, it is likely that you will encounter CORS error with the following message.

```
No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

This error is caused by the same origin policy, implemented by browsers for security reasons. It is explained in-depth by [David Katz](https://davidtkatz.com/) on his [blog post](https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9).

Simplest solution to get around this error is adding `https://cors-anywhere.herokuapp.com/` in front of the API url(e.g. `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks`). [CORS Anywhere](https://github.com/Rob--W/cors-anywhere) is a NodeJS reverse proxy developed by [Rob Wu](https://github.com/Rob--W).

In this project, I have deployed my own CORS Anywhere server at Heroku, in preparation of the scenario where CORS Anywhere is down or unavailable. Steps for this is also explained by Rob Wu on his [Stackoverflow post](https://stackoverflow.com/a/43881141/10719814).

## Acknowledgements
Deezer logo image and the gradient of the orange color palette(#DC4C11, #FEAB2E) are provided by [Deezer brand](https://deezerbrand.com/).
