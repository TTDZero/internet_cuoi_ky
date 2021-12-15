var table;
var urlUsers = "http://localhost:3000/users";
function initTableData() {
    //Data from an URL ?
    $.get(urlUsers, function(responseData) {
    	//Mofify "responseData" before showing ?
    	var modifiedUsers = responseData.map(eachUser => {
    		return {
    			name: eachUser.name,
  				location: eachUser.location,
    		};
    	});
    	table = $('#users').DataTable({
    	"processing": true,
    	data: modifiedUsers,
    	columns:[	
    		{ data: 'name' },
    		{ data: 'location' },
    	]
    	});
    }).fail(function() {
    	alert( "Cannot get data from URL" );
    });
}

$(document).ready(function (){
	initTableData();
	$("#list-header").on({
		mouseenter: function() {
			$(this).css("background-color", "lightgray");
		},
		mouseleave: function(){
        	$(this).css("background-color", "lightblue");
    	}, 
	});
});



