function makeBeacon(refcd){
  var html = '<img src="http://uolfreeservers.112.2O7.net/b/ss/uolfreeservers/1/EMAIL?pageName='+refcd+'"'
  +' height="1" width="1" border="0" alt="'+refcd+'" title="'+refcd+'"'
  +' style="position:absolute;top:0px;left:0px;" />';
  return html
}

function ivnSplit(){
  /* implement split test, 
    -scope the variables to a function, 
    -use cookie to persist offer for returning folks 
    -requires cookie.js methods, must include before this code runs
  */

  var html = '';
  var rnd = parseInt(Math.random()*3)+1;
  var msplit; var refcd; var src; var href;

  if(window.getCookie){ msplit =  window.getCookie("mwsbiso") || rnd; } else{ msplit = rnd; /* no cookie */ }
  if(location.search && location.search.match(/random=(\d)/)){ var tmp = location.search.match(/random=(\d)/)[1]; if(tmp.match(/[123]/)) msplit = tmp; }
  if(window.setCookie){ window.setCookie("mwsbiso", msplit); } /* remember it for next time */
  switch(parseInt(msplit)){
    case 1: 
      refcd = 'WSUOWS080814NB01';
      src = '/fs_img/banners/2008/120x24a.gif';
      href = '/cgi-bin/show_me?page=bounce_in&refcd='+refcd+'&myurl=http://www.freeinternet.com/';
      break;
    case 2:
      refcd = 'WSUOWS080814NB02';
      src = '/fs_img/banners/2008/120x24b.gif';
      href = '/cgi-bin/show_me?page=bounce_in&refcd='+refcd+'&myurl=http://www.freeinternet.com/';
      break;
    case 3:
      refcd = 'WSUOWS080814NB03';
      src = '/fs_img/banners/2008/120x24c.gif';
      href = '/cgi-bin/show_me?page=bounce_in&refcd='+refcd+'&myurl=http://www.freeinternet.com/';
      break;
  }

  html += '<a href="'+href+'" target=_blank>'
   + '<img src="'+src+'" title="'+msplit+'" border="0"></a>'
   + makeBeacon(refcd);

  document.write(html);

}

ivnSplit();

