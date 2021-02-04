let date = new Date();
let emailPrefix = ("0" + date.getDate()).slice(-2) + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-"+ date.getFullYear() + "-" + date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds();


function generateEmail() {
    return emailPrefix + "@veryrealemail.com";
    
}

function copyToClipboard(value){
  console.log(value,"07123456789");
  console.log('sb-kqv8k3097906@personal.example.com' , '91/zFu#n' , 'hAFz9CYCEVagQyN');
  const el = document.createElement('textarea');
  el.value = value;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

copyToClipboard(generateEmail());

