# Wolf - Arte en cuero v1.1.0
Front-end App made with 💖 by [Hy-An](https://github.com/nathan-hyan) & [JaqKent](https://github.com/JaqKent)

**[This project uses Wolox Bootstrap](https://github.com/Wolox/react-bootstrap)**

## Introduction

This is a marketplace app for a small leather company based in Tucumán, Argentina.

Made with React + Typescript and SCSS. Localized with i18next.
Icons by [FontAwesome](https://fontawesome.com/)
This Readme is courtesy of [StackEdit](https://stackedit.io/).

*First commit: june 13, 2021*

## Libraries used:

|Library|Link|
|--|--|
|FontAwesome|https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react| 
|ApiSauce|https://github.com/infinitered/apisauce|
|i18next|https://www.i18next.com/|
|react-hook-form|https://react-hook-form.com/|
|react-i18next|https://www.i18next.com/|
|react-notify-toast|https://github.com/jesusoterogomez/react-notify-toast|
|react-rating|https://github.com/dreyescat/react-rating|

## Sections

**Main page**: This is the landing page wich will have a small "About us" section, a bit of history and photos from the workshop itself.

**Store**: Here you will encounter every product in the store. The items are paginated to avoid infinite scrolling. The item card can have two states: Solid and transparent. When they're transparent, it means that theres no stock left for that product and cannot be purchased at the moment.

**Product page**: Every item will have it's own product page, with a comment section, rating and description. Also you can choose how much of an item you want to buy (always depending of how much stock is left). 

**Cart**: Every item purchased will go here, it stores the cart of the current session and will be deleted if the user refreshes or closes the page entirely.

The goal of the page when a purchase is made is for the owner to contact you to finish the purchase. So no leaving any information aside your name and contact WhatsApp number.

## Requirements
This project uses enviroment variables in order to connect to the database. You can add the following line to an .env file in order to make this connection

    REACT_APP_ENDPOINT=http://localhost:2048/api/v1/