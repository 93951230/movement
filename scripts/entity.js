say = console.log;
/*
Made by 93951230 
whoever copy this file just for money gets curse by endless hell flame
*/
			var startButton = new function () {
                this.drawImg = document.getElementById("startImg");
                this.update = function () {
                    this.x = (canvas.width / 2)
                    this.y = (canvas.height / 2)
                }
                this.draw = function () {
                    ctx.drawImage(this.drawImg, this.x - 150, this.y - 50);
                }
            }
			function publicButton(Img,x,y,width,height,command,drawMethod) {
                this.drawImg = Img;
				this.height = height;
				this.width = width;
				this.x = x;
				this.y = y;
				this.command = command;
                this.draw = function () {
                    eval(drawMethod);
                }
            }
			//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			function itemdirt(count) {
			this.type = {"type":0,"set":true};
				if (Math.random() > 0.5) {
					this.drawImg = imgs["Item"][0];
				}
				else {
					this.drawImg = imgs["Item"][1];
				}
				this.count = count;
			}
			function itemrock(count) {
				this.type = {"type":0,"set":true};
				this.drawImg = imgs["Item"][2];
				this.count = count;
			}
			function itemgrass(count) {
				this.type = {"type":0,"set":true};
				this.drawImg = imgs["Item"][2];
				this.count = count;
			}
			function itemnormal_tree(count) {
				this.type = {"type":0,"set":true};
				this.drawImg = imgs["Item"][3];
				this.count = count;
			}
			function itemiron_pickaxe(count) {
				this.drawImg = imgs["Item"][4];
				this.count = count;
				this.type = {"type":1,"speed":5};
			}
			/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			function itemBar(hold) {
				this.x = (i*50)+10;
				this.selected = false;
				this.hold = hold;
				this.draw = function () {
					if (this.selected == true) {
						ctx.drawImage(imgs["Gui"][2],this.x,10);
					}
					else {
						ctx.drawImage(imgs["Gui"][1],this.x,10);
					}
					if (this.hold != null) {
						ctx.drawImage(this.hold.drawImg,this.x+10,20);
						ctx.fillStyle = "White";
						ctx.fillText(String(this.hold.count), this.x+5,50);
						ctx.fillStyle = "Black";
						if (this.selected == true) {
							ctx.drawImage(this.hold.drawImg,character.x,character.y);
						}
						if (this.hold.count <= 0) {
							this.hold = null;
						}
					}
				}
			}
			function itemBarIn(hold) {
				this.x = (i*50)+10;
				this.y = (j*50)+60;
				this.hold = hold;
				this.draw = function () {
					ctx.drawImage(imgs["Gui"][3],this.x,this.y);
					if (this.hold != null) {
						ctx.scale()
						ctx.drawImage(this.hold.drawImg,this.x+10,20);
						ctx.fillText(String(this.hold.count), this.x+15,70);
						if (this.hold.count <= 0) {
							this.hold = null;
						}
					}
				}
			}
			///////////////////////////////////////////////other
			//block
			var character = new function () {
				this.Time = 0;
				this.x = canvas.width/2;
				this.y = canvas.height/2;
                this.gravity = 0;
				this.up_force = 0;
				this.Ymeet_low = false;
				this.rejumpSet = true;
				//重力&跳躍
                this.height = 80;
                this.width = 40;
                this.collideVar = null;
				this.drawImg = imgs["Entity"][0];
                this.draw = function () {
                    ctx.drawImage(this.drawImg,this.x - this.width/2,this.y - this.height/2);
                }
                this.updating = function () {
					if (keyPressed["KeyD"]) {
						for (i = (Math.floor(CamX) -1); i <= (Math.floor(CamX)+1); i++) {
							for (j = (Math.floor(CamY)+1); j <= (Math.floor(CamY)+2); j++) {
								if (!(place_meeting(this.x+3.5,this.y-3,this.width,this.height,(tiles[i])[-j].fill.x + XdrawVar,(tiles[i])[-j].fill.y + YdrawVar,usualLen,usualLen))) {
									XdrawVar -= 3.5;
									i=Infinity;
									j=Infinity;
									break;
								}
								else {say("ok")}
							}
						}
                    }
                    if (keyPressed["KeyA"]) {
						for (i = (Math.floor(CamX) -1); i <= (Math.floor(CamX)+1); i++) {
							for (j = (Math.floor(CamY)+1); j <= (Math.floor(CamY)+2); j++) {
								if (!(place_meeting(this.x-3.5,this.y-3,this.width,this.height,(tiles[i])[-j].fill.x + XdrawVar,(tiles[i])[-j].fill.y + YdrawVar,usualLen,usualLen))) {
									XdrawVar += 3.5;
									i=Infinity;
									j=Infinity;
									break;
								}
							}
						}
                    }
                    if (keyPressed["KeyS"]) { }
                    if (keyPressed["Space"] || keyPressed["KeyW"]) {
						if (this.rejumpSet) {
							this.up_force = 8;
							this.rejumpSet = false;
						}//跳躍啥的
                    }
					for (i = 1; i <= itembar_amount;i++) {
						if (keyPressed["Digit"+String(i)]) {
							itembar[selectedBar].selected = false;
							selectedBar = i-1;
							itembar[selectedBar].selected = true;
						}
					}
					//<腳 色 控 制>
					this.Time += 1;
                    CamX = -((XdrawVar / 45) - offset_X);
                    CamY = ((YdrawVar / 45) + (Math.floor((768-canvas.height)/90)));
                    //一些更新
                    //falling
					if (this.up_force > 0) {
						this.up_force -= 0.3;
					}
					else {
						this.up_force = 0;
					}
					for (i = (Math.floor(CamX) -1); i <= (Math.floor(CamX)+1); i++) {
                        for (j = (Math.floor(CamY)); j <= (Math.floor(CamY)+2); j++) {
                            if (itemLibrary[tiles[i][-j].fill.constructor.name]["Collide"]) {
								if (place_meeting(this.x,this.y-2-this.up_force,this.width,this.height,(tiles[i])[-j].fill.x + XdrawVar,(tiles[i])[-j].fill.y + YdrawVar,usualLen,usualLen)) {
									this.Ymeet_high = true;
									say(this.up_force);
									this.up_force = 0;
									YdrawVar -= 5;
									break;
								}
								if (place_meeting(this.x,this.y+this.gravity,this.width,this.height,(tiles[i])[-j].fill.x + XdrawVar,(tiles[i])[-j].fill.y + YdrawVar,usualLen,usualLen)) {
									this.Ymeet_low = true;
									break;
								}
								if (place_meeting(this.x,this.y+this.gravity,this.width,this.height,(tiles[i])[-j].fill.x + XdrawVar,(tiles[i])[-j].fill.y + YdrawVar,usualLen,usualLen)) {
									this.Ymeet_low = true;
									break;
								}
                            }
                        }
						if (this.Ymeet_low) {break;}
                    }
					if (this.Ymeet_high) {
						this.gravity = 0;
						this.up_force = 0;
					}
					if ((!(this.Ymeet_low)) && (this.gravity < 10)) {
						this.gravity += 0.1;
					}
					if (this.Ymeet_low) {
						this.gravity = 0;
						this.Ymeet_low = true;
						this.rejumpSet = true;
					}
					YdrawVar += this.up_force - this.gravity;
					this.Ymeet_low = false;
					this.Ymeet_high = false;
                }
			}
			/*
			for (i = (Math.floor(CamX) - 5); i <= (Math.floor(CamX) + 5); i++) {
                        for (j = (Math.floor(CamY) - 5); j <= (Math.floor(CamY) + 5); j++) {
							(tiles[i])[-j] = null;
                        }
                    } 
			
			*/