(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("mathjax-toolbar", [], factory);
	else if(typeof exports === 'object')
		exports["mathjax-toolbar"] = factory();
	else
		root["mathjax-toolbar"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({

  name: 'mathjaxToolbar',

  props: ['contentId'],

  data() {
    return {
      // 颜色
      colors: [['红色', 'red', '{\\color{Red} ', '}'], ['绿色', 'green', '{\\color{Green} ', '}'], ['蓝色', 'blue', '{\\color{Blue} ', '}'], ['黄色', 'yellow', '{\\color{Yellow} ', '}'], ['青色', 'cyan', '{\\color{Cyan} ', '}'], ['紫色', 'purple', '{\\color{Purple} ', '}'], ['橙色', 'orange', '{\\color{Orange} ', '}'], ['金色', 'gold', '{\\color{Gold} ', '}']],

      types: {

        // 上下标
        subSuperScripts: {
          name: '上下标',
          data: [['x<sup>a</sup>', 'x^{a', '}'], ['x<sub>a</sub>', 'x_{a', '}'], ['x<sup>b</sup><sub style="margin-left: -7px">a</sub>', 'x_{a}^{b', '}'], ['x<sub>a</sub><sup>b</sup>', '{x_{a}}^{b', '}'], ['<sub style="margin-right: -7px">a</sub><sup>b</sup> &#67;', '_{a}^{b}\textrm{C', '}']]
        },

        // 希腊字母
        greekLetters: {
          name: '希腊字母',
          data: [['α', '\\alpha ', ''], ['β', '\\beta ', ''], ['γ', '\\gamma ', ''], ['δ', '\\delta ', ''], ['ε', '\\epsilon ', ''], ['ζ', '\\zeta ', ''], ['η', '\\eta ', ''], ['θ', '\\theta ', ''], ['ι', '\\iota ', ''], ['κ', '\\kappa ', ''], ['λ', '\\lambda ', ''], ['μ', '\\mu ', ''], ['ν', '\\nu ', ''], ['ξ', '\\xi ', ''], ['ο', '\\omicron ', ''], ['π', '\\pi ', ''], ['ρ', '\\rho ', ''], ['σ', '\\sigma ', ''], ['τ', '\\tau ', ''], ['υ', '\\upsilon ', ''], ['φ', '\\phi ', ''], ['χ', '\\chi ', ''], ['ψ', '\\psi ', ''], ['ω', '\\omega ', ''], ['大写', '\\Alpha ', ''], ['斜体', '\\varalpha ', '']]
        },

        // 特殊符号
        specialSigns: {
          name: '特殊符号',
          data: [['∞', '\\infty', ''], ['∪', '\\cup ', ''], ['∩', '\\cap ', ''], ['⊂', '\\subset ', ''], ['⊆', '\\subseteq ', ''], ['⊃', '\\supset ', ''], ['∈', '\\in ', ''], ['∉', '\\notin ', ''], ['∅', '\\varnothing ', ''], ['∀', '\\forall ', ''], ['∃', '\\exists ', ''], ['¬', '\\lnot ', ''], ['∇', '\\nabla ', ''], ['∂', '\\partial ', ''], ['∵', '\\because ', ''], ['∴', '\\therefore  ', '']]
        },

        // 字母符号
        accents: {
          name: '字母符号',
          data: [['′', '{', '}\''], ['"', '', '}\'\''], ['˙', '\\dot{', '}'], ['&#776;', '\\ddot{', '}'], ['^', '\\hat{', '}'], ['ˇ', '\\check{', '}'], ['`', '\\grave{', '}'], ['´', '\\acute{', '}'], ['~', '\\tlide{', '}'], ['˘', '\\breve{', '}'], ['¯', '\\bar{', '}'], ['→', '\\vec{', '}'], ['∘', '', '^{\\circ} ']]
        },

        // 字体
        fonts: {
          name: '字体',
          data: [['Typewriter', '\\mathtt{', '}'], ['Blackboard Bold', '\\mathbb{', '}'], ['Sans Serif', '\\mathsf{', '}']]
        },

        // 计算符号
        calcSigns: {
          name: '计算符号',
          data: [['且', '\\bigcap_{', '}^{}'], ['或', '\\bigcup_{', '}^{}'], ['求和', '\\sum_{', '}^{}'], ['连乘', '\\prod_{', '}^{}'], ['无限', '\\lim_{', '}'], ['开n次方', '\\sqrt[n]{', '}']]
        },

        // 关系运算符
        relationOps: {
          name: '关系运算符',
          data: [['∣', '\\mid', ''], ['∤', '\\nmid ', ''], ['⋅', '\\cdot ', ''], ['≤', '\\leq ', ' '], ['≥', '\\geq ', ' '], ['≠', '\\neq ', ' '], ['≈', '\\approx ', ''], ['≡', '\\equiv ', ''], ['≺', '\\prec ', ''], ['⪯', '\\preceq ', ''], ['≪', '\\ll ', ''], ['≻', '\\succ ', ''], ['⪰', '\\succeq ', ''], ['≫', '\\gg ', ''], ['~', '\\sim ', ''], ['≃', '\\simeq ', ''], ['≍', '\\asymp ', ''], ['≅', '\\cong ', ''], ['≐', '\\doteq ', ''], ['∝', '\\propto ', ''], ['⊨', '\\models ', ''], ['∥', '\\parallel ', ''], ['⋈', '\\bowtie ', ''], ['⊥', '\\perp ', ''], ['∘', '\\circ ', ''], ['∗', '\\ast ', ' '], ['⨀', '\\bigodot ', ''], ['⨂', '\\bigotimes ', ''], ['⨁', '\\bigoplus ', '']]
        },

        // 算数运算符
        arithmeticOps: {
          name: '算术运算符',
          data: [['&#177;', '\\pm', ''], ['&#8723;', '\\mp', ''], ['&#215;', '\\times', ''], ['&#8727;', '\\ast', ''], ['&#8902;', '\\star', ''], ['&#8728;', '\\circ', ''], ['&#8226;', '\\bullet', ''], ['&#8901;', '\\cdot', ''], ['&#247;', '\\div', ''], ['&#8721;', '\\sum', ''], ['&#8719;', '\\prod', ''], ['&#8720;', '\\coprod', ''], ['&#8853;', '\\oplus', ''], ['&#10753;', '\\bigoplus', ''], ['&#8854;', '\\ominus', ''], ['&#8855;', '\\otimes', ''], ['&#10754;', '\\bigotimes', ''], ['⊘', '\\oslash', ''], ['⊙', '\\odot', ''], ['⨀', '\\bigodot', ''], ['◯', '\\bigcirc', ''], ['∐', '\\coprod', ''], ['⋄', '\\diamond', ''], ['△', '\\bigtriangleup', ''], ['▽', '\\bigtriangledown', ''], ['◃', '\\triangleleft', ''], ['▹', '\\triangleright', '']]
        },

        // 括号
        brackets: {
          name: '括号',
          data: [['()', '\\left ( ', ' \\right )'], ['[]', '\\left [ ', ' \\right ]'], ['{}', '\\left \\{ ', ' \\right \\}'], ['||', '\\left | ', ' \\right |'], ['∥∥', '\\left \\| ', ' \\right \\|'], ['⟨⟩', '\\left \\langle ', ' \\right \\rangle'], ['⌊⌋', '\\left \\lfloor ', ' \\right \\rfloor'], ['⌈⌉', '\\left \\lceil ', ' \\right \\rceil']]
        }

      }

    };
  },

  computed: {
    // 返回输入框结点
    contentNode() {
      var rootNode = document.getElementById(this.contentId);
      // 当id对应的节点为textarea或input时在此结点中插入公式
      // 否则寻找子节点中的textarea
      if (rootNode.nodeName === 'TEXTAREA' || rootNode.nodeName === 'INPUT') return rootNode;
      if (rootNode.querySelector('textarea') === null) {
        return rootNode.querySelector('input');
      } else {
        return rootNode.querySelector('textarea');
      }
    }
  },

  methods: {
    /*
     * 插入字符串
     * 插入的字符串分为左右两个
     * 插入后光标移动到valueLeft后
     */
    insert(valueLeft, valueRight) {
      var offset = valueLeft.length;

      var oldValue = this.contentNode.value;
      // 如果textarea内有光标
      if (typeof this.contentNode.selectionStart === 'number') {
        var start = this.contentNode.selectionStart;
        if (this.contentNode.selectionEnd === start) {
          // 如果没有选中一段区域
          // 插入value
          this.contentNode.value = oldValue.slice(0, start) + valueLeft + valueRight + oldValue.slice(start);
        } else {
          // 如果选中一段区域
          // 在选中区域右边插入valueRight，左边插入valueLeft
          var end = this.contentNode.selectionEnd;
          this.contentNode.value = oldValue.slice(0, start) + valueLeft + oldValue.slice(start, end) + valueRight + oldValue.slice(end);
        }
      } else {
        // 如果textarea内没有光标
        // 添加到内容的尾部
        this.contentNode.value = oldValue + valueLeft + valueRight;
        start = oldValue.length;
      }
      this.contentNode.focus();
      setTimeout(() => {
        // 否则移动无效
        this.contentNode.setSelectionRange(start + offset, start + offset);
      }, 0);

      // 高度自适应
      this.contentNode.style.height = 'auto';
      this.contentNode.style.minHeight = this.contentNode.scrollHeight + 'px';
    }
  }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mathjaxToolbar_vue__ = __webpack_require__(2);




const VueMathjaxToolbar = {
  install(Vue) {
    Vue.component('mathjax-toolbar', __WEBPACK_IMPORTED_MODULE_0__mathjaxToolbar_vue__["a" /* default */]);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (VueMathjaxToolbar);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathjaxToolbar_vue__ = __webpack_require__(0);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3a8a850e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_mathjaxToolbar_vue__ = __webpack_require__(9);
function injectStyle (ssrContext) {
  __webpack_require__(3)
}
var normalizeComponent = __webpack_require__(8)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3a8a850e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathjaxToolbar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3a8a850e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_mathjaxToolbar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("d62c8b0e", content, true, {});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports
exports.push([module.i, "@import url(https://unpkg.com/purecss@0.6.1/build/pure-min.css);", ""]);

// module
exports.push([module.i, ".pure-menu-list>li[data-v-3a8a850e]{float:left}.pure-menu-children[data-v-3a8a850e]{position:relative;min-width:100%;max-height:200px;background-color:#333;text-align:center;overflow:auto;z-index:5000}.pure-menu-item[data-v-3a8a850e]{cursor:pointer}.pure-menu-children .pure-menu-item[data-v-3a8a850e]{color:#bbb;transition:background-color .15s linear,color .15s linear}.pure-menu-children .pure-menu-item[data-v-3a8a850e]:hover{color:#333}.red[data-v-3a8a850e]{color:red}.green[data-v-3a8a850e]{color:green}.blue[data-v-3a8a850e]{color:blue}.yellow[data-v-3a8a850e]{color:#ff0}.cyan[data-v-3a8a850e]{color:cyan}.purple[data-v-3a8a850e]{color:purple}.orange[data-v-3a8a850e]{color:orange}.gold[data-v-3a8a850e]{color:gold}", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(7)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"pure-menu pure-menu-horizontal"},[_c('ul',{staticClass:"pure-menu-list"},[_c('li',{staticClass:"pure-menu-item pure-menu-selected pure-menu-link",on:{"click":function($event){_vm.insert('$', '$')}}},[_vm._v("插入$")]),_vm._v(" "),_c('li',{staticClass:"pure-menu-item pure-menu-selected pure-menu-link",on:{"click":function($event){_vm.insert('\\frac{', '}{}')}}},[_vm._v("分数")]),_vm._v(" "),_c('li',{staticClass:"pure-menu-item pure-menu-selected pure-menu-link",on:{"click":function($event){_vm.insert('\\begin{bmatrix}\n1 & 2\\\\ \n3 & 4\n\\end{bmatrix}', '')}}},[_vm._v("矩阵")]),_vm._v(" "),_c('li',{staticClass:"pure-menu-item pure-menu-has-children pure-menu-allow-hover"},[_c('a',{staticClass:"pure-menu-link"},[_vm._v("颜色")]),_vm._v(" "),_c('ul',{staticClass:"pure-menu-children"},_vm._l((_vm.colors),function(item){return _c('li',{staticClass:"pure-menu-item pure-menu-link",on:{"click":function($event){_vm.insert(item[2], item[3])}}},[_vm._v("\n          "+_vm._s(item[0])+"\n          "),_c('span',{class:item[1]},[_vm._v("●")])])}),0)]),_vm._v(" "),_vm._l((_vm.types),function(type){return _c('li',{staticClass:"pure-menu-item pure-menu-has-children pure-menu-allow-hover"},[_c('a',{staticClass:"pure-menu-link"},[_vm._v(_vm._s(type.name))]),_vm._v(" "),_c('ul',{staticClass:"pure-menu-children"},_vm._l((type.data),function(item){return _c('li',{staticClass:"pure-menu-item pure-menu-link",domProps:{"innerHTML":_vm._s(item[0])},on:{"click":function($event){_vm.insert(item[1], item[2])}}})}),0)])})],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});
//# sourceMappingURL=mathjaxEditor.js.map