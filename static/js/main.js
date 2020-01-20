function setLang(lang) {
    $('#langForm select').val(lang);
    $('#langForm').submit();
    return false;
}