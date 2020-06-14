"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _money;
Object.defineProperty(exports, "__esModule", { value: true });
const Dinero = require("dinero.js");
class Money {
    constructor(opts) {
        _money.set(this, void 0);
        this.getAmount = __classPrivateFieldGet(this, _money).getAmount;
        this.getCurrency = __classPrivateFieldGet(this, _money).getCurrency;
        this.getLocale = __classPrivateFieldGet(this, _money).getLocale;
        this.setLocale = __classPrivateFieldGet(this, _money).setLocale;
        this.getPrecision = __classPrivateFieldGet(this, _money).getPrecision;
        this.convertPrecision = __classPrivateFieldGet(this, _money).convertPrecision;
        this.add = __classPrivateFieldGet(this, _money).add;
        this.subtract = __classPrivateFieldGet(this, _money).subtract;
        this.multiply = __classPrivateFieldGet(this, _money).multiply;
        this.divide = __classPrivateFieldGet(this, _money).divide;
        this.percentage = __classPrivateFieldGet(this, _money).percentage;
        this.allocate = __classPrivateFieldGet(this, _money).allocate;
        this.convert = __classPrivateFieldGet(this, _money).convert;
        this.equalsTo = __classPrivateFieldGet(this, _money).equalsTo;
        this.lessThan = __classPrivateFieldGet(this, _money).lessThan;
        this.lessThanOrEqual = __classPrivateFieldGet(this, _money).lessThanOrEqual;
        this.greaterThan = __classPrivateFieldGet(this, _money).greaterThan;
        this.greaterThanOrEqual = __classPrivateFieldGet(this, _money).greaterThanOrEqual;
        this.isZero = __classPrivateFieldGet(this, _money).isZero;
        this.isPositive = __classPrivateFieldGet(this, _money).isPositive;
        this.isNegative = __classPrivateFieldGet(this, _money).isNegative;
        this.hasSubUnits = __classPrivateFieldGet(this, _money).hasSubUnits;
        this.hasCents = __classPrivateFieldGet(this, _money).hasCents;
        this.hasSameCurrency = __classPrivateFieldGet(this, _money).hasSameCurrency;
        this.hasSameAmount = __classPrivateFieldGet(this, _money).hasSameAmount;
        this.toFormat = __classPrivateFieldGet(this, _money).toFormat;
        this.toUnit = __classPrivateFieldGet(this, _money).toUnit;
        this.toRoundedUnit = __classPrivateFieldGet(this, _money).toRoundedUnit;
        this.toObject = __classPrivateFieldGet(this, _money).toObject;
        this.toJSON = __classPrivateFieldGet(this, _money).toJSON;
        __classPrivateFieldSet(this, _money, Dinero(opts));
    }
}
exports.default = Money;
_money = new WeakMap();
//# sourceMappingURL=money.js.map