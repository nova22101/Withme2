function createHeart() {
    var h = document.createElement("div");

    h.className =
        "heart " +
        (Math.random() > 0.5 ? "green" : "gray");

    h.textContent = "♥";

    h.style.left =
        Math.random() * 100 + "vw";

    h.style.fontSize =
        18 + Math.random() * 25 + "px";

    h.style.animationDuration =
        5 + Math.random() * 5 + "s";

    document.body.appendChild(h);

    setTimeout(function () {
        h.remove();
    }, 10000);
}

setInterval(createHeart, 700);


/* =========================
   متغیرها
========================= */

var messages = [
    "مطمئنی؟😿",
    "سفید من لطفااا😿",
    "یعنی نمیخوای منو ببینی؟😿",
    "اخه خب قند من، بگو آره دیگه😿",
    "یعنی واقعا نمیخوای منو ببینی؟😿",
    "اخه من دلم برات خیلی تنگ شده🐱"
];

var noCount = 0;

var selectedDay = 0;
var selectedWeekday = "";
var selectedTime = "";
var selectedLocation = "";

var nextBtn =
    document.getElementById("nextBtn");


/* =========================
   دکمه بعدی
========================= */

if (nextBtn) {

    nextBtn.onclick = function () {
        showQuestion();
    };

}


/* =========================
   سوال
========================= */

function showQuestion() {

    var box =
        document.querySelector(".message-box");

    box.innerHTML = "";


    var h =
        document.createElement("h1");

    h.textContent =
        "میای بریم بیرون؟ 💚";

    box.appendChild(h);


    var msg =
        document.createElement("p");

    msg.id =
        "reactionMessage";

    box.appendChild(msg);


    var wrap =
        document.createElement("div");

    wrap.className =
        "buttons";

    box.appendChild(wrap);


    var yes =
        document.createElement("button");

    yes.id =
        "yesBtn";

    yes.textContent =
        "آره 💚";

    wrap.appendChild(yes);


    var no =
        document.createElement("button");

    no.id =
        "noBtn";

    no.textContent =
        "نه";

    wrap.appendChild(no);


    /* آره */

    yes.onclick = function () {

        showCalendar();

    };


    /* نه */

    no.onclick = function () {

        msg.textContent =
            messages[noCount];

        noCount++;


        if (noCount >= messages.length) {

            setTimeout(function () {

                no.remove();

                msg.textContent =
                    "🐱💚";

            }, 500);

        } else {

            moveNoButton();

        }

    };

}


/* =========================
   جابه‌جایی نه
========================= */

function moveNoButton() {

    var button =
        document.getElementById("noBtn");

    if (!button) {
        return;
    }


    var x =
        Math.floor(
            Math.random() * 100
        ) - 50;


    var y =
        Math.floor(
            Math.random() * 60
        ) - 30;


    button.style.transform =
        "translate(" +
        x +
        "px, " +
        y +
        "px)";
}


/* =========================
   تقویم
========================= */

function showCalendar() {

    var box =
        document.querySelector(".message-box");

    box.innerHTML = "";


    var h =
        document.createElement("h1");

    h.textContent =
        "چه روزی بریم؟ 💚";

    box.appendChild(h);


    var p =
        document.createElement("p");

    p.textContent =
        "یک روز از مهر ۱۴۰۵ انتخاب کن";

    box.appendChild(p);


    var cal =
        document.createElement("div");

    cal.className =
        "calendar";

    box.appendChild(cal);


    var month =
        document.createElement("h2");

    month.textContent =
        "مهر ۱۴۰۵";

    cal.appendChild(month);


    var days =
        document.createElement("div");

    days.className =
        "days";

    cal.appendChild(days);


    var out =
        document.createElement("p");

    out.id =
        "selectedDate";

    box.appendChild(out);


    /* ۱ مهر ۱۴۰۵ = چهارشنبه */

    var startDay = 4;


    for (
        var i = 0;
        i < startDay;
        i++
    ) {

        var empty =
            document.createElement("span");

        empty.className =
            "empty-day";

        days.appendChild(empty);
    }


    for (
        var d = 1;
        d <= 30;
        d++
    ) {

        var dayButton =
            document.createElement("button");

        dayButton.className =
            "calendar-day";

        dayButton.textContent =
            d;

        dayButton.dataset.day =
            d;

        days.appendChild(dayButton);
    }


    var dayButtons =
        days.querySelectorAll("button");


    for (
        var k = 0;
        k < dayButtons.length;
        k++
    ) {

        dayButtons[k].onclick =
            function () {

                for (
                    var j = 0;
                    j < dayButtons.length;
                    j++
                ) {

                    dayButtons[j]
                        .classList
                        .remove("selected");
                }


                this.classList.add(
                    "selected"
                );


                selectedDay =
                    Number(
                        this.dataset.day
                    );


                var weekdays = [
                    "شنبه",
                    "یکشنبه",
                    "دوشنبه",
                    "سه‌شنبه",
                    "چهارشنبه",
                    "پنجشنبه",
                    "جمعه"
                ];


                selectedWeekday =
                    weekdays[
                        (
                            startDay +
                            selectedDay -
                            1
                        ) % 7
                    ];


                out.textContent =
                    selectedWeekday +
                    " " +
                    selectedDay +
                    " مهر ۱۴۰۵ 💚";


                setTimeout(
                    showTimeSelection,
                    400
                );
            };
    }
}


