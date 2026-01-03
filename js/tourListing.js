var $placeHolder = $("#placeholder"),
		handlebarsTemplate = $("#handlebars-template").html(),
		templateCompile = Handlebars.compile(handlebarsTemplate),
		data = {
			"listings" : [ 
				{
				"location": "seoul, south korea",
				"date": "29 march",
				},
				{
				"location": "taipei, taiwan",
				"date": "30 march",
				},
				{
				"location": "osaka, japan",
				"date": "1 april",
				},
				{
				"location": "koto city, japan",
				"date": "2 april",
				},
				{
				"location": "warsaw, poland",
				"date": "12 april",
				},
				{
				"location": "brussels, belgium",
				"date": "13 april",
				},
				{
				"location": "lisbon, portugal",
				"date": "14 april",
				},
				{
				"location": "london, united kingdom",
				"date": "17 april",
				},
				{
				"location": "bern, switzerland",
				"date": "18 april",
				},
				{
				"location": "krems an der donau, austria",
				"date": "8 may",
				},
				{
				"location": "new york city, united states",
				"date": "10 may",
				},
				{
				"location": "los angeles, united states",
				"date": "11 may",
				},
				
			]
		}

$placeHolder.html(templateCompile(data));



