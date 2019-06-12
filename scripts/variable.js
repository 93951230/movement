/*Made by 93951230 with no rights*/
            var canvas = document.getElementById("Canvas");
            var ctx = canvas.getContext("2d");
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
            var imgs = { "Block": [], "Gui": [], "Entity": [], "Item": []};
            imgs["Gui"][0] = document.getElementById("background");
			imgs["Gui"][1] = document.getElementById("itembar");
			imgs["Gui"][2] = document.getElementById("itembar_2");
            imgs["Block"][0] = [];
            imgs["Block"][0][0] = document.getElementById("dirt_1");
            imgs["Block"][0][1] = document.getElementById("dirt_2");
            imgs["Block"][1] = document.getElementById("rock");
            imgs["Block"][2] = document.getElementById("grass");
            imgs["Block"][3] = document.getElementById("normal_tree");
			imgs["Entity"][0] = document.getElementById("character");
			imgs["Item"][0] = document.getElementById("dirt_1_drop");
			imgs["Item"][1] = document.getElementById("dirt_2_drop");
			imgs["Item"][2] = document.getElementById("grass_drop");
            var keyPressed = {}
			//world generate
			var tileWi = 2048;
			var tileHi = 512;
			var selectedBar = 0;
			var itembar_amount = 8;
            var randomNumber = Math.floor(Math.random()*10000000)/10000000;
			///////
            var tiles = [];
            function tile(filled, X, Y) {
                this.fill = new filled(X, Y);
            }-
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
			var item = [];
            function breakTest(block, maxli, ID) {
                if (block.breakTime <= 0) {
                    (tiles[block.countY])[block.countX] = new tile(air, block.countX, block.countY);
					gainItem(ID,1);
                }
                block.breakPhase = 1 - (block.breakTime / maxli);
            }
			function gainItem(ID,amount) {
				for (i = 0;i < itembar_amount;i++) {
					if (itembar[i].hold == null) {
						itembar[i].hold = new ID(amount);
						break;
						
					}
					else if (itembar[i].hold != null) {
						if (itembar[i].hold.constructor == ID) {
							itembar[i].hold = new ID(itembar[i].hold.count+amount);
							break;
						}
					}
				}
			}