/* =========================
   ساعت
========================= */

function showTimeSelection() {

    var box =
        document.querySelector(".message-box");

    box.innerHTML = "";


    var h =
        document.createElement("h1");

    h.textContent =
        "چه ساعتی بریم؟ 💚";

    box.appendChild(h);


    var p =
        document.createElement("p");

    p.textContent =
        selectedWeekday +
        " " +
        selectedDay +
        " مهر ۱۴۰۵";

    box.appendChild(p);


    var wrap =
        document.createElement("div");

    wrap.className =
        "time-buttons";

    box.appendChild(wrap);


    var out =
        document.createElement("p");

    box.appendChild(out);


    var times = [
        "۰۸:۰۰",
        "۰۹:۰۰",
        "۱۰:۰۰",
        "۱۱:۰۰",
        "۱۲:۰۰",
        "۱۳:۰۰",
        "۱۴:۰۰",
        "۱۵:۰۰",
        "۱۶:۰۰",
        "۱۷:۰۰",
        "۱۸:۰۰",
        "۱۹:۰۰",
        "۲۰:۰۰"
    ];


    for (
        var i = 0;
        i < times.length;
        i++
    ) {

        var timeButton =
            document.createElement("button");

        timeButton.textContent =
            times[i];

        wrap.appendChild(
            timeButton
        );


        timeButton.onclick =
            function () {

                var buttons =
                    wrap.querySelectorAll(
                        "button"
                    );


                for (
                    var j = 0;
                    j < buttons.length;
                    j++
                ) {

                    buttons[j]
                        .classList
                        .remove(
                            "selected"
                        );
                }


                this.classList.add(
                    "selected"
                );


                selectedTime =
                    this.textContent;


                out.textContent =
                    "ساعت " +
                    selectedTime +
                    " انتخاب شد 💚";


                setTimeout(
                    showLocationSelection,
                    500
                );
            };
    }
}


/* =========================
   مکان
========================= */

function showLocationSelection() {

    var box =
        document.querySelector(
            ".message-box"
        );

    box.innerHTML = "";


    var h =
        document.createElement("h1");

    h.textContent =
        "کجا همو ببینیم؟ 💚";

    box.appendChild(h);


    var p =
        document.createElement("p");

    p.textContent =
        selectedWeekday +
        " " +
        selectedDay +
        " مهر، ساعت " +
        selectedTime;

    box.appendChild(p);


    var wrap =
        document.createElement("div");

    wrap.className =
        "location-buttons";

    box.appendChild(wrap);


    var out =
        document.createElement("p");

    box.appendChild(out);


    var places = [
        ["باغ نرگس", "🌸 باغ نرگس"],
        ["کافه", "☕ کافه"],
        ["پانسیون", "🏠 پانسیون"],
        ["پارک", "🌳 پارک"]
    ];


    for (
        var i = 0;
        i < places.length;
        i++
    ) {

        var locationButton =
            document.createElement(
                "button"
            );


        locationButton.textContent =
            places[i][1];


        locationButton.dataset.location =
            places[i][0];


        wrap.appendChild(
            locationButton
        );


        locationButton.onclick =
            function () {

                var buttons =
                    wrap.querySelectorAll(
                        "button"
                    );


                for (
                    var j = 0;
                    j < buttons.length;
                    j++
                ) {

                    buttons[j]
                        .classList
                        .remove(
                            "selected"
                        );
                }


                this.classList.add(
                    "selected"
                );


                selectedLocation =
                    this.dataset.location;


                out.textContent =
                    selectedLocation +
                    " انتخاب شد 💚";


                /*
                   بعد از انتخاب مکان،
                   صفحه نهایی نمایش داده شود.
                */

                setTimeout(
                    showFinalPage,
                    700
                );
            };
    }
}


/* =========================
   صفحه نهایی
========================= */

function showFinalPage() {

    var box =
        document.querySelector(
            ".message-box"
        );

    box.innerHTML = "";


    var h =
        document.createElement("h1");

    h.textContent =
        "پس قرارمون شد! 🐱💚";

    box.appendChild(h);


    var p1 =
        document.createElement("p");

    p1.textContent =
        selectedWeekday +
        " " +
        selectedDay +
        " مهر ۱۴۰۵";

    box.appendChild(p1);


    var p2 =
        document.createElement("p");

    p2.textContent =
        "ساعت " +
        selectedTime;

    box.appendChild(p2);


    var p3 =
        document.createElement("p");

    p3.textContent =
        "📍 " +
        selectedLocation;

    box.appendChild(p3);


    var finalText =
        document.createElement("h2");

    finalText.textContent =
        "پس " +
        selectedWeekday +
        " " +
        selectedDay +
        " مهر، ساعت " +
        selectedTime +
        " می‌بینمتت 🐱💚";

    box.appendChild(finalText);
}