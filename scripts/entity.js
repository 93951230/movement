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
                this.upForce = 0;
                this.gravity = 0;
				this.Ycollision = false;
				this.rejumpSet = true;
                this.height = 64;
                this.width = 32;
                this.collideVar = null;
				this.drawImg = imgs["Entity"][0];
                this.draw = function () {
                    ctx.drawImage(this.drawImg,this.x - 16,this.y - 32);
                }
                this.updating = function () {
					if (keyPressed["KeyD"]) {
                        XdrawVar -= 3.5;
                    }
                    if (keyPressed["KeyA"]) {
                        XdrawVar += 3.5;
                    }
                    if (keyPressed["KeyS"]) { }
                    if (keyPressed["Space"] || keyPressed["KeyW"]) {
						if (this.rejumpSet) {
							this.upForce = 6;
							this.rejumpSet = false;
						}
                    }
					for (i = 1; i <= itembar_amount;i++) {
						if (keyPressed["Digit"+String(i)]) {
							itembar[selectedBar].selected = false;
							selectedBar = i-1;
							itembar[selectedBar].selected = true;
						}
					}
					//腳色控制
					this.Time += 1;
                    CamX = -((XdrawVar / 45) - offset_X);
                    CamY = ((YdrawVar / 45) + (Math.floor((768-canvas.height)/90)));
                    //一些更新
                    //falling
					for (i = (Math.floor(CamX) -1); i <= (Math.floor(CamX)+1); i++) {
                        for (j = (Math.floor(CamY)); j <= (Math.floor(CamY)+2); j++) {
                            if (itemLibrary[tiles[i][-j].fill.constructor.name]["Collide"]) {
								if (place_meeting(this.x,this.y+this.gravity,32,64,(tiles[i])[-j].fill.x + XdrawVar,(tiles[i])[-j].fill.y + YdrawVar,usualLen,usualLen)) {
									this.Ycollision = true;
									break;
								}
                            }
                        }
						if (this.Ycollision) {break;}
                    }
					if ((!(this.Ycollision)) && (this.gravity < 10)) {
						this.gravity += 0.1;
					}
					if (this.Ycollision) {
						this.gravity = 0;
					}
					YdrawVar += this.upForce - this.gravity;
					this.Ycollision = false;
                }
                this.getXcollide = function () {
                    if (this.x > this.collideO.x + XdrawVar) {
                    
                    }
                    if (this.x < this.collideO.x + XdrawVar) {
                    
                    }
                }
                this.getYcollide = function () {
                    if (this.y > this.collideO.y + YdrawVar) {
                        this.downForce = 0;
                        this.upForce = 0;
                        this.jumpTime = 8;
                    }
                    else {
                        this.downForce = 0;
                        this.upForce = 0;
                        this.jumpTime = 8;
                        this.jumpAlready = false;
                    }
                }
                this.controlling = function () {
                    if (keyPressed["KeyD"]) {
                        XdrawVar -= 3.5;
                    }
                    if (keyPressed["KeyA"]) {
                        XdrawVar += 3.5;
                    }
                    if (keyPressed["KeyS"]) { }
                    if (keyPressed["Space"] || keyPressed["KeyW"]) {
						if (this.rejumpSet) {
							this.upForce = 6;
							this.rejumpSet = false;
						}
                    }
					for (i = 1; i <= itembar_amount;i++) {
						if (keyPressed["Digit"+String(i)]) {
							itembar[selectedBar].selected = false;
							selectedBar = i-1;
							itembar[selectedBar].selected = true;
						}
					}
                }
			}
			/*
			for (i = (Math.floor(CamX) - 5); i <= (Math.floor(CamX) + 5); i++) {
                        for (j = (Math.floor(CamY) - 5); j <= (Math.floor(CamY) + 5); j++) {
							(tiles[i])[-j] = null;
                        }
                    } 
			
			*/