(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{258:function(a,t,e){a.exports=e.p+"assets/img/1568791830331.b62892fe.png"},259:function(a,t,e){a.exports=e.p+"assets/img/1568791864716.87eaadb4.png"},260:function(a,t,e){a.exports=e.p+"assets/img/1568791905676.88d81fb4.png"},261:function(a,t,e){a.exports=e.p+"assets/img/1568791888261.e3883b5a.png"},262:function(a,t,e){a.exports=e.p+"assets/img/1568792444506.1290bf34.png"},297:function(a,t,e){"use strict";e.r(t);var s=e(0),r=Object(s.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"基础知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础知识","aria-hidden":"true"}},[a._v("#")]),a._v(" 基础知识")]),a._v(" "),s("h3",{attrs:{id:"latex源文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#latex源文件","aria-hidden":"true"}},[a._v("#")]),a._v(" LaTeX源文件")]),a._v(" "),s("p",[a._v("LaTeX源文件不仅包括你所要排版的文本，还包括LaTeX所能识别的如何排版这些文本的命令。")]),a._v(" "),s("h4",{attrs:{id:"空白距离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#空白距离","aria-hidden":"true"}},[a._v("#")]),a._v(" 空白距离")]),a._v(" "),s("p",[a._v("LaTeX将"),s("strong",[a._v("空格")]),a._v("和"),s("strong",[a._v("制表符")]),a._v("等空白字符视为"),s("strong",[a._v("相同的空白距离")]),a._v("。$多个连续的空白字符$等同为一个空白字符。在LaTeX文件中，每行开始的空白字符将被忽略。")]),a._v(" "),s("p",[a._v("LaTeX使用"),s("strong",[a._v("空行")]),a._v("来结束段落。两行文本中的空行标志上一段落的结束和新段落的开始。如同空格一样，"),s("strong",[a._v("多个空行")]),a._v("所起的作用和"),s("strong",[a._v("一个空行的作用是相同")]),a._v("的。")]),a._v(" "),s("h4",{attrs:{id:"特殊字符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特殊字符","aria-hidden":"true"}},[a._v("#")]),a._v(" 特殊字符")]),a._v(" "),s("p",[a._v("下面这些字符是LaTeX的保留字符，要想在文本中得到这些字符，需要在这些字符前面"),s("strong",[a._v("加上反斜线")]),a._v("。")]),a._v(" "),s("p",[a._v("# $ % ^ &  _ { } - ~")]),a._v(" "),s("p",[a._v("另外一些符号可以 由"),s("strong",[a._v("特殊的命令")]),a._v("或作为"),s("strong",[a._v("重音命令")]),a._v("得到。")]),a._v(" "),s("h4",{attrs:{id:"latex命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#latex命令","aria-hidden":"true"}},[a._v("#")]),a._v(" LaTeX命令")]),a._v(" "),s("p",[a._v("LaTex命令"),s("strong",[a._v("大小写敏感")]),a._v("并且有下面两种格式：")]),a._v(" "),s("ul",[s("li",[a._v("以一反斜线\\开始，加上只包含字母字符命令组成。命令名后的空格符、数字或其他非字母字符标志该命令的结束。")]),a._v(" "),s("li",[a._v("由一反斜线\\和一特殊字符组成")])]),a._v(" "),s("p",[a._v("LaTeX忽略命令后面的空格。如果你希望在命令后面得到一空格，可以在命令后面加上**{}和一个空格**，或者加上一个"),s("strong",[a._v("特殊的空白距离命令")]),a._v("。eg. \\TeX{} perts会输出TEX perts   \\TeX perts 会输出TEXperts")]),a._v(" "),s("p",[a._v("许多命令需要一个参数并用大括号{}将其括起来置于命令名称的后面。也有一些命令支持用方括号括起来的可选参数。eg. \\textsl{lean}")]),a._v(" "),s("h4",{attrs:{id:"注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注释","aria-hidden":"true"}},[a._v("#")]),a._v(" 注释")]),a._v(" "),s("p",[a._v("当LaTeX在处理源文件时，如果遇到一个%，将会忽略%后的"),s("strong",[a._v("该行文本，分行符")]),a._v("以及"),s("strong",[a._v("下一行开始的空白字符")]),a._v("。这样我们可以在源文件中写一些注释并且不用担心他们会出现在最后的排版结果中。")]),a._v(" "),s("p",[a._v("%也可用来分割不允许有空格或分行的较长输入文本。")]),a._v(" "),s("h4",{attrs:{id:"源文件的结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源文件的结构","aria-hidden":"true"}},[a._v("#")]),a._v(" 源文件的结构")]),a._v(" "),s("p",[a._v("LaTeX需要所处理的源文件遵从一定的结构，每个LaTeX文档必须以如下的命令开始：")]),a._v(" "),s("p",[a._v("$\\documentclass{...}$这个命令指定了你所写的文档类别。在此之后你可以加入控制文档样式的命令，或者使用如下命令调用一些宏集$\\usepackage{...}$，当完成所有的设置后，用如下命令开始你的文档$\\backslash begin {document}$ ，在文档的最后使用以下命令来告诉LaTeX你的文档到此结束$\\backslash end{document}$")]),a._v(" "),s("p",[s("strong",[a._v("导言区")]),a._v("： $\\documentclass{...}$和$\\backslash begin {document}$ 之间的区域称作"),s("strong",[a._v("导言区")]),a._v("。")]),a._v(" "),s("h4",{attrs:{id:"文档布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档布局","aria-hidden":"true"}},[a._v("#")]),a._v(" 文档布局")]),a._v(" "),s("h5",{attrs:{id:"文档类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档类","aria-hidden":"true"}},[a._v("#")]),a._v(" 文档类")]),a._v(" "),s("p",[a._v("当LaTeX处理源文件时，首先需要知道的是作者所要创建的"),s("strong",[a._v("文档类型")]),a._v("，该信息可以通过命令$\\documentclass$提供。")]),a._v(" "),s("p",[a._v("$\\documentclass[options]{class}$")]),a._v(" "),s("p",[a._v("$class$指明了所要创建的文档类型。文档类的属性可以通过$options$设置，不同的选项用逗号隔开。")]),a._v(" "),s("p",[s("img",{staticStyle:{zoom:"50%"},attrs:{src:e(258),alt:"1568791830331"}}),s("img",{attrs:{src:e(259),alt:"1568791864716"}})]),a._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:e(260),alt:"1568791905676"}}),a._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:e(261),alt:"1568791888261"}}),a._v(" "),s("h5",{attrs:{id:"宏包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#宏包","aria-hidden":"true"}},[a._v("#")]),a._v(" 宏包")]),a._v(" "),s("p",[a._v("当你排版文档时，基本的LaTeX不能够解决你的问题，如果你想插入图形、彩色文件或源代码文件，你需要使用"),s("strong",[a._v("宏包")]),a._v("来增强LaTeX的功能。命令如下：$\\usepackage[options]{package}$")]),a._v(" "),s("p",[a._v("$package$是宏包的名称，$options$是用来触发宏包中特殊功能的一组关键词。")]),a._v(" "),s("h4",{attrs:{id:"各类latex文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#各类latex文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 各类LaTeX文件")]),a._v(" "),s("p",[a._v("说明了不同的文件后缀名分别代表了什么意思。先省略...")]),a._v(" "),s("h4",{attrs:{id:"页面式样"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面式样","aria-hidden":"true"}},[a._v("#")]),a._v(" 页面式样")]),a._v(" "),s("p",[a._v("LaTeX支持三种预定的页眉header、页脚footer格式，称为页面式样。$\\backslash pagestyle{style}$$style$定义了所使用的页面式样。")]),a._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:e(262),alt:"1568792444506"}}),a._v(" "),s("h4",{attrs:{id:"大型文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#大型文档","aria-hidden":"true"}},[a._v("#")]),a._v(" 大型文档")]),a._v(" "),s("p",[a._v("在处理大型文档时，最好将源文件分成几个部分。LaTeX有两条命令来处理这种情况：命令$\\backslash include{filename}$可以将$filename.tex$包括进来，"),s("strong",[a._v("note")]),a._v("：LaTeX在开始处理$filename.tex$的内容之前将会开始一新页。")]),a._v(" "),s("p",[a._v("命令$\\backslash includeonly{filename1,filename2,...}$可用在文档的导言区，指导LaTeX仅仅包含一些文件。在所有的$include$命令中，只有在$includeonly$中列出的文件才会被执行。**note：**参数中文件名和逗号之间不能有空格。")]),a._v(" "),s("p",[a._v("如果不想在新页排版包括进来的文本，使用命令$\\backslash input{filename}$")]),a._v(" "),s("p",[a._v("使用$syntonly$宏包可以让LaTeX快速检查你的文档，仅仅检查语法和所用的命令是否正确。\n命令如下：\n$\\backslash usepackage{syntonly}$\n$\\backslash syntaxonly$")]),a._v(" "),s("h2",{attrs:{id:"文档排版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档排版","aria-hidden":"true"}},[a._v("#")]),a._v(" 文档排版")]),a._v(" "),s("h4",{attrs:{id:"文档和语言的结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档和语言的结构","aria-hidden":"true"}},[a._v("#")]),a._v(" 文档和语言的结构")]),a._v(" "),s("h4",{attrs:{id:"断行和分页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#断行和分页","aria-hidden":"true"}},[a._v("#")]),a._v(" 断行和分页")]),a._v(" "),s("h5",{attrs:{id:"段落整理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#段落整理","aria-hidden":"true"}},[a._v("#")]),a._v(" 段落整理")]),a._v(" "),s("p",[a._v("另起一行而不另起一段：$\\backslash \\backslash 或者 \\backslash newline$")]),a._v(" "),s("p",[a._v("强行断行后禁止分页：$\\backslash \\backslash*$")]),a._v(" "),s("p",[a._v("另起一新页：$\\backslash newpage$")]),a._v(" "),s("h5",{attrs:{id:"断字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#断字","aria-hidden":"true"}},[a._v("#")]),a._v(" 断字")]),a._v(" "),s("p",[a._v("命令$\\backslash mbox{text}$保证把几个单词排在同一行上。命令$\\backslash fbox$和$\\backslash mbox$类似，还会围绕内容画一个框。")]),a._v(" "),s("h5",{attrs:{id:"特殊字符和符号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特殊字符和符号","aria-hidden":"true"}},[a._v("#")]),a._v(" 特殊字符和符号")]),a._v(" "),s("h6",{attrs:{id:"引号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引号","aria-hidden":"true"}},[a._v("#")]),a._v(" 引号")]),a._v(" "),s("p",[a._v("在LaTeX中，用两个$‘$产生"),s("strong",[a._v("左引号")]),a._v("，用两个$’$产生"),s("strong",[a._v("右引号")]),a._v("。一个$‘$和一个个$’$产生一个"),s("strong",[a._v("单引号")]),a._v("。")]),a._v(" "),s("h6",{attrs:{id:"破折号和连字号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#破折号和连字号","aria-hidden":"true"}},[a._v("#")]),a._v(" 破折号和连字号")]),a._v(" "),s("p",[a._v("LaTeX中有四种"),s("strong",[a._v("短划标点符号")]),a._v("。")]),a._v(" "),s("p",[a._v("-连字号；--短破折号；---长破折号；-减号")]),a._v(" "),s("h6",{attrs:{id:"波浪号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#波浪号","aria-hidden":"true"}},[a._v("#")]),a._v(" 波浪号")]),a._v(" "),s("p",[a._v("$\\sim$ 命令：\\sim")]),a._v(" "),s("h6",{attrs:{id:"度的符号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#度的符号","aria-hidden":"true"}},[a._v("#")]),a._v(" 度的符号")]),a._v(" "),s("p",[a._v("$,^{\\circ}\\mathrm{C}$：,^{\\circ}\\mathrm{C}")]),a._v(" "),s("h6",{attrs:{id:"省略号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#省略号","aria-hidden":"true"}},[a._v("#")]),a._v(" 省略号")]),a._v(" "),s("p",[a._v("$\\ldots$：\\ldots")]),a._v(" "),s("h6",{attrs:{id:"连字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连字","aria-hidden":"true"}},[a._v("#")]),a._v(" 连字")]),a._v(" "),s("p",[a._v("在两个字母之间插入一个$\\backslash mbox{}$可以禁止连字。")]),a._v(" "),s("h6",{attrs:{id:"注音符号和特殊字符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注音符号和特殊字符","aria-hidden":"true"}},[a._v("#")]),a._v(" 注音符号和特殊字符")]),a._v(" "),s("h6",{attrs:{id:"支持使用国际语言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持使用国际语言","aria-hidden":"true"}},[a._v("#")]),a._v(" 支持使用国际语言")]),a._v(" "),s("h6",{attrs:{id:"单词的间隔"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单词的间隔","aria-hidden":"true"}},[a._v("#")]),a._v(" 单词的间隔")]),a._v(" "),s("h4",{attrs:{id:"标题，章和节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标题，章和节","aria-hidden":"true"}},[a._v("#")]),a._v(" 标题，章和节")]),a._v(" "),s("p",[a._v("为了便于读者理解，应该把文档划分为章，节和子节。laTeX用特殊的命令支持这个工作，这些命令把"),s("strong",[a._v("节的标题")]),a._v("作为"),s("strong",[a._v("参量")]),a._v("。")]),a._v(" "),s("p",[a._v("对于$article$风格的文档，有下列分节命令：")]),a._v(" "),s("p",[a._v("$\\backslash section{...}$$\\backslash paragraph{...}$")]),a._v(" "),s("p",[a._v("$\\backslash subsection{...}$$\\backslash subparagraph{...}$")]),a._v(" "),s("p",[a._v("$\\backslash subsubsection{...}$")]),a._v(" "),s("p",[a._v("LaTeX在文档编译的最后一个循环中，提取节的标题和页码以生成目录。")]),a._v(" "),s("p",[a._v("$\\backslash tableofcontents$插入目录命令。")]),a._v(" "),s("p",[a._v("整篇文档的标题由命令$\\backslash maketitle$产生。标题的内容必须在调用$\\backslash maketitle$之前，由命令$\\backslash title{...}，\\backslash author{...}，和可选的\\backslash date{...}$定义。")]),a._v(" "),s("p",[a._v("在$\\backslash author$中，可以输入几个用$\\backslash and$命令分开的名字。")]),a._v(" "),s("h4",{attrs:{id:"交叉引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#交叉引用","aria-hidden":"true"}},[a._v("#")]),a._v(" 交叉引用")]),a._v(" "),s("p",[a._v("在书籍、报告和论文中，需要对图、表和文本的特殊段落进行"),s("strong",[a._v("交叉引用")]),a._v("。")]),a._v(" "),s("p",[s("strong",[a._v("交叉引用命令")]),a._v("：$\\backslash label{marker},\\backslash ref{marker} and \\backslash pageref{marker}$marker 是使用者选择的标识符 。如果在节、子节、图、表或定理后\n面输入 \\label 命令， LATEX 把 \\ref 替换为相应的序号（在文档中的序号）。 \\pageref 命令排印 \\label 输入处的页码（在文档中的页码）。\n"),s("strong",[a._v("\\label{sec:this}")]),a._v("  ~\\ref{sec:this}  ~\\pageref{sec:this}。")]),a._v(" "),s("h4",{attrs:{id:"脚注"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脚注","aria-hidden":"true"}},[a._v("#")]),a._v(" 脚注")]),a._v(" "),s("p",[a._v("$\\footnote{footnote text} $")]),a._v(" "),s("p",[a._v("把脚注内容排印于当前页的页脚位置。脚注命令总是置于（put） 6其指向\n的单词或句子的后面。脚注是一个句子或句子的一部分，所以应用逗号或\n句号结尾。")]),a._v(" "),s("h4",{attrs:{id:"强调"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强调","aria-hidden":"true"}},[a._v("#")]),a._v(" 强调")]),a._v(" "),s("p",[a._v("用"),s("strong",[a._v("下划线")]),a._v("来强调重要的单词： $\\backslash underline{text} $")]),a._v(" "),s("p",[a._v("用"),s("strong",[a._v("斜体")]),a._v("排印要强调的单词 ：$\\emph{text}$")]),a._v(" "),s("p",[a._v("这些命令对其参量的实际作用效果"),s("strong",[a._v("依赖于它的上下文")]),a._v(" 。")]),a._v(" "),s("h4",{attrs:{id:"环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 环境")]),a._v(" "),s("p",[a._v("$\\backslash begin{environment} \\quad text \\quad \\backslash end {environment}$")]),a._v(" "),s("p",[s("strong",[a._v("environment")]),a._v(" 是环境名称 。保持调用顺序，环境可以"),s("strong",[a._v("嵌套几次")]),a._v(" 。")]),a._v(" "),s("p",[a._v("$\\backslash begin{aaa}...\\backslash begin{bbb}...\\backslash end{bbb}...\\backslash end{aaa}$")]),a._v(" "),s("h5",{attrs:{id:"itemize-enumerate-and-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#itemize-enumerate-and-description","aria-hidden":"true"}},[a._v("#")]),a._v(" Itemize, Enumerate, and Description")]),a._v(" "),s("p",[s("strong",[a._v("itemize")]),a._v(" 环境用于简单的"),s("strong",[a._v("列表")]),a._v("， "),s("strong",[a._v("enumerate")]),a._v(" 环境用于"),s("strong",[a._v("带序号的列表")]),a._v("， "),s("strong",[a._v("description")]),a._v("环境用于"),s("strong",[a._v("带描述的列表")]),a._v(" 。")]),a._v(" "),s("p",[s("strong",[a._v("用法如下")]),a._v("：")]),a._v(" "),s("p",[a._v("\\flushleft\n"),s("strong",[a._v("\\begin{enumerate}")]),a._v(" "),s("strong",[a._v("\\item")]),a._v(" You can mix the list environments to your taste:\n"),s("strong",[a._v("\\begin{itemize}")]),a._v(" "),s("strong",[a._v("\\item")]),a._v(" But it might start to look silly.\n"),s("strong",[a._v("\\item[-]")]),a._v(" With a dash.\n"),s("strong",[a._v("\\end{itemize}")]),a._v(" "),s("strong",[a._v("\\item")]),a._v(" Therefore remember:\n"),s("strong",[a._v("\\begin{description}")]),a._v(" "),s("strong",[a._v("\\item[Stupid]")]),a._v(" things will not become smart because they are in a list.\n"),s("strong",[a._v("\\item[Smart]")]),a._v(" things, though, can be presented beautifully in a list.\n"),s("strong",[a._v("\\end{description}")]),a._v(" "),s("strong",[a._v("\\end{enumerate}")])]),a._v(" "),s("h5",{attrs:{id:"flushleft-flushright-and-center"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flushleft-flushright-and-center","aria-hidden":"true"}},[a._v("#")]),a._v(" Flushleft, Flushright, and Center")]),a._v(" "),s("p",[a._v("$flushleft$ 和$ flushright$ 环境分别产生"),s("strong",[a._v("靠左排列")]),a._v("和"),s("strong",[a._v("靠右排列")]),a._v("的段\n落。 $center$ 环境产生"),s("strong",[a._v("居中的文本")]),a._v("。如果你不输入命令 $\\backslash\\backslash$ 指定断行点， $LATEX$将自行决定。")]),a._v(" "),s("p",[s("strong",[a._v("\\begin{flushleft}")]),a._v("\nThis text is\\ left-aligned.\n\\LaTeX{} is not trying to make each line the same length.\n"),s("strong",[a._v("\\end{flushleft}")]),a._v(" "),s("strong",[a._v("\\begin{flushright}")]),a._v("\nThis text is right-\\aligned.\n\\LaTeX{} is not trying to make each line the same length.\n"),s("strong",[a._v("\\end{flushright}")])]),a._v(" "),s("p",[s("strong",[a._v("\\begin{center}")]),a._v("\nAt the centre\\of the earth\n"),s("strong",[a._v("\\end{center}")])]),a._v(" "),s("h5",{attrs:{id:"quote-quotation-and-verse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quote-quotation-and-verse","aria-hidden":"true"}},[a._v("#")]),a._v(" Quote, Quotation, and Verse")]),a._v(" "),s("p",[a._v("$quote$环境对重要断语和例子的引用很重要。")]),a._v(" "),s("p",[s("strong",[a._v("\\begin{quote}")]),a._v("\nOn average, no line should be longer than 66 characters.\n"),s("strong",[a._v("\\end{quote}")])]),a._v(" "),s("p",[a._v("有两个类似的环境：$quotation$ 和 $verse$ 环境。 $quotation$ 环境用于超过几段的较长引用，因为它对段落进行缩进。 $verse$ 环境用于诗歌，在诗歌中断行很重要。在一行的末尾用断行$\\backslash\\backslash$，在每一段后留一空行。")]),a._v(" "),s("h5",{attrs:{id:"逐字打印"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逐字打印","aria-hidden":"true"}},[a._v("#")]),a._v(" 逐字打印")]),a._v(" "),s("p",[a._v("位于 "),s("strong",[a._v("\\begin{verbatim}")]),a._v(" 和 "),s("strong",[a._v("\\end{verbatim}")]),a._v(" 之间的文本将直接打印，包括所有的断行和空白，就像在打字机上键入一样，不执行任何 LATEX 命令。 在一个段落中，类似的功能可由 $\\backslash verb+text+ $\n完成。 + 仅是分隔符的一个例子。除了 * 或空格，可以使用任意一个字符。 "),s("strong",[a._v("verbatim")]),a._v(" 环境和 "),s("strong",[a._v("\\verb")]),a._v(" 命令不能在其他命令的参数中使用。")]),a._v(" "),s("h5",{attrs:{id:"表格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表格","aria-hidden":"true"}},[a._v("#")]),a._v(" 表格")]),a._v(" "),s("p",[s("strong",[a._v("tabular")]),a._v(" 环境能用来排印带有水平和铅直表线的漂亮表格。 LATEX 自动确定每一列的宽度。")]),a._v(" "),s("p",[s("strong",[a._v("命令")]),a._v("： \\begin{tabular}{table spec}")]),a._v(" "),s("p",[s("strong",[a._v("table spec")]),a._v(" 定义了表格的式样 ，用一个 "),s("strong",[a._v("l")]),a._v(" 产生左对齐的列，用一个 "),s("strong",[a._v("r")]),a._v("产生右对齐的列，用一个 "),s("strong",[a._v("c")]),a._v(" 产生居中的列；用 "),s("strong",[a._v("p{宽度值width}")]),a._v(" 产生相应宽度、包含自动断行文本的列； "),s("strong",[a._v("|")]),a._v(" 产生铅直表线。")]),a._v(" "),s("p",[a._v("在 tabular 环境中，用 "),s("strong",[a._v("&")]),a._v(" 跳入下一列，用 "),s("strong",[a._v("\\")]),a._v(" 开始新的一行，用 "),s("strong",[a._v("\\hline")]),a._v(" 插入水平表线。用 "),s("strong",[a._v("\\cline{j-i}")]),a._v(" 可添加部分表线，其中 j 和 i 分别表示表线的起始列和终止列的序号。")]),a._v(" "),s("p",[a._v("用表格环境排印的材料总是呆在同一页上。如果要排印一个长表格，可以看一下 "),s("strong",[a._v("supertabular")]),a._v(" 和 "),s("strong",[a._v("longtabular")]),a._v(" 环境。")]),a._v(" "),s("h5",{attrs:{id:"浮动体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浮动体","aria-hidden":"true"}},[a._v("#")]),a._v(" 浮动体")]),a._v(" "),s("h5",{attrs:{id:"保护脆弱命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#保护脆弱命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 保护脆弱命令")])])},[],!1,null,null,null);t.default=r.exports}}]);