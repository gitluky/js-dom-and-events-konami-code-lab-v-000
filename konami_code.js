const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let i = 0
  document.body.addEventListener('keydown', function (e) {
    const key = parseInt(e.detail || e.which)
    if (key === code[i]) {
      i++;
      if (i === code.length) {
        alert('Cheats Enabled.')
      }
    } else {
        i = 0;
    }
  });

}
