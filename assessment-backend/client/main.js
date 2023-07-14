const baseUrl = `http://localhost:4000`;
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const magicQuestion = document.querySelector("#magic-question")
const magicAnswerDisplay = document.querySelector('#magic-answer-display')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get(`${baseUrl}/api/fortune/`)
        .then(res => {
            const data = res.data;
            alert(data)
        });
};

const getMagicEight = () => {
    axios.get(`${baseUrl}/api/magicAnswer/`)
        .then(res => {
            const data = res.data;
            magicAnswerDisplay.textContent = data;
            magicQuestion.value = '';
            // alert(data);
        });
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
magicQuestion.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        event.preventDefault()
        getMagicEight()
    }
})