let note, localNote = localStorage.getItem('note'), textarea = document.getElementById('notes'), light_mode_button = document.getElementById('light_mode'), dark_mode_button = document.getElementById('dark_mode');
/// Colors
textarea.textContent = (localNote ?? 'Попробуйте что-нибудь написать');
light_mode_button.onclick = function(){
  document.getElementById('main').classList.remove('main_light');
  document.getElementById('main').classList.add('main_dark');
  document.getElementById('body').classList.remove('body_light');
  document.getElementById('body').classList.add('body_dark');
  textarea.classList.remove('textarea_light');
  textarea.classList.add('textarea_dark');
}
dark_mode_button.onclick = function(){
  document.getElementById('main').classList.remove('main_dark');
  document.getElementById('main').classList.add('main_light');
  document.getElementById('body').classList.remove('body_dark');
  document.getElementById('body').classList.add('body_light');
  textarea.classList.remove('textarea_dark');
  textarea.classList.add('textarea_light');
}
textarea.oninput = function() {
  note = textarea.value;
  localStorage.setItem('note', note);
}