const formatData = (data) => new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
}).format(new Date(data));

const convertToEmoji = (countryCode) => {
    const codePoints = countryCode
        .toUpperCase()
        .split("")
        .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}
function generateId() {
    const randomPart = Math.floor(Math.random() * 1000000);
    return randomPart;
}

export { formatData, convertToEmoji, generateId }