# Project 2 @cmda-minor-web · 2018-2019

## Introduction
This readme contains the research I have done on the volkswagen.nl website concerning performance enhancement and accessibility.

![Screenshot](screens/screenshot.png)

## Table of Contents

- [Optimizations](#optimizations)
  - [Compression](#compression)
      - [No compression](#no-compression)
      - [GZIP](#gzip)
      - [Brotli](#brotli)
   - [Font Swapping](#font-Swapping)
   - [Keyboard Only](#keyboard-only)
   - [Caching Policy](#caching-policy)
- [Checklist](#checklist)
- [License](#license)

## Optimizations
I made a top 5 of different optimizations that are either huge gains or really easy to implement (or both).

1. Compression - The website already uses compression in the form of GZIP. But there is a better optimised way to do it with Brotli. Really easy to implement. 
2. Font swapping - Showing fallback fonts until custom font is loaded. Really easy to implement.
3. Jpeg -> Webp - Web friendly format for images. Makes them much, much smaller. Might take some time to implement.
4. Keyboard only - Make sure to use 
5. Caching policy for resources

<<<<<<< HEAD
## Jpeg to Webp
=======
### Compression
>>>>>>> 2eb1d2b0dcb4e0fc50994247955dc1886da83db8

Compression is important in reducing the bite size for your website. The volkswagen website already uses GZIP to greatly reduce this. But with Brotli the bite size gets even more reduced. I placed tjis in my number one spot because, even though the reduction may not seem so big, it is really easy to implement. Implementing Brotli should not take longer than an hour.

#### No compression
- HTML 106kb 
- CSS 279kb 
- JS 470kb 

#### GZIP
- HTML 17.1kb | 83.88% Compressed
- CSS 34.9kb | 87.5% Compressed
- JS 143kb | 69.58% Compressed

#### Brotli
- HTML 14.2kb | 86.61% Compressed
- CSS 27.6kb | 90.11% Compressed
- JS 123kb | 73.83% Compressed

![Screenshot](screens/screenshot.png)

### Font Swapping

With font swapping you make sure that it doesn't take to long before the text in your website becomes vissible. On slow 3G internet connections users may be forced to wait for more than 15 seconds before the custom fonts are loaded. If you dont use font swapping it will take this long before any text is vissible. With font swapping you can reduce this waiting time and show the fallback fonts untill the custom fonts are loaded. Making the perceived performance much better. To implement this you only need to add `font-display: swap;` to all `@font-face` rules like so:

```css
@font-face {
    font-family: VWHeadWeb;
    src: url(../../../Fonts/VW-PKW/VWHeadWeb-Light.woff2) format("woff2"), 
         url(../../../Fonts/VW-PKW/VWHeadWeb-Light.woff) format("woff");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}
```
![Screenshot](screens/screenshot.png)
![Screenshot](screens/screenshot.png)
### Keyboard Only

### Caching Policy


## Aanbevelingen voor een robuste, toegankelijke en snelle web toepassing

Het project vindt plaats bij in ons eigen lokaal. Maandagochtend is om 9.30 uur de kickoff (bij de oprachtgever), vrijdag zijn de presentaties van de resultaten (bij de opdrachtgever). In een week bouwt iedere student een eigen prototype ter onderbouwing van aanbevelingen aan de opdrachtgevers (Valtech, Mirabeau & CMD Amsterdam). De aanbevelingen betreffen het verbeteren van toegankelijkheid en performance van de web sites / applicaties. Technieken geleerd bij [Browser Technologies](https://github.com/cmda-minor-web/browser-technologies-1819) en [Performance Matters](https://github.com/cmda-minor-web/performance-matters-1819) worden toegepast bij het bouwen van de de prototypes en et schrijven van de aanbevelingen.

## Checklist
- [x] Rebuild client side app to server side app
- [X] Add Compression
- [x] Add Fontface Observer
- [X] Set cache headers
- [x] Implement Revisioning
- [X] Add Service Worker
- [X] Add Offline Page

## License 
See the [LICENSE file](https://github.com/Mennauu/web-app-from-scratch-18-19/blob/master/LICENSE) for license rights and limitations (MIT).


