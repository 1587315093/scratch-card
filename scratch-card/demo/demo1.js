import { ScratchCard } from "../..";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var DemoBlock = function DemoBlock(props) {
  return /*#__PURE__*/_jsxs("div", {
    style: {
      marginTop: 20
    },
    children: [/*#__PURE__*/_jsx("p", {
      children: props.title
    }), props.children]
  });
};
var ChildrenElement = function ChildrenElement() {
  return /*#__PURE__*/_jsx("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    children: /*#__PURE__*/_jsx("span", {
      children: "\u606D\u559C\u60A8\uFF0C\u522E\u4E2D\u4E86\u6CD5\u62C9\u52295\u5143\u4EE3\u91D1\u52B5"
    })
  });
};
export default (function () {
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx(DemoBlock, {
      title: "\u57FA\u672C\u5C55\u793A\uFF0C\u4F1A\u6709\u9ED8\u8BA4\u5BBD\u9AD8\u548C\u989C\u8272",
      children: /*#__PURE__*/_jsx(ScratchCard, {})
    }), /*#__PURE__*/_jsx(DemoBlock, {
      title: "\u8BBE\u7F6E\u5BBD\u9AD8\u548C\u9EC4\u8272\u8499\u7248\u4E0E\u5E95\u90E8\u5143\u7D20",
      children: /*#__PURE__*/_jsx(ScratchCard, {
        classNames: {
          root: 'customize-root',
          mask: 'customize-mask',
          body: 'customize-body'
        },
        width: 260,
        height: 180,
        coverColor: "yellow",
        children: /*#__PURE__*/_jsx(ChildrenElement, {})
      })
    }), /*#__PURE__*/_jsx(DemoBlock, {
      title: "\u8BBE\u7F6E\u8499\u7248\u4E3A\u56FE\u7247",
      children: /*#__PURE__*/_jsx(ScratchCard, {
        width: 260,
        height: 180,
        coverImg: import("../../assets/react.jpeg"),
        children: /*#__PURE__*/_jsx(ChildrenElement, {})
      })
    })]
  });
});