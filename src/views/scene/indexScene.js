var IndexScene = cc.Scene.extend({
    onEnter: function () {

        this._super();
        //var pLayer = new lobbyTableLayer({});
        //this.addChild(pLayer);
    },

    ctor: function () {
        this._super();

        cc.spriteFrameCache.addSpriteFrames(res.index_plist);
        cc.spriteFrameCache.addSpriteFrames(res.avatar_plist);

        //header
        var headerLayer = new HeaderLayer({lobby: undefined});
        this.addChild(headerLayer, 1);


        var indexLayer = new IndexLayer();
        this.addChild(indexLayer);

    },

    onExit: function () {
        this._super();

    }

});


var IndexLayer = cc.Layer.extend({
    sprite:null,
    ctor: function () {
        this._super();

        var winSize = cc.director.getWinSize();

        //background
        var bg = new cc.Sprite("#common_bg_beijing.png");
        bg.setPosition(winSize.width/2, winSize.height/2);
        bg.scale = ZGZ.SCALE * 10;
        this.addChild(bg);


        this.init();
        return ;

        var normal = new cc.Sprite("#index_mianban_05.png", cc.rect(0, 0, 126, 138));
        var selected = new cc.Sprite("#index_mianban_05.png", cc.rect(0, 33, 126, 138));
        var disabled = new cc.Sprite("#index_mianban_05.png", cc.rect(0, 33*2, 126, 138));

        var normal2 = new cc.Sprite("#index_mianban_05.png", cc.rect(0, 0, 126, 138));
        var selected2 = new cc.Sprite("#index_mianban_05.png", cc.rect(0, 33, 126, 138));
        var disabled2 = new cc.Sprite("#index_mianban_05.png", cc.rect(0, 33*2, 126, 138));

        //五人场
        var lobbyOf5 = new cc.MenuItemSprite(normal, selected, disabled, this.onMenuCallback, this);
        //TODO need new icon
        //this.lobbyOf5Icon = new cc.Sprite("#renwu_02.png");
        //this.lobbyOf5Icon.scale = 0.9;
        //this.lobbyOf5Icon.setPosition(lobbyOf5.width/2, lobbyOf5.height/2+30);
        //lobbyOf5.addChild(this.lobbyOf5Icon);
        lobbyOf5.setScale(0.75);


        //label
        var labelBg = new cc.Sprite("#index_mianban_08.png");
        labelBg.setPosition(lobbyOf5.width/2, lobbyOf5.height/2 - 110);
        labelBg.scale = 0.8;
        var label = new cc.LabelTTF("五人场", "Arial", 30);
        label.color = cc.color.YELLOW;
        label.setPosition(labelBg.width/2, labelBg.height/2+25);
        labelBg.addChild(label);

        this.lobbyOf5Online = new cc.LabelTTF("在线:9999", "Arial", 24);
        this.lobbyOf5Online.color = cc.color.YELLOW;
        this.lobbyOf5Online.setPosition(labelBg.width/2, labelBg.height/2-15);
        labelBg.addChild(this.lobbyOf5Online);

        lobbyOf5.addChild(labelBg);

        //七人场
        //var lobbyOf7 = new cc.MenuItemSprite(normal2, selected2, disabled2, this.onMenuCallback2, this);
        //lobbyOf7.setScale(0.75);
        //this.lobbyOf7Icon = new cc.Sprite("#renwu_03.png");
        //this.lobbyOf7Icon.scale = 0.9;
        //this.lobbyOf7Icon.setPosition(lobbyOf7.width/2, lobbyOf7.height/2+30);
        //lobbyOf7.addChild(this.lobbyOf7Icon);
        //
        ////label
        //labelBg = new cc.Sprite("#mianban_08.png");
        //labelBg.setPosition(lobbyOf7.width/2, lobbyOf7.height/2 - 110);
        //labelBg.scale = 0.8;
        //label = new cc.LabelTTF("七人场", "Arial", 30);
        //label.color = cc.color.YELLOW;
        //label.setPosition(labelBg.width/2, labelBg.height/2+25);
        //labelBg.addChild(label);
        //
        //this.lobbyOf7Online = new cc.LabelTTF("在线:9999", "Arial", 24);
        //this.lobbyOf7Online.color = cc.color.YELLOW;
        //this.lobbyOf7Online.setPosition(labelBg.width/2, labelBg.height/2-15);
        //labelBg.addChild(this.lobbyOf7Online);
        //
        //lobbyOf7.addChild(labelBg);

        //menu
        this.lobbyMenu = new cc.Menu(lobbyOf5);

        this.lobbyMenu.alignItemsHorizontallyWithPadding(40);
        this.lobbyMenu.x = winSize.width / 2 - 120;
        this.lobbyMenu.y = winSize.height / 2 - 30;


        //lobbyOf5.runAction(cc.moveBy(2, cc.p(10,0)).easing(cc.easeElasticOut(0.35)));
        //lobbyOf7.runAction(cc.moveBy(2, cc.p(25,0)).easing(cc.easeElasticOut(0.35)));

        this.addChild(this.lobbyMenu);


       // return true;
    },
    init:function () {
        console.log("---|---->init");
        var winSize = cc.director.getWinSize();
        this.addChild(new HornSprite());
        this.addChild(createIndexScrollLayer({width:winSize.width, height:300, x:0, y:0}), 100);
        //this.addChild(new createLobbyScrollLayer({width:winSize.width, height:300, x:0, y:0}), 100);
        //this.addChild(new createLobbyTableLayer({width:winSize.width, height:300, x:0, y:0, cwidth:winSize.width-20, cheight:40}), 100);
    },
    onMenuCallback: function () {
        this.lobbyMenu.enabled = false;
        //this.scheduleOnce(function () {
        //    this.lobbyMenu.enabled = true;
        //}, 2);
        this.onLobbyIconClicked(this.lobbyOf5Icon, 0);

    },
    onMenuCallback2: function () {
        this.lobbyMenu.enabled = false;
        this.scheduleOnce(function () {
            this.lobbyMenu.enabled = true;
        }, 2);
        this.onLobbyIconClicked(this.lobbyOf7Icon, 1);

    },

    onLobbyIconClicked: function(node, lobbyId)
    {
        GameController.enterLobby(lobbyId);
    },

    onEnter: function () {
        this._super();

    },

    onExit: function () {
        this._super();
        //cc.spriteFrameCache.removeSpriteFramesFromFile(res.common_png);
        //cc.spriteFrameCache.removeSpriteFramesFromFile(res.index_png);
    }
});