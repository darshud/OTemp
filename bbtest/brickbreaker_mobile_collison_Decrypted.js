	function collisonDetection()

	{

		for(var c=0;c<brickColCnt;c++)

		{

			for(var r=0;r<brickRCnt;r++)

			{

				var b=bricks[c][r];

				if(b.status==1)

				{

					if(x>b.x && x< b.x+brickW && y>b.y && y< b.y+brickH )

					{

						PlaySoundWav("brick1");	//hitting a brick

						dy=-dy;

						b.status=0;

						var chosenbrick = bricks[c][r];

						if (chosenbrick.special1 == "+ Life ") 

						{ 

							lives++; 

							//PlaySoundMp3("lifeMore1"); 

							fnSpeed("D"); 

						}



						if (chosenbrick.special1 == "- Life ") 

						{ 

							lives--; 

							fnSpeed("I"); 

						}



						if (chosenbrick.special1 == "+ Speed") 

						{ 

							fnSpeed("I"); 

						}



						if (chosenbrick.special1 == "- Speed") 

						{ 

							fnSpeed("D") 

						}



						score+=chosenbrick.special2;

						if(totalPossibleScore==score)

						{

							//PlaySoundWav("win1");	//winning

							window.setTimeout(function(){fnAlert("YOU WIN!"); document.location.reload();},300);

						}



					}

				}

			}

		}

	}
