// ==UserScript==
// @name        bluemixRegenerateOneTimePassCode
// @namespace   https://github.com/mahiso/greasemonkeyscripts
// @description Clicks the 'Regenerate" button when passcode is expired
// @include     https://*.bluemix.net/UAALoginServerWAR/showpasscode.jsp
// @version     1
// @grant       none
// ==/UserScript==
var expirationElement = document.getElementById('expiration')
var regenerateButton = document.getElementById('regenerate')

setInterval(function () {
  if (expirationElement.innerHTML === 'It is expired.') {
    regenerateButton.dispatchEvent(new MouseEvent('click'))
  }
}, 1000)
