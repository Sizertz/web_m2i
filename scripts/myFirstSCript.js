function IMC(p, t) {
    return p / (t * t);
}

function diagnostic(imc) {
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

function poidsMin(taille) {
    return 19 * taille * taille;
}

function poidsMax(taille) {
    return 25 * taille * taille;
}

function poidsIdeal(taille, sexe) {
    return sexe == "MASCULIN" ? 22 * taille * taille : 20 * taille * taille;
}

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
    var nTaille = document.getElementById("nTaille").value;
    var nPoids = document.getElementById("nPoids").value;
    var sexe = document.getElementById("lstSexe").value;
    var nom = document.getElementById("txtNom").value;
    var prenom = document.getElementById("txtPrenom").value;

    var personne = new Personne(nom, prenom, nPoids, nTaille, sexe);
    // alert(personne.nom + " " + personne.prenom + " " + personne.poids + "kg " + personne.taille + "m " + personne.sexe);
    // alert(nPoids / (nTaille * nTaille));
    document.getElementById("txtIMC").value = personne.IMC();
    document.getElementById("txtDiagnostic").value = personne.diagnostic();
    document.getElementById("txtPoidsMin").value = personne.poidsMin();
    document.getElementById("txtPoidsMax").value = personne.poidsMax();
    document.getElementById("txtPoidsIdeal").value = personne.poidsIdeal();

}

function ChangeButton() {
    var str = "btn btn-";
    if (document.getElementById("chkOutline").checked) {
        str += "outline-";
    }
    str += document.getElementById("lstCouleur").value;

    document.getElementById("button").className = str;
}

