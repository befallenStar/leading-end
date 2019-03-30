# html基本标签
---
## ***head***
### title 页面标题
### meta 页面属性
---
## ***body***
### 文本
#### h1-h6 6级标题
#### p 段落
- br 换行
- hr 水平线
- **b 加黑**
- *i 斜体*
- u 下划线
- del 删除线
### 列表
- ul 无序列表
- ol 有序列表
    + li 列元素
- dl 自定义列表
    + dt 自定义列表表头
    + dd 自定义列表列元素
### img 图片
- src 本地路径或网络资源路径
- title 提示文本
- alt 错误文本
### a 超链接
- href 链接路径或指向的锚点名
- name 锚点名
- target 跳转页面的方法
  + _blank 在新标签页打开
  + _self 在同一窗口打开
  + _parent 在父窗口打开
  + _top 在顶级窗口打开
### table 表格
- tr 行
- th 标题行
- td 内容行
    + rowspan 行合并
    + colspan 列合并
---
### iframe 内嵌对象
### frameset 页面集
- rows 按行比例分隔页面 *为填充
- cols 按列比例分隔页面 *为填充
#### frame 页面
### form 表单
- action 提交地址
- method 提交方式
  + get 小量数据 表单数据用?隔开 以键值对形式显示在地址栏 不安全
  + post 大量数据 提交到服务器上 隐式提交 安全
### input 表单项
#### 须定义name属性才能提交数据
- type 类型
  + text 文本
  + password 密码
  + submit 提交按钮
  + reset 重置按钮
  + button 普通按钮
  + hidden 隐藏标签
- name 键值
### select 下拉框
- option 选项
### textarea 文本域
- rows 行数
- cols 列数
### div 块