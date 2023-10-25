function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import classNames from 'classnames';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { useCardInit } from "../hooks";
import "./index.less";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var classPrefix = 'scratch-card';
var defaultProps = {
  width: 240,
  height: 120,
  coverColor: '#ddd'
};
var ScratchCard = /*#__PURE__*/forwardRef(function (p, ref) {
  var _props$classNames, _props$classNames2, _props$classNames3;
  var props = _objectSpread(_objectSpread({}, defaultProps), p);
  var canvasRef = useRef(null);
  var _useCardInit = useCardInit({
      canvasRef: canvasRef,
      width: props.width,
      height: props.height,
      coverColor: props.coverColor,
      coverImg: props.coverImg
    }),
    _useCardInit2 = _slicedToArray(_useCardInit, 2),
    initDone = _useCardInit2[1];
  useImperativeHandle(ref, function () {
    return {
      canvasContainer: canvasRef.current,
      initDone: initDone
    };
  });
  return /*#__PURE__*/_jsxs("div", {
    className: classNames(classPrefix, props === null || props === void 0 || (_props$classNames = props.classNames) === null || _props$classNames === void 0 ? void 0 : _props$classNames.root),
    style: {
      width: props.width,
      height: props.height
    },
    children: [/*#__PURE__*/_jsx("canvas", {
      ref: canvasRef,
      className: classNames("".concat(classPrefix, "-mask"), (_props$classNames2 = props.classNames) === null || _props$classNames2 === void 0 ? void 0 : _props$classNames2.mask)
    }), /*#__PURE__*/_jsx("div", {
      className: classNames("".concat(classPrefix, "-container"), (_props$classNames3 = props.classNames) === null || _props$classNames3 === void 0 ? void 0 : _props$classNames3.body),
      style: {
        width: props.width,
        height: props.height
      },
      children: initDone && props.children
    })]
  });
});
export default ScratchCard;