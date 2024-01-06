let localNote = localStorage.getItem('note'), 
  textarea = document.getElementsByTagName("textarea")[0],
  mode=(localStorage.getItem('mode')??'light');

const urlParams = new URLSearchParams(window.location.search);
const linkedNote = decodeURI(urlParams.get('note'));
if (linkedNote!=null && linkedNote!="" && linkedNote!="null") {
  localStorage.setItem("oldNote", localNote);
  textarea.textContent = (linkedNote ?? localNote ?? '');
}
else {
  textarea.textContent = (localStorage.getItem("oldNote") ?? localNote ?? '');
  localStorage.removeItem("oldNote");
}

if (mode=='dark')  {
  setDarkTheme();
}

function saveNotes() {
  note = textarea.value;
  localStorage.setItem('note', note);
}

function changeTheme(){
  if (textarea.getAttribute('class')=='textarea_light')  {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}
function clearNote(){
  textarea.value = '';
  localStorage.setItem('note', '');
}
function downloadNote(){
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
  Array.from(document.getElementsByTagName("button")).forEach((button)=>{
    button.classList.remove('button_light');
    button.classList.add('button_dark');
  });
  localStorage.setItem('mode', 'dark');
}

function setLightTheme(){
  document.getElementsByTagName('main')[0].classList.remove('main_dark');
  document.getElementsByTagName('main')[0].classList.add('main_light');
  document.getElementsByTagName('body')[0].classList.remove('body_dark');
  document.getElementsByTagName('body')[0].classList.add('body_light');
  textarea.classList.remove('textarea_dark');
  textarea.classList.add('textarea_light');
  Array.from(document.getElementsByTagName("button")).forEach((button)=>{
    button.classList.remove('button_dark');
    button.classList.add('button_light');
  });
  localStorage.setItem('mode', 'light');
}

function shareNote(){
  if (document.getElementById("shareDiv").getAttribute('class')=="sharePlaceRolled"){
    const link = encodeURI(window.location.href+"?note="+document.getElementsByTagName("textarea")[0].value);
    document.getElementById("shareDiv").classList.remove("sharePlaceRolled");
    if (textarea.getAttribute('class')=='textarea_light')  {
      document.getElementById("shareDiv").classList.add("sharePlaceExpandedLight");
    } else {
      document.getElementById("shareDiv").classList.add("sharePlaceExpandedDark");
    }
    document.getElementsByTagName("code")[0].innerHTML += link;
  } else {
    if (textarea.getAttribute('class')=='textarea_light')  {
      document.getElementsByTagName("code")[0].innerHTML = '<button class="button_light" onclick="copyLink()">Copy</button>';
      document.getElementById("shareDiv").classList.remove("sharePlaceExpandedLight");
    } else {
      document.getElementsByTagName("code")[0].innerHTML = '<button class="button_dark" onclick="copyLink()">Copy</button>';
      document.getElementById("shareDiv").classList.remove("sharePlaceExpandedDark");
    }
    document.getElementById("shareDiv").classList.add("sharePlaceRolled");
  }
}
function copyLink(){
  navigator.clipboard.writeText(encodeURI(window.location.href+"?note="+document.getElementsByTagName("textarea")[0].value));
}