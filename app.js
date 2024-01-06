let note, 
  localNote = localStorage.getItem('note'), 
  textarea = document.getElementById('notes'), 
  change_mode_button = document.getElementById('change_mode'), 
  mode=(localStorage.getItem('mode')??'light'), 
  clear_button = document.getElementById('clear'),
  download_button=document.getElementById('download');

textarea.textContent = (localNote ?? '');
if (mode=='dark')  {
  setDarkTheme();
}

textarea.oninput = function() {
  note = textarea.value;
  localStorage.setItem('note', note);
}
change_mode_button.onclick = function(){
  if (textarea.getAttribute('class')=='textarea_light')  {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}
clear_button.onclick = function(){
  textarea.value = '';
  localStorage.setItem('note', '');
}
download_button.onclick = function(){
  var date = new Date();
  const link = document.createElement("a");
  const file = new Blob([textarea.value], { type: 'text/plain' });
  link.href = URL.createObjectURL(file);
  link.download = "note(" + date.getDate() +"."+ date.getMonth() + "." + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ").txt";
  link.click();
  URL.revokeObjectURL(link.href);
}

function setDarkTheme(){
  document.getElementsByTagName('main')[0].classList.remove('main_light');
  document.getElementsByTagName('main')[0].classList.add('main_dark');
  document.getElementsByTagName('body')[0].classList.remove('body_light');
  document.getElementsByTagName('body')[0].classList.add('body_dark');
  textarea.classList.remove('textarea_light');
  textarea.classList.add('textarea_dark');
  change_mode_button.classList.remove('button_light');
  change_mode_button.classList.add('button_dark');
  clear_button.classList.remove('button_light');
  clear_button.classList.add('button_dark');
  download_button.classList.remove('button_light');
  download_button.classList.add('button_dark');
  localStorage.setItem('mode', 'dark');
}

function setLightTheme(){
  document.getElementsByTagName('main')[0].classList.remove('main_dark');
  document.getElementsByTagName('main')[0].classList.add('main_light');
  document.getElementsByTagName('body')[0].classList.remove('body_dark');
  document.getElementsByTagName('body')[0].classList.add('body_light');
  textarea.classList.remove('textarea_dark');
  textarea.classList.add('textarea_light');
  change_mode_button.classList.remove('button_dark');
  change_mode_button.classList.add('button_light');
  clear_button.classList.remove('button_dark');
  clear_button.classList.add('button_light');
  download_button.classList.remove('button_dark');
  download_button.classList.add('button_light');
  localStorage.setItem('mode', 'light');
}