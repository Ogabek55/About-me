var name = prompt(`Ismingizni kiriting`);
document.addEventListener("DOMContentLoaded", function () {
  var submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", function () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username !== "" && password !== "") {
      // Bu joyda Instagram sahifasiga o'tkazish kodi bo'lishi mumkin
      window.location.href = "https://t.me/kompyuter263";
    } else {
      alert("Iltimos, foydalanuvchi nomi va parolni kiriting!");
    }
  });

  // "Enter" tugmasini eshitish
  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      // 13 "Enter" tugmasining Unicode qiymati
      submitBtn.click(); // "Yuborish" tugmasini avtomatik bosing
    }
  });
});
