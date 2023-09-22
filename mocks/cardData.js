const { generateFixedLengthRandomId } = require("../helpers");

const cardData = [
    {
        id: generateFixedLengthRandomId(),
        title: 'Post One',
        subTitle: '4 days ago',
        description: "Exploring new horizons and embracing the beauty of nature's wonders.",
        views: 5123,
        head: '4m',
        comments: 15,
    },
    {
        id: generateFixedLengthRandomId(),
        title: 'Post Two',
        subTitle: '1 week ago',
        description: 'Capturing breathtaking moments under the open sky.',
        views: 3210,
        head: '1w',
        comments: 8,
    },
    {
        id: generateFixedLengthRandomId(),
        title: 'Post Three',
        subTitle: '2 days ago',
        description: 'Diving deep into the world of imagination and creativity.',
        views: 6235,
        head: '2d',
        comments: 23,
    },
];

module.exports = cardData;