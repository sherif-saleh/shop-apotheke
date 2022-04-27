![project](https://user-images.githubusercontent.com/49021746/165586883-93cdd651-bf86-4f3d-bed6-ca52e56127fb.gif)

This implementation is based on [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

## Getting Started

First, run the development server:

```bash
yarn && yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

In order to run the tests: 
```bash
yarn jest
```

## Brief Project Structure 
```
[] for folders

[shop-apotheke]
|
├── [components]
│     Reusable react components. They ought to be broken into subfolders for more clarity if need be. 
|
├── [utils] with tests
│  │ __ date    ===> all functions related to time manipulation.
│  │ __ mappers ===> should contain any function that maps fetched JSON data to typed data to be outputed through hooks.
│  │   
│  └── ... .tests.ts
│       every util needs to be tested just to make sure their behavior doesn't change during continuous development.
|
├── [pages]
|     nextJS considers every file here to be corresponding to a page unless it starts with _
|
├── types
|     contains the global type definitions to be exported and reused across the project, 
|     it can be structured differently.
| 
├── [assets]
|  │ __ labels  ===> all string constants used in the output.
|  │ __ links   ===> all static urls or links to be used as well.
|
├── [hooks]
|  │ __ useFetch  ===> responsible for fetching the necessary data and map it to the expected types. 
|  | __ useStarringRepos ===> responsible for setting and retrieving the locally stored starring 
│  
│   
...
```
## External Libraries used
- Typescript
- Lodash
- Material UI
- Material UI data grid 
- Emotion Styled
- Jest


## Famous but not so famous last words
It's been nice talking to you and getting your feedback. 

Thank you for your time and consideration. 

Stay positive and test negative. 😉
