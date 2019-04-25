class Personne {

    constructor(nom, prenom, salaire, nEnfants) {
        this.nom = nom;
        this.prenom = prenom;
        this.salaire = salaire;
        this.nEnfants = nEnfants;
    }

    primeEnfants() {
        return this.nEnfants * 200;
    }

    primeSalaire() {
        return this.salaire * 0.15;
    }

    primeTotale() {
        return this.primeSalaire() + this.primeEnfants();
    }
}

function hidePrimes() {
    document.getElementById("divPrimeSalaire").style.display = "none";
    document.getElementById("divPrimeEnfants").style.display = "none";
    document.getElementById("divPrimeTotale").style.display = "none";
}

function showPrimes() {
    if (document.getElementById("chkSalaire").checked) {
        document.getElementById("divPrimeSalaire").style.display = "flex";
    } else {
        document.getElementById("divPrimeSalaire").style.display = "none";
    }
    if (document.getElementById("chkEnfants").checked) {
        document.getElementById("divPrimeEnfants").style.display = "flex";
    } else {
        document.getElementById("divPrimeEnfants").style.display = "none";
    }
    if (document.getElementById("chkTotal").checked) {
        document.getElementById("divPrimeTotale").style.display = "flex";
    } else {
        document.getElementById("divPrimeTotale").style.display = "none";
    }
}

function calculerPrimes() {
    var p = new Personne(document.getElementById("txtNom").value,
        document.getElementById("txtPrenom").value,
        document.getElementById("nSalaire").value,
        document.getElementById("nEnfants").value);

    document.getElementById("txtPrimeEnfants").value = p.primeEnfants();
    document.getElementById("txtPrimeSalaire").value = p.primeSalaire();
    document.getElementById("txtPrimeTotale").value = p.primeTotale();
}

