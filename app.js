let note='', localNote = localStorage.getItem('note');
document.getElementById('notes').textContent= loacalNote;

function saveWritten(){
  note = document.getElementById('notes').value;
  localStorage.setItem('note', note);
}

setInterval(function(){
  note = document.getElementById('notes').value;
  localStorage.setItem('note', note);
},10);
