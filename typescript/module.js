"use strict";
exports.__esModule = true;
exports.LikesCount = void 0;
var LikesCount = /** @class */ (function () {
    function LikesCount(_likesCount) {
        this._likesCount = _likesCount;
    }
    LikesCount.prototype.onClick = function () {
        this._likesCount++;
    };
    Object.defineProperty(LikesCount.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        enumerable: false,
        configurable: true
    });
    return LikesCount;
}());
exports.LikesCount = LikesCount;
