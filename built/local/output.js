var Clock = (function () {
    function Clock() {
    }
    Clock.prototype.move = function () { console.log('currentTime'); };
    return Clock;
}());
var clock = new Clock();
clock.move();
