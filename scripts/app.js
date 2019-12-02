$(function () {
    const images = [`<img src='../images/X.png' > </  img>`, `<img src='../images/O.png' > </  img>`]
    const letter = ['x', 'o']
    let wins = [0,0]
    let imageIndex = 0;
    let result = [
        ['n', 'n', 'n'],
        ['n', 'n', 'n'],
        ['n', 'n', 'n']
    ]
    let gameCount = 0
    $(".box").hover(function() {
        $(this).css("background","#2cc0a2")
      },
      function(){
        $(this).css("background","#37e7c4")
      })

    const checkWinner = function (column, row) {
        if (result[column][row] != 'n' && result[column][row] == result[(column + 1) % 3][row] && result[column][row] == result[(column + 2) % 3][row]) {
            wins[imageIndex]++
            $('.'+letter[imageIndex]+'Score').html(''+ wins[imageIndex])
            $('.box').off()
            $(`h2`).insertAfter(`logo`)
            $(`h2`).html(`<h2>${letter[imageIndex]} Wins</h2>`)

        } else if (result[column][row] != 'n' && result[column][row] == result[column][(row + 1) % 3] && result[column][row] == result[column][(row + 2) % 3]) {
            wins[imageIndex]++
            $('.'+letter[imageIndex]+'Score').html(''+ wins[imageIndex])
            $('.box').off()
            $(`h2`).insertAfter(`logo`)
        }
        if (column == row || Math.abs(column - row) == 2) {
            if (result[0][0] != 'n' && result[0][0] == result[1][1] && result[0][0] == result[2][2]) {
                wins[imageIndex]++
                $('.'+letter[imageIndex]+'Score').html(''+ wins[imageIndex])
                $('.box').off()
                $(`h2`).insertAfter(`logo`)
            } else if (result[0][2] != 'n' && result[0][2] == result[1][1] && result[0][2] == result[2][0]) {
                wins[imageIndex]++
                $('.'+letter[imageIndex]+'Score').html(''+ wins[imageIndex])
                $('.box').off()
                $(`h2`).insertAfter(`logo`)
            }
        }
    }

    const addImage = function () {
        $(this).html(images[imageIndex])
        result[$(this).attr('data-column')][$(this).attr('data-row')] = letter[imageIndex]
        $(this).off()
        $(this).css('background','#37e7c4')
        gameCount++
        if (gameCount > 4){
        checkWinner($(this).attr('data-column'), $(this).attr('data-row'));
        }
        imageIndex = (imageIndex + 1) % 2
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
        $(".box").hover(function() {
            $(this).css("background","#2cc0a2")
          },
          function(){
            $(this).css("background","#37e7c4")
          })
    }

    const newGame = function(){
        location.reload()
    }

    $('.box').on('click', addImage)
    $('.reset').on('click', reset)
    $('.newGame').on('click',newGame)

})