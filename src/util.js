var util = {
    // Colors
    COLOR_DARK: cc.color(51, 51, 51),
    EXPLODE_COLORS: [
        cc.color.WHITE,
        cc.color.RED,
        cc.color.ORANGE,
        cc.color.YELLOW,
        cc.color.BLUE,
        cc.color.GREEN,
        cc.color.MAGENTA,
        cc.color.GRAY
    ],

    // Icons
    ICON_HAND_O_UP: '',
    ICON_CIRCLE: '',

    // Events
    EVENT_JUMP: 'jump',
    EVENT_MOVE_GAME_LAYER: 'move_game_layer',
    EVENT_GAME_OVER: 'game_over',

    // Collisions
    COLLISION_BALL: 'ball',
    COLLISION_GAME_OVER_WALL: 'game_over_wall',
    COLLISION_DEBRIS: 'debris',

    // Others
    center: null,
    space: null,
    init: function () {
        var size = cc.winSize;
        this.center = cc.p(size.width * 0.5, size.height * 0.5);
    },
    icon: function (text, size) {
        if (size === undefined) {
            size = 50;
        }
        return new cc.LabelTTF(text, 'FontAwesome', size);
    },
    animate: function (prefix, count, interval) {
        var frames = [];
        for(var i = 1; i <= count; i++) {
            var frame = cc.spriteFrameCache.getSpriteFrame(prefix + i + '.png');
            frames.push(frame);
        }
        var ani = new cc.Animation(frames, interval);
        return cc.animate(ani);
    },
    addDebugNode: function () {
        this._debugNode = new cc.PhysicsDebugNode(util.space);
        this._debugNode.visible = true;
        this.addChild(this._debugNode);
    }
};