module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Wealth is coming your way.", "You will buy Austin a coffee.", "Don't be discouraged, because every wrong attempt discarded is another step forward.",
        "How many of you believe in psycho-kinesis? Raise my hand.", "Fortune Not Found: Abort, Retry, Ignore?" ]

        let fortuneIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[fortuneIndex];

        res.status(200).send(randomFortune)
    },

    getMagicEight: (req, res) => {
        const magicAnswers = [ "It is certain.", "It is decidedly so.", "Without a doubt.", "Yes definitely.","You may rely on it.", " As I see it, yes.",
             "Most likely.",  "Outlook good.","Yes.", "Signs point to yes.","Reply hazy, try again.","Ask again later.", "Better not tell you now.","Cannot predict now.",
             "Concentrate and ask again."," Don't count on it.","My reply is no.","My sources say no.","Outlook not so good.","Very doubtful."]
        let magicIndex = Math.floor(Math.random() * magicAnswers.length);
        let randomMagic = magicAnswers[magicIndex];

        res.status(200).send(randomMagic)            
    },
 }