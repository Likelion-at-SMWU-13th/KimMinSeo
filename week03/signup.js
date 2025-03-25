function checkpassword() {
const pw1 = document.getElementById("password1").Value;
const pw2 = document.getElementById("password2").Value;

    if (pw1 !== pw2) {
    alert("비밀번호가 다릅니다!");
    return false;
}
    return true;
}