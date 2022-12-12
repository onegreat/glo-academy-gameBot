function start(x) {
    function askNum() {

        let numAsk = +prompt("Введите число от 1 до 100")


        if (numAsk === 0 || numAsk === undefined) {
            alert("Игра окончена")
            return;
        }

        if (isNumber(numAsk) == false) {
            console.log("Вы ввели не число")
            askNum()
        }

        if (numAsk > x) {
            alert("Вы ввели число больше загаданного.")
            askNum()
        }

        if (numAsk < x) {
            alert("Вы ввели число меньше загаданного.")
            askNum()
        }

        if (numAsk == x) {
            alert("Вы выиграли!")
        }
    }
    askNum()

}

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

start(10)



// function isNumber()
