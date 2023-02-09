# React Game Coding Task

Welcome! Today, we'll be building a working game in React/Next.js.

In this exercise, you will be creating a working game that allows players to guess whether the next card in the deck is red or black.

The goal of this task is to assess your attention to detail, ability to create interactive UI elements, basic understanding of endpoints, and your thought process.

## Part One: Practical Task

You will be using the components in the [Figma design file](https://www.figma.com/file/9pgpSp0op1eoWuMGtEHU7x/Patrianna---FE-Gaming-Task?node-id=0%3A1&t=W63yF9mNKHYfqh77-1) to build a game UI.
You'll have 60 minutes to complete this task :)

### Instructions

- Create a Game UI for Red or Black [Figma design file](https://www.figma.com/file/9pgpSp0op1eoWuMGtEHU7x/Patrianna---FE-Gaming-Task?node-id=0%3A1&t=W63yF9mNKHYfqh77-1)
- Call the `/api/make-spin` to make a new spin and retrieve a card from the server.
- Display the outcome
- Store the outcome in local state

We're looking for..

- Clean, readable code.
- Ability to create pixel-perfect designs from Figma
- Understanding of React & State Management
- Modern approach to state management and React best practices.
- Bonus points for using `nextjs` optimization features such as `next/image`

### Game Rules

A game starts with a pack of (infinite) cards, face down, and one card next to it, face up. The player continues guesses whether the next card is red or black, until they guess incorrectly and lose!

How to play `Red or Black`.

    1. The player presses start to lock in their bet.
    2. The player chooses whether the next card is red, or black.

    Outcome: Correct guess
        The player can play again and guess the next card

    Outcome: Wrong guess
        Player loses, game UI resets to default.

### Important Notes

- No game logic should sit on the client; you must call the mock server endpoint to fetch the next card.
- We should hold the game history in state somewhere
- Write clean, readable, code with modern JS practices.
- Animations are welcome if you have time! (`framer-motion` is great.)
- When finished, upload to github and give collaborator access to `doug@withseismic.com`

Please note that if you run into any issues or find a task to be too time consuming, you should make a note of it and move on. There will be time to explain any challenges you faced at the end of the task.

When building the game, be sure to:

- Upload to github and give collaborator access to `doug@withseismic.com`

## Part Two: Reflection

After completing the practical task, we'll have a sync up call. You will be asked to reflect on your approach and share your thoughts on various aspects of the project.

### Potential topics

- Explain your approach to the task, why you chose it, and what other methods you might have considered but decided against.
- Was there anything you wanted to implement but didn't have the time or resources to do so?
- Is there anything you would change about the component design? If so, what, why, and how?
- What other components or methods might be needed in a production-ready game? How would you decide what features to include in an MVP and how would you approach accessibility?
- Explain your approach to styling and its benefits and caveats.
- Discuss your experience with state management in React, including potential gotchas and ways to overcome them.
- If you have experience with Next.js, share what features you would use to improve performance of the app. If not, share if you have tried it and how you would like to learn more.
- Share your background and previous work, what you enjoyed, and your goals as a developer.
- What are your favorite technologies? How do you improve your dev skills?

Please make sure to commit your code to the [repo](link to repo) for review. Good luck!

#### Useful Links

Inspiration - [free, playable card game demo](https://spribe.co/games/hilo)
