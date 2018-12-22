<template>
  <nav class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <!-- 添加$ -->
      <li class="pure-menu-item pure-menu-selected pure-menu-link" @click="insert('$', '$')">插入$</li>

      <!-- 分数 -->
      <li class="pure-menu-item pure-menu-selected pure-menu-link" @click="insert('\\frac{', '}{}')">分数</li>

      <li class="pure-menu-item pure-menu-selected pure-menu-link" @click="insert('\\begin{bmatrix}\n1 & 2\\\\ \n3 & 4\n\\end{bmatrix}', '')">矩阵</li>

      <!-- 添加颜色 -->
      <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
        <a class="pure-menu-link">颜色</a>
        <ul class="pure-menu-children">
          <li v-for="item in colors" class="pure-menu-item pure-menu-link" @click="insert(item[2], item[3])">
            {{ item[0] }}
            <span :class="item[1]">&#9679;</span>
          </li>
        </ul>
      </li>

      <!-- 其他类型 -->
      <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover" v-for="type in types">
        <a class="pure-menu-link">{{ type.name }}</a>
        <ul class="pure-menu-children">
          <li v-html="item[0]" v-for="item in type.data" class="pure-menu-item pure-menu-link" @click="insert(item[1], item[2])">
          </li>
        </ul>
      </li>

    </ul>
  </nav>
</template>

<script>
export default {

  name: 'mathjaxToolbar',

  props: ['contentId'],

  data () {
    return {
      // 颜色
      colors: [
        ['红色', 'red', '{\\color{Red} ', '}'],
        ['绿色', 'green', '{\\color{Green} ', '}'],
        ['蓝色', 'blue', '{\\color{Blue} ', '}'],
        ['黄色', 'yellow', '{\\color{Yellow} ', '}'],
        ['青色', 'cyan', '{\\color{Cyan} ', '}'],
        ['紫色', 'purple', '{\\color{Purple} ', '}'],
        ['橙色', 'orange', '{\\color{Orange} ', '}'],
        ['金色', 'gold', '{\\color{Gold} ', '}']
      ],

      types: {

        // 上下标
        subSuperScripts: {
          name: '上下标',
          data: [
            ['x<sup>a</sup>', 'x^{a', '}'],
            ['x<sub>a</sub>', 'x_{a', '}'],
            ['x<sup>b</sup><sub style="margin-left: -7px">a</sub>', 'x_{a}^{b', '}'],
            ['x<sub>a</sub><sup>b</sup>', '{x_{a}}^{b', '}'],
            ['<sub style="margin-right: -7px">a</sub><sup>b</sup> &#67;', '_{a}^{b}\textrm{C', '}']
          ]
        },

        // 希腊字母
        greekLetters: {
          name: '希腊字母',
          data: [
            ['α', '\\alpha ', ''],
            ['β', '\\beta ', ''],
            ['γ', '\\gamma ', ''],
            ['δ', '\\delta ', ''],
            ['ε', '\\epsilon ', ''],
            ['ζ', '\\zeta ', ''],
            ['η', '\\eta ', ''],
            ['θ', '\\theta ', ''],
            ['ι', '\\iota ', ''],
            ['κ', '\\kappa ', ''],
            ['λ', '\\lambda ', ''],
            ['μ', '\\mu ', ''],
            ['ν', '\\nu ', ''],
            ['ξ', '\\xi ', ''],
            ['ο', '\\omicron ', ''],
            ['π', '\\pi ', ''],
            ['ρ', '\\rho ', ''],
            ['σ', '\\sigma ', ''],
            ['τ', '\\tau ', ''],
            ['υ', '\\upsilon ', ''],
            ['φ', '\\phi ', ''],
            ['χ', '\\chi ', ''],
            ['ψ', '\\psi ', ''],
            ['ω', '\\omega ', ''],
            ['大写', '\\Alpha ', ''],
            ['斜体', '\\varalpha ', '']
          ]
        },

        // 特殊符号
        specialSigns: {
          name: '特殊符号',
          data: [
            ['∞', '\\infty', ''],
            ['∪', '\\cup ', ''],
            ['∩', '\\cap ', ''],
            ['⊂', '\\subset ', ''],
            ['⊆', '\\subseteq ', ''],
            ['⊃', '\\supset ', ''],
            ['∈', '\\in ', ''],
            ['∉', '\\notin ', ''],
            ['∅', '\\varnothing ', ''],
            ['∀', '\\forall ', ''],
            ['∃', '\\exists ', ''],
            ['¬', '\\lnot ', ''],
            ['∇', '\\nabla ', ''],
            ['∂', '\\partial ', ''],
            ['∵', '\\because ', ''],
            ['∴', '\\therefore  ', '']
          ]
        },

        // 字母符号
        accents: {
          name: '字母符号',
          data: [
            ['′', '{', '}\''],
            ['"', '', '}\'\''],
            ['˙', '\\dot{', '}'],
            ['&#776;', '\\ddot{', '}'],
            ['^', '\\hat{', '}'],
            ['ˇ', '\\check{', '}'],
            ['`', '\\grave{', '}'],
            ['´', '\\acute{', '}'],
            ['~', '\\tlide{', '}'],
            ['˘', '\\breve{', '}'],
            ['¯', '\\bar{', '}'],
            ['→', '\\vec{', '}'],
            ['∘', '', '^{\\circ} ']
          ]
        },

        // 字体
        fonts: {
          name: '字体',
          data: [
            ['Typewriter', '\\mathtt{', '}'],
            ['Blackboard Bold', '\\mathbb{', '}'],
            ['Sans Serif', '\\mathsf{', '}']
          ]
        },

        // 计算符号
        calcSigns: {
          name: '计算符号',
          data: [
            ['且', '\\bigcap_{', '}^{}'],
            ['或', '\\bigcup_{', '}^{}'],
            ['求和', '\\sum_{', '}^{}'],
            ['连乘', '\\prod_{', '}^{}'],
            ['无限', '\\lim_{', '}'],
            ['开n次方', '\\sqrt[n]{', '}']
          ]
        },

        // 关系运算符
        relationOps: {
          name: '关系运算符',
          data: [
            ['∣', '\\mid', ''],
            ['∤', '\\nmid ', ''],
            ['⋅', '\\cdot ', ''],
            ['≤', '\\leq ', ' '],
            ['≥', '\\geq ', ' '],
            ['≠', '\\neq ', ' '],
            ['≈', '\\approx ', ''],
            ['≡', '\\equiv ', ''],
            ['≺', '\\prec ', ''],
            ['⪯', '\\preceq ', ''],
            ['≪', '\\ll ', ''],
            ['≻', '\\succ ', ''],
            ['⪰', '\\succeq ', ''],
            ['≫', '\\gg ', ''],
            ['~', '\\sim ', ''],
            ['≃', '\\simeq ', ''],
            ['≍', '\\asymp ', ''],
            ['≅', '\\cong ', ''],
            ['≐', '\\doteq ', ''],
            ['∝', '\\propto ', ''],
            ['⊨', '\\models ', ''],
            ['∥', '\\parallel ', ''],
            ['⋈', '\\bowtie ', ''],
            ['⊥', '\\perp ', ''],
            ['∘', '\\circ ', ''],
            ['∗', '\\ast ', ' '],
            ['⨀', '\\bigodot ', ''],
            ['⨂', '\\bigotimes ', ''],
            ['⨁', '\\bigoplus ', '']
          ]
        },

        // 算数运算符
        arithmeticOps: {
          name: '算术运算符',
          data: [
            ['&#177;', '\\pm', ''],
            ['&#8723;', '\\mp', ''],
            ['&#215;', '\\times', ''],
            ['&#8727;', '\\ast', ''],
            ['&#8902;', '\\star', ''],
            ['&#8728;', '\\circ', ''],
            ['&#8226;', '\\bullet', ''],
            ['&#8901;', '\\cdot', ''],
            ['&#247;', '\\div', ''],
            ['&#8721;', '\\sum', ''],
            ['&#8719;', '\\prod', ''],
            ['&#8720;', '\\coprod', ''],
            ['&#8853;', '\\oplus', ''],
            ['&#10753;', '\\bigoplus', ''],
            ['&#8854;', '\\ominus', ''],
            ['&#8855;', '\\otimes', ''],
            ['&#10754;', '\\bigotimes', ''],
            ['⊘', '\\oslash', ''],
            ['⊙', '\\odot', ''],
            ['⨀', '\\bigodot', ''],
            ['◯', '\\bigcirc', ''],
            ['∐', '\\coprod', ''],
            ['⋄', '\\diamond', ''],
            ['△', '\\bigtriangleup', ''],
            ['▽', '\\bigtriangledown', ''],
            ['◃', '\\triangleleft', ''],
            ['▹', '\\triangleright', '']
          ]
        },

        // 括号
        brackets: {
          name: '括号',
          data: [
            ['()', '\\left ( ', ' \\right )'],
            ['[]', '\\left [ ', ' \\right ]'],
            ['{}', '\\left \\{ ', ' \\right \\}'],
            ['||', '\\left | ', ' \\right |'],
            ['∥∥', '\\left \\| ', ' \\right \\|'],
            ['⟨⟩', '\\left \\langle ', ' \\right \\rangle'],
            ['⌊⌋', '\\left \\lfloor ', ' \\right \\rfloor'],
            ['⌈⌉', '\\left \\lceil ', ' \\right \\rceil']
          ]
        }

      }

    }
  },

  computed: {
    // 返回输入框结点
    contentNode () {
      var rootNode = document.getElementById(this.contentId)
      // 当id对应的节点为textarea或input时在此结点中插入公式
      // 否则寻找子节点中的textarea
      if (rootNode.nodeName === 'TEXTAREA' || rootNode.nodeName === 'INPUT') return rootNode
      if (rootNode.querySelector('textarea') === null) {
        return rootNode.querySelector('input')
      } else {
        return rootNode.querySelector('textarea')
      }
    }
  },

  methods: {
    /*
     * 插入字符串
     * 插入的字符串分为左右两个
     * 插入后光标移动到valueLeft后
     */
    insert (valueLeft, valueRight) {
      var offset = valueLeft.length

      var oldValue = this.contentNode.value
      // 如果textarea内有光标
      if (typeof this.contentNode.selectionStart === 'number') {
        var start = this.contentNode.selectionStart
        if (this.contentNode.selectionEnd === start) {
          // 如果没有选中一段区域
          // 插入value
          this.contentNode.value = oldValue.slice(0, start) + valueLeft + valueRight + oldValue.slice(start)
        } else {
          // 如果选中一段区域
          // 在选中区域右边插入valueRight，左边插入valueLeft
          var end = this.contentNode.selectionEnd
          this.contentNode.value = oldValue.slice(0, start) + valueLeft + oldValue.slice(start, end) + valueRight + oldValue.slice(end)
        }
      } else {
        // 如果textarea内没有光标
        // 添加到内容的尾部
        this.contentNode.value = oldValue + valueLeft + valueRight
        start = oldValue.length
      }
      this.contentNode.focus()
      setTimeout(() => {
        // 否则移动无效
        this.contentNode.setSelectionRange(start + offset, start + offset)
      }, 0)

      // 高度自适应
      this.contentNode.style.height = 'auto'
      this.contentNode.style.height = this.contentNode.scrollHeight + 'px'
    }
  }
}
</script>

<style lang="css" scoped>
@import 'https://unpkg.com/purecss@0.6.1/build/pure-min.css';

.pure-menu-list>li{float: left;}

.pure-menu-children {
  position: relative;
  min-width: 100%;
  max-height: 200px;
  background-color: #333;
  text-align: center;
  overflow: auto;
  /* 防止被遮盖 */
  z-index: 5000;
}

.pure-menu-item {cursor: pointer;}
.pure-menu-children .pure-menu-item {
  color: #bbb;
  transition: background-color 0.15s linear, color 0.15s linear;
}

.pure-menu-children .pure-menu-item:hover {
  color: #333;
}

/* 色块颜色 */
/* 红色 */
.red {color: red;}
/* 绿色 */
.green {color: green;}
/* 蓝色 */
.blue {color: blue;}
/* 黄色 */
.yellow {color: yellow;}
/* 青色 */
.cyan {color: cyan;}
/* 紫色 */
.purple {color: purple;}
/* 橙色 */
.orange {color: orange;}
/* 金色 */
.gold {color: gold;}
</style>