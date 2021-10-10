function Common() { }

Common.prototype.getQuote = getQuote;

module.exports = new Common();

function getQuote() {

    const quotes = [
        {
            quoteText: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
            quoteAuthor: "Martin Fowler"
        },
        {
            quoteText: "First, solve the problem. Then, write the code",
            quoteAuthor: "John Johnson"
        },
        {
            quoteText: "Experience is the name everyone gives to their mistakes",
            quoteAuthor: "Oscar Wilde"
        },
        {
            quoteText: "In order to be irreplaceable, one must always be different",
            quoteAuthor: "Coco Chanel"
        },
        {
            quoteText: "Java is to JavaScript what car is to Carpet",
            quoteAuthor: "Chris Heilmann"
        },
        {
            quoteText: "Knowledge is power",
            quoteAuthor: "Francis Bacon"
        },
        {
            quoteText: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code",
            quoteAuthor: "Dan Salomon"
        },
        {
            quoteText: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away",
            quoteAuthor: "Antoine de Saint-Exupery"
        },
        {
            quoteText: "Ruby is rubbish! PHP is phpantastic",
            quoteAuthor: "Nikita Popov"
        },
        {
            quoteText: "Code is like humor. When you have to explain it, it’s bad",
            quoteAuthor: "Cory House"
        },
        {
            quoteText: "Fix the cause, not the symptom",
            quoteAuthor: "Steve Maguire"
        },
        {
            quoteText: "Optimism is an occupational hazard of programming: feedback is the treatment",
            quoteAuthor: "Kent Beck"
        },
        {
            quoteText: "When to use iterative development? You should use iterative development only on projects that you want to succeed",
            quoteAuthor: "Martin Fowler"
        },
        {
            quoteText: "Simplicity is the soul of efficiency",
            quoteAuthor: "Austin Freeman"
        },
        {
            quoteText: "Before software can be reusable it first has to be usable",
            quoteAuthor: "Ralph Johnson"
        },
        {
            quoteText: "Make it work, make it right, make it fast",
            quoteAuthor: "Kent Beck"
        }
    ];

    const random = Math.floor(Math.random() * quotes.length);

    return quotes[random];
}
