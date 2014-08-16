function init(){
  var bootSimply = new BootSimply("LINKEDIN");
  bootSimply.oauthFlow();
  document.querySelector('#greeting').innerText = 'chrome-linkedin-oauth sample'; 
}

window.onload = init;
