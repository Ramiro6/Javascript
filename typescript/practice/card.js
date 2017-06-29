"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var db_1 = require("./db");
var Player = (function () {
    function Player(data) {
        this.database = 0;
        this.compu1 = 0;
        this.player = 0;
        this.database = data;
        var compu1 = data[Math.round(Math.floor(Math.random() * (11 - 0)) + 0)];
        var player = data[Math.round(Math.floor(Math.random() * (11 - 0)) + 0)];
        // console.log(data[Math.round(Math.floor(Math.random() * (11 - 0)) + 0)])
        // console.log(player)
    }
    Player.prototype.wild = function () {
    };
    return Player;
}());
var Compu = (function (_super) {
    __extends(Compu, _super);
    function Compu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Compu;
}(Player));
// console.log(db[Math.round(Math.floor(Math.random() * (11 - 0)) + 0)])
var Play = new Player(db_1.db);
// let Pc = new Compu(db)
//
// let resutaldo = Play > Pc
