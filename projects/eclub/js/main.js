function validateEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

$(document).ready(function() {

    var rates = {
        "один, днем, 3": {
            "полотенце": "без",
            "дней заморозки": "0",
            "тип карты": "базовая",
            "стоимость карты": "10900",
            "массаж(минуты)": "0",
            "солярий(минуты)": "0"
        },
        "один, днем, 6": {
            "полотенце": "без",
            "дней заморозки": "0",
            "тип карты": "базовая",
            "стоимость карты": "12900",
            "массаж(минуты)": "0",
            "солярий(минуты)": "0"
        },
        "один, днем, 12": {
            "полотенце": "без",
            "дней заморозки": "0",
            "тип карты": "базовая",
            "стоимость карты": "20900",
            "массаж(минуты)": "",
            "солярий(минуты)": ""
        },
        "один, любое, 3": {
            "полотенце": "без",
            "дней заморозки": "0",
            "тип карты": "альфа",
            "стоимость карты": "16900",
            "массаж(минуты)": "30",
            "солярий(минуты)": "30"
        },
        "один, любое, 6": {
            "полотенце": "без",
            "дней заморозки": "40",
            "тип карты": "альфа",
            "стоимость карты": "22900",
            "массаж(минуты)": "60",
            "солярий(минуты)": "60"
        },
        "один, любое, 12": {
            "полотенце": "без",
            "дней заморозки": "40",
            "тип карты": "альфа",
            "стоимость карты": "29900",
            "массаж(минуты)": "100",
            "солярий(минуты)": "100"
        },
        "с друзьями, днем, 3": {
            "полотенце": "без",
            "дней заморозки": "0",
            "тип карты": "базовая",
            "стоимость карты": "20800",
            "массаж(минуты)": "0",
            "солярий(минуты)": "0"
        },
        "с друзьями, днем, 6": {
            "полотенце": "без",
            "дней заморозки": "0",
            "тип карты": "базовая",
            "стоимость карты": "25800",
            "массаж(минуты)": "0",
            "солярий(минуты)": "0"
        },
        "с друзьями, днем, 12": {
            "полотенце": "без",
            "дней заморозки": "35",
            "тип карты": "базовая",
            "стоимость карты": "40800",
            "массаж(минуты)": "0",
            "солярий(минуты)": "0"
        },
        "с друзьями, любое, 3": {
            "полотенце": "без",
            "дней заморозки": "0",
            "тип карты": "базовая",
            "стоимость карты": "23900",
            "массаж(минуты)": "0",
            "солярий(минуты)": "0"
        },
        "с друзьями, любое, 6": {
            "полотенце": "без",
            "дней заморозки": "0",
            "тип карты": "базовая",
            "стоимость карты": "29900",
            "массаж(минуты)": "0",
            "солярий(минуты)": "0"
        },
        "с друзьями, любое, 12": {
            "полотенце": "без",
            "дней заморозки": "35",
            "тип карты": "базовая",
            "стоимость карты": "48000",
            "массаж(минуты)": "0",  
            "солярий(минуты)": "0"
        },
        "с семьей, днем, 3": {
            "полотенце": "без",
            "дней заморозки": "0",
            "тип карты": "базовая",
            "стоимость карты": "26900",
            "массаж(минуты)": "0",
            "солярий(минуты)": "0"
        },
        "с семьей, днем, 6": {
            "полотенце": "без",
            "дней заморозки": "0",
            "тип карты": "базовая",
            "стоимость карты": "46900",
            "массаж(минуты)": "0",
            "солярий(минуты)": "0"
        },
        "с семьей, днем, 12": {
            "полотенце": "без",
            "дней заморозки": "0",
            "тип карты": "базовая",
            "стоимость карты": "50900",
            "массаж(минуты)": "0",
            "солярий(минуты)": "0"
        },
        "с семьей, любое, 3": {
            "полотенце": "без",
            "дней заморозки": "0",
            "тип карты": "базовая",
            "стоимость карты": "38900",
            "массаж(минуты)": "0",
            "солярий(минуты)": "0"
        },
        "с семьей, любое, 6": {
            "полотенце": "без",
            "дней заморозки": "0",
            "тип карты": "базовая",
            "стоимость карты": "51900",
            "массаж(минуты)": "0",
            "солярий(минуты)": "0"
        },
        "с семьей, любое, 12": {
            "полотенце": "без",
            "дней заморозки": "0",
            "тип карты": "базовая",
            "стоимость карты": "59900",
            "массаж(минуты)": "0",
            "солярий(минуты)": "0"
        },
    };

    var with_v = null;
    var time_v = null;
    var plan_v = null;
    var directions_v = [];
    var card_type = 'alpha';
    var rate = null;
    
    $('.next-tab').click(function() {
        var id = parseInt($(this).attr('data-id'));
        var next_id = id + 1;

        $('.progress-bar__item[data-id="' + id + '"]').removeClass('current');
        $('.progress-bar__item[data-id="' + id + '"]').addClass('passed');

        $('.tab').removeClass('current');
        $('.tab[data-id="' + next_id + '"]').addClass('current');
        $('.progress-bar__item[data-id="' + next_id + '"]').addClass('current');
    });

    $('.prev-tab').click(function() {
        var id = parseInt($(this).attr('data-id'));
        var prev_id = id - 1;

        $('.progress-bar__item[data-id="' + id + '"]').removeClass('current');
        $('.progress-bar__item[data-id="' + id + '"]').removeClass('passed');

        $('.tab').removeClass('current');
        $('.tab[data-id="' + prev_id + '"]').addClass('current');
        $('.progress-bar__item[data-id="' + prev_id + '"]').addClass('current');
    });

    $('*[data-action="set-with"]').click(function() {
        with_v = $(this).text();
        console.log(with_v);
    });

    $('*[data-action="set-time"]').click(function() {
        time_v = $(this).text();
        console.log(time_v);
    });

    $('*[data-action="set-plan"]').click(function() {
        plan_v = $(this).text();
        console.log(plan_v);

        var s = '';

        if (with_v == 'один / одна') {
            s = s + 'один, ';
        } else {
            s = s + with_v + ', ';
        }

        if (time_v == 'в любое время') {
            s = s + 'любое, ';
        } else {
            s = s + time_v + ', ';
        }

        if (plan_v == '3 месяца') {
            s = s + '3';
        } else if (plan_v == '6 месяцев') {
            s = s + '6';
        } else if (plan_v == '12 месяцев') {
            s = s + '12';
        }

        rate = rates[s];
        var card_price = rate['стоимость карты'];
        var card_type = rate['тип карты'];
        var towels = rate['полотенце'];
        var freeze = rate['дней заморозки'];
        var solliar = rate['солярий(минуты)'];
        var massage = rate['массаж(минуты)'];

        if (card_type == 'базовая') {
            card_type = 'basic';
        } else {
            card_type = 'alpha';
        }

        $('.card-images img').removeClass('active');
        $('.card-images img[data-card="' + card_type + '"]').addClass('active');

        $('.card').removeClass('showed');
        $('.card-' + card_type).addClass('showed');

        $('.card-price span').html(card_price);

        $('span.towels').html(towels);
        $('span.freeze').html(freeze);
        $('span.solliar').html(solliar);
        $('span.massage').html(massage);
    });

    $('*[data-action="set-directions"]').click(function() {
        directions_v = [];
        $.each($(".directions input:checked"), function(){
            directions_v.push($(this).val());
        });
        console.log(directions_v);
    });

    // $('.card-images img').click(function() {
    //     var card = $(this).attr('data-card');

    //     $('.card-images img').removeClass('active');
    //     $(this).addClass('active');

    //     $('.card').removeClass('showed');
    //     $('.card-' + card).addClass('showed');

    //     card_type = card;
    // });

    $('.form form input').focusin(function() {
        var id = $(this).attr('id');

        $('.form label[for="' + id +'"]').addClass('entered');

        $(this).parent().addClass('focused');

        $('input#phone').inputmask({"mask": "+7 (999) 999 99-99"});
    });

    $('.form form input').focusout(function() {
        var id = $(this).attr('id');
        var value = $(this).val();

        if (value === '' || value === "+7 (___) ___ __-__") {
            $('.form label[for="' + id +'"]').removeClass('entered');
        }

        $(this).parent().removeClass('focused');

        $('input#phone').inputmask('remove');
    });

    $('.form form').submit(function(e) {
        e.preventDefault();

        var name = $('.form input[name="name"]');
        var phone = $('.form input[name="phone"]');
        var email = $('.form input[name="email"]');

        if (name.val() === '') {
            name.focus();
        }

        else if (phone.val().replace(/\D/g,'').length < 11) {
            phone.focus();
        }

        else if (validateEmail(email.val()) === false) {
            email.focus();
        }

        else {
            var data = "with="+with_v+"&time="+time_v+"&plan="+plan_v+"&directions="+JSON.stringify(directions_v)+"&card_type="+card_type+"&name="+name.val()+"&phone="+phone.val()+"&email="+email.val();

            console.log(data);

            $.ajax({
                type: "POST",
                url: "mail.php",
                data: data
            }).done(function(d) {
                alert(d);
            });

            // console.log(with_v);
            // console.log(time_v);
            // console.log(plan_v);
            // console.log(directions_v);
            // console.log(card_type);
            // console.log(name.val());
            // console.log(phone.val());
            // console.log(email.val());

            $('span.user-name').text(name.val());
            $('.tab').removeClass('current');
            $('.last-tab').addClass('current');
            $('.progress-bar').fadeOut(0);
        }

    });


});