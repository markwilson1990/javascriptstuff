let date = new Date();
let emailPrefix = date.getTime();

function generateEmail() {
    return emailPrefix + "@veryrealemail.com";
}

function copyToClipboard(value){
  const el = document.createElement('textarea');
  el.value = value;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

generateEmail();
copyToClipboard(generateEmail());