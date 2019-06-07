/*Made by 93951230 with no rights*/
			function dirt(X, Y) {
                this.ID = "dirt";
                this.light = 4;
                this.countX = X;
                this.countY = Y;
				this.breakTimeF = 3;
                this.breakTime = 3;
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
                    ctx.globalAlpha = 1 - (this.light / 4);
                    ctx.fillRect((this.x - ((usualLen + 1) / 2)) + XdrawVar, (this.y - ((usualLen + 1) / 2)) + YdrawVar, usualLen + 1, usualLen + 1);
                    ctx.globalAlpha = 1.0;
                }
            }
            function rock(X, Y) {
                this.ID = "rock";
                this.light = 4;
                this.countX = X;
                this.countY = Y;
				this.breakTimeF = 7;
                this.breakTime = 7;
                this.collideVar = null;
                this.x = 22.5 + (Y * (usualLen));
                this.y = 405 + (X * (usualLen));
                this.update = function () { }
                this.draw = function () {
                    ctx.drawImage(imgs["Block"][1], (this.x - (usualLen / 2)) + XdrawVar, (this.y - (usualLen / 2)) + YdrawVar);
                    ctx.globalAlpha = this.breakPhase;
                    ctx.fillRect((this.x - ((usualLen - ((1 - this.breakPhase) * usualLen))) / 2) + XdrawVar, (this.y - ((usualLen - ((1 - this.breakPhase) * usualLen)) / 2)) + YdrawVar, usualLen - ((1 - this.breakPhase) * usualLen), usualLen - ((1 - this.breakPhase) * usualLen));
                    ctx.globalAlpha = 1 - (this.light / 4);
                    ctx.fillRect((this.x - ((usualLen + 1) / 2)) + XdrawVar, (this.y - ((usualLen + 1) / 2)) + YdrawVar, usualLen + 1, usualLen + 1);
                    ctx.globalAlpha = 1.0;
                }
            }
            function grass(X, Y)
            {
                this.ID = "grass";
                this.light = 4;
                this.countX = X;
                this.countY = Y;
				this.breakTimeF = 2;
                this.breakTime = 2;
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
                    ctx.globalAlpha = 1 - (this.light / 4);
                    ctx.fillRect((this.x - ((usualLen + 1) / 2)) + XdrawVar, (this.y - ((usualLen + 1) / 2)) + YdrawVar, usualLen + 1, usualLen + 1);
                    ctx.globalAlpha = 1.0;
                }
            }
            function normal_tree(X, Y)
            {
				this.notCollide = true;
                this.ID = "normal_tree";
                this.light = -1;
                this.countX = X;
                this.countY = Y;
                this.breakTimeF = 7;
				this.breakTime = 7;
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
                    }
                }
            }
            function air(X, Y) {
				this.notCollide = true;
                this.ID = "air";
                this.light = -1;
                this.countX = X;
                this.countY = Y;
                this.breakTime = Infinity;
                this.x = 22.5 + (i * (usualLen));
                this.y = 405 + (j * (usualLen));
                this.update = function () { }
                this.draw = function () { }
			}
            