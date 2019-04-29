function Personne(nom, prenom, poids, taille, sexe) {
    this.nom = nom;
    this.prenom = prenom;
    this.poids = poids;
    this.taille = taille;
    this.sexe = sexe;

    this.IMC = function () {
        return this.poids / (this.taille ** 2);
    };

    this.poidsMin = function () {
        return 19 * this.taille * this.taille;
    };

    this.poidsMax = function () {
        return 25 * this.taille * this.taille;
    };

    this.poidsIdeal = function () {
        return sexe == "MASCULIN" ? 22 * this.taille * this.taille : 20 * this.taille * this.taille;
    };

    this.diagnostic = function () {
        var imc = this.IMC();
        if (imc < 17) {
            return "Anorexique";
        }
        if (imc < 19) {
            return "Maigre";
        }
        if (imc < 25) {
            return "Super Forme!";
        }
        if (imc < 30) {
            return "Quelques kilos en trop";
        }
        if (imc < 40) {
            return "Obèse";
        }
        return "Obèse morbide";
    }
}

function Traitement() {
    var nTaille = $("#nTaille").val();
    var nPoids = $("#nPoids").val();
    var sexe = $("#lstSexe").val();
    var nom = $("#txtNom").val();
    var prenom = $("#txtPrenom").val();

    var personne = new Personne(nom, prenom, nPoids, nTaille, sexe);

    $("#txtIMC").val(personne.IMC());
    $("#txtDiagnostic").val(personne.diagnostic());
    $("#txtPoidsMin").val(personne.poidsMin());
    $("#txtPoidsMax").val(personne.poidsMax());
    $("#txtPoidsIdeal").val(personne.poidsIdeal());

}

$(document).ready(function () {
    // Submit button event handling
    $("button[name='submit']").click(function () { Traitement(); });

    // Override form submission to not reload page and compute IMC instead
    $("form").submit(function () {
        alert("enter");
        Traitement();
        alert("traité");
        return false;
    });
});