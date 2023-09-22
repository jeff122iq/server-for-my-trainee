const generateFixedLengthRandomId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    const desiredLength = 32;

    for (let i = 0; i < desiredLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(randomIndex);
    }

    return randomId;
};

module.exports = { generateFixedLengthRandomId };