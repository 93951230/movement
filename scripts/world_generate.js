/*Made by 93951230 with no rights*/
function generateWorld() {
				ctx.fillText("???", 20, 120);
                randomNumber = Math.floor(Math.random()*10000000)/10000000;
                var igenerate = [256];
                for (i = 0; i < tileWi; i++) {
                    if ((Math.random() < 0.2) && (igenerate[i] + 1 < 224)) {
                        igenerate[i + 1] = igenerate[i] + 1;
                    }
                    else if (((Math.random() >= 0.2) && (Math.random() < 0.4)) && (igenerate[i] - 1 < 288)) {
                        igenerate[i + 1] = igenerate[i] - 1;
                    }
                    else {
                        igenerate[i + 1] = igenerate[i];
                    }
                }
                for (i = 0; i < tileWi; i++) {
                    tiles[i] = [];
                    for (j = 0; j < tileHi; j++) {
                        if (j >= igenerate[i]) {
                            // really creatin'
                            if (Math.random() > ((j - 256) / 256)) {
                                (tiles[i])[j] = new tile(dirt, j, i);
                            }
                            else // not dirt how about rocks?
                            {
                                (tiles[i])[j] = new tile(rock, j, i);
                            }
                        }
                        else {
                            (tiles[i])[j] = new tile(air, j, i);
                        }
                    }
                }
				/*
				for (i = 0; i < 50; i++) {
                    tiles[i] = [];
                    for (j = 0; j < tileHi; j++) {
                        if (j >= igenerate[i]) {
                            // really creatin'
                            if (Math.random() > ((j - 256) / 256)) {
                                (tiles[i])[j] = new tile(dirt, j, i);
                            }
                            else // not dirt how about rocks?
                            {
                                (tiles[i])[j] = new tile(rock, j, i);
                            }
                        }
                        else {
                            (tiles[i])[j] = new tile(air, j, i);
                        }
                    }
                }*/
				//grass (surface)
                for (i = 0; i < tileWi; i++) {
                    (tiles[i])[igenerate[i]] = new tile(grass, igenerate[i], i)
                }
				//trees
                for (i = 0; i < tileWi; i++) {
                    if (Math.random() < 0.125) {
						for (j = 0;j < Math.floor(Math.random()*10);j++)
							{
							(tiles[i])[igenerate[i] - (1+j)] = new tile(normal_tree, igenerate[i] - (1+j), i)
						}
                    }
                }
                XdrawVar = (-Math.floor((45 * (tileWi / 2))));
                YdrawVar = -(45 * igenerate[(tileWi / 2)]) +320;
            }