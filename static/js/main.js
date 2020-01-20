$(document).ready(function () {
    $("#flag_hu").click(function () {
        var csrftoken = Cookies.get('csrftoken');
        var baseUrl = window.location.protocol + "//" + window.location.host;
        $.post(baseUrl + "/i18n/setlang/", {csrfmiddlewaretoken: csrftoken, language: "hu"})
            .done(function (msg) {
                console.log("done!");
                location.reload();
            }).fail(function (xhr, status, error) {
                console.log(error);
        });
    });

    $("#flag_en").click(function () {
        var csrftoken = Cookies.get('csrftoken');
        var baseUrl = window.location.protocol + "//" + window.location.host;
        $.post(baseUrl + "/i18n/setlang/", {csrfmiddlewaretoken: csrftoken, language: "en"})
            .done(function (msg) {
                console.log("done!");
                location.reload();
            }).fail(function (xhr, status, error) {
                console.log(error);
        });
    });
});