const startButton= document.getElementById('start-btn')
const nextButton= document.getElementById('next-btn')
const startIcon=document.getElementById('start-icon')
const restartButton = document.getElementById('restart-btn')
const questionContainerElement= document.getElementById
('question-container')
const questionImage = document.getElementById('question-image')
const questionParagraph = document.getElementById('question-paragraph')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
restartButton.addEventListener('click', MainPage)
function startPage()
{
    console.log('Started')
    startButton.classList.remove('hide')
    startIcon.classList.remove('hide')
    restartButton.classList.add('hide')
    questionContainerElement.classList.add('hide')
}
function MainPage()
{
    console.log('Started')
    restartButton.classList.add('hide')
    questionContainerElement.classList.add('hide')
    questionParagraph.classList.remove('hide')
}
function startGame()
{
    console.log('Started')
    startButton.classList.add('hide')
    startIcon.classList.add('hide')
    shuffledQuestions = questions.sort(()=>Math.random() - .5)
    currentQuestionIndex= 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
function setNextQuestion()
{
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question)
{
    questionImage.src=question.questionImage
    questionElement.innerText=question.question
    question.answers.forEach(answer => {
        const button=document.createElement('button')
        document.getElementById("question-image").src == "assets/img/Computer.png"
        button.innerText=answer.text
        button.classList.add('btn')
        if(answer.correct)
        {
            button.dataset.correct=answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
function resetState()
{
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild)
    {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e)
{
    const selectedButton=e.target
    const correct= selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button =>
        {
            setStatusClass(button,button.dataset.correct)
        })
    if(shuffledQuestions.length>currentQuestionIndex+1)
    {
        nextButton.classList.remove('hide')
    }
    else
    {
        restartButton.innerText='Next'
        restartButton.classList.remove('hide')
    }
}
function setStatusClass(element,correct)
{
    clearStatusClass(element)
    if(correct)
    {
        element.classList.add('correct')
    }
    else
    {
        element.classList.add('wrong')
    }
}
function clearStatusClass(element)
{
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions=[
    {
        questionImage:"assets/img/cpu.png",
        question:'Which Computer Part is this?',
        answers:[
            {text:'Graphics Card',correct:false},
            {text:'Random Access Memory',correct:false},
            {text:'Central Proccess Unit',correct:true},
            {text:'Power Supply Unit',correct:false}
        ]
        
    },
    {
        questionImage:"assets/img/gpu.jpg",
        question:'Which Computer Part is this?',
        answers:[
            {text:'Graphics Card',correct:true},
            {text:'PCI SSD',correct:false},
            {text:'Sound Card',correct:false},
            {text:'Network Card',correct:false}
        ]
        
    },
    {
        questionImage:"assets/img/ssd.png",
        question:'Which Computer Part is this?',
        answers:[
            {text:'SSD',correct:false},
            {text:'NVME SSD',correct:true},
            {text:'PCI SSD',correct:false},
            {text:'Hard Drive',correct:false}
        ]
        
    },
    {
        questionImage:"assets/img/motherboard.png",
        question:'Which Computer Part is this?',
        answers:[
            {text:'Motherboard',correct:true},
            {text:'PCI Expension Card',correct:false},
            {text:'USB Controller Card',correct:false},
            {text:'North Bridge Chip',correct:false}
        ]
        
    }
]