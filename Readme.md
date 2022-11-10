# devChallenges - CatWiki 

This is a solution to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/f4NJ53rcfgrP6sBMD2jt) was to build an application to complete the given user stories.

## Table of contents

- [Overview](#overview)
  - [How to use](#how-to-use)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/o-ashour/cat-wiki

# Install dependencies
$ npm install

# Run the server (while in server directory)
$ npm run server

# Run the app (while in client directory)
$ npm start
```

### The challenge

Users should be able to:

- Search for cat breeds and select a breed of their choice
- See the most popular searched cat breeds summary on the homepage
- See the top 10 most searched cat breeds
- See the breed details including description, temperament, origin, life span, adaptability, affection level, child-friendly, grooming, intelligence, health issues, social needs, stranger friendly
- See 'more photos' of the breed
- On mobile, when I select the search option, a modal for breed search should pop up
- On mobile, see a modal for breed search pop up upon selecting the search option

### Links

- Live Site URL: https://cat-wiki-omar.herokuapp.com/

## My process

### Built with

- [React](https://reactjs.org/)

### What I learned

This project was a great learning experience in many respects. I started working on it with a good understanding of the basic browser languages (HTML, CSS, and JavaScript), and by the time I finished up I found myself with a much better understanding of React, as well picking up the basics of how the server works. 

I noticed that many experienced developers seem to warn beginners about the dangers of 'tutorial hell' and that the only way to learn is by doing (i.e. working on a project). While this has undoubtedly been proven to be true, I did have to go through in-depth react tutorials in order to actually be able to build this thing.

I realization I had after looking at much of the documentation out there on React, it seems to me that learning React with class components would be healthier and give one a better understanding of the component's lifecycle. 

Lastly, even though react is primarily used for building ui's for the frontend, it seems to me, as a frontend developer, having no idea what's happening server-side and just focusing on building with React doesn't make a lot of sense. On this particular project, I found that I needed to store data and using Local Storage in the browser would have been insufficient. Thus, I needed a backend which used a database. Obviously this is project-dependent.

### Continued development

For the future, I would like to go further with state-management in React and either explore the Context hook more, play around with a state manager like Redux, or both. I realize now that managing state is complicated and this is something that I would need to keep in mind when planning out the architecture of another app using React or even some other JS framework/library.

I have still much to understand about the backend and using NodeJS. While I still plan to focus on frontend development, it seems that dealing with the server is an essential part of web development,

### Useful resources

- [Styled Components Official Documentation](https://styled-components.com/docs) - This documentation is clear and well written. It helped me get going with styled components in no time!
- [MongoDB Official Documentation](https://www.mongodb.com/docs/manual/core/document/) - The MongoDB documentation was probably what sealed the deal for me when settling on a database for this thing. For someone who had zero experience with using a database, this documentation made for a great, clear introduction.
- [What the heck is the event loop anyway? | Philip Roberts | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ) - I keep going back to this video which explains a fundamental, but not necessarily simple concept in JavaScript, which is how asynchronous code is handled. I'll still keep going back to it I'm sure to try get my head wrapped around this.

## Author

- GitHub [@o-ashour](https://{github.com/o-ashour})

## Acknowledgments

Special thanks to Mohammad Ashour for going over the code and giving his expert feedback!
