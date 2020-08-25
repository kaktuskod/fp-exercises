$.ajax({url : "https://shop.nostayle.com/wheel/turn?_token=W8SHXKTitJP9MfIjHg9qxtiEqu7rGlVo",
		success : function (data) {
		canTurn = false;
										$('#win_item').text("");
										var d = data.split('|');
										p["stopImageNumber"] = Number(d[0]);
										$(".roulette-inner").html(d[1]);
										p["itemCount"] = d[2];
										p["itemName"] = d[3];
										rouletter.roulette('option', p);
										rouletter.roulette('start');
										rouletter.roulette(p);
										updateBalancesAjax();
										wheelTries = wheelTries + 1;
										if(wheelTries > 100)
										{
											wheelTries = 0;
										}
										$('#wheelTries').text(wheelTries);

                        }
});