const questions = [
    {
        'que': 'which of the following is the markup language',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'PHP',
        'correct' : 'a'

    },
    {
        'que': 'What year was javascript borned',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of the above',
        'correct' : 'b'

    },
    {
        'que': 'When India got independence',
        'a': '1950',
        'b': '1940',
        'c': '1947',
        'd': 'none of the above',
        'correct' : 'c'

    },
    {
        'que': 'What does CSS stand for',
        'a': 'Hypertext markup language',
        'b': 'Cascading Style Sheet',
        'c': 'Json object notation',
        'd': 'None of the above',
        'correct' : 'b'
    }
]

let index=0;
let total = questions.length;
let right = 0, wrong = 0;
const queBox = document.getElementById("queBox");
const optionInput = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total)
    {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    queBox.innerText = ` ${index + 1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getanswer();
    if(ans === data.correct){
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getanswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if(input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () =>
{
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )   
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style='text-align:center'>
        <h3> Thank you for your answers </h3>
        <h2>${right} / ${total} are correct </h2>
    </dev>
    `;
}

// Initial call to the function
loadQuestion();