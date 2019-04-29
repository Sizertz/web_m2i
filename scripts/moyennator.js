var arrNotes = new Array();


function calculerMoyenne() {
    sum = 0;
    count = 0;
    invalid = false;
    // $("div[name='divNotes'] > input").each(function (index, nbInput) {
    //     if (nbInput.value.length) {
    //         sum += parseFloat(nbInput.value);
    //         count++;
    //         if (parseFloat(nbInput.value) < 0 || parseFloat(nbInput.value) > 20)
    //             invalid = true;
    //     }
    // });
    arrNotes.forEach(function (note, index) {
        if (note.length) {
            sum += note;
            count++;
            if (note < 0 || note > 20)
                invalid = true;
        }
    })

    if (invalid) {
        $("input[name='txtMoyenne']").val("Invalid input");
        return -1;
    }

    if (count > 0) {
        console.log(sum + " "+count);
        $("input[name='txtMoyenne']").val(sum / count);
        return sum / count;
    } else {
        $("input[name='txtMoyenne']").val("Invalid input");
        return -1;
    }
}

function generateNoteInputs() {
    nbNotes = parseInt($("input[name='nbNotes']").val());
    $("div[name='divNotes']").empty();
    calculerMoyenne();

    if (nbNotes > 8 || nbNotes < 3) {
        return;
    }


    arrNotes = new Array(parseInt($("input[name='nbNotes']").val()));


    for (i = 0; i < $("input[name='nbNotes']").val(); i++) {
        nbInput = $("<input></input>");
        nbInput.attr("type", "number");
        nbInput.addClass("form-control col-sm-4");
        nbInput.attr("step", "0.25");
        nbInput.attr("min", "0");
        nbInput.attr("max", "20");
        nbInput.attr("name", "nbNote" + i);
        $("div[name='divNotes']").append(nbInput);
        // event when value changed
        nbInput.change(function () {
            index = $("div[name='divNotes'] > input").index(this);
            if (!isNaN($(this).val())) {
                arrNotes[index] = $(this).val();
                calculerMoyenne();
            }
        });

    }


}


$(document).ready(function () {
    $("input[name='txtMoyenne']").val("");


    $("input[name='nbNotes']").on("keypress", function (event) {
        var keycode = event.keycode || event.which;
        if (keycode == 13) {
            generateNoteInputs();
        }
    });

    $("form").submit(function () {
        return false;
    })

    // Event when chosen number of grades
    $("button[name='btnNbNotes']").click(function () {
        generateNoteInputs();
    });

    // Event when ask to compute mean
    $("button[name='btnMoyenne']").click(function () {
        calculerMoyenne();
    });


});
