# GitHub Topic Explorer

## Assignment:

Your task is to build a React web application that displays all the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the term "react", using the GitHub GraphQL API.

The application should display how many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has. A click on a topic should display the topics related to that topic, and how many stargazers they have. And so forth.

To interact with the Github GraphQL API you'll need to have
  * a [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
  * You'll want to make use of the key in the .env file within your application

You may use whatever React framework or library you find useful. URL routing is optional.


## Evaluation:

* We will pay particular attention to the way the code is organized, and to the overall readability
* Unit tests will be greatly appreciated
* Design will be ignored, however usability and accessibility will be taken into consideration
* Remember to update this README with instructions on how to install, run and test your application
* Your first goal is to have a working app, but feel free to improve the application however you see fit
* We hope that you can complete the assignment within 2 hours but don't set any time constraints
* Please reach out per email or by opening an issue if anything is unclear or blocking you

Best of luck

## Dev Notes

* Leave any technical notes on any libraries or tools you chose to use, the more detail the better.

I decided to use Material UI to help with basic styling concerns - it's not for everybody, but I really
like it as a way to make a decent-looking app quickly.

I also used Apollo, since it provides a nice useQuery hook that can be used to easily query a GraphQL API.

### How to run app & test

* Leave instruction on how to run and test your app here

First, install npm packages by running `npm install`
Run the app with `npm run start`
Run the tests with `npm run test`

### Future Improvements

Feel free to elaborate on how you would improve any of the following topics 

* Testing:
- Due to time constraints, my tests aren't nearly as thorough as I'd like them to be. In particular,
  I would have liked to test the useRelatedTopics hook itself, as well as mock it out and test the whole
  loading/rendering flow.

* Additional Features:
- Github provides a LOT more information that we can query - it could be nice to add other fields.
  Maybe we could even have a check-box component where the user can select what fields they'd like to see.
- A breadcrumb component and back-button, showing where you've been (i.e. React > Angular > AngularFire > etc...)
- Show links to the corresponding repositories for each topic
- Allow users to log in/log out so that you can use their credentials instead of giving them your own secret key