$('document').ready(function () {
    $('#info').on('submit', function (e) {
        e.preventDefault()
        $('#story').removeClass('hidden')
        $('#story').addClass('d-flex justify-content-center align-items-center')
        $('#reset').removeClass('hidden')
        $('#reset').addClass('btn')
        var persName = $('#persName').val()
        var charName = $('#charName').val()
        var adverb = $('#adverb').val()
        var adjective = $('#adjective').val()
        $('#story')
            .children()
            .first()
            .html(
                `Roses are red,<br>Violets are blue,
                <br><span>${charName}</span> is <span style="text-transform: lowercase">${adjective}</span>,
                <br><span>${persName}</span> <span style="text-transform: lowercase">${adverb}</span> wrote this`
            )
    })

    $('#reset').on('click', function (e) {
        e.preventDefault()
        $('#story').addClass('hidden')
        $('#story').removeClass(
            'd-flex justify-content-center align-items-center'
        )
        $('#reset').addClass('hidden')
        $('#reset').removeClass('btn')
        var persName = $('#persName').val('')
        var charName = $('#charName').val('')
        var adverb = $('#adverb').val('')
        var adjective = $('#adjective').val('')
    })
})
