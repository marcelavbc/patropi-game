# Patropi | Learning game

## Description:

Buenos Aires is not the capital of Brazil. The city of Salvador is just called Salvador, without "de Bahia". There is no Amazon rainforest in Sao Paulo. And Carioca is the name of the people who were born in the city of Rio de Janeiro, and no one else!

Patropi (in reference to the famous Brazilian song "País tropical") is an educational game that proposes to teach in a playful way and, why not, with humor, a little bit of the geography and culture of Brazil.

## User Stories:
- Game starts with a box with a brief text inviting users to test their knowledge about Brazil. 

- When the user clicks on "Play", the screen is divided in two: on one side, the map of Brazil arranged by States. On the other side, the game board with the points and a card deck. Above the card deck, a button to turn the first card. 

- The randomly selected card is divided with a title, an image and a text area explaining the image. The text ends by inviting the player to click, on the map, where the object/site/monument is located. 

- If the player clicks the map in the correct State, a congratulations message is displayed and the score goes up by one point. The round, which was previously at 1, goes to 2. If he is wrong, the player sees a message of reproach and only the round goes up to 2. 

- The game ends when the player completes 10 rounds. The player will see a message with the score:

    **0 correct answer:**
    **1 - 2 correct answers:**
    **3 - 5 correct answers:**
    **6 - 7 correct answers:**
    **8 - 9 correct answers:**
    **10 correct answers:**

- After the final score, a button invites the player to try again. 


## Game Screens:

### Screen 1: 
- Brief explanation of how the game works
- Button to load and start the game

### Screen 2:
- The screen is divided in two: 

**Right side:** 
- Brazilian map, with each State well defined. 
- Each state is clickable. 

**Left side:** 
- In the upper part, a box with the game data: 
**Round: 0;**
**Points: 0;**
- In the middle, a deck of cards turned upside down. 
- Under the cards deck, a button to turn a card.


### Screen 3:
- When the player clicks to turn a card, it turns and shows the object that will be evaluated in this round. At the end of the card text, a new button invites the user to mark the location of the object on the map. From this moment on, the map is clickable.
- The points and rounds are updated according to the player's response.

### Screen 4:
- Once the player has clicked on the map, a new screen opens with more information about the object and whether the player has scored or not. To continue playing, you must press a "continue" button. When the button is clicked, the player will be redirected to **screen 2**, with the points and rounds updated. The game continues until the value of the round reaches 10. 

### Screen 5:
- When 10 rounds are finally reached, the last screen opens with the final score and a new invitation to try again. If accepts the invitation, the player is redirected to **screen 2**. 


## MVP:
- Show questions to the user
- Answer question pointing in a map








