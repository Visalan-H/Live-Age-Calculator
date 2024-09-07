function ageCalc() {
    var years = 1000 * 60 * 60 * 24 * 365.25;
    var dateInput = document.getElementById("datee").value;

    if (dateInput) {
        var d = new Date(dateInput);
        var dd = d.getDate();
        var mm = d.getMonth();
        var yy = d.getFullYear();

        var date1 = new Date((mm + 1) + "/" + dd + "/" + yy);
        var date2 = new Date();

        var timeDiff = (date2.getTime() - date1.getTime());
        var age = (timeDiff / years);

        age = age.toFixed(11);
        document.getElementById("liveage").innerHTML = age;
    }
    setTimeout(ageCalc, 50);
}
window.onload = ageCalc();