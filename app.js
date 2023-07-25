let note, localNote = localStorage.getItem('note'), textarea = document.getElementById('notes'), change_mode_button = document.getElementById('change_mode'), mode=(localStorage.getItem('mode')??'light');

textarea.textContent = (localNote ?? 'Попробуйте что-нибудь написать');
if (mode=='dark')  {
  document.getElementById('main').classList.remove('main_light');
  document.getElementById('main').classList.add('main_dark');
  document.getElementById('body').classList.remove('body_light');
  document.getElementById('body').classList.add('body_dark');
  textarea.classList.remove('textarea_light');
  textarea.classList.add('textarea_dark');
  change_mode_button.classList.remove('button_light');
  change_mode_button.classList.add('button_dark');
} else {
  document.getElementById('main').classList.remove('main_dark');
  document.getElementById('main').classList.add('main_light');
  document.getElementById('body').classList.remove('body_dark');
  document.getElementById('body').classList.add('body_light');
  textarea.classList.remove('textarea_dark');
  textarea.classList.add('textarea_light');
  change_mode_button.classList.remove('button_dark');
  change_mode_button.classList.add('button_light');
}

textarea.oninput = function() {
  note = textarea.value;
  localStorage.setItem('note', note);
}
change_mode_button.onclick = function(){
  if (textarea.getAttribute('class')=='textarea_light')  {
    document.getElementById('main').classList.remove('main_light');
    document.getElementById('main').classList.add('main_dark');
    document.getElementById('body').classList.remove('body_light');
    document.getElementById('body').classList.add('body_dark');
    textarea.classList.remove('textarea_light');
    textarea.classList.add('textarea_dark');
    change_mode_button.classList.remove('button_light');
    change_mode_button.classList.add('button_dark');
    localStorage.setItem('mode', 'dark');
  } else {
    document.getElementById('main').classList.remove('main_dark');
    document.getElementById('main').classList.add('main_light');
    document.getElementById('body').classList.remove('body_dark');
    document.getElementById('body').classList.add('body_light');
    textarea.classList.remove('textarea_dark');
    textarea.classList.add('textarea_light');
    change_mode_button.classList.remove('button_dark');
    change_mode_button.classList.add('button_light');
    localStorage.setItem('mode', 'light');
  }
}
