import Dinero from 'dinero.js';

interface MoneyOptions {
  amount?: number;
  currency?: Dinero.Currency;
  precision?: number;
}

export class Money implements Dinero.Dinero {
  readonly #money: Dinero.Dinero;

  constructor(opts: MoneyOptions) {
    this.#money = Dinero(opts);
  }

  getAmount = this.#money.getAmount;
  getCurrency = this.#money.getCurrency;
  getLocale = this.#money.getLocale;
  setLocale = this.#money.setLocale;
  getPrecision = this.#money.getPrecision;
  convertPrecision = this.#money.convertPrecision;
  add = this.#money.add;
  subtract = this.#money.subtract;
  multiply = this.#money.multiply;
  divide = this.#money.divide;
  percentage = this.#money.percentage;
  allocate = this.#money.allocate;
  convert = this.#money.convert;
  equalsTo = this.#money.equalsTo;
  lessThan = this.#money.lessThan;
  lessThanOrEqual = this.#money.lessThanOrEqual;
  greaterThan = this.#money.greaterThan;
  greaterThanOrEqual = this.#money.greaterThanOrEqual;
  isZero = this.#money.isZero;
  isPositive = this.#money.isPositive;
  isNegative = this.#money.isNegative;
  hasSubUnits = this.#money.hasSubUnits;
  hasCents = this.#money.hasCents;
  hasSameCurrency = this.#money.hasSameCurrency;
  hasSameAmount = this.#money.hasSameAmount;
  toFormat = this.#money.toFormat;
  toUnit = this.#money.toUnit;
  toRoundedUnit = this.#money.toRoundedUnit;
  toObject = this.#money.toObject;
  toJson = this.#money.toJson;
}
