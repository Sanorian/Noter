document.addEventListener("DOMContentLoaded", (event) => {
  const urlParams = new URLSearchParams(window.location.search);
  const linkedNote = decodeURI(urlParams.get('note'));
  if (linkedNote!=null && linkedNote!="" && linkedNote!="null") {
    localStorage.setItem("oldNote", localStorage.getItem('note'));
    document.getElementsByTagName("textarea")[0].textContent = (linkedNote ?? localStorage.getItem('note') ?? '');
  }
  else {
    document.getElementsByTagName("textarea")[0].textContent = (localStorage.getItem("oldNote") ?? localStorage.getItem('note') ?? '');
    localStorage.removeItem("oldNote");
  }

  if ((localStorage.getItem('mode')??'light')=='dark')  {
    setDarkTheme();
}

});

function saveNotes() {
  note = document.getElementsByTagName("textarea")[0].value;
  localStorage.setItem('note', note);
}

function changeTheme(){
  if (document.getElementsByTagName("textarea")[0].getAttribute('class')=='textarea_light')  {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}
function clearNote(){
  document.getElementsByTagName("textarea")[0].value = '';
  localStorage.setItem('note', '');
}
function downloadNote(){
  var date = new Date();
  const link = document.createElement("a");
  const file = new Blob([document.getElementsByTagName("textarea")[0].value], { type: 'text/plain' });
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
  document.getElementsByTagName("textarea")[0].classList.remove('textarea_light');
  document.getElementsByTagName("textarea")[0].classList.add('textarea_dark');
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
  document.getElementsByTagName("textarea")[0].classList.remove('textarea_dark');
  document.getElementsByTagName("textarea")[0].classList.add('textarea_light');
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
    if (document.getElementsByTagName("textarea")[0].getAttribute('class')=='textarea_light')  {
      document.getElementById("shareDiv").classList.add("sharePlaceExpandedLight");
    } else {
      document.getElementById("shareDiv").classList.add("sharePlaceExpandedDark");
    }
    document.getElementsByTagName("code")[0].innerHTML += link;
  } else {
    if (document.getElementsByTagName("textarea")[0].getAttribute('class')=='textarea_light')  {
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