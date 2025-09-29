document.addEventListener("DOMContentLoaded", function(){
    // Sidenav initializtion
    const menus = document.querySelector(".sidenav");
    M.Sidenav.init(menus, {edge: "right"});
    const forms = document.querySelector(".side-form");
    M.Sidenav.init(forms, {edge: "left"});
    //form selects
    const selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    M.Collapsible.init(document.querySelectorAll('.collapsible'));
     const categorySelect = document.getElementById('recipe-category-top');
    if (categorySelect) {
    categorySelect.addEventListener('change', () => {
      const selected = categorySelect.options[categorySelect.selectedIndex].text;
      M.toast({ html: `Feature coming soon for ${selected}! 🚀` });
    });
  }



     M.updateTextFields();

// Character counters for fields with data-length
  M.CharacterCounter.init(document.querySelectorAll('#subject, #message'));

  // Demo submit handler
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (form.checkValidity()) {
        M.toast({ html: 'Thanks! Your message was sent (demo).' });
        form.reset();
        M.updateTextFields();
        M.CharacterCounter.init(document.querySelectorAll('#subject, #message'));
      } else {
        M.toast({ html: 'Please fix the errors in the form.' });
      }
    });
  }

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("serviceWorker.js")
    .then((req) => console.log("Service Worker Registered!", req))
    .catch((err) => console.log("Service Worker registration failed", err));
}
window.addEventListener('online',  () => M.toast({ html: 'Back online' }));
  window.addEventListener('offline', () => M.toast({ html: 'You’re offline – showing cached content' }));
});


