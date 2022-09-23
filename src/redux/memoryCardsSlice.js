import { createSlice } from "@reduxjs/toolkit";
var shuffle = require('shuffle-array')

const memoryCardDeck = [
    {
        id: 1,
        name: "vscode",
        imageUrl: '/Images/png/vscode.png',
        pairedCardId: 2,
        isOpen: false
    },
    {
        id: 2,
        name: "vscode",
        imageUrl: '/Images/png/vscode.png',
        pairedCardId: 1,
        isOpen: false
    },
    {
        id: 3,
        name: "bootstrap",
        imageUrl: '/Images/png/bootstrap.png',
        pairedCardId: 4,
        isOpen: false
    },
    {
        id: 4,
        name: "bootstrap",
        imageUrl: '/Images/png/bootstrap.png',
        pairedCardId: 3,
        isOpen: false
    },
    {
        id: 5,
        name: "html",
        imageUrl: '/Images/png/html.png',
        pairedCardId: 6,
        isOpen: false
    },
    {
        id: 6,
        name: "html",
        imageUrl: '/Images/png/html.png',
        pairedCardId: 5,
        isOpen: false
    },
    {
        id: 7,
        name: "json",
        imageUrl: '/Images/png/json.png',
        pairedCardId: 8,
        isOpen: false
    },
    {
        id: 8,
        name: "json",
        imageUrl: '/Images/png/json.png',
        pairedCardId: 7,
        isOpen: false
    },
    {
        id: 9,
        name: "nodejs",
        imageUrl: '/Images/png/nodejs.png',
        pairedCardId: 10,
        isOpen: false
    },
    {
        id: 10,
        name: "nodejs",
        imageUrl: '/Images/png/nodejs.png',
        pairedCardId: 9,
        isOpen: false
    },
    {
        id: 11,
        name: "react",
        imageUrl: '/Images/png/react.png',
        pairedCardId: 12,
        isOpen: false
    },
    {
        id: 12,
        name: "react",
        imageUrl: '/Images/png/react.png',
        pairedCardId: 11,
        isOpen: false
    },
    {
        id: 13,
        name: "javascript",
        imageUrl: '/Images/png/javascript.png',
        pairedCardId: 14,
        isOpen: false
    },
    {
        id: 14,
        name: "javascript",
        imageUrl: '/Images/png/javascript.png',
        pairedCardId: 13,
        isOpen: false
    },
    {
        id: 15,
        name: "redux",
        imageUrl: '/Images/png/redux.png',
        pairedCardId: 16,
        isOpen: false
    },
    {
        id: 16,
        name: "redux",
        imageUrl: '/Images/png/redux.png',
        pairedCardId: 15,
        isOpen: false
    }
]
shuffle([1, 2, 3, 4, 5], { 'copy': true }); // returns [4, 3, 1, 5, 2] (copied)

export const memoryCardsSlice = createSlice({
    name: 'memoryCards',
    initialState: {
        items: memoryCardDeck,
        points: 0,
    },
    reducers: {
        toggleCards: (state, action) => {
            // Card Flipper
            const { id } = action.payload;
            const card = state.items.find((element) => element.id === id);
            card.isOpen = !card.isOpen;
        },
        calculatePoints: (state, action) => {
            // Points Calculation
            const { points } = action.payload;
            state.points = points
        },
        shuffleCards: (state, action) => {
            // Shuffle Cards
            const shuffledCards = action.payload;
            console.log("shuffledCards", shuffledCards)
            if (shuffledCards || !shuffledCards) {
                state.points = 0;
                state.items = shuffle(memoryCardDeck, { 'copy': true });
            }
        }
    },
    extraReducers: {
    }
});

export const { toggleCards, calculatePoints, shuffleCards } = memoryCardsSlice.actions;
export default memoryCardsSlice.reducer;