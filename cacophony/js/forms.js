$(function() {  

	$("#contact").on("valid invalid submit", function(g){
		g.stopPropagation();
		g.preventDefault();
		if (g.type === "valid"){
			var form = $("#contact");
			var post_url = form.attr('action');
			var post_data = form.serialize();
			$.ajax({
				type: 'POST',
				url: post_url,
				data: post_data,
				dataType: "json",
				success: function(data) {
					$("#contact-heading").hide();
					if (data.message == "success") {
						$("#contact").fadeOut(500, function(){
							$("#success").fadeIn(500);
						});
					} else {
						$("#contact").fadeOut(500, function(){
							$("#failure").fadeIn(500);
						});
					}
				}
			});
			return false;
		}
	});

	$("#puzzle").on("valid invalid submit", function(g){
		g.stopPropagation();
		g.preventDefault();
		if (g.type === "valid"){
			var form = $("#puzzle");
			var post_url = form.attr('action');
			var post_data = form.serialize();
			$.ajax({
				type: 'POST',
				url: post_url,
				data: post_data,
				dataType: "json",
				success: function(data) {
					if (data.message == "success") {
						window.location.assign("/pdf/puzzles.pdf");
					} else {
						$("#puzzle").fadeOut(500, function(){
							$("#failure").fadeIn(500);
						});
					}
				}
			});
			return false;
		}
	});
	
});