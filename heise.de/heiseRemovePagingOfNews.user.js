// ==UserScript==
// @name        heiseRemovePagingOfNews
// @namespace   https://github.com/mahiso/greasemonkeyscripts
// @description Remove paging of news
// @include     https://www.heise.de/
// @version     1
// @grant       none
// ==/UserScript==

for (var i = document.links.length - 1; i >= 0; i--) {
  var elmLink = document.links[i]
  if (elmLink.href && elmLink.href.match(/meldung\/.*-[0-9]*\.html$/i)) {
    elmLink.href = elmLink.href + '?artikelseite=all'
  }
}
