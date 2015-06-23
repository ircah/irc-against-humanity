$(document).ready(function () {
	$.get("https://raw.githubusercontent.com/ircah/irc-against-humanity/master/irc-against-humanity.json", function (data) {
		var data = JSON.parse(data);

		$.each(data.questions, function (i) {
			$("#black-cards .row").append("<div class='card black-card col-xs-6 col-sm-4 col-lg-4 text-center'>" + data.questions[i].text.replace(/%s/g, "<span class='placeholder'>_____</span>") + "</div>")
		});

		$.each(data.answers, function (i) {
			$("#white-cards .row").append("<div class='card white-card col-xs-6 col-sm-4 col-lg-4 text-center'>" + data.answers[i] + ".</div>")
		});
	});
});