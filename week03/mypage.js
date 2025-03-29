document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("save_btn");

    btn.addEventListener("click", function () {
        alert("변경사항을 성공적으로 저장했습니다!");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const lg = document.getElementById("logo");

    lg.addEventListener("click", function (event) {
        if (!confirm("변경사항이 저장되지 않을 수 있습니다. 나가시겠습니까?")) {
            event.preventDefault();
        } 
    });
});