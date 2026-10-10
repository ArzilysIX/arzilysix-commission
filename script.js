document.querySelectorAll('a.work').forEach(function(a){
  var m=a.href.match(/(?:v=|youtu\.be\/|shorts\/|embed\/|live\/)([\w-]{11})/), img=a.querySelector('img');
  if(m&&img) img.src='https://img.youtube.com/vi/'+m[1]+'/hqdefault.jpg';
});
