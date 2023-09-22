const { cardService } = require("../services/cardService");
const { generateFixedLengthRandomId } = require("../helpers");

exports.cardController = {
    async getCards(req, res) {
        try {
            const data = await cardService.getCards();
            res.status(200).json(data);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    async addCard(req, res) {
        const { title } = req.body;

        try {
            const newCard = {
                id: generateFixedLengthRandomId(),
                title,
                subTitle: '',
                description: ''
            }
            const data = await cardService.addCard(newCard)
            res.status(200).json(data);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    async deleteCard(req, res) {
        try {
            const { id } = req.body;
            const data = await cardService.deleteCard(id);
            res.status(200).json(data);
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
}