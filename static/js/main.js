$(document).ready(function () {
    $("#flag_hu").click(function () {
        var csrftoken = Cookies.get('csrftoken');
        console.log(csrftoken);
        $.post("http://127.0.0.1:8000/i18n/setlang/", {csrfmiddlewaretoken: csrftoken, language: "hu"})
            .done(function (msg) {
                console.log("done!");
                location.reload();
            }).fail(function (xhr, status, error) {
                console.log("error!");
        });
    });
});