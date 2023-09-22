const cardData = require("../mocks/cardData");

exports.cardService = {
    async getCards() {
        return await cardData;
    },

    async addCard(data) {
        return await data;
    },

    async deleteCard(id) {
        console.log(id)
        cardData.filter(card => card.id !== id);
        return await cardData;
    }
}