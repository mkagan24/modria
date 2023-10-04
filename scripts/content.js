window.documents = "";
$(document).ready(function(){

    var pathArray = window.location.pathname.split( '/' );
    if( window.location.host == "aaa-nynf.modria.com" && pathArray.length >= 3) {
        if( pathArray[1] == "case") {
             $.ajax({
                type:  'GET',
                url:  'https://aaa-nynf.modria.com/docMgmt/loadDocumentView?caseId='+pathArray[2]+'&allVals=' ,
                success: function (data, textStatus, jqXHR) {

                    window.documents = data;

                },error: function(data, textStatus, jqXHR) {
                    window.documents = "";
                }
            });
        }

    }

    

    //When the keys provided...
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        console.log(request.action);
      
        if( request.action == "check_content" ) {
            console.log('sdfasdfasdf');
            var pathArray = window.location.pathname.split( '/' );
            console.log(pathArray);
            if( window.location.host == "aaa-nynf.modria.com" && pathArray.length >= 3) {
                if( pathArray[1] == "case") {

                    sendResponse({result: "yes", docs: window.documents});
                    
                } else {
                    sendResponse({result: "no"});
                }
            } else {
                sendResponse({result: "no"});
            }
        }
        if( request.action == "open_url") {
            window.open(request.url, '_blank');
        }

    });


    

});

//End of hubspot contacts content js code.