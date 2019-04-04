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