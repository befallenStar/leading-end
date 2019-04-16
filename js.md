# js
```
1.
<script type="text/javascript">
</script>
```
```
2.
<script src="" type="text/javascript" charset="utf-8" />
```
## var 声明变量
### 同名变量不报错 只覆盖
## 数据类型 typeof获取
- number
- string
- boolean
- object
- null 空对象赋值
- undefined 变量声明没有赋值
## 数据强转 开头大写的数据类型(变量名)
## 算术运算
- 加法与string类型 转换成字符串连接
- 其余运算转换成number进行运算
## 相等判断
### 先判断类型 再判断值
- == 类型不等强转再判断
```
null==undefined;//true
```
- === 类型不等直接false
## 数组
```
var arr1=new Array();
var arr2=new Array(5);//arr2.length==5
var arr3=[1,2,3,4,5];//可以为空
```
- 数组的内容可以是不同的数据元素
- 数组长度是数组最后一个下标+1或直接赋值
  + 长度大于原有长度 在后面填充
  + 长度小于原有长度 直接截取
- 未被赋值的数组元素填充为空
- 不存在指针溢出异常
- for(each)遍历的时候得到的仍然是下标
### 数组基本操作
- concat 连接数组
- join 用指定字符串把数组连接起来
- pop 弹出数组最后一个元素并返回该元素
- push 在数组后面添加元素并返回数组长度
- reverse 翻转数组并返回该数组
- shift 移除第一个元素并返回该元素
- unshift 将指定元素插入数组头并返回数组长度
- sort 排序
- splice(start, deleteCount, [item1[, item2[, . . . [,itemN]]]]) 从start开始移除deleteCount个元素并在移除元素的位置上依次插入item1-itemN，返回移除的元素。结尾没有元素填充的，数组长度减少；中间没有元素填充的，用空填充
## 函数
### 声明
```
1.
function 函数名(参数名1[, 参数名2[, . . . [, 参数名n]]]){函数体}
```
```
2.
var 函数名=new Function(["参数1",["参数2",...["参数n",]]]]"函数体");
```
```
3.
var 函数名=function(参数名1[, 参数名2[, . . . [, 参数名n]]]){函数体}
```
### 调用
- 可以直接在代码域调用
- 可以添加在html元素属性中，通过元素对应事件调用
- 超链接调用 javascript:函数名([形参列表])
## 类
### 声明
通过构造函数声明
```
function 类名(形参列表){
    //用形参给属性赋值
    this.属性名=形参;
    this.属性名=函数;
}
//给方法开辟独立的数据区，节省空间
类名.prototype.方法名=函数;
```
对象变量可以动态添加
### “继承”
子类作为父类的成员变量被声明，或者直接将prototype赋值为子类对象
## 自定义对象
可以不预先定义类而直接使用对象进行赋值等操作
```
1.
var 对象名=new Object();
对象名.属性名=属性值;
```
```
2.
var 对象名={};
对象名.属性名=属性值;
```
## 常用内置对象
查看api
- String
- Date
- Math
- Global
## 事件机制
- 单双击事件 onclick ondblclick
- 鼠标事件 onmouseover onmousemove onmouseout
- 键盘事件 onkeyup onkeydown
- 焦点事件 onfocus onblur
- 页面加载事件 onload
- 值改变事件 onchange
### 添加事件
- 在html元素对应属性中添加对应事件函数
- 
---
## BOM浏览器对象模型
浏览器的内核语言支持规范，规范浏览器对js语言的支持，让js能直接调用浏览器本身的功能

---
### window对象
调用方法时window关键字可以省略不写
- 框体方法
  + alert   警告框  无返回值
  + confirm 确认框  点击确定返回true，点击取消返回false
  + prompt  提示框  点击确定返回空值或用户输入内容，点击取消返回null
- 定时和间隔执行方法
  + setTimeout  定时执行指定函数            返回定时器线程id
  + setInterval 间隔一段时间执行指定函数    返回间隔器线程id
  + clearTimeout    停止指定id定时器
  + clearInterval   停止指定id间隔器
- 子窗口方法
  + open 根据实参决定打开页面及打开方法
  + close 关闭由open打开的页面
  + opener 父页面对象，用以调用父页面函数
- 浏览器属性
  + 地址栏属性 location
    * href
    * reload
  + 历史记录属性 history
    * forward
    * back
    * go
  + 屏幕属性 screen
    * width
    * height
  + 浏览器配置属性 navigator
    * userAgent
  + 主体面板属性(document)
### document对象
### form表单