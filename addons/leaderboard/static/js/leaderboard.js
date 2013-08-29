// sync player from server
$(function() {
	var selected = null;
	var selected_name = null;

	// init player
	ekitjs.pool('leaderboard.model.player').read({}, {
		_id: 1
	}, function(e, data) {
		if(data.length === 0) {
			_.each(["Ada Lovelace", "Grace Hopper", "Marie Curie", "Carl Friedrich Gauss", "Nikola Tesla", "Claude Shannon"], function(name) {
				ekitjs.pool('leaderboard.model.player').create({
					name: name,
					score: Math.floor(Math.random() * 10) * 5
				});
			});
		};
	});

	// sync data
	ekitjs.sync('leaderboard.model.player').read({}, {
		sort: {
			score: -1,
			name: 1
		}
	}, function(e, data) {
		$('.leaderboard').empty().html((function() {
			var res = '';
			_.each(data, function(item) {
				res += '<div class="player ' + (item.name === selected_name ? 'selected' : '') + '"><span class="name">' + item.name + '</span><span class="score">' + item.score + '</span></div>';
			});
			return res;
		})());
	});

	$('.leaderboard').delegate('.player', 'click', function() {
		$('.player').removeClass('selected');
		$(this).addClass('selected');
		$('.none').hide();
		$('.details').show();
		selected = $(this);
		selected_name = selected.children('.name').html();
		$('.details .name').html($(this).children('.name').html());
	});

	$('.details input.inc').click(function() {
		ekitjs.pool('leaderboard.model.player').update({
			name: selected_name
		}, {
			$inc: {
				score: 5
			}
		});
	});
});
