function copyToClipboard(){
  let pwd = 'hAFz9CYCEVagQyN';
  const el = document.createElement('textarea');
  el.value = pwd;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}


copyToClipboard();