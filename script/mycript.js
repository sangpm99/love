function agree() {
    var popup = document.getElementById("agree-table").style.display = "block";
    var start = document.getElementById("agree-table").style.animation = "drop ease-out 1s";
}
function disagree() {
    var popup = document.getElementById("disagree-table").style.display = "block";
    var start = document.getElementById("disagree-table").style.animation = "drop ease-out 1s";
}
function closeTable() {
    var agree = document.getElementById("agree-table").style.display = "none";
    var disagree = document.getElementById("disagree-table").style.display = "none";
}