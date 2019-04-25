$(document).ready(function () {
    $("#btnOK").click(function () {
        liste.ajouterPays(); afficherListe();
    })

    $("form").on("submit", false);
    $("form").on("submit", function () { afficherListe() });
    $("form").on("submit", function (event) {
        if ($(this)[0].checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    });


    $("#txtNewPays").val("");
    $("#txtNewPays").on("keyup", function () {
        let isAlreadyHere = liste.find(new Pays($(this).val())) != -1;
        $("#btnModifier").attr("disabled", isAlreadyHere);
        if (isAlreadyHere) {
            $(this)[0].setCustomValidity("Ce pays existe déjà.");
            $(this).addClass("");
        } else {
            $(this)[0].setCustomValidity("");
        }
    });
});