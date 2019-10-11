(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{294:function(t,n,_){"use strict";_.r(n);var v=_(0),s=Object(v.a)({},function(){var t=this,n=t.$createElement,_=t._self._c||n;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("ol",[_("li",[t._v("对一个已知对象进行拷贝，编译系统会自动调用一种构造函数——"),_("strong",[t._v("拷贝构造函数")]),t._v("，如果用户未定义拷贝构造函数，则会调用"),_("strong",[t._v("默认拷贝构造函数。")])])]),t._v(" "),_("p",[_("strong",[t._v("浅拷贝")]),t._v("：编译系统在我们没有自己定义拷贝构造函数时，会在拷贝对象时调用默认拷贝构造函数，进行的是"),_("strong",[t._v("浅拷贝！"),_("strong",[t._v("即对指针name拷贝后会出现两个指针指向同一个内存空间。在第一个对象进行析构后，第二个拷贝后的对象就成了")]),t._v("野指针")]),t._v("。")]),t._v(" "),_("p",[t._v("所以，在对"),_("strong",[t._v("含有指针成员")]),t._v("的对象进行拷贝时，必须要自己定义拷贝构造函数，使拷贝后的对象指针成员有自己的内存空间，即"),_("strong",[t._v("进行深拷贝，这样就避免了野指针的产生")]),t._v("。")]),t._v(" "),_("p",[t._v("**总结：**浅拷贝只是对指针的拷贝，拷贝后两个指针指向同一个内存空间，深拷贝不但对指针进行拷贝，而且对指针指向的内容进行拷贝，经深拷贝后的指针是指向两个不同地址的指针。\n"),_("strong",[t._v("Notes：")]),t._v("\n当对象中存在指针成员时，除了在复制对象时需要考虑自定义拷贝构造函数，还应该考虑以下两种情形：\n1.当函数的参数为对象时，实参传递给形参的实际上是实参的一个拷贝对象，系统自动通过拷贝构造函数实现；\n2.当函数的返回值为一个对象时，该对象实际上是函数内对象的一个拷贝，用于返回函数调用处。")]),t._v(" "),_("p",[t._v("3.浅拷贝带来问题的本质在于析构函数释放多次堆内存，使用std::shared_ptr，可以完美解决这个问题。")])])},[],!1,null,null,null);n.default=s.exports}}]);