/**
 * @file 一些工具方法
 *
 * @author BIGCUI
 */

/**
 * Object顶层hasOwnProperty方法
 *
 * @const
 * @type {Function}
 */
const HAS_OWN_PROPERTY = Object.prototype.hasOwnProperty;

/**
 * Object顶层toString方法
 *
 * @const
 * @type {Function}
 */
const TO_STRING = Object.prototype.toString;

/**
 * 检测传入参数是否是对象
 *
 * @param {Object} obj 参数
 *
 * @return {boolean}
 */
export function isObject(obj) {
    return TO_STRING.call(obj) === '[object Object]';
}

/**
 * 检测传入参数是否是函数
 *
 * @param {Object} obj 参数
 *
 * @return {boolean}
 */
export function isFunction(obj) {
    return TO_STRING.call(obj) === '[object Function]';
}

/**
 * 检测传入参数是否是Null
 *
 * @param {Object} obj 参数
 *
 * @return {boolean}
 */
export function isNull(obj) {
    return TO_STRING.call(obj) === '[object Null]';
}

/**
 * 检测传入参数是否是undefined
 *
 * @param {Object} obj 参数
 *
 * @return {boolean}
 */
export function isUndefined(obj) {
    return TO_STRING.call(obj) === '[object Undefined]';
}

/**
 * 检测传入参数是否是boolean
 *
 * @param {Object} obj 参数
 *
 * @return {boolean}
 */
export function isBoolean(obj) {
    return TO_STRING.call(obj) === '[object Boolean]';
}

/**
 * 检测传入参数是否是number
 *
 * @param {Object} obj 参数
 *
 * @return {boolean}
 */
export function isNumber(obj) {
    return TO_STRING.call(obj) === '[object Number]';
}

/**
 * 检测传入参数是否是string
 *
 * @param {Object} obj 参数
 *
 * @return {boolean}
 */
export function isString(obj) {
    return TO_STRING.call(obj) === '[object String]';
}

/**
 * 检测传入参数是否是正则
 *
 * @param {Object} obj 参数
 *
 * @return {boolean}
 */
export function isRegExp(obj) {
    return TO_STRING.call(obj) === '[object RegExp]';
}

/**
 * 检测传入参数是否是dom
 *
 * @param {Object} node dom对象
 *
 * @return {boolean}
 */
export function isVNode(node) {
    return isObject(node) && HAS_OWN_PROPERTY.call(node, 'componentOptions');
}

/**
 * 将传入的参数合并为一个对象
 *
 * @param {...Object} args 参数数组
 *
 * @return {Object} 多个参数合并为一个的参数对象
 */
export function merge(...args) {
    let target = args[0];
    for (let i = 1, j = args.length; i < j; i++) {
        let source = args[i] || {};
        for (let prop in source) {
            if (source.hasOwnProperty(prop)) {
                let value = source[prop];
                if (value !== undefined) {
                    target[prop] = value;
                }
            }
        }
    }
    return target;
}