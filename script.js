
$(() => {
    $("#hamburger-menu").on("click", function () {
      $("#menu, #hamburger-menu").toggleClass("is-active");
    });
  });
  
  
  const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    
});