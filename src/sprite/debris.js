var Debris = cc.PhysicsSprite.extend({
    ctor: function (pos) {
        this._super();
        this.setAnchorPoint(0.5, 0.5);

        var radius = _.random(2, 10);
        var label = new cc.DrawNode();
        label.drawDot(cc.p(0, 0), radius, _.sample(util.EXPLODE_COLORS));
        this.addChild(label);

        var size = cc.size(radius, radius);
        var body = new cp.Body(1, cp.momentForCircle(1, 0, size.width / 2, cp.vzero));
        body.userData = this;
        util.space.addBody(body);

        var shape = new cp.CircleShape(body, size.width / 2, cp.vzero);
        shape.setCollisionType(util.COLLISION_DEBRIS);
        shape.setElasticity(1);
        util.space.addShape(shape);

        this.setBody(body);
        this.setIgnoreBodyRotation(true);

        this.setPosition(pos);
    },
    onEnter: function () {
        this._super();

        this.getBody().applyImpulse(cp.v(
            this.getRandomNumber() * 100, this.getRandomNumber() * 100
        ), cp.vzero);
    },
    getRandomNumber: function () {
        var min = 3,
            max = 10,
            a = _.random(-max, -min, true),
            b = _.random(min, max, true);
        return _.random(1) ? a : b;
    }
});