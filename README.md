# UdaciCards

Udacity FlashCards

This application has been tested on an iOS simulator and on an Android Galaxy
phone.  

This project was bootstrapped with Create-React-Native-App

## Installation

Be sure to download or clone the repo from

https://github.com/jdavisson87/MobileFlashcards

Once the file has been cloned or downloaded, go into your terminal and change
into the MobileFlashcards directory.  Once you are in the directory, run

npm install

If your computer is denying you from installing the modules/packages needed for this
application, try:

sudo npm install

The terminal will ask you for your password (should be the same password you
use to log into your computer) and will give you administrative privileges for
the current action.  

After the modules/packages have been installed, you will need to be sure that
you have a simulator installed on your computer or you have Expo installed on
your phone.  Be sure you have expo-cli installed into your terminal.  If you don't
have expo-cli installed, run

npm install -g expo-cli

        or

sudo npm install -g expo-cli

To run the app, run

expo start

   or

npm start

and select how you want your application to run.  The options will be shown in
your terminal with how to run your application.

## Using the Application

### Deck List View

When you open your application, it will show the Deck List View.  In this view,
you will be able to view all decks that you have created.  It will show the
decks titles and how many cards are in each deck.  You can click on any decks
that you have and the app will navigate you to the Deck Edit page for the deck
that you have selected.  When you start your application, it will not have any
decks to show.  

### Add Deck View

To navigate to this view, you will need to click on the Add Deck button in your
tab navigator (your tab navigator will be on the top of the page for Android
devices and on the bottom of the page for iOS devices).  In this page, you will
be able to enter the title of your deck in the text input, and on submit, your
deck will be created and you will be navigated to the Deck Edit page.  You will
not be able to submit a deck name that has already been used or submit a blank
deck name.

### Deck Edit View

After you have created a new deck or have selected a deck from the Deck List
view, you will be navigated to the Deck Edit page.  This page will show your
current decks title, how many cards are in the deck, all of the cards in the deck,
and 3 buttons.  These buttons will allow you to add cards, remove the entire deck,
and to start a quiz for yourself.  By clicking the remove deck button, you will
have to confirm that you want to remove your deck.  Once you confirm the removal,
the deck will be deleted and removed from the deck list and database.

### Add Cards

On this page, you will add a question and answer into the corresponding text
inputs.  Once you hit submit, the cards will be added to the deck and will be
shown on your Deck Edit page.  Also, after you hit submit, you will be navigated
back to the Deck Edit page.  You will not be able to submit a card that is
has a blank question, blank answer, or blank question and blank answer.

### Quiz View

Once you press the Start Quiz button on the Deck Edit View page, you will have
to click start once you are ready to take the quiz.  Once you are ready, the
first question will show up.  Answer the question in your head and once you are
ready to see the answer, flip the card.  Once the card flips, you will see the
answer to the question.  If you were correct, press the correct button, and if
you were wrong, press the wrong button.  Once you get through the entire deck,
the app will show how many and percentage of the questions you got right.  
There will be a button that can take you back to the deck edit page and you can
add more cards or retake the quiz.  
