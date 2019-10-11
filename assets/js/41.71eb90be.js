(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{296:function(e,r,t){"use strict";t.r(r);var s=t(0),_=Object(s.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("ol",[t("li",[e._v("在进行解空间搜索时，在搜索可行解域的同时也可以考虑搜索不可行解域。")])]),e._v(" "),t("p",[e._v("def")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("当我们使用$new$给指针开辟一块内存后，我们有可能一不小心就忘了释放掉已不再使用的内存，从而导致资源泄漏（resoure leak，在这里也就是内存泄漏）。")]),e._v(" "),t("p",[e._v("因此，我们使用智能指针的原因至少有以下三点：")]),e._v(" "),t("p",[e._v("1）智能指针能够帮助我们处理资源泄露问题；")]),e._v(" "),t("p",[e._v("2）它也能够帮我们处理空悬指针的问题；")]),e._v(" "),t("p",[e._v("3）它还能够帮我们处理比较隐晦的由异常造成的资源泄露。")])])]),e._v(" "),t("h3",{attrs:{id:"智能指针"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#智能指针","aria-hidden":"true"}},[e._v("#")]),e._v(" 智能指针")]),e._v(" "),t("p",[e._v("自C++11起，C++标准提供两大类型的智能指针：")]),e._v(" "),t("p",[e._v("1. Class shared_ptr实现**共享式拥有（shared ownership）**概念。多个智能指针可以指向相同对象，该对象和其相关资源会在“最后一个引用（reference）被销毁”时候释放。为了在结构复杂的情境中执行上述工作，标准库提供了weak_ptr、bad_weak_ptr和enable_shared_from_this等辅助类。")]),e._v(" "),t("p",[e._v("2. Class unique_ptr实现**独占式拥有（exclusive ownership）**或严格拥有（strict ownership）概念，保证同一时间内只有一个智能指针可以指向该对象。它对于避免资源泄露（resourece leak）——例如“以new创建对象后因为发生异常而忘记调用delete”——特别有用。")])])},[],!1,null,null,null);r.default=_.exports}}]);