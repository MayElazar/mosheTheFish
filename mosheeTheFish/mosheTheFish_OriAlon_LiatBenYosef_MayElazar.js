(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_", frames: [[4502,2341,3508,2338],[0,3002,3508,2338],[0,5342,3508,2338],[3510,4681,3508,2338],[0,0,4500,3000],[4502,0,3508,2339]]},
		{name:"mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2", frames: [[871,2890,639,426],[871,2331,836,557],[1709,2670,816,544],[2782,2670,357,238],[2669,1172,442,296],[1969,2088,869,580],[0,2331,869,580],[1969,1502,869,584],[2669,0,869,584],[0,2913,626,418],[2669,586,869,584],[2840,1470,320,213],[3113,1172,311,208],[2527,2670,253,526],[2749,1470,35,25],[2801,1470,8,3],[0,1502,1136,827],[1709,2347,61,44],[2786,1470,13,4],[1138,1502,829,645],[1709,2149,230,123],[1709,2274,93,71],[1709,2393,49,41],[1709,2479,32,32],[0,0,2667,1500],[2669,1470,78,17],[1709,2436,49,41]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._1airplane = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1ballpoint_pan = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._1Burma = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1car = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._1China = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._1cornflakes = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._1dok = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._1Frence = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._1germany = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._1ietnam = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._1Labanon = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._1Latvia = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._1locomotive = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._1Netherlands = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._1printer = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._1Qatar = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._1Switzerland = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._1tesla_coil = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._1tv = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Image_0 = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Path_0 = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Path_0_1 = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Path_0_2 = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Path_1_0 = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Path_1_0_1 = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Path_4 = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Path_4_1 = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.ArrowsDIR1111 = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.backGroundNEW_רקע = function() {
	this.initialize(img.backGroundNEW_רקע);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16749,1500);


(lib.checkMark09 = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.ComboBox = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.openingBackGround_startGame = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Space1111 = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Xmark09 = function() {
	this.initialize(ss["mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.whiteBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AtxtxIbjAAIAAbjI7jAAg");
	this.shape.setTransform(44.9929,45.0854,0.51,0.51);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AtxNyIAA7jIbjAAIAAbjg");
	this.shape_1.setTransform(44.9929,45.0854,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.9,92,92);


(lib.Tween39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.backGroundNEW_רקע();
	this.instance.setTransform(26.3,-375.9,0.5043,0.5012,0,0,180);

	this.instance_1 = new lib.backGroundNEW_רקע();
	this.instance_1.setTransform(25,-375.9,0.5012,0.5012);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8420,-375.9,16840,751.9);


(lib.Tween38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.backGroundNEW_רקע();
	this.instance.setTransform(26.3,-375.9,0.5043,0.5012,0,0,180);

	this.instance_1 = new lib.backGroundNEW_רקע();
	this.instance_1.setTransform(25,-375.9,0.5012,0.5012);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8420,-375.9,16840,751.9);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D36A6E").s().p("AA0A2QgRgUgggoQgfgpgSgSQgMgOgRgLQgRgMgSgCQARgCAVALQAOAJASAPQARARAiAqIAwA9QAKAOAOAQQAMANARAOQgbgQghgkg");
	this.shape.setTransform(55.729,26.3645,0.6196,0.6196);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE7576").s().p("AguAVQi3hpAFgzQBIgHA+AEQBmAGAqAiQAZATAPAeIAXA5QAgBPBMA1QhkgTirhkg");
	this.shape_1.setTransform(53.7155,27.008,0.6203,0.6203);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#020203").s().p("AKlFlQg+gMhrg+QhxhCADggIAAgDQAEgLAhgQQBBggCqgtQBVgXBIgQQAAAjgnAyQgzA/gHARQgIATgBA6QAAAzgVAYQgCADgHAAIgOgCgAs3lkIADgBIABgBIABAAIgHADIgBABIADgCg");
	this.shape_2.setTransform(-0.0125,0.0016);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.7,-35.8,165.4,71.69999999999999);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D36A6E").s().p("AA0A2QgRgUgggoQgfgpgSgSQgMgOgRgLQgRgMgSgCQARgCAVALQAOAJASAPQARARAiAqIAwA9QAKAOAOAQQAMANARAOQgbgQghgkg");
	this.shape.setTransform(55.729,26.3645,0.6196,0.6196);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE7576").s().p("AguAVQi3hpAFgzQBIgHA+AEQBmAGAqAiQAZATAPAeIAXA5QAgBPBMA1QhkgTirhkg");
	this.shape_1.setTransform(53.7155,27.008,0.6203,0.6203);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#020203").s().p("AKkFlQg+gMhrg+QhxhCADggIAAgDQAEgMAIgIQAMgNANAGQBGAfCohGQBUgjBGgqQAAAjgnAyQgzA/gHARQgIATgBA6QAAAzgVAYQgCADgHAAIgOgCgAs4lkIADgBIABgBIABAAIgGADIABgBg");
	this.shape_2.setTransform(0.0625,0.0016);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-35.8,165.2,71.69999999999999);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A01507","#C3500B","#D46E0A"],[0.078,0.157,0.2],-16.4,-18.2,77.4,161.3).s().p("Av+KZQgHgDABgCIAJgJQADgDAjgMQAfgKAJgPQAFgKAghEQAdg8AGgHQALgKAOgGQAVgJA3gMQAygKAdgeQAOgPAEgMIAUgsQAXgxARgXQARgXApgSQAVgIARgEIBCgHQBGgNASggQAVgmANgSQAMgQASgTQAPgPApgQQAbgLAbgHIAtgJQAfgJALgLQALgKAFgYIAHggQAGgKAPgNQAPgNAMgDIBEgUQA5gSAPgGQAGgDAkgnQAjglAZgIQAQgGBKADQBDADAfgQQAhgTAEgXQgCgZAEgKQANgiAkAIQBjAUBHgiQAWgLAMgdQAOgfgLgcQgJgYgGgbIgFgWIAJgjQASgmAqgPQB4gnBeClQAvBTAXBbQABAcgPAHQgKAEgegEQhUgNgyAbQghAhAKAwQAFAbAPA2QgMAMgTgBQgSgCgOgMQgLgJgLgRIgSgdQgXgkgdgJQgRgFgRAFQgSAGgIAPQgDAIgEApQgDAegSAEQgSAEgOgNQgWgVgagJQgdgKgZAHQgTAGgNAhQgLAcgbAOQgbAOgegFQgZgEgMARIgOAVQgJAMgKABQgGAAgJgDIgOgIQgZgMgcAMQgdANgGAdQgDAPgHAKQgTAegTACQgIAAgXgJQgxgVgyAcQg0AbgLA0IgFAXQgDANgHAHQgKALgXABQgbAAgMABQgcAEgqAkQgsAlgaAEQgLACgTgBQgUAAgKABQgeAEglAfQg2AugIAFQgQAKgDAeQgEAcgTAGIhJANQgvAIgKAWQgEAIgUAKQgXAMgFAEQgFAFgJAEIgRAGQglAPgdAeQgdAfgNAmQgCAGgDADIgIAIQgGAGgJAAQgJAAgGgGQgFgGgwASQgsARgHAAIgCgBg");
	this.shape.setTransform(63.7847,41.249,0.6199,0.6199);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CF670B","#CF670B","#DA6E0B","#E6750C","#ED790D","#EF7A0D"],[0.031,0.11,0.247,0.451,0.682,1],-6.7,-0.7,8,36.4).s().p("AveKdIgogFQgNgPAmgNQAwgQAHgPIA+h8QAJgSAIgIQALgKAWgHQAYgGAxgLQAqgMAVgWQASgRAOgjIAYg5QASghAdgXQAfgYAjgJQAcgGA7gGQAzgJAWgbQALgOAPgiQArhQCJgXQAagEANgGQAVgJAHgRIADgOIACgOQAFgdAdgWQAYgRAjgKIA+gPQAjgKAVgRQAJgIAVgYQASgWANgIQAZgRApgBQAXAAAwAEQAnABAfgNQAlgQAHggIADgUQACgMAEgHQANgXAwAEIA7AFQAiABAZgHQAfgJAVgVQAXgXABgdQABgTgMghQgNgjAAgQQgCgrAngdQAmgdAsAGQBMAKA+BYQBBBdAcCHQAdCIgWCAQgZCKhQBgQlNBDlmBWQrLCrh7BcQhxBUilANQgcADgbAAQgYAAgYgCg");
	this.shape_1.setTransform(64.3277,41.5846,0.6199,0.6199);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,128.5,83.2), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A01507","#C3500B","#D46E0A"],[0.078,0.675,1],-30.6,0,30.6,0).s().p("AjZQWQgggLgXgbQgXgbgHgiQgGgaAHgVQAFgQAmgoQAegggFgaQgCgMgNgRQgPgUgEgJQgLgeAggvQAkg4ACgYQACgYgVgtQgVgtACgYQACgXAZgjQAcgnAFgSIABgDQAHgUgGgSQgDgSgag/QgVgzAFggQADgRAUgpQARgkAAgVQAAgagagtQgagtAAgaQABgbAegwQAfgvAAgbIAAAAIgBgLIgBgBQgDgRgMgUIgXgjQgNgVgDgVQgCgYAOgPIAPgMQAIgIACgHQADgKgIgRQghhBgvg5QgEgEAAgGQABgGAEgEQA4gyAWgkQAOgWAHgZIABgDIAEgIQAFgIgBgLQgBgJgFgPQgBgNgFgLQgEgMgWgkQgRgdgDgUQgDgdAVgaQAUgYAfgIIACgBIAcgCIACAAIAMACQAoAKAbAlQAZAiAFAsIACAXQABAOADAJQACAIADAEQAFAMgKAGQggAWgNAdQgOAfALAdQAPAmAyAkQAkAaBAAdQAPAHBuAgQBiAhgVAVQgLALghACQgpACgqgJQgogJgigSQgcgPgMgCQgMgBgLAEQgLAFAAAIQAAAIAUAKQAjASAZATQAnAdgKAQIgEAFQgGAFAAAHQAAAHAGAEQAvAcARAhQAVAngpAUIhHAOQgwAKALAWQAJARAvAQQAtAQAIATQAFAOgOANQgMAMgVAHQgNAEgcAFQgcAGgNAEQgpANgUAgQgTAfAJAgQAIAdAfAbQAdAYArARIA3ATQAjALATAJQAbAOANATQAQAUgIATQgHATgjAVQgqAag0AUIgvARQgcAKgRAKQgXAMgMAPQgPARABARQAAAaA1AvQAzAsgFAcQgGAeg7AcQgeAOgPAHQgaANgNAOQgQAQACAUQABAVAWAKQAKAFAQACIAbAEIACABQAIACACAHQACAIgGAGQggAkgKBlQgKBlghAkQgWAZgkAIQgPAEgOAAQgUAAgTgHg");
	this.shape.setTransform(18.9624,65.3397,0.6199,0.6199);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CF670B","#D76C0B","#E9760C","#EF7A0D"],[0,0.196,0.69,1],-64.2,0,64.3,0).s().p("AopQXQgggLgYgcQgXgbgHgiQgGgaAHgVQAGgQAmgoQAegggFgZQgDgMgNgSQgPgTgDgKQgLgdAfgwQAlg4ABgYQACgYgVgsQgVgtADgYQACgYAZgjQAbgmAFgTIABgDQAEgRgDgUQgDgTgZg/QgVgyAFggQADgSATgoQASgkgBgWQAAgZgagtQgZguAAgZQAAgcAfgvQAegwAAgaIAAgBIAAgHIgBgFQgDgQgNgVIgXgiQgNgVgCgVQgDgZAOgOIAPgNQAJgHACgIQACgJgIgSQgghAgug4QgEgFAAgHQAAgGAFgFQA2gwAXglQAPgZAFgXQAHgcgDgZQgCgNgEgLQgFgMgVgjQgSgdgCgUQgEgeAWgaQAUgYAfgIQAPgEAQABIANACQAnAKAbAlQAaAjAEAsIACAXQABANADAKQAEALAIAMQAKAPAUAOQALAJAaAPQBOAtAqAcQBAArArAuQAZAZA3BfQAxBQArAcQAuAfBQgBQAhAABngMQA0gGA+gRQAsgNBDgYQAIgDAHAFQAHAFAAAIIAJN0QAAAIgIAFQgHAFgIgDQgmgRg/gMQhHgMghgHQjPgxikBJQg6AagtAnQgjAegNAZQgGAMhUA8QhiBHgfAcIgQAQQghAkgKBlQgJBkghAkQgXAagjAIQgPADgPAAQgTAAgTgGg");
	this.shape_1.setTransform(39.8148,65.328,0.6199,0.6199);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,79.7,130.6), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A01507","#EF7A0D"],[0.031,1],40.6,-7.4,-18.6,-4).s().p("AAcEsQgpgBgbg3QgSgkgFgkIgBhRQgChEgHgVQgIgVgSgVIgSgRQgYgQgZgVQgzgrgGgcQgIghAQgdQAPgbAegLQAngNBBgLQA1AaBAgcQAigOAWAKQAHADAEAFQAFAGgBAHQgDAQgcAAQgjAAgcgCQgZgBgHABQgVADgRAQQgRAPgHAWQgGAYAJAOQAKAQAaABQANAAAagFQAVgDAWADIAHACQADADAAAFQAAAFgEAEQgDAEgNAFQgaAMgNAZQgFAKAAAJQAAAMAHAGQAKAJAUgGIAWgHQANgEAKABQAMABAJAIQAJAKgDAKQgDAHgMAKIgZARQgbATADATQADAQAVAFQALACAWgEIAugJQAFgCADACIACAEQABAIgGAKIgJAQQgEAKAFALQAFALAKAFQAuADAUgUQghAwgqAwQhSBegpAAIgBAAg");
	this.shape.setTransform(9.6658,21.5344,0.6186,0.6186,29.9989);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CF670B","#CF670B","#EF7A0D"],[0.031,0.259,1],58.7,7.1,-45.7,-12.1).s().p("AjFHyQgUgIgQgeQgdgygEg9QABg5AAgcQgBgygRgeQgMgWgbgWIgxgkQg/gxAHgzQADgVAQgSQAPgRAWgLQASgIAZgHIAtgJQCYgeCEhXQCGhXBZh/QAagmAOgOQAagaAcgEQAWgEAWAKQAWAKAPASQAVAZAGAkQAGAhgIAkQgMA6g0BUIgKAUQg0BjhHBjQhmCZg1BLQhcCEhTBPQgpAnghAAQgKAAgKgEg");
	this.shape_1.setTransform(26.6758,16.9147,0.6186,0.6186,29.9989);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-0.1,-0.4,62.7,39.4), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A01507","#EF7A0D"],[0.031,1],13.4,11,-34,-24.5).s().p("AhuEqQgogIg5hxIgxhwQAOAZAuAIQALgCAHgJQAHgKgBgLIgFgSQgDgLADgHIACgDQACgCAGADIArAUQAVAJALABQAVABAHgQQAHgQgVgaIgUgXQgKgLAAgJQgBgLAMgGQAKgHAMACQAJACAMAHIAUAMQARALANgHQAHgEADgLQACgJgCgLQgGgbgWgSQgMgJgCgEQgDgEABgFQABgGAFgBQADgCAEABQAWADATAHIASAIQALAFAJACQAYAFAOgMQAOgNgCgYQgBgWgNgTQgMgUgVgJQgHgDgYgEQgegFgfgJQgcgGACgRQABgGAGgFQAFgEAHgBQAYgFAdAWQA3ArA7gMIAjAQQAnASAVAOQAbARAIAfQAIAggPAeQgNAag8AdIg5AYQgJAEgMAIQgXAPgNAUQgNASgRBCIgVBOQgLAhgbAgQgiAngjAAIgNgCg");
	this.shape.setTransform(47.4672,31.9841,0.6188,0.6188,-29.9977);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CF670B","#CF670B","#EF7A0D"],[0.031,0.259,1],23.9,38.9,-43.6,-43.2).s().p("Ag0HtQg+hhg6iWQg+itghhVQguh2gZhoIgGgXQgehdACg8QACgkANgfQAPgiAbgTQATgOAXgEQAYgEAUAIQAbALASAgQAKAQARAsQA4CRBrB0QBsB1CNBBIApAUQAXAMAPANQATAPAKAUQAMAXgDAVQgGA0hJAgIg4AXQgfAPgSASQgXAZgNAwQgHAcgNA3QgRA4gqAsQgWAZgWADIgHAAQglAAglg5g");
	this.shape_1.setTransform(33.6277,22.1545,0.6188,0.6188,-29.9977);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-0.4,0,58.3,51.6), null);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("*", "51px 'Calibri'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 64;
	this.text.lineWidth = 69;
	this.text.parent = this;
	this.text.setTransform(36.45,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73,66.3);


(lib.separateLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(6,1,1).p("AAAuXIAAcv");
	this.shape.setTransform(0,97.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,2.6,6,189.9);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F4F4E").s().p("AhGC8QgehOAAhuQAAhtAehNQAdhOApAAQAqAAAdBOQAeBNAABtQAABugeBOQgdBNgqAAQgpAAgdhNg");
	this.shape.setTransform(10.075,26.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,20.2,53.1), null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F4F4E").s().p("AhGC8QgehOAAhuQAAhtAehNQAehOAoAAQAqAAAdBOQAeBNAABtQAABugeBOQgdBNgqAAQgoAAgehNg");
	this.shape.setTransform(10.075,26.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,20.2,53.1), null);


(lib.Path_0_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD0936").s().p("AA1C0QhLgShFhBQg2gzgag7Qgag6ALgtIDYCQIidjPQAsgNA8AWQA8AXA2AzQBFBBAWBJQAWBLgmAoQgaAcgtAAQgTAAgXgFg");
	this.shape.setTransform(18.9773,18.4859);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0_3, new cjs.Rectangle(0,0,38,37), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD0936").s().p("Ai4CGQgggsAfhHQAghGBMg4QA9gsA+gOQA+gPArATIi2C5IDoh0QAFAughA2QgiA4g8AsQhNA4hMAHIgVABQg9AAgcgmg");
	this.shape.setTransform(20.0827,17.2105);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,40.2,34.5), null);


(lib.redBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MergedLayer_1
	this.text = new cjs.Text("*", "bold 37px 'Calibri'", "#990000");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 18;
	this.text.parent = this;
	this.text.setTransform(87.7,-7.15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGBHQgdgdAAgqQAAgpAdgdQAegdAoAAQAqAAAcAdQAeAdAAApQAAAqgeAdQgcAdgqAAQgoAAgegdg");
	this.shape.setTransform(88,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#990000").ss(6,1,1).p("AtxtxIbjAAIAAbjI7jAAg");
	this.shape_1.setTransform(44.9929,45.0854,0.51,0.51);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AtxNyIAA7jIbjAAIAAbjg");
	this.shape_2.setTransform(44.9929,45.0854,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-9.1,102,102.19999999999999);


(lib.myQback = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Space1111();
	this.instance.setTransform(55,78,0.6075,0.6075);

	this.instance_1 = new lib.ArrowsDIR1111();
	this.instance_1.setTransform(163,95.3,0.2075,0.2075,-90);

	this.instance_2 = new lib.ArrowsDIR1111();
	this.instance_2.setTransform(274,78,0.2075,0.2075);

	this.text = new cjs.Text("לתזוזה השתמש בחצים         להאצת המהירות       ולאכילה", "15px 'Calibri'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 374;
	this.text.parent = this;
	this.text.setTransform(270,75.65);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A/UHgIAAu/MA+pAAAIAAO/g");
	this.shape.setTransform(248.5758,48,1.2381,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,0,496.40000000000003,96);


(lib.openningStage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.openingBackGround_startGame();
	this.instance.setTransform(0,0,0.487,0.487);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1298.8,730.5);


(lib.an_ComboBox = function(options) {
	this.initialize();
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.BTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("בחר", "bold 17px 'Verdana'", "#660000");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 86;
	this.text.parent = this;
	this.text.setTransform(50.1,5.35);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3300").s().p("AoWCgIAAk/IQtAAIAAE/g");
	this.shape.setTransform(52.5,17.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BTN, new cjs.Rectangle(-1,1.1,107,32), null);


(lib.AnswerTest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhaI9QhvgxgegzIgTghQgLgSgOgHQgNgGgRAAIggAFQhdARhCgdQgngRgZghQgagjgBgnIAAgUQgBgLgDgHQgGgPgagQQgcgRgGgNQgLgVAUguQAUgugJgVQgEgLgQgOQgRgQgFgGQgPgYAMghQALgdAagXQAggaAQgPQAagYAJgZQAEgMAEgmQADggALgQQAHgMAUgPQA2gsA2g/QAYgcBIhcIA5hKQAjglAnAJQAcAGAnAiQAsAmAUAJQAyAWBCgbQApgRBHgyQA/gtAnATQAfAPAMBCQANBIAYATQAYATBQgBQBHgBAQAhQALAYgTA6QgTA3ARAXQAMARAhAHQAtAKAJAEQAcAOAMAjQAKAggIAiQgIAdgUAeQgNAUgcAhQAnARgKAzQgKAzgrAOIgYAGQgOAEgHAGQgUAQACApQADA3gFANQgHAYghAaQgqAggJALQgOASgcBOQgVA9glALQgMAEgUAAIghABQguAFhABDQhDBGgrAJQgfgxhugyg");
	this.shape.setTransform(153.6048,114.4061,1.4384,1.44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CFCECE").s().p("AhaI9QhvgxgegzIgTghQgLgSgOgHQgNgGgRAAIggAFQhdARhCgdQgngRgZghQgagjgBgnIAAgUQgBgLgDgHQgGgPgagQQgcgRgGgNQgLgVAUguQAUgugJgVQgEgLgQgOQgRgQgFgGQgPgYAMghQALgdAagXQAggaAQgPQAagYAJgZQAEgMAEgmQADggALgQQAHgMAUgPQA2gsA2g/QAYgcBIhcIA5hKQAjglAnAJQAcAGAnAiQAsAmAUAJQAyAWBCgbQApgRBHgyQA/gtAnATQAfAPAMBCQANBIAYATQAYATBQgBQBHgBAQAhQALAYgTA6QgTA3ARAXQAMARAhAHQAtAKAJAEQAcAOAMAjQAKAggIAiQgIAdgUAeQgNAUgcAhQAnARgKAzQgKAzgrAOIgYAGQgOAEgHAGQgUAQACApQADA3gFANQgHAYghAaQgqAggJALQgOASgcBOQgVA9glALQgMAEgUAAIghABQguAFhABDQhDBGgrAJQgfgxhugyg");
	this.shape_1.setTransform(155.0432,108.6461,1.4384,1.44);

	this.instance = new lib.checkMark09();
	this.instance.setTransform(200,4,1.4866,1.4873);

	this.instance_1 = new lib.Xmark09();
	this.instance_1.setTransform(189,27,1.3357,1.3327);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1.4384,scaleY:1.44,x:155.0432,y:108.6461}},{t:this.shape,p:{scaleX:1.4384,scaleY:1.44,x:153.6048,y:114.4061}}]}).to({state:[{t:this.shape_1,p:{scaleX:1.4406,scaleY:1.4421,x:155.1913,y:108.7846}},{t:this.shape,p:{scaleX:1.4406,scaleY:1.4421,x:153.7508,y:114.5529}},{t:this.instance}]},1).to({state:[{t:this.shape_1,p:{scaleX:1.4402,scaleY:1.442,x:155.1657,y:108.7764}},{t:this.shape,p:{scaleX:1.4402,scaleY:1.442,x:153.7255,y:114.5442}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54.6,4,218.29999999999998,207.6);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiUCWQg/g+AAhYQAAhXA/g+QA9g+BXAAQBYAAA9A+QA/A+gBBXQABBYg/A+Qg9A+hYAAQhXAAg9g+g");
	this.shape.setTransform(21.15,21.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,42.3,42.4), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFEEED").s().p("AiOCPQg8g7ABhUQgBhTA8g7QA7g7BTAAQBUAAA7A7QA8A7AABTQAABUg8A7Qg7A7hUAAQhTAAg7g7g");
	this.shape.setTransform(56.3,56.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(36.1,36.2,40.49999999999999,40.39999999999999), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiUCWQg/g+AAhYQAAhXA/g+QA9g+BXAAQBYAAA9A+QA/A+gBBXQABBYg/A+Qg9A+hYAAQhXAAg9g+g");
	this.shape.setTransform(21.15,21.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,42.3,42.4), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAJAiQgNgFgMgLQgMgLgFgNQgFgNABgQQAGAeAUASQATATAeAEIgLAAQgJAAgJgCg");
	this.shape.setTransform(3.8339,3.6446);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,7.7,7.3), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMgMQgTgTgegDQAPgDAOAFQAOAFALAKQAMALAFANQAFANgBAQQgGgegUgSg");
	this.shape.setTransform(3.8161,3.6188);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,7.7,7.3), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiUCWQg/g+AAhYQAAhXA/g+QA9g+BXAAQBYAAA9A+QA/A+gBBXQABBYg/A+Qg9A+hYAAQhXAAg9g+g");
	this.shape.setTransform(21.15,21.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,42.3,42.4), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFEEED").s().p("AiOCPQg8g7ABhUQgBhTA8g7QA7g7BTAAQBUAAA7A7QA8A7AABTQAABUg8A7Qg7A7hUAAQhTAAg7g7g");
	this.shape.setTransform(56.3,56.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(36.1,36.2,40.49999999999999,40.39999999999999), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiUCWQg/g+AAhYQAAhXA/g+QA9g+BXAAQBYAAA9A+QA/A+gBBXQABBYg/A+Qg9A+hYAAQhXAAg9g+g");
	this.shape_1.setTransform(21.15,21.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,42.3,42.4), null);


(lib.Group_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAJAiQgNgFgMgLQgMgLgFgNQgFgNABgQQAGAeAUASQATATAeAEIgLAAQgJAAgJgCg");
	this.shape_1.setTransform(3.8339,3.6446);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0_1, new cjs.Rectangle(0,0,7.7,7.3), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMgMQgTgTgegDQAPgDAOAFQAOAFALAKQAMALAFANQAFANgBAQQgGgegUgSg");
	this.shape_1.setTransform(3.8161,3.6188);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,7.7,7.3), null);


(lib.MaxPersonSaysHello = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_280 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(280).call(this.frame_280).wait(62));

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGgDIgBgJQAUAGAcADQA3AGAogLIgEANQghAIgcAAQgqAAgjgQg");
	this.shape.setTransform(62.25,38.7183,0.9954,0.9954,-14.999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F85C66").s().p("AAAAPQgegEgQgTQAZgIASACQAfACATASQgPAKgUAAIgMgBg");
	this.shape_1.setTransform(62.3888,42.6014,0.9954,0.9954,-14.999);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#920E08").s().p("AgIAgQgegEgRgTQgMgNgDgTIgBgJQAUAFAcAEQA3AGAogLIgEAOQgKAZgUAMQgPAKgUAAIgLgBg");
	this.shape_2.setTransform(62.7759,40.6808,0.9954,0.9954,-14.999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2,p:{rotation:-14.999,x:62.7759,y:40.6808,scaleX:0.9954,scaleY:0.9954}},{t:this.shape_1,p:{rotation:-14.999,x:62.3888,y:42.6014,scaleX:0.9954,scaleY:0.9954}},{t:this.shape,p:{rotation:-14.999,x:62.25,y:38.7183,scaleX:0.9954,scaleY:0.9954}}]},83).to({state:[{t:this.shape_2,p:{rotation:-14.9989,x:62.7764,y:40.6809,scaleX:0.9954,scaleY:0.9954}},{t:this.shape_1,p:{rotation:-14.9989,x:62.3893,y:42.6016,scaleX:0.9954,scaleY:0.9954}},{t:this.shape,p:{rotation:-14.9989,x:62.2505,y:38.7182,scaleX:0.9954,scaleY:0.9954}}]},18).to({state:[]},1).to({state:[{t:this.shape_2,p:{rotation:-14.9991,x:62.7749,y:40.6806,scaleX:0.9952,scaleY:0.9952}},{t:this.shape_1,p:{rotation:-14.9991,x:62.3879,y:42.601,scaleX:0.9952,scaleY:0.9952}},{t:this.shape,p:{rotation:-14.9991,x:62.2491,y:38.7183,scaleX:0.9952,scaleY:0.9952}}]},18).to({state:[{t:this.shape_2,p:{rotation:-14.9991,x:62.7749,y:40.6806,scaleX:0.9952,scaleY:0.9952}},{t:this.shape_1,p:{rotation:-14.9991,x:62.3879,y:42.601,scaleX:0.9952,scaleY:0.9952}},{t:this.shape,p:{rotation:-14.9991,x:62.2491,y:38.7183,scaleX:0.9952,scaleY:0.9952}}]},6).to({state:[]},6).to({state:[{t:this.shape_2,p:{rotation:-14.9991,x:62.7767,y:40.6809,scaleX:0.9955,scaleY:0.9955}},{t:this.shape_1,p:{rotation:-14.9991,x:62.3896,y:42.6017,scaleX:0.9955,scaleY:0.9955}},{t:this.shape,p:{rotation:-14.9991,x:62.2509,y:38.7182,scaleX:0.9955,scaleY:0.9955}}]},33).to({state:[]},14).to({state:[{t:this.shape_2,p:{rotation:-14.9991,x:62.7767,y:40.6809,scaleX:0.9955,scaleY:0.9955}},{t:this.shape_1,p:{rotation:-14.9991,x:62.3896,y:42.6017,scaleX:0.9955,scaleY:0.9955}},{t:this.shape,p:{rotation:-14.9991,x:62.2509,y:38.7182,scaleX:0.9955,scaleY:0.9955}}]},31).to({state:[]},21).to({state:[{t:this.shape_2,p:{rotation:-14.9985,x:62.7766,y:40.681,scaleX:0.9955,scaleY:0.9955}},{t:this.shape_1,p:{rotation:-14.9985,x:62.3895,y:42.6018,scaleX:0.9955,scaleY:0.9955}},{t:this.shape,p:{rotation:-14.9985,x:62.2507,y:38.7183,scaleX:0.9955,scaleY:0.9955}}]},34).to({state:[{t:this.shape_2,p:{rotation:-14.9985,x:62.7766,y:40.681,scaleX:0.9955,scaleY:0.9955}},{t:this.shape_1,p:{rotation:-14.9985,x:62.3895,y:42.6018,scaleX:0.9955,scaleY:0.9955}},{t:this.shape,p:{rotation:-14.9985,x:62.2507,y:38.7183,scaleX:0.9955,scaleY:0.9955}}]},5).to({state:[]},1).wait(71));

	// Isolation Mode
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F85C66").s().p("AAfAPQgugPgWAAQgGAAgEgDQAWgUAfAKQAgAJALAUIgJABQgEAAgFgCg");
	this.shape_3.setTransform(62.0441,43.4393,1,1,-14.9992);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag5ACQAJgJAMgBQAcgDAbACIANABQASADAIAPg");
	this.shape_4.setTransform(61.7312,39.2773,1,1,-14.9992);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#920E08").s().p("AAYAhQgugRgWAAQgGAAgEgDQgEgDgCgFQgEgLAGgLIACgDQAJgLAMAAQAcgDAbABIANACQASADAIAQIACADQAEAMgFAOIAAAAQgFAMgNAEIgIABQgFAAgFgBg");
	this.shape_5.setTransform(62.2609,41.6012,1,1,-14.9992);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},36).to({state:[]},16).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},3).to({state:[]},6).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},8).to({state:[]},14).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},49).to({state:[]},19).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},28).to({state:[]},15).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},37).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},18).to({state:[]},1).wait(92));

	// Isolation Mode
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F85C66").s().p("AgPAGQgIgGgDgIQAPgFAPADQAQADAHAFQgIAOgSAAQgIAAgIgGg");
	this.shape_6.setTransform(62.4683,42.8576,0.9953,0.9953,-14.9988);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#920E08").s().p("AgRAYQgHgGgDgJIgCgJQAAgLAJgJQAIgJAMAAQANAAAIAJQAJAJAAALQAAAJgFAGQgHAPgSAAQgJAAgIgGg");
	this.shape_7.setTransform(62.1291,41.1109,0.9953,0.9953,-14.9988);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7,p:{scaleX:0.9953,scaleY:0.9953,rotation:-14.9988,x:62.1291,y:41.1109}},{t:this.shape_6,p:{scaleX:0.9953,scaleY:0.9953,rotation:-14.9988,x:62.4683,y:42.8576}}]},30).to({state:[]},6).to({state:[{t:this.shape_7,p:{scaleX:0.9954,scaleY:0.9954,rotation:-14.9987,x:62.1294,y:41.111}},{t:this.shape_6,p:{scaleX:0.9954,scaleY:0.9954,rotation:-14.9987,x:62.4686,y:42.8578}}]},16).to({state:[]},3).to({state:[{t:this.shape_7,p:{scaleX:0.9955,scaleY:0.9955,rotation:-14.9985,x:62.1298,y:41.1111}},{t:this.shape_6,p:{scaleX:0.9955,scaleY:0.9955,rotation:-14.9985,x:62.4691,y:42.8581}}]},5).to({state:[]},9).to({state:[{t:this.shape_7,p:{scaleX:0.9954,scaleY:0.9954,rotation:-14.9987,x:62.1298,y:41.1111}},{t:this.shape_6,p:{scaleX:0.9954,scaleY:0.9954,rotation:-14.9987,x:62.469,y:42.858}}]},33).to({state:[]},18).to({state:[{t:this.shape_7,p:{scaleX:0.9954,scaleY:0.9954,rotation:-14.9989,x:62.1297,y:41.111}},{t:this.shape_6,p:{scaleX:0.9954,scaleY:0.9954,rotation:-14.9989,x:62.4689,y:42.8579}}]},32).to({state:[]},13).to({state:[{t:this.shape_7,p:{scaleX:0.9954,scaleY:0.9954,rotation:-14.9987,x:62.1298,y:41.1111}},{t:this.shape_6,p:{scaleX:0.9954,scaleY:0.9954,rotation:-14.9987,x:62.469,y:42.858}}]},29).to({state:[]},16).to({state:[{t:this.shape_7,p:{scaleX:0.9954,scaleY:0.9954,rotation:-14.9991,x:62.1296,y:41.111}},{t:this.shape_6,p:{scaleX:0.9954,scaleY:0.9954,rotation:-14.9991,x:62.4688,y:42.8578}}]},40).to({state:[{t:this.shape_7,p:{scaleX:0.9954,scaleY:0.9954,rotation:-14.9991,x:62.1296,y:41.111}},{t:this.shape_6,p:{scaleX:0.9954,scaleY:0.9954,rotation:-14.9991,x:62.4688,y:42.8578}}]},14).to({state:[]},1).wait(77));

	// textbox
	this.text = new cjs.Text("היי, אני מקס\nתודה שבאת לעזור לי להאכיל את משה הדג.", "20px 'Calibri'");
	this.text.textAlign = "right";
	this.text.lineHeight = 26;
	this.text.lineWidth = 175;
	this.text.parent = this;
	this.text.setTransform(5.75,-99.9);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(30).to({_off:false},0).wait(240).to({_off:true},1).wait(71));

	// bubble
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AVVSZQgdiei1hqQiPhUkYhHQlXBymFAAQlIAAkrhSQkihQjfiRQjgiSh6i8Qh/jDAAjVQAAjVB/jDQB6i9DgiRQDgiREhhQQErhSFIAAQFIAAEsBSQEhBQDgCRQDfCRB6C9QCADDAADVQgBCPg6CIQg3CEhrB3QBHFOgeFZQgNCDgUAuQgJASgHAAQgLAAgJgyg");
	this.shape_8.setTransform(-73.3155,-46.0838,0.6658,0.6658);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(30).to({_off:false},0).wait(240).to({_off:true},1).wait(71));

	// MergedLayer_2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F18868").s().p("AgxAYIgPgDQgHgCADgHQACgGAGABIAqAEQAugCAegfQACgDADAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQACACABADQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQghAjg0ADIgJABQgMAAgLgCg");
	this.shape_9.setTransform(62.3171,41.5143);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F18868").s().p("AAKAsIgegWQgDgCAAgEQAAgFAFgBIAYgIIAEgoQABgHAHABQADABACACQACACgBADIgFAsQAAAEgEACIgPAFIASANQADACAAADQABADgCACQgCADgEAAIgEgBg");
	this.shape_10.setTransform(57.48,30.4188);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#172E47").s().p("AgYABQAMgJAPABQANAAAJAGIgFAHQgGgDgHgCQgOgBgLAIg");
	this.shape_11.setTransform(59.775,25.9707);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#172E47").s().p("Ag1ACIBpgMIACAJIhqAMg");
	this.shape_12.setTransform(77.475,24.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#172E47").s().p("AglAqQgRgQgCgXQgBgXAQgRQAQgSAXgBQAXgBARAQQASAQABAXQABAWgQASQgPARgYACIgDAAQgUAAgRgPgAgBguQgUABgNAOQgNAPABASQABAUAOANQAPANATgBQATgBANgPQANgOgBgTQgBgTgOgNQgOgMgRAAIgCAAg");
	this.shape_13.setTransform(52.475,27.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#172E47").s().p("AglAqQgRgPgCgYQgBgWAQgSQAQgRAXgCQAXgBARAQQASAQABAXQABAXgQARQgQASgXABIgDAAQgUAAgRgPgAgBguQgUABgNAPQgNAOABATQABATAOANQAPANATgBQATAAANgPQANgPgBgSQgBgUgOgNQgOgMgRAAIgCAAg");
	this.shape_14.setTransform(67.225,26.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F18868").s().p("AghAMQgHgCACgHQABgGAIACQAWAGATgHQAJgEAGgGQACgCADAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAFAEgFAGQgEADgIAFQgPAIgQABIgEAAQgLAAgMgDg");
	this.shape_15.setTransform(63.6094,45.7341);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F18868").s().p("AALAJQgKgJgOAEQgHACgBgGQgCgHAHgCQAVgGAQAPQAEAEgEAFIgFACQgDAAgCgCg");
	this.shape_16.setTransform(86.7903,30.0143);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F18868").s().p("AgVAsQgGgBAAgHQADgpAWgXQAKgLAMgEQAGgBACAGQACAGgGADQgKADgIAJQgRASgCAkQAAAGgHABg");
	this.shape_17.setTransform(86.19,30.56);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F6AD84").s().p("AgwgqIAZgXQAcgUAXARQAhAagTA5QgVA8g3ACg");
	this.shape_18.setTransform(87.9337,29.6667);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#172E47").s().p("AghABQAHgFAJgDQAZgJAVAKQAHAEgDAFQgCAGgFAAIgDgBQgcgKgcAOg");
	this.shape_19.setTransform(52.2597,20.9547);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#172E47").s().p("AgBAAQgQAAgOAGQgEACgDgBQgDgBgCgEQgCgFAFgEQAUgMAaAGQAQADANANQAGAHAEAGQgXgQgXAAg");
	this.shape_20.setTransform(67.2359,20.8777);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#172E47").s().p("ABlA2QgHgNgigQQgfgOgGgSQgeAQgqANQhSAagwgXQg9gbARgnQAQghBDgeQBCgcBKgHQBRgIAwAYQBFAiAUBDQARA0gNBUQgLgGgPAAQgeAAgUAgIgcACQgCg5gPgfg");
	this.shape_21.setTransform(68.4964,11.3593);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#172E47").s().p("AgHARQgEgGgBgLQgBgIAEgIQADgGAGgBQAEAAAFAGQAEAHAAAKQABAJgEAIQgDAHgGAAIAAAAQgEAAgEgHg");
	this.shape_22.setTransform(52.9319,27.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#172E47").s().p("AgHARQgEgGgBgKQgBgJAEgIQADgHAGAAQAEAAAFAGQAEAHAAAKQABAKgEAHQgDAHgGAAIAAAAQgEAAgEgHg");
	this.shape_23.setTransform(66.575,26.7517);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#172E47").s().p("AgXgHIgBglQAcgPAVgBQgJBGgcAzQgIgbgDgpg");
	this.shape_24.setTransform(87.925,38.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F6AD84").s().p("AhaDxQgegIgWgWQgTgTgIgXIgFgQIgVhlQgKg5gDgpIgBgUQgDg4AKgbQAOgjA3gaQA2gbBEgHQBTgJBBA3QBBA2AGBVIADAuIgBAFQgBAcgEAWQgJBHgdA0IgHANQgeAPguAQIgGABQgqAPhAARQgPAEgPAAQgQAAgQgFg");
	this.shape_25.setTransform(69.8667,27.7552);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F18868").s().p("Ag/gnIAfgMIBggIQgMAZgUAbQgoA1gqAOg");
	this.shape_26.setTransform(75.8,49.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F6AD84").s().p("AhABZIgUiQIAggMQA7gXALgDQAsgNASAKIAFCdQgWAQgeAMQgeAMgXAAQgZAAgTgMg");
	this.shape_27.setTransform(77.85,51.5326);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#172E47").s().p("AAFBUQgUgXgMgxQgNgvARgkQAIgSAKgHQAoAKgCBcQgBAvgJAtQgIgCgKgMg");
	this.shape_28.setTransform(50.6603,19);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3BB9C3").s().p("AgBHhQgdgDgUgNQAQhRANhiQAZjEgKhTQgPgNgXgkQguhGgohqQgHg7AEg/QAKh9A6gQIBOCAQBVCfAkCZIACAxQAABAgGBAQgVDNhVCNIgJAAIgQgBg");
	this.shape_29.setTransform(117.2887,110.395);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F6AD84").s().p("Ag7CJQgIgKASg7IATg6IguA/QgVAbACgTQADgUAfg8IAdg0QgIAOgYANQgOAIgKgFQgKgFALgMIA1g8QANgOAVgOIASgLQALgEAfAJIAdAJQARAtgWBYQgVBSgQAFQgJACAJhJIgUA0QgVA0gIgBQgIAAAHg1IAJg0IgaBAQgYAzgLAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_30.setTransform(110.3906,170.7261);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgHDZQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgLhLAMi1IAMiqQABgFAFAAQAEABAAAFIgOCpQgLC1AKBKQABAFgEAAIgBAAIgBAAIgCgBg");
	this.shape_31.setTransform(65.2994,90.0313);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgGDXQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgKhKAKi0IANipQAAgFAFAAQAFABgBAFIgNCoQgKCzAJBKQABAFgEAAIAAAAIgBABIgCgCg");
	this.shape_32.setTransform(81.0208,91.7063);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0EA9B2").s().p("Ai2BNQgEgWgEgiQgGhFAHg/IFdALIAHA+QAKBJARA5Qg7ANhNAFQgbACgaAAQh0AAhHgjg");
	this.shape_33.setTransform(71.0991,147.7052);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0EA9B2").s().p("AADAZQgagOgJgjQgBgEAFgCQAEgBABAEQAIAfAVAMQALAGALAAQAFAAAAAFQAAAFgFAAIgBAAQgLAAgNgHg");
	this.shape_34.setTransform(65.9577,63.2926);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0EA9B2").s().p("AhKBBQgFAAAAgFQAAgFAEAAIACAAQBMgEApg1QAVgcAGgdQABgFAEABQAFABgBAFQgGAdgWAdQgtA7hPAFg");
	this.shape_35.setTransform(88.3333,61.1917);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3BB9C3").s().p("AlIITIA8w9IFZhBID8BIIhXLrIBSEyQidBtilAFIgMAAQiaAAikhZg");
	this.shape_36.setTransform(77.775,117.0332);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3BB9C3").s().p("Ag5B+Qh/gLgSgbQgLgPAAghQAAglAPghQAqhcB6gIIBRAEQBbALArAkQAyApgaBJQgaBIg5APQghAJg3AAQgnAAg0gFg");
	this.shape_37.setTransform(84.434,54.4827);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0EA9B2").s().p("AiLDYQhAguhGg8Ig4gzQgEgPA0guQArgngEgJIApA0QAwA8AcAXQAgAbA5A5QAjAjAXAGQAOAEAZgXQAYgVAFgRQA5jOBOieQAnhOAbgmQBWDKhmDnQgiBOgxBEQgmA0gRALQgSANgaAAQhQAAiYhwg");
	this.shape_38.setTransform(21.7777,94.3094);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F18868").s().p("AgkgYIARAaQAXAZAhgNQgNAKgQABIgBAAQgdAAgOgxg");
	this.shape_39.setTransform(-9.5,90.926);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F18868").s().p("AgYALQAKgeAqgUIgYAVQgYAbgGAfQgDgMAFgRg");
	this.shape_40.setTransform(-15.7971,86.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F6AD84").s().p("AgqBBQhAgzADgPQABgFAeAPIAfARIgmgkQglgoAEgHQAEgHArAbIAqAdQgZgYgVgZQgrgyAQgDQAMgDAtAnQAWAUATAUIgjhCQgPgdAPAKQAbAQBCBfIgNgjQgIgUAIgKQAJgKAGAQIAiBKQALAbAGAhQgBARgoAnQgugDhEg3g");
	this.shape_41.setTransform(-15.5445,85.5484);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2D2D2D").s().p("AiZB9QhOgagnhJQgmhIAXhPIACgEIC5gPQDTgOCAABIAYBWQAaBlAEBQQgwAYhQAOQg5AKg4AAQhnAAhoghg");
	this.shape_42.setTransform(78.2796,174.3361);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AghAJQAAgNAHgKIATgBQAXABASAJIgCAVQgngKgaADg");
	this.shape_43.setTransform(108.3,326.725);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0EA9B2").s().p("AiGgDIgBgRQAWAMAlAGQAqAGAygEQBIgEAwgfQAAAfgSALQgjAXhkAFIgZABQhYAAgEgng");
	this.shape_44.setTransform(106.825,351.11);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgHAIQgDgCgBgGQAAgDAEgEQADgDAEAAQAEgBAEADQADADABAFQAAAEgDAEQgDADgFAAIgBABQgEAAgDgEg");
	this.shape_45.setTransform(101.725,332.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgEQAAgEAEgDQACgEAFgBQAEAAAEAEQADACAAAFQABAFgDADQgEADgEABIgBAAQgEAAgDgDg");
	this.shape_46.setTransform(101.6,335.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgHAIQgEgDABgFQgBgDADgEQAEgDAEAAQAEgBAEADQADAEAAAEQABAEgEAEQgDAEgFgBIAAABQgEAAgDgEg");
	this.shape_47.setTransform(101.45,338.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgHAJQgDgDgBgFQAAgEADgEQAEgDAEgBQAEAAADAEQAEADABAEQAAAEgEAEQgCADgGABQgEAAgDgDg");
	this.shape_48.setTransform(112.9,339.875);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgHAJQgDgEAAgEQgBgEADgEQAEgDAEgBQAKAAACALQAAAEgEAEQgCADgGABQgDAAgEgDg");
	this.shape_49.setTransform(113.35,337.025);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgHAJQgDgEAAgFQgBgDADgEQADgEAFABQAEgBAEADQADAEAAAEQABAEgEAEQgCADgGAAIAAABQgDAAgEgDg");
	this.shape_50.setTransform(113.25,334.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AARAAQgpgKgeAOIgFgIQAigRAsAMQAXAGASAJIgFAJQgQgJgWgGg");
	this.shape_51.setTransform(107.325,335.9974);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AASAAQgqgKgeAOIgFgIQAigRAsAMQAXAGASAJIgFAJQgQgJgVgGg");
	this.shape_52.setTransform(107.175,338.9724);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AARAAQgpgKgeAOIgFgIQAigRAsAMQAXAGASAJIgFAJQgQgJgWgGg");
	this.shape_53.setTransform(107.475,332.9974);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3BB9C3").s().p("AiGB3IgBgQQABgjAWgkQAZghAEgMQANg1APgjQAchDAsALQAsAKASAfQAJAQAAANQAMAhAOAuQAWBAAAAfQAAAfgSAMQgjAYhkAFIgZABQhYAAgEgpg");
	this.shape_54.setTransform(106.825,338.7634);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2D2D2D").s().p("AgOG9IhGmlQgtksgckaIgTjdID6g2QAwDWAUFRQAJCpAAB9IAaMwIh3AFQgeiJgqj7g");
	this.shape_55.setTransform(97.05,250.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgQALIACgVQAQgBAOAEIABATQgRgCgQABg");
	this.shape_56.setTransform(58.125,328.3909);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQAAgEADgEQADgEAFAAQAEgBAEAEQAEAEAAAEQAAAEgDAEQgDAEgFAAIgBAAQgEAAgDgDg");
	this.shape_57.setTransform(53.925,342.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAFAJQgQgGgJgHIAHgIQAJAIANAEIAMADIgDAKg");
	this.shape_58.setTransform(52.175,341.575);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQAAgFADgDQAEgDAEgBQAEAAAEADQADADABAFQAAAFgDADQgDADgGABIAAAAQgEAAgDgDg");
	this.shape_59.setTransform(56.2,339.65);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAGAKQgQgGgKgIIAGgJQAHAIAQAFIANAEIgEAKg");
	this.shape_60.setTransform(54.4,338.75);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQgBgEAEgEQADgDAFgBQAEAAAEADQAEADAAAFQAAAFgDADQgEAEgFAAIAAAAQgEAAgDgDg");
	this.shape_61.setTransform(58.8,337.15);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAKANQgWgIgLgLIAIgKQADALAZAIIAKADIgCALg");
	this.shape_62.setTransform(56.6,336.025);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0EA9B2").s().p("AjaASQgHgKADgKIG+gYQgBANgKAKQgJAJgOAAImEAVIgCAAQgLAAgHgJg");
	this.shape_63.setTransform(51.9821,353.9795);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3BB9C3").s().p("AjaCgQgHgKADgLIABgEQAUgpAugUQAVgJA2gKQAfgGAfgkIA+hWQgBgLABgRIAAgBIADgWIADgSQAGgdAfAEQAfAFAJAdIABADQAHAVAXAEQAXAEAQAGIAbDSQgBANgKAKQgJAKgOAAImEAVIgCAAQgLAAgHgJg");
	this.shape_64.setTransform(51.9821,339.7993);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#060808").s().p("Ah7AnQgFiYgBi8QgCl4AVitIBWAUQBgAYA6AXIgJE5QgNFYgYCaQAoCLgCDmQgBCJgPE2Ih2AGg");
	this.shape_65.setTransform(60.0163,250.95);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F18868").s().p("AALAJQgKgJgOAEQgHACgBgGQgCgHAHgCQAOgDAMAFQAHADAEAEQAEAEgEAFIgFACQgDAAgCgCg");
	this.shape_66.setTransform(86.7903,30.0319);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F18868").s().p("AhAgnIAhgMIBfgIQgMAZgUAbQgoA1gqAOg");
	this.shape_67.setTransform(75.8,49.925);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0EA9B2").s().p("Ai2BNQgEgWgEgiQgGhFAHg/IFdALIAHA+QAKBJARA5Qg7ANhNAFQgbACgaAAQhzAAhIgjg");
	this.shape_68.setTransform(71.0991,147.7052);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0EA9B2").s().p("AiMDJQg7g5hAhJIg1g+QgEgOA4gvQAwgpgFgJIB5CEIBUBbIAzA3IAjAjQAQANADgNQAgjVBSjAQAohgAig1QBXDKhnD5QgiBTgxBKQgnA6gQALQgPAKgVAAQhNAAiWiPg");
	this.shape_69.setTransform(23.166,95.9447);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F18868").s().p("AgkgYIARAaQAXAZAhgNQgNAKgPABIgBAAQgeAAgOgxg");
	this.shape_70.setTransform(-6,88.326);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F18868").s().p("AgYAMQAKggAqgTIgYAVQgYAbgGAfQgDgNAFgPg");
	this.shape_71.setTransform(-12.2971,84.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F6AD84").s().p("AgqBBQhAgzADgPQABgFAeAPIAfARQgTgSgTgTQglgnAEgIQAEgGArAbIAqAdQgZgYgVgZQgrgyAQgDQAMgDAtAnQAWAUATAUIgjhCQgPgdAPAJQAbARBCBfIgNgjQgIgUAIgKQAJgKAHAQIAhBKQALAbAGAhQAAAQgpAoQgugDhEg3g");
	this.shape_72.setTransform(-12.0195,82.9328);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AggAJQgBgNAHgKIATgBQAXABARAJIgBAVQgngKgZADg");
	this.shape_73.setTransform(108.3,326.725);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgHAJQgDgEAAgEQgBgEAEgDQACgEAFgBQAEAAAEAEQADACAAAFQABAFgDADQgDADgFABIgBAAQgEAAgDgDg");
	this.shape_74.setTransform(101.6,335.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgHAIQgDgDAAgFQgBgDADgEQADgDAFAAQAEgBAEADQADAEAAAEQABAEgEAEQgCAEgGgBIAAABQgEAAgDgEg");
	this.shape_75.setTransform(101.45,338.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgGAJQgEgEgBgEQAAgEADgEQAEgDAEgBQALAAABALQAAAEgEAEQgCADgGABQgDAAgDgDg");
	this.shape_76.setTransform(113.35,337.025);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgHAJQgDgEgBgFQAAgDADgEQAEgEAEABQAEgBAEADQAEAEAAAEQAAAEgEAEQgCADgGAAIAAABQgDAAgEgDg");
	this.shape_77.setTransform(113.25,334.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2D2D2D").s().p("AgOG9IhGmlQgtksgckaIgTjdID6g2QAxDWATFRQAJCpAAB9IAaMwIh3AFQgfiJgpj7g");
	this.shape_78.setTransform(97.05,250.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQAAgFADgDQADgDAFgBQAFAAADADQADADABAFQAAAFgDADQgDADgGABIAAAAQgEAAgDgDg");
	this.shape_79.setTransform(56.2,339.65);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAGAKQgRgGgKgIIAHgJQAHAIAQAFIANAEIgEAKg");
	this.shape_80.setTransform(54.4,338.75);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQAAgEADgEQADgDAFgBQAEAAAEADQADADABAFQAAAFgDADQgDAEgGAAIAAAAQgEAAgDgDg");
	this.shape_81.setTransform(58.8,337.15);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAKANQgWgIgLgLIAHgKQAEALAZAIIAKADIgDALg");
	this.shape_82.setTransform(56.6,336.025);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F18868").s().p("AAKAsIgegWQgDgCAAgEQAAgFAFgBIAYgIIAEgoQABgCACgCQACgCADAAQADABACACQACACgBADIgFAsQAAAEgEACIgPAFIASANQADACAAADQABADgCACQgCADgEAAIgEgBg");
	this.shape_83.setTransform(57.48,30.42);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F18868").s().p("Ag/gnIAfgMIBggIQgLAZgWAbQgoA1gpAOg");
	this.shape_84.setTransform(75.8,49.925);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0EA9B2").s().p("AiMCmQgxhEg1hXIgrhIQgEgPA2gpQArgggBgKIAmBDQAsBKAZAaQAsAwAXAoIAhA/IAcAuQAOAUACgOQAgjUBSjAQAohgAig1QBXDKhnD4QgiBTgxBLQgnA6gQAKQgNAJgQAAQhIAAiDixg");
	this.shape_85.setTransform(26.2656,95.8755);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F18868").s().p("AACAdQgfgHgBgzIAKAdQASAeAigFQgLAFgKAAIgJgBg");
	this.shape_86.setTransform(0.7,79.7057);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F18868").s().p("AgaAFQARgcAtgIIgcAPQgeAUgNAcQAAgNAJgOg");
	this.shape_87.setTransform(-4.5013,74.575);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F6AD84").s().p("Ag0AyQgyhAAGgPQACgFAaAXIAZAXIgbgsQgagvAFgHQAGgFAiAlIAiAmQgSgegOgdQgeg7AQABQAMAAAiAxQARAYAOAZIgThJQgHggAMANQAWAWAqBrIgFgjQgCgVAKgIQALgIADARIAOBQQAEAdgCAhQgEAQgxAdQgsgPg0hFg");
	this.shape_88.setTransform(-4.3066,73.5748);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AghAJQABgNAGgKIATgBQAWABATAJIgDAVQglgKgbADg");
	this.shape_89.setTransform(108.3,326.725);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgHAJQgDgEgBgEQAAgEAEgDQADgEAEgBQAEAAADAEQAEACABAFQAAAFgEADQgDADgEABIgBAAQgEAAgDgDg");
	this.shape_90.setTransform(101.6,335.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgHAIQgDgDAAgFQgBgDAEgEQACgDAFAAQAEgBAEADQADAEAAAEQABAEgDAEQgDAEgFgBIgBABQgEAAgDgEg");
	this.shape_91.setTransform(101.45,338.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgHAJQgEgDABgFQgBgEADgEQAEgDAEgBQAEAAAEAEQADADAAAEQABAEgDAEQgEADgFABQgDAAgEgDg");
	this.shape_92.setTransform(112.9,339.875);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgHAJQgDgEAAgEQgBgEADgEQAEgDAEgBQALAAAAALQABAEgEAEQgDADgFABQgEAAgDgDg");
	this.shape_93.setTransform(113.35,337.025);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgHAJQgDgEAAgFQgBgDADgEQAEgEAEABQAEgBAEADQAEAEgBAEQABAEgDAEQgEADgFAAIAAABQgDAAgEgDg");
	this.shape_94.setTransform(113.25,334.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#2D2D2D").s().p("AgOG9IhGmlQgsksgdkaIgTjdID6g2QAwDWAUFRQAJCpAAB9IAaMwIh3AFQgeiJgqj7g");
	this.shape_95.setTransform(97.05,250.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQgBgFAEgDQAEgDAEgBQAEAAAEADQAEADAAAFQABAFgEADQgEADgFABIAAAAQgEAAgDgDg");
	this.shape_96.setTransform(56.2,339.65);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAGAKQgRgGgJgIIAFgJQAIAIAQAFIAMAEIgDAKg");
	this.shape_97.setTransform(54.4,338.75);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQgBgEAEgEQADgDAFgBQAEAAAEADQAEADAAAFQABAFgEADQgEAEgEAAIgBAAQgEAAgDgDg");
	this.shape_98.setTransform(58.8,337.15);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAKANQgXgIgJgLIAHgKQADALAZAIIAKADIgCALg");
	this.shape_99.setTransform(56.6,336.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},11).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_78},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_77},{t:this.shape_76},{t:this.shape_48},{t:this.shape_75},{t:this.shape_74},{t:this.shape_45},{t:this.shape_44},{t:this.shape_73},{t:this.shape_42},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_68},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_67},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_66},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},5).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_95},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_45},{t:this.shape_44},{t:this.shape_89},{t:this.shape_42},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_84},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_83},{t:this.shape_9}]},4).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},10).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},23).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},6).to({state:[]},212).wait(71));

	// Layer 2
	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F18868").s().p("AgxAYIgPgDQgHgCADgHQACgGAGABIAqAEQAugCAegfQACgDADAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQACACABADQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQghAjg0ADIgJABQgMAAgLgCg");
	this.shape_100.setTransform(62.3171,41.5143);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F18868").s().p("AAKAsIgegWQgDgCAAgEQAAgFAFgBIAYgIIAEgoQABgHAHABQADABACACQACACgBADIgFAsQAAAEgEACIgPAFIASANQADACAAADQABADgCACQgCADgEAAIgEgBg");
	this.shape_101.setTransform(57.48,30.4188);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#172E47").s().p("AgYABQAMgJAPABQANAAAJAGIgFAHQgGgDgHgCQgOgBgLAIg");
	this.shape_102.setTransform(59.775,25.9707);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#172E47").s().p("Ag1ACIBpgMIACAJIhqAMg");
	this.shape_103.setTransform(77.475,24.35);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#172E47").s().p("AglAqQgRgQgCgXQgBgXAQgRQAQgSAXgBQAXgBARAQQASAQABAXQABAWgQASQgPARgYACIgDAAQgUAAgRgPgAgBguQgUABgNAOQgNAPABASQABAUAOANQAPANATgBQATgBANgPQANgOgBgTQgBgTgOgNQgOgMgRAAIgCAAg");
	this.shape_104.setTransform(52.475,27.525);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#172E47").s().p("AglAqQgRgPgCgYQgBgWAQgSQAQgRAXgCQAXgBARAQQASAQABAXQABAXgQARQgQASgXABIgDAAQgUAAgRgPgAgBguQgUABgNAPQgNAOABATQABATAOANQAPANATgBQATAAANgPQANgPgBgSQgBgUgOgNQgOgMgRAAIgCAAg");
	this.shape_105.setTransform(67.225,26.725);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F18868").s().p("AghAMQgHgCACgHQABgGAIACQAWAGATgHQAJgEAGgGQACgCADAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAFAEgFAGQgEADgIAFQgPAIgQABIgEAAQgLAAgMgDg");
	this.shape_106.setTransform(63.6094,45.7341);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F18868").s().p("AALAJQgKgJgOAEQgHACgBgGQgCgHAHgCQAOgDAMAFQAHADAEAEQAEAEgEAFIgFACQgDAAgCgCg");
	this.shape_107.setTransform(86.7903,30.0319);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#F18868").s().p("AgVAsQgGgBAAgHQADgpAWgXQAKgLAMgEQAGgBACAGQACAGgGADQgKADgIAJQgRASgCAkQAAAGgHABg");
	this.shape_108.setTransform(86.19,30.56);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F6AD84").s().p("AgwgqIAZgXQAcgUAXARQAhAagTA5QgVA8g3ACg");
	this.shape_109.setTransform(87.9337,29.6667);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#172E47").s().p("AghABQAHgFAJgDQAZgJAVAKQAHAEgDAFQgCAGgFAAIgDgBQgcgKgcAOg");
	this.shape_110.setTransform(52.2597,20.9547);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#172E47").s().p("AgBAAQgQAAgOAGQgEACgDgBQgDgBgCgEQgCgFAFgEQAUgMAaAGQAQADANANQAGAHAEAGQgXgQgXAAg");
	this.shape_111.setTransform(67.2359,20.8777);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#172E47").s().p("ABlA2QgHgNgigQQgfgOgGgSQgeAQgqANQhSAagwgXQg9gbARgnQAQghBDgeQBCgcBKgHQBRgIAwAYQBFAiAUBDQARA0gNBUQgLgGgPAAQgeAAgUAgIgcACQgCg5gPgfg");
	this.shape_112.setTransform(68.4964,11.3593);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#172E47").s().p("AgHARQgEgGgBgLQgBgIAEgIQADgGAGgBQAEAAAFAGQAEAHAAAKQABAJgEAIQgDAHgGAAIAAAAQgEAAgEgHg");
	this.shape_113.setTransform(52.9319,27.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#172E47").s().p("AgHARQgEgGgBgKQgBgJAEgIQADgHAGAAQAEAAAFAGQAEAHAAAKQABAKgEAHQgDAHgGAAIAAAAQgEAAgEgHg");
	this.shape_114.setTransform(66.575,26.7517);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#172E47").s().p("AgXgHIgBglQAcgPAVgBQgJBGgcAzQgIgbgDgpg");
	this.shape_115.setTransform(87.925,38.125);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F6AD84").s().p("AhaDxQgegIgWgWQgTgTgIgXIgFgQIgVhlQgKg5gDgpIgBgUQgDg4AKgbQAOgjA3gaQA2gbBEgHQBTgJBBA3QBBA2AGBVIADAuIgBAFQgBAcgEAWQgJBHgdA0IgHANQgeAPguAQIgGABQgqAPhAARQgPAEgPAAQgQAAgQgFg");
	this.shape_116.setTransform(69.8667,27.7552);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F18868").s().p("Ag/gnIAfgMIBggIQgLAZgWAbQgoA1gpAOg");
	this.shape_117.setTransform(75.8,49.925);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F6AD84").s().p("AhABZIgUiQIAggMQA7gXALgDQAsgNASAKIAFCdQgWAQgeAMQgeAMgXAAQgZAAgTgMg");
	this.shape_118.setTransform(77.85,51.5326);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#172E47").s().p("AAFBUQgUgXgMgxQgNgvARgkQAIgSAKgHQAoAKgCBcQgBAvgJAtQgIgCgKgMg");
	this.shape_119.setTransform(50.6603,19);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#3BB9C3").s().p("AgBHhQgdgDgUgNQAQhRANhiQAZjEgKhTQgPgNgXgkQguhGgohqQgHg7AEg/QAKh9A6gQIBOCAQBVCfAkCZIACAxQAABAgGBAQgVDNhVCNIgJAAIgQgBg");
	this.shape_120.setTransform(117.2887,110.395);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#F6AD84").s().p("Ag7CJQgIgKASg7IATg6IguA/QgVAbACgTQADgUAfg8IAdgzQgIANgYANQgOAIgKgFQgKgFALgMIA1g8QANgOAVgOIASgLQARgHA2AVQARAtgWBYQgVBSgQAFQgJACAJhJIgUA0QgVA0gIgBQgIAAAHg1IAJg0IgaBAQgYA0gLAAQAAAAgBAAQgBgBAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_121.setTransform(110.3906,170.7108);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgHDZQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgLhLAMi1IAMiqQABgFAFAAQAEABAAAFIgOCpQgLC1AKBKQABAFgEAAIgBAAIgBAAIgCgBg");
	this.shape_122.setTransform(65.2994,90.0313);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgGDXQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgKhKAKi0IANipQAAgFAFAAQAFABgBAFIgNCoQgKCzAJBKQABAFgEAAIAAAAIgBABIgCgCg");
	this.shape_123.setTransform(81.0208,91.7063);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#0EA9B2").s().p("Ai2BNQgEgWgEgiQgGhFAHg/IFdALIAHA+QAKBJARA5Qg7ANhNAFQgbACgaAAQh0AAhHgjg");
	this.shape_124.setTransform(71.0991,147.7052);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#0EA9B2").s().p("AADAZQgagOgJgjQgBgEAFgCQAEgBABAEQAIAfAVAMQALAGALAAQAFAAAAAFQAAAFgFAAIgBAAQgLAAgNgHg");
	this.shape_125.setTransform(65.9577,63.2926);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#0EA9B2").s().p("AhKBBQgFAAAAgFQAAgFAEAAIACAAQBMgEApg1QAVgcAGgdQABgFAEABQAFABgBAFQgGAdgWAdQgtA7hPAFg");
	this.shape_126.setTransform(88.3333,61.1917);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#3BB9C3").s().p("AlIITIA8w9IFZhBID8BIIhXLrIBSEyQidBtilAFIgMAAQiaAAikhZg");
	this.shape_127.setTransform(77.775,117.0332);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#3BB9C3").s().p("Ag5B+Qh/gLgSgbQgLgPAAghQAAglAPghQAqhcB6gIIBRAEQBbALArAkQAyApgaBJQgaBIg5APQghAJg3AAQgnAAg0gFg");
	this.shape_128.setTransform(84.434,54.4827);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#0EA9B2").s().p("AiLD6QhGgjhNgvIg+goQgEgPAhgsQAdgngIgJIA1AwQA8AyAjAJQAwAMBAAgQA/AhAQAEQAQAFAWgGQAXgFAHgOQBUi0BDi6QAihdAQg6QBWDKhmDnQgiBOgxBEQgmA0gRALQgWAPgkAAQhSAAibhPg");
	this.shape_129.setTransform(19.8707,94.441);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#F18868").s().p("AgkgYIASAaQAXAZAggOQgMALgQABIgBAAQgeAAgOgxg");
	this.shape_130.setTransform(-16.525,98.926);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#F18868").s().p("AgYALQAKgfAqgTIgYAVQgYAbgGAfQgDgMAFgRg");
	this.shape_131.setTransform(-22.8471,94.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#F6AD84").s().p("AgpBBQhAgzACgPQABgFAeAPIAfARQgTgSgTgTQglgnAEgIQAEgHArAcIAqAdQgYgYgWgZQgrgyAQgDQAMgDAtAnQAWAUATAUIgjhCQgPgdAPAJQAbARBCBfIgNgjQgIgUAIgKQAJgKAHAPIAhBLQALAbAGAhQAAAQgoAoQgvgEhDg2g");
	this.shape_132.setTransform(-22.5695,93.5078);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#2D2D2D").s().p("AiZB9QhOgagnhJQgmhIAXhPIACgEIC5gPQDTgOCAABIAYBWQAaBlAEBQQgwAYhQAOQg5AKg4AAQhnAAhoghg");
	this.shape_133.setTransform(78.2796,174.3361);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AghAJQABgNAGgKIATgBQAWABATAJIgDAVQglgKgbADg");
	this.shape_134.setTransform(108.3,326.725);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#0EA9B2").s().p("AiGgDIgBgRQAWAMAlAGQAqAGAygEQBIgEAwgfQAAAfgSALQgjAXhkAFIgZABQhYAAgEgng");
	this.shape_135.setTransform(106.825,351.11);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgHAIQgDgCgBgGQAAgDAEgEQADgDAEAAQAEgBAEADQADADABAFQAAAEgDAEQgDADgFAAIgBABQgEAAgDgEg");
	this.shape_136.setTransform(101.725,332.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgHAJQgDgEgBgEQAAgEAEgDQADgEAEgBQAEAAADAEQAEACABAFQAAAFgEADQgDADgEABIgBAAQgEAAgDgDg");
	this.shape_137.setTransform(101.6,335.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgHAIQgDgDAAgFQgBgDAEgEQACgDAFAAQAEgBAEADQADAEAAAEQABAEgDAEQgDAEgFgBIgBABQgEAAgDgEg");
	this.shape_138.setTransform(101.45,338.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgHAJQgEgDABgFQgBgEADgEQAEgDAEgBQAEAAAEAEQADADAAAEQABAEgEAEQgDADgFABQgDAAgEgDg");
	this.shape_139.setTransform(112.9,339.875);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgHAJQgDgEAAgEQgBgEADgEQAEgDAEgBQALAAAAALQABAEgDAEQgEADgFABQgEAAgDgDg");
	this.shape_140.setTransform(113.35,337.025);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgHAJQgDgEAAgFQgBgDAEgEQADgEAEABQAEgBAEADQAEAEgBAEQABAEgDAEQgEADgFAAIAAABQgDAAgEgDg");
	this.shape_141.setTransform(113.25,334.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AARAAQgpgKgeAOIgFgIQAigRAsAMQAXAGASAJIgFAJQgQgJgWgGg");
	this.shape_142.setTransform(107.325,335.9974);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AASAAQgqgKgeAOIgFgIQAigRAsAMQAXAGASAJIgFAJQgQgJgVgGg");
	this.shape_143.setTransform(107.175,338.9724);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AARAAQgpgKgeAOIgFgIQAigRAsAMQAXAGASAJIgFAJQgQgJgWgGg");
	this.shape_144.setTransform(107.475,332.9974);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#3BB9C3").s().p("AiGB3IgBgQQABgjAWgkQAZghAEgMQANg1APgjQAchDAsALQAsAKASAfQAJAQAAANQAMAhAOAuQAWBAAAAfQAAAfgSAMQgjAYhkAFIgZABQhYAAgEgpg");
	this.shape_145.setTransform(106.825,338.7634);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#2D2D2D").s().p("AgOG9IhGmlQgsksgdkaIgTjdID6g2QAwDWAUFRQAJCpAAB9IAaMwIh3AFQgeiJgqj7g");
	this.shape_146.setTransform(97.05,250.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgQALIACgVQAQgBAOAEIABATQgRgCgQABg");
	this.shape_147.setTransform(58.125,328.3909);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQAAgEADgEQADgEAFAAQAEgBAEAEQAEAEAAAEQAAAEgDAEQgDAEgFAAIgBAAQgEAAgDgDg");
	this.shape_148.setTransform(53.925,342.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AAFAJQgQgGgJgHIAHgIQAJAIANAEIAMADIgDAKg");
	this.shape_149.setTransform(52.175,341.575);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQgBgFAEgDQAEgDAEgBQAEAAAEADQAEADAAAFQABAFgEADQgEADgFABIAAAAQgEAAgDgDg");
	this.shape_150.setTransform(56.2,339.65);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AAGAKQgRgGgJgIIAFgJQAIAIAQAFIAMAEIgDAKg");
	this.shape_151.setTransform(54.4,338.75);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQgBgEAEgEQADgDAFgBQAEAAAEADQAEADAAAFQABAFgEADQgEAEgFAAIAAAAQgEAAgDgDg");
	this.shape_152.setTransform(58.8,337.15);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AAKANQgXgIgJgLIAHgKQADALAZAIIAKADIgCALg");
	this.shape_153.setTransform(56.6,336.025);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#0EA9B2").s().p("AjaASQgHgKADgKIG+gYQgBANgKAKQgJAJgOAAImEAVIgCAAQgLAAgHgJg");
	this.shape_154.setTransform(51.9821,353.9795);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#3BB9C3").s().p("AjaCgQgHgKADgLIABgEQAUgpAugUQAVgJA2gKQAfgGAfgkIA+hWQgBgLABgRIAAgBIADgWIADgSQAGgdAfAEQAfAFAJAdIABADQAHAVAXAEQAXAEAQAGIAbDSQgBANgKAKQgJAKgOAAImEAVIgCAAQgLAAgHgJg");
	this.shape_155.setTransform(51.9821,339.7993);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#060808").s().p("Ah7AnQgFiYgBi8QgCl4AVitIBWAUQBgAYA6AXIgJE5QgNFYgYCaQAoCLgCDmQgBCJgPE2Ih2AGg");
	this.shape_156.setTransform(60.0163,250.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100}]},10).to({state:[]},1).to({state:[{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100}]},260).to({state:[]},1).wait(70));

	// Layer 2
	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#F18868").s().p("AgxAYIgPgDQgHgCADgHQACgGAGABIAqAEQAugCAegfQACgDADAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQACACABADQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQghAjg0ADIgJABQgMAAgLgCg");
	this.shape_157.setTransform(62.3171,41.5143);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F18868").s().p("AAKAsIgegWQgDgCAAgEQAAgFAFgBIAYgIIAEgoQABgHAHABQADABACACQACACgBADIgFAsQAAAEgEACIgPAFIASANQADACAAADQABADgCACQgCADgEAAIgEgBg");
	this.shape_158.setTransform(57.48,30.4188);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#172E47").s().p("AgYABQAMgJAPABQANAAAJAGIgFAHQgGgDgHgCQgOgBgLAIg");
	this.shape_159.setTransform(59.775,25.9707);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#172E47").s().p("Ag1ACIBpgMIACAJIhqAMg");
	this.shape_160.setTransform(77.475,24.35);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#172E47").s().p("AglAqQgRgQgCgXQgBgXAQgRQAQgSAXgBQAXgBARAQQASAQABAXQABAWgQASQgPARgYACIgDAAQgUAAgRgPgAgBguQgUABgNAOQgNAPABASQABAUAOANQAPANATgBQATgBANgPQANgOgBgTQgBgTgOgNQgOgMgRAAIgCAAg");
	this.shape_161.setTransform(52.475,27.525);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#172E47").s().p("AglAqQgRgPgCgYQgBgWAQgSQAQgRAXgCQAXgBARAQQASAQABAXQABAXgQARQgQASgXABIgDAAQgUAAgRgPgAgBguQgUABgNAPQgNAOABATQABATAOANQAPANATgBQATAAANgPQANgPgBgSQgBgUgOgNQgOgMgRAAIgCAAg");
	this.shape_162.setTransform(67.225,26.725);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#F18868").s().p("AghAMQgHgCACgHQABgGAIACQAWAGATgHQAJgEAGgGQACgCADAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAFAEgFAGQgEADgIAFQgPAIgQABIgEAAQgLAAgMgDg");
	this.shape_163.setTransform(63.6094,45.7341);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#F18868").s().p("AALAJQgKgJgOAEQgHACgBgGQgCgHAHgCQAOgDAMAFQAHADAEAEQAEAEgEAFIgFACQgDAAgCgCg");
	this.shape_164.setTransform(86.7903,30.0319);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#F18868").s().p("AgVAsQgGgBAAgHQADgpAWgXQAKgLAMgEQAGgBACAGQACAGgGADQgKADgIAJQgRASgCAkQAAAGgHABg");
	this.shape_165.setTransform(86.19,30.56);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#F6AD84").s().p("AgwgqIAZgXQAcgUAXARQAhAagTA5QgVA8g3ACg");
	this.shape_166.setTransform(87.9337,29.6667);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#172E47").s().p("AghABQAHgFAJgDQAZgJAVAKQAHAEgDAFQgCAGgFAAIgDgBQgcgKgcAOg");
	this.shape_167.setTransform(52.2597,20.9547);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#172E47").s().p("AgBAAQgQAAgOAGQgEACgDgBQgDgBgCgEQgCgFAFgEQAUgMAaAGQAQADANANQAGAHAEAGQgXgQgXAAg");
	this.shape_168.setTransform(67.2359,20.8777);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#172E47").s().p("ABlA2QgHgNgigQQgfgOgGgSQgeAQgqANQhSAagwgXQg9gbARgnQAQghBDgeQBCgcBKgHQBRgIAwAYQBFAiAUBDQARA0gNBUQgLgGgPAAQgeAAgUAgIgcACQgCg5gPgfg");
	this.shape_169.setTransform(68.4964,11.3593);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#172E47").s().p("AgHARQgEgGgBgLQgBgIAEgIQADgGAGgBQAEAAAFAGQAEAHAAAKQABAJgEAIQgDAHgGAAIAAAAQgEAAgEgHg");
	this.shape_170.setTransform(52.9319,27.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#172E47").s().p("AgHARQgEgGgBgKQgBgJAEgIQADgHAGAAQAEAAAFAGQAEAHAAAKQABAKgEAHQgDAHgGAAIAAAAQgEAAgEgHg");
	this.shape_171.setTransform(66.575,26.7517);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#172E47").s().p("AgXgHIgBglQAcgPAVgBQgJBGgcAzQgIgbgDgpg");
	this.shape_172.setTransform(87.925,38.125);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#F6AD84").s().p("AhaDxQgegIgWgWQgTgTgIgXIgFgQIgVhlQgKg5gDgpIgBgUQgDg4AKgbQAOgjA3gaQA2gbBEgHQBTgJBBA3QBBA2AGBVIADAuIgBAFQgBAcgEAWQgJBHgdA0IgHANQgeAPguAQIgGABQgqAPhAARQgPAEgPAAQgQAAgQgFg");
	this.shape_173.setTransform(69.8667,27.7552);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#F18868").s().p("AhAgnIAggMIBhgIQgMAZgWAbQgnA1gqAOg");
	this.shape_174.setTransform(75.8,49.925);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#F6AD84").s().p("AhABZIgUiQIAggMQA7gXALgDQAsgNASAKIAFCdQgWAQgeAMQgeAMgYAAQgYAAgTgMg");
	this.shape_175.setTransform(77.85,51.5326);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#172E47").s().p("AAFBUQgUgXgMgxQgNgvARgkQAIgSAKgHQAoAKgCBcQgBAvgJAtQgIgCgKgMg");
	this.shape_176.setTransform(50.6603,19);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#3BB9C3").s().p("AgBHhQgdgDgUgNQAQhRANhiQAZjEgKhTQgPgNgXgkQguhGgohqQgHg7AEg/QAKh9A6gQIBOCAQBVCfAkCZIACAxQAABAgGBAQgVDNhVCNIgJAAIgQgBg");
	this.shape_177.setTransform(117.2887,110.395);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#F6AD84").s().p("Ag7CJQgIgKASg7IATg6IguA/QgVAbACgTQADgUAfg8IAdgzQgIANgYANQgOAIgKgFQgKgFALgMIA1g8QAVgWAfgRQARgHA2AVQARAtgWBYQgVBSgQAFQgJACAJhJIgUA0QgVA0gIgBQgIAAAHg1IAJg0IgaBAQgYA0gLAAQAAAAgBAAQgBgBAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_178.setTransform(110.3906,170.7108);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgHDZQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgLhLAMi1IAMiqQABgFAFAAQAEABAAAFIgOCpQgLC1AKBKQABAFgEAAIgBAAIgBAAIgCgBg");
	this.shape_179.setTransform(65.2994,90.0313);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgGDXQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgKhKAKi0IANipQAAgFAFAAQAFABgBAFIgNCoQgKCzAJBKQABAFgEAAIAAAAIgBABIgCgCg");
	this.shape_180.setTransform(81.0208,91.7063);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#0EA9B2").s().p("Ai2BNQgEgWgEgiQgGhFAHg/IFdALIAHA+QAKBJARA5Qg7ANhNAFQgbACgaAAQh0AAhHgjg");
	this.shape_181.setTransform(71.0991,147.7052);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#0EA9B2").s().p("AADAZQgagOgJgjQgBgEAFgCQAEgBABAEQAIAfAVAMQALAGALAAQAFAAAAAFQAAAFgFAAIgBAAQgLAAgNgHg");
	this.shape_182.setTransform(65.9577,63.2926);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#0EA9B2").s().p("AhKBBQgFAAAAgFQAAgFAEAAIACAAQBMgEApg1QAVgcAGgdQABgFAEABQAFABgBAFQgGAdgWAdQgtA7hPAFg");
	this.shape_183.setTransform(88.3333,61.1917);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#3BB9C3").s().p("AlIITIA8w9IFZhBID8BIIhXLrIBSEyQidBtilAFIgMAAQiaAAikhZg");
	this.shape_184.setTransform(77.775,117.0332);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#3BB9C3").s().p("Ag5B+Qh/gLgSgbQgLgPAAghQAAglAPghQAqhcB6gIIBRAEQBbALArAkQAyApgaBJQgaBIg5APQghAJg3AAQgnAAg0gFg");
	this.shape_185.setTransform(84.434,54.4827);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#0EA9B2").s().p("AiTENQhGgahNgkIg/gfQgEgOAdg0QAagvgKgHIA9AoQBEAqAjAJIDLA3QAPAEAOgHQAPgGAGgOQCIkgBUjUQBWDKhvDfQgkBJg2BCQgnAwgSANQgbASgwAAQhQAAiNg1g");
	this.shape_186.setTransform(18.8327,93.731);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#F18868").s().p("AgogTIAYAWQAcATAcgUQgJANgPAEIgJABQgZAAgWgng");
	this.shape_187.setTransform(-18.95,103.1837);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#F18868").s().p("AgTARQADghAkgcIgSAaQgRAfABAgQgGgLABgRg");
	this.shape_188.setTransform(-26.015,100.275);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#F6AD84").s().p("AgbBMQhKgkgBgQQAAgGAhAKIAiAKIgtgdQgtgdACgIQACgIAwASIAwASQgdgRgbgUQg1gnAPgHQALgGA0AdQAbAOAYAPIgzg4QgVgZASAGQAdAKBVBOIgUgfQgMgSAGgLQAGgMAKAOIAxBCQARAXANAeQADARgeAvIgPABQgsAAhBggg");
	this.shape_189.setTransform(-25.7613,98.5717);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#2D2D2D").s().p("AiZB9QhOgagnhJQgmhIAXhPIACgEIC5gPQDTgOCAABIAYBWQAaBlAEBQQgwAYhQAOQg5AKg4AAQhnAAhoghg");
	this.shape_190.setTransform(78.2796,174.3361);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AghAJQABgNAGgKIAUgBQAWABARAJIgCAVQgmgKgaADg");
	this.shape_191.setTransform(108.3,326.725);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#0EA9B2").s().p("AiGgDIgBgRQAWAMAlAGQAqAGAygEQBIgEAwgfQAAAfgSALQgjAXhkAFIgZABQhYAAgEgng");
	this.shape_192.setTransform(106.825,351.11);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgHAIQgDgCgBgGQAAgDAEgEQADgDAEAAQAEgBAEADQADADABAFQAAAEgDAEQgDADgFAAIgBABQgEAAgDgEg");
	this.shape_193.setTransform(101.725,332.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgHAJQgDgEgBgEQAAgEADgDQAEgEAEgBQAEAAADAEQAEACABAFQAAAFgEADQgCADgGABIAAAAQgEAAgDgDg");
	this.shape_194.setTransform(101.6,335.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgDAEgEQACgDAFAAQAEgBADADQAEAEABAEQAAAEgDAEQgEAEgEgBIgBABQgEAAgDgEg");
	this.shape_195.setTransform(101.45,338.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgHAJQgDgDAAgFQgBgEAEgEQACgDAFgBQAEAAAEAEQADADAAAEQABAEgDAEQgDADgFABQgEAAgEgDg");
	this.shape_196.setTransform(112.9,339.875);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgHAJQgDgEAAgEQgBgEAEgEQACgDAFgBQALAAAAALQABAEgDAEQgDADgFABQgEAAgEgDg");
	this.shape_197.setTransform(113.35,337.025);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgGAJQgEgEgBgFQAAgDAEgEQACgEAFABQAFgBADADQADAEABAEQAAAEgDAEQgEADgEAAIgBABQgDAAgDgDg");
	this.shape_198.setTransform(113.25,334.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AARAAQgpgKgeAOIgFgIQAigRAsAMQAXAGASAJIgFAJQgQgJgWgGg");
	this.shape_199.setTransform(107.325,335.9974);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AASAAQgqgKgeAOIgFgIQAigRAsAMQAXAGASAJIgFAJQgQgJgVgGg");
	this.shape_200.setTransform(107.175,338.9724);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AARAAQgpgKgeAOIgFgIQAigRAsAMQAXAGASAJIgFAJQgQgJgWgGg");
	this.shape_201.setTransform(107.475,332.9974);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#3BB9C3").s().p("AiGB3IgBgQQABgjAWgkQAZghAEgMQANg1APgjQAchDAsALQAsAKASAfQAJAQAAANQAMAhAOAuQAWBAAAAfQAAAfgSAMQgjAYhkAFIgZABQhYAAgEgpg");
	this.shape_202.setTransform(106.825,338.7634);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#2D2D2D").s().p("AgOG9IhGmlQgtksgckaIgTjdID6g2QAxDWASFRQAKCpAAB9IAaMwIh3AFQgfiJgpj7g");
	this.shape_203.setTransform(97.05,250.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgQALIACgVQAQgBAOAEIABATQgRgCgQABg");
	this.shape_204.setTransform(58.125,328.3909);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQAAgEADgEQADgEAFAAQAEgBAEAEQAEAEAAAEQAAAEgDAEQgDAEgFAAIgBAAQgEAAgDgDg");
	this.shape_205.setTransform(53.925,342.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AAFAJQgQgGgJgHIAHgIQAJAIANAEIAMADIgDAKg");
	this.shape_206.setTransform(52.175,341.575);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQAAgFADgDQAEgDAEgBQAEAAAEADQADADABAFQABAFgEADQgEADgEABIgBAAQgEAAgDgDg");
	this.shape_207.setTransform(56.2,339.65);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AAGAKQgQgGgLgIIAGgJQAIAIARAFIALAEIgCAKg");
	this.shape_208.setTransform(54.4,338.75);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQAAgEADgEQADgDAFgBQAFAAADADQADADABAFQAAAFgDADQgEAEgEAAIgBAAQgEAAgDgDg");
	this.shape_209.setTransform(58.8,337.15);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AAKANQgXgIgJgLIAGgKQAEALAZAIIALADIgDALg");
	this.shape_210.setTransform(56.6,336.025);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#0EA9B2").s().p("AjaASQgHgKADgKIG+gYQgBANgKAKQgJAJgOAAImEAVIgCAAQgLAAgHgJg");
	this.shape_211.setTransform(51.9821,353.9795);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#3BB9C3").s().p("AjaCgQgHgKADgLIABgEQAUgpAugUQAVgJA2gKQAfgGAfgkIA+hWQgBgLABgRIAAgBIADgWIADgSQAGgdAfAEQAfAFAJAdIABADQAHAVAXAEQAXAEAQAGIAbDSQgBANgKAKQgJAKgOAAImEAVIgCAAQgLAAgHgJg");
	this.shape_212.setTransform(51.9821,339.7993);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#060808").s().p("Ah7AnQgFiYgBi8QgCl4AVitIBWAUQBgAYA6AXIgJE5QgNFYgYCaQAoCLgCDmQgBCJgPE2Ih2AGg");
	this.shape_213.setTransform(60.0163,250.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157}]},9).to({state:[]},1).to({state:[{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157}]},262).to({state:[]},1).wait(69));

	// Layer 2
	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#F18868").s().p("AgyAYIgOgDQgHgCACgHQABgCADgCIAFAAIAqAEQAugDAdgfQAFgFAFAEQAFAFgEAFQgiAkgzADIgJAAQgMAAgMgCg");
	this.shape_214.setTransform(62.358,41.4827);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#F18868").s().p("AAKArIgegVQgEgCABgFQABgFAEAAIAYgIIAFgoQAAgHAHABQAHAAgBAIIgEAsQgBAEgEACIgPAFIASANQAFAEgDAGQgCADgDAAIgFgCg");
	this.shape_215.setTransform(57.4963,30.4188);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#172E47").s().p("AgYABQANgJAOABQANABAJAGIgFAHQgGgEgHgBQgOgCgLAJg");
	this.shape_216.setTransform(59.8,25.9457);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#172E47").s().p("Ag1ACIBqgNIABAKIhpANg");
	this.shape_217.setTransform(77.475,24.325);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#172E47").s().p("AglAqQgSgQgBgXQgBgWAQgSQAPgRAYgBQAWgCASAQQASAQABAXQABAWgQASQgPASgYABIgDAAQgVAAgQgPgAgCguQgTABgNAPQgNAOAAATQABATAPANQAPAOATgBQATgBANgPQAOgPgBgSQgBgUgQgNQgNgMgSAAIgCAAg");
	this.shape_218.setTransform(52.5,27.4964);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#172E47").s().p("AglAqQgSgQgBgXQgBgWAQgSQAPgSAYgBQAWgBASAQQARAQACAXQABAWgQASQgQARgXACIgDAAQgVAAgQgPgAgCguQgTABgNAOQgNAPAAASQACAUAPANQAOANATgBQATgBANgPQAOgOgBgTQgBgTgPgNQgOgMgSAAIgCAAg");
	this.shape_219.setTransform(67.25,26.725);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#F18868").s().p("AghAMQgHgCACgHQACgFAHACQAWAFATgHQAJgEAGgGQAFgFAFAFQAFAFgFAFQgQAQgbABIgFAAQgMAAgKgDg");
	this.shape_220.setTransform(63.639,45.6784);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#F18868").s().p("AAKAJQgJgJgOAEQgGACgDgGQAAgCABgDQACgCACgBQAWgHAPAPQADACAAADQAAACgDACQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_221.setTransform(86.8188,29.9831);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#F18868").s().p("AgVAsQgDAAgCgCQgCgDABgCQACgqAXgXQAKgLAMgEQACAAADABQADACAAACQACAHgHACQgJADgJAKQgQASgCAjQgBAHgGAAg");
	this.shape_222.setTransform(86.2422,30.5188);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#F6AD84").s().p("AgwgqIAZgXQAcgUAXASQAhAZgTA5QgVA9g3ABg");
	this.shape_223.setTransform(87.9371,29.6417);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#172E47").s().p("AghABQAIgFAIgDQAagIAUAKQAHACgCAGQgCAFgGABIgDAAQgcgLgcAOg");
	this.shape_224.setTransform(52.2735,20.9472);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#172E47").s().p("AggAGQgDACgDgBQgEgBgBgEQgDgFAGgEQAUgMAaAFQAPAEANANQAHAHAEAGQgngdgmATg");
	this.shape_225.setTransform(67.2638,20.8765);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#172E47").s().p("ABlA3QgHgOgigPQgggPgFgSQgeARgqANQhSAZgwgWQg9gcARgmQAPgiBEgdQBCgdBKgHQBRgHAwAXQBFAiAUBDQARA1gNBUQgLgHgPAAQgeAAgVAgIgbACQgCg5gPgeg");
	this.shape_226.setTransform(68.5214,11.3343);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#172E47").s().p("AgIARQgEgGAAgKQgBgJAEgIQADgHAGAAQAEAAAEAHQAFAHAAAJQABAJgEAIQgDAHgGAAIAAAAQgFAAgEgHg");
	this.shape_227.setTransform(52.975,27.4517);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#172E47").s().p("AgIARQgEgGAAgLQgBgIAEgHQADgIAFAAQAFAAAEAGQAEAIABAJQABAJgEAHQgDAIgGAAIAAAAQgEAAgFgHg");
	this.shape_228.setTransform(66.608,26.75);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#172E47").s().p("AgXgHIgBglQAdgPAUgBQgKBFgbA0QgJgbgCgpg");
	this.shape_229.setTransform(87.95,38.125);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#F6AD84").s().p("AhaDxQgdgIgWgVQgTgTgJgYQgEgJgBgHIgUhlQgKg5gEgpIgBgUQgDg4AKgaQAOgjA3gbQA2gaBEgIQBTgIBBA2QBBA2AGBVIADAvIgBAEQgCAhgCASQgKBGgdA0IgHANQgiARgqAOIgFACQgrAOhAARQgPAEgOAAQgRAAgQgFg");
	this.shape_230.setTransform(69.8667,27.7309);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#F18868").s().p("AhAgnIAhgMIBggIQgMAYgVAcQgoA1gpAOg");
	this.shape_231.setTransform(75.8,49.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#F6AD84").s().p("AhABZIgUiQIAggNIBGgZQAsgNASAKIAFCcQgWARgeAMQgeAMgYAAQgYAAgTgMg");
	this.shape_232.setTransform(77.85,51.5139);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#172E47").s().p("AAFBUQgUgXgMgxQgNgwARgjQAIgSALgHQAoALgCBbQgBAvgKAtQgIgCgKgMg");
	this.shape_233.setTransform(50.6853,18.95);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#3BB9C3").s().p("AgBHhQgegDgTgNQAQhRANhiQAZjEgLhTQgOgOgXgjQguhHgohpQgHg7AEg/QAKh9A6gQIBOCAQBVCfAjCZIACAxQABBAgHBAQgVDNhUCMIgMABIgNgBg");
	this.shape_234.setTransform(117.3137,110.3875);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#F6AD84").s().p("Ag7CJQgHgKASg7IATg5IgvA/QgVAaACgTQADgUAgg8IAeg1QgIAOgaAOQgOAIgKgFQgKgEALgMIA1g9QAVgWAggRQAQgHA2AVQARAugWBXQgVBTgQAEQgJACAJhJIgUA0QgVA0gIAAQgIgBAIg0IAIg1IgaBBQgYAzgLAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_235.setTransform(110.3906,170.6759);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AgEDaQgEAAgBgEQgKhLALi1IANirQAAgEAFAAQAFABgBAEIgNCqQgLC1AKBJQAAAFgDABg");
	this.shape_236.setTransform(65.3078,90.025);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgDDYQgEAAgBgDQgKhLALi1IAMipQAAgEAFABQAFAAgBAFIgNCnQgKC1AJBJQABAEgDABg");
	this.shape_237.setTransform(81.0269,91.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#0EA9B2").s().p("Ai2BNQgEgWgEgiQgGhEAHg/IFeALIAGA+QAKBIARA5Qg7ANhNAFQgbABgaAAQhzAAhIgig");
	this.shape_238.setTransform(71.0991,147.6802);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#0EA9B2").s().p("AADAZQgagOgJgjQgBgFAFgBQAEgBABAEQAIAfAVAMQALAGALAAQAFAAAAAFQAAAFgFAAIgBAAQgMAAgMgHg");
	this.shape_239.setTransform(65.9659,63.2926);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#0EA9B2").s().p("AhPA8QAAgFAEAAIACAAQBMgEApg2QAVgbAGgeQABgEAFABQAEABgBAEQgGAegWAdQgsA7hQAEIgCABQgFAAAAgFg");
	this.shape_240.setTransform(88.3341,61.1909);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#3BB9C3").s().p("AlJITIA9w9IFZhBID8BIIhXLsIBSExQicBuimAEIgNAAQiZAAilhZg");
	this.shape_241.setTransform(77.8,116.9833);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#3BB9C3").s().p("Ag5B+Qh/gLgSgbQgKgQgBghQAAgkAQghQAphcB6gIIBRAEQBbALAsAkQAxApgaBJQgaBIg5APQghAJg3AAQgnAAg0gFg");
	this.shape_242.setTransform(84.437,54.4827);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#0EA9B2").s().p("AiiEiQhpgVhagfQgDgMAOg+QAMg4gLgIIBDAqQBKApAkgEQA2gFBdAKQAtAFAkAGQBai/BgivQAwhYAdgyQBWDKh/DPQgpBEg8A8QgoAogWAPQgnAbhPAAQhDAAhggUg");
	this.shape_243.setTransform(18.5589,92.4692);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#F18868").s().p("AgpgKIAdAOQAgAJAWgbIgFAJQgGAJgIAFQgJAGgJAAQgUAAgagZg");
	this.shape_244.setTransform(-21.125,109.0568);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#F18868").s().p("AgIAXQgIggAbgmIgKAeQgHAjAKAeQgIgJgEgQg");
	this.shape_245.setTransform(-28.9542,107.925);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#F6AD84").s().p("AAABUQhQgMgGgPQgCgFAigBQASgBARAAQgZgGgagIQg0gPAAgJQAAgIAzADIAzAEQghgJgfgKQg+gWALgLQAJgIA7AMQAdAFAbAIIhAgnQgcgSASABQAgABBoAxIgdgYQgQgNACgNQACgNAOAKIBCAxQAYARAVAZQAIAPgPA2QgaAMgrAAQgaAAghgFg");
	this.shape_246.setTransform(-29.1008,105.998);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#2D2D2D").s().p("AiZB8QhPgZgmhJQgmhIAXhPIABgEIC6gPQDSgOCAABIAZBWQAaBlAEBQQgwAYhRAOQg4AKg5AAQhnAAhngig");
	this.shape_247.setTransform(78.3296,174.3111);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AggAJQgBgNAHgKIAUgBQAWACASAIIgCAVQgngKgZADg");
	this.shape_248.setTransform(108.3482,326.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#0EA9B2").s().p("AiGgDIgBgRQAWAMAlAGQAqAGAygEQBHgEAxgfQAAAegSAMQgiAXhlAFIgXABQhaAAgEgng");
	this.shape_249.setTransform(106.825,351.105);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgGAJQgEgEgBgEQAAgEAEgEQACgEAFAAQAFAAADAEQADACABAFQAAAEgDAEQgEADgEABIgBAAQgEAAgCgDg");
	this.shape_250.setTransform(101.75,332.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgHAIQgDgCAAgGQgBgDADgEQAEgDAEAAQAEgBAEADQAEADgBAFQABAEgEADQgDAEgFAAIAAABQgDAAgEgEg");
	this.shape_251.setTransform(101.6,335.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgHAJQgDgEgBgEQAAgFADgDQADgEAFAAQAEAAAEAEQADACAAAFQABAEgEADQgDAEgEABIgBAAQgDAAgEgDg");
	this.shape_252.setTransform(101.4531,338.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgGAIQgEgCgBgGQAAgDAEgEQACgDAFgBQAFAAADADQADAEABAEQAAAEgDAEQgEAEgEAAIgBAAQgDAAgDgEg");
	this.shape_253.setTransform(112.9,339.85);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgHAJQgDgEgBgEQAAgEADgDQADgEAFgBQAEAAAEAEQADACABAFQAAAFgDADQgEADgEABIgBAAQgEAAgDgDg");
	this.shape_254.setTransform(113.375,337);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgHAJQgDgDAAgFQgBgEAEgEQADgDAEgBQAEAAAEAEQADADABAEQAAAEgDAEQgDADgFABQgEAAgEgDg");
	this.shape_255.setTransform(113.2969,334.175);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AASABQgqgLgeAOIgFgIQAigRAsAMQAWAGATAJIgGAJQgPgJgVgFg");
	this.shape_256.setTransform(107.35,335.9474);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AARABQgpgLgeAOIgEgIQAhgRAsAMQAXAGASAJIgGAJQgPgJgWgFg");
	this.shape_257.setTransform(107.2,338.9474);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AASABQgrgLgdAOIgFgIQAhgRAtAMQAXAGARAJIgEAJQgQgIgVgGg");
	this.shape_258.setTransform(107.5,332.9474);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#3BB9C3").s().p("AiGB4IgBgRQABgjAWgkQAZghAEgMQANg1APgjQAchDAsALQAsAKATAfQAJAQAAANIAKAiIAPAuQAWA9AAAiQAAAegSANQgiAXhlAFIgXABQhaAAgEgog");
	this.shape_259.setTransform(106.825,338.7338);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#2D2D2D").s().p("AgPG9IhFmlQgtksgckaIgTjeID6g0QAwDWAUFRQAJCoAAB9IAaMvIh3AHQgeiLgrj6g");
	this.shape_260.setTransform(97.1,250.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgRALIADgVQAQgBAOAEIABASQgQgBgSABg");
	this.shape_261.setTransform(58.15,328.365);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQAAgFADgDQADgDAFgBQAFAAADADQADADABAFQAAAFgDADQgDADgFABIgBAAQgEAAgDgDg");
	this.shape_262.setTransform(53.95,342.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AAGAJQgQgFgKgIIAHgIQAGAHAQAFIAMADIgDALg");
	this.shape_263.setTransform(52.2,341.55);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgDADgEQADgEAFAAQAEgBAEAEQAEADAAAFQAAAEgDAEQgDAEgFAAIgBAAQgEAAgDgDg");
	this.shape_264.setTransform(56.2031,339.65);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AAGAKQgRgGgKgIIAHgJQAIAIAQAFIALAEIgCAKg");
	this.shape_265.setTransform(54.4,338.725);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AgHAJQgDgDgBgGQAAgEADgDQADgEAFAAQAFAAADADQAEAEAAAEQAAAEgDAEQgDADgFABIgBAAQgEAAgDgDg");
	this.shape_266.setTransform(58.8,337.15);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AAKANQgXgIgJgLIAGgJQAGAKAXAIIAKADIgDAKg");
	this.shape_267.setTransform(56.625,336);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#0EA9B2").s().p("AjZASQgIgKADgKIG+gYQgBAOgJAJQgKAJgOAAImDAVIgDAAQgLAAgGgJg");
	this.shape_268.setTransform(51.9967,353.9795);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#3BB9C3").s().p("AjZCgQgIgKADgLIACgEQATgpAugUQAVgJA2gKQAfgGAfgkIA+hWQgBgLABgRIAAgBIAGgpQAHgcAfAEQAeAFAJAdIABADQAIAUAWAEQAXAFARAGIAaDKIAAAIQgBAOgJAJQgKAKgOAAImDAVIgDAAQgLAAgGgJg");
	this.shape_269.setTransform(51.9967,339.7989);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#060808").s().p("Ah7AnQgFiYgBi8QgCl4AVitIBWAUQBgAYA6AXIgJE5QgNFXgXCbQAnCLgCDnQgBCJgPE1Ih2AHg");
	this.shape_270.setTransform(60.0163,250.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214}]},8).to({state:[]},1).to({state:[{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214}]},264).to({state:[]},1).wait(68));

	// Layer 2
	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#F18868").s().p("AgyAYIgOgDQgHgCACgHQABgCADgCQACgBADABIAqAEQAugDAdgfQAFgFAFAEQAFAFgEAFQgiAkgzADIgGAAQgNAAgOgCg");
	this.shape_271.setTransform(62.358,41.4726);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#F18868").s().p("AAKArIgegVQgEgCABgFQABgFADAAIAZgIIAEgoQAAgHAIABQAGAAAAAIIgFAsQgBAEgEACIgPAFIATANQAFAEgDAGQgDADgDAAIgEgCg");
	this.shape_272.setTransform(57.515,30.4188);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#172E47").s().p("AgYABQAMgJAPABQANABAJAGIgFAGQgGgDgHgCQgOgBgLAIg");
	this.shape_273.setTransform(59.825,25.9207);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#172E47").s().p("Ag1ACIBqgNIABAKIhpANg");
	this.shape_274.setTransform(77.475,24.325);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#172E47").s().p("AglAqQgSgQgBgXQgBgWAQgSQAPgRAYgBQAWgCASAQQARAQABAXQACAXgQARQgQASgXABIgDAAQgVAAgQgPgAgCguQgTABgNAPQgNAOABATQABATAOANQAPANASgBQAUAAANgPQANgPgBgSQgBgUgPgNQgNgNgSAAIgCABg");
	this.shape_275.setTransform(52.5036,27.4964);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#172E47").s().p("AglAqQgSgQgBgXQgBgXAQgRQAQgSAXgBQAWgBASAQQARAPABAYQACAWgQASQgQARgXABIgDABQgVAAgQgPgAgCguQgTABgNAOQgNAPABASQABAUAOANQAPANASgBQAUgBANgPQANgOgBgTQgBgTgPgNQgNgMgSAAIgCAAg");
	this.shape_276.setTransform(67.2536,26.7036);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#F18868").s().p("AgiAMQgGgCACgHQABgCACgBQADgBACABQAXAFASgHQAKgEAGgGQAEgFAGAFQAFAFgFAFQgQAQgbABIgFAAQgKAAgNgDg");
	this.shape_277.setTransform(63.6666,45.6784);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#F18868").s().p("AAKAJQgJgJgOAEQgGACgCgGQgCgGAGgCQAPgEAMAFQAGADAEAEQAGAFgGAEQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgEAAgCgCg");
	this.shape_278.setTransform(86.8475,29.9908);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#F18868").s().p("AgVAsQgDAAgCgCQgCgDABgDQACgpAXgXQAKgLAMgEQAHgCABAHQACAHgHACQgJADgJAKQgQASgCAjQgBAHgGAAg");
	this.shape_279.setTransform(86.2422,30.5028);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#F6AD84").s().p("AgwgqIAZgXQAcgUAXASQAhAZgTA5QgVA9g3ABg");
	this.shape_280.setTransform(87.9371,29.6417);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#172E47").s().p("AghABQAHgFAJgDQAagIAUAKQAHACgCAGQgCAFgGABIgDgBQgcgKgcAOg");
	this.shape_281.setTransform(52.2735,20.9222);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#172E47").s().p("AggAHQgHADgEgHQgCgGAFgDQAVgNAZAGQAPADANANQAHAHAEAGQgngcgmATg");
	this.shape_282.setTransform(67.2859,20.841);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#172E47").s().p("ABlA3QgHgOgigPQgfgPgGgSQgeARgqAMQhSAagwgWQg9gcARgmQAPgiBEgdQBCgdBKgHQBRgIAwAYQBFAiAUBDQARA1gNBUQgLgHgPAAQgeAAgVAgIgbACQgCg5gPgeg");
	this.shape_283.setTransform(68.5214,11.3234);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#172E47").s().p("AgIARQgEgGAAgKQgBgJAEgIQADgGAGgBQAEAAAEAGQAFAIAAAJQABAJgEAIQgDAHgGAAIAAAAQgFAAgEgHg");
	this.shape_284.setTransform(52.975,27.45);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#172E47").s().p("AgIARQgEgGAAgLQgBgIAEgHQADgIAGAAQAEAAAEAGQAFAHAAAKQABAJgEAHQgDAIgGAAIAAAAQgFAAgEgHg");
	this.shape_285.setTransform(66.625,26.75);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#172E47").s().p("AgXgHIgBglQAdgPAUgBQgKBFgbA0QgJgbgCgpg");
	this.shape_286.setTransform(87.95,38.125);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#F6AD84").s().p("AhaDxQgegIgVgWQgTgSgJgYQgEgJgBgHIgUhlQgKg5gEgpIgBgUQgDg6AKgYQAOgjA4gbQA1gaBEgIQBTgIBBA2QBBA2AGBVIADAvIgBAEQAAAYgEAbQgKBGgdA0QgDAIgEAFQgeAPguAQIgFACQgrAOhAARQgPAEgOAAQgRAAgQgFg");
	this.shape_287.setTransform(69.875,27.7309);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#F18868").s().p("AhAgmIAhgNIBfgIQgLAZgVAbQgoA2gpANg");
	this.shape_288.setTransform(75.8,49.875);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#F6AD84").s().p("Ag/BZIgViQIAggNQA7gWALgDQAsgNASAKIAFCcQgWARgeAMQgeAMgYAAQgYAAgSgMg");
	this.shape_289.setTransform(77.85,51.5091);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#172E47").s().p("AAFBUQgUgXgMgxQgNgwARgjQAIgSAKgHQAoALgCBbQgBAvgJAtQgIgCgKgMg");
	this.shape_290.setTransform(50.7103,18.95);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#3BB9C3").s().p("AgBHhQgegDgTgNQAQhRANhiQAZjEgLhTQgOgOgXgjQguhHgohpQgHg7AEg/QAKh9A6gQIBOCAQBVCfAjCZIACAxQABA/gHBBQgUDNhVCMIgMABIgNgBg");
	this.shape_291.setTransform(117.3137,110.3875);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#F6AD84").s().p("Ag7CJQgIgKASg7IATg5IguA/QgWAaADgTQADgUAfg8IAfg1QgJAOgZAOQgOAIgKgFQgKgEALgMIA1g9QAVgWAfgRQAQgHA3AVQARAugWBXQgVBTgRAEQgIACAIhJIgTA0QgWA0gIgBQgIAAAIg0IAJg1IgaBBQgYAzgLAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_292.setTransform(110.4156,170.6759);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AgEDaQgEAAgBgEQgKhLALi2IANiqQAAgFAFABQAFAAgBAFIgNCqQgLC1AKBJQAAAFgDABg");
	this.shape_293.setTransform(65.3078,90.0167);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AgDDZQgEAAgBgEQgKhLALi0IAMipQABgFAEABQAEAAAAAFIgNCoQgKCzAKBKQAAAFgDABg");
	this.shape_294.setTransform(81.0436,91.6917);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#0EA9B2").s().p("Ai2BNQgFgWgDgiQgHhEAIg/IFdALIAHA+QAKBIARA5Qg7ANhNAFQgcABgZAAQhzAAhIgig");
	this.shape_295.setTransform(71.131,147.6802);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#0EA9B2").s().p("AADAZQgagOgJgkQgBgEAFgBQAEgBACAEQAHAfAVAMQALAGALAAQAFgBAAAGQAAAEgFABQgMAAgNgHg");
	this.shape_296.setTransform(65.9659,63.2909);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#0EA9B2").s().p("AhPA8QAAgEAEgBIACAAQBMgEApg2QAVgbAGgeQABgEAFABQAEABgBAEQgGAegWAdQgtA7hPAEIgCAAIgCAAQgCAAgBgEg");
	this.shape_297.setTransform(88.3341,61.1736);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#3BB9C3").s().p("AlIITIA8w9IFZhBID8BIIhXLrIBSEyQidBuilAEIgNAAQiZAAikhZg");
	this.shape_298.setTransform(77.8,116.9832);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#3BB9C3").s().p("Ag5B+Qh/gLgSgbQgLgQAAghQAAgkAPghQAphcB7gIIBRAEQBbALArAkQAyAogaBKQgaBIg5APQgiAJg4AAQgmAAgzgFg");
	this.shape_299.setTransform(84.459,54.4533);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#0EA9B2").s().p("AihE1QhkgBhWgLQgBgGgGhBQgEg0gMgIIBSAYQBYAYAkgDQBXgJBtgXQBai9B1ioQA7hUAoguQBVDIiJDFQhIBnhmBGQhFAvi4AAIgUAAg");
	this.shape_300.setTransform(17.1178,92.4061);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#F18868").s().p("AgoABIAfAJQAhAEARgfIgDAKQgEAKgIAGQgJAJgOAAQgRAAgagRg");
	this.shape_301.setTransform(-23.1,116.2866);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#F18868").s().p("AgFAZQgNgeAUgqIgEAgQgCAkAPAbQgLgHgFgQg");
	this.shape_302.setTransform(-30.7367,116.775);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#F6AD84").s().p("AhKBKQgDgEAigIIAigGQgagBgbgEQg2gGgBgJQgCgHAzgGQAZgEAagBQgjgDgggGQhBgJAKgNQAHgKA8ACQAdAAAdADQg1gTgSgIQgegNASgDQAfgEBvAeIgggSQgRgLgBgNQAAgNAPAHIBKAlQAaANAZAWQAKAMgFA4QgmAbhXACIgTAAQg/AAgHgMg");
	this.shape_303.setTransform(-31.3526,114.6753);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#2D2D2D").s().p("AiZB8QhPgZgmhJQgmhIAXhPIABgEIC6gPQDSgOCAABIAZBWQAaBlAEBQQgwAYhRAOQg4AKg5AAQhnAAhngig");
	this.shape_304.setTransform(78.3296,174.3111);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AghAJQAAgNAHgKIATgBQAWABATAJIgDAVQgmgKgaADg");
	this.shape_305.setTransform(108.35,326.675);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#0EA9B2").s().p("AiGgDIgBgRQAWAMAlAGQAqAGAygEQBIgEAwgfQAAAfgSALQgiAXhlAFIgXABQhaAAgEgng");
	this.shape_306.setTransform(106.825,351.105);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AgGAJQgEgEgBgEQAAgEAEgEQACgEAFAAQAFAAADAEQADACABAFQAAAEgDAEQgEADgEABIgBAAQgDAAgDgDg");
	this.shape_307.setTransform(101.75,332.6);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AgHAIQgDgCAAgGQgBgDAEgEQADgDAEAAQAEgBAEADQAEADgBAFQABAEgDADQgEAEgFAAIAAABQgDAAgEgEg");
	this.shape_308.setTransform(101.6,335.7);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AgHAJQgDgDgBgFQAAgEADgEQADgDAFAAQAEgBAEAEQADADABAEQAAAEgDAEQgEADgEABQgEAAgEgDg");
	this.shape_309.setTransform(101.475,338.7969);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AgGAIQgEgCgBgGQAAgDAEgEQADgDAEgBQAFAAADADQADAEABAEQAAAEgEAEQgDADgEABIgBAAQgDAAgDgEg");
	this.shape_310.setTransform(112.9,339.85);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AgHAJQgDgEgBgEQAAgFAEgDQADgEAEAAQAEAAAEAEQADACABAFQAAAEgDADQgEAEgEABIgBAAQgEAAgDgDg");
	this.shape_311.setTransform(113.375,337);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AgHAIQgEgDABgEQgBgEADgEQAEgDAEgBQAEAAAEADQADADAAAFQABAEgDAEQgEADgFAAIAAABQgEAAgDgEg");
	this.shape_312.setTransform(113.3,334.1531);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AARABQgpgLgeAOIgFgIQAhgRAtAMQAXAGASAJIgGAJQgPgJgWgFg");
	this.shape_313.setTransform(107.375,335.9474);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AARAAQgpgKgeAOIgFgIQAhgRAtAMQAXAGASAJIgGAJQgPgJgWgGg");
	this.shape_314.setTransform(107.225,338.9474);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AARABQgpgLgeAOIgFgIQAhgRAtAMQAXAGASAJIgGAJQgPgJgWgFg");
	this.shape_315.setTransform(107.525,332.9474);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#3BB9C3").s().p("AiGB4IgBgRQABgjAWgkQAZghAEgMQANg1APgjQAdhDArALQAtAKASAfQAJAQAAANIAKAiIAPAuQAWA9AAAiQAAAfgSAMQgiAXhlAFIgXABQhaAAgEgog");
	this.shape_316.setTransform(106.825,338.7334);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#2D2D2D").s().p("AgPG9IhGmlQgsksgckaIgTjeID6g1QAwDWAUFRQAJCpAAB9IAaMvIh3AHQgfiLgqj6g");
	this.shape_317.setTransform(97.1,250.275);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AgRAMIADgWQAQgBAOAEIABATQgQgCgSACg");
	this.shape_318.setTransform(58.15,328.3409);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AgHAJQgDgDgBgFQAAgFADgDQADgEAFAAQAFAAADADQADADABAFQAAAFgDADQgDADgFABIgBAAQgEAAgDgDg");
	this.shape_319.setTransform(53.95,342.4);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AAGAJQgRgFgJgIIAGgIQAJAHAOAFIAMADIgDALg");
	this.shape_320.setTransform(52.2,341.55);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQAAgEADgEQADgEAFAAQAEAAAEADQAEADAAAFQAAAEgDAEQgDAEgFAAQgEAAgEgDg");
	this.shape_321.setTransform(56.225,339.625);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AAGAKQgRgGgKgIIAHgJQAIAIAQAFIAMAEIgDAKg");
	this.shape_322.setTransform(54.4,338.725);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEADgDQADgEAFAAQAEAAAEADQAEADAAAFQAAAEgDAEQgDADgFABIgBAAQgEAAgDgDg");
	this.shape_323.setTransform(58.825,337.15);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AAKANQgXgIgJgLIAGgJQAGAKAXAIIAKADIgCAKg");
	this.shape_324.setTransform(56.625,336);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#0EA9B2").s().p("AjZASQgIgKADgKIG+gYQgBANgJAKQgKAJgOAAImDAVIgCAAQgLAAgHgJg");
	this.shape_325.setTransform(51.9967,353.9513);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#3BB9C3").s().p("AjaCgQgIgKAEgLQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAUgpAugUQAVgJA2gKQAfgGAfgkIA9hXIABgbIAAgBIAGgpQAGgdAfAFQAfAEAIAeIABADQAIAUAXAEQAXAEAQAHIAbDKQABAEgBAEQgBANgKAKQgJAKgOAAImEAVIgBAAQgMAAgHgJg");
	this.shape_326.setTransform(52.0217,339.771);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#060808").s().p("Ah7AnQgFiYgBi8QgCl4AVitIBWAVQBgAXA6AYIgJE4QgNFYgXCaQAnCLgCDnQgBCJgPE2Ih2AFg");
	this.shape_327.setTransform(60.0163,250.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271}]},7).to({state:[]},1).to({state:[{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271}]},266).to({state:[]},1).wait(67));

	// Layer 2
	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#F18868").s().p("AgxAYIgPgDQgCgBgCgDQgBgCABgDQABgDACgBIAFgBIAqAEQAugDAegfQACgCADAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQADACAAADQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABQghAjg0ADIgJABQgMAAgLgCg");
	this.shape_328.setTransform(62.33,41.5143);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#F18868").s().p("AAKAsIgegWQgDgCAAgFQABgEAEgBIAYgIIAEgoQABgCACgCQACgCADAAQADABACACQACACgBADIgEAsQgBAEgEACIgPAFIASANQADACAAADQABADgCACQgCADgDAAIgFgBg");
	this.shape_329.setTransform(57.48,30.42);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#172E47").s().p("AgYABQAMgJAQABQAMAAAJAGIgFAHQgGgDgHgCQgOgBgLAIg");
	this.shape_330.setTransform(59.775,25.9707);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#172E47").s().p("Ag1ACIBqgMIABAJIhqAMg");
	this.shape_331.setTransform(77.475,24.35);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#172E47").s().p("AglAqQgRgQgCgXQgBgXAQgRQAQgSAXgBQAXgBARAQQASAQABAXQABAWgQASQgPARgYABIgDABQgVAAgQgPgAgBguQgUABgNAOQgNAPABASQABAUAPANQAOANATgBQATgBANgPQANgOgBgTQAAgTgPgNQgOgMgRAAIgCAAg");
	this.shape_332.setTransform(52.475,27.5036);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#172E47").s().p("AglAqQgRgPgCgYQgBgWAQgSQAQgRAXgCQAXgBARAQQASAQABAXQABAXgQARQgQASgXABIgDAAQgUAAgRgPgAgBguQgUABgNAOQgNAPABATQABATAPANQAOANATgBQATgBANgOQANgPgBgSQAAgUgPgNQgOgMgRAAIgCAAg");
	this.shape_333.setTransform(67.225,26.725);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#F18868").s().p("AghAMQgDgBgBgDQgCgCABgDQABgGAIACQAWAGATgHQAJgEAGgGQACgCADAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQACACAAADQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQgQARgbABQgQAAgLgDg");
	this.shape_334.setTransform(63.6188,45.725);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#F18868").s().p("AAKAJQgJgJgOAEQgHACgCgGQAAgDABgCQACgDACgBQAWgGAPAPQAFAEgFAFIgEACQgDAAgDgCg");
	this.shape_335.setTransform(86.8063,30.0143);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#F18868").s().p("AgVAsQgHgBAAgHQADgpAWgXQALgLALgEQAHgBACAGQACAGgHADQgHAAgLAMQgRASgCAkQAAAGgGABg");
	this.shape_336.setTransform(86.2141,30.56);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#F6AD84").s().p("AgwgqIAZgXQAcgUAXARQAhAagTA5QgVA8g3ACg");
	this.shape_337.setTransform(87.9337,29.6667);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#172E47").s().p("AghABQAHgFAJgDQAZgJAVAKQAHAEgDAFQgCAGgFAAIgDgBQgcgKgcAOg");
	this.shape_338.setTransform(52.2597,20.9547);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#172E47").s().p("AgfAGQgDACgEgBQgDgBgCgEQgCgFAGgEQATgMAaAGQAQADANANQAGAHAEAGQgmgdgmATg");
	this.shape_339.setTransform(67.2382,20.8777);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#172E47").s().p("ABlA2QgHgNgigQQgggOgFgSQgfAQgpANQhSAagwgXQg9gbARgnQAPghBEgeQBCgcBKgHQBRgIAwAYQBEAiAVBDQARA0gNBUQgLgGgPAAQgeAAgVAgIgcACQgBg5gPgfg");
	this.shape_340.setTransform(68.5012,11.3593);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#172E47").s().p("AgIARQgEgGAAgLQgBgIAEgIQADgHAFAAQAFAAAEAGQAEAHABAKQABAJgEAIQgDAHgGAAIAAAAQgEAAgFgHg");
	this.shape_341.setTransform(52.958,27.5);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#172E47").s().p("AgHARQgEgGgBgKQgBgJAEgIQADgHAGAAQAEAAAFAGQAEAHAAAKQABAJgEAHQgDAIgGAAIAAAAQgEAAgEgHg");
	this.shape_342.setTransform(66.5819,26.7517);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#172E47").s().p("AgXgHIgBglQAbgPAWgBQgKBGgbAzQgJgbgCgpg");
	this.shape_343.setTransform(87.95,38.125);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#F6AD84").s().p("AhaDxQgdgIgXgWQgRgRgKgZIgFgQIgVhlQgKg5gDgpIgBgUQgDg4AKgbQAOgiA3gbQA2gbBEgHQBTgJBBA3QBBA2AGBUIADAvIgBAEQgBAagDAZQgKBIgdAzIgHANQgZANgzASIgGABQgqAPhAARQgPAEgPAAQgQAAgQgFg");
	this.shape_344.setTransform(69.8667,27.7552);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#F18868").s().p("AhAgnIAhgMIBfgIQgLAZgVAbQgoA1gpAOg");
	this.shape_345.setTransform(75.8,49.925);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#F6AD84").s().p("AhABZIgUiQIAggMQA7gXALgDQAsgNASAKIAFCdQgWAQgeAMQgeAMgXAAQgZAAgTgMg");
	this.shape_346.setTransform(77.85,51.5326);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#172E47").s().p("AAFBUQgUgXgMgxQgNgvARgkQAIgSAKgHQApAKgDBcQgBAvgJAtQgIgCgKgMg");
	this.shape_347.setTransform(50.6627,19);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#3BB9C3").s().p("AgBHhQgegDgTgNQAQhRANhiQAZjEgLhTQgPgNgWgkQguhGgohqQgHg7AEg/QAKh9A6gQIBOCAQBVCfAjCZIACAxQABBAgHBAQgVDNhUCMIgMABIgNgBg");
	this.shape_348.setTransform(117.3137,110.3875);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#F6AD84").s().p("Ag7CKQgHgKASg8IATg6IgvA/QgVAbACgTQADgUAfg8IAdgzQgIANgYANQgOAIgKgFQgKgEALgNIA1g8QAVgWAggRQAQgHA2AVQARAtgWBYQgVBSgQAFQgJADAJhKIgUA0QgVA0gIAAQgIgBAHg0IAJg1IgaBAQgYA0gLAAQAAAAgBAAQgBgBAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_349.setTransform(110.3906,170.7002);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AgEDaQgEAAAAgEQgLhLAMi1IAMiqQABgFAFAAQAEABAAAFIgOCpQgLC1AKBKQABAEgEABg");
	this.shape_350.setTransform(65.2994,90.025);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AgDDZQgFgBAAgEQgKhKAKi0IANipQAAgFAFAAQAFACgBADIgNCpQgKC0AJBKQABADgEACg");
	this.shape_351.setTransform(81.0208,91.7);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#0EA9B2").s().p("Ai2BNQgEgWgEgiQgGhFAHg/IFdALIAHA+QAKBJARA5Qg7ANhNAFQgbACgaAAQhzAAhIgjg");
	this.shape_352.setTransform(71.0991,147.7052);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#0EA9B2").s().p("AADAZQgagOgJgjQgBgEAFgCQAEgBABAEQAIAfAVAMQALAGALAAQAFAAAAAFQAAAFgFAAIgBAAQgLAAgNgHg");
	this.shape_353.setTransform(65.9577,63.2926);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#0EA9B2").s().p("AhKBBQgFAAAAgFQAAgFAEAAIACAAQBMgEApg1QAVgcAGgdQABgFAFABQAEABgBAEQgGAegWAdQgsA7hQAFg");
	this.shape_354.setTransform(88.3341,61.1917);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#3BB9C3").s().p("AlIITIA8w9IFZhBID8BIIhYLrIBTEyQidBtilAEIgNABQiZAAikhZg");
	this.shape_355.setTransform(77.8,117.0083);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#3BB9C3").s().p("Ag5B+Qh/gLgSgbQgKgQgBggQAAglAQghQAphcB6gIIBRAEQBbALAsAkQAxApgaBJQgaBIg5APQghAJg3AAQgnAAg0gFg");
	this.shape_356.setTransform(84.437,54.4827);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#F18868").s().p("AgnAHIAgAGQAiAAANggIgCAKQgDAKgHAIQgKALgQAAQgRAAgYgNg");
	this.shape_357.setTransform(-23.425,120.6318);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#F18868").s().p("AgFAaQgQgcAQgsIgBAgQACAkASAZQgMgGgHgPg");
	this.shape_358.setTransform(-30.6438,122.125);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#F6AD84").s().p("AhEBQQgDgEAhgLIAhgKQgaACgbgBQg2gBgCgIQgDgHAygMIAygKQgjABgggCQhCgEAIgNQAHgKA7gFQAegDAcAAIhJgTQgfgKASgFQATgEBAAGQAgAEAcAEIghgOQgTgIgCgOQgBgNAQAGIBMAdQAcAKAbATQAMAMABA3QgjAfhXAMQgjAFgWAAQgbAAgGgIg");
	this.shape_359.setTransform(-31.5685,120.3148);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#0EA9B2").s().p("AldEFQgJgwgMgIIBCAJQBIAFAhgOQAqgTBegYQAvgMAmgJQBbi9B6ieQA9hPAqgpQBWDJiOC9QhHBdhtBIQhJAxi+AeQhgAOhRAFIgLhCg");
	this.shape_360.setTransform(17.0566,94.25);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#2D2D2D").s().p("AiZB8QhPgZgmhJQgmhIAXhPIABgEIC6gPQDSgOCAABIAZBWQAaBlADBQQgwAYhQAOQg4AKg5AAQhmAAhogig");
	this.shape_361.setTransform(78.301,174.3111);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AggAKQgBgOAHgKIAUAAQAWABASAIIgCAUQgngJgZAEg");
	this.shape_362.setTransform(108.3482,326.7);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#0EA9B2").s().p("AiGgDIgBgRQAWAMAlAGQAqAGAygEQBGgDAyggQAAAfgSALQgjAXhkAFIgZABQhYAAgEgng");
	this.shape_363.setTransform(106.825,351.11);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AgHAIQgEgCAAgGQAAgDAEgEQACgDAFAAQAEgBADADQAEADABAFQAAAEgDAEQgEADgEAAIgBABQgEAAgDgEg");
	this.shape_364.setTransform(101.75,332.6);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFFFF").s().p("AgHAJQgEgEABgEQgBgEADgDQAEgEAEgBQAEAAAEAEQADACAAAFQABAFgDADQgEADgFABIAAAAQgEAAgDgDg");
	this.shape_365.setTransform(101.6,335.7);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("AgHAIQgDgDgBgFQAAgDADgEQAEgDAEAAQAEgBAEADQADAEABAEQAAAEgEAEQgCAEgGgBIAAABQgEAAgDgEg");
	this.shape_366.setTransform(101.45,338.8);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("AgHAJQgDgEgBgEQAAgEAEgEQADgDAEgBQAEAAADADQAEADABAFQAAAEgEAEQgDADgEABQgFAAgDgDg");
	this.shape_367.setTransform(112.9,339.875);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AgGAIQgEgDgBgEQAAgEAEgEQADgDAEgBQAFAAADADQADADABAFQAAAEgEAEQgDADgEAAIgBABQgDAAgDgEg");
	this.shape_368.setTransform(113.35,337.0031);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("AgHAJQgDgEgBgFQAAgDADgEQADgEAFABQAEgBAEADQADAEAAAEQABAEgEAEQgDADgEAAIgBABQgDAAgEgDg");
	this.shape_369.setTransform(113.2531,334.2);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFFFFF").s().p("AASAAQgqgKgeAOIgFgIQAigRAsAMQAXAGASAJIgFAJQgQgJgVgGg");
	this.shape_370.setTransform(107.325,335.9724);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFFFF").s().p("AASAAQgqgKgeAOIgFgIQAigRAsAMQAeAIALAHIgFAJQgQgJgVgGg");
	this.shape_371.setTransform(107.175,338.9638);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFFFFF").s().p("AASAAQgqgKgeAOIgFgIQAigRAsAMQAXAGASAJIgFAJQgQgJgVgGg");
	this.shape_372.setTransform(107.475,332.9974);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#3BB9C3").s().p("AiGB3IgBgQQABgjAWgkQAZghAEgMQANg1APgjQAchDAsALQAsAKASAfQAJAQAAANQAMAhAOAuQAWA/AAAgQAAAfgSAMQgjAYhkAFIgZABQhYAAgEgpg");
	this.shape_373.setTransform(106.825,338.7634);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#2D2D2D").s().p("AgPG9IhGmlQgsksgckaIgTjdID6g2QAwDWATFRQAKCpAAB9IAaMwIh4AFQgeiJgqj7g");
	this.shape_374.setTransform(97.1,250.3);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("AgQALIACgVQAQgBAOAEIABATQgRgCgQABg");
	this.shape_375.setTransform(58.125,328.3909);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQAAgEADgEQADgEAFAAQAEgBAEAEQAEAEAAAEQAAAEgDAEQgDAEgFAAIgBAAQgEAAgDgDg");
	this.shape_376.setTransform(53.9469,342.4);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("AAGAKQgRgHgJgHIAHgJQAIAJAOAEIAMADIgDAKg");
	this.shape_377.setTransform(52.175,341.55);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AgHAJQgDgDgBgFQAAgFADgDQADgDAFgBQAFAAADADQADADABAFQAAAFgDADQgDADgFABIgBAAQgEAAgDgDg");
	this.shape_378.setTransform(56.2,339.65);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("AAGAKQgRgGgKgIIAHgJQAHAIARAFIAMAEIgDAKg");
	this.shape_379.setTransform(54.4,338.75);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("AgHAJQgDgDgBgFQAAgEADgEQADgDAFgBQAFAAADADQADADABAFQAAAFgDADQgDAEgGAAIAAAAQgEAAgDgDg");
	this.shape_380.setTransform(58.8,337.15);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("AAKANQgXgIgJgLIAGgKQAEALAZAIIAKADIgDALg");
	this.shape_381.setTransform(56.625,336.025);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#0EA9B2").s().p("AjaASQgHgKADgKIG+gYQgBAOgJAJQgKAJgOAAImEAVIgCAAQgLAAgHgJg");
	this.shape_382.setTransform(51.9821,353.9795);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#3BB9C3").s().p("AjaCgQgHgKADgLIABgEQAUgpAugUQAVgJA2gKQAegGAggkIA+hWQgBgLABgRIAAgBIADgWIADgSQAGgdAfAEQAfAEAJAeIABADQADAJAIAHQAJAHAKACQAXAEAQAGIAbDSQgBAOgJAJQgKAKgOAAImEAVIgCAAQgLAAgHgJg");
	this.shape_383.setTransform(51.9821,339.7993);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#060808").s().p("Ah7AnQgFiYgBi8QgCl4AVitIBWAUQBgAYA6AXIgJE5QgNFXgYCbQAoCLgCDmQgBCJgPE2Ih2AGg");
	this.shape_384.setTransform(60.0163,250.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328}]},6).to({state:[]},1).to({state:[{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328}]},268).to({state:[]},1).wait(66));

	// Layer 2
	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#F18868").s().p("AgyAYIgOgDQgHgCACgHQACgGAHACIAqAEQAugDAdgfQAFgFAFAFQACACABADQAAAAAAABQAAAAgBABQAAABAAAAQgBABAAAAQgiAkgzADIgJAAQgMAAgMgCg");
	this.shape_385.setTransform(62.1515,41.4893);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#F18868").s().p("AAKAsIgegWQgEgCABgFQABgEADgBIAZgIIAEgoQAAgCADgCQACgCADAAQAGABAAAHIgFAsQAAAEgFACIgPAFIATANQAGAEgEAGQgCADgEAAIgEgBg");
	this.shape_386.setTransform(57.315,30.42);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#172E47").s().p("AgYABQAMgJAPABQANAAAJAGIgFAHQgGgDgHgCQgOgBgLAIg");
	this.shape_387.setTransform(59.625,25.9707);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#172E47").s().p("Ag1ACIBqgMIABAJIhpAMg");
	this.shape_388.setTransform(77.275,24.35);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#172E47").s().p("AglAqQgSgQgBgXQgBgXAQgRQAQgSAXgBQAWgBASAQQARAPABAYQACAWgQASQgQARgXABIgDABQgVAAgQgPgAgCguQgTABgNAOQgNAPABASQABAUAOANQAPANASgBQAUgBANgPQANgOgBgTQgBgTgPgNQgNgMgSAAIgCAAg");
	this.shape_389.setTransform(52.3036,27.5036);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#172E47").s().p("AglAqQgSgQgBgXQgBgWAQgSQAPgRAYgCQAWgBASAQQARAQABAXQACAXgQARQgQASgXABIgDAAQgVAAgQgPgAgCguQgTABgNAOQgNAPABATQABATAOANQAPANASgBQAUgBANgOQANgPgBgSQgBgUgPgNQgNgMgSAAIgCAAg");
	this.shape_390.setTransform(67.0536,26.725);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#F18868").s().p("AgiAMQgGgCACgHQABgGAHACQAXAGASgHQAKgEAGgGQAFgFAFAFQAFAFgFAEQgQARgbABIgFABQgKAAgNgEg");
	this.shape_391.setTransform(63.458,45.7091);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#F18868").s().p("AAKAJQgJgJgOAEQgHABgBgFQgCgHAGgCQAPgDAMAFQAGADAEAEQAGAEgGAFIgEACQgDAAgDgCg");
	this.shape_392.setTransform(86.639,30.0319);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#F18868").s().p("AgVAsQgHgBABgHQACgpAXgXQAKgLAMgEQAGgCACAHQACAGgHADQgJACgJAKQgQASgCAkQgBAGgGABg");
	this.shape_393.setTransform(86.0332,30.5515);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#F6AD84").s().p("AgwgqIAZgXQAcgUAXARQAhAagTA5QgVA8g3ACg");
	this.shape_394.setTransform(87.7371,29.6667);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#172E47").s().p("AghACQAHgGAJgDQAagJAUALQAGADgBAGQgCAFgGAAIgDAAQgcgLgcAOg");
	this.shape_395.setTransform(52.065,20.9423);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#172E47").s().p("AggAGQgDACgDgBQgDgBgCgEQgDgFAGgEQAUgMAaAGQAPADANANQAHAHAEAGQgngdgmATg");
	this.shape_396.setTransform(67.075,20.8777);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#172E47").s().p("ABlA2QgHgNgigQQgfgOgGgSQgeAQgqANQhSAagwgXQg9gbARgnQAPghBEgeQBCgcBKgHQBRgIAwAYQBFAiAUBDQARA0gNBUQgLgGgPAAQgeAAgVAgIgbACQgCg5gPgfg");
	this.shape_397.setTransform(68.3214,11.3593);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#172E47").s().p("AgIARQgEgGAAgLQgBgJAEgHQADgHAGAAQAEAAAEAGQAFAHAAAKQABAJgEAIQgDAHgGAAIAAAAQgFAAgEgHg");
	this.shape_398.setTransform(52.775,27.5);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#172E47").s().p("AgIARQgEgGAAgKQgBgJAEgIQADgHAGAAQAEAAAEAGQAFAHAAAKQABAJgEAHQgEAIgFAAIAAAAQgFAAgEgHg");
	this.shape_399.setTransform(66.425,26.7517);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#172E47").s().p("AgXgHIgBglQAbgOAWgCQgKBGgbAzQgJgbgCgpg");
	this.shape_400.setTransform(87.75,38.125);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#F6AD84").s().p("AhaDxQgdgIgWgWQgTgRgJgZQgEgKgBgGIgUhlQgKg5gEgpIgBgUQgDg6AKgZQAOgiA4gbQA1gbBEgHQBTgJBBA3QBBA2AGBUIADAvIgBAEQAAAagEAZQgKBIgdAzIgHANQgZANgzASIgFABQgrAPhAARQgPAEgPAAQgQAAgQgFg");
	this.shape_401.setTransform(69.675,27.7552);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#F18868").s().p("Ag/gnIAfgMIBggIQgLAZgVAbQgoA1gqAOg");
	this.shape_402.setTransform(75.6,49.925);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#F6AD84").s().p("Ag/BZIgViQIAggMIBGgaQAsgNASAKIAFCdQgWAQgeAMQgeAMgXAAQgZAAgSgMg");
	this.shape_403.setTransform(77.65,51.5326);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#172E47").s().p("AAFBUQgUgXgMgxQgNgvARgkQAIgSAKgHQAoAKgCBcQgBAvgJAtQgIgCgKgMg");
	this.shape_404.setTransform(50.5103,19);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#3BB9C3").s().p("AgBHhQgegDgTgNQAQhRANhiQAZjEgLhTQgOgNgXgkQguhGgohqQgHg7AEg/QAKh9A6gQIBOCAQBVCfAjCZIACAxQABA/gHBBQgUDNhVCMIgMABIgNgBg");
	this.shape_405.setTransform(117.1137,110.3875);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#F6AD84").s().p("Ag7CKQgIgKASg8IATg6IguA/QgWAbADgTQADgUAfg8IAeg1QgIAOgZAOQgOAIgKgFQgKgEALgNIA1g8QAVgWAfgRQAQgHA3AVQARAtgWBYQgVBSgRAFQgIADAIhKIgTA0QgWA0gIAAQgIgBAIg0IAJg1IgaBAQgYA0gLAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_406.setTransform(110.2156,170.7002);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FFFFFF").s().p("AgEDaQgEAAgBgEQgKhLALi1IANiqQAAgFAFAAQAFABgBAFIgNCpQgLC1AKBKQAAAEgDABg");
	this.shape_407.setTransform(65.1078,90.025);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FFFFFF").s().p("AgDDZQgEgBgBgEQgKhKALi0IAMipQABgFAEAAQAEACAAADIgNCpQgKC0AKBKQAAADgDACg");
	this.shape_408.setTransform(80.8436,91.7);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#0EA9B2").s().p("Ai2BNQgFgWgDgiQgHhFAIg/IFdALIAHA+QAKBJARA5Qg7ANhNAFQgcACgZAAQhzAAhIgjg");
	this.shape_409.setTransform(70.931,147.7052);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#0EA9B2").s().p("AADAZQgagOgJgjQgBgEAFgCQAEgBACAEQAHAfAVAMQALAGALAAQAFAAAAAFQAAAFgFAAIgBAAQgMAAgMgHg");
	this.shape_410.setTransform(65.7659,63.2926);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#0EA9B2").s().p("AhKBBQgEAAgBgFQAAgFAEAAIACAAQBMgEApg1QAVgcAGgdQABgFAFABQAEABgBAEQgGAegWAdQgsA7hQAFg");
	this.shape_411.setTransform(88.1341,61.1917);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#3BB9C3").s().p("AlIITIA8w9IFZhBID9BIIhYLrIBSEyQidBtimAEIgMABQiZAAikhZg");
	this.shape_412.setTransform(77.6,117.0083);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#3BB9C3").s().p("Ag5B+Qh/gLgSgbQgLgQAAggQAAglAPghQAphcB7gIIBRAEQBbALArAkQAyAogaBKQgaBIg5APQghAJg3AAQgnAAg0gFg");
	this.shape_413.setTransform(84.259,54.4827);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#F18868").s().p("AgkARIAhAAQAhgGAHghIAAAKQgCALgFAIQgKAQgWAAQgOAAgUgGg");
	this.shape_414.setTransform(-23.875,129.0166);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#F18868").s().p("AgDAcQgVgbAIgtIAFAgQAIAjAWAWQgMgEgKgNg");
	this.shape_415.setTransform(-30.3353,131.9);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#F6AD84").s().p("Ag5BWQgEgDAfgRIAegPQgYAGgbAEQg1AJgEgIQgEgHAvgUQAYgKAYgJQgiAHghAEQhBAHAGgPQAEgLA6gOQAcgIAcgFQg3gEgTgDQghgEARgHQASgIBBgFIA8gCIgjgJQgVgFgDgMQgEgNARADIBQAPQAdAGAeANQAOAKAKA3QgdAkhUAaQg0ARgXAAQgKAAgEgEg");
	this.shape_416.setTransform(-31.4715,130.8438);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#0EA9B2").s().p("AleExQgHglgMgIIBEgKQBKgPAcgXQAdgXBYg2IBSgxQBai+CFiSQBDhJAwgkQBWDJiOC9QhFBchuBKQhJAxjAA9QhgAfhSAWIgKg3g");
	this.shape_417.setTransform(16.8816,97.5);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#2D2D2D").s().p("AiZB8QhPgZgmhJQgmhIAXhPIABgEIC6gPQDSgOCAABIAZBWQAaBlAEBQQgwAYhRAOQg4AKg5AAQhnAAhngig");
	this.shape_418.setTransform(78.1296,174.3111);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFFFFF").s().p("AggAKQgBgOAHgKIAUAAQAWABARAIIgCAUQgmgJgZAEg");
	this.shape_419.setTransform(108.15,326.7);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#0EA9B2").s().p("AiGgDIgBgRQAWAMAlAGQAqAGAygEQBHgEAxgfQAAAfgSALQgiAXhlAFIgYABQhZAAgEgng");
	this.shape_420.setTransform(106.625,351.11);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFFFFF").s().p("AgGAIQgEgCgBgGQAAgDADgEQAEgDAEAAQAFgBADADQAEADAAAFQAAAEgEAEQgCADgGAAIAAABQgDAAgDgEg");
	this.shape_421.setTransform(101.55,332.6);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FFFFFF").s().p("AgGAJQgEgEgBgEQAAgEAEgDQACgEAFgBQAFAAADAEQADACABAFQAAAFgDADQgEADgEABIgBAAQgDAAgDgDg");
	this.shape_422.setTransform(101.4,335.7);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFFFFF").s().p("AgHAIQgDgDgBgFQAAgDADgEQADgDAFAAQAEgBAEADQADAEABAEQAAAEgDAEQgEAEgEgBIgBABQgEAAgDgEg");
	this.shape_423.setTransform(101.275,338.8);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FFFFFF").s().p("AgHAJQgDgEgBgEQAAgEADgEQAEgDAEgBQAEAAAEADQAEADAAAFQAAAEgEAEQgDADgEABQgEAAgEgDg");
	this.shape_424.setTransform(112.7,339.875);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFFFFF").s().p("AgHAIQgDgDgBgEQAAgEAEgEQADgDAEgBQAEAAAEADQADADABAFQAAAEgDAEQgEADgEAAIgBABQgEAAgDgEg");
	this.shape_425.setTransform(113.175,337.0031);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgDAEgEQACgEAFABQAEgBAEADQADAEAAAEQABAEgDAEQgEADgEAAIgBABQgEAAgDgDg");
	this.shape_426.setTransform(113.1,334.2);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FFFFFF").s().p("AARAAQgpgKgeAOIgFgIQAhgRAtAMQAXAGASAJIgGAJQgPgJgWgGg");
	this.shape_427.setTransform(107.175,335.9724);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FFFFFF").s().p("AARAAQgpgKgeAOIgFgIQAhgRAtAMQAbAHAOAIIgGAJQgPgJgWgGg");
	this.shape_428.setTransform(107.025,338.9638);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FFFFFF").s().p("AARAAQgpgKgeAOIgFgIQAhgRAtAMQAXAGASAJIgGAJQgPgJgWgGg");
	this.shape_429.setTransform(107.325,332.9974);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#3BB9C3").s().p("AiGB3IgBgQQABgjAWgkQAZghAEgMQANg1APgjQAdhDArALQAtAKASAfQAJAQAAANIAKAiIAPAtQAWA/AAAgQAAAggSALQgiAYhlAFIgYABQhZAAgEgpg");
	this.shape_430.setTransform(106.625,338.7634);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#2D2D2D").s().p("AgOG9IhHmlQgsksgckaIgTjdID6g2QAxDWASFRQAKCpgBB9IAbMwIh3AFQgfiJgpj7g");
	this.shape_431.setTransform(96.9,250.3);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FFFFFF").s().p("AgQALIACgVQAQgBAOAEIACATQgSgCgQABg");
	this.shape_432.setTransform(57.95,328.3909);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQAAgEADgEQADgEAFAAQAEgBAEAEQADAEABAEQAAAEgDAEQgDAEgGAAIAAAAQgEAAgDgDg");
	this.shape_433.setTransform(53.75,342.4);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FFFFFF").s().p("AAFAKQgRgHgIgHIAGgJQAKAJAOAEIALADIgDAKg");
	this.shape_434.setTransform(52,341.55);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQAAgFADgDQADgDAFgBQAEAAAEADQAEADAAAFQAAAFgDADQgDADgFABIgBAAQgEAAgDgDg");
	this.shape_435.setTransform(56.025,339.65);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FFFFFF").s().p("AAGAKQgQgGgKgIIAGgJQAIAIAQAFIAMAEIgDAKIgNgEg");
	this.shape_436.setTransform(54.2,338.75);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQAAgEADgEQADgDAFgBQAEAAAEADQAEADAAAFQAAAFgDADQgDAEgFAAIgBAAQgEAAgDgDg");
	this.shape_437.setTransform(58.625,337.15);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFFFFF").s().p("AAKANQgWgIgKgLIAGgKQAFAMAYAHIAKADIgCALg");
	this.shape_438.setTransform(56.425,336.025);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#0EA9B2").s().p("AjZASQgIgKADgKIG+gYQgBAOgJAJQgKAJgOAAImDAVIgDAAQgLAAgGgJg");
	this.shape_439.setTransform(51.7967,353.9795);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#3BB9C3").s().p("AjaCgQgIgKAEgLIABgEQAUgpAugUQAVgJA2gKQAfgGAfgkIA9hWIABgcIAAgBIAGgoQAGgdAfAEQAfAEAIAeIABADQAIAVAXAEQAXAEAQAGIAbDLQABAEgBADQgBAOgKAJQgKAKgNAAImEAVIgCAAQgLAAgHgJg");
	this.shape_440.setTransform(51.8217,339.7993);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#060808").s().p("Ah7AnQgFiYgBi8QgCl4AVitIBWAUQBgAYA6AXIgJE5QgNFXgXCbQAnCLgCDmQgBCJgPE2Ih2AGg");
	this.shape_441.setTransform(59.8163,250.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385}]},5).to({state:[]},1).to({state:[{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385}]},270).to({state:[]},1).wait(65));

	// Layer 2
	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#F18868").s().p("AgyAYIgOgDQgHgCACgHQACgHAHACIAqAFQAugDAdgfQAFgFAFAEQAFAFgFAFQgiAkgzACIgJABQgLAAgMgCg");
	this.shape_442.setTransform(62.1515,41.5077);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#F18868").s().p("AAKAsIgegWQgEgCABgEQAAgEAFgCIAYgIIAEgnQABgIAHABQADABACACQACACgBADIgEAsQgBAFgEABIgPAFIASANQADACAAADQABADgCACQgCADgDAAIgBAAIgEgBg");
	this.shape_443.setTransform(57.295,30.4254);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#172E47").s().p("AgYABQAMgJAPABQANAAAJAGIgFAHQgGgDgHgCQgOgBgLAIg");
	this.shape_444.setTransform(59.6,25.9707);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#172E47").s().p("Ag1ACIBqgMIABAJIhqAMg");
	this.shape_445.setTransform(77.275,24.35);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#172E47").s().p("AglAqQgRgQgBgXQgCgWAQgSQAQgRAXgCQAXgBARAQQASAQABAXQABAWgQASQgPARgYACIgDAAQgVAAgQgPgAgBguQgUABgNAOQgNAPABASQABAUAPANQAOANATgBQATgBANgOQANgPgBgTQAAgTgPgNQgOgMgSAAIgBAAg");
	this.shape_446.setTransform(52.2964,27.525);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#172E47").s().p("AglAqQgRgPgBgYQgCgWAQgSQAQgRAXgBQAXgCARAQQASAQABAXQABAXgQARQgQASgXABIgDAAQgVAAgQgPgAgBguQgUABgNAPQgNAOABATQABATAPANQAOAOATgBQATgBANgPQANgPgBgSQAAgUgPgNQgOgMgSAAIgBAAg");
	this.shape_447.setTransform(67.0464,26.7464);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#F18868").s().p("AghAMQgDgBgBgDQgCgCABgDQADgFAGABQAWAGATgHQAJgEAGgGQAFgFAFAFQAFAEgFAGQgQAQgbABIgFAAQgKAAgMgDg");
	this.shape_448.setTransform(63.4313,45.7275);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#F18868").s().p("AALAJQgKgJgNAEQgHACgCgGQgCgHAHgCQAVgGAQAPQAEAEgEAFIgFACQgDAAgCgCg");
	this.shape_449.setTransform(86.5778,30.0143);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#F18868").s().p("AgVAsQgHgBAAgHQADgpAWgXQALgLALgEQAHgBACAGQABADgCACQgBADgDABQgJADgJAKQgRASgCAjQAAAHgGAAg");
	this.shape_450.setTransform(86.0167,30.5609);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#F6AD84").s().p("AgwgqIAZgXQAcgUAXARQAhAagTA5QgVA9g3ABg");
	this.shape_451.setTransform(87.7337,29.6791);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#172E47").s().p("AghABQAHgFAJgDQAZgJAVAKQAHAEgDAFQgBAGgGAAIgDgBQgcgKgcAOg");
	this.shape_452.setTransform(52.0597,20.9547);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#172E47").s().p("AgfAGQgDACgEgBQgDgBgCgEQgCgFAGgEQAUgMAZAGQAQADANANQAGAHAEAGQgngdglATg");
	this.shape_453.setTransform(67.0382,20.8886);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#172E47").s().p("ABlA3QgHgOgigQQgggOgFgSQgeAQgqANQhSAagwgXQg9gbARgmQAPgiBEgdQBCgdBKgHQBRgIAwAYQBEAiAVBDQARA1gNBTQgLgGgPAAQgeAAgVAgIgcACQgBg5gPgeg");
	this.shape_454.setTransform(68.3012,11.3734);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#172E47").s().p("AgIARQgEgGAAgLQgBgIAEgIQADgGAGgBQAEAAAEAGQAFAIAAAJQABAJgEAIQgDAHgGAAIAAAAQgFAAgEgHg");
	this.shape_455.setTransform(52.775,27.5);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#172E47").s().p("AgHARQgEgGgBgKQgBgJAEgIQADgHAGAAQAEAAAFAHQAEAGAAAKQABAJgEAIQgDAHgGAAQgEAAgEgHg");
	this.shape_456.setTransform(66.3819,26.7983);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#172E47").s().p("AgXgHIgBgkQAbgQAWgBQgKBGgcAzQgHgbgDgpg");
	this.shape_457.setTransform(87.75,38.125);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#F6AD84").s().p("AhaDxQgdgIgWgWQgSgRgKgZIgFgQIgVhlQgIgxgFgxIgBgUQgDg4AKgbQAOgiA3gbQA2gaBEgIQBTgIBBA2QBBA2AGBVIADAvIgBAEQgBAZgDAZQgKBIgdAzIgHANQgeAPguAQIgGABQg0ASg2AOQgPAEgPAAQgQAAgQgFg");
	this.shape_458.setTransform(69.6667,27.7616);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#F18868").s().p("Ag/gnIAfgMIBhgIQgNAZgUAbQgoA2gqANg");
	this.shape_459.setTransform(75.6,49.925);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#F6AD84").s().p("AhABZIgUiQIAggMQA7gXALgDQAsgNASALIAFCcQgWAQgeAMQgeAMgXAAQgZAAgTgMg");
	this.shape_460.setTransform(77.65,51.5404);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#172E47").s().p("AAFBUQgUgXgMgxQgNgwARgjQAIgSALgHQAoAKgDBcQgBAvgJAtQgIgCgKgMg");
	this.shape_461.setTransform(50.4628,19);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#3BB9C3").s().p("AgBHhQgegDgTgNQAQhRANhiQAZjEgLhTQgPgNgWgkQguhGgohqQgHg7AEg/QAKh9A6gQIBOCAQBVCfAjCaIACAxQABA/gHBAQgVDNhUCNIgKAAIgPgBg");
	this.shape_462.setTransform(117.1137,110.395);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#F6AD84").s().p("Ag7CJQgHgKASg7IATg5IgvA/QgVAaACgTQADgUAfg8IAdg0QgIANgYAOQgOAIgKgFQgKgEALgNIA1g8QAVgWAggRQAQgHA2AVQARAtgWBYQgVBSgQAFQgJACAJhJIgUA0QgVA0gIgBQgIAAAIg1IAIg0IgaBBQgYAzgLAAQAAAAgBAAQgBgBAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_463.setTransform(110.1906,170.7116);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FFFFFF").s().p("AgJDWQgKhLALi2IANiqQAAgFAFABQAFAAgBAFIgOCqQgKC0AKBKQAAAFgEAAIAAABQgEAAgBgEg");
	this.shape_464.setTransform(65.1078,90.0667);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FFFFFF").s().p("AgIDUQgKhKALi0IAMipQAAgFAFABQAFAAgBAFIgNCoQgKC0AJBJQABAFgEAAIgBAAQgDAAgBgEg");
	this.shape_465.setTransform(80.8269,91.725);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#0EA9B2").s().p("Ai2BNQgEgWgEgiQgGhFAHg/IFeALIAGA+QAKBJARA5Qg7ANhNAFQgbACgaAAQh0AAhHgjg");
	this.shape_466.setTransform(70.8991,147.7052);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#0EA9B2").s().p("AADAZQgagOgJgkQgBgEAFgBQAEgCABAGQAIAeAVAMQALAGALAAQAFAAAAAFQAAAEgFAAIgBABQgMAAgMgHg");
	this.shape_467.setTransform(65.7659,63.3);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#0EA9B2").s().p("AhKBAQgFAAAAgEQAAgFAEAAIACAAQBMgEApg2QAVgbAGgeQACgEAEABQAEABgBAEQgGAegWAdQgtA7hPAEg");
	this.shape_468.setTransform(88.1341,61.2159);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#3BB9C3").s().p("AlJITIA9w9IFZhBID9BIIhYLrIBSEyQidBtimAFIgMAAQiZAAilhZg");
	this.shape_469.setTransform(77.6,117.0332);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#3BB9C3").s().p("Ag5B+Qh+gLgTgbQgKgQgBghQAAgkAQghQAphcB6gIIBRAEQBbALAsAjQAxApgaBKQgaBIg5APQgiAJg3AAQgnAAgzgFg");
	this.shape_470.setTransform(84.237,54.5033);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#F18868").s().p("AgfAaIAfgHQAfgMAAggIAAAaQgIAZgmAAIgQAAg");
	this.shape_471.setTransform(-22.75,136.3926);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#F18868").s().p("AABAcQgZgVgCguIALAeQAPAgAbARQgNgBgNgLg");
	this.shape_472.setTransform(-28.25,140.75);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#F6AD84").s().p("AgoBbQgFgDAagXIAbgWQgXAMgZAJQgyAUgGgGQgFgGAqgeIAqgcQgfAOgfAKQg/AVADgPQACgMA1gcIA0gYIhKAKQghADAPgLQAPgLA/gSIA7gQIgkgBQgWAAgGgMQgGgLARgBQAogCApgBQAdAAAhAGQAPAHAWA0QgUAohMAsQg6AigUAAQgEAAgCgBg");
	this.shape_473.setTransform(-29.3798,140.5892);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#0EA9B2").s().p("AlyE8QB+hfAtgkQAdgWBYg2IBSgyQBai9CFiTQBDhJAwgjQBWDIiOC+QhEBahwBLQhJAxi4BZQhcAshOAiQgNgvgggXg");
	this.shape_474.setTransform(16.8566,100.175);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#2D2D2D").s().p("AiZB9QhPgZgmhKQgmhIAXhPIABgEIC6gOQDSgPCAABIAZBWQAaBlADBQQgwAYhQAOQg4AKg4AAQhnAAhoghg");
	this.shape_475.setTransform(78.101,174.3399);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FFFFFF").s().p("AggAJQgBgNAHgKIAUgBQAWABASAJIgCAVQgngKgZADg");
	this.shape_476.setTransform(108.1482,326.725);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#0EA9B2").s().p("AiGgDIgBgRQAWAMAlAGQAqAGAygEQBHgEAxgfQAAAfgSALQgjAXhkAFIgZABQhYAAgEgng");
	this.shape_477.setTransform(106.625,351.135);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FFFFFF").s().p("AgHAJQgEgEABgEQgBgEADgEQAEgDAEgBQAEAAAEADQADADAAAFQABAEgDAEQgEADgFABQgDAAgEgDg");
	this.shape_478.setTransform(101.55,332.625);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FFFFFF").s().p("AgGAJQgEgEgBgEQAAgEADgEQAEgDAEgBQALAAABALQAAAEgEAEQgCADgGABQgDAAgDgDg");
	this.shape_479.setTransform(101.4,335.725);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FFFFFF").s().p("AgGAJQgEgEgBgEQAAgEAEgEQACgDAFgBQAFAAADADQADADABAFQAAAEgDAEQgEADgEABQgEAAgDgDg");
	this.shape_480.setTransform(101.25,338.825);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FFFFFF").s().p("AgHAIQgDgCAAgGQgBgEAEgDQADgDAEgBQAEAAAEADQADAEAAAEQABAEgDADQgEAEgFABIAAAAQgEAAgDgEg");
	this.shape_481.setTransform(112.7,339.9);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FFFFFF").s().p("AgHAJQgDgDAAgFQgBgEADgEQAEgDAEAAQAEgBAEAEQAEADgBAEQABAEgDAEQgEADgFABQgDAAgEgDg");
	this.shape_482.setTransform(113.15,337.0469);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FFFFFF").s().p("AgHAJQgDgEgBgFQAAgDADgEQADgDAFAAQAEgBAEADQADAEABAEQAAAEgDAEQgEAEgEgBIgBABQgEAAgDgDg");
	this.shape_483.setTransform(113.075,334.2);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FFFFFF").s().p("AARAAQgpgKgeAOIgEgIQAhgRAsAMQAXAGASAJIgGAJQgPgJgWgGg");
	this.shape_484.setTransform(107.15,335.9974);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FFFFFF").s().p("AASAAQgqgKgeAOIgFgIQAhgRAtAMQAXAGARAJIgEAJQgQgJgVgGg");
	this.shape_485.setTransform(107,338.9974);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FFFFFF").s().p("AASAAQgqgKgeAOIgFgIQAigRAsAMQAXAGASAJIgFAJQgQgJgVgGg");
	this.shape_486.setTransform(107.275,332.9974);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#3BB9C3").s().p("AiGB3IgBgQQABgjAWgkQAZghAEgMQANg1APgjQAchDAsALQAsAKATAfQAJAQAAANIAZBPQAWA/AAAhQAAAegSAMQgjAYhkAFIgZABQhYAAgEgpg");
	this.shape_487.setTransform(106.625,338.7634);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#2D2D2D").s().p("AgOG9IhGmlQgtkrgckaIgTjeID6g2QAxDWASFRQAKCpgBB9IAbMwIh3AFQgfiJgpj7g");
	this.shape_488.setTransform(96.9,250.3);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FFFFFF").s().p("AgQAMIACgWQAQgBAOAEIABATQgRgCgQACg");
	this.shape_489.setTransform(57.925,328.3909);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQgBgEAEgEQADgEAFAAQAEAAAEADQAEADAAAFQABAEgEAEQgEAEgFAAQgDAAgEgDg");
	this.shape_490.setTransform(53.75,342.425);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FFFFFF").s().p("AAGAJQgRgGgJgHIAHgIQAIAHAOAFIAMADIgDALg");
	this.shape_491.setTransform(51.975,341.6);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQgBgEAEgEQAEgDAEgBQAEAAAEADQAEADAAAFQABAFgEADQgEAEgFAAIAAAAQgEAAgDgDg");
	this.shape_492.setTransform(56,339.65);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FFFFFF").s().p("AAGAKQgRgGgJgIIAGgJQAHAIARAGIALADIgDAKg");
	this.shape_493.setTransform(54.2,338.75);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQAAgEADgEQAEgEAEAAQAEAAAEADQAEADAAAFQABAEgEAEQgDAEgFAAQgEAAgEgDg");
	this.shape_494.setTransform(58.6,337.175);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FFFFFF").s().p("AAKANQgYgIgIgLIAGgKQAFAMAYAHIAKADIgDALg");
	this.shape_495.setTransform(56.425,336.025);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#0EA9B2").s().p("AjaASQgHgKADgKIG+gYQgBAOgJAJQgKAJgOAAImEAVIgCAAQgLAAgHgJg");
	this.shape_496.setTransform(51.7821,353.9795);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#3BB9C3").s().p("AjaCgQgHgJADgMIABgEQAUgpAugUQAUgIA3gLQAggHAegjIA+hWQgBgLABgRIADgXIADgSQAGgdAfAEQAfAFAJAdIABADQAHAVAXAEQAXAEAQAGIAbDLIAAAHQgBAOgJAJQgKAKgOAAImEAVIgCAAQgLAAgHgJg");
	this.shape_497.setTransform(51.7821,339.7995);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#060808").s().p("Ah7AnQgFiYgBi8QgCl4AVitIBWAUQBgAYA6AYIgJE4QgNFYgYCaQAoCLgCDnQgBCJgPE2Ih2AFg");
	this.shape_498.setTransform(59.8163,250.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442}]},4).to({state:[]},1).to({state:[{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442}]},272).to({state:[]},1).wait(64));

	// Layer 2
	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#F18868").s().p("AgxAYIgPgDQgDgBgBgDQgBgCABgDQACgHAGADIAqAEQAugDAegfQAEgGAFAFQAFAFgEAFQghAkg0ADIgJAAQgMAAgLgCg");
	this.shape_499.setTransform(62.1316,41.4702);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#F18868").s().p("AAKArIgegVQgDgCAAgFQABgEAEgBIAYgIIAEgoQABgHAHABQADAAACADQACACgBADIgFAsQAAAEgEACIgPAFIASANQAGAEgEAGQgCADgEAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_500.setTransform(57.28,30.4188);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#172E47").s().p("AgYABQAMgJAPABQANABAJAGIgFAHQgDgEgKgBQgOgCgLAIg");
	this.shape_501.setTransform(59.575,25.9207);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#172E47").s().p("Ag1ACIBpgNIACAKIhqANg");
	this.shape_502.setTransform(77.275,24.325);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#172E47").s().p("AglAqQgRgPgCgYQgBgWAQgSQAQgRAXgBQAXgCARAQQASAQABAXQABAXgQARQgQASgXABIgDAAQgUAAgRgPgAgBguQgUABgNAPQgNAOABATQABATAOANQAPANATgBQATAAANgPQANgPgBgSQgBgUgOgNQgOgNgRAAIgCABg");
	this.shape_503.setTransform(52.275,27.4964);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#172E47").s().p("AglAqQgRgQgCgXQgBgXAQgRQAQgSAXgBQAXgBARAQQASAQABAXQABAWgQASQgPARgYACIgDAAQgUAAgRgPgAgBguQgUABgNAOQgNAPABASQABAUAOANQAPANATgBQATgBANgPQANgOgBgTQgBgTgOgNQgOgMgRAAIgCAAg");
	this.shape_504.setTransform(67.025,26.725);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#F18868").s().p("AghAMQgHgBACgIQABgCACgBIAFAAQAXAFATgHQAMgFADgFQAFgFAFAFQAFAFgFAFQgQAQgbABIgFAAQgKAAgMgDg");
	this.shape_505.setTransform(63.4094,45.6784);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#F18868").s().p("AALAJQgKgJgOAEQgCABgDgCQgCgBgBgCQgCgHAHgBQAOgEAMAFQAGADAFAEQAEAFgEAEQgCACgDAAQgDAAgCgCg");
	this.shape_506.setTransform(86.5903,29.9908);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#F18868").s().p("AgVAsQgGAAAAgIQADgpAWgXQAKgLAMgEQAGgBACAGQACAHgGACQgKADgIAKQgRASgCAjQAAAHgHAAg");
	this.shape_507.setTransform(85.9985,30.5109);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#F6AD84").s().p("AgwgqIAZgXQAcgUAXASQAhAZgTA5QgVA9g3ABg");
	this.shape_508.setTransform(87.7337,29.6417);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#172E47").s().p("AghABQAGgEAKgEQAZgIAVAKQADABACADQABACgBACQgCAFgGABIgDgBQgdgJgbANg");
	this.shape_509.setTransform(52.05,20.9472);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#172E47").s().p("AgBAAQgQAAgOAGQgIAEgEgIQgCgFAFgEQAUgMAaAFQAPAEAOANQAGAHAEAGQgXgQgXAAg");
	this.shape_510.setTransform(67.0359,20.866);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#172E47").s().p("ABlA3QgHgOgigPQgfgPgGgSQgeARgqANQhSAZgwgWQg9gcARgmQAPgiBEgdQBCgdBKgHQBRgHAwAXQBFAiAUBDQARA1gNBUQgLgHgPAAQgeAAgUAgIgcACQgCg5gPgeg");
	this.shape_511.setTransform(68.2964,11.3343);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#172E47").s().p("AgHARQgEgGgBgKQgBgJAEgIQADgHAGAAQAEAAAFAGQAEAHAAAKQABAJgEAHQgDAIgGAAIAAAAQgEAAgEgHg");
	this.shape_512.setTransform(52.7319,27.4517);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#172E47").s().p("AgHARQgEgGgBgLQgBgIAEgHQADgIAGAAQAEAAAFAGQAEAIAAAJQABAKgEAGQgDAIgGAAIAAAAQgEAAgEgHg");
	this.shape_513.setTransform(66.375,26.75);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#172E47").s().p("AgXgHIgBglQAdgPAUgBQgJBFgcA0QgIgbgDgpg");
	this.shape_514.setTransform(87.725,38.125);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#F6AD84").s().p("AhaDxQgegIgWgVQgTgUgIgXIgFgQIgVhlQgKg5gDgpIgBgUQgDg4AKgaQAOgjA3gbQA2gaBEgIQBTgIBBA2QBBA2AGBVIADAvIgBAEQgBAbgEAYQgJBGgdA0IgHANQgeAPguAQIgGACQgqAOhAARQgPAEgOAAQgRAAgQgFg");
	this.shape_515.setTransform(69.6667,27.7309);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#F18868").s().p("Ag/gnIAfgMIBhgIQgMAYgWAcQgnA1gqAOg");
	this.shape_516.setTransform(75.6,49.9);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#F6AD84").s().p("AhABZIgUiQIAggNIBGgZQAsgNASAKIAFCcQgWARgeAMQgeAMgYAAQgYAAgTgMg");
	this.shape_517.setTransform(77.65,51.5091);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#172E47").s().p("AAFBUQgUgXgMgxQgNgwARgjQAIgSAKgHQAoALgCBbQgBAvgJAtQgIgCgKgMg");
	this.shape_518.setTransform(50.4603,18.95);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#3BB9C3").s().p("AgBHhQgdgDgUgNQAQhRANhiQAZjEgKhTQgPgOgXgjQguhHgohpQgHg7AEg/QAKh9A6gQIBOCAQBVCfAkCZIACAxQAABAgGBAQgVDNhVCMIgMABIgNgBg");
	this.shape_519.setTransform(117.0887,110.3875);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#F6AD84").s().p("Ag7CJQgIgKASg7IATg5IguA/QgVAaACgTQADgUAfg8IAdg0QgIANgYAOQgOAIgKgFQgKgEALgMQAhgnAUgWQAVgWAfgRQARgHA2AVQARAugWBXQgVBSgQAFQgJACAJhJIgUA0QgVA0gIAAQgIgBAHg0IAJg1IgaBBQgYAzgLAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_520.setTransform(110.1906,170.6759);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FFFFFF").s().p("AgEDaQgEAAAAgEQgLhLAMi1IAMirQABgFAEABQAFABAAAEIgOCqQgLC0AKBKQABAFgEABg");
	this.shape_521.setTransform(65.0994,90.0167);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#FFFFFF").s().p("AgDDZQgFAAAAgEQgKhLAKi0IANipQAAgFAFABQAFAAgBAFIgNCoQgKCzAJBKQABAFgEABg");
	this.shape_522.setTransform(80.8208,91.6917);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#0EA9B2").s().p("Ai2BNQgEgWgEgiQgGhEAHg/IFdALIAHA+QAKBIARA5Qg7ANhNAFQgbABgaAAQh0AAhHgig");
	this.shape_523.setTransform(70.8991,147.6802);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#0EA9B2").s().p("AADAZQgZgOgJgkQgCgEAFgBQAFgBABAEQAHAfAVAMQAMAGAKAAQAFAAAAAFQAAAEgEABIgCAAQgLAAgNgHg");
	this.shape_524.setTransform(65.7483,63.2925);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#0EA9B2").s().p("AhPA8QAAgFAEAAIACAAQBMgEApg2QAVgbAGgeQABgEAEABQAFABgBAEQgGAegWAdQgtA7hPAEIgCABQgFAAAAgFg");
	this.shape_525.setTransform(88.1333,61.1909);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#3BB9C3").s().p("AlIITIA8w9IFZhBID8BIIhXLrIBSEyQicBuimAEIgMAAQiaAAikhZg");
	this.shape_526.setTransform(77.575,116.9833);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#3BB9C3").s().p("Ag5B+Qh/gLgSgbQgLgQAAghQAAgkAPghQAqhcB6gIIBRAEQBbALArAkQAyApgaBJQgaBIg5APQgiAJg3AAQgnAAgzgFg");
	this.shape_527.setTransform(84.234,54.4783);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#F18868").s().p("AgfAaIAfgHQAfgNAAgfIAAAaQgIAZgnAAIgPAAg");
	this.shape_528.setTransform(-22.75,136.3862);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#F18868").s().p("AABAcQgZgVgCguIALAeQAPAgAbARQgNgBgNgLg");
	this.shape_529.setTransform(-28.25,140.7);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#F6AD84").s().p("AgoBbQgFgDAagWIAbgWQhfAsgJgKQgFgGAqgeIAqgcQgfAOgfAKQg/AVADgPQACgMA1gbIA0gYIhKAKQghACAPgKQAPgMA/gSIA6gQIgjgBQgWAAgGgMQgHgLASgBIBRgDQAdAAAhAGQAPAHAWA0QgUAohMAsQg6AigUAAQgEAAgCgBg");
	this.shape_530.setTransform(-29.3798,140.5392);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#0EA9B2").s().p("AlxE8QB+heAtgkQAcgXBPg7IBJg3QBai+COiNQBIhHA1ggQBVDGiTCdQgsAuhOA3QhMA1gKAMQgkAqi2BsQhbA2hUAuQgNgugggYg");
	this.shape_531.setTransform(16.7821,100.125);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#2D2D2D").s().p("AiZB8QhOgZgnhJQgmhIAXhPIACgEIC5gPQDTgOCAABIAYBWQAaBlAEBQQgwAYhQAOQg5AKg4AAQhnAAhogig");
	this.shape_532.setTransform(78.0796,174.3111);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#FFFFFF").s().p("AghAKQABgOAGgKIATgBQAWABATAJIgDAVQgmgKgaAEg");
	this.shape_533.setTransform(108.1,326.675);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#0EA9B2").s().p("AiGgDIgBgRQAWAMAlAGQAqAGAygEQBHgEAxgfQAAAegSAMQgjAXhkAFIgXABQhaAAgEgng");
	this.shape_534.setTransform(106.625,351.105);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#FFFFFF").s().p("AgHAJQgDgEgBgEQAAgEAEgEQADgEAEAAQAEAAAEAEQADACABAFQAAAEgDAEQgDADgFABIgBAAQgEAAgDgDg");
	this.shape_535.setTransform(101.525,332.6);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#FFFFFF").s().p("AgHAIQgDgCgBgGQAAgDADgEQADgDAFAAQAEgBADADQAEADABAFQAAAEgEADQgCAEgGAAIAAABQgEAAgDgEg");
	this.shape_536.setTransform(101.4,335.7);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgEQAAgFAEgDQACgEAFAAQAEAAAEAEQADACABAFQAAAEgDADQgEAEgEABIgBAAQgEAAgDgDg");
	this.shape_537.setTransform(101.25,338.8);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#FFFFFF").s().p("AgHAIQgEgCABgGQgBgDAEgEQADgDAEgBQAEAAAEADQADAEAAAEQABAEgDAEQgEAEgFAAIAAAAQgEAAgDgEg");
	this.shape_538.setTransform(112.7,339.85);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FFFFFF").s().p("AgHAJQgDgEAAgEQgBgFADgCQAEgEAEgBQAEAAAEAEQADACAAAFQABAFgDADQgEADgFABIAAAAQgEAAgDgDg");
	this.shape_539.setTransform(113.15,337);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FFFFFF").s().p("AgHAJQgDgEAAgEQgBgEAEgEQACgDAFgBQAEAAAEADQADADAAAFQABAEgDAEQgDADgFABQgEAAgEgDg");
	this.shape_540.setTransform(113.05,334.175);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#FFFFFF").s().p("AARABQgpgLgeAOIgFgIQAigRAsAMQAXAGASAJIgFAJQgQgJgWgFg");
	this.shape_541.setTransform(107.125,335.9474);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#FFFFFF").s().p("AASABQgqgLgeAOIgFgIQAigRAsAMQAXAGASAJIgFAJQgQgJgVgFg");
	this.shape_542.setTransform(106.975,338.9474);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FFFFFF").s().p("AARABQgpgLgeAOIgFgIQAigRAsAMQAXAGASAJIgFAJQgQgJgWgFg");
	this.shape_543.setTransform(107.275,332.9474);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#3BB9C3").s().p("AiGB4IgBgRQABgjAWgkQAZghAEgMQANg1APgjQAchDAsALQAsAKASAfQAJAQAAANQAMAhAOAvQAWA/AAAgQAAAegSANQgjAXhkAFIgXABQhaAAgEgog");
	this.shape_544.setTransform(106.625,338.7338);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#2D2D2D").s().p("AgPG9IhFmlQgsksgdkaIgTjeID6g1QAwDWAUFRQAJCpAAB9IAaMvIh3AHQgfiMgqj5g");
	this.shape_545.setTransform(96.85,250.275);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#FFFFFF").s().p("AgQALIACgVQAQgBAOAEIABASQgRgBgQABg");
	this.shape_546.setTransform(57.925,328.365);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQAAgFADgDQADgEAFAAQAEAAAEADQAEADAAAFQAAAFgDADQgDADgFABIgBAAQgEAAgDgDg");
	this.shape_547.setTransform(53.725,342.4);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#FFFFFF").s().p("AAGAJQgPgFgLgIIAHgIQAHAHAPAFIAMADIgDALg");
	this.shape_548.setTransform(51.95,341.55);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQgBgEAEgEQAEgEAEAAQAEAAAEADQAEADAAAFQABAEgEAEQgEAEgFAAQgDAAgEgDg");
	this.shape_549.setTransform(56,339.6469);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#FFFFFF").s().p("AAGAKQgRgGgJgIIAFgJQAIAIAQAFIAMAEIgDAKg");
	this.shape_550.setTransform(54.2,338.725);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEADgDQAEgEAEAAQAEAAAEADQADAEABAEQABAEgEAEQgEADgEABIgBAAQgEAAgDgDg");
	this.shape_551.setTransform(58.6,337.15);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FFFFFF").s().p("AAKANQgXgIgJgLIAHgJQADAKAZAIIALADIgDAKg");
	this.shape_552.setTransform(56.4,336);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#0EA9B2").s().p("AjaASQgHgKADgKIG+gYQgBANgKAKQgJAJgOAAImEAVIgCAAQgLAAgHgJg");
	this.shape_553.setTransform(51.7821,353.9795);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#3BB9C3").s().p("AjaCgQgHgKADgLIABgEQAUgpAugUQAVgJA2gKQAfgGAfgkIA+hWQgBgLABgRIAAgBIADgWIADgTQAGgdAfAFQAfAEAJAeIABADQAHAUAXAEQAXAFAQAGIAbDKIAAAIQgBANgKAKQgJAKgOAAImEAVIgCAAQgLAAgHgJg");
	this.shape_554.setTransform(51.7821,339.7743);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#060808").s().p("Ah6AnQgFiYgBi8QgCl4AVitIBVAUQBgAYA6AXIgJE5QgNFXgXCbQAnCLgBDnQgBCJgQE1Ih2AHg");
	this.shape_555.setTransform(59.7913,250.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499}]},3).to({state:[]},1).to({state:[{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499}]},274).to({state:[]},1).wait(63));

	// Layer 2
	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#F18868").s().p("AgyAYIgOgDQgGgCABgHQABgCADgCIAFAAIAqAEQAugDAdgfQAFgFAFAEQAFAFgEAFQgiAkgzADIgKAAQgLAAgMgCg");
	this.shape_556.setTransform(62.1666,41.4827);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#F18868").s().p("AAKAsIgegWQgEgCABgFQABgEADgBIAZgIIAEgoQAAgCADgCQACgCADAAQAGABAAAHIgFAsQAAAEgFACIgPAFIATANQAGAEgEAGQgCADgEAAg");
	this.shape_557.setTransform(57.315,30.42);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#172E47").s().p("AgYABQAMgJAPABQANAAAJAGIgFAHQgGgDgHgCQgOgBgLAIg");
	this.shape_558.setTransform(59.625,25.9707);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#172E47").s().p("Ag1ACIBqgMIABAJIhpAMg");
	this.shape_559.setTransform(77.275,24.35);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#172E47").s().p("AglAqQgSgQgBgXQgBgXAQgRQAQgSAXgBQAWgBASAQQARAPABAYQACAWgQASQgQARgXABIgDABQgVAAgQgPgAgCguQgTABgNAOQgNAPABASQABAUAOANQAPANASgBQAUgBANgPQANgOgBgTQgBgTgPgNQgNgMgSAAIgCAAg");
	this.shape_560.setTransform(52.3036,27.5036);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#172E47").s().p("AglAqQgSgQgBgXQgBgWAQgSQAPgRAYgCQAWgBASAQQARAQABAXQACAWgQASQgQARgXACIgDAAQgVAAgQgPgAgCguQgTABgNAOQgNAPABATQABATAOANQAPANASgBQAUgBANgOQANgPgBgSQgBgUgPgNQgNgMgSAAIgCAAg");
	this.shape_561.setTransform(67.0536,26.725);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#F18868").s().p("AgiAMQgGgCACgGQABgHAHACQAXAGASgHQAKgEAGgGQAFgFAFAFQAFAFgFAEQgQARgbABQgPAAgNgDg");
	this.shape_562.setTransform(63.458,45.7);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#F18868").s().p("AAKAJQgJgJgOAEQgHABgBgFQgCgHAGgCQAWgGAPAPQAGAEgGAFIgEACQgDAAgDgCg");
	this.shape_563.setTransform(86.639,30.0143);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#F18868").s().p("AgVAsQgDgBgCgCQgCgCABgDQACgpAXgXQAKgLAMgEQACgBADACQACABABADQACAGgHADQgJACgJAKQgQASgCAkQgBAGgGABg");
	this.shape_564.setTransform(86.0341,30.555);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#F6AD84").s().p("AgwgqIAZgXQAcgUAXARQAhAagTA5QgVA8g3ACg");
	this.shape_565.setTransform(87.7371,29.6667);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#172E47").s().p("AghACQAHgGAJgDQAagJAUALQAHACgCAGQgCAGgGAAIgDAAQgcgLgcAOg");
	this.shape_566.setTransform(52.0735,20.9423);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#172E47").s().p("AggAGQgDACgDgBQgEgBgBgEQgDgFAGgEQAUgMAaAGQAPADANANQAHAHAEAGQgngdgmATg");
	this.shape_567.setTransform(67.075,20.8777);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#172E47").s().p("ABlA2QgHgNgigQQgfgOgGgSQgeAQgqANQhSAagwgXQg9gbARgnQAPghBEgeQBCgcBKgHQBRgIAwAYQBFAiAUBDQARA0gNBUQgLgGgPAAQgeAAgVAgIgbACQgCg5gPgfg");
	this.shape_568.setTransform(68.3214,11.3593);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#172E47").s().p("AgIASQgEgHAAgKQgBgJAEgHQADgIAGAAQAEAAAEAHQAFAGAAAKQABAJgEAIQgDAHgGAAQgEAAgFgGg");
	this.shape_569.setTransform(52.775,27.4983);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#172E47").s().p("AgIASQgEgHAAgKQgBgJAEgIQADgHAGAAQAEgBAEAIQAFAGAAAKQABAJgEAIQgDAGgGABIAAAAQgFAAgEgGg");
	this.shape_570.setTransform(66.425,26.75);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#172E47").s().p("AgXgHIgBglQAbgOAWgCQgKBFgcA0QgHgbgDgpg");
	this.shape_571.setTransform(87.75,38.125);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#F6AD84").s().p("AhaDxQgdgIgWgWQgTgTgJgXQgEgKgBgGIgUhlQgKg4gEgrIgBgTQgDg6AKgZQAOgiA4gbQA1gbBEgHQBTgJBBA3QBBA2AGBUIADAvIgBAEQAAAagEAZQgKBHgdA0IgHANQgZANgzASIgFABQgrAPhAARQgPAEgPAAQgQAAgQgFg");
	this.shape_572.setTransform(69.675,27.7552);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#F18868").s().p("AhAgnIAggNIBhgHQgNAZgUAbQgoA1gpAOg");
	this.shape_573.setTransform(75.6,49.925);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#F6AD84").s().p("AhABZIgUiQIAggNIBGgZQAsgNASAKIAFCdQgWAQgeAMQgeAMgXAAQgZAAgTgMg");
	this.shape_574.setTransform(77.65,51.5201);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#172E47").s().p("AAFBUQgUgXgMgxQgNgvARgkQAIgRAKgIQAoAKgCBcQgBAvgJAsQgIgBgKgMg");
	this.shape_575.setTransform(50.5103,18.975);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#3BB9C3").s().p("AgBHhQgegDgTgNQAQhRANhiQAZjEgLhTQgOgNgXgkQguhGgohqQgHg7AEg/QAKh9A6gQIBOCAQBVCfAjCZIACAxQABA/gHBBQgUDNhVCMIgMABIgNgBg");
	this.shape_576.setTransform(117.1137,110.3875);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#F6AD84").s().p("Ag7CJQgIgKASg7IATg6IguA/QgWAbADgTQADgUAfg8IAfg3IgHAJQgKALgRAKQgOAIgKgFQgKgEALgNIA1g8QANgOAVgOIASgLQAKgFAgAJIAdAKQARAtgWBYQgVBSgRAFQgIACAIhJIgTA0QgWA0gIgBQgIAAAIg1IAJg0IgaBAQgYA0gLAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_577.setTransform(110.2156,170.7127);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#FFFFFF").s().p("AgEDaQgEAAgBgEQgKhLALi1IANiqQAAgFAFAAQAFABgBAFIgNCpQgLC1AKBKQAAAEgDABg");
	this.shape_578.setTransform(65.1078,90.025);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#FFFFFF").s().p("AgDDZQgEgBgBgEQgKhKALi0IAMipQABgFAEAAQAEACAAADIgNCpQgKCzAKBLQAAADgDACg");
	this.shape_579.setTransform(80.8436,91.7);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#0EA9B2").s().p("Ai2BNQgFgWgDgiQgHhEAIg/IFdALIAHA+QAKBIARA5Qg7ANhNAFQgdABgaAAQhyAAhHgig");
	this.shape_580.setTransform(70.931,147.6876);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#0EA9B2").s().p("AADAZQgagOgJgjQgBgFAFgBQAEgBACAEQAHAfAVAMQALAGALAAQAFAAAAAFQAAAFgFAAIgBAAQgMAAgMgHg");
	this.shape_581.setTransform(65.7659,63.2926);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#0EA9B2").s().p("AhKBBQgEAAgBgFQAAgFAEAAIACAAQBMgEApg1QAVgcAGgdQABgFAFABQAEABgBAEQgGAegWAdQgsA7hQAFg");
	this.shape_582.setTransform(88.1341,61.1917);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#3BB9C3").s().p("AlJITIA9w8IFZhCID8BIIhXLsIBSEyQidBtimAEIgMAAQiZAAilhZg");
	this.shape_583.setTransform(77.6,116.9833);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#3BB9C3").s().p("Ag5B+Qh/gLgSgbQgLgQAAggQAAglAPghQAphcB7gIIBRAEQBbALArAkQAyAogaBKQgaBIg5APQghAJg3AAQgnAAg0gFg");
	this.shape_584.setTransform(84.259,54.4827);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#F18868").s().p("AACATQAZgUgJghIAJAcQgCAegyALQAPgFAMgLg");
	this.shape_585.setTransform(3.35,154.7875);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#F18868").s().p("AAKAaQgfgNgQgrIAUAaQAYAaAfAIIgHABQgKAAgLgFg");
	this.shape_586.setTransform(-1.025,160.7097);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#F6AD84").s().p("AhDBrQgHgEAfgoIAggoIg0AqQg1AmgDgPQgCgMArgqIArgnIhFAfQgeANALgPQALgQA3gjIA0ghIgkAKQgUAHgKgJQgJgJAQgGIBNgcQAbgJAigDQAQABAlArQgHAug8BAQg3A8gPgEQgGgBASgeIAUgdQhGBBgQAAIgDgBg");
	this.shape_587.setTransform(-2.2458,160.4106);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#0EA9B2").s().p("AkSGfQBbiAAggxIBOhuIA2hKQAcjPBeiyQAvhZApgvQCNClheDBQgcA5g6BMQg4BJgGAOQgWAziOCeQhHBPhCBFQgagpglgMg");
	this.shape_588.setTransform(31.593,108.3);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#2D2D2D").s().p("AiZB8QhPgZgmhJQgmhIAXhPIABgEIC6gPQDSgOCAABIAZBWQAaBlAEBQQgwAYhRAOQg4AKg5AAQhnAAhngig");
	this.shape_589.setTransform(78.1296,174.3111);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#FFFFFF").s().p("AggAKQAAgOAFgKIAUAAQAXABARAIIgBAUQgngJgZAEg");
	this.shape_590.setTransform(108.15,326.7);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#0EA9B2").s().p("AiGgDIgBgRQAWAMAlAGQAqAGAygEQBHgEAxgfQAAAfgSALQgiAXhlAFIgYABQhZAAgEgng");
	this.shape_591.setTransform(106.625,351.11);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FFFFFF").s().p("AgHAIQgDgCAAgGQgBgDAEgEQADgDAEAAQAEgBAEADQAEADgBAFQABAEgDAEQgEADgFAAIAAABQgDAAgEgEg");
	this.shape_592.setTransform(101.55,332.6);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#FFFFFF").s().p("AgHAJQgDgEgBgEQAAgEADgDQAEgEAEgBQAEAAAEAEQAEACAAAFQAAAFgEADQgCADgGABIAAAAQgDAAgEgDg");
	this.shape_593.setTransform(101.4,335.7);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#FFFFFF").s().p("AgHAIQgDgDgBgFQAAgKALAAQAEgBAEADQADAEABAEQAAAEgDAEQgEADgEAAIgBABQgEAAgDgEg");
	this.shape_594.setTransform(101.275,338.8);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#FFFFFF").s().p("AgGAIQgEgDAAgEQgBgEAEgEQACgDAFgBQAEAAAEADQADADAAAFQABAEgDAEQgDADgFAAIgBABQgDAAgDgEg");
	this.shape_595.setTransform(112.7,339.8531);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FFFFFF").s().p("AgHAIQgDgDgBgFQAAgDAEgEQADgDAEAAQAEgBAEADQADAEABAEQAAAEgDAEQgEAEgEgBIgBABQgEAAgDgEg");
	this.shape_596.setTransform(113.175,337);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FFFFFF").s().p("AgHAJQgDgDAAgFQgBgEADgEQAEgDAEAAQAEgBADAEQAEADABAEQAAAEgEAEQgCADgGABQgEAAgDgDg");
	this.shape_597.setTransform(113.1,334.1969);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FFFFFF").s().p("AARAAQgpgKgeAOIgFgIQAhgRAtAMQAbAHAOAIIgGAJQgPgJgWgGg");
	this.shape_598.setTransform(107.175,335.9638);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#FFFFFF").s().p("AARABQgpgLgeAOIgFgIQAhgRAtAMQAXAGASAJIgGAJQgPgIgWgGg");
	this.shape_599.setTransform(107.025,338.9474);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#FFFFFF").s().p("AARAAQgqgKgdAOIgFgIQAhgRAtAMQAXAGASAJIgGAJQgPgJgWgGg");
	this.shape_600.setTransform(107.325,332.9724);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#3BB9C3").s().p("AiGB3IgBgQQABgjAWgkQAZghAEgMQANg1APgjQAdhDArALQAtAKASAfQAJAQAAANIAZBPQAWA+AAAhQAAAggSALQgiAYhlAFIgYABQhZAAgEgpg");
	this.shape_601.setTransform(106.625,338.7634);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#2D2D2D").s().p("AgOG9IhGmlQgtksgckaIgTjdID6g2QAxDWASFRQAKCpAAB9IAaMvIh3AGQgeiKgqj6g");
	this.shape_602.setTransform(96.9,250.3);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#FFFFFF").s().p("AgQALIACgVQARgBANAEIABASQgRgBgQABg");
	this.shape_603.setTransform(57.95,328.3659);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgGQAAgDADgEQAEgEAEAAQAEgBAEAEQADAEABAEQABAEgEAEQgEAEgEAAIgBAAQgEAAgDgDg");
	this.shape_604.setTransform(53.75,342.4);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#FFFFFF").s().p("AAGAKQgSgHgIgHIAHgJQAIAIAOAFIAMADIgDAKg");
	this.shape_605.setTransform(52,341.55);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQAAgFADgDQADgDAFgBQAEAAAEADQAEADAAAFQAAAFgDADQgDADgFABIgBAAQgEAAgDgDg");
	this.shape_606.setTransform(56.025,339.65);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#FFFFFF").s().p("AAGAKQgSgHgJgHIAHgJQAIAIAQAFIALAEIgCAKIgNgEg");
	this.shape_607.setTransform(54.2,338.75);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQAAgEADgEQADgDAFgBQAEAAAEADQAEADAAAFQAAAFgDADQgDAEgFAAIgBAAQgEAAgDgDg");
	this.shape_608.setTransform(58.625,337.15);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#FFFFFF").s().p("AAKANQgXgHgJgMIAGgKQAGANAXAGIAKAEIgCAKg");
	this.shape_609.setTransform(56.425,336);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#0EA9B2").s().p("AjZASQgIgKADgKIG+gYQgBAOgJAJQgKAJgOAAImDAVIgDAAQgLAAgGgJg");
	this.shape_610.setTransform(51.7967,353.9795);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#3BB9C3").s().p("AjaCgQgIgKAEgLIABgEQAUgpAugUQAVgJA2gKQAfgGAfgkIAGgJQAJgJAFgKIAHgIIAigyIABgcIAAgBIAGgoQAGgdAfAEQAfAEAIAeIABADQAIAVAXADQAXAFAQAGIAbDLQABAEgBADQgBAOgKAJQgKAKgNAAImEAVIgCAAQgLAAgHgJg");
	this.shape_611.setTransform(51.8217,339.7993);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#060808").s().p("Ah7AnQgFiYgBi8QgCl4AVitIBWAUQBgAYA6AXIgJE5QgNFXgXCbQAnCLgCDmQgBCJgPE2Ih2AGg");
	this.shape_612.setTransform(59.8163,250.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556}]},2).to({state:[]},1).to({state:[{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556}]},276).to({state:[]},1).wait(62));

	// Layer 2
	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#F18868").s().p("AgxAYIgPgDQgHgCACgHQACgHAHACIAqAFQAugDAdgfQAFgFAFAEQAFAFgEAFQgiAkgzADIgFAAQgOAAgNgCg");
	this.shape_613.setTransform(62.1594,41.4726);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#F18868").s().p("AAKAsIgegWQgEgDABgDQABgFAEgBIAYgIIAEgnQABgIAHABQAGABAAAHIgFAsQAAAFgFABIgOAFIASANQAGAEgEAGQgCACgEABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAg");
	this.shape_614.setTransform(57.3219,30.3941);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#172E47").s().p("AgYABQAMgJAPABQAMAAAKAGIgFAHQgGgDgHgCQgOgBgLAIg");
	this.shape_615.setTransform(59.625,25.9207);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#172E47").s().p("Ag1ACIBqgMIABAJIhpAMg");
	this.shape_616.setTransform(77.275,24.3);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#172E47").s().p("AglAqQgSgQgBgXQgBgWAQgSQAPgRAYgCQAWgBASAQQARAQACAXQABAXgQARQgQASgXABIgDAAQgVAAgQgPgAgCguQgTABgNAOQgNAPABATQABATAOANQAPANASgBQAUgBANgOQANgPgBgSQgBgUgPgNQgNgMgSAAIgCAAg");
	this.shape_617.setTransform(52.325,27.475);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#172E47").s().p("AglAqQgSgQgBgXQgBgXAQgRQAQgRAXgBQAWgCASAQQARAPABAYQACAWgQASQgQASgXAAIgDABQgVAAgQgPgAgCguQgTABgNAOQgNAPABASQABAUAOANQAPANASgBQAUgBANgPQANgOgBgSQgBgUgPgNQgNgNgSAAIgCABg");
	this.shape_618.setTransform(67.0536,26.7);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#F18868").s().p("AgiAMQgGgCACgHQABgCACgBQADgBACAAQAXAGASgHQAKgEAGgGQAEgFAGAFQAFAEgFAGQgQAQgbABIgEAAQgLAAgNgDg");
	this.shape_619.setTransform(63.4666,45.6775);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#F18868").s().p("AAKAJQgJgJgOAEQgGACgCgGQgCgGAGgCQAPgEAMAFQAGADAEAEQAGAFgGAEQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgEAAgCgCg");
	this.shape_620.setTransform(86.6475,29.9908);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#F18868").s().p("AgVAsQgDAAgCgCQgCgDABgDQACgpAXgXQAKgLAMgEQAHgCABAHQACAHgHACQgJADgJAKQgQASgCAjQgBAHgGAAg");
	this.shape_621.setTransform(86.0422,30.5028);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#F6AD84").s().p("AgwgqIAZgXQAcgUAXASQAiAZgUA5QgVA9g3ABg");
	this.shape_622.setTransform(87.7488,29.6417);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#172E47").s().p("AghABQAHgFAKgDQAXgIAXAJQAFAEgBAFQgCAGgGAAIgDgBQgcgKgcAOg");
	this.shape_623.setTransform(52.0661,20.9171);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#172E47").s().p("AgBAAQgQAAgPAHQgDABgDgBQgDgBgCgDQgCgGAFgEQAWgMAYAGQAPADAOANQAGAHAEAGQgXgQgXAAg");
	this.shape_624.setTransform(67.0859,20.8386);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#172E47").s().p("ABlA3QgHgOgigPQgfgPgGgSQgeARgqAMQhSAagwgWQg9gcARgmQAPgiBEgdQBCgdBKgHQBRgIAwAYQBFAiAUBDQARA1gNBUQgLgHgPAAQgeAAgVAgIgbACQgCg5gPgeg");
	this.shape_625.setTransform(68.3366,11.3234);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#172E47").s().p("AgHARQgEgGgBgKQgBgJAEgIQADgGAGgBQAEAAAFAGQAEAIAAAJQABAJgEAIQgDAHgGAAIAAAAQgFAAgDgHg");
	this.shape_626.setTransform(52.775,27.45);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#172E47").s().p("AgIASQgEgHAAgKQgBgJAEgHQADgIAGAAQAEAAAEAHQAFAGAAAKQABAJgEAIQgDAHgGAAQgEAAgFgGg");
	this.shape_627.setTransform(66.425,26.7483);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#172E47").s().p("AgXgHIgBgkQAdgQAUgBQgKBFgbA0QgIgbgDgpg");
	this.shape_628.setTransform(87.75,38.1);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#F6AD84").s().p("AhaDxQgdgIgWgWQgTgRgJgZIgFgQIgUhlQgKg5gEgpIgBgUQgDg6AKgYQAOgjA4gbQA1gaBEgIQBTgIBBA2QBBA2AGBVIADAvIgBAEQAAAZgEAZQgKBHgcA0IgIANQgeAPguAQIgFACQg5ASgyANQgPAEgPAAQgQAAgQgFg");
	this.shape_629.setTransform(69.675,27.7116);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#F18868").s().p("AhAgnIAhgMIBggIQgNAZgUAbQgoA2gqANg");
	this.shape_630.setTransform(75.6,49.875);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#F6AD84").s().p("AhABZIgUiQIAggMQA9gXAJgDQAsgNASALIAFCcQgWAQgeAMQgeAMgXAAQgZAAgTgMg");
	this.shape_631.setTransform(77.65,51.4904);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#172E47").s().p("AAFBUQgUgXgMgxQgNgwARgjQAIgSAKgHQAoALgCBbQgBAvgJAtQgIgCgKgMg");
	this.shape_632.setTransform(50.5103,18.95);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#3BB9C3").s().p("AgBHhQgegDgTgNQAQhRANhiQAZjEgLhTQgOgOgXgjQguhHgohpQgHg7AEg/QAKh9A6gQIBOCAQBVCfAjCZIACAxQABA/gHBBQgUDNhVCMIgMABIgNgBg");
	this.shape_633.setTransform(117.1137,110.3625);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#F6AD84").s().p("Ag7CJQgIgKASg7IATg5IguA/QgVAaACgTQADgUAfg8IAfg3IgHAJQgKALgRAKQgOAIgKgFQgKgEALgNQAbggAagcQANgOAVgOIASgLQAKgEAgAJIAdAJQARAtgWBYQgVBTgRAEQgIACAIhJQgjBogNgBQgIAAAHg0IAJg1IgaBBQgYAzgLAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_634.setTransform(110.2201,170.6769);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#FFFFFF").s().p("AgEDaQgEAAgBgEQgKhLALi2IANiqQAAAAABgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQAFAAgBAFIgNCqQgLC1AKBJQAAAFgDABg");
	this.shape_635.setTransform(65.1078,90.0188);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#FFFFFF").s().p("AgDDZQgEAAgBgEQgKhLALi0IAMipQABgFAEABQAEAAAAAFIgNCoQgKCzAKBKQAAAFgDABg");
	this.shape_636.setTransform(80.8436,91.6917);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#0EA9B2").s().p("Ai2BNQgFgWgDgiQgHhFAIg/IFdALIAHA+QAKBJARA5Qg7ANhNAFQgbACgaAAQhzAAhIgjg");
	this.shape_637.setTransform(70.931,147.6552);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#0EA9B2").s().p("AADAZQgagOgJgkQgBgEAFgBQAEgCACAFQAHAfAVAMQAOAIAIgCQAFAAAAAFQABAEgGAAIgBAAQgMAAgMgGg");
	this.shape_638.setTransform(65.7736,63.2594);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#0EA9B2").s().p("AhQA8QAAgEAFgBIACAAQBLgEAqg2QAUgbAHgeQABgEAEABQAFABgBAEQgGAegWAdQgtA7hPAEIgDAAIgBAAQgDAAgBgEg");
	this.shape_639.setTransform(88.1583,61.1736);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#3BB9C3").s().p("AlIITIA8w9IFZhBID8BIIhXLrIBSEyQidBtimAFIgMAAQiZAAikhZg");
	this.shape_640.setTransform(77.625,116.9832);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#3BB9C3").s().p("Ag5B+Qh/gLgSgbQgLgQAAghQAAgkAPghQAphcB7gIIBRAEQBbALArAkQAyAogaBKQgaBIg5APQghAJg4AAQgnAAgzgFg");
	this.shape_641.setTransform(84.259,54.4533);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#F18868").s().p("AADASQAVgYgOgeIANAZQAEAegxASQAPgGAKgNg");
	this.shape_642.setTransform(18.69,161.125);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#F18868").s().p("AANAYQgggIgWgoIAYAWQAcAWAfADQgHACgIAAIgOgBg");
	this.shape_643.setTransform(15.05,167.6266);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#F6AD84").s().p("AgvB1QgHgDAYgtIAZgsIgtAxQguAvgFgPQgDgMAjgwIAkgtIg/AqQgcARAJgQQAJgSAwgrIAugpIghAQQgUAKgKgIQgLgHAPgJIBHgnQARgIAWgIIATgGQARgBArAlQAAAugxBIQgtBEgQgBQgIgBAfg/Qg9BOgPAAIgCgBg");
	this.shape_644.setTransform(13.5513,167.3659);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#0EA9B2").s().p("Ai3HDQBGiNAZg1IA7h5IAohRQgDjSBBi+QAVg7AZgzIAUgmQA9DMgWCyQgHA7gSA/IgYBTQgOA2hzCyQg6BZg3BPQgfgkgngHg");
	this.shape_645.setTransform(36.7666,110.85);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#2D2D2D").s().p("AiZB8QhPgZgmhJQgmhIAXhPIABgEQBQgIBqgHQDSgOCAABIAZBWQAaBlAEBQQgwAYhRAOQg4AKg5AAQhnAAhngig");
	this.shape_646.setTransform(78.1296,174.3111);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#FFFFFF").s().p("AggAJQAAgNAFgKIAUgBQAXABARAJIgBAVQgngKgZADg");
	this.shape_647.setTransform(108.15,326.675);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#0EA9B2").s().p("AiGgDIAAgRQAVAMAlAGQAqAGAygEQBIgEAwgfQAAAfgSALQgiAXhlAFIgZABQhYAAgEgng");
	this.shape_648.setTransform(106.6417,351.085);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#FFFFFF").s().p("AgHAJQgDgDAAgFQgBgEAEgEQADgDAEgBQAEAAAEAEQAEADgBAEQABAEgDAEQgEADgEABQgEAAgEgDg");
	this.shape_649.setTransform(101.55,332.575);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#FFFFFF").s().p("AgHAJQgDgDgBgFQAAgEADgEQADgDAFgBQAEAAAEAEQADADAAAEQABAEgEAEQgDADgEABQgEAAgEgDg");
	this.shape_650.setTransform(101.4031,335.675);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#FFFFFF").s().p("AgHAJQgDgEgBgEQAAgEAEgEQADgDAEgBQAEAAAEAEQADADABAEQAAAEgDAEQgDADgFABQgEAAgEgDg");
	this.shape_651.setTransform(101.275,338.775);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#FFFFFF").s().p("AgHAIQgDgCgBgGQAAgEADgDQADgDAFgBQAEAAAEADQADAEABAEQAAAEgDADQgEAEgEABIgBAAQgEAAgDgEg");
	this.shape_652.setTransform(112.725,339.85);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#FFFFFF").s().p("AgHAJQgDgEgBgEQAAgFAEgDQADgEAEAAQAEAAAEAEQADACABAFQAAAEgDADQgDAEgFABIgBAAQgEAAgDgDg");
	this.shape_653.setTransform(113.175,337);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#FFFFFF").s().p("AgHAJQgDgEgBgFQAAgDADgEQAEgDAEAAQAEgBADADQAEAEABAEQAAAEgEAEQgCAEgGgBIAAABQgEAAgDgDg");
	this.shape_654.setTransform(113.1,334.15);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#FFFFFF").s().p("AARAAQgpgKgeAOIgFgIQAhgRAtAMQAXAGASAJIgGAJQgPgJgWgGg");
	this.shape_655.setTransform(107.175,335.9474);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#FFFFFF").s().p("AARAAQgpgKgeAOIgFgIQAhgRAtAMQAXAGASAJIgGAJQgPgJgWgGg");
	this.shape_656.setTransform(107.025,338.9474);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#FFFFFF").s().p("AARAAQgpgKgeAOIgFgIQAhgRAtAMQAXAGASAJIgGAJQgPgJgWgGg");
	this.shape_657.setTransform(107.325,332.9474);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#3BB9C3").s().p("AiGB3IAAgQQAAgjAWgkQAZghAFgMQAMg1APgjQAchDAsALQAtAKASAfQAJAQAAANIAZBQQAWA/AAAgQAAAfgSALQgiAYhlAFIgZABQhYAAgEgpg");
	this.shape_658.setTransform(106.6422,338.7134);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#2D2D2D").s().p("AgOG9IhGmlQgtksgckaIgTjeID6g1QAxDWASFRQAKCpgBB9IAbMvIh3AHQgeiLgqj6g");
	this.shape_659.setTransform(96.9,250.275);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#FFFFFF").s().p("AgQAMIACgWQARgBANAEIABATQgRgCgQACg");
	this.shape_660.setTransform(57.95,328.3409);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQAAgEADgEQAEgEAEAAQAEAAAEADQAEADAAAFQABAEgEAEQgDAEgFAAQgEAAgEgDg");
	this.shape_661.setTransform(53.75,342.3969);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#FFFFFF").s().p("AAFAJQgRgGgIgHIAHgIQAIAHAOAFIAMADIgDALg");
	this.shape_662.setTransform(52,341.55);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQAAgEADgEQADgEAFAAQAEAAAEADQAEADAAAFQAAAEgDAEQgDAEgFAAQgEAAgEgDg");
	this.shape_663.setTransform(56.025,339.625);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#FFFFFF").s().p("AAGAKQgRgGgJgIIAGgJQAIAIAQAFIALAEIgCAKg");
	this.shape_664.setTransform(54.225,338.725);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#FFFFFF").s().p("AgHAJQgEgDAAgFQAAgEADgEQADgEAFAAQAEAAAEADQAEADAAAFQAAAEgDAEQgDAEgFAAQgEAAgEgDg");
	this.shape_665.setTransform(58.625,337.125);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#FFFFFF").s().p("AAKAOQgXgIgJgMIAGgKQAFAMAYAHIAKADIgCALg");
	this.shape_666.setTransform(56.425,335.975);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#0EA9B2").s().p("AjaASQgHgKADgKIG+gYQgBANgKAKQgKAIgNABImEAVIgBAAQgLAAgIgJg");
	this.shape_667.setTransform(51.8071,353.9513);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#3BB9C3").s().p("AjaCgQgHgKADgLIABgEQAUgqAugTQAVgJA2gKQAfgGAfglIA9hWIABgbIAAgBIAGgpQAGgdAfAFQAfAEAIAeIABADQAIAUAXAEQAXAEAQAHIAbDKQABAEgBAEQgBANgKAKQgJAJgOABImEAVIgBAAQgMAAgHgJg");
	this.shape_668.setTransform(51.8321,339.771);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#060808").s().p("Ah7AnQgFiYgBi8QgCl4AVitIBWAUQBgAYA6AYIgJE4QgNFYgXCaQAnCLgCDnQgBCJgPE2Ih2AFg");
	this.shape_669.setTransform(59.8163,250.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_669,p:{scaleX:1,scaleY:1,rotation:0,x:59.8163,y:250.9}},{t:this.shape_668,p:{scaleX:1,scaleY:1,rotation:0,x:51.8321,y:339.771}},{t:this.shape_667,p:{scaleX:1,scaleY:1,rotation:0,x:51.8071,y:353.9513}},{t:this.shape_666,p:{scaleX:1,scaleY:1,rotation:0,x:56.425,y:335.975}},{t:this.shape_665,p:{scaleX:1,scaleY:1,rotation:0,x:58.625,y:337.125}},{t:this.shape_664,p:{scaleX:1,scaleY:1,rotation:0,x:54.225,y:338.725}},{t:this.shape_663,p:{scaleX:1,scaleY:1,rotation:0,x:56.025,y:339.625}},{t:this.shape_662,p:{scaleX:1,scaleY:1,rotation:0,x:52,y:341.55}},{t:this.shape_661,p:{scaleX:1,scaleY:1,rotation:0,x:53.75,y:342.3969}},{t:this.shape_660,p:{scaleX:1,scaleY:1,rotation:0,x:57.95,y:328.3409}},{t:this.shape_659,p:{scaleX:1,scaleY:1,rotation:0,x:96.9,y:250.275}},{t:this.shape_658,p:{scaleX:1,scaleY:1,rotation:0,x:106.6422,y:338.7134}},{t:this.shape_657,p:{scaleX:1,scaleY:1,rotation:0,x:107.325,y:332.9474}},{t:this.shape_656,p:{scaleX:1,scaleY:1,rotation:0,x:107.025,y:338.9474}},{t:this.shape_655,p:{scaleX:1,scaleY:1,rotation:0,x:107.175,y:335.9474}},{t:this.shape_654,p:{scaleX:1,scaleY:1,rotation:0,x:113.1,y:334.15}},{t:this.shape_653,p:{scaleX:1,scaleY:1,rotation:0,x:113.175,y:337}},{t:this.shape_652,p:{scaleX:1,scaleY:1,rotation:0,x:112.725,y:339.85}},{t:this.shape_651,p:{scaleX:1,scaleY:1,rotation:0,x:101.275,y:338.775}},{t:this.shape_650,p:{scaleX:1,scaleY:1,rotation:0,x:101.4031,y:335.675}},{t:this.shape_649,p:{scaleX:1,scaleY:1,rotation:0,x:101.55,y:332.575}},{t:this.shape_648,p:{scaleX:1,scaleY:1,rotation:0,x:106.6417,y:351.085}},{t:this.shape_647,p:{scaleX:1,scaleY:1,rotation:0,x:108.15,y:326.675}},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613}]},1).to({state:[]},1).to({state:[{t:this.shape_669,p:{scaleX:1,scaleY:1,rotation:0,x:59.8163,y:250.9}},{t:this.shape_668,p:{scaleX:1,scaleY:1,rotation:0,x:51.8321,y:339.771}},{t:this.shape_667,p:{scaleX:1,scaleY:1,rotation:0,x:51.8071,y:353.9513}},{t:this.shape_666,p:{scaleX:1,scaleY:1,rotation:0,x:56.425,y:335.975}},{t:this.shape_665,p:{scaleX:1,scaleY:1,rotation:0,x:58.625,y:337.125}},{t:this.shape_664,p:{scaleX:1,scaleY:1,rotation:0,x:54.225,y:338.725}},{t:this.shape_663,p:{scaleX:1,scaleY:1,rotation:0,x:56.025,y:339.625}},{t:this.shape_662,p:{scaleX:1,scaleY:1,rotation:0,x:52,y:341.55}},{t:this.shape_661,p:{scaleX:1,scaleY:1,rotation:0,x:53.75,y:342.3969}},{t:this.shape_660,p:{scaleX:1,scaleY:1,rotation:0,x:57.95,y:328.3409}},{t:this.shape_659,p:{scaleX:1,scaleY:1,rotation:0,x:96.9,y:250.275}},{t:this.shape_658,p:{scaleX:1,scaleY:1,rotation:0,x:106.6422,y:338.7134}},{t:this.shape_657,p:{scaleX:1,scaleY:1,rotation:0,x:107.325,y:332.9474}},{t:this.shape_656,p:{scaleX:1,scaleY:1,rotation:0,x:107.025,y:338.9474}},{t:this.shape_655,p:{scaleX:1,scaleY:1,rotation:0,x:107.175,y:335.9474}},{t:this.shape_654,p:{scaleX:1,scaleY:1,rotation:0,x:113.1,y:334.15}},{t:this.shape_653,p:{scaleX:1,scaleY:1,rotation:0,x:113.175,y:337}},{t:this.shape_652,p:{scaleX:1,scaleY:1,rotation:0,x:112.725,y:339.85}},{t:this.shape_651,p:{scaleX:1,scaleY:1,rotation:0,x:101.275,y:338.775}},{t:this.shape_650,p:{scaleX:1,scaleY:1,rotation:0,x:101.4031,y:335.675}},{t:this.shape_649,p:{scaleX:1,scaleY:1,rotation:0,x:101.55,y:332.575}},{t:this.shape_648,p:{scaleX:1,scaleY:1,rotation:0,x:106.6417,y:351.085}},{t:this.shape_647,p:{scaleX:1,scaleY:1,rotation:0,x:108.15,y:326.675}},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613}]},278).to({state:[{t:this.shape_669,p:{scaleX:0.9969,scaleY:0.9969,rotation:5.2308,x:52.2813,y:250.5309}},{t:this.shape_668,p:{scaleX:0.9886,scaleY:0.9886,rotation:5.2295,x:36.1314,y:335.1608}},{t:this.shape_667,p:{scaleX:0.9886,scaleY:0.9886,rotation:5.2295,x:34.8291,y:349.1183}},{t:this.shape_666,p:{scaleX:0.9807,scaleY:0.9807,rotation:5.2295,x:40.8087,y:329.1409}},{t:this.shape_665,p:{scaleX:0.9768,scaleY:0.9768,rotation:5.2296,x:42.7549,y:329.1334}},{t:this.shape_664,p:{scaleX:0.9807,scaleY:0.9807,rotation:5.2295,x:38.4143,y:331.63}},{t:this.shape_663,p:{scaleX:0.9768,scaleY:0.9768,rotation:5.2296,x:40.0031,y:331.3339}},{t:this.shape_662,p:{scaleX:0.9807,scaleY:0.9807,rotation:5.2295,x:35.9889,y:334.19}},{t:this.shape_661,p:{scaleX:0.9768,scaleY:0.9768,rotation:5.2296,x:37.5433,y:333.8277}},{t:this.shape_660,p:{scaleX:0.9848,scaleY:0.9848,rotation:5.2292,x:43.0883,y:323.1916}},{t:this.shape_659,p:{scaleX:1,scaleY:1,rotation:0,x:96.9,y:250.275}},{t:this.shape_658,p:{scaleX:1,scaleY:1,rotation:0,x:106.6422,y:338.7134}},{t:this.shape_657,p:{scaleX:1,scaleY:1,rotation:0,x:107.325,y:332.9474}},{t:this.shape_656,p:{scaleX:1,scaleY:1,rotation:0,x:107.025,y:338.9474}},{t:this.shape_655,p:{scaleX:1,scaleY:1,rotation:0,x:107.175,y:335.9474}},{t:this.shape_654,p:{scaleX:1,scaleY:1,rotation:0,x:113.1,y:334.15}},{t:this.shape_653,p:{scaleX:1,scaleY:1,rotation:0,x:113.175,y:337}},{t:this.shape_652,p:{scaleX:1,scaleY:1,rotation:0,x:112.725,y:339.85}},{t:this.shape_651,p:{scaleX:1,scaleY:1,rotation:0,x:101.275,y:338.775}},{t:this.shape_650,p:{scaleX:1,scaleY:1,rotation:0,x:101.4031,y:335.675}},{t:this.shape_649,p:{scaleX:1,scaleY:1,rotation:0,x:101.55,y:332.575}},{t:this.shape_648,p:{scaleX:1,scaleY:1,rotation:0,x:106.6417,y:351.085}},{t:this.shape_647,p:{scaleX:1,scaleY:1,rotation:0,x:108.15,y:326.675}},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613}]},5).to({state:[{t:this.shape_669,p:{scaleX:0.9956,scaleY:0.9956,rotation:9.6958,x:45.8868,y:250.125}},{t:this.shape_668,p:{scaleX:0.9839,scaleY:0.9839,rotation:9.6955,x:23.2484,y:331.9367}},{t:this.shape_667,p:{scaleX:0.9839,scaleY:0.9839,rotation:9.6955,x:20.8746,y:345.6848}},{t:this.shape_666,p:{scaleX:0.9731,scaleY:0.9731,rotation:9.6957,x:28.364,y:325.3082}},{t:this.shape_665,p:{scaleX:0.9672,scaleY:0.9672,rotation:9.6959,x:30.2911,y:324.7337}},{t:this.shape_664,p:{scaleX:0.9731,scaleY:0.9731,rotation:9.6957,x:25.8032,y:327.5854}},{t:this.shape_663,p:{scaleX:0.9672,scaleY:0.9672,rotation:9.6959,x:27.4052,y:326.6935}},{t:this.shape_662,p:{scaleX:0.9731,scaleY:0.9731,rotation:9.6957,x:23.2061,y:329.9304}},{t:this.shape_661,p:{scaleX:0.9672,scaleY:0.9672,rotation:9.6959,x:24.7848,y:328.9655}},{t:this.shape_660,p:{scaleX:0.9783,scaleY:0.9783,rotation:9.6965,x:31.0715,y:320.0046}},{t:this.shape_659,p:{scaleX:0.9969,scaleY:0.9969,rotation:4.7271,x:90.1361,y:249.5506}},{t:this.shape_658,p:{scaleX:0.9852,scaleY:0.9852,rotation:4.7264,x:91.6597,y:334.1301}},{t:this.shape_657,p:{scaleX:0.9852,scaleY:0.9852,rotation:4.7264,x:92.7981,y:328.5243}},{t:this.shape_656,p:{scaleX:0.9852,scaleY:0.9852,rotation:4.7264,x:92.0165,y:334.391}},{t:this.shape_655,p:{scaleX:0.9852,scaleY:0.9852,rotation:4.7264,x:92.4073,y:331.4576}},{t:this.shape_654,p:{scaleX:0.9852,scaleY:0.9852,rotation:4.7264,x:98.3706,y:330.1739}},{t:this.shape_653,p:{scaleX:0.9852,scaleY:0.9852,rotation:4.7264,x:98.2129,y:332.9782}},{t:this.shape_652,p:{scaleX:0.9852,scaleY:0.9852,rotation:4.7264,x:97.5397,y:335.7399}},{t:this.shape_651,p:{scaleX:0.9852,scaleY:0.9852,rotation:4.7264,x:86.3849,y:333.755}},{t:this.shape_650,p:{scaleX:0.9852,scaleY:0.9852,rotation:4.7264,x:86.7624,y:330.7217}},{t:this.shape_649,p:{scaleX:0.9852,scaleY:0.9852,rotation:4.7264,x:87.1582,y:327.6899}},{t:this.shape_648,p:{scaleX:0.9852,scaleY:0.9852,rotation:4.7264,x:90.6548,y:346.277}},{t:this.shape_647,p:{scaleX:0.9852,scaleY:0.9852,rotation:4.7264,x:94.1173,y:322.4328}},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613}]},5).to({state:[{t:this.shape_669,p:{scaleX:0.9956,scaleY:0.9956,rotation:9.6956,x:45.8877,y:250.1289}},{t:this.shape_668,p:{scaleX:0.9829,scaleY:0.9829,rotation:9.6961,x:23.2525,y:331.5997}},{t:this.shape_667,p:{scaleX:0.9829,scaleY:0.9829,rotation:9.6961,x:20.8808,y:345.3342}},{t:this.shape_666,p:{scaleX:0.9744,scaleY:0.9744,rotation:9.696,x:28.3583,y:325.7654}},{t:this.shape_665,p:{scaleX:0.9685,scaleY:0.9685,rotation:9.6958,x:30.2906,y:325.2084}},{t:this.shape_664,p:{scaleX:0.9744,scaleY:0.9744,rotation:9.696,x:25.7939,y:328.0457}},{t:this.shape_663,p:{scaleX:0.9685,scaleY:0.9685,rotation:9.6958,x:27.4006,y:327.171}},{t:this.shape_662,p:{scaleX:0.9744,scaleY:0.9744,rotation:9.696,x:23.1932,y:330.3939}},{t:this.shape_661,p:{scaleX:0.9685,scaleY:0.9685,rotation:9.6958,x:24.7765,y:329.4462}},{t:this.shape_660,p:{scaleX:0.978,scaleY:0.978,rotation:9.6961,x:31.0737,y:319.8951}},{t:this.shape_659,p:{scaleX:0.9969,scaleY:0.9969,rotation:4.727,x:90.1376,y:249.5545}},{t:this.shape_658,p:{scaleX:0.9859,scaleY:0.9859,rotation:4.7258,x:91.7145,y:334.3643}},{t:this.shape_657,p:{scaleX:0.9859,scaleY:0.9859,rotation:4.7258,x:92.8537,y:328.7546}},{t:this.shape_656,p:{scaleX:0.9859,scaleY:0.9859,rotation:4.7258,x:92.0716,y:334.6253}},{t:this.shape_655,p:{scaleX:0.9859,scaleY:0.9859,rotation:4.7258,x:92.4626,y:331.6899}},{t:this.shape_654,p:{scaleX:0.9859,scaleY:0.9859,rotation:4.7258,x:98.43,y:330.4052}},{t:this.shape_653,p:{scaleX:0.9859,scaleY:0.9859,rotation:4.7258,x:98.2722,y:333.2115}},{t:this.shape_652,p:{scaleX:0.9859,scaleY:0.9859,rotation:4.7258,x:97.5986,y:335.9751}},{t:this.shape_651,p:{scaleX:0.9859,scaleY:0.9859,rotation:4.7258,x:86.4361,y:333.9889}},{t:this.shape_650,p:{scaleX:0.9859,scaleY:0.9859,rotation:4.7258,x:86.8138,y:330.9535}},{t:this.shape_649,p:{scaleX:0.9859,scaleY:0.9859,rotation:4.7258,x:87.2099,y:327.9196}},{t:this.shape_648,p:{scaleX:0.9859,scaleY:0.9859,rotation:4.7258,x:90.7091,y:346.5195}},{t:this.shape_647,p:{scaleX:0.9859,scaleY:0.9859,rotation:4.7258,x:94.1737,y:322.6589}},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613}]},8).to({state:[{t:this.shape_669,p:{scaleX:0.994,scaleY:0.994,rotation:13.6875,x:40.0937,y:249.2264}},{t:this.shape_668,p:{scaleX:0.9843,scaleY:0.9843,rotation:13.6873,x:11.7945,y:329.8453}},{t:this.shape_667,p:{scaleX:0.9843,scaleY:0.9843,rotation:13.6873,x:8.4678,y:343.4009}},{t:this.shape_666,p:{scaleX:0.9716,scaleY:0.9716,rotation:13.6873,x:17.4158,y:322.916}},{t:this.shape_665,p:{scaleX:0.9679,scaleY:0.9679,rotation:13.6872,x:19.3206,y:323.2439}},{t:this.shape_664,p:{scaleX:0.9716,scaleY:0.9716,rotation:13.6873,x:14.7069,y:325.0062}},{t:this.shape_663,p:{scaleX:0.9679,scaleY:0.9679,rotation:13.6872,x:16.303,y:324.9994}},{t:this.shape_662,p:{scaleX:0.9716,scaleY:0.9716,rotation:13.6873,x:11.9572,y:327.1613}},{t:this.shape_661,p:{scaleX:0.9679,scaleY:0.9679,rotation:13.6872,x:13.5288,y:327.0851}},{t:this.shape_660,p:{scaleX:0.9782,scaleY:0.9782,rotation:13.6868,x:20.4562,y:318.2755}},{t:this.shape_659,p:{scaleX:0.9969,scaleY:0.9969,rotation:4.727,x:90.1376,y:249.5545}},{t:this.shape_658,p:{scaleX:0.9859,scaleY:0.9859,rotation:4.7258,x:91.7145,y:334.3643}},{t:this.shape_657,p:{scaleX:0.9859,scaleY:0.9859,rotation:4.7258,x:92.8537,y:328.7546}},{t:this.shape_656,p:{scaleX:0.9859,scaleY:0.9859,rotation:4.7258,x:92.0716,y:334.6253}},{t:this.shape_655,p:{scaleX:0.9859,scaleY:0.9859,rotation:4.7258,x:92.4626,y:331.6899}},{t:this.shape_654,p:{scaleX:0.9859,scaleY:0.9859,rotation:4.7258,x:98.43,y:330.4052}},{t:this.shape_653,p:{scaleX:0.9859,scaleY:0.9859,rotation:4.7258,x:98.2722,y:333.2115}},{t:this.shape_652,p:{scaleX:0.9859,scaleY:0.9859,rotation:4.7258,x:97.5986,y:335.9751}},{t:this.shape_651,p:{scaleX:0.9859,scaleY:0.9859,rotation:4.7258,x:86.4361,y:333.9889}},{t:this.shape_650,p:{scaleX:0.9859,scaleY:0.9859,rotation:4.7258,x:86.8138,y:330.9535}},{t:this.shape_649,p:{scaleX:0.9859,scaleY:0.9859,rotation:4.7258,x:87.2099,y:327.9196}},{t:this.shape_648,p:{scaleX:0.9859,scaleY:0.9859,rotation:4.7258,x:90.7091,y:346.5195}},{t:this.shape_647,p:{scaleX:0.9859,scaleY:0.9859,rotation:4.7258,x:94.1737,y:322.6589}},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613}]},8).to({state:[{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613}]},1).to({state:[{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613}]},34).wait(1));

	// MergedLayer_1
	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#2D2D2D").s().p("AApBtQibgXhGhcQAEgbARgkQAQgmAMgJIBsAEQB6AMBQAkIAKCyQgYADgaAAQgsAAgygIg");
	this.shape_670.setTransform(77.8049,170.2981,1.5302,1.5302);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#FFFFFF").s().p("AgVAFQAAgJAEgGIAOAAQAOABALAHIgCANQgZgHgQABg");
	this.shape_671.setTransform(90.7007,320.7623,1.4897,1.4897);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#0EA9B2").s().p("AhYgIIAAgKQAhATBBgBQAvgBAggTQgBAUgMAHQgXAOhCAAIgCAAQhHAAgCgdg");
	this.shape_672.setTransform(88.1868,344.6356,1.4897,1.4897);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#FFFFFF").s().p("AgEAFQgCgCgBgDQABgCACgCQACgDACAAQAHAAABAHQgBAHgHABQgCAAgCgDg");
	this.shape_673.setTransform(83.997,326.1626,1.4897,1.4897);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#FFFFFF").s().p("AgEAFQgDgCAAgDQAAgHAHABQAHgBABAHQAAADgDACQgCACgDAAQgCAAgCgCg");
	this.shape_674.setTransform(83.7363,329.1792,1.4897,1.4897);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#FFFFFF").s().p("AgHAAQAAgCADgCQACgDACABQAIAAAAAGQAAADgCACQgDACgDAAQgHABAAgIg");
	this.shape_675.setTransform(83.4383,332.1587,1.4897,1.4897);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#FFFFFF").s().p("AgEAFQgDgCAAgDQAAgCADgCQACgDACAAQAHAAABAHQAAAIgIAAQgCAAgCgDg");
	this.shape_676.setTransform(94.5367,333.7601,1.4897,1.4897);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#FFFFFF").s().p("AgHAAQABgCACgCQACgDACAAQAIAAAAAHQAAAHgIABQgGAAgBgIg");
	this.shape_677.setTransform(95.0954,331.0041,1.4897,1.4897);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#FFFFFF").s().p("AgGAAQgBgHAHAAQADAAACADQACACAAACQAAAHgHABQgHAAABgIg");
	this.shape_678.setTransform(95.1699,328.2482,1.4897,1.4897);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#FFFFFF").s().p("AALAAQgagIgUAIIgDgFQAWgKAcAJQASAGAJAFIgEAGQgKgHgOgEg");
	this.shape_679.setTransform(89.3227,329.7842,1.4897,1.4897);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#FFFFFF").s().p("AALAAQgagIgUAIIgDgFQAWgKAdAJQAOAFAMAGIgEAGQgKgGgOgFg");
	this.shape_680.setTransform(89.0248,332.6891,1.4897,1.4897);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#FFFFFF").s().p("AALAAQgagIgUAIIgDgFQAXgKAbAJQASAGAJAFIgEAGQgKgHgOgEg");
	this.shape_681.setTransform(89.5834,326.8792,1.4897,1.4897);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#3BB9C3").s().p("AhYBKIAAgKQACgXAPgXQARgUAEgIQAKgiALgXQAUgqAcAIQAdAIALAVQAFALAAAIIAOA1QAMAmgBAYQgBAUgMAIQgXAOhCAAIgCAAQhHAAgCgeg");
	this.shape_682.setTransform(88.1925,332.2883,1.4897,1.4897);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#2D2D2D").s().p("AhYAOQgDhiAAh7QAAj1AUh1IAzABQA5AFAnASQALA1AEBfQAHC+gnDPQAWBpgLChQgHBfgWDRIhQAAg");
	this.shape_683.setTransform(91.4587,242.7594,1.5112,1.5112);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#FFFFFF").s().p("AgMADIAHgNQAKAEAIAFIgEAMQgKgFgLgDg");
	this.shape_684.setTransform(7.9248,313.8353,1.4949,1.4949);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#FFFFFF").s().p("AgBAIQgEgBgBgDQgCgDABgCQADgIAHACQAHADgCAHQgBADgDABIgEABIgBAAg");
	this.shape_685.setTransform(-1.1711,324.5001,1.4851,1.4851);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#FFFFFF").s().p("AABAHQgIgHgFgIIAHgDQAEAHAGAFIAHAGIgEAGg");
	this.shape_686.setTransform(-2.4065,323.6673,1.4897,1.4897);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#FFFFFF").s().p("AgBAIQgIgDACgHQADgHAHACQADABABADQACADgBACQgCAGgFAAIgCAAg");
	this.shape_687.setTransform(1.9487,322.7302,1.4851,1.4851);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#FFFFFF").s().p("AABAHQgIgHgFgIIAHgEQACAGAJAIIAHAFIgFAGg");
	this.shape_688.setTransform(0.6846,321.8051,1.4897,1.4897);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#FFFFFF").s().p("AgBAIQgIgCACgIQADgHAGACQAIACgCAIQgCAFgFAAIgCAAg");
	this.shape_689.setTransform(5.3097,321.2844,1.4851,1.4851);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#FFFFFF").s().p("AADAKQgMgKgDgJIAGgFQACAJAMAKIAFAEIgEAGg");
	this.shape_690.setTransform(3.7386,320.0175,1.4897,1.4897);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#0EA9B2").s().p("AB2A0Ij9hPQgIgCgCgIQgDgIAFgHIEiBcQgEAIgIADQgFACgFAAIgHgBg");
	this.shape_691.setTransform(-6.6022,336.2526,1.5002,1.5002);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#3BB9C3").s().p("ABlByIj9hQQgIgCgCgIQgDgIAFgHIACgCQAWgVAjgBQAPgBAlAHQAWADAbgPIAGgEIAOgJIApgcQACgHAFgLIAHgOIABgCIAFgJQALgQATAKQATAKgCAVIAAACQAAAPANAIQAOAIAJAIIggCIQAAADgCACQgEAIgIADQgEADgFAAIgIgCg");
	this.shape_692.setTransform(-4.0895,326.8937,1.5002,1.5002);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#060808").s().p("AjpIpIB9ohQAdhoAoh8QBOj7A4hpIAyAmQA6AsAfAcQgJA7geBaQg8C1hlCeQABBKg/CrQgQAohvEOg");
	this.shape_693.setTransform(42.0036,240.1593,1.5205,1.5205);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_694.setTransform(123.0596,333.4063,1.5911,1.5911);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_695.setTransform(122.5823,329.7468,1.5911,1.5911);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgIAJgBQAEAAADADQADADAAADQAAAKgKAAQgDAAgDgDg");
	this.shape_696.setTransform(122.105,326.0873,1.5911,1.5911);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#FFFFFF").s().p("AgUABQAUgHAVgBIAAAHQgSAAgUAIg");
	this.shape_697.setTransform(119.1323,332.7559,1.5795,1.5795);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#FFFFFF").s().p("AgUAAQAVgGATgBIABAHQgVAAgSAIg");
	this.shape_698.setTransform(118.461,329.3206,1.5795,1.5795);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#FFFFFF").s().p("AgVABQAVgIAWgBIAAAIQgWAAgUAJg");
	this.shape_699.setTransform(118.1451,325.6484,1.5795,1.5795);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#0EA9B2").s().p("AiCBQQgEgGADgGICRAAQAUAAAPgNQAegaAVgwQAOggAHghIAHAJQAGAJgBAKQgKA5g1A8QgVAXggAAIiJABQgGAAgEgFg");
	this.shape_700.setTransform(121.3205,340.2619,1.601,1.601);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#FFFFFF").s().p("AgOACQAGgHAOgIIACADIAHAJIgRAQg");
	this.shape_701.setTransform(114.3692,321.8906,1.601,1.601);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#3BB9C3").s().p("AiCCCQgEgGADgGIACgEQAXgYAugfIAqgZIgDgJIgKgyQgDgMgMgMIgLgNQgJgJgCgHQgCgJAIgJQAOgTAXAKQAMAEAJAIQAEgMAXgQIAXgNIBSBtQAGAJgBAKQgKA4g1A9QgVAXggAAIiJABQgGAAgEgFg");
	this.shape_702.setTransform(121.3205,332.297,1.601,1.601);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#2D2D2D").s().p("ABBGVIi+mUQgJg7gJhSQgSikABhvIC6AAQgEAcgKCgQgJCNgMA6IAeArQAlBDAhByQAWBNAbA5QANAdAJANQgeAmgRAFIgJABQgPAAgagLg");
	this.shape_703.setTransform(103.0525,253.3878,1.605,1.605);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#2D2D2D").s().p("ABMBmQh4gQhMg8Qg0gngQgpQgIgUAAgfIF/gBQAXBzgdBhIggABQghAAgogFg");
	this.shape_704.setTransform(77.0905,175.1472,1.601,1.601);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#FFFFFF").s().p("AgLAHIADgOQAJgBAKAEIABAMQgMgBgLAAg");
	this.shape_705.setTransform(33.059,322.4805,1.5739,1.5739);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#FFFFFF").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_706.setTransform(27.7627,335.5507,1.5606,1.5606);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#FFFFFF").s().p("AAEAGQgKgEgHgFIAFgGQAFAGAJADIAIADIgCAGg");
	this.shape_707.setTransform(26.0617,335.2966,1.5667,1.5667);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#FFFFFF").s().p("AgFAGQgCgDAAgDQAAgCACgDQACgCADAAQAIAAAAAHQAAADgDADQgBACgEAAQgDAAgCgCg");
	this.shape_708.setTransform(30.2597,332.7805,1.5606,1.5606);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#FFFFFF").s().p("AAEAHQgLgEgGgGIAEgGQAFAGALAEIAHACIgCAHg");
	this.shape_709.setTransform(28.5291,332.3982,1.5667,1.5667);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#FFFFFF").s().p("AgHAAQAAgDACgCQADgCACAAQAIAAAAAHQAAAIgIAAQgGAAgBgIg");
	this.shape_710.setTransform(33.1078,330.3225,1.5606,1.5606);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#FFFFFF").s().p("AAHAJQgQgGgFgIIAEgGQADAIAPAFIAIADIgDAHg");
	this.shape_711.setTransform(30.9966,329.6957,1.5667,1.5667);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#0EA9B2").s().p("AiTAFQgEgGACgIIErgBQgBAJgHAFQgGAGgJAAIkFABQgIAAgFgGg");
	this.shape_712.setTransform(25.4792,349.893,1.5795,1.5795);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#3BB9C3").s().p("AiTBmQgEgHACgHIABgDQAPgbAfgLQAOgFAlgGQAVgDAWgXIAFgFIAngyQgBgIACgLIAFgbQAFgUAVAEQAVAEAEAUIABACQAFAOAOAEQAPADALAFIAMCIIgBAFQgBAJgHAGQgGAGgJAAIkFACQgIAAgFgHg");
	this.shape_713.setTransform(25.5187,334.5185,1.5795,1.5795);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#060808").s().p("AhiH2IgXnhQAHhMARhrQAhjXAsiZICOCdIgzDQQglCNgiA+QASBfgGByQgEBIgPDUg");
	this.shape_714.setTransform(48.8489,243.2424,1.601,1.601);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#2D2D2D").s().p("ABpKPIkzqOQgPhggOiEQgekJABizIEugBQgHAugQEDQgPDjgTBeIAwBHQA8BsA2C3QAjB9AsBdQAVAuAOAVQgvA9gcAIQgGADgJAAQgYAAgqgSg");
	this.shape_715.setTransform(109.0078,253.0299,1,1,-4.4992);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670}]},307).to({state:[{t:this.shape_714,p:{scaleX:1.601,scaleY:1.601,x:48.8489,y:243.2424}},{t:this.shape_713,p:{scaleX:1.5795,scaleY:1.5795,x:25.5187,y:334.5185}},{t:this.shape_712,p:{scaleX:1.5795,scaleY:1.5795,x:25.4792,y:349.893}},{t:this.shape_711,p:{scaleX:1.5667,scaleY:1.5667,x:30.9966,y:329.6957}},{t:this.shape_710,p:{scaleX:1.5606,scaleY:1.5606,x:33.1078,y:330.3225}},{t:this.shape_709,p:{scaleX:1.5667,scaleY:1.5667,x:28.5291,y:332.3982}},{t:this.shape_708,p:{scaleX:1.5606,scaleY:1.5606,x:30.2597,y:332.7805}},{t:this.shape_707,p:{scaleX:1.5667,scaleY:1.5667,x:26.0617,y:335.2966}},{t:this.shape_706,p:{scaleX:1.5606,scaleY:1.5606,x:27.7627,y:335.5507}},{t:this.shape_705,p:{scaleX:1.5739,scaleY:1.5739,x:33.059,y:322.4805}},{t:this.shape_704,p:{scaleX:1.601,scaleY:1.601,x:77.0905,y:175.1472}},{t:this.shape_703},{t:this.shape_702,p:{scaleX:1.601,scaleY:1.601,rotation:0,x:121.3205,y:332.297}},{t:this.shape_701,p:{scaleX:1.601,scaleY:1.601,rotation:0,x:114.3692,y:321.8906}},{t:this.shape_700,p:{scaleX:1.601,scaleY:1.601,rotation:0,x:121.3205,y:340.2619}},{t:this.shape_699,p:{scaleX:1.5795,scaleY:1.5795,rotation:0,x:118.1451,y:325.6484}},{t:this.shape_698,p:{scaleX:1.5795,scaleY:1.5795,rotation:0,x:118.461,y:329.3206}},{t:this.shape_697,p:{scaleX:1.5795,scaleY:1.5795,rotation:0,x:119.1323,y:332.7559}},{t:this.shape_696,p:{scaleX:1.5911,scaleY:1.5911,rotation:0,x:122.105,y:326.0873}},{t:this.shape_695,p:{scaleX:1.5911,scaleY:1.5911,rotation:0,x:122.5823,y:329.7468}},{t:this.shape_694,p:{scaleX:1.5911,scaleY:1.5911,rotation:0,x:123.0596,y:333.4063}}]},18).to({state:[{t:this.shape_714,p:{scaleX:1.6023,scaleY:1.6023,x:48.8867,y:243.3106}},{t:this.shape_713,p:{scaleX:1.5861,scaleY:1.5861,x:25.6186,y:335.2588}},{t:this.shape_712,p:{scaleX:1.5861,scaleY:1.5861,x:25.5789,y:350.6977}},{t:this.shape_711,p:{scaleX:1.5738,scaleY:1.5738,x:31.1302,y:330.4786}},{t:this.shape_710,p:{scaleX:1.5677,scaleY:1.5677,x:33.2506,y:331.1062}},{t:this.shape_709,p:{scaleX:1.5738,scaleY:1.5738,x:28.6514,y:333.1934}},{t:this.shape_708,p:{scaleX:1.5677,scaleY:1.5677,x:30.3895,y:333.5754}},{t:this.shape_707,p:{scaleX:1.5738,scaleY:1.5738,x:26.1727,y:336.1049}},{t:this.shape_706,p:{scaleX:1.5677,scaleY:1.5677,x:27.8812,y:336.3581}},{t:this.shape_705,p:{scaleX:1.5775,scaleY:1.5775,x:33.1323,y:322.865}},{t:this.shape_704,p:{scaleX:1.6057,scaleY:1.6057,x:77.3139,y:175.1982}},{t:this.shape_715},{t:this.shape_702,p:{scaleX:1.6039,scaleY:1.6039,rotation:-4.4987,x:132.9229,y:329.931}},{t:this.shape_701,p:{scaleX:1.6039,scaleY:1.6039,rotation:-4.4987,x:125.1624,y:320.0837}},{t:this.shape_700,p:{scaleX:1.6039,scaleY:1.6039,rotation:-4.4987,x:133.5488,y:337.886}},{t:this.shape_699,p:{scaleX:1.5905,scaleY:1.5905,rotation:-4.4987,x:129.8967,y:324.3569}},{t:this.shape_698,p:{scaleX:1.5905,scaleY:1.5905,rotation:-4.4987,x:130.5039,y:328.0185}},{t:this.shape_697,p:{scaleX:1.5905,scaleY:1.5905,rotation:-4.4987,x:131.4491,y:331.4143}},{t:this.shape_696,p:{scaleX:1.5925,scaleY:1.5925,rotation:-4.499,x:133.0965,y:323.5209}},{t:this.shape_695,p:{scaleX:1.5925,scaleY:1.5925,rotation:-4.499,x:133.8601,y:327.1351}},{t:this.shape_694,p:{scaleX:1.5925,scaleY:1.5925,rotation:-4.499,x:134.6237,y:330.7492}}]},7).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.7,-127.8,334.79999999999995,484.5);


(lib.tv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1tv();
	this.instance.setTransform(0,0,0.4502,0.4488);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,93.4);


(lib.tesla_coil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1tesla_coil();
	this.instance.setTransform(0,0,0.4375,0.4383);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,93.4);


(lib.printer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1printer();
	this.instance.setTransform(0,0,0.2236,0.2233);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,93.4);


(lib.locomotive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1locomotive();
	this.instance.setTransform(0,0,0.0311,0.0311);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,93.4);


(lib.dok = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1dok();
	this.instance.setTransform(0,0,0.3167,0.3154);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,93.4);


(lib.cornflakes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1cornflakes();
	this.instance.setTransform(0,0,0.3922,0.3922);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,93.4);


(lib.car = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1car();
	this.instance.setTransform(0,0,0.1716,0.1716);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,93.4);


(lib.ballpoint_pan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1ballpoint_pan();
	this.instance.setTransform(0,0,0.1675,0.1676);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,93.4);


(lib.airplane = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1airplane();
	this.instance.setTransform(0,0,0.2191,0.2191);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,93.4);


(lib.Path_11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhsWYQgyAAgjgjQgjgkAAgxMAAAgo/QAAgxAjgjQAjgkAyAAIDZAAQAyAAAjAkQAjAjAAAxMAAAAo/QAAAxgjAkQgjAjgyAAg");
	this.shape_1.setTransform(22.925,143.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_1, new cjs.Rectangle(0,0,45.9,286.4), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Path_0_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,1136,827), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#343535").s().p("AlECjQAAiHBfhfQBfhfCGAAQCHAABfBfQBfBfAACHg");
	this.shape.setTransform(45.575,27.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(13.1,11.2,65,32.5), null);


(lib.Image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Image_0();
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image, new cjs.Rectangle(0,0,60.7,126.3), null);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E6F4F6").ss(0.4).p("AIXE2IwtAAQiAAAhbhbQhbhbAAiAQAAh/BbhbQBbhbCAAAIQtAAQCAAABbBbQBbBbAAB/QAACAhbBbQhbBbiAAAg");
	this.shape_1.setTransform(84.675,31.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AoWE2QiAAAhbhbQhbhbAAiAQAAh/BbhbQBbhbCAAAIQtAAQCAAABbBbQBbBbAAB/QAACAhbBbQhbBbiAAAg");
	this.shape_2.setTransform(84.675,31.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(-0.8,-0.8,171,64), null);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Path_1_0_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,13,4), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.Path_0_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,8,3), null);


(lib.Group_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLAeQgdgIgUgRQgVgQgPgYQAVAZARAMQAZAQAYAGQASAFAhACIA2ACQgjADgTAAQgeAAgXgGg");
	this.shape_2.setTransform(9.65,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0_2, new cjs.Rectangle(0,0,19.3,7.2), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABSAKQgYgagjgSQgdgRgmgKQgSgGgTgCIgSgBIgJABQgHACgBACQABgDAGgCIAKgCIATgBQARABAVAFQAhAHAlATQAlAWAWAZQANAQAHAQQAJAVABAPQgKglgZgbg");
	this.shape_2.setTransform(11.7,7.3917);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,23.4,14.8), null);


(lib.Path_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#92CFCC").ss(2).p("EAQZAwvMggxAAAQpuAAo6jzQonjqmqmpQmqmqjqonQjyo7AApuIAAhdQAApuDyo7QDqomGqmqQGqmqInjqQI6jzJuAAMAgxAAAQJtAAI7DzQInDqGqGqQGqGqDqImQDyI7AAJuIAABdQAAJujyI7QjqInmqGqQmqGponDqQo7DzptAAg");
	this.shape_3.setTransform(413,312.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgQXAwvQpvAAo6jzQonjqmqmpQmpmqjqonQjzo7AApuIAAhdQAApuDzo7QDqomGpmqQGqmqInjqQI6jzJvAAMAgwAAAQJuAAI6DzQInDqGqGqQGqGqDpImQDzI7AAJuIAABdQAAJujzI7QjpInmqGqQmqGponDqQo6DzpuAAg");
	this.shape_4.setTransform(413,312.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_2, new cjs.Rectangle(0,0,826,625.8), null);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.Path_1_0();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,61,44), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_2 = new lib.Path_0();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,35,25), null);


(lib.Group_0_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AE3FhQhNgbhEgjQiRhJh1hmQhBg5gwg1QgOgOgmgtQgkgugMgRQhfiCg6iPQBaCOBbBuIAZAdIAZAdQAqAuALAKQAyA0A+A1QBxBkCHBPQBFAoBEAfQBOAlBCAVQg+gIhagdg");
	this.shape_3.setTransform(46.325,39.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0_3, new cjs.Rectangle(0,0,92.7,78.1), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AGACaIgkgkIgkgkQg9g6gNgKQhKhDhTg8QhEg0hjg9QhMgwhlgyQhggvhagiQhsgphXgVQBQAEB8AeQBpAdBbAmQC8BOCsCAQCsCACCCbQCJCkBaC1QiGi0h/iGg");
	this.shape_3.setTransform(64.525,46.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,129.1,93.6), null);


(lib.vietnam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1ietnam();
	this.instance.setTransform(0,0,0.1611,0.1598);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,93.4);


(lib.Switzerland = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1Switzerland();
	this.instance.setTransform(0,0,0.1611,0.1598);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,93.4);


(lib.Qatar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1Qatar();
	this.instance.setTransform(0,0,0.0399,0.0399);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,93.4);


(lib.nethereland = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1Netherlands();
	this.instance.setTransform(0,0,0.1611,0.1598);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,93.4);


(lib.latvia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1Latvia();
	this.instance.setTransform(0,0,0.0399,0.0399);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,93.4);


(lib.Labanon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1Labanon();
	this.instance.setTransform(0,0,0.0399,0.0399);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,93.4);


(lib.germany = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1germany();
	this.instance.setTransform(0,0,0.1611,0.1609);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,93.4);


(lib.Frence = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1Frence();
	this.instance.setTransform(0,0,0.1611,0.1609);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,93.4);


(lib.China = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1China();
	this.instance.setTransform(0,0,0.0399,0.0399);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,93.4);


(lib.Burma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1Burma();
	this.instance.setTransform(0,0,0.0399,0.0399);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,93.4);


(lib.barfill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9ECC8D").s().p("AgdFsQgxAAgkgjQgjgjAAgyIAAnnQAAgyAjgjQAkgjAxAAIA7AAQAxAAAkAjQAjAjAAAyIAAHnQAAAygjAjQgkAjgxAAg");
	this.shape.setTransform(18,257.9,1,3.7075,0,0,0,3,33.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.barfill, new cjs.Rectangle(0,0.2,30,270.1), null);


(lib.Group_63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD0936").s().p("AhdAkIAAgDQAcgFAUgIQAUgGAZgNIAWgLQAIgFANgGIAYgJQASgFAIgBIABACQgMAWgYAQQgJAHgPAFIgZAIQgWAHgcAEQgSACgPAAIgTgBg");
	this.shape.setTransform(80.575,5.0521);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DD0936").s().p("AAlAnQgcgIgUgIIgYgLQgOgGgJgHIgJgJQgGgHgDgEQgIgMgDgOIACgCQAXALAWAMIAUAOIAUANQAUANAXALQAYANAVAJIAAADQgOgBglgKg");
	this.shape_1.setTransform(109.825,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLAPQgFgHAAgIQAAgIAFgGQAFgGAGAAQAHAAAFAGQAFAGAAAIQAAAIgFAHQgFAGgHAAQgGAAgFgGg");
	this.shape_2.setTransform(86.175,26.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAKQgDgFAAgFQAAgEADgFQADgEAEAAQAEAAAEAEQADAFAAAEQAAAFgDAFQgEADgEAAQgEAAgDgDg");
	this.shape_3.setTransform(87.4,24.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#020203").ss(1.2,1,1).p("AhPghIAPAUQARAXATAMQA7AnAxhS");
	this.shape_4.setTransform(94.2,77.2368);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#020203").s().p("AgbBhQgLgoAAg5QAAg4ALgoQAMgoAPAAQAQAAALAoQAMAoAAA4QAAA4gMApQgLAogQAAQgPAAgMgog");
	this.shape_5.setTransform(86.275,34.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLAPQgFgHAAgIQAAgIAFgGQAFgGAGAAQAHAAAFAGQAFAGAAAIQAAAIgFAHQgFAGgHAAQgGAAgFgGg");
	this.shape_6.setTransform(105.975,26.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHAKQgDgFAAgFQAAgEADgFQADgEAEAAQAFAAADAEQADAFAAAEQAAAFgDAFQgDADgFAAQgEAAgDgDg");
	this.shape_7.setTransform(107.175,24.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#020203").s().p("AgbBgQgLgnABg5QgBg3ALgoQAMgpAPAAQAQAAALApQAMAoAAA3QAAA5gMAnQgLAogQABQgPgBgMgog");
	this.shape_8.setTransform(106,32.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhGC7QgehNABhuQgBhtAehOQAdhNApAAQAqAAAdBNQAeBOgBBtQABBugeBNQgdBOgqAAQgpAAgdhOg");
	this.shape_9.setTransform(82.4,35.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhGC7QgehNAAhuQAAhtAehOQAdhNApAAQAqAAAdBNQAeBOAABtQAABugeBNQgdBOgqAAQgpAAgdhOg");
	this.shape_10.setTransform(102.475,35.825);

	this.instance = new lib.Path_11();
	this.instance.setTransform(82.05,37.75,1,1,0,0,0,10.1,26.5);
	this.instance.alpha = 0.6406;

	this.instance_1 = new lib.Path_12();
	this.instance_1.setTransform(102.15,37.75,1,1,0,0,0,10.1,26.5);
	this.instance_1.alpha = 0.6406;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#DD0936").ss(3).p("ACwBJQhWAIhWgRQiqghAEh4");
	this.shape_11.setTransform(45.059,66.2644);

	this.instance_2 = new lib.Path_0_3();
	this.instance_2.setTransform(18.9,46.65,1,1,0,0,0,18.9,18.5);
	this.instance_2.alpha = 0.9805;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#DD0936").ss(3).p("Ai4AuIA2AIQBAAIA2gDQCugMAKh3");
	this.shape_12.setTransform(147.4323,69.0882);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#DD0936").ss(3).p("ACthAQhXgLhWANQisAbAAB4");
	this.shape_13.setTransform(41.7,118.9281);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#DD0936").ss(3).p("ACthBQhXgLhWAOQisAbAAB4");
	this.shape_14.setTransform(36.85,105.2531);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#DD0936").ss(3).p("ACthBQhXgLhWAOQisAbAAB4");
	this.shape_15.setTransform(32.95,95.7031);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#DD0936").ss(3).p("AiyhBIA2gEQBAgCA2AJQCsAbAAB4");
	this.shape_16.setTransform(147.5946,121.006);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#DD0936").ss(3).p("AiyhBIA2gEQBAgCA2AJQCrAbAAB4");
	this.shape_17.setTransform(152.4265,107.356);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#DD0936").ss(3).p("AiyhBIA2gEQBAgCA2AJQCsAbAAB4");
	this.shape_18.setTransform(156.3446,97.781);

	this.instance_3 = new lib.Path();
	this.instance_3.setTransform(175.75,52.45,1,1,0,0,0,20.1,17.2);
	this.instance_3.alpha = 0.9805;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DD0936").s().p("AlTEbQiMhWAAh5QAAg8Aog3QAmg1BFgpQg9glgBgsQABhABzgtQB0gtCiAAQCjAAB0AtQBzAtAABAQAAAsg9AlQBFApAnA1QAnA3AAA8QAAB5iMBWQiNBWjHAAQjGAAiNhWg");
	this.shape_19.setTransform(92.1,91.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.instance_3},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.shape_11},{t:this.instance_1},{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_63, new cjs.Rectangle(0,0,195.9,131), null);


(lib.progressBAR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// green
	this.instance = new lib.barfill("synched",0);
	this.instance.setTransform(60.55,479.7,1,0.0231,0,180,0,15,-4.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regY:135.2,scaleY:0.0332,y:475.05},0).wait(1).to({scaleY:0.0433,y:473.65},0).wait(1).to({scaleY:0.0533,y:472.25},0).wait(1).to({scaleY:0.0634,y:470.85},0).wait(1).to({scaleY:0.0735,y:469.4},0).wait(1).to({scaleY:0.0835,y:468},0).wait(1).to({scaleY:0.0936,y:466.6},0).wait(1).to({scaleY:0.1036,y:465.25},0).wait(1).to({scaleY:0.1137,y:463.85},0).wait(1).to({scaleY:0.1238,y:462.4},0).wait(1).to({scaleY:0.1338,y:461},0).wait(1).to({scaleY:0.1439,y:459.6},0).wait(1).to({scaleY:0.1539,y:458.2},0).wait(1).to({scaleY:0.164,y:456.8},0).wait(1).to({scaleY:0.1741,y:455.4},0).wait(1).to({scaleY:0.1841,y:454},0).wait(1).to({scaleY:0.1942,y:452.6},0).wait(1).to({scaleY:0.2042,y:451.2},0).wait(1).to({scaleY:0.2143,y:449.8},0).wait(1).to({scaleY:0.2244,y:448.35},0).wait(1).to({scaleY:0.2344,y:446.95},0).wait(1).to({scaleY:0.2445,y:445.55},0).wait(1).to({scaleY:0.2546,y:444.2},0).wait(1).to({scaleY:0.2646,y:442.8},0).wait(1).to({scaleY:0.2747,y:441.35},0).wait(1).to({scaleY:0.2847,y:439.95},0).wait(1).to({scaleY:0.2948,y:438.55},0).wait(1).to({scaleY:0.3049,y:437.15},0).wait(1).to({scaleY:0.3149,y:435.7},0).wait(1).to({scaleY:0.325,y:434.35},0).wait(1).to({scaleY:0.335,y:432.95},0).wait(1).to({scaleY:0.3451,y:431.55},0).wait(1).to({scaleY:0.3552,y:430.15},0).wait(1).to({scaleY:0.3652,y:428.7},0).wait(1).to({scaleY:0.3753,y:427.3},0).wait(1).to({scaleY:0.3853,y:425.9},0).wait(1).to({scaleY:0.3954,y:424.5},0).wait(1).to({scaleY:0.4055,y:423.15},0).wait(1).to({scaleY:0.4155,y:421.7},0).wait(1).to({scaleY:0.4256,y:420.3},0).wait(1).to({scaleY:0.4357,y:418.9},0).wait(1).to({scaleY:0.4457,y:417.5},0).wait(1).to({scaleY:0.4558,y:416.1},0).wait(1).to({scaleY:0.4658,y:414.65},0).wait(1).to({scaleY:0.4759,y:413.3},0).wait(1).to({scaleY:0.486,y:411.9},0).wait(1).to({scaleY:0.496,y:410.5},0).wait(1).to({scaleY:0.5061,y:409.1},0).wait(1).to({scaleY:0.5161,y:407.65},0).wait(1).to({scaleY:0.5262,y:406.25},0).wait(1).to({scaleY:0.5363,y:404.85},0).wait(1).to({scaleY:0.5463,y:403.5},0).wait(1).to({scaleY:0.5564,y:402.1},0).wait(1).to({scaleY:0.5664,y:400.65},0).wait(1).to({scaleY:0.5765,y:399.25},0).wait(1).to({scaleY:0.5866,y:397.85},0).wait(1).to({scaleY:0.5966,y:396.45},0).wait(1).to({scaleY:0.6067,y:395.05},0).wait(1).to({scaleY:0.6167,y:393.6},0).wait(1).to({scaleY:0.6268,y:392.25},0).wait(1).to({scaleY:0.6369,y:390.85},0).wait(1).to({scaleY:0.6469,y:389.45},0).wait(1).to({scaleY:0.657,y:388.05},0).wait(1).to({scaleY:0.6671,y:386.6},0).wait(1).to({scaleY:0.6771,y:385.2},0).wait(1).to({scaleY:0.6872,y:383.8},0).wait(1).to({scaleY:0.6972,y:382.45},0).wait(1).to({scaleY:0.7073,y:381},0).wait(1).to({scaleY:0.7174,y:379.6},0).wait(1).to({scaleY:0.7274,y:378.2},0).wait(1).to({scaleY:0.7375,y:376.8},0).wait(1).to({scaleY:0.7475,y:375.4},0).wait(1).to({scaleY:0.7576,y:373.95},0).wait(1).to({scaleY:0.7677,y:372.55},0).wait(1).to({scaleY:0.7777,y:371.2},0).wait(1).to({scaleY:0.7878,y:369.8},0).wait(1).to({scaleY:0.7978,y:368.4},0).wait(1).to({scaleY:0.8079,y:366.95},0).wait(1).to({scaleY:0.818,y:365.55},0).wait(1).to({scaleY:0.828,y:364.15},0).wait(1).to({scaleY:0.8381,y:362.75},0).wait(1).to({scaleY:0.8482,y:361.4},0).wait(1).to({scaleY:0.8582,y:359.95},0).wait(1).to({scaleY:0.8683,y:358.55},0).wait(1).to({scaleY:0.8783,y:357.15},0).wait(1).to({scaleY:0.8884,y:355.75},0).wait(1).to({scaleY:0.8985,y:354.35},0).wait(1).to({scaleY:0.9085,y:352.9},0).wait(1).to({scaleY:0.9186,y:351.5},0).wait(1).to({scaleY:0.9286,y:350.15},0).wait(1).to({scaleY:0.9387,y:348.75},0).wait(1).to({scaleY:0.9488,y:347.35},0).wait(1).to({scaleY:0.9588,y:345.9},0).wait(1).to({scaleY:0.9689,y:344.5},0).wait(1).to({scaleY:0.9789,y:343.1},0).wait(1).to({scaleY:0.989,y:341.7},0).wait(1).to({scaleY:0.9991,y:340.35},0).wait(1).to({regY:134.1,scaleY:1,skewX:0,y:339.8},0).wait(1));

	// MergedLayer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8D2D0").s().p("Ai5BTQgcAAgVgUQgTgUgBgdIAAgcQABgcATgUQAVgUAcAAIFyAAQAdAAAUAUQAVAUAAAcIAAAcQAAAdgVAUQgUAUgdAAg");
	this.shape.setTransform(60.2,197.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5C9BD").s().p("Ai5BTQgcAAgVgUQgTgUAAgdIAAgcQAAgcATgUQAVgUAcAAIFzAAQAcAAAUAUQAVAUgBAcIAAAcQABAdgVAUQgUAUgcAAg");
	this.shape_1.setTransform(60,483.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").p("AEtQCQAAtQiypXQhUkbhsicQhwigh8AA");
	this.shape_2.setTransform(30.55,102.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdUTQgxAAgkgjQgjgkAAgxMAAAgk1QAAgxAjgjQAkgkAxAAIA7AAQAxAAAkAkQAjAjAAAxMAAAAk1QAAAxgjAkQgkAjgxAAg");
	this.shape_3.setTransform(60.5,343.775);

	this.instance_1 = new lib.Path_11_1();
	this.instance_1.setTransform(60.45,340.25,1,1,0,0,0,22.9,143.2);
	this.instance_1.alpha = 0.6719;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},99).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,86.7,492.7);


(lib.mrsCarb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_71 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// Layer_3
	this.text = new cjs.Text("נראה לי שפספת משהו", "normal 400 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 139;
	this.text.parent = this;
	this.text.setTransform(328.5,-85.75);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AVVSZQgdiei1hqQiPhUkYhHQlXBymFAAQlIAAkrhSQkihQjfiRQjgiSh6i8Qh/jDAAjVQAAjVB/jDQB6i9DgiRQDgiREhhQQErhSFIAAQFIAAEsBSQEhBQDgCRQDfCRB6C9QCADDAADVQgBCPg6CIQg3CEhrB3QBHFOgeFZQgNCDgUAuQgJASgHAAQgLAAgJgyg");
	this.shape.setTransform(321.5404,-38.9812,0.5052,0.54,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.text}]},14).to({state:[{t:this.shape},{t:this.text}]},57).wait(1));

	// Layer_1
	this.instance = new lib.Group_63();
	this.instance.setTransform(97.95,65.5,1,1,0,0,0,97.9,65.5);
	this.instance.shadow = new cjs.Shadow("rgba(29,29,27,0.459)",6,22,15);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({x:131.95},12).to({x:216.95},57).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-105.2,423.1,320.2);


(lib.Path_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_2 = new lib.Group();
	this.instance_2.setTransform(3.8,3.6,1,1,0,0,0,3.8,3.6);
	this.instance_2.alpha = 0.8789;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_4, new cjs.Rectangle(0,0,7.7,7.3), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_3 = new lib.Group_0();
	this.instance_3.setTransform(3.8,3.6,1,1,0,0,0,3.8,3.6);
	this.instance_3.alpha = 0.7891;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,7.7,7.3), null);


(lib.Path_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_3 = new lib.Group_1();
	this.instance_3.setTransform(3.8,3.6,1,1,0,0,0,3.8,3.6);
	this.instance_3.alpha = 0.8789;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_5, new cjs.Rectangle(0,0,7.7,7.3), null);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_4 = new lib.Group_0_1();
	this.instance_4.setTransform(3.8,3.6,1,1,0,0,0,3.8,3.6);
	this.instance_4.alpha = 0.7891;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,7.7,7.3), null);


(lib.MosheTail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol4();
	this.instance.setTransform(39.8,65.3,1,1,0,0,0,39.8,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79.7,130.6);


(lib.MosheHand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rightHand
	this.instance = new lib.Symbol2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,0,58.3,51.6);


(lib.MosheBackHand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.setTransform(62.75,-0.05,1,1,-138.7961,0,0,62.6,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(62.4,-29.2,73.19999999999999,70.9);


(lib.forcomb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.startbtn = new lib.BTN();
	this.startbtn.name = "startbtn";
	this.startbtn.setTransform(-45.25,10.5,0.7365,0.6049,0,0,0,52.5,17.1);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר נושא, 0, ארצות, 2, המצאות מהמאה ה-19, 1', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.name = "mycb";
	this.mycb.setTransform(50,11,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.startbtn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.forcomb, new cjs.Rectangle(-84.6,-0.5,185.1,23), null);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#494C4C").s().p("AhVHFQg0gjgMg+QgGgcAGgeICVsJICWMJQAMA+gkA0QgjA1g/AMQgPADgOAAQgtAAgngbg");
	this.shape_1.setTransform(28.3141,59.1516);

	this.instance_5 = new lib.Image();
	this.instance_5.setTransform(30.4,63.1,1,1,0,0,0,30.4,63.1);
	this.instance_5.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,60.7,126.3), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_2();
	this.instance.setTransform(11.7,7.4,1,1,0,0,0,11.7,7.4);
	this.instance.alpha = 0.4219;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,23.4,14.8), null);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_0_2();
	this.instance.setTransform(9.7,3.6,1,1,0,0,0,9.7,3.6);
	this.instance.alpha = 0.4219;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(0,0,19.3,7.2), null);


(lib.Path_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.Group_3();
	this.instance_1.setTransform(64.5,46.8,1,1,0,0,0,64.5,46.8);
	this.instance_1.alpha = 0.4219;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_2, new cjs.Rectangle(0,0,129.1,93.6), null);


(lib.Path_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.Group_0_3();
	this.instance_1.setTransform(46.3,39,1,1,0,0,0,46.3,39);
	this.instance_1.alpha = 0.4219;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_3, new cjs.Rectangle(0,0,92.7,78.1), null);


(lib.EndSreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Path_1();
	this.instance.setTransform(634.9,354.9,1.118,0.8585,0,0,0,567.9,413.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.EndSreen, new cjs.Rectangle(0,0,1270,710), null);


(lib.FishBackGround = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween38("synched",0);
	this.instance.setTransform(7677.6,347.45);

	this.instance_1 = new lib.Tween39("synched",0);
	this.instance_1.setTransform(0.6,350.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},500).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:0.6,y:350.3},500).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8419.4,-28.4,24517,754.6999999999999);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Path_7();
	this.instance.setTransform(265.5,-169.7,1,1,0,0,0,17.5,12.5);

	this.instance_1 = new lib.Path_1_3();
	this.instance_1.setTransform(242.55,-207.25,1,1,0,0,0,30.5,22);

	this.instance_2 = new lib.Path_2_3();
	this.instance_2.setTransform(-275.95,225.6,1,1,0,0,0,46.3,39);
	this.instance_2.alpha = 0.4219;

	this.instance_3 = new lib.Path_3_2();
	this.instance_3.setTransform(265.35,-231.55,1,1,0,0,0,64.5,46.8);
	this.instance_3.alpha = 0.4219;

	this.instance_4 = new lib.Path_4();
	this.instance_4.setTransform(-414.5,-322.5);

	this.instance_5 = new lib.Path_5_2();
	this.instance_5.setTransform(-0.2,0,1,1,0,0,0,413,312.9);
	this.instance_5.alpha = 0.1914;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-414.5,-322.5,829,645);


(lib.pauseBTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Path_10();
	this.instance.setTransform(13.7,42.8,1.2293,1.2293,0,0,0,3.8,3.6);
	this.instance.alpha = 0.7891;

	this.instance_1 = new lib.Path_1_4();
	this.instance_1.setTransform(40.85,11.5,1.2293,1.2293,0,0,0,3.8,3.6);
	this.instance_1.alpha = 0.8789;

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(26.05,26.3,1.2293,1.2293,0,0,0,21.2,21.2);
	this.instance_2.alpha = 0.1602;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#494C4C").ss(4.1,1).p("AAAiGIAAEN");
	this.shape.setTransform(30.7467,26.226,1.2293,1.2293);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#494C4C").ss(4.1,1).p("AAAiGIAAEN");
	this.shape_1.setTransform(20.9123,26.226,1.2293,1.2293);

	this.instance_3 = new lib.Path_5();
	this.instance_3.setTransform(26,26.35,1.2293,1.2293,0,0,0,56.3,56.4);
	this.instance_3.alpha = 0.75;

	this.instance_4 = new lib.Path_6();
	this.instance_4.setTransform(26.05,26.3,1.2293,1.2293,0,0,0,21.2,21.2);
	this.instance_4.alpha = 0.7617;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pauseBTN, new cjs.Rectangle(0,0.3,52,52), null);


(lib.startAgainBTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Path_3();
	this.instance.setTransform(177.6,47.25,1,1,0,0,0,4,1.5);

	this.instance_1 = new lib.Path_1_2();
	this.instance_1.setTransform(172.65,43.65,1,1,0,0,0,6.5,2);

	this.instance_2 = new lib.Path_2_2();
	this.instance_2.setTransform(51.3,85.15,1,1,0,0,0,9.7,3.6);
	this.instance_2.alpha = 0.4219;

	this.instance_3 = new lib.Path_3_1();
	this.instance_3.setTransform(181.5,39.3,1,1,0,0,0,11.7,7.4);
	this.instance_3.alpha = 0.4219;

	this.instance_4 = new lib.Path_4_1();

	this.instance_5 = new lib.Path_5_1();
	this.instance_5.setTransform(114.9,61.35,1,1,0,0,0,84.7,31.2);
	this.instance_5.alpha = 0.1914;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230,123);


(lib.speedMeter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(0);
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// Layer_1
	this.instance = new lib.Path_14();
	this.instance.setTransform(-70.45,64.05,0.3766,0.3766,-90,0,0,28.2,93);
	this.instance.shadow = new cjs.Shadow("rgba(29,29,27,0.298)",2,4,15);

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(-70.45,64.05,0.3766,0.3766,0,0,0,45.6,27.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(29,29,27,0.298)",2,4,15);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#71B62C","#76B72B","#83BC2A","#98C229","#B2CC26","#D1D824","#F1E625","#F6E825","#F18F34","#E95F32","#E3312D"],[0,0.071,0.129,0.188,0.247,0.302,0.353,0.361,0.808,0.929,1],-158.5,0,158.5,0).s().p("AVdIHQgviJg9hxQiCjwjGitIgxgqIhphNIg3giQhwhEh2gtQjvhbkDAAQkBAAjwBbQh3AthxBDIg2AjIhoBNIgyAqQjHCtiADwQhBB3grCDQgpB8gaCWQgXiLALiWQALiQAsiRQAtiPBLiDQBMiEBmhyIBshsQAagWAhgcIA9gvQB+hcCNg+QEfh/E8AAQE8AAEfB/QCOA+B+BcIA9AvQAVAQAlAiIBsBsQBnByBLCEQBNCDArCOQAtCQALCSQALCWgXCLQgaiUgph+g");
	this.shape.setTransform(-72.1065,37.4038,0.373,0.373);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#7D7F80").ss(0.8).p("AmWAAIMtAA");
	this.shape_1.setTransform(-31.5157,65.909,0.3766,0.3766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#7D7F80").ss(0.8).p("AAAHHIAAuN");
	this.shape_2.setTransform(-70.4281,26.1022,0.3766,0.3766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#7D7F80").ss(0.8).p("AkXEYIIvov");
	this.shape_3.setTransform(-43.0492,34.1426,0.3766,0.3766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#7D7F80").ss(0.8).p("AEYEYIovov");
	this.shape_4.setTransform(-100.368,37.3437,0.3766,0.3766);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#7D7F80").ss(0.8).p("AmWAAIMsAA");
	this.shape_5.setTransform(-109.35,65.137,0.3766,0.3766);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#494C4C").ss(0.8).p("AmWAAIMsAA");
	this.shape_6.setTransform(-109.35,65.137,0.3766,0.3766);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AANAUIgCAAIgBAAIgBgBIgOgWIgCAEIgBADIgBAHIAAAIIAAABIgDAAIgCAAIgBgBIAAgIIAAgIIACgEIAFgGIgHgJIgBgBIAAAAIABgBIACAAIADAAIACABIALARIAFgEIABgCIABgFIAAgGIAAgBIACAAIADAAIABABIAAAGIgBAFIgBADIgDADIgEAFIAJAMIABABIAAABIgBABIgDAAg");
	this.shape_7.setTransform(-109.05,61.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AAAALIgBAAIgBgBIAAgTIABgBIABAAIACAAIABABIAAATIgBABIgCAAg");
	this.shape_8.setTransform(-111.975,60.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AgLATIgCAAIAAgCIgDgiIAAgBIADgBIACAAIABABIADAgIADABQAEAAAEgDQADgCACgEQACgFAAgFIAAAAIgBgGIgCgCIgEgBIgEAAIAAgBIAAgCIAAgCIAAgBIAEAAQAFAAADACQACABACAEQABADAAAEIAAABQAAAGgDAGQgCAGgFADQgFADgGAAIgHgBg");
	this.shape_9.setTransform(-114.875,61.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1B").s().p("AAAALIgBAAIgBgBIAAgTIABgBIABAAIACAAIABABIAAATIgBABIgCAAg");
	this.shape_10.setTransform(-117.875,60.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1B").s().p("AgBAUIgBgBIAAgCIAAgCIABAAIAMAAIABgPIgBgIIgCgEQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAQgCAAgCACQgDACgDAEIgEAZIgBABIgDAAIgCAAIgBgBIAFgYIAAgDIgBgCIgDgGIAAgBIAAgBIABAAIACAAIADAAIABABIACAFQADgDAEgCQACgCAEAAQAEAAADACQACACACAFIABAKIAAAIIgBAKIgBABIgBABg");
	this.shape_11.setTransform(-26.475,62.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1B").s().p("AANATIgCAAIgBgBIAAgTIgBgHIgCgDIgDgCIgGAAIgMAAIgBgBIAAgCIAAgBIABgBIANAAIAIABQADAAACACQACACABAEIABAIIAAATIgBABIgCAAgAgMATIgCAAIgBgBIAAgTIABgBIACAAIADAAIABABIAAATIgBABIgDAAg");
	this.shape_12.setTransform(-30.725,62.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1B").s().p("AAAALIgBAAIgBgBIAAgTIABgBIABAAIACAAIABABIAAATIgBABIgCAAg");
	this.shape_13.setTransform(-33.725,61.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1B").s().p("AAKATIgCAAIAAgBIAAgUIgBgGIgBgDIgDgCIgEgBIgKABIgCgBIAAgCIAAgBIACgBIAKAAIAHABIAEABIADAFIAAAIIAAAVIAAABIgDAAg");
	this.shape_14.setTransform(-36.5,62.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("A8gORQAAl0CPlSQCLlHD9j9QD8j8FHiLQFTiPFzgBQFzABFTCPQFHCLD+D8QD8D9CKFHQCQFSAAF0g");
	this.shape_15.setTransform(-70.4281,35.3666,0.3766,0.3766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:0.373,scaleY:0.373,x:-72.1065,y:37.4038}},{t:this.instance_1},{t:this.instance,p:{regX:28.2,rotation:-90,x:-70.45}}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:0.3732,scaleY:0.3732,x:-72.0132,y:37.457}},{t:this.instance_1},{t:this.instance,p:{regX:27.9,rotation:-45.0016,x:-70.45}}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:0.3732,scaleY:0.3732,x:-72.0132,y:37.457}},{t:this.instance_1},{t:this.instance,p:{regX:28.2,rotation:0,x:-70.45}}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:0.3732,scaleY:0.3732,x:-72.0132,y:37.457}},{t:this.instance_1},{t:this.instance,p:{regX:28.1,rotation:45.0016,x:-70.4}}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:0.3732,scaleY:0.3732,x:-72.0132,y:37.457}},{t:this.instance_1},{t:this.instance,p:{regX:28.2,rotation:90,x:-70.45}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.1,1,137.4,104.8);


(lib.pauseScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween5("synched",0);
	this.instance.setTransform(0.5,327.5,1.2006,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pauseScreen, new cjs.Rectangle(-497.1,5,995.3,645), null);


(lib.musicBTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(4.1,1).p("ACDiCIkFEF");
	this.shape.setTransform(25.275,24.925);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.instance = new lib.Path_13();
	this.instance.setTransform(13.7,42.75,1.2293,1.229,0,0,0,3.8,3.6);
	this.instance.alpha = 0.7891;

	this.instance_1 = new lib.Path_1_5();
	this.instance_1.setTransform(40.85,11.45,1.2293,1.229,0,0,0,3.8,3.6);
	this.instance_1.alpha = 0.8789;

	this.instance_2 = new lib.Path_2_1();
	this.instance_2.setTransform(26.05,26.3,1.2293,1.229,0,0,0,21.2,21.2);
	this.instance_2.alpha = 0.1602;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#494C4C").ss(1.1,1).p("AgKg1QAVAWAAAfQAAAfgVAX");
	this.shape_1.setTransform(37.4157,26.2723,1.2293,1.229);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#494C4C").ss(1.1,1).p("AgFgZQAKAKAAAPQAAAPgKAL");
	this.shape_2.setTransform(33.6971,26.2723,1.2293,1.229);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#494C4C").ss(1.1,1).p("AgQhQQAhAhAAAvQAAAwghAh");
	this.shape_3.setTransform(41.5647,26.2723,1.2293,1.229);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#494C4C").ss(3.2,1).p("AAAgQIAAAh");
	this.shape_4.setTransform(9.2338,26.6103,1.2293,1.229);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#494C4C").s().p("AAtBTIhuhBQgLgGAAgMQAAgMALgGIBuhAQALgGALAGQAKAGAAAMIAACAQAAANgKAGQgGADgFAAQgFAAgGgDg");
	this.shape_5.setTransform(20.8201,26.6564,1.2293,1.229);

	this.instance_3 = new lib.Path_8();
	this.instance_3.setTransform(26,26.3,1.2293,1.229,0,0,0,56.3,56.4);
	this.instance_3.alpha = 0.75;

	this.instance_4 = new lib.Path_9();
	this.instance_4.setTransform(26.05,26.3,1.2293,1.229,0,0,0,21.2,21.2);
	this.instance_4.alpha = 0.7617;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.3,52,52);


(lib.FishTest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_26 = function() {
		this.gotoAndPlay(1);
		this.gotoAndPlay(1);
		this.gotoAndPlay(1);
		this.gotoAndPlay(1);
		this.gotoAndPlay(1);
		this.gotoAndPlay(1);
		this.gotoAndPlay(1);
		this.gotoAndPlay(1);
		this.gotoAndPlay(1);
		this.gotoAndPlay(1);
		this.gotoAndPlay(1);
		this.gotoAndPlay(1);
		this.gotoAndPlay(1);
		this.gotoAndPlay(1);
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(26).call(this.frame_26).wait(24));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ai+CMQgzgzAAhIIAAAAQAAhGAzg0IAAAAQAzgzBIAAIAAAAQAwAAAlAWIAAAAQAHgLAKgKIAAAAQAkgkAyAAIAAAAQAyAAAkAkIAAAAQAjAjAAAzIAAAAQAAAygjAiIAAAAQgkAkgygBIAAAAIgSgBIAAAAQgJA0gnAnIAAAAQgzAzhHABIAAAAQhIgBgzgzg");
	var mask_graphics_6 = new cjs.Graphics().p("Ai+CMQgzgzAAhIIAAAAQAAhGAzg0IAAAAQAzgzBIAAIAAAAQAwAAAlAWIAAAAQAHgLAKgKIAAAAQAkgkAyAAIAAAAQAyAAAkAkIAAAAQAjAjAAAzIAAAAQAAAygjAiIAAAAQgkAkgygBIAAAAIgSgBIAAAAQgJA0gnAnIAAAAQgzAzhHABIAAAAQhIgBgzgzg");
	var mask_graphics_7 = new cjs.Graphics().p("Ai6CEQg0gsgChBIAAAAQgCg/AygwIAAAAQAygvBHgCIAAAAQAwgCAmATIAAAAQAHgKAKgKIAAAAQAiggAygCIAAAAQAzgBAkAeIAAAAQAlAfABAtIAAAAQABAtgiAhIAAAAQgjAggyACIAAAAIgSgBIAAAAQgHAvgnAkIAAAAQgxAwhIACIAAAAIgGAAIAAAAQhDAAgzgrg");
	var mask_graphics_8 = new cjs.Graphics().p("Ai2B8Qg1glgEg6IAAAAQgDg4AwgsIAAAAQAxgsBIgEIAAAAQAwgDAmAQIAAAAQAHgJAJgJIAAAAQAigeAygDIAAAAQAygDAlAaIAAAAQAmAaACAoIAAAAQACAogiAeIAAAAQghAegzADIAAAAIgRAAIAAAAQgHAqgmAhIAAAAQgwAshHAEIAAAAIgOABIAAAAQg/AAgwgjg");
	var mask_graphics_9 = new cjs.Graphics().p("AizB0Qg2gfgFgyIAAAAQgEgxAwgoIAAAAQAwgoBHgGIAAAAQAwgEAmAMIAAAAQAHgJAJgHIAAAAQAigcAxgFIAAAAQAzgEAlAWIAAAAQAmAVADAjIAAAAQADAjghAcIAAAAQgiAagyAFIAAAAIgRAAIAAAAQgGAlglAfIAAAAQgvAohIAGIAAAAIgXABIAAAAQg5AAgtgag");
	var mask_graphics_10 = new cjs.Graphics().p("AixBsQg2gYgGgrIAAAAQgEgpAvglIAAAAQAvgkBHgIIAAAAQAwgGAmAJIAAAAQAHgIAJgHIAAAAQAhgZAygGIAAAAQAygGAlARIAAAAQAmARAEAeIAAAAQADAdghAaIAAAAQggAYgzAGIAAAAIgRABIAAAAQgFAgglAbIAAAAQgvAlhHAIIAAAAQgSACgQAAIAAAAQgyAAgpgSg");
	var mask_graphics_11 = new cjs.Graphics().p("AiwBkQg2gSgFgjIAAAAQgGgjAvggIAAAAQAvghBHgKIAAAAQAwgHAmAFIAAAAQAGgGAKgHIAAAAQAggWAygHIAAAAQAygIAlANIAAAAQAmAMAEAZIAAAAQADAYggAXIAAAAQghAVgyAIIAAAAIgRACIAAAAQgFAaglAZIAAAAQguAhhHAKIAAAAQgaAEgYAAIAAAAQgpAAgigLg");
	var mask_graphics_12 = new cjs.Graphics().p("AiwBbQg2gKgEgdIAAAAQgFgcAugcIAAAAQAvgcBHgNIAAAAQAvgIAmACIAAAAQAHgGAJgFIAAAAQAggUAygJIAAAAQAxgJAmAIIAAAAQAlAIAEATIAAAAQADAUggAUIAAAAQghAUgyAHIAAAAIgRADIAAAAQgFAWglAWIAAAAQguAdhGAMIAAAAQglAHghAAIAAAAQgdAAgagGg");
	var mask_graphics_13 = new cjs.Graphics().p("AiwBTQg1gEgFgVIAAAAQgEgVAvgZIAAAAQAvgYBGgPIAAAAQAvgKAmgBIAAAAIAQgKIAAAAQAhgRAwgKIAAAAQAygKAlADIAAAAQAlADADAOIAAAAQADAPghARIAAAAQghASgxAKIAAAAIgRADIAAAAQgGAQgkATIAAAAQgvAZhGAPIAAAAQg1ALgsAAIAAAAIgagBg");
	var mask_graphics_14 = new cjs.Graphics().p("AjpA+QgDgNAvgWIAAAAQAwgVBGgQIAAAAQAugLAmgEIAAAAIAQgIIAAAAQAggPAxgMIAAAAQAxgMAkgBIAAAAQAlgBACAJIAAAAQACAJghAQIAAAAQghAOgxAMIAAAAIgRAEIAAAAQgGALglAQIAAAAQgvAWhGAQIAAAAQhFARg1ACIAAAAIgNAAIAAAAQgnAAgDgMg");
	var mask_graphics_15 = new cjs.Graphics().p("AjoBCQgCgGAwgSIAAAAQAxgSBFgTIAAAAQAugLAlgIIAAAAIAQgGIAAAAQAhgNAxgNIAAAAQAwgNAkgGIAAAAQAjgGABAFIAAAAQABAEghANIAAAAQgiAMgwANIAAAAIgRAFIAAAAQgIAHglANIAAAAQgwARhFATIAAAAQhFATgzAIIAAAAQgcAFgNAAIAAAAQgKAAgBgDg");
	var mask_graphics_16 = new cjs.Graphics().p("AjpA/QgDgMAwgVIAAAAQAwgVBFgQIAAAAQAvgLAlgFIAAAAIAQgIIAAAAQAhgOAxgMIAAAAQAxgMAkgCIAAAAQAkgDACAJIAAAAQACAIghAPIAAAAQghAOgxAMIAAAAIgRAEIAAAAQgHALglAPIAAAAQgvAVhFARIAAAAQhGARg0ADIAAAAIgUABIAAAAQggAAgDgKg");
	var mask_graphics_17 = new cjs.Graphics().p("AixBQQg0gCgEgTIAAAAQgEgSAvgYIAAAAQAvgWBGgQIAAAAQAvgKAmgCIAAAAIAPgJIAAAAQAhgRAxgKIAAAAQAxgLAlABIAAAAQAlACACAMIAAAAQADANghARIAAAAQggAQgyALIAAAAIgRADIAAAAQgGAOgkASIAAAAQgvAYhGAQIAAAAQg9ANgxAAIAAAAIgNAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AiwBXQg1gHgFgZIAAAAQgFgYAvgbIAAAAQAvgZBHgOIAAAAQAvgJAmAAIAAAAIAPgKIAAAAQAhgTAxgJIAAAAQAygKAlAFIAAAAQAlAGADAQIAAAAQADARggATIAAAAQghASgxAKIAAAAIgRACIAAAAQgGATgkAUIAAAAQgvAbhGAOIAAAAQgtAIgmAAIAAAAQgWAAgTgCg");
	var mask_graphics_19 = new cjs.Graphics().p("AiwBeQg2gNgFgeIAAAAQgFgeAvgdIAAAAQAvgeBHgMIAAAAQAvgIAmADIAAAAQAHgGAJgFIAAAAQAggVAygIIAAAAQAxgJAmAJIAAAAQAlAJAEAVIAAAAQADAVggAVIAAAAQghAUgxAIIAAAAIgSACIAAAAQgFAXgkAXIAAAAQguAehHAMIAAAAQgiAFgeAAIAAAAQggAAgdgGg");
	var mask_graphics_20 = new cjs.Graphics().p("AiwBlQg2gSgGglIAAAAQgFgkAvggIAAAAQAvggBHgLIAAAAQAwgGAmAFIAAAAQAGgGAKgHIAAAAQAggXAygHIAAAAQAygHAlANIAAAAQAmAMAEAZIAAAAQADAZggAYIAAAAQghAVgyAHIAAAAIgRACIAAAAQgFAbglAaIAAAAQguAghHALIAAAAQgZADgXAAIAAAAQgqAAgjgLg");
	var mask_graphics_21 = new cjs.Graphics().p("AixBrQg2gXgFgrIAAAAQgFgpAvgjIAAAAQAvgkBHgJIAAAAQAwgFAmAIIAAAAQAHgHAJgHIAAAAQAhgZAxgGIAAAAQAzgGAlAQIAAAAQAmARAEAdIAAAAQADAdghAZIAAAAQggAYgzAGIAAAAIgRABIAAAAQgFAgglAbIAAAAQguAkhHAJIAAAAQgTACgRAAIAAAAQgyAAgogSg");
	var mask_graphics_22 = new cjs.Graphics().p("AizByQg2gdgEgwIAAAAQgFgvAwgnIAAAAQAwgnBHgHIAAAAQAwgFAmAMIAAAAQAHgIAJgIIAAAAQAhgbAygFIAAAAQAygFAmAVIAAAAQAlAUADAhIAAAAQAEAighAbIAAAAQgiAagyAFIAAAAIgRAAIAAAAQgGAkglAeIAAAAQgvAnhHAHIAAAAIgaABIAAAAQg3AAgtgYg");
	var mask_graphics_23 = new cjs.Graphics().p("Ai1B5Qg1gjgEg2IAAAAQgEg1AwgqIAAAAQAxgqBHgFIAAAAQAwgEAmAOIAAAAQAHgJAJgIIAAAAQAigdAygEIAAAAQAygDAlAYIAAAAQAmAYACAmIAAAAQADAlghAeIAAAAQgiAbgyAEIAAAAIgSAAIAAAAQgGAoglAgIAAAAQgwAqhHAFIAAAAIgSABIAAAAQg9AAgvgeg");
	var mask_graphics_24 = new cjs.Graphics().p("Ai3B/Qg1gogDg8IAAAAQgDg7AxgtIAAAAQAxgtBIgEIAAAAQAwgCAmARIAAAAQAGgKAKgJIAAAAQAigfAygCIAAAAQAzgDAkAcIAAAAQAlAcACAqIAAAAQACAqgiAeIAAAAQgiAfgyADIAAAAIgSAAIAAAAQgHArgmAiIAAAAQgwAuhHADIAAAAIgLAAIAAAAQhBAAgxglg");
	var mask_graphics_25 = new cjs.Graphics().p("Ai7CGQg0gugBhCIAAAAQgChBAygwIAAAAQAygwBIgCIAAAAQAwgBAmAUIAAAAQAHgLAJgJIAAAAQAjgiAygBIAAAAQAzgBAkAgIAAAAQAkAfABAuIAAAAQABAugiAhIAAAAQgjAhgzABIAAAAIgRgBIAAAAQgIAwgnAlIAAAAQgxAwhHACIAAAAIgGAAIAAAAQhEAAgzgsg");
	var mask_graphics_26 = new cjs.Graphics().p("Ai+CMQgzgzAAhIIAAAAQAAhGAzg0IAAAAQAzgzBIAAIAAAAQAwAAAlAWIAAAAQAHgLAKgKIAAAAQAkgkAyAAIAAAAQAyAAAkAkIAAAAQAjAjAAAzIAAAAQAAAygjAiIAAAAQgkAkgygBIAAAAIgSgBIAAAAQgJA0gnAnIAAAAQgzAzhHABIAAAAQhIgBgzgzg");
	var mask_graphics_28 = new cjs.Graphics().p("Ai+CMQgzgzAAhIIAAAAQAAhGAzg0IAAAAQAzgzBIAAIAAAAQAwAAAlAWIAAAAQAHgLAKgKIAAAAQAkgkAyAAIAAAAQAyAAAkAkIAAAAQAjAjAAAzIAAAAQAAAygjAiIAAAAQgkAkgygBIAAAAIgSgBIAAAAQgJA0gnAnIAAAAQgzAzhHABIAAAAQhIgBgzgzg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:200.6249,y:70.65}).wait(6).to({graphics:mask_graphics_6,x:200.6249,y:70.65}).wait(1).to({graphics:mask_graphics_7,x:200.883,y:70.5519}).wait(1).to({graphics:mask_graphics_8,x:201.1554,y:70.4567}).wait(1).to({graphics:mask_graphics_9,x:201.4438,y:70.3662}).wait(1).to({graphics:mask_graphics_10,x:201.7483,y:70.282}).wait(1).to({graphics:mask_graphics_11,x:202.0694,y:70.2077}).wait(1).to({graphics:mask_graphics_12,x:202.4075,y:70.1487}).wait(1).to({graphics:mask_graphics_13,x:202.7624,y:70.1172}).wait(1).to({graphics:mask_graphics_14,x:203.1332,y:70.1401}).wait(1).to({graphics:mask_graphics_15,x:203.4994,y:70.1707}).wait(1).to({graphics:mask_graphics_16,x:203.1688,y:70.0156}).wait(1).to({graphics:mask_graphics_17,x:202.8514,y:69.9143}).wait(1).to({graphics:mask_graphics_18,x:202.5474,y:69.8589}).wait(1).to({graphics:mask_graphics_19,x:202.2574,y:69.8286}).wait(1).to({graphics:mask_graphics_20,x:201.9821,y:69.8134}).wait(1).to({graphics:mask_graphics_21,x:201.7207,y:69.8076}).wait(1).to({graphics:mask_graphics_22,x:201.4743,y:69.8084}).wait(1).to({graphics:mask_graphics_23,x:201.2412,y:69.8142}).wait(1).to({graphics:mask_graphics_24,x:201.0227,y:69.8234}).wait(1).to({graphics:mask_graphics_25,x:200.8172,y:69.8359}).wait(1).to({graphics:mask_graphics_26,x:200.6249,y:70.65}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_28,x:200.6249,y:70.65}).wait(22));

	// EYEBALLleft
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AgkAlQgPgPAAgWQAAgUAPgQQAPgPAVAAQAVAAAQAPQAPAQAAAUQAAAWgPAPQgPAPgWAAQgVAAgPgPg");
	this.shape.setTransform(218.7378,65.9639,0.6199,0.6199);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(26).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(21));

	// EYEBALLright
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_1.setTransform(204.4029,74.0666,0.6199,0.6199);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(26).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(21));

	// BallRight
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah6B7QgzgzAAhIQAAhHAzgzQAzgzBHAAQBIAAAzAzQAzAzAABHQAABIgzAzQgzAzhIAAQhHAAgzgzg");
	this.shape_2.setTransform(193.825,70.275);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(26).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(21));

	// BallLeft
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhVBWQgjgkAAgyQAAgxAjgkQAkgjAxAAQAyAAAkAjQAjAkAAAxQAAAygjAkQgkAjgyAAQgxAAgkgjg");
	this.shape_3.setTransform(212.725,61.5);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(26).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(21));

	// hand
	this.instance = new lib.MosheHand();
	this.instance.setTransform(144.35,109.85,1,1,-14.9992);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:120.0016,x:144.3},13).to({rotation:-14.9992,x:144.35},12).wait(1).to({rotation:-14.9992},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(21));

	// BallRight copy
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D76C0B").s().p("Ah6B7QgzgzAAhIQAAhHAzgzQAzgzBHAAQBIAAAzAzQAzAzAABHQAABIgzAzQgzAzhIAAQhHAAgzgzg");
	this.shape_4.setTransform(193.825,70.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(26).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(21));

	// BallLeft copy
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D76C0B").s().p("AhVBWQgjgkAAgyQAAgxAjgkQAkgjAxAAQAyAAAkAjQAjAkAAAxQAAAygjAkQgkAjgyAAQgxAAgkgjg");
	this.shape_5.setTransform(212.725,61.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(26).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(21));

	// mouth  (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("ABBCeQg+gMhqg+QhyhCADgfIABgDQAEgLAggQQBCggCpgtQBVgXBIgQQgBAjgnAyQgyA/gIAQQgIATAAA6QgBAzgUAYQgDADgHAAIgNgCg");
	var mask_1_graphics_5 = new cjs.Graphics().p("ABBCeQg+gMhqg+QhyhCADgfIABgDQAEgLAggQQBCggCpgtQBVgXBIgQQgBAjgnAyQgyA/gIAQQgIATAAA6QgBAzgUAYQgDADgHAAIgNgCg");
	var mask_1_graphics_6 = new cjs.Graphics().p("APcJzQg+gLhrg4Qhyg8ADgdIABgDQAEgKAggPQBCgcCqgqQBVgUBIgPQgBAggnAtQgyA5gIAQQgIARAAA1QgBAugUAWQgDACgHAAIgNgBg");
	var mask_1_graphics_7 = new cjs.Graphics().p("APcJsQg+gKhrgyQhyg2ADgbIABgCQAEgJAggOQBCgZCqgmQBVgSBIgNQgBAdgnAoQgyA0gIAOQgIAPAAAwQgBApgUAUQgDACgHAAIgNgBg");
	var mask_1_graphics_8 = new cjs.Graphics().p("APcJlQg+gJhrgtQhygwADgXIABgCQAEgJAggLQBCgXCqghQBVgRBIgLQgBAZgnAkQgyAugIANQgIANAAArQgBAkgUASQgDACgHAAIgNgBg");
	var mask_1_graphics_9 = new cjs.Graphics().p("APcJeQg+gIhrgnQhygqADgVIABgCQAEgHAggKQBCgUCqgdQBVgOBIgLQgBAXgnAfQgyAogIALQgIAMAAAlQgBAhgUAPQgDACgHAAIgNgBg");
	var mask_1_graphics_10 = new cjs.Graphics().p("APcJWQg+gGhrgiQhygkADgRIABgCQAEgGAggJQBCgRCqgZQBVgMBIgJQgBATgnAbQgyAjgIAJQgIAKAAAgQgBAcgUANQgDABgHAAIgNgBg");
	var mask_1_graphics_11 = new cjs.Graphics().p("APcJPQg+gFhrgcQhygeADgPIABgBQAEgFAggIQBCgOCqgVQBVgKBIgHQgBAQgnAWQgyAdgIAIQgIAIAAAbQgBAXgUALQgDABgHAAIgNgBg");
	var mask_1_graphics_12 = new cjs.Graphics().p("APcJIQg+gEhrgXQhygYADgLIABgBQAEgEAggGQBCgMCqgQICdgOQgBAMgnASQgyAXgIAHQgIAGAAAWQgBASgUAJIgKABIgNgBg");
	var mask_1_graphics_13 = new cjs.Graphics().p("APcJBQg+gDhrgRQhygSADgJIABgBQAEgDAggEQBCgJCqgMICdgLQgBAKgnAOQgyARgIAEQgIAGAAAPQgBAOgUAHIgKABIgNgBg");
	var mask_1_graphics_14 = new cjs.Graphics().p("APcI6Qg+gChrgLQhygMADgGIABgBQAEgCAggDQBCgFCqgJICdgHQgBAHgnAJQgyALgIADQgIAEAAAKQgBAJgUAFIgKAAIgNAAg");
	var mask_1_graphics_15 = new cjs.Graphics().p("APcIzQg+gBhrgGQhygGADgDIABAAQAEgBAggBQBCgDCqgEICdgEQgBADgnAFIg6AHQgIACAAAFQgBAFgUACIgKAAIgNAAg");
	var mask_1_graphics_16 = new cjs.Graphics().p("APcI6Qg+gChrgLQhygMADgGIABgBQAEgCAggDQBCgFCqgJICdgHQgBAHgnAJQgyALgIADQgIAEAAAKQgBAJgUAFIgKAAIgNAAg");
	var mask_1_graphics_17 = new cjs.Graphics().p("APcJBQg+gDhrgRQhygSADgJIABgBQAEgDAggEQBCgJCqgMICdgLQgBAKgnAOQgyARgIAEQgIAGAAAPQgBAOgUAHIgKABIgNgBg");
	var mask_1_graphics_18 = new cjs.Graphics().p("APcJIQg+gEhrgXQhygYADgLIABgBQAEgEAggGQBCgMCqgQICdgOQgBAMgnASQgyAXgIAHQgIAGAAAWQgBASgUAJIgKABIgNgBg");
	var mask_1_graphics_19 = new cjs.Graphics().p("APcJPQg+gFhrgcQhygeADgPIABgBQAEgFAggIQBCgOCqgVQBVgKBIgHQgBAQgnAWQgyAdgIAIQgIAIAAAbQgBAXgUALQgDABgHAAIgNgBg");
	var mask_1_graphics_20 = new cjs.Graphics().p("APcJWQg+gGhrgiQhygkADgRIABgCQAEgGAggJQBCgRCqgZQBVgMBIgJQgBATgnAbQgyAjgIAJQgIAKAAAgQgBAcgUANQgDABgHAAIgNgBg");
	var mask_1_graphics_21 = new cjs.Graphics().p("APcJeQg+gIhrgnQhygqADgVIABgCQAEgHAggKQBCgUCqgdQBVgOBIgLQgBAXgnAfQgyAogIALQgIAMAAAlQgBAhgUAPQgDACgHAAIgNgBg");
	var mask_1_graphics_22 = new cjs.Graphics().p("APcJlQg+gJhrgtQhygwADgXIABgCQAEgJAggLQBCgXCqghQBVgRBIgLQgBAZgnAkQgyAugIANQgIANAAArQgBAkgUASQgDACgHAAIgNgBg");
	var mask_1_graphics_23 = new cjs.Graphics().p("APcJsQg+gKhrgyQhyg2ADgbIABgCQAEgJAggOQBCgZCqgmQBVgSBIgNQgBAdgnAoQgyA0gIAOQgIAPAAAwQgBApgUAUQgDACgHAAIgNgBg");
	var mask_1_graphics_24 = new cjs.Graphics().p("APcJzQg+gLhrg4Qhyg8ADgdIABgDQAEgKAggPQBCgcCqgqQBVgUBIgPQgBAggnAtQgyA5gIAQQgIARAAA1QgBAugUAWQgDACgHAAIgNgBg");
	var mask_1_graphics_25 = new cjs.Graphics().p("ABBCeQg+gMhqg+QhyhCADgfIABgDQAEgLAggQQBCggCpgtQBVgXBIgQQgBAjgnAyQgyA/gIAQQgIATAAA6QgBAzgUAYQgDADgHAAIgNgCg");
	var mask_1_graphics_26 = new cjs.Graphics().p("ABBCeQg+gMhqg+QhyhCADgfIABgDQAEgLAggQQBCggCpgtQBVgXBIgQQgBAjgnAyQgyA/gIAQQgIATAAA6QgBAzgUAYQgDADgHAAIgNgCg");
	var mask_1_graphics_28 = new cjs.Graphics().p("ABBCeQg+gMhqg+QhyhCADgfIABgDQAEgLAggQQBCggCpgtQBVgXBIgQQgBAjgnAyQgyA/gIAQQgIATAAA6QgBAzgUAYQgDADgHAAIgNgCg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:206.0711,y:111.1516}).wait(5).to({graphics:mask_1_graphics_5,x:206.0711,y:111.1516}).wait(1).to({graphics:mask_1_graphics_6,x:113.775,y:62.8264}).wait(1).to({graphics:mask_1_graphics_7,x:113.775,y:62.1013}).wait(1).to({graphics:mask_1_graphics_8,x:113.775,y:61.3761}).wait(1).to({graphics:mask_1_graphics_9,x:113.775,y:60.651}).wait(1).to({graphics:mask_1_graphics_10,x:113.775,y:59.9259}).wait(1).to({graphics:mask_1_graphics_11,x:113.775,y:59.2007}).wait(1).to({graphics:mask_1_graphics_12,x:113.775,y:58.4756}).wait(1).to({graphics:mask_1_graphics_13,x:113.775,y:57.7504}).wait(1).to({graphics:mask_1_graphics_14,x:113.775,y:57.0253}).wait(1).to({graphics:mask_1_graphics_15,x:113.775,y:56.3002}).wait(1).to({graphics:mask_1_graphics_16,x:113.775,y:57.0253}).wait(1).to({graphics:mask_1_graphics_17,x:113.775,y:57.7504}).wait(1).to({graphics:mask_1_graphics_18,x:113.775,y:58.4756}).wait(1).to({graphics:mask_1_graphics_19,x:113.775,y:59.2007}).wait(1).to({graphics:mask_1_graphics_20,x:113.775,y:59.9259}).wait(1).to({graphics:mask_1_graphics_21,x:113.775,y:60.651}).wait(1).to({graphics:mask_1_graphics_22,x:113.775,y:61.3761}).wait(1).to({graphics:mask_1_graphics_23,x:113.775,y:62.1013}).wait(1).to({graphics:mask_1_graphics_24,x:113.775,y:62.8264}).wait(1).to({graphics:mask_1_graphics_25,x:206.0711,y:111.1516}).wait(1).to({graphics:mask_1_graphics_26,x:206.0711,y:111.1516}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_28,x:206.0711,y:111.1516}).wait(22));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D36A6E").s().p("AA0A2QgRgUgggoQgfgpgSgSQgMgOgRgLQgRgMgSgCQARgCAVALQAOAJASAPQARARAiAqIAwA9QAKAOAOAQQAMANARAOQgbgQghgkg");
	this.shape_6.setTransform(199.8601,117.4626,0.6169,0.6169);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EE7576").s().p("AguAVQi3hpAFgzQBIgHA+AEQBmAGAqAiQAZATAPAeIAXA5QAgBPBMA1QhkgTirhkg");
	this.shape_7.setTransform(198.4655,118.4081,0.6203,0.6203);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#020203").s().p("AKlFlQg+gMhrg+QhxhCADggIAAgDQAEgLAhgQQBBggCqgtQBVgXBIgQQAAAjgnAyQgzA/gHARQgIATgBA6QAAAzgVAYQgCADgHAAIgOgCgAs3lkIADgBIABgBIABAAIgHADIgBABIADgCg");
	this.shape_8.setTransform(144.7375,91.4016);

	this.instance_1 = new lib.Tween20("synched",0);
	this.instance_1.setTransform(144.75,91.4);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween21("synched",0);
	this.instance_2.setTransform(144.75,91.4);

	var maskedShapeInstanceList = [this.shape_6,this.shape_7,this.shape_8,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{scaleX:0.6169,scaleY:0.6169,x:199.8601,y:117.4626}}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{scaleX:0.6175,scaleY:0.6175,x:200.0027,y:117.5322}}]},26).to({state:[]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{scaleX:0.6175,scaleY:0.6175,x:199.9992,y:117.5305}}]},1).to({state:[]},1).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({startPosition:0},5).to({_off:true},5).wait(1));

	// body
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#A01507","#A21A08","#A92708","#B53B0A","#C7580B","#D46E0A"],[0.078,0.255,0.451,0.659,0.871,1],19.5,42.2,-12.5,-41.8).s().p("ABxCEQghgGgdgQQgTgKgfgVQg+gtgdgaQgygrAJgTQAIgKBygkQBwgkAFAEQgJAKgPAlQgTAsABAWQACAwAMAiQARAsAkAag");
	this.shape_9.setTransform(68.5431,85.2404,0.6199,0.6199);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#A01507","#A21A08","#A92708","#B53B0A","#C7580B","#D46E0A"],[0.078,0.255,0.451,0.659,0.871,1],19,40.7,-13.1,-43.3).s().p("ACKDVQgkgQgjggQgWgUglgpQhJhSgmgxQg9hRAGgdQAHgPBygkQBwgjAFAHQgHAPgJA4QgLBDAFAjQAYCuBNBXg");
	this.shape_10.setTransform(90.0485,81.2034,0.6199,0.6199);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#A01507","#A21A08","#A92708","#B53B0A","#C7580B","#D46E0A"],[0.078,0.255,0.451,0.659,0.871,1],17.9,39.7,-12.7,-44.8).s().p("ACZEUQgmgZgmgsQgXgbgpg5QhSh0gphCQhEhuAEglQAGgSBygiQBxgiAGAKQgGASgGBIQgHBVAIAuQAkDhBVB5g");
	this.shape_11.setTransform(112.9786,76.5652,0.6199,0.6199);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#A01507","#A21A08","#A92708","#B53B0A","#C7580B","#D46E0A"],[0.078,0.255,0.451,0.659,0.871,1],14,39.1,-7.8,-48.1).s().p("ACMFTQglgkgkg8QgVgkgmhMQhMiZglhWQg9iQAGgsQAHgUB2gXQBzgWAFANQgHAXgKBUQgNBlAFA4QAXEXBOCfg");
	this.shape_12.setTransform(134.3679,73.8988,0.6199,0.6199);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#A01507","#A21A08","#A92708","#B53B0A","#C7580B","#D46E0A"],[0.078,0.255,0.451,0.659,0.871,1],4.4,38.3,-0.9,-51.4).s().p("AA1GFQgdgwgYhLQgNgugXhdQgui4gVhtQgiiuAOgwQALgVB3gBQB2AAADAQQgLAWgaBeQgfBugGBBQgdE/AvDDg");
	this.shape_13.setTransform(157.762,73.754,0.6199,0.6199);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1B").s().p("Ah6AqIgCAAIgCgDQgCgDACgDQAUgeAfgTQAfgUAkgEQAmgFAmAOQASAGAQAKQAVANAFAJQABADgCADQgCADgDgBQgGgCgIgGIgNgKQgRgKgPgFQgigLgfADQgiAEgeARQgeARgTAbQgDAEgDAAIgBgBg");
	this.shape_14.setTransform(207.5118,46.4077,0.6154,0.6154);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1B").s().p("AihBhQgCgCABgDQABgGAGgHIAJgMIAPgUQASgWAUgUQAngnAsgbQA0ghAsgDQAbgBAWAHQAdALAAANQAAADgDAAQgEACgEgCIgHgDQgJgGgOgEQgWgFgZACQgoAHgxAhQgoAcgjAiIgiAlIgQAUIgIAKQgFAFgFADIgCABIgDgBg");
	this.shape_15.setTransform(180.9411,54.4271,0.6154,0.6154);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#A01507","#D6580E","#EF7A0D"],[0.078,0.682,1],-3.5,10.7,0.3,-7.2).s().p("AhwCHIgQgVQgKgOgHgHQgagbgpAAQgqAAgaAbIgXAeQgOATgOAHQgVAMgagMQgZgLgFgYQgFgZAXggQAdgjALgTQAQgdAAglQgBgtgkgDQgagDgmgOQgugPARgJQAsgWHBBlQDgAzDYA1QgOAXgfAEQgdAFgZgOIgwAvQgLALgIACQgNADgUgOQgWgQgMAAQgKAAgKAIIgSAQQgXAVgjAEQgiAFgdgPIgigUQgVgKgPAEQgPAEgUAaQgTAbgQADIgJACQgUAAgUgWg");
	this.shape_16.setTransform(99.472,141.226,0.6199,0.6199);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15,p:{scaleX:0.6154,scaleY:0.6154,x:180.9411,y:54.4271}},{t:this.shape_14,p:{scaleX:0.6154,scaleY:0.6154,x:207.5118,y:46.4077}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_16},{t:this.shape_15,p:{scaleX:0.6161,scaleY:0.6161,x:181.2339,y:54.5144}},{t:this.shape_14,p:{scaleX:0.6161,scaleY:0.6161,x:207.8355,y:46.4857}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},25).to({state:[{t:this.shape_16},{t:this.shape_15,p:{scaleX:0.6161,scaleY:0.6161,x:181.2339,y:54.5144}},{t:this.shape_14,p:{scaleX:0.6161,scaleY:0.6161,x:207.8355,y:46.4857}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[]},1).to({state:[{t:this.shape_16},{t:this.shape_15,p:{scaleX:0.6167,scaleY:0.6167,x:181.4706,y:54.585}},{t:this.shape_14,p:{scaleX:0.6167,scaleY:0.6167,x:208.0973,y:46.5487}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[]},1).wait(21));

	// MosheTail
	this.instance_3 = new lib.MosheTail();
	this.instance_3.setTransform(39.8,106.2,1,1,0,0,0,39.8,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.1692,scaleY:1.1692,x:39.85},12).to({scaleX:1,scaleY:1,x:39.8},13).wait(1).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(21));

	// UpTail
	this.instance_4 = new lib.Symbol5();
	this.instance_4.setTransform(120.05,41.6,1,1,0,0,0,64.2,41.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:64.3,regY:41.5,scaleX:1.1899,scaleY:1.1899,x:120.2,y:41.55},12).to({regX:64.2,regY:41.6,scaleX:1,scaleY:1,x:120.05,y:41.6},13).wait(1).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(21));

	// body
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EF7A0D").s().p("AlhL3QhjgGh8gTQhGgLiYgcQiWgchQgcQh7gshKhKQhLhMgghzQgehoAKh3QALiRBChVQAcgkAtgjQAdgWA4gjQB8hPA+glQBpg+BYgpQBQgmBngnQBAgZB7gqQCmg6BWgZQCNgpB1gPQD7ghD4BBQD7BDDFCbQCpCFA9CZQAkBbAABqQAAA4hABQQhQBlgNAdQgNAegBBeQAABRghAnQhSBhheAvQhjAyiTAUQhWAMi0AGQiVAGhHAIQjOAZjHAAQhgAAhfgGg");
	this.shape_17.setTransform(143.3813,96.3531,0.6203,0.6203);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(26).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(21));

	// handBack
	this.instance_5 = new lib.MosheBackHand();
	this.instance_5.setTransform(147.15,112.6,1,1,14.9996,0,0,62.9,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.9999,scaleY:0.9999,rotation:141.5047,x:147.05,y:112.85},12).to({scaleX:1,scaleY:1,rotation:14.9996,x:147.15,y:112.6},13).wait(1).to({rotation:14.9996},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,-7.8,234.2,192.8);


(lib.endScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween5("synched",0);
	this.instance.setTransform(607.85,343.9,1.4661,1.0664,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endScreen, new cjs.Rectangle(0,0,1215.4,687.8), null);


// stage content:
(lib.mosheTheFish_OriAlon_LiatBenYosef_MayElazar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		// כיוון הטקסט
		document.getElementById("canvas").style.direction = "rtl";
		//-------------------------------הטמעת פונט-----------------------------------//
		WebFontConfig = {
			google: {
				families: ['Rubik']
			}
		};
		
		(function () {
			var wf = document.createElement('script');
			wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
			wf.type = 'text/javascript';
			wf.async = true;
			var s = document.getElementsByTagName('script')[0];
		
			s.parentNode.insertBefore(wf, s);
		})();
		///---------------------------------------------------------------------------//
		//מתשנים גלובלים לאורך ורוחב הבמה
		stageWidth = 1280;
		stageHeight = 720;
		var GameName; // שם המשחק משתנה על פי בחירת המשתמש
		
		
		var foodyLocations = [150, 300, 450];
		
		var foodYrnd = 0;// משתנה למיקום המסיח
		var lastLocation; // משתנה לשמירת המיקום האחרון של המסיח
		//הבחירה של הקומבו
		var mychoice = 0;
		var maxSpeed = 10; //מקסימום מהירות של נועת המסיחים
		
		//-----------------------------משתנים לבר התקדמות--------------------------------//
		var barPosition = 0;
		var myPosition = 0;
		var TrueANScounter = 0;
		
		//------------משתנה לבר מהירות------------//
		var pressCounter = 0; 
		//------------------------------המסיחים--------------------------------//
		
		//אינטרוול ליצירת המסיחים
		var AnswerInterval;
		
		// תנועה של המסיח
		var AnswerMove = 0;
		
		//מהירות האינטרוול
		var IntervalSpeed = 4500;
		
		//משתנים לשמירת כמות התשובות הנכונות והלא נכונות שהמשתמש בחר
		var correctAns = 0;
		var wrongAns = 0;
		//-----------------------------מערך השומר את המסיחים---------------------------//
		
		// מערך שמכיל את המסיחים
		var myAnswerArray = [];
		
		// המיקום של המסיחים במערך המסיחים 
		var counterAnswer = 0;
		
		
		//-------------------------------------------------------------------------------//
		
		// משתנה ששומר את המספר הרנדומלי האחרון על מנת שלא לוודא שאין הגרלה כפולה
		var lastrnd = 0;
		
		//מערך המכיל את המספרים הרנדומלים של המסיחים
		var MyRNDarray = [];
		
		var counterRND = 0;// משתנה לשמירת תא במערך המספרים הרנדומלים
		
		//----------------------------------------------------------------//
		
		
		//המערך של כל המשחק
		var myGame = [];
		
		//משתנה לשמירת הזמן של המחשק
		var secCounter = 0; // מונה של השניות
		var minCounter = 0; // מונה של הדקות
		
		
		//משתנה לכמות תשובות נכונות
		var trueAnswers = 10;
		
		var counter = 0;
		
		
		//---------------------משתנה לחישוב ציון------------------------------------//
		var score;
		
		//---------------------משתנה להיווצרות מסיחים רנדומלי------------------------------------//
		var rnd; // שמירת מספר ההגרלה
		
		//---------------------משתנה לאינטרוול השומר את זמן המשחק------------------------------------//
		
		var gameTime;
		
		//------------------------------------//
		var myHit; // משתנה שבודק האם היתה פגיעה במסיח
		
		//-----------------------מוזיקה--------------------------------//
		createjs.Sound.registerSound("sounds/correct.mp3", "correct");
		createjs.Sound.registerSound("sounds/incorrect.mp3", "incorrect");
		createjs.Sound.registerSound("sounds/soundTrack.mp3", "soundTrack");
		
		var playSound;
		var correctSound;
		var incorrectSound;
		
		var musicBTNclick = false; //משתנה לבדיקה האם הכפתור נלחץ
		
		//----------------------------------המאזינים-----------------------------------//
		//פונקצית מקשים לתזוזת הדג
		window.addEventListener("keydown", fishMove);
		
		
		// טיקר להזזת המסיחים
		createjs.Ticker.addEventListener("tick", AnswerTicker);
		createjs.Ticker.paused = true;
		createjs.Ticker.setFPS(24);
		
		// ---------------------------------פונקציה למסך ואנימצית פתיחה-----------------------------------///
		openningSrcreenFunc();
		function openningSrcreenFunc() {
			// הוספת הרקע של מססך הפתיחה
			var openningStage = new lib.openningStage();
			openningStage.name = "openningStage";
			stage.addChild(openningStage);
		
			var MaxPersonSaysHello = new lib.MaxPersonSaysHello();
			MaxPersonSaysHello.x = 1000;
			MaxPersonSaysHello.y = 300;
			MaxPersonSaysHello.name = "MaxPersonSaysHello";
			stage.addChild(MaxPersonSaysHello);
		
		}
		
		
		//------------------------------הקומבו בוקס----------------------------------//
		
		var forcombo = new lib.forcomb();
		forcomboFunc();
		function forcomboFunc() {
			//הוספת הקומבו לבמה
		
		
			forcombo.x = 650;
			forcombo.y = 300;
			stage.addChild(forcombo);
			//הגדרות עבור כפתור "בחר" - חלק מהקומפוננטה של הקומבו
			forcombo.startbtn.alpha = 0.3;
			//מאזין לשינוי ערכים בקומבו - שימו לב שהפרמטר השני, האינסטנס של הקומבו, הוגדר ידנית בתוך הקומפוננט
			$("#dom_overlay_container").on("change", "#mycb", mycb_change);
		
		}
		
		
		//בעת שינוי ערך בקומבו
		function mycb_change(evt) {
			//שמירת הערך שנבחר בקומבו
			//console.log(evt.currentTarget.value);
			mychoice = evt.currentTarget.value;
			//אם נבחר הערך הראשון - "בחר נושא
			if (mychoice == 0) {
				//ניטרול כפתור "בחר
				forcombo.startbtn.alpha = 0.3;
				forcombo.startbtn.removeEventListener("click", fl_ClickToPosition);
			} else {
				//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה
				forcombo.startbtn.alpha = 1;
				forcombo.startbtn.addEventListener("click", fl_ClickToPosition);
			}
		
		
		}
		
		//לחיצה על בחר
		function fl_ClickToPosition() {
			if (mychoice == 1) {
				firstGameFunc();
			} else if (mychoice == 2) {
		
				secondGameFunc();
			}
		}
		
		//-------------------------------המערך של המשחק הראשון---------------------//
		
		function firstGameFunc() {
		
			myGame = [
				["אסוף את כל ההמצאות שהומצאו במאה ה-19 \n והתחמק מכל השאר"],
				[ //המסיחים
					["text", "שיטת דיואי", true, "0", false, false, 0],
					["Pic", lib.locomotive, true, "1", false, false, 0], //להשלים תמונה
					["text", "מודל תלת מימדי בגודל מלא או ממוזער המציג את הנושא בסביבתו הטבעית", true, "2", false, false, 0],
					["Pic", lib.cornflakes, true, "3", false, false, 0], //להשלים תמונה
					["text", "דראוויצר גליידר", true, "4", false, false, 0],
					["Pic", lib.car, true, "5", false, false, 0], //תמונה
					["Pic", lib.tesla_coil, true, "6", false, false, 0], //תמונה
					["text", "כתב ברייל", true, "7", false, false, 0],
					["text", "הנול של ז'אקאר", true, "8", false, false, 0],
					["Pic", lib.ballpoint_pan, true, "9", false, false, 0], //תמונה
					["text", "כור גרעיני", false, "10", false, false, 0],
					["Pic", lib.airplane, false, "11", false, false, 0], //תמונה
					["text", "טנק", false, "12", false, false, 0],
					["Pic", lib.printer, false, "13", false, false, 0], //תמונה
					["text", "מעבורת חלל", false, "14", false, false, 0],
					["text", "טפטפת", false, "15", false, false, 0], //תמונה
					["Pic", lib.tv, false, "16", false, false, 0], //תמונה
					["text", "טרנזיסטור", false, "17", false, false, 0],
					["text", "קוצב לב", false, "18", false, false, 0],
					["Pic", lib.dok, false, "19", false, false, 0] //תמונה
				]
			];
		
			startGame();
		}
		
		
		
		//-----------------------------המערך של המשחק השני-------------------------------------//
		function secondGameFunc() {
			
			myGame = [
				["אסוף את כל מדינות אירופה והתחמק מכל השאר"],
				[
					//המסיחים
					// סוג המסיח, שם המסיח, תשובה נכונה או שגויה, נתינת שם למסיח,האם הוגרל או לא,זיהוי פריט נכון כלא נכוןתת האם הפריט זוהה כנכון
					["text", "איטליה", true, "0", false, false, 0],
					["Pic", lib.germany, true, "1", false, false, 0],
					["text", "בריטניה", true, "2", false, false, 0],
					["Pic", lib.Frence, true, "3", false, false, 0],
					["text", "יוון", true, "4", false, false, 0],
					["Pic", lib.Switzerland, true, "5", false, false, 0],
					["Pic", lib.nethereland, true, "6", false, false, 0],
					["text", "פולין", true, "7", false, false, 0],
					["text", "שבדיה", true, "8", false, false, 0],
					["Pic", lib.latvia, true, "9", false, false, 0],
					["Pic", lib.vietnam, false, "10", false, false, 0],
					["Pic", lib.Qatar, false, "11", false, false, 0],
					["Pic", lib.Burma, false, "12", false, false, 0],
					["Pic", lib.China, false, "13", false, false, 0],
					["Pic", lib.Labanon, false, "14", false, false, 0],
					["text", "מדינת איים המורכבת מ- 7,641 איים אשר שוכנת במערב האוקיינוס השקט", false, "15", false, false, 0],
					["text", "הודו", false, "16", false, false, 0],
					["text", "אקוודור", false, "17", false, false, 0],
					["text", "ניו המפשייר", false, "18", false, false, 0],
					["text", "סנט וינסנט והגרנדינים", false, "19", false, false, 0]
				]
		
			];
		
			startGame();
		}
		
		
		//------------------------------הפונקציה של המשחק-------------------------------//
		
		
		function startGame() {
		
			playSound = createjs.Sound.play("soundTrack");
			createjs.Sound.volume = 0.3;
		
			AnswerMove = 2;
			stage.removeChild(forcombo); // הסרת הקומבו בוקס
			stage.removeChild(stage.getChildByName("MaxPersonSaysHello"));//הסרת אנימצית פתיחה
			stage.removeChild(stage.getChildByName("openningStage"));// הסרת רקע פתיחה
			
			// יצירת הרקע
			backGround = new lib.FishBackGround();
			backGround.name = "backGround";
			backGround.x = 0;
			backGround.y = 0;
			stage.addChild(backGround);
		
			// מד מהירות 
			var speedMeter = new lib.speedMeter();
			speedMeter.x = 1200;
			speedMeter.y = 20;
			speedMeter.name = "speedMeter";
			stage.addChild(speedMeter);
		
			// ספירה כמה תשובות נכונות יש
		
			for (p = 0; p < myGame[1].length; p++) {
				if (myGame[1][p][2] == true) {
					TrueANScounter++;
				}
			}
			console.log(TrueANScounter);
		
			// מד התקדמות
			var progressBAR = new lib.progressBAR();
			progressBAR.x = 3;
			progressBAR.y = 20;
			progressBAR.name = "progressBAR";
			stage.addChild(progressBAR);
			progressBAR.gotoAndStop(0);
			barPosition = parseFloat(100 / TrueANScounter);
		
		
			//כפתור השהייה
			var pauseBTN = new lib.pauseBTN();
			pauseBTN.x = 10;
			pauseBTN.y = 10;
			pauseBTN.name = "pauseBTN";
			stage.addChild(pauseBTN);
			pauseBTN.addEventListener("click", pauseFunc);
		
			// כפתור למוזיקה
			var musicBTN = new lib.musicBTN();
			musicBTN.x = 80;
			musicBTN.y = 10;
			musicBTN.name = "musicBTN";
			stage.addChild(musicBTN);
			musicBTN.addEventListener("click", musicFUNC);
		
			// אינטרוול לזמן של המשחק
			gameTime = setInterval(gameTimeFunc, 1000);
		
			// יצירת הדג
			myFish = new lib.FishTest();
			myFish.x = 150;
			myFish.y = stageHeight / 2;
			myFish.name = "myFish";
			stage.addChild(myFish);
		
		
			// הסימבול עליו עומדת השאלה
			var Qback = new lib.myQback();
			Qback.x = 400;
			Qback.y = 0;
			Qback.name = "questionsTXT";
			stage.addChild(Qback);
		
		
			//תיבת טקסט לשאלה
			var questionTB = new createjs.Text(); // יצירת תיבת טקסט למסיחים
			Qback.addChild(questionTB);
			questionTB.text = myGame[0][0];
			questionTB.name = "questionTB";
			questionTB.x = 10;
			questionTB.y = 10;
			questionTB.font = "24px Rubik";
		
			//הפעלת האינטרוול ליצירת המסיחים	
			AnswerInterval = setInterval(AnswerInter, IntervalSpeed);
		}
		
		// יצירת התנועה //הרצה של המסיחים
		function AnswerInter() {
		
			forans();
		}
		
		
		//------------------------------הפונקציה של המסיחים-------------------------------//
		
		function forans() {
			if (counter > 0) { // כדי לוודא שלא הוגרל אותו מספר פעמים יצרנו משתנים לשמירת המספר האחרון שהוגרל
				lastrnd = rnd;
				lastLocation = foodYrnd; // משתנה שישמור את מיקום המסיח האחרון שהוגרל
			}
		
		
			rnd = Math.floor(Math.random() * (myGame[1].length)); // הגרלה של המסיח
			foodYrnd = Math.floor(Math.random() * foodyLocations.length); // הגרלה של מיקום המסיח על הבמה
			if (myGame[1][rnd][4] == false) { // אם המסיח לא הוגרל, אז ניכנס לתנאי
				myGame[1][rnd][4] == true;
				while (lastrnd == rnd) { // אם המספר האחרון של ההגרלה דומה להגרלה העכשווית אז תרגיל שוב
					rnd = Math.floor(Math.random() * (myGame[1].length));
				}
				MyRNDarray[counter] = rnd; // שמירה במערך של המספרים שהוגרלו
				counter++;
		
				while (lastLocation == foodYrnd) { // אם המספר האחרון של ההגרלה דומה להגרלה העכשווית אז תרגיל שוב
					foodYrnd = Math.floor(Math.random() * foodyLocations.length);
				}
		
				//יצירת האוכל של הדג	
				var AnswerTest = new lib.AnswerTest();
				AnswerTest.x = stageWidth - 100;
				AnswerTest.y = foodyLocations[foodYrnd];
		
				AnswerTest.name = "AnswerTest" + myGame[1][rnd][3]; // יצירת שם למסיח שנוצר 
				stage.addChild(AnswerTest); // השמה על הבמה
		
				myAnswerArray[counterAnswer] = AnswerTest;// שמירה של המסיחים שהוגרלו במערך
				counterAnswer++;
		
				AnswerTest.gotoAndStop(0); // על מנת שהמסיח יהיו נטרליים בלי איקס ווי
		
				if (myGame[1][rnd][0] == "text") { // יצירת תווית "תשובה" למסיחים
					var answerTxt = new createjs.Text();
					answerTxt.text = myGame[1][rnd][1];
					AnswerTest.addChild(answerTxt);
					answerTxt.x = 200;
					answerTxt.y = 50;
					answerTxt.lineWidth = 110;
					answerTxt.textAlign = "right";
					answerTxt.font = "30px Rubik";
		
					if (mychoice == 1) {// יצירה של תווית למסיח הארוך והקטנת הכתב
						if (myGame[1][rnd] == myGame[1][2]) {
							if (myGame[1][2][0] == "text") {
								answerTxt.text = myGame[1][2][1];
								answerTxt.textAlign = "right";
								answerTxt.font = "15px Rubik";
								answerTxt.x = 200;
								answerTxt.y = 50;
								answerTxt.lineWidth = 110;
		
							}
						}
					} else {// יצירה של תווית למסיח הארוך והקטנת הכתב
						if (myGame[1][rnd] == myGame[1][15]) {
							if (myGame[1][15][0] == "text") {
								answerTxt.text = myGame[1][15][1];
								answerTxt.textAlign = "right";
								answerTxt.font = "15px Rubik";
								answerTxt.x = 200;
								answerTxt.y = 50;
								answerTxt.lineWidth = 110;
							}
						}
		
		
					}
		
		
		
				} else {// יצירה של תמונה על המסיח
		
					var pic = new myGame[1][rnd][1]();
					AnswerTest.addChild(pic);
					pic.x = 85;
					pic.y = 60;
		
				}
		
			}
			createjs.Ticker.paused = false;// הפעלת הטיקר לתזוזתה של המסיח
		}
		
		
		//-------------------------------פונקציה להזזת הדג והגברת מהירות המסיחים----------------------------------------//
		
		function fishMove(evt) {
			clearInterval(AnswerInterval); // הסרת האינטרוול של יצירת המסיחים
			AnswerInterval = setInterval(AnswerInter, IntervalSpeed); // יצירה של אינטרוול להאצת המסיחים 
			//קריאה לדג
			myFishi = stage.getChildByName("myFish");
		
			//חץ ימינה
			if (evt.keyCode == 39) {
				if (AnswerMove < 6) {
					AnswerMove += 2;
					pressCounter++;
					//משתנה למד מהירות
					if (pressCounter == 0) {
						stage.getChildByName("speedMeter").gotoAndStop(0);
					}
					if (pressCounter == 1) {
						stage.getChildByName("speedMeter").gotoAndStop(2);
					}
		
					if (pressCounter == 2) {
						stage.getChildByName("speedMeter").gotoAndStop(4);
					}
		
				}
		
				if (IntervalSpeed > 1200) { // משתנה להגברת והנמכת רצב האינטרוול על מנת להתאים למהירות שהמשתמש בוחר
					IntervalSpeed -= 700;
				}
			}
		
			//חץ שמאלה
			if (evt.keyCode == 37) {
				if (AnswerMove > 2) {
					AnswerMove -= 2;
					// משתנה למד מהירות
					pressCounter--;
		
					if (pressCounter == 2) {
						stage.getChildByName("speedMeter").gotoAndStop(4);
					}
					if (pressCounter == 1) {
						stage.getChildByName("speedMeter").gotoAndStop(2);
					}
					if (pressCounter == 0) {
						stage.getChildByName("speedMeter").gotoAndStop(0);
					}
					if (pressCounter < 0) {
						pressCounter = 0;
					}
					
		
				}
				if (IntervalSpeed < 4500) {
					IntervalSpeed += 700;
				}
				
			}
		
			//חץ למעלה
			if (evt.keyCode == 38) {
				// בדיקה שהדג לא יצא מהגבולות
				if (self.myFishi.y >= 120) {
					self.myFishi.y -= 5;
				}
			}
		
			//חץ למטה
			if (evt.keyCode == 40) {
				// בדיקה שהדג לא יצא מהגבולות
				if (self.myFishi.y <= 490) {
					self.myFishi.y += 5;
				}
			}
		
			//רווח
			if (evt.keyCode == 32) {
				for (f = 0; f < myAnswerArray.length; f++) {
					var mosheFish = stage.getChildByName("myFish");// קריאה לדג
					var foodname = (myAnswerArray[f].name).slice(10);// לחתוך את המספר משם המסיח
					if (intersect(mosheFish, myAnswerArray[f])) {// ביקה האם היתה פגיעה
		
						myHit = myAnswerArray[f];// משתנה לשמירת המסיח
						
						if (myGame[1][foodname][2] == true) { // בדיקה האם פגע בתשובה נכונה
							myGame[1][foodname][4] = true; // שינוי האת במערך כאשר היתה פגיעה האם הוגרל א לא
							myGame[1][foodname][6] = 1; //האם הפריט זוהה כנכון
		
							correctSound = createjs.Sound.play("correct"); //סאונד לתשובה נכונה
		
							myPosition += barPosition; //העלת בר ההתקדמות
							stage.getChildByName("progressBAR").gotoAndStop(myPosition); // העלת בר ההתקדמות
							stage.getChildByName(myHit.name).gotoAndStop(1); //יצירת וי ליד התשובה הנכונה
							correctAns++; // העלת המשתנה לחישוב הציון
		
							setTimeout(function () {// טיים אוט להורדת המסיח
								myHit.parent.removeChild(myHit);
							}, 1000); // זמן במילי שניות
						} else if (myGame[1][foodname][2] == false) {// בדיקה האם היתה פגיעה במסיח לא נכון
							incorrectSound = createjs.Sound.play("incorrect"); //סאונד לתשובה לא נכונה
		
							wrongAns++; // העלת המונה לתשובות הלא נכונות לחישוב הציון
							stage.getChildByName(myHit.name).gotoAndStop(2); //יצירת וי ליד התשובה הנכונה
						}
						if (correctAns == TrueANScounter) // בדיקה כמה תשובות נכונות נענו אם הכל התשובות נענו המשחק נגמר
		
						{
							setTimeout(function () {
								endGame();
		
							}, 1000);
		
						}
					}
				}
			}
		}
		
		
		//טיקר לתזוזת המסיחים
		function AnswerTicker() {
			if (createjs.Ticker.paused == false) {
				for (f = 0; f < myAnswerArray.length; f++) {
					var myRNDANS = myAnswerArray[f];
					myRNDANS.x -= AnswerMove; // על מנת שהמסיח יזוז בקצב מוגדר מראש
		
					var fName = (myRNDANS.name).slice(10); // חיתוך של המספר מתוך שם המסיח
		
					if (myGame[1][fName][6] == 0) { // בסדיקה שהמסיח לא נענה
						if (myGame[1][fName][2] == true) { // אם המיח נכון
							
							if (myRNDANS.x == -2) { // אם המסיח עבר את הבמה
		
								stage.removeChild(myRNDANS); // הסרת המסיח
								stage.update(myRNDANS);
								//זיהוי פריט נכון כלא נכון
								myGame[1][fName][5] = true; 
			
		
								setTimeout(function () {// טיים אוט ליצירת אנימצית סרטן לאזהרת המשתמש כי הוא פספס תשובה נכונה
		
									var crab = new lib.mrsCarb();
									crab.x = 5;
									crab.y = 600;
									crab.name = "crab"
									stage.addChild(crab);
								}, 3000); // זמן במילי שניות
		
								stage.removeChild(stage.getChildByName("crab"));
								stage.getChildByName("crab").gotoAndStop(0);
		
								wrongAns++; // משתנה לחישוב הציון
		
							}
		
						}
						
		
						if (AnswerMove == 4) { // בודק האם תשובה נכונה עברה את הבמה - נעשה כמה פעמים כיוון שהמסיח עבר את הבמה באיקס שונה עקב שינויי מהירויות
							if (myGame[1][fName][2] == true) {
								if (myRNDANS.x == -4) {
									stage.removeChild(myRNDANS);
									//זיהוי פריט נכון כלא נכון
									myGame[1][fName][5] = true;
									// אנימציה של סרטן!!
		
									setTimeout(function () {
		
										var crab = new lib.mrsCarb();
										crab.x = 5;
										crab.y = 600;
										crab.name = "crab"
										crab.gotoAndStop(15);
										stage.addChild(crab);
									}, 3000); // זמן במילי שניות
		
									stage.removeChild(stage.getChildByName("crab"));
									stage.getChildByName("crab").gotoAndStop(0);
									wrongAns++;
									
		
								}
							}
						}
		
						if (AnswerMove == 6) {
							if (myGame[1][fName][2] == true) {
							
								if (myRNDANS.x == -10 ) {
									stage.removeChild(myRNDANS);
									//זיהוי פריט נכון כלא נכון
									myGame[1][fName][5] = true;
								//איניצית סרטן
									setTimeout(function () {
		
										var crab = new lib.mrsCarb();
										crab.x = 5;
										crab.y = 600;
										crab.name = "crab"
										crab.gotoAndStop(15);
										stage.addChild(crab);
									}, 3000); // זמן במילי שניות
		
									stage.removeChild(stage.getChildByName("crab"));
									stage.getChildByName("crab").gotoAndStop(0);
									wrongAns++;
									console.log(wrongAns + "  missed ");
									console.log(AnswerMove + " AnswerMove ")
		
		
		
		
								}
							}
						}
					}
		
					if (myRNDANS.x == 0) {
						stage.removeChild(myRNDANS); // הסרת המסיח מהבמה כאשר עובר את ה0
					}
				}
			}
		}
		
		
		//-------------------------------------------------------------------------//
		//פונקציה לעצירת המוזיקה
		
		function musicFUNC() {
		
			if (musicBTNclick == false) {
				playSound = createjs.Sound.stop("playSound");
				stage.getChildByName("musicBTN").gotoAndStop(1);
				musicBTNclick = true;
			} else {
				playSound = createjs.Sound.play("playSound");
				stage.getChildByName("musicBTN").gotoAndStop(0);
				musicBTNclick = false;
			}
		
		}
		
		
		//------------------------------------------------------------------------//
		//פונקיה לחישוב זמן המשחק. במידה ויש  תשובות נכונות, המחשק נגמר והזמן נעצר
		
		
		
		function gameTimeFunc() {
			secCounter++;
			if (secCounter == 60) {
				secCounter = 0;
				minCounter++;
			}
		
			var verifyTime; //משתנה לפונקציה פרמטירת שבודקת האם צריך להוסיף 0
			checkTime(verifyTime);
		
		
		}
		
		//אם וערך המספר שהתקבל קטן מעשר, ייכתב אפס לפניו
		function checkTime(x) {
			if (x < 10) { // add zero in front of numbers < 10
				x = "0" + x;
			}
			return x;
		}
		
		
		//--------------------------------פונקציה להשהיית המשחק----------------------------------------//
		
		function pauseFunc() {
		
			musicBTNclick = false; //הפעלת המוזיקה
		
		
			// העלאת מסך השהייה
			var pauseScreen = new lib.pauseScreen();
			pauseScreen.x = stageWidth / 2;
			pauseScreen.y = 40;
			pauseScreen.name = "pausedS";
			stage.addChild(pauseScreen);
		
			//טקסט השהייה
			var StopTXT = new createjs.Text();
			StopTXT.text = "המשחק בהשהייה... אבל משה עדיין רעב  \n להמשך המשחק לחץ על המשך";
			StopTXT.textAlign = "right";
			StopTXT.font = "50px Rubik";
			StopTXT.x = 400;
			StopTXT.y = 200;
			pauseScreen.addChild(StopTXT);
		
			//כפתור המשך
			var startAgainBTN = new lib.startAgainBTN();
			startAgainBTN.x = 50;
			startAgainBTN.y = 400;
			startAgainBTN.addEventListener("click", continueFunc);
			pauseScreen.addChild(startAgainBTN);
		
			// טקסט לכפתור
			var btnTXT = new createjs.Text();
			btnTXT.text = "המשך";
			btnTXT.textAlign = "right";
			btnTXT.font = "40px Rubik";
			btnTXT.x = 850;
			btnTXT.y = 480;
			btnTXT.name = "btnTXT"
			stage.addChild(btnTXT);
		
			//עצירת זמן המשחק
			clearInterval(gameTime);
			//עצירת היווצרות המסיחים
			clearInterval(AnswerInterval);
			//עצירת הטיקר
			createjs.Ticker.paused = true;
			//העלמת הדג
			stage.getChildByName("myFish").visible = false;
			stage.getChildByName("questionsTXT").visible = false; // העלמת הטקסט
		
			stage.getChildByName("backGround").gotoAndStop(502); // עצירת הרקע
			//העלמת המסיחים
			for (t = 0; t < myAnswerArray.length; t++) {
		
				myAnswerArray[t].visible = false;
			}
		}
		
		//--------------------------------פונקציה להמשך המשחק----------------------------------------//
		
		function continueFunc() {
		
			stage.removeChild(stage.getChildByName("pausedS"));// הסרת הכפתורים 
			stage.removeChild(stage.getChildByName("continueBTN"));
			stage.removeChild(stage.getChildByName("btnTXT"));
			gameTime = setInterval(gameTimeFunc, 1000); // החזרה של הזמן
			AnswerInterval = setInterval(AnswerInter, IntervalSpeed); //החזרת האינטרוול
			createjs.Ticker.paused = false; // עצירת הטיקר
			stage.getChildByName("myFish").visible = true; // החזרת הדג
			stage.getChildByName("questionsTXT").visible = true; // החזרת השאלה
		
			for (t = 0; t < myAnswerArray.length; t++) { // החזרת נראות המסחים
		
				myAnswerArray[t].visible = true;
			}
			stage.getChildByName("backGround").gotoAndPlay(2); // החזרת תנועת הרקע
		
			playSound = createjs.Sound.play("soundTrack"); // החזרת המוזיקה
		}
		
		
		
		//---------------------פונקציה לסיום המשחק ומשוב מאבחן------------------------------------//
		
		
		function endGame() {
		// הסרת הפריטים מהמסך
			stage.removeChild(stage.getChildByName("myFish"));
			stage.getChildByName("backGround").gotoAndStop(0);
			stage.removeChild(stage.getChildByName("questionsTXT"));
			stage.removeChild(stage.getChildByName("questionTB"));
			stage.removeChild(stage.getChildByName("speedMeter"));
			stage.removeChild(stage.getChildByName("progressBAR"));
			stage.removeChild(stage.getChildByName("pauseBTN"));
			stage.removeChild(stage.getChildByName("musicBTN"));
		
		
			//משתנה לחישוב ציון
			score = 100 * (1 - wrongAns / myGame[1].length);
			// במידה והציון שלילי, שיציג 0
			if (score < 0) {
				score = 0;
			}
		
		
			//הורדת אובייקטים ועצירת זמן המשחק ואינטרוול המסיחים
			clearInterval(gameTimeFunc);
			clearInterval(AnswerInterval);
			stage.removeChild(stage.getChildByName("myFish"));
			stage.removeChild(stage.getChildByName("questionTB"));
		
			if (mychoice == 2) { // בדיקה באיזה משחק נבחר
				GameName = "ארצות באירופה";
			} else if (mychoice == 1) {
		
				GameName = "המצאות מהמאה ה-19";
			}
		
			var endScreen = new lib.EndSreen(); // העלת מסך הסיכום
			endScreen.x = 10;
			endScreen.y = 1;
			endScreen.name = "endScreen";
			stage.addChild(endScreen);
		
			//טקסט שם המשחק
			var gameNameTXT = new createjs.Text();
			gameNameTXT.text = "שיחקת במשחק: " + GameName;
			gameNameTXT.textAlign = "right";
			gameNameTXT.font = "50px Rubik";
			gameNameTXT.x = (stageWidth / 2) + 350;
			gameNameTXT.y = 60;
			endScreen.addChild(gameNameTXT);
		
			//טקסט משוב חיוני
			var FBTXT = new createjs.Text();
			FBTXT.text = "כל הכבוד! משה שבע!";
			FBTXT.textAlign = "right";
			FBTXT.font = "30px Rubik";
			FBTXT.x = (stageWidth / 2) + 100;
			FBTXT.y = 125;
			endScreen.addChild(FBTXT);
		
			//כותרת מסיחים נכונים
			var trueAnsLine = new createjs.Text();
			trueAnsLine.text = "אפשרויות נכונות";
			trueAnsLine.textAlign = "right";
			trueAnsLine.font = "30px Rubik";
			trueAnsLine.x = (stageWidth / 2) - 200;
			trueAnsLine.color = "green";
			trueAnsLine.y = 250;
			endScreen.addChild(trueAnsLine);
		
		
			//כותרת מסיחים שגויים
			var wrongAnsLine = new createjs.Text();
			wrongAnsLine.text = "אפשרויות לא נכונות";
			wrongAnsLine.textAlign = "right";
			wrongAnsLine.font = "30px Rubik";
			wrongAnsLine.color = "red";
			wrongAnsLine.x = (stageWidth / 2) + 400;
			wrongAnsLine.y = 250;
			endScreen.addChild(wrongAnsLine);
		
			//טסקסט לציון
			var ScoreTXT = new createjs.Text();
			ScoreTXT.text = "ציון: " + score;
			ScoreTXT.textAlign = "right";
			ScoreTXT.font = "30px Rubik";
			ScoreTXT.x = (stageWidth / 2) + 330;
			ScoreTXT.y = 185;
			endScreen.addChild(ScoreTXT);
		
			// טקסט לכמות השגיאות
			var ScoreTXT = new createjs.Text();
			ScoreTXT.text = "כמות שגיאות: " + wrongAns;
			ScoreTXT.textAlign = "right";
			ScoreTXT.font = "30px Rubik";
			ScoreTXT.x = (stageWidth / 2) + 100;
			ScoreTXT.y = 185;
			endScreen.addChild(ScoreTXT);
		
			//טקסט לזמן
			var TimeTXT = new createjs.Text();
			TimeTXT.text = "זמן המשחק: " + checkTime(minCounter) + ":" + checkTime(secCounter);
			TimeTXT.textAlign = "right";
			TimeTXT.font = "30px Rubik";
			TimeTXT.x = (stageWidth / 2) - 200;
			TimeTXT.y = 185;
			endScreen.addChild(TimeTXT);
		
			// טקסט לסימון בכוכבית
			var StarTXT = new createjs.Text();
			StarTXT.text = "* תשובות שלא זוהו בפעם הראשונה";
			StarTXT.textAlign = "right";
			StarTXT.color = "red"
			StarTXT.font = "15px Rubik";
			StarTXT.x = (stageWidth / 2) + 100;
			StarTXT.y = 600;
			endScreen.addChild(StarTXT);
		
			// יצירת קו הפרדה בין התשובות הנכונות/לא נכונות
			var separateLine = new lib.separateLine();
			separateLine.x = 650;
			separateLine.y = 370;
			separateLine.name = "separateLine";
			stage.addChild(separateLine);
			
			// יצירה של הריבוע הלבן 
		
			var c = 0;
			var startX = 100;
			//var startY = 360;
			var jump = 110;
			for (k = 0; k < myGame[1].length; k++) {
				//var mys = new lib.whiteBox();
				var mys;
				if (myGame[1][k][5] == true) {
					mys = new lib.redBox(); // אם המשתמש פספס תשובה אז הריבוע יהיה מסומן 
				} else {
					mys = new lib.whiteBox();
				}
				stage.addChild(mys);
				if (k < 5) {
					mys.x = startX + (110 * k);
					mys.y = 360;
				} else if (k < 10) {
					mys.x = startX + (110 * c);
					mys.y = 470;
					c++;
				} else if (k < 15) {
					mys.x = startX + (110 * k) - 530;
					mys.y = 360;
				} else {
					mys.x = startX + (110 * c) + 20;
					mys.y = 470;
					c++;
				}
		
				if (myGame[1][k][0] == "Pic") { // השמת תמונה או טקסט על הריבוע הלבן
					var img = new(myGame[1][k][1]);
					img.scale = 0.6;
					mys.addChild(img);
				}
				if (myGame[1][k][0] == "text") {
					var txt = new createjs.Text();
					txt.textAlign = "right";
					txt.font = "20px Rubik";
					txt.text = myGame[1][k][1];
					txt.x = 85;
					txt.lineWidth = 90;
					//txt.lineHeight=90;
					mys.addChild(txt);
					if (mychoice == 1) {
						if (myGame[1][k] == myGame[1][2]) {
							if (myGame[1][2][0] == "text") {
								txt.text = myGame[1][k][1];
								txt.textAlign = "right";
								txt.font = "13px Rubik";
								txt.x = 85;
								txt.lineWidth = 90;
							}
						}
					} else {
						if (myGame[1][k] == myGame[1][15]) {
							if (myGame[1][15][0] == "text") {
								txt.text = myGame[1][k][1];
								txt.textAlign = "right";
								txt.font = "13px Rubik";
								txt.x = 85;
								txt.lineWidth = 90;
							}
						}
		
		
					}
		
		
				}
		
			}
		
		
			//עצירת הטיקר
			createjs.Ticker.paused = true;
		
		
		
			//כפתןר להתחלת משחק חדש
			var newGameBTN = new lib.startAgainBTN();
			stage.addChild(newGameBTN);
			newGameBTN.x = (stageWidth / 2) - 360;
			newGameBTN.y = 550;
			newGameBTN.addEventListener("click", newGameFunc);
		
			//כפתור לסיום משחק
			var finishGameBTN = new lib.startAgainBTN();
			stage.addChild(finishGameBTN);
			finishGameBTN.x = (stageWidth / 2) + 150;
			finishGameBTN.y = 550;
			finishGameBTN.addEventListener("click", finishGameFunc);
		
			//תיבת טקסט לכפתור הסיום
		
			var endTXT = new createjs.Text();
			endTXT.text = "סיים משחק";
			endTXT.textAlign = "right";
			endTXT.font = "30px Rubik";
			endTXT.x = (stageWidth / 2) + 325;
			endTXT.y = 600;
			stage.addChild(endTXT);
		
			//תיבת טקסט להתחל משחק חדש
		
			var startTXT = new createjs.Text();
			startTXT.text = "למשחק חדש";
			startTXT.textAlign = "right";
			startTXT.font = "30px Rubik";
			startTXT.x = (stageWidth / 2) - 175;
			startTXT.y = 600;
			stage.addChild(startTXT);
		
		}
		
		//---------------------פונקציה למשחק חדש------------------------------------//
		
		function newGameFunc() {
			// איפוס המשתנים
		
			foodYrnd = 0;
			lastLocation;
			//הבחירה של הקומבו
			mychoice = 0;
			maxSpeed = 10;
		
			//-----------------------------משתנים לבר התקדמות--------------------------------//
			barPosition = 0;
			myPosition = 0;
			TrueANScounter = 0;
			//----------------------//
			pressCounter = 0; // משתנה לבר התקדמות
		
			// תנועה של המסיח
			AnswerMove = 0;
		
			//מהירות האינטרוול
			IntervalSpeed = 4500;
		
			//משתנים לשמירת כמות התשובות הנכונות והלא נכונות שהמשתמש בחר
			correctAns = 0;
			wrongAns = 0;
		
			// מערך שמכיל את המסיחים
			myAnswerArray = [];
		
			// המיקום של המסיחים במערך המסיחים 
			counterAnswer = 0;
		
		
			// משתנה ששומר את המספר הרנדומלי האחרון על מנת שלא לוודא שאין הגרלה כפולה
			lastrnd;
			rnd;
			//מערך המכיל את המספרים הרנדומלים של המסיחים
			MyRNDarray = [];
		
			//המערך של כל המשחק
			//myGame = [];
		
			//משתנה לשמירת הזמן של המחשק
			secCounter = 0; // מונה של השניות
			minCounter = 0; // מונה של הדקות
		
			//משתנה לכמות תשובות נכונות
			trueAnswers = 10;
		
			counter = 0;
		
			counterRND = 0;
		
			score = 0;
		
			for (l = 0; l < myGame[1].length; l++) {
				myGame[1][l][4] = false;
				myGame[1][l][5] = false;
				myGame[1][l][6] = 0;
			}
		
			console.log(myGame[1]);
			startGame();
		
		}
		
		//---------------------פונקציה לסיום המשחק הנוכחי------------------------------------//
		
		function finishGameFunc() {
			// איפוס המשתנים
		
			foodYrnd = 0;
			lastLocation;
			//הבחירה של הקומבו
			mychoice = 0;
			maxSpeed = 10;
		
			//-----------------------------משתנים לבר התקדמות--------------------------------//
			barPosition = 0;
			myPosition = 0;
			TrueANScounter = 0;
			//----------------------//
			pressCounter = 0; // משתנה לבר התקדמות
		
			// תנועה של המסיח
			AnswerMove = 0;
		
			//מהירות האינטרוול
			IntervalSpeed = 4500;
		
			//משתנים לשמירת כמות התשובות הנכונות והלא נכונות שהמשתמש בחר
			correctAns = 0;
			wrongAns = 0;
		
			// מערך שמכיל את המסיחים
			myAnswerArray = [];
		
			// המיקום של המסיחים במערך המסיחים 
			counterAnswer = 0;
		
		
			// משתנה ששומר את המספר הרנדומלי האחרון על מנת שלא לוודא שאין הגרלה כפולה
			lastrnd;
			rnd;
			//מערך המכיל את המספרים הרנדומלים של המסיחים
			MyRNDarray = [];
		
			//המערך של כל המשחק
			//myGame = [];
		
			//משתנה לשמירת הזמן של המחשק
			secCounter = 0; // מונה של השניות
			minCounter = 0; // מונה של הדקות
		
			//משתנה לכמות תשובות נכונות
			trueAnswers = 10;
		
			counter = 0;
		
			counterRND = 0;
		
			score = 0;
		
		
			for (l = 0; l < myGame[1].length; l++) {
				myGame[1][l][4] = false;
				myGame[1][l][5] = false;
				myGame[1][l][6] = 0;
			}
			myGame = [];
			openningSrcreenFunc();
			forcomboFunc();
		}
		
		//---------------------// פונקציה לבדיקת פגיעה בין 2 אוביקטים------------------------------------//
		
		
		function intersect(obj1, obj2) {
			var obj1W = obj1.nominalBounds;
			var obj2W = obj2.nominalBounds;
			//console.log(obj1.nominalBounds);
		
		
			if (obj1.x + (obj1W.width / 2) <= obj2.x - (obj2W.width / 2)) {
				return false;
			} else if (obj1.y + (obj1W.height / 2) <= obj2.y - (obj2W.height / 2)) {
				return false;
			} else if (obj1.x - (obj1W.width / 2) > obj2.x + (obj2W.width / 2)) {
				return false;
			} else if (obj1.y - (obj1W.height / 2) > obj2.y + (obj2W.height / 2)) {
				return false;
			}
			return true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiVCWQAAh8BYhXQBXhYB8AA");
	this.shape.setTransform(186.2,139.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(810.2,483.8,-608,-328);
// library properties:
lib.properties = {
	id: 'D6121081ADF0354D90C6E124D57038E7',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/backGroundNEW_רקע.jpg?1582716563806", id:"backGroundNEW_רקע"},
		{src:"images/mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_.png?1582716563285", id:"mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_"},
		{src:"images/mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2.png?1582716563286", id:"mosheTheFish_OriAlon_LiatBenYosef_MayElazar_atlas_2"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1582716563806", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1582716563806", id:"sdk/anwidget.js"},
		{src:"components/ui/src/combobox.js?1582716563806", id:"an.ComboBox"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D6121081ADF0354D90C6E124D57038E7'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	if((this.stage == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element && this._element._attached) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	this._lastAddedFrame = this.parent.currentFrame;
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;