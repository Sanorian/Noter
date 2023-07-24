let note, localNote = localStorage.getItem('note'), textarea = document.getElementById('notes');
textarea.textContent = (localNote ?? 'Попробуйте что-нибудь написать');

textarea.oninput = function() {
  note = textarea.value;
  localStorage.setItem('note', note);
}