var character = new function () {
                this.jCool = 0;
                this.ableA = 0;
                this.ableD = 0;
                this.upForce = 0;
                this.downForce = 0;
                this.height = 64;
                this.width = 32;
                this.collideVar = null;
                this.x = null;
                this.y = null;
                this.draw = function () {
                    ctx.beginPath();
                    ctx.rect(this.x - (this.width / 2), this.y - (this.height / 2), this.width, this.height);
                    ctx.fillStyle = "#141012";
                    ctx.fill();
                    ctx.closePath();
                }
                this.updating = function () {
                    CamX = -((XdrawVar / 45) - offset_X);
                    CamY = ((YdrawVar / 45));
                    //controll about
                    if (this.ableA != 0) {
                        this.ableA -= 1;
                    }
                    if (this.ableD != 0) {
                        this.ableD -= 1;
                    }
                    //jumping about
                    if (this.jumpTime != 0) {
                        this.jumpTime -= 1;
                    }
                    if (this.jCool != 0) {
                        this.jCool -= 1;
                    }
                    if (!(this.jumpTime)) {
                        if (this.downForce == 0) {
                            this.downForce = 2;
                        }
                    }
                    if (this.upForce != 0) {
                        this.upForce *= 0.99;
                    }
                    if (this.downForce < 10) {
                        this.downForce *= 1.02;
                    }
                    //falling
                    YdrawVar += this.upForce - this.downForce;
                }
                this.getXcollide = function () {
                    if (this.x > this.collideO.x + XdrawVar) {
                        this.ableA = 10;
                    }
                    if (this.x < this.collideO.x + XdrawVar) {
                        this.ableD = 10;
                    }
                }
                this.getYcollide = function () {
                    if (this.y > this.collideO.y + YdrawVar) {
                        this.downForce = 0;
                        this.upForce = 0;
                        this.jumpTime = 8;
                        this.jCool = 10;
                    }
                    else {
                        this.downForce = 0;
                        this.upForce = 0;
                        this.jumpTime = 8;
                        this.jumpAlready = false;
                    }
                }
                this.controlling = function () {
                    if (keyPressed["d"]) {
                        if (this.ableD == 0) {
                            XdrawVar -= 3.5;
                        }
                    }
                    if (keyPressed["a"]) {
                        if (this.ableA == 0) {
                            XdrawVar += 3.5;
                        }
                    }
                    if (keyPressed["s"]) { }
                    if (keyPressed[" "] || keyPressed["w"]) {
                        if (((this.upForce <= 6) && (!(this.jumpAlready))) && ((this.jCool == 0) && (this.jumpTime != 0))) {
                            this.upForce += 6;
                            this.jumpAlready = true;
                        }
                    }
                }
            }