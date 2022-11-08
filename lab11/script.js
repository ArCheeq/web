document.addEventListener('DOMContentLoaded', () => {
    const chessBoard = document.querySelector('.chessBoard');
    const boardCtx = chessBoard.getContext('2d');

    const coords = {
        x: 0,
        y: 0
    }

    for(let i = 0; i < 8; i ++) {
        for(let j = 0; j < 8; j++) {
            if (i % 2 === 0) {
                j % 2 === 0 ? boardCtx.fillStyle = "#fff" : boardCtx.fillStyle = "#000";
            } else {
                j % 2 === 0 ? boardCtx.fillStyle = "#000" : boardCtx.fillStyle = "#fff";
            }

            boardCtx.fillRect(coords.x, coords.y, 40, 40);
            coords.y += 40;
        }
        coords.x += 40;
        coords.y = 0;
    }

    const pacMan = document.querySelector('.pac-man');
    const pacManCtx = pacMan.getContext('2d');

    // ГРАНИЦЫ ПОЛЯ

    pacManCtx.beginPath();
    pacManCtx.roundRect(5, 5, 350, 350, 15);
    pacManCtx.stroke();

    pacManCtx.beginPath();
    pacManCtx.roundRect(15, 15, 350, 350, 15);
    pacManCtx.stroke();
    
    //PACMAN

    pacManCtx.beginPath();
    pacManCtx.fillStyle = "#000";
    pacManCtx.arc(45, 45, 20, 2*Math.PI, 0, true);
    pacManCtx.fill();

    pacManCtx.beginPath();
    pacManCtx.fillStyle = "#F3F5F6";
    pacManCtx.moveTo(45, 45);
    pacManCtx.lineTo(65, 35);
    pacManCtx.lineTo(65, 55);
    pacManCtx.lineTo(45, 45);
    pacManCtx.closePath();
    pacManCtx.fill();

    //КВАДРАТИКИ

    pacManCtx.beginPath();
    let x = 95;
    for(let i = 0; i < 8; i++) {
        pacManCtx.fillStyle = "#000";
        pacManCtx.fillRect(x, 42, 7, 7);
        pacManCtx.fill();
        x +=30;
    }

    x = 95;
    for(let i = 0; i < 8; i++) {
        if (i == 2) {
            x +=30;
            continue;
        }
        pacManCtx.fillStyle = "#000";
        pacManCtx.fillRect(x, 162, 7, 7);
        pacManCtx.fill();
        x +=30;
    }

    pacManCtx.beginPath();
    let y = 72;
    for(let i = 0; i < 7; i++) {
        pacManCtx.fillStyle = "#000";
        pacManCtx.fillRect(215, y, 7, 7);
        pacManCtx.fill();
        y +=30;
    }


    //БЛОКИ ПРЕПЯТСВИЙ

    pacManCtx.beginPath();
    pacManCtx.roundRect(95, 72, 98, 67, 15);
    pacManCtx.stroke();

    pacManCtx.beginPath();
    pacManCtx.roundRect(245, 72, 98, 67, 15);
    pacManCtx.stroke();

    pacManCtx.beginPath();
    pacManCtx.roundRect(95, 192, 98, 36, 15);
    pacManCtx.stroke();

    pacManCtx.beginPath();
    pacManCtx.roundRect(245, 192, 98, 136, 15);
    pacManCtx.stroke();

    //ТЕЛО И ГОЛОВА МОНСТРА

    pacManCtx.beginPath();
    pacManCtx.fillStyle = "#000";
    pacManCtx.arc(180, 165, 20, 0, Math.PI, true);
    pacManCtx.fill();

    pacManCtx.beginPath();
    pacManCtx.fillStyle = "#000";
    pacManCtx.fillRect(160, 165, 40, 20);
    pacManCtx.fill();

    //ТРЕУГОЛЬНИЧКИ У МОНСТРА СНИЗУ

    pacManCtx.beginPath();
    pacManCtx.fillStyle = "#F3F5F6";
    pacManCtx.moveTo(160, 185);
    pacManCtx.lineTo(167, 175);
    pacManCtx.lineTo(174, 185);
    pacManCtx.lineTo(160, 185);
    pacManCtx.closePath();
    pacManCtx.fill();

    pacManCtx.beginPath();
    pacManCtx.fillStyle = "#F3F5F6";
    pacManCtx.moveTo(174, 185);
    pacManCtx.lineTo(181, 175);
    pacManCtx.lineTo(188, 185);
    pacManCtx.lineTo(174, 185);
    pacManCtx.closePath();
    pacManCtx.fill();

    pacManCtx.beginPath();
    pacManCtx.fillStyle = "#F3F5F6";
    pacManCtx.moveTo(188, 185);
    pacManCtx.lineTo(195, 175);
    pacManCtx.lineTo(202, 185);
    pacManCtx.lineTo(188, 185);
    pacManCtx.closePath();
    pacManCtx.fill();

    //ГЛАЗА

    pacManCtx.beginPath();
    pacManCtx.fillStyle = '#fff';
    pacManCtx.beginPath();
    pacManCtx.ellipse(170, 160, 4, 6, 0, 0, 2 * Math.PI, false);
    pacManCtx.stroke();
    pacManCtx.fill();

    pacManCtx.beginPath();
    pacManCtx.fillStyle = '#fff';
    pacManCtx.beginPath();
    pacManCtx.ellipse(185, 160, 4, 6, 0, 0, 2 * Math.PI, false);
    pacManCtx.stroke();
    pacManCtx.fill();

    //ЗРАЧКИ

    pacManCtx.beginPath();
    pacManCtx.fillStyle = '#000';
    pacManCtx.beginPath();
    pacManCtx.ellipse(169, 162, 3, 2, 0, 0, 2 * Math.PI, false);
    pacManCtx.stroke();
    pacManCtx.fill();

    pacManCtx.beginPath();
    pacManCtx.fillStyle = '#000';
    pacManCtx.beginPath();
    pacManCtx.ellipse(184, 162, 3, 2, 0, 0, 2 * Math.PI, false);
    pacManCtx.stroke();
    pacManCtx.fill();
});