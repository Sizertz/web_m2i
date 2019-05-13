$(document).ready(function () {
    $("button[name='btnAddEleve']").click(function () {
        let ligne = $("<tr></tr>");
        ligne.append($("<td></td>").append($("<button type='button' class='btn btn-primary'></button>").text("Sélectionner")));
        ligne.append($("<td></td>").append($("<input type='txt' class='form-control' placeholder='Entrez le nom de famille' ></input>")));
        ligne.append($("<td></td>").append($("<input type='txt' class='form-control' placeholder='Entrez le prénom' ></input>")));
        ligne.append($("<td></td>").append($("<button type='button' class='btn btn-outline-primary'>Modifier</button>")));
        ligne.append($("<td></td>").append($("<button type='button' class='btn btn-outline-danger'>Supprimer</button>")));
        $("#tableEleve").append(ligne);
    });
});