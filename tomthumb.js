$('document').ready(function () {
    $('#info').on('submit', function (e) {
        e.preventDefault()
        $('#result').removeClass('hidden')
        $('#result').addClass(
            'd-flex justify-content-center align-items-center'
        )
        $('#reset').removeClass('hidden')
        $('#reset').addClass('btn')
        var width = $('#width').val()
        var height = $('#height').val()
        var colorsNum = Number($('#colorsNum').val())

        var bitDepth = Math.ceil(Math.log(colorsNum) / Math.log(2))
        $('#result')
            .children()
            .first()
            .html(
                `Image size: <span>${Math.round(
                    (colorsNum * 3 + (width * height * bitDepth) / 8) / 1024
                )}KB</span>`
            )
    })

    $('#reset').on('click', function (e) {
        e.preventDefault()
        $('#result').addClass('hidden')
        $('#result').removeClass(
            'd-flex justify-content-center align-items-center'
        )
        $('#reset').addClass('hidden')
        $('#reset').removeClass('btn')
        var persName = $('#width').val('')
        var charName = $('#height').val('')
        var adverb = $('#colorsNum').val('')
    })
})
