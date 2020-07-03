let prize;

function playGame(wi) {
    $('.game-score span').html(0);

    let score = 0;
    let field = document.createElement('div');
    document.querySelector('.snake-game').appendChild(field);
    field.classList.add('field');

    for (let i = 1; i < 401; i++) {
        let excel = document.createElement('div');
        field.appendChild(excel);
        excel.classList.add('excel');
    }

    let excel = document.getElementsByClassName('excel');
    let x = 1,
        y = 20;

    for (let i = 0; i < excel.length; i++) {
        if (x > 20) {
            x = 1;
            y--;
        }

        excel[i].setAttribute('posX', x);
        excel[i].setAttribute('posY', y);
        x++;
    }

    let coordinates = generateSnake();
    let snakeBody = [document.querySelector('[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'), document.querySelector('[posX = "' + (coordinates[0] - 1) + '"][posY = "' + coordinates[1] + '"]'), document.querySelector('[posX = "' + (coordinates[0] - 2) + '"][posY = "' + coordinates[1] + '"]')];

    for (let i = 0; i < snakeBody.length; i ++) {
        snakeBody[i].classList.add('snakeBody');
    }

    snakeBody[0].classList.add('snakeHead');

    let mouse;

    createMouse();

    let direction = 'right';
    let steps = false;

    function createMouse() {
        function generateMouse() {
            let posX = Math.round(Math.random() * (20 - 3) + 3);
            let posY = Math.round(Math.random() * (20 - 1) + 1);
        
            return [posX, posY];
        }
    
        let mouseCoordinates = generateMouse();
        mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');
    
        while(mouse.classList.contains('snakeBody')) {
            let mouseCoordinates = generateMouse();
            mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');
        }
    
        mouse.classList.add('mouse');
    }
    
    function generateSnake() {
        let posX = Math.round(Math.random() * (20 - 3) + 3);
        let posY = Math.round(Math.random() * (20 - 1) + 1);
    
        return [posX, posY];
    }
    
    function move() {
        let snakeCoordinates = [snakeBody[0].getAttribute('posX'), snakeBody[0].getAttribute('posY')];
        snakeBody[0].classList.remove('snakeHead');
        snakeBody[snakeBody.length - 1].classList.remove('snakeBody');
        snakeBody.pop();
    
        if (direction == 'right') {
            if (snakeCoordinates[0] < 20) {
                snakeBody.unshift(document.querySelector('[posX = "' + (+ snakeCoordinates[0] + 1) + '"][posY = "' + snakeCoordinates[1] + '"]'));
            } else {
                snakeBody.unshift(document.querySelector('[posX = "1"][posY = "' + snakeCoordinates[1] + '"]'));
            }
        } else if (direction == 'left') {
            if (snakeCoordinates[0] > 1) {
                snakeBody.unshift(document.querySelector('[posX = "' + (+ snakeCoordinates[0] - 1) + '"][posY = "' + snakeCoordinates[1] + '"]'));
            } else {
                snakeBody.unshift(document.querySelector('[posX = "20"][posY = "' + snakeCoordinates[1] + '"]'));
            }
        } else if (direction == 'up') {
            if (snakeCoordinates[1] < 20) {
                snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "' + (+snakeCoordinates[1] + 1) + '"]'));
            } else {
                snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "1"]'));
            }
        } else if (direction == 'down') {
            if (snakeCoordinates[1] > 1) {
                snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "' + (snakeCoordinates[1] - 1) + '"]'));
            } else {
                snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "20"]'));
            }
        }
    
        if (snakeBody[0].getAttribute('posX') == mouse.getAttribute('posX') && snakeBody[0].getAttribute('posY') == mouse.getAttribute('posY')) {
            mouse.classList.remove('mouse');
            let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
            let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
            snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
            createMouse();
            score++;

            // if (score == 60) {
            //     prize *= 2;
            //     if (confirm('Вы набрали 60 очков. Ваша ставка увеличивается в 2 раза, вы можете забрать приз или продолжить. Теперь Вам нужно набрать 5 очков - и Ваша ставка увеличится в 5 раз. Если вы проиграете, то потеряете всю сумму. Желаете продолжить?') == false) {
            //         setTimeout(function() {
            //             alert('Вы заработали ' + prize + ' шифек.')
            //         }, 100);
            //         clearInterval(interval);
            //     }
            // }

            // if (score == 100) {
            //     prize *= 5;
            //     setTimeout(function() {
            //         alert('Вы заработали ' + prize + ' шифек.')
            //     }, 100);
            //     clearInterval(interval);
            // }

            $('.game-score span').html(score);
        }
    
        if (snakeBody[0].classList.contains('snakeBody')) {
            setTimeout(function() {
                alert(score)
            }, 100);
            clearInterval(interval);
        }
    
        snakeBody[0].classList.add('snakeHead');
    
        for (let i = 0; i < snakeBody.length; i ++) {
            snakeBody[i].classList.add('snakeBody');
        }
    
        steps = true;
    }

    let interval;

    if (wi === true) {
        interval = setInterval(move, 100);
    }

    let btnUp = document.querySelector('.key-up');
    let btnDown = document.querySelector('.key-down');
    let btnLeft = document.querySelector('.key-left');
    let btnRight = document.querySelector('.key-right');

    btnUp.addEventListener('click', function(e) {
        if (steps == true) {
            if (direction != 'down') {
                direction = 'up';
                steps = false;
                return false;
            }
        }
    });

    btnDown.addEventListener('click', function(e) {
        if (steps == true) {
            if (direction != 'up') {
                direction = 'down';
                steps = false;
                return false;
            }
        }
    });

    btnLeft.addEventListener('click', function(e) {
        if (steps == true) {
            if (direction != 'right') {
                direction = 'left';
                steps = false;
                return false;
            }
        }
    });

    btnRight.addEventListener('click', function(e) {
        if (steps == true) {
            if (direction != 'left') {
                direction = 'right';
                steps = false;
                return false;
            }
        }
    });

    window.addEventListener('keydown', function(e) {
        if (steps == true) {
            if (e.keyCode == 37 && direction != 'right') {
                direction = 'left';
                steps = false;
                return false;
            } else if (e.keyCode == 38 && direction != 'down') {
                direction = 'up';
                steps = false;
                return false;
            } else if (e.keyCode == 39 && direction != 'left') {
                direction = 'right';
                steps = false;
                return false;
            } else if (e.keyCode == 40 && direction != 'up') {
                direction = 'down';
                steps = false;
                return false;
            }
        }
    });
}

playGame();

$('button.start-game').click(function() {
    prize = $('input[name="prize"]').val();
    console.log(prize);
    $('.snake-game .field').remove();
    setTimeout(function() {
        playGame(true)
    }, 100);
});