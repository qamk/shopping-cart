# Shopping Cart
This is a **Single Page Application** (SPA) made with Reactjs. The project uses [create-react-app](./create-react-app-info.md) and [react-router-dom](https://reactrouter.com/).

The app uses react-router to map some routes to corresponding react components. All routes are wrapped in the `MainLayout.js` layout. 

Created only with functional components and React Hooks.

## How to run
To run this application either click on the github pages link or do the following:
1. Clone the repo with `git clone git@github.com:qamk/shopping-cart.git`
2. Enter the directory with `cd shopping-cart`
3. Run the development server with `npm start` or `npm run start`

## Features
As described before, users can add items to their cart, change the quantity of the items in their cart, remove items and clear the cart.

By leveraging react-router's `Link` component, components are mounted/unmounted by react-router.

The app is responsive and has a mobile menu and mobile-friendly layout.

## To improve
The main thing I would add is some additional feedback when a button has been clicked: some component that mounts and unmounts after some interval (likely using *promises* to achieve this).

I would also like to use the `Page.js` component to represent product pages.

## Discussion
The creation of the core functionality of this app was fairly straightforward.

Refactoring my components to import helper methods (rather than defining in the components' file) made it *much* easier to extend or restructure the application. For example, decoupling the `Cart.js` component from `Main.js` in order to give `Cart.js` its own route and logic rather than relying on `props` to pass the logic/properties from `Main` to `Cart`, making both components much easier to understand.

Furthermore, making use of data in a `.json` file made it much easier to alter the inventory and mimic a response from some API call.

Really, this was a good project for developing my skills in React and becoming acquainted with react-router!