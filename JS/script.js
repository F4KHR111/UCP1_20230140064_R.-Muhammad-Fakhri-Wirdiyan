window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      document.getElementById('popup-diskon').classList.add('show');
    }, 3000);
  });
  
  function tutupPopup() {
    document.getElementById('popup-diskon').classList.remove('show');
  }

  
  

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formKontak");
    const popup = document.getElementById("popup-kontak");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      popup.classList.add("show");
    });
  });
  
  function tutupKontak() {
    document.getElementById("popup-kontak").classList.remove("show");
  }
  



  document.addEventListener("DOMContentLoaded", () => {
    const formDaftar = document.getElementById("formDaftar");
    const popupDaftar = document.getElementById("popup-daftar");
  
    if (formDaftar) {
      formDaftar.addEventListener("submit", function (e) {
        e.preventDefault();
  
        // Simulasi validasi dan pendaftaran
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
  
        if (username && email && password) {
          popupDaftar.classList.add("show");
        }
      });
    }
  });
  
  function tutupDaftar() {
    document.getElementById("popup-daftar").classList.remove("show");
  }
  