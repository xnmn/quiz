const quizData = [{
        question: "Quel style préférez-vous : baroque ou renaissance?",
        a: "Baroque",
        b: "Renaissance",
        correctl: "a",
        correctp: "b",
    },
    {
        question: "Qu'est-ce que vous valorisez le plus : le pouvoir ou la diplomatie?",
        a: "Pouvoir",
        b: "Diplomatie?",
        correctl: "a",
        correctp: "b",
    },
    {
        question: "Préférez-vous passer votre temps dans un grand palais ou dans un château confortable?",
        a: "Grand palais",
        b: "Château confortable",
        correctl: "a",
        correctp: "b",
    },
    {
        question: "Quel trait admirez-vous le plus : la confiance ou l'humilité?",
        a: "Confiance",
        b: "Humilité",
        correctl: "a",
        correctp: "b",
    },
    {
        question: "Croyez-vous au pouvoir de l'art pour influencer la société?",
        a: "Oui",
        b: "Non",
        correctl: "a",
        correctp: "b",
    },
    {
        question: "Quelle région trouvez-vous la plus intrigante : la France ou l'Espagne?",
        a: "France",
        b: "Espagne",
        correctl: "a",
        correctp: "b",
    },
    {
        question: "Préféreriez-vous être rappelé comme un grand leader militaire ou un diplomate réussi?",
        a: "Grand leader militaire",
        b: "Diplomate réussi",
        correctl: "b",
        correctp: "a",
    },
    {
        question: "Quelle figure historique admirez-vous le plus : Louis XIV ou Philip IV?",
        a: "Louis XIV",
        b: "Philip IV",
        correctl: "a",
        correctp: "b",
    }
];
let index = 0;
let correctl = 0,
    correctp = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let currentBox = document.getElementById("current");
let totalBox = document.getElementById("total");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    currentBox.innerHTML = `${index + 1}`
    totalBox.innerHTML = `${total}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correctl) {
            correctl++;
        } else {
            correctp++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    if(correctl > correctp){
        window.location.href = "./louis.html";
    } else {
        window.location.href = "./philip.html";
    }
}
loadQuestion(index);
