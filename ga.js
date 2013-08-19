  var _gaq = _gaq || [];
  /* Line for active the improved allocation of links */
  var pluginUrl = '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
  _gaq.push(['_require', 'inpage_linkid', pluginUrl]);
  /* Line for active the tracking Across multiple sub-domains */
  _gaq.push(['_setDomainName', 'belgium.be']);
  /* Line ID KEY of the current site */
  _gaq.push(['_setAccount', 'UA-40929792-4']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
