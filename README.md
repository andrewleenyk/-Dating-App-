# -Dating-App-

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**"Dating App"** is a dating app designed as if it was created by Virgil Abloh, Off-White founder and influential fashion designer._


<br>

## MVP


_The **Project Title** MVP lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper._

<br>

### Goals

- _Full CRUD functionality regarding user profiles,_
- _User creation and authentication working._
- _Matchmaking working and rendering profiles._
- _Two tables created._
- _Table/user associations working._

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front end framework to display multipages and connect to the backend server._ |
|   React Router   | _Organizing url routes for front end._ |
|    Material UI   | _Styling for forms and buttons._ |
|     RoRails      | _Bakcend framework to connect with databases and front end server._ |
|    Postgresql    | _To create the databases and relationships._ |

<br>

### Client (Front End)

#### Wireframes

https://www.figma.com/file/dgsSnx1xmdG5FUJX3LQpYp/%22Dating-App%22?node-id=0%3A1

#### Component Tree

https://whimsical.com/dating-app-BNTYgFkLU92S4HXBQ97sTi

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ images
|__ components/
      |__ RenderProfilesDetail.jsx
      |__ RenderProfiles.jsx
      |__ SignIn.jsx
      |__ EditProfile.jsx
      |__ SignOut.jsx
      |__ DisplayProfile.jsx
      |__ ProfileFormSubmit.jsx
      |__ SignUp.jsx
      |__ Nav.jsx
      |__ Footer.jsx
      |__ Layout.jsx
|__ screens/
      |__ Home.jsx
      |__ MatchMaking.jsx
      |__ Matches.jsx
      |__ SignIn.jsx
      |__ SignUp.jsx
      |__ EditProfile.jsx
      |__ ProfileDetail.jsx
      |__ CreateProfile.jsx
      |__ Learn.jsx
|__ services/
      |__ Profiles.jsx
      |__ UserAuth.jsx
|__ utilities/
      |__ UnseenProfiles.jsx
      |__ Matches.jsx

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create DB & Tables  |    H     |     2 hrs      |     0 hrs     |     TBD     |
| Create CRUD Actions |    H     |     4 hrs      |     0 hrs     |     TBD     |
|   React User Auth   |    H     |     7 hrs      |     0 hrs     |     TBD     |
|  FE CRUD Profiles   |    H     |     7 hrs      |     0 hrs     |     TBD     |
|     Matchmaking     |    H     |     7 hrs      |     0 hrs     |     TBD     |
|   Render Matches    |    H     |     5 hrs      |     0 hrs     |     TBD     |
|       Screens       |    H     |     5 hrs      |     0 hrs     |     TBD     |
|      Styling        |    H     |     3 hrs      |     0 hrs     |     TBD     |
| TOTAL               |          |    40 hrs      |     0 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

![Screen Shot 2021-12-09 at 8 49 10 PM](https://user-images.githubusercontent.com/29825714/145503657-4eb0d4f3-d122-430c-84ba-2b2842249fc5.png)

***

## Post-MVP

- _Allow conversations between matches,_
- _Add more features and questions to profile creation._
- _Allow more pictures._
- _A more complex algorithm for matchmaking._

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
