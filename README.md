# Frontend Mentor - FAQ accordion card solution

![Design preview for the FAQ accordion card coding challenge](./assets/design/desktop-preview.jpg)

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size (mobile or desktop)
- See hover states for all interactive elements on the page (collapsible questions)
- Hide/Show the answer to a question when the question is clicked

### Links

- Live Site URL: [github pages](https://gerardocianciulli.github.io/faq-accordion/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Normalize CSS
- Flexbox
- CSS Grid
- jQuery
- Media Queries
- Mobile-first approach

### What I learned

I learned how to pass components as props, with Typescript, which was necessary for passing an SVG as an icon within my button component. This allows me to change the icon to create various types off buttons for future.

```jsx
type ButtonProps = {
    icon: React.ComponentType<{}>
}

const Button = ({ icon: Icon }: ButtonProps) => {
    return (
        <button>
            <Icon />
        </button>)
}
```

## Author

- Portfolio - [Gerardo Cianciulli](https://www.behance.net/gerardo-cianciulli)
- Frontend Mentor - [Gerardo Cianciulli](https://www.frontendmentor.io/profile/GerardoCianciulli)
- Linkedin - [Gerardo Cianciulli](https://www.linkedin.com/in/gerardo-cianciulli/)

## Table of contents

- [The challenge](#the-challenge)
- [Links](#links)
- [Built with](#built-with)
- [Author](#author)

## The challenge

## Links

- Live Site URL: [Live site](https://gerardocianciulli.github.io/Frontend-Mentor-FAQ-Accordion-Card/)

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JQuery

## Author

- Frontend Mentor - [@GerardoCianciulli](https://www.frontendmentor.io/profile/GerardoCianciulli)
# faq-accordion
