jQuery(document).ready(function() {
 
    /* VAR */
	var version = "0.10";
    var debugMode = false;
	var match_ClassDownload = "Link";
	var match_errorPage = "waia:targetpage";
	var download_ext = ["pdf","xls","xlsx","doc","docx","ppt","pptx","dmg","exe","msi","zip","odt","odp","ods","mdb","csv","gz","txt","rtf"];
	var regPat = download_ext.join("|");
	
    /* 
	====================
	Section:
	Download Link 
	====================
	*/		
	
	jQuery("a[class]").on('click', function(event) {
  
		var rx = new RegExp(regPat,"i");
	  
		if(rx.test(jQuery(this).attr("class"))){
  
			var current_class = jQuery(this).attr("class");
			var current_href = jQuery(this).attr("href");
			var idx_point = current_href.lastIndexOf (".")+1;
			var current_ext = current_href.substr(idx_point);	

			// Double check with extension
			if(download_ext && current_ext && jQuery.inArray(current_ext.toLowerCase(), download_ext) != -1){
			
				if(debugMode == false){
		   
				_gaq.push(['_trackEvent', 'Downloads', current_ext.toLowerCase(), jQuery(this).attr("href")]);	
				
					if(jQuery(this).attr("target") != '_blank'){
				
						// On this case make, a break for record before continue    
						event.preventDefault();
						setTimeout(function () {
							document.location.href = href;
						}, 150, href=jQuery(this).attr("href"));					
					}						   
				}else{    
					// Debug mode   
					event.preventDefault();
					console.log("_gaq.push(['_trackEvent', 'Downloads', "+current_ext.toLowerCase()+", "+jQuery(this).attr("href")+"])");
				}
                	
			}					
	    }
	  
	})	 

    /* 
	====================
	Section:
	External link 
	====================
	*/
    jQuery('a[href^="http"]').on('click', function(event) {
        if(debugMode == false){
			
			var current_href = jQuery(this).attr("href");
			
		    /* Log external-link */
            _gaq.push(['_trackEvent', 'Click', 'external-link', current_href]);
			
			/* Log also if the external-link is a download  */
			var idx_point = current_href.lastIndexOf (".")+1;
			/* WCMS download url always finish by extension */
			var current_ext = current_href.substr(idx_point);			
			
			if(download_ext && current_ext && jQuery.inArray(current_ext.toLowerCase(), download_ext) != -1){
                _gaq.push(['_trackEvent', 'Downloads', current_ext.toLowerCase(), current_href]);	
			}
			
            if(jQuery(this).attr("target") != '_blank'){
                /* On this case, make a break for record before continue */   
                event.preventDefault();
                setTimeout(function () {
                    document.location.href = href;
                }, 150, href=current_href);
            }
        }else{
			/* Debug mode */
            event.preventDefault();  
            console.log("_gaq.push(['_trackEvent', 'Click', 'External-link', "+jQuery(this).attr("href")+"])");
        }
    });
	
	/* 
	====================
	Section:
	Error page
	====================
	*/
	var errorPage = jQuery("body").attr(match_errorPage);
	if(errorPage){
		_gaq.push(['_trackEvent', 'Error', "404", encodeURI(errorPage)]);
	}
	
	/* 
	====================
	Section:
	Custom param
	====================
	

	var match_customParam = "waia:";
	var customParam_toTrack = ["channel","search"];

	if(customParam_toTrack && customParam_toTrack.length > 0){
		for(var i = 0; i < customParam_toTrack.length; i++ ){
			var current_attr = jQuery("body").attr(match_customParam+customParam_toTrack[i])
			if(current_attr){	
				if(debugMode == false){
					_gaq.push(['_trackEvent', 'Custom', customParam_toTrack[i], current_attr]);	
				}else{
					console.log(customParam_toTrack[i]+':'+current_attr);
				}
			}
		}
	}
    */
	
});
