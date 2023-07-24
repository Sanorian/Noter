let note, localNote = localStorage.getItem('note'), textarea = document.getElementById('notes');
textarea.textContent = localNote;

textarea.oninput = function() {
  note = textarea.value;
  localStorage.setItem('note', note);
}