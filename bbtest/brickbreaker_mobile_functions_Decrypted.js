	function mouseMoveHandler(e)
	{
		var relativeX = e.clientX-canvas.offsetLeft;
		if(relativeX>0+paddleW/2 && relativeX < canvas.width-paddleW/2)
		{
			paddleX= relativeX-paddleW/2;
		}
	}

	function number_format(val, decimals)
	{
	    val = parseFloat(val);
	    return val.toFixed(decimals);
	}

	function fnAlert(msg)
	{
		if (lives <= 0) { lives = 0 }
		var livesScore = lives * 10;
		var roundScore = number_format((score * 100)/totalPossibleScore, 2);
		var totScore = number_format(((score * 100)/totalPossibleScore)+livesScore, 2);

		for(let i = 0; i < radioButtons.length; i++)
		{
			if(radioButtons[i].checked == true)
			{
				txtComplexity = rComplexity[i];
			}
		}

		var str0 = msg + "\n";
		var str1 = "\n Complexity:    " + txtComplexity
		var str2 = "\n Raw Score:     " + score + "/" + totalPossibleScore + " = " + roundScore + "/100";
		var str3 = "\n Lives left:        " + lives;
		var str4 = "\n Total Score:    " + totScore;
		var str5 = "\n Time elapsed: " + elapsed_Mins + " Mins, " + elapsed_Secs + " Secs, and " +  elapsed_MSecs + " MSecs ";

		alert(str0 + str1 + str2 + str3 + str4 + str5);
	}

	function fnSpeed(s)
	{
		if (s == "I") 
		{ 
			dy = dy*(((speed_increment-1) / 3)+1); dx = dx*(((speed_increment-1) / 3)+1); 
		}
		else 
		{ 
			dy = dy/speed_decrement; dx = dx/speed_decrement; 
		}
	}

	function keyDownHandler(e)
	{
		if(e.keyCode==39)
		{
			RKeyPressed=true;
		}
		else if(e.keyCode==37)
		{
			LKeyPressed=true;
		}
	}

	function keyUpHandler(e)
	{
		if(e.keyCode==39)
		{
			RKeyPressed=false;
		}
		else if(e.keyCode==37)
		{
			LKeyPressed=false;
		}
	}

	function display_c(start, tstart) 
	{
		window.start = parseFloat(start);
		var refresh = 0;
		if(start == 0) 
		{
			mytime = window.setTimeout(display_ct,0,tstart);
		}
		else 
		{
			mytime = window.setTimeout(display_ct,refresh,tstart);
		}
	}
