$(function () {
    const images = [`<img src='../images/X.png' > </  img>`, `<img src='../images/O.png' > </  img>`]
    const letter = ['x', 'o']
    let imageIndex = 0;
    let result = [
        ['n', 'n', 'n'],
        ['n', 'n', 'n'],
        ['n', 'n', 'n']
    ]
    let gameCount = 0

    const checkWinner = function (column, row) {
        if (result[column][row] != 'n' && result[column][row] == result[(column + 1) % 3][row] && result[column][row] == result[(column + 2) % 3][row]) {
            alert(result[column][row] + ' wins')
            $('.box').off()
        } else if (result[column][row] != 'n' && result[column][row] == result[column][(row + 1) % 3] && result[column][row] == result[column][(row + 2) % 3]) {
            alert(result[column][row] + ' wins')
            $('.box').off()
        }
        if (column == row || Math.abs(column - row) == 2) {
            if (result[0][0] != 'n' && result[0][0] == result[1][1] && result[0][0] == result[2][2]) {
                alert(result[0][0] + ' wins')
                $('.box').off()
            } else if (result[0][2] != 'n' && result[0][2] == result[1][1] && result[0][2] == result[2][0]) {
                alert(result[0][2] + ' wins')
                $('.box').off()
            }
        }
    }

    const addImage = function () {
        $(this).html(images[imageIndex])
        result[$(this).attr('data-column')][$(this).attr('data-row')] = letter[imageIndex]
        imageIndex = (imageIndex + 1) % 2
        $(this).off()
        gameCount++
        if (gameCount > 4){
        checkWinner($(this).attr('data-column'), $(this).attr('data-row'));
        }
    }

    const reset = function () {
        $('.box').html('');
        $('.box').off()
        $('.box').on('click', addImage)
        imageIndex = 0;
        result = [
            ['n', 'n', 'n'],
            ['n', 'n', 'n'],
            ['n', 'n', 'n']
        ]
        gameCount = 0
    }

    $('.box').on('click', addImage)
    $('.reset').on('click', reset)

})