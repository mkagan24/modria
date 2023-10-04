var current_id  = 0;
var jstree_instance = "";
/*chrome.storage.local.clear(function() {
    var error = chrome.runtime.lastError;
    if (error) {
        console.error(error);
    }
});*/
$(document).ready(function(){
	console.log('asdfsdf');
	chrome.storage.local.get('pipl_temp_key', function(smartData){
		var h_key = $.map(smartData, function(value, index) {
	            return [value];
	        });
        if( h_key.length > 0 ) {
        }
    });

	$('.overlay').show();


	//Now check if the url is hubspot contact page...
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		
    	chrome.tabs.sendMessage(tabs[0].id, {action: "check_content"}, function(response) {
    		console.log(response);
    		if(response.result == "yes") {
    			
    			console.log(JSON.parse(response.docs) );
    			var final_html = "<ul>";
    			var docs = JSON.parse(response.docs);
    			if(docs.hasOwnProperty('AAA')) {
    				var aaa = docs.AAA;

    				final_html = final_html + "<li data-jstree='{ \"opened\" : true }'>AAA";
    				if( aaa.length > 0 ){
	    				final_html = final_html + "<ul>";	
	    				aaa.forEach(function(value, index){
	    					if(value.hasOwnProperty('docTypeDesc')) {
								final_html = final_html + "<li data-jstree='{ \"opened\" : true }'>"+value.docTypeDesc;

								if(value.hasOwnProperty('documents')) {
									var doc = value.documents;
									if( doc.length > 0 ){
										final_html = final_html + "<ul>";
										doc.forEach(function(doc_val, doc_ind){
											if(doc_val.lateDoc== true) {
												doc_val.lateDoc = "X"
											}
												else{
													doc_val.lateDoc = ""
												}
											if(doc_val.hasOwnProperty('name') && doc_val.hasOwnProperty('downloadUrl')) {
												final_html = final_html + "<li data-jstree='{ \"icon\" : \"fa fa-file-pdf-o\" }' data-value='https://aaa-nynf.modria.com"+doc_val.downloadUrl+"'><a href='https://aaa-nynf.modria.com"+doc_val.downloadUrl+"'>"+doc_val.name+" <span style='font-size:0.7em'>"+doc_val.numOfPages+" pages - "
													+new Date(doc_val.createdDate).toLocaleString('en-US',  {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })
													+" <span style='font-size:1.75em'><span style='color:Red'>"+doc_val.lateDoc+"</span></a></li>";
											}
										});
										final_html = final_html + "</ul>";
									}
								}

								final_html = final_html + "</li>";
	    					}
	    				});
	    				final_html = final_html + "</ul>";
	    			}
	    			final_html = final_html + "</li>";
    			}

    			if(docs.hasOwnProperty('Claimant')) {
    				var Claimant = docs.Claimant;

    				final_html = final_html + "<li data-jstree='{ \"opened\" : true }'>Claimant";
    				if( Claimant.length > 0 ){
	    				final_html = final_html + "<ul>";	
	    				Claimant.forEach(function(value, index){
	    					if(value.hasOwnProperty('docTypeDesc')) {
								final_html = final_html + "<li data-jstree='{ \"opened\" : true }'>"+value.docTypeDesc;

								if(value.hasOwnProperty('documents')) {
									var doc = value.documents;
									if( doc.length > 0 ){
										final_html = final_html + "<ul>";
										doc.forEach(function(doc_val, doc_ind){
											if(doc_val.lateDoc== true) {
												doc_val.lateDoc = "X"
											}
												else{
													doc_val.lateDoc = ""
												}
											if(doc_val.hasOwnProperty('name') && doc_val.hasOwnProperty('downloadUrl')) {
												final_html = final_html + "<li data-jstree='{ \"icon\" : \"fa fa-file-pdf-o\" }' data-value='https://aaa-nynf.modria.com"+doc_val.downloadUrl+"'><a href='https://aaa-nynf.modria.com"+doc_val.downloadUrl+"'>"+doc_val.name+" <span style='font-size:0.7em'>"+doc_val.numOfPages+" pages - "
													+new Date(doc_val.createdDate).toLocaleString('en-US',  {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })
													+" <span style='font-size:1.75em'><span style='color:Red'>"+doc_val.lateDoc+"</span></a></li>";
											}
										});
										final_html = final_html + "</ul>";
									}
								}

								final_html = final_html + "</li>";
	    					}
	    				});
	    				final_html = final_html + "</ul>";
	    			}
	    			final_html = final_html + "</li>";
    				
    			}

    			if(docs.hasOwnProperty('Respondent')) {
    				var Respondent = docs.Respondent;

    				final_html = final_html + "<li data-jstree='{ \"opened\" : true }'>Respondent";
    				if( Respondent.length > 0 ){
	    				final_html = final_html + "<ul>";	
	    				Respondent.forEach(function(value, index){
	    					if(value.hasOwnProperty('docTypeDesc')) {
								final_html = final_html + "<li data-jstree='{ \"opened\" : true }'>"+value.docTypeDesc;

								if(value.hasOwnProperty('documents')) {
									var doc = value.documents;
									if( doc.length > 0 ){
										final_html = final_html + "<ul>";
										doc.forEach(function(doc_val, doc_ind){
											if(doc_val.lateDoc == true) {
												doc_val.lateDoc = "X"
											}
												else{
													doc_val.lateDoc = ""
												}
											if(doc_val.hasOwnProperty('name') && doc_val.hasOwnProperty('downloadUrl')) {
												final_html = final_html + "<li data-jstree='{ \"icon\" : \"fa fa-file-pdf-o\" }' data-value='https://aaa-nynf.modria.com"+doc_val.downloadUrl+"'><a href='https://aaa-nynf.modria.com"+doc_val.downloadUrl+"'>"+doc_val.name+" <span style='font-size:0.7em'>"+doc_val.numOfPages+" pages - "
													+new Date(doc_val.createdDate).toLocaleString('en-US',  {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })
													+" <span style='font-size:1.75em'><span style='color:Red'>"+doc_val.lateDoc+"</span></a></li>";
											}
												
										});
										final_html = final_html + "</ul>";
									}
								}

								final_html = final_html + "</li>";
	    					}
	    				});
	    				final_html = final_html + "</ul>";
	    			}
	    			final_html = final_html + "</li>";
    				
    			}

				if(docs.hasOwnProperty('Arbitrator')) {
    				var Arbitrator = docs.Arbitrator;

    				final_html = final_html + "<li data-jstree='{ \"opened\" : true }'>Arbitrator";
    				if( Arbitrator.length > 0 ){
	    				final_html = final_html + "<ul>";	
	    				Arbitrator.forEach(function(value, index){
	    					if(value.hasOwnProperty('docTypeDesc')) {
								final_html = final_html + "<li data-jstree='{ \"opened\" : true }'>"+value.docTypeDesc;

								if(value.hasOwnProperty('documents')) {
									var doc = value.documents;
									if( doc.length > 0 ){
										final_html = final_html + "<ul>";
										doc.forEach(function(doc_val, doc_ind){
											if(doc_val.lateDoc == true) {
													doc_val.lateDoc ="X"
													
												}
												else{
													doc_val.lateDoc = ""
												}
											if(doc_val.hasOwnProperty('name') && doc_val.hasOwnProperty('downloadUrl')) {
												final_html = final_html + "<li data-jstree='{ \"icon\" : \"fa fa-file-pdf-o\" }' data-value='https://aaa-nynf.modria.com"+doc_val.downloadUrl+"'><a href='https://aaa-nynf.modria.com"+doc_val.downloadUrl+"'>"+doc_val.name+" <span style='font-size:0.7em'>"+doc_val.numOfPages+" pages - "
													+new Date(doc_val.createdDate).toLocaleString('en-US',  {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })
													+" <span style='font-size:1.75em'><span style='color:Red'>"+doc_val.lateDoc+"</span></a></li>";
											}
										});
										final_html = final_html + "</ul>";
									}
								}

								final_html = final_html + "</li>";
	    					}
	    				});
	    				final_html = final_html + "</ul>";
	    			}
	    			final_html = final_html + "</li>";
    				
    			}

    			$('.overlay').hide();

    			$('#jstree1').html(final_html);

    			/*$('#treeview_checkbox').treeview({
	                debug : true,
	                //data : ['links', 'Do WHile loop']
	            });
	            $('#show-values').on('click', function(){ 
	                $('#values').text(
	                    $('#treeview_checkbox').treeview('selectedValues')
	                );
	            });*/
	          //jstree_instance =  $('#jstree1').jstree({'plugins':["wholerow","checkbox"]});
	          jstree_instance =  $('#jstree1').jstree({'plugins':["wholerow","checkbox"]});


    		} else {
    			$('.overlay').hide();
    		}
    	});
    });


$('body').on('click', '#sub_btn', function(){
	var checked_ids = []; 
	jstree_instance = $('#jstree1').jstree(true);
    /*$("#jstree1").jstree("get_checked",null,true).each 
        (function () { 
            checked_ids.push(this.id); 
        }); */
        /*console.log(jstree_instance);
        console.log(jstree_instance.get_checked());
        console.log(jstree_instance.get_selected());*/

    var selected_array =  jstree_instance.get_checked();

    if(selected_array.length > 0){
    	selected_array.forEach(function(doc_val, doc_ind){
        	var res = doc_val.split("_");
        	checked_ids.push(parseInt(res[1]));
        });
    
        checked_ids.sort(function(a, b){return a-b});
    
        console.log(checked_ids.sort(function(a, b){return a-b}));
        console.log(checked_ids);

        var pdfs = [];

        //window.open(url, '_blank');window.open(url, '_blank');

        checked_ids.forEach(function(doc_val, doc_ind){
        	
        	var pdf_url = $('#j1_'+doc_val).data('value');
        	if(pdf_url != ""){
        	        	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        			
        	    			chrome.tabs.sendMessage(tabs[0].id, {action: "open_url", url: pdf_url}, function(response) {
        	    				
        	    			});
        	    		});}

            pdfs.push(pdf_url);

        });

        console.log(pdfs);



        return;



        /*$.ajax({
            type:  'POST',
            url:  'URL' ,
            data: {pdfs:pdfs},
                dataType: 'JSON',
            success: function (data, textStatus, jqXHR) {

                console.log(data);

            },error: function(data, textStatus, jqXHR) {
                console.log(data);
            }
        });*/

        return;
    }
});


});