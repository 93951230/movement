/*
Made by 93951230 
whoever copy this file just for money gets curse by endless hell flame
*/
			function dirt(X, Y) {
                this.ID = "dirt";
                this.light = 8;
                this.countX = X;
                this.countY = Y;
                this.breakTime = itemLibrary[this.ID]["breakFull"];
                this.collideVar = null;
                this.x = 22.5 + (Y * (usualLen));
                this.y = 405 + (X * (usualLen));
                if (Math.random() > 0.5) {
                    this.drawImg = imgs["Block"][0][0];
                }
                else {
                    this.drawImg = imgs["Block"][0][1];
                }
                this.getcollide = function () { }
                this.update = function () { }
                this.draw = function () {
                    ctx.drawImage(this.drawImg, (this.x - (usualLen / 2)) + XdrawVar, (this.y - (usualLen / 2)) + YdrawVar);
                    ctx.globalAlpha = this.breakPhase;
                    ctx.fillRect((this.x - ((usualLen - ((1 - this.breakPhase) * usualLen))) / 2) + XdrawVar, (this.y - ((usualLen - ((1 - this.breakPhase) * usualLen)) / 2)) + YdrawVar, usualLen - ((1 - this.breakPhase) * usualLen), usualLen - ((1 - this.breakPhase) * usualLen));
                    ctx.globalAlpha = 1 - (this.light / 8);
                    ctx.fillRect((this.x - ((usualLen + 1) / 2)) + XdrawVar, (this.y - ((usualLen + 1) / 2)) + YdrawVar, usualLen + 1, usualLen + 1);
                    ctx.globalAlpha = 1.0;
                }
            }
            function rock(X, Y) {
                this.ID = "rock";
                this.light = 8;
                this.countX = X;
                this.countY = Y;
                this.breakTime = itemLibrary[this.ID]["breakFull"];
                this.collideVar = null;
                this.x = 22.5 + (Y * (usualLen));
                this.y = 405 + (X * (usualLen));
                this.update = function () { }
                this.draw = function () {
                    ctx.drawImage(imgs["Block"][1], (this.x - (usualLen / 2)) + XdrawVar, (this.y - (usualLen / 2)) + YdrawVar);
                    ctx.globalAlpha = this.breakPhase;
                    ctx.fillRect((this.x - ((usualLen - ((1 - this.breakPhase) * usualLen))) / 2) + XdrawVar, (this.y - ((usualLen - ((1 - this.breakPhase) * usualLen)) / 2)) + YdrawVar, usualLen - ((1 - this.breakPhase) * usualLen), usualLen - ((1 - this.breakPhase) * usualLen));
                    ctx.globalAlpha = 1 - (this.light / 8);
                    ctx.fillRect((this.x - ((usualLen + 1) / 2)) + XdrawVar, (this.y - ((usualLen + 1) / 2)) + YdrawVar, usualLen + 1, usualLen + 1);
                    ctx.globalAlpha = 1.0;
                }
            }
            function grass(X, Y)
            {
                this.ID = "grass";
                this.light = 8;
                this.countX = X;
                this.countY = Y;
                this.breakTime = itemLibrary[this.ID]["breakFull"];
                this.collideVar = null;
                this.x = 22.5 + (Y * (usualLen));
                this.y = 405 + (X * (usualLen));
                this.update = function () { }
                this.draw = function () {
                    if (this.light != 0) {
                        ctx.drawImage(imgs["Block"][2], (this.x - (usualLen / 2)) + XdrawVar, (this.y - (usualLen / 2)) + YdrawVar);
                        ctx.globalAlpha = this.breakPhase;
                        ctx.fillRect((this.x - ((usualLen - ((1 - this.breakPhase) * usualLen))) / 2) + XdrawVar, (this.y - ((usualLen - ((1 - this.breakPhase) * usualLen)) / 2)) + YdrawVar, usualLen - ((1 - this.breakPhase) * usualLen), usualLen - ((1 - this.breakPhase) * usualLen));
                    }
                    ctx.globalAlpha = 1 - (this.light / 8);
                    ctx.fillRect((this.x - ((usualLen + 1) / 2)) + XdrawVar, (this.y - ((usualLen + 1) / 2)) + YdrawVar, usualLen + 1, usualLen + 1);
                    ctx.globalAlpha = 1.0;
                }
            }
            function normal_tree(X, Y)
            {
                this.ID = "normal_tree";
                this.light = 8;
                this.countX = X;
                this.countY = Y;
				this.breakTime = itemLibrary[this.ID]["breakFull"];
                this.collideVar = null;
                this.x = 22.5 + (Y * (usualLen));
                this.y = 405 + (X * (usualLen));
                this.update = function () { }
                this.draw = function ()
                {
                    if (this.light != 0)
                    {
                        ctx.drawImage(imgs["Block"][3], (this.x - (usualLen / 2)) + XdrawVar, (this.y - (usualLen / 2)) + YdrawVar);
                        ctx.globalAlpha = this.breakPhase;
                        ctx.fillRect((this.x - ((usualLen - ((1 - this.breakPhase) * usualLen))) / 2) + XdrawVar, (this.y - ((usualLen - ((1 - this.breakPhase) * usualLen)) / 2)) + YdrawVar, usualLen - ((1 - this.breakPhase) * usualLen), usualLen - ((1 - this.breakPhase) * usualLen));
						ctx.globalAlpha = 1;
                    }
					itemLibrary[this.ID]["method"](this.countX,this.countY);
                }
            }
            function air(X, Y) {
				this.notCollide = true;
                this.ID = "air";
                this.light = 8;
                this.countX = X;
                this.countY = Y;
                this.breakTime = Infinity;
                this.update = function () { }
                this.draw = function () { }
			}
            