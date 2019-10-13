function breakTest(block) {
	if (block.breakTime <= 0) {
		(tiles[block.countY])[block.countX] = new tile(air,block.countX,block.countY);
		getItem(itemLibrary[block.constructor.name]["item"][0],itemLibrary[block.constructor.name]["item"][1]());
	}
	block.breakPhase = 1 - (block.breakTime / itemLibrary[block.constructor.name]["breakFull"]);
}//用以檢測方塊是否破壞完全
function getItem(ID,amount) {
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
}//取得物品
function tile(filled, X, Y) {
    this.fill = new filled(X, Y);
}//生成方塊
function ligthTest(block) {
    if ((itemLibrary[(tiles[block.countY - 1])[block.countX].fill.constructor.name]["Light"] == false) || (itemLibrary[(tiles[block.countY + 1])[block.countX].fill.constructor.name]["Light"] == false) || (itemLibrary[(tiles[block.countY])[block.countX - 1].fill.constructor.name]["Light"] == false) || (itemLibrary[(tiles[block.countY])[block.countX + 1].fill.constructor.name]["Light"] == false)) {
        block.light = 8;
	}
	else {
		if (Math.max((tiles[block.countY + 1])[block.countX].fill.light, (tiles[block.countY - 1])[block.countX].fill.light, (tiles[block.countY])[block.countX + 1].fill.light, (tiles[block.countY])[block.countX - 1].fill.light) != 0) {
			block.light = (Math.max((tiles[block.countY + 1])[block.countX].fill.light, (tiles[block.countY - 1])[block.countX].fill.light, (tiles[block.countY])[block.countX + 1].fill.light, (tiles[block.countY])[block.countX - 1].fill.light) - 2)
		}
		else {
			block.light = 0;
		}
	}
}//光變換
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
}//生成按鈕
//      數學
function place_meeting(x1,y1,width1,height1,x2,y2,width2,height2) {
	if ((((x1 + (width1/2)) > (x2 - (width2/2))) && ((x1 - (width1/2)) < (x2 + (width2/2)))) && (((y1 + (height1/2)) > (y2 - (height2/2))) && ((y1 - (height1/2)) < (y2 + (height2/2))))) {
		return true;
	}
}//碰撞檢測
function gapTest(x1,y1,x2,y2) {
	return Math.sqrt(Math.abs(x1-x2)**2+Math.abs(y1-y2)**2);
}//畢氏定理
function isMobile() {
	try {
		document.createEvent("TouchEvent");
		return true;
	}
	catch(e) {
		return false;
	}
}//是手機嗎