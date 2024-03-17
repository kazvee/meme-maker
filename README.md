# Meme Maker 🖼️

## Description

Meme Maker is a Redux application that enables users to create custom memes! 😎

## Purpose

This learning project covers Reducers, Actions, and the Store structure as key Redux concepts.  
It also explores more advanced concepts such as API interaction and handling asynchronous actions with Thunk middleware for Redux.

## Final Product

### Screenshot of Initial View

### Demo Video

https://github.com/kazvee/meme-maker/assets/109990289/d75548b9-bbbb-43a3-8c7d-56d6dace0f0e

![Screenshot of Initial View](/src/assets/Meme_Maker_Initial_View.png)

### Screenshot of User Memes

![Screenshot of User Memes](/src/assets/Meme_Maker_User_Meme_View.png)

## Features

- Loads a selection of meme base images via the Imgflip API
- Users can load more blank meme images to browse through
- When ready to make a meme, users can add their own custom meme text
- Meme images can easily be saved for sharing on social media
- Bootstrap styling is minimal to avoid distracting from the meme images

## How to Use

- To make a meme:
  - Enter some Top and/or Bottom text
  - Click on your preferred meme image
  - Your new custom meme will appear below
- To browse a wider selection of base images, click the <kbd>Load 10 More Memes</kbd> button

## Installation

### Dependencies

- redux
- react-redux
- redux-thunk
- react-dom
- react-bootstrap
- reduxjs/toolkit

### Getting Started

- Fork this repository to your own GitHub account.
- Clone your fork onto your local device.
- Install all dependencies using the `npm i` (or `npm install`) command.
- Navigate to the `/src/actions/` folder.
  - Use the `secrets.EXAMPLE.js` file for guidance if needed.
  - Create a new `secrets.js` file in the same folder with your API credentials.
- Start the web server using the `npm start` command.
- Navigate to [http://localhost:3000](http://localhost:3000/) in your browser.
- Start making some memes! 😃
