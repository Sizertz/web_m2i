class Pays {
    constructor(nom) {
        this.nom = nom.toUpperCase();
    }

    afficher() {
        return this.nom;
    }

    equals(other) {
        if (other == null)
            return false;
        if (typeof other != typeof this)
            return false;
        if (!other.hasOwnProperty("nom"))
            return false;
        if (other.nom == this.nom)
            return true;
        return false;
    }
}


class ListePays {
    constructor() {
        this.arrayPays = new Array(0);
        this.selectedIndex = -1
    }


    modifierPays() {
        if (this.selectedIndex == -1)
            return;
        let newValue = new Pays(document.getElementById("txtNewPays").value);
        this.arrayPays[this.selectedIndex] = newValue;
    }

    ajouterPays() {
        let pays = new Pays(document.getElementById("txtPays").value);
        if (this.find(pays) == -1)
            this.arrayPays.push(pays);
    }

    find(pays) {
        var res = - 1;
        this.arrayPays.forEach(function (element, index) {
            if (pays.equals(element))
                res = index;
        });
        return res;
    }

    supprimerPays() {
        this.arrayPays.splice(this.selectedIndex, 1);
        this.selectedIndex = -1;
    }

}

var liste = new ListePays();

function afficherListe() {
    /* var str = "";
    liste.arrayPays.forEach(function (pays, index) {
        str += "<option value='" + pays.nom + "'>" + pays.nom + "</option>"
    });
    document.getElementById("lstPays").innerHTML = str; */

    // Reset display
    /* var select = document.getElementById("lstPays");
    select.innerHTML = ""; */
    var parent = document.getElementById("listPays");
    parent.innerHTML = "";


    // Re-display
    liste.arrayPays.forEach(function (pays, index) {
        /* var option = document.createElement("option");
        option.value = pays.nom;
        option.innerHTML = pays.nom;
        select.appendChild(option); */

        addPaysButton(pays, index, parent);
    });

    // Paint selected
    if (liste.selectedIndex != -1) {
        document.getElementById("btnPays" + liste.selectedIndex).classList.toggle("active");
    }

    enableEditing();
}

function addPaysButton(pays, index, parentNode) {
    var liElement = document.createElement("button");
    liElement.className = "list-group-item list-group-item-action";
    liElement.id = "btnPays" + index;
    liElement.type = "button";
    liElement.innerHTML = pays.nom;
    liElement.onclick = function () { activateButton(liElement); };
    parentNode.appendChild(liElement);
}


function activateButton(btn) {
    btnIndex = liste.find(new Pays(btn.innerHTML));
    if (liste.selectedIndex != -1 && liste.selectedIndex != btnIndex) {
        document.getElementById("btnPays" + liste.selectedIndex).classList.toggle("active");
    }
    btn.classList.toggle("active");
    if (btnIndex == liste.selectedIndex) {
        liste.selectedIndex = -1;
    } else {
        liste.selectedIndex = btnIndex;
    }
    enableEditing();
}

function enableEditing() {
    document.getElementById("btnModifier").disabled = liste.selectedIndex == -1;
    document.getElementById("txtNewPays").disabled = liste.selectedIndex == -1;
    document.getElementById("btnSupprimer").disabled = liste.selectedIndex == -1;
}



