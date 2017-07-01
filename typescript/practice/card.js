"use strict";
exports.__esModule = true;
var db_1 = require("./db");
var Player = (function () {
    function Player(data) {
        this.database = 0;
        this.database = data;
        var compu1 = data[Math.round(Math.floor(Math.random() * (11 - 0)) + 0)];
        var player = data[Math.round(Math.floor(Math.random() * (11 - 0)) + 0)];
        if (compu1 > player) {
            console.log("You Win");
        }
        else {
            console.log("You loses");
        }
    }
    Player.prototype.wild = function () {
    };
    return Player;
}());
var play = new Player(db_1.db);
