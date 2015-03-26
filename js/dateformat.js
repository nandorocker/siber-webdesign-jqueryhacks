$(function(){
	// CODE THAT CYCLES THROUGH ALL DATES
	$("time").filter(".event-date").each(function(){
		var currentDateAttr = $(this).attr("datetime");
		var newDate = new Date(currentDateAttr).toString("dddd, dd. MMMM yyyy");

		$(this).text(newDate);
	});
});