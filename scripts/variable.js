/*Made by 93951230 with no rights*/
            var canvas = document.getElementById("Canvas");
            var ctx = canvas.getContext("2d");
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
            canvas.height = innerHeight;
            canvas.width = innerWidth;
            var started = false;
            //other
            const usualLen = 45;
            var CamX;
            var CamY;
            var XdrawVar = 0;
            var YdrawVar = 0;
			var progress = 0;
            var imgs = { "Block": [], "Other": [], "Entity": []};
            imgs["Other"][0] = document.getElementById("background");
            imgs["Block"][0] = [];
            imgs["Block"][0][0] = document.getElementById("dirt_1");
            imgs["Block"][0][1] = document.getElementById("dirt_2");
            imgs["Block"][1] = document.getElementById("rock");
            imgs["Block"][2] = document.getElementById("grass");
            imgs["Block"][3] = document.getElementById("normal_tree");
			imgs["Entity"][0] = document.getElementById("character");
			imgs["Entity"][1] = document.getElementById("itembar");
			imgs["Entity"][2] = document.getElementById("itembar_2");
            var keyPressed = {}
			//world generate
			var tileWi = 2048;
			var tileHi = 512;
			var itembar_amount = 10;
            var randomNumber = Math.floor(Math.random()*10000000)/10000000;
			///////
            var tiles = [];
            function tile(filled, X, Y) {
                this.fill = new filled(X, Y);
            }
            function canvasUpdate() {
                if (!(started)) {
                    canvas.height = innerHeight;
                    canvas.width = innerWidth;
                }
            }
            function Load(arg) {
                
            }
            function ligthTest(block) {
                if (((tiles[block.countY - 1])[block.countX].fill.light == -1) || ((tiles[block.countY + 1])[block.countX].fill.light == -1) || ((tiles[block.countY])[block.countX - 1].fill.light == -1) || ((tiles[block.countY])[block.countX + 1].fill.light == -1)) {
                    block.light = 4;
                }
                else {
                    if (Math.max((tiles[block.countY + 1])[block.countX].fill.light, (tiles[block.countY - 1])[block.countX].fill.light, (tiles[block.countY])[block.countX + 1].fill.light, (tiles[block.countY])[block.countX - 1].fill.light) != 0) {
                        block.light = (Math.max((tiles[block.countY + 1])[block.countX].fill.light, (tiles[block.countY - 1])[block.countX].fill.light, (tiles[block.countY])[block.countX + 1].fill.light, (tiles[block.countY])[block.countX - 1].fill.light) - 1)
                    }
                }
            }
            function breakTest(block, maxli) {
                if (block.breakTime <= 0) {
                    (tiles[block.countY])[block.countX] = new tile(air, block.countX, block.countY);
                }
                block.breakPhase = 1 - (block.breakTime / maxli);
            }