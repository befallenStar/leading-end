# css 基本概念
```
1.
<head>
    <style type="text/css">
        <!--公共样式声明
            选择器{
                属性:属性值;
                ......
            }
        -->
    </style>
</head>
```
```
2.
在标签内部定义style属性
```
```
3.
<link rel="stylesheet" type="text/css" href="">
<!--声明外部样式-->
```
## 选择器
- 基本选择器
  + \* 选择所有的标签
  + .类名 根据类名选择具体的标签
  + 标签名 选择所有此标签
  + #id名 根据id选择具体的标签
- 扩展选择器
  + 组合选择器 不同选择器用逗号隔开选择不同选择器
  + 子标签选择器 从父标签层层选择对应子标签
  + 属性选择器 标签[属性=属性值] 选择指定标签对应属性的标签
- 伪类
  + :active 被激活的元素
  + :focus 拥有焦点的元素
  + :hover 鼠标悬浮的元素
  + :link 未被访问的链接
  + :visited 已被访问的链接
  + :first-child 元素的第一个子元素
  + :lang 带有指定lang属性的元素
## 盒子模型
- margin 外边距
- border 边框
- padding 内边距
## position 定位
- relative 相对定位 相对原来元素所在的位置
- absolute 绝对定位 相对页面的位置或者相对position=relative的父级元素的位置
- fixed 固定定位 固定在浏览器中显示的位置