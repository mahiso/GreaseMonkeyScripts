// ==UserScript==
// @name        auxmoneyChangeProjectDetailsLink
// @namespace   https://github.com/mahiso/greasemonkeyscripts
// @description Change projects details links from markedplace to details page.
// @include     https://www.auxmoney.com/anlegercockpit/returns
// @version     1
// @grant       none
// ==/UserScript==

document.addEventListener('DOMNodeInserted', function () {
  for (var i = document.links.length - 1; i >= 0; i--) {
    var elmLink = document.links[i]
    if (elmLink.href && elmLink.href.match(/project\/details/i)) {
      var projectId = elmLink.href.match(/[0-9]+$/)
      elmLink.href = '/anlegercockpit/projects/details/' + projectId
    }
  }
}, false)
