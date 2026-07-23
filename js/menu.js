// メニュー内のリンクをクリックしたら、
// 同じページ内・別ページどちらへの移動でもメニューを閉じる
document.addEventListener("DOMContentLoaded", () => {
  const menuCheck = document.getElementById("menuCheck");
  const menuLinks = document.querySelectorAll(".menu-nav a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuCheck.checked = false;
    });
  });
});
