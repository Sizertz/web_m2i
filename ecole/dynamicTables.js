

$(document).ready(function () {
    // gestion du bouton "Ajouter Eleve"
    $("button[name='btnAddEleve']").click(function () {
        tableEleveLength++;
        let ligne = $("<tr></tr>");
        let lineID = "eleve" + tableEleveLength;
        ligne.attr("lineID", lineID);
        ligne.append($("<td></td>").append(newSelectionnerButton(lineID)));
        ligne.append($("<td></td>").append(newTxtInput(lineID, "Entrez nom de famille")));
        ligne.append($("<td></td>").append(newTxtInput(lineID, "Entrez le prénom")));
        ligne.append($("<td></td>").append(newModifierButton(lineID, true)));
        ligne.append($("<td></td>").append(newSupprimerButton(lineID)));
        $("#tableEleve").append(ligne);
    });

    generateEleveTable();


    // Enable navigation prompt
    /* window.onbeforeunload = function () {
        return true;
    }; */
});

var tableEleveLength = 2;
var tableNotesLength = 3;

function newSupprimerButton(lineID) {
    let btn = $("<button type='button' class='btn btn-outline-danger'>Supprimer</button>");
    btn.parent().parent().remove();
    btn.click(function () {
        $("tr[lineID='" + lineID + "']").remove();
    });
    return btn;
}

function newModifierButton(lineID, active) {
    let btn = $("<button type='button' data-toggle='button' class='btn btn-outline-primary  modifierBtn'>Modifier</button>");
    if (active) {
        btn.addClass("active");
        btn.attr("aria-pressed", true);
    }
    btn.click(function () {
        let txtInputs = $("tr[lineID='" + lineID + "'] .toggleTxtInput");
        txtInputs.toggleClass("form-control");
        txtInputs.toggleClass("form-control-plaintext");
        txtInputs.attr("readonly", !txtInputs.attr("readonly"));

        let selects = $("tr[lineID='" + lineID + "'] .toggleSelect > select");
        let readonlys = $("tr[lineID='" + lineID + "'] .toggleReadOnly > select");
        console.log(selects.length);
        selects.slideToggle("slow");
        console.log(readonlys.length);
        readonlys.slideToggle("slow");
    });
    return btn;
}

function newSelectionnerButton(lineID) {
    let btn = $("<button type='button' class='btn btn-primary'></button>").text("Sélectionner");
    btn.attr("data-toggle", "collapse");
    btn.attr("data-target", "#collapseExample");
    btn.click(function () {
        generateNotesTable(lineID);
    });
    return btn;
}

function newTxtInput(lineID, placeholder) {
    let input = $("<input type='txt' class='form-control invalidData toggleTextInput' placeholder='" + placeholder + "' ></input>");
    return input;
}

function validateLine(lineID) {
    return $("tr[lineID='" + lineID + "'] .invalidData").length == 0;
}

function getNotes(idEleve) {

    return JSON.stringify(JSON.parse(getEleves().find(function(e){return e.idEleve == idEleve;}).notes));
}

function getEleves(idClasse) {
    let tblEleves = [
        {
            "nom": "Abelard",
            "prenom": "Simon",
            "idEleve": 1,
            "notes": [
                { "valeur": 18, "matiere": "Anglais", "date": "2019-03-05" },
                { "valeur": 15, "matiere": "Anglais", "date": "2019-04-02" },
                { "valeur": 7, "matiere": "Maths", "date": "2019-01-02" }
            ]
        },
        {
            "nom": "Balmes",
            "prenom": "Simon",
            "idEleve": 2,
            "notes": [
                { "valeur": 1, "matiere": "Anglais", "date": "2019-03-05" },
                { "valeur": 5, "matiere": "Anglais", "date": "2019-04-02" },
                { "valeur": 17, "matiere": "Maths", "date": "2019-01-02" }
            ]
        },
        {
            "nom": "Conrardy",
            "prenom": "Simon",
            "idEleve": 3,
            "notes": [
                { "valeur": 13, "matiere": "Anglais", "date": "2019-03-05" }
            ]
        }
    ];
    return JSON.stringify(tblEleves);
}

function TxtInput(lineID, value, placeholder) {
    let input = newTxtInput(lineID, placeholder).val(value);
    input.removeClass("invalidData");
    input.toggleClass("form-control");
    input.toggleClass("form-control-plaintext");
    input.attr("readonly", !input.attr("readonly"));
    return input;
}

function generateNotesTable(idEleve) {
    let table = $("table[name='tableNotes'] tbody");
    table.empty();
    notes = JSON.parse(getNotes(idEleve));
    for (idNote = 0; idNote < notes.length; idNote++) {
        let lineID = idNote;
        let ligne = $("<tr></tr>");
        ligne.attr("lineID", idNote);
        ligne.append($("<td></td>").text(idNote));
        ligne.append($("<td></td>").append(TxtInput(lineID, notes[idNote].valeur, "Entrez note")));
        ligne.append($("<td></td>").append(newMatiereSelect(lineID, notes[idNote].matiere, false)));
        ligne.append($("<td></td>").append(TxtInput(lineID, notes[idNote].date, "Selectionnez date")));
        let btnModifier = newModifierButton(lineID, false);
        ligne.append($("<td></td>").append(btnModifier));
        ligne.append($("<td></td>").append(newSupprimerButton(lineID)));
        table.append(ligne);
    }
}

function getMatieres() {
    let matieres = ["Anglais", "Français", "Java", "Maths"];
    return matieres;
}

function newMatiereSelect(lineID, selected, activeModification) {
    let div = $("<div class='toggleSelect'></div>");
    div.attr("lineID", lineID);

    let sel = $("<select class='form-control'></select>");
    let matieres = getMatieres();
    for (i = 0; i < matieres.length; i++) {
        let option = $("<option></option>").text(matieres[i]);
        option.attr("value", matieres[i]);
        sel.append(option);
        if (matieres[i] == selected) {
            option.attr("selected", "selected");
        }
    }
    div.append(sel);

    let input = $("<input type='txt' class='form-control-plaintext toggleReadOnly' readonly='true'></input>");
    div.append(input);
    input.val(sel.val());

    if (activeModification) {
        input.hide();
    } else {
        sel.hide();
    }
    return div;
}

function generateEleveTable(){
    // recuperer donnees eleves
    let eleves = JSON.parse(getEleves());

    // vider la table
    $("#tableEleve").empty();
    tableEleveLength=0;

    // remplir la table ligne par ligne
    console.log(eleves.length);
    for(i = 0; i<eleves.length; i++){
        tableEleveLength++;
        let ligne = $("<tr></tr>");
        let lineID = "eleve" + eleves[i].idEleve;
        ligne.attr("lineID", lineID);
        ligne.append($("<td></td>").append(newSelectionnerButton(lineID)));
        ligne.append($("<td></td>").append(TxtInput(lineID, eleves[i].nom, "Entrez nom de famille")));
        ligne.append($("<td></td>").append(newTxtInput(lineID, eleves[i].prenom, "Entrez le prénom")));
        ligne.append($("<td></td>").append(newModifierButton(lineID, true)));
        ligne.append($("<td></td>").append(newSupprimerButton(lineID)));
        $("#tableEleve").append(ligne);
    }
}



