let rightTimer = null
let upTimer = null
let leftTimer = null
let downTimer = null
let ranx = null
let rany = null
function create(obj) {
    let container = document.querySelector(obj.el)
    // let play = document.querySelector("#play")
    // let pause = document.querySelector("#pause")
    let num = obj.num
    let snake = []
    container.style.width = num * 10 + 'px'
    let arr = []
    for (let s = 0; s < num; s++) {
        arr[s] = []
    }
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            arr[i][j] = document.createElement('div')
            arr[i][j].className = "gird"
            container.append(arr[i][j])
        }
    }

    let ran1 = Math.floor(Math.random() * num)
    let ran2 = Math.floor(Math.random() * num)
    createFood(arr, num)//随机生成食物
    snake.unshift(arr[ran1][ran2])
    drawRed(snake)
    let x = ran1
    let y = ran2

    window.onkeydown = function (e) {
        // console.log(e)

        switch (e.key) {
            case 'ArrowRight':
                clearTimer()
                
                rightTimer = setInterval(() => {
                    if (y < num - 1) {
                        y++

                    } else {
                        y = -1
                        y++
                    }
                    clearRed(snake)
                    snake.pop()
                    let flag = snake.some(v => v === arr[x][y])
                    if (flag) {
                        clearTimer()
                        alert('游戏结束')
                        return
                    }

                    snake.unshift(arr[x][y])
                    if (ranx === x && rany === y) {
                        snake.push(arr[x][y])
                        createFood(arr, num)//随机生成食物
                    }
                    drawRed(snake)
                }, 100)
                break;
            case 'ArrowDown':
                /*   if (downTimer) {
                      return false
                  } */
                clearTimer()
                
                downTimer = setInterval(() => {
                    if (x < num - 1) {
                        x++

                    } else {
                        x = -1
                        x++
                    }
                    clearRed(snake)
                    snake.pop()
                    let flag = snake.some(v => v === arr[x][y])
                    if (flag) {
                        clearTimer()
                        alert('游戏结束')
                        return
                    }
                    snake.unshift(arr[x][y])
                    if (ranx === x && rany === y) {
                        snake.push(arr[x][y])
                        createFood(arr, num)//随机生成食物
                    }
                    drawRed(snake)
                }, 100)
                break;
            case 'ArrowLeft':

                clearTimer()
                
                leftTimer = setInterval(() => {
                    if (y > 0) {
                        y--

                    } else {
                        y = num - 1
                        y--
                    }
                    clearRed(snake)
                    snake.pop()
                    let flag = snake.some(v => v === arr[x][y])
                    if (flag) {
                        clearTimer()
                        alert('游戏结束')
                        return
                    }
                    snake.unshift(arr[x][y])
                    if (ranx === x && rany === y) {
                        snake.push(arr[x][y])
                        createFood(arr, num)//随机生成食物
                    }
                    drawRed(snake)
                }, 100)
                break;
            case 'ArrowUp':

                clearTimer()
                
                upTimer = setInterval(() => {
                    if (x > 0) {
                        x--

                    } else {
                        x = num - 1
                        x--
                    }
                    clearRed(snake)
                    snake.pop()
                    let flag = snake.some(v => v === arr[x][y])
                    if (flag) {
                        clearTimer()
                        alert('游戏结束')
                        return

                    }
                    snake.unshift(arr[x][y])
                    if (ranx === x && rany === y) {
                        snake.push(arr[x][y])
                        createFood(arr, num)//随机生成食物
                    }
                    drawRed(snake)
                }, 100)
                break;
            default:
                break;
        }
    }

}
function createFood(arr, num) {
    let ran1 = Math.floor(Math.random() * num)
    let ran2 = Math.floor(Math.random() * num)
    ranx = ran1
    rany = ran2
    arr[ran1][ran2].style.backgroundColor = 'black'
}

function clearRed(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.backgroundColor = 'whitesmoke'
    }
}
function drawRed(arr) {
    arr[0].style.backgroundColor = 'purple'
    for (let i = 1; i < arr.length; i++) {
        arr[i].style.backgroundColor = 'red'
    }
}
function clearTimer() {
    clearInterval(rightTimer)
    clearInterval(leftTimer)
    clearInterval(upTimer)
    clearInterval(downTimer)
}