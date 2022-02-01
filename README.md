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

The app is responsive and has a mobile menu and mobile-friendly layout and utilises CSS variables, which proved useful.

## Resources
Below are some resources (beyond the documentation, which is great) that you may find helpful and were of some use/relevance during the making of this project and, more importantly, may be of use to you!

- Interval/Timeout etc. fails to clear
  - https://stackoverflow.com/questions/61434162/clearinterval-not-working-in-react-native-functional-component
- Remove a component when Timeout ends
  - https://stackoverflow.com/questions/65880254/how-to-delete-component-when-timeout-in-react-js
  - While this implementation was not utilised in my code, it is pretty useful
- Deploying a project bootsrapped with `create-react-app`
  - https://create-react-app.dev/docs/deployment/
- Promise being called twice unexpectedly
  - https://stackoverflow.com/questions/68291908/why-is-promise-then-called-twice-in-a-react-component-but-not-the-console-log
- Promises and batching state changes, i.e. call setState once when there are consecutive calls
  - https://stackoverflow.com/questions/53048495/does-react-batch-state-update-functions-when-using-hooks
  - Outside of promises, this is the default behaviour
  - See [this Stack Overflow Q&A](https://stackoverflow.com/questions/59163378/react-hooks-skip-re-render-on-multiple-consecutive-setstate-calls) for use of `unstable_batchedUpdates` to force batch updated when it isn't default.

## Discussion
The creation of the core functionality of this app was fairly straightforward.

Refactoring my components to import helper methods (rather than defining in the components' file) made it *much* easier to extend or restructure the application. For example, decoupling the `Cart.js` component from `Main.js` in order to give `Cart.js` its own route and logic rather than relying on `props` to pass the logic/properties from `Main` to `Cart`, making both components much easier to understand.

Implementing the `Feedback` component was conceptually simple, but it brought up some interesting quirks in how React works with asynchronous code. I would have ideally liked to move it into a custom Hook, but that proved fragile with my first implementation of `Feedback`. Check the resources section for more.

Furthermore, making use of data in a `.json` file made it much easier to alter the inventory and mimic a response from some API call.

Really, this was a good project for developing my skills in React and becoming acquainted with react-router!