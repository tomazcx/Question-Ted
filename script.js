const input1 = document.querySelector("#option-1");
const input2 = document.querySelector("#option-2");

const hiddenDIV = document.getElementById("hidden");
const hiddenInput = document.querySelector("#hiddenInput")

const container = document.getElementById("inputs");
const button = document.querySelector("button");


const calculateAnswer = () => {
    text1 = input1.value;
    text2 = input2.value;

    const num = Math.random();

    if (num >= 0.5) {
        return changeLayout(text1);

    }
    return changeLayout(text2);

}

const changeLayout = (answer) => {

    hiddenDIV.style.display = "block";
    hiddenInput.value = answer;
    button.innerText = "Tentar novamente";
}

button.addEventListener('click', calculateAnswer);