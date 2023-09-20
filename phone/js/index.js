// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    
    var forms = document.querySelectorAll('.needs-validation')
  
    
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  var copyrightSpan = document.getElementById("copyrightSpan");
  copyrightSpan.innerHTML = new Date().getFullYear();