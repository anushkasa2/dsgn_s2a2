titleText("amp", "amp-facts", "linear-gradient(to right, rgb(209, 145, 27), rgb(250, 121, 34), rgb(84, 40, 10))")
titleText("cocaine", "cocaine-facts", "linear-gradient(to right, #a4add5, #8856ac, #200136)")
titleText("lsd", "lsd-facts", "linear-gradient(to right, red, orange, yellow, green, blue, purple)")
titleText("mj", "mj-facts", "linear-gradient(to right,#93CB56, #7baa47, #059033, #355a20)")

function titleText(title_id, text_id, color) {
    var title = document.getElementById(title_id);
    title.addEventListener('click', e => {
        var text = document.getElementById(text_id);
        if (text.style.display == "none") {
            text.style.display = "block";
            title.style.background = color;
        } else {
            text.style.display = "none";
        }
    })
}
