screens: 页面级别代码

联合类型：

1. [P in T]: T[P]
2. K extends U，相当于一个遍历，联合类型中的每一个元素都会拿去做判断。

Omit<T, 'A' | 'B'>

Pick: Pick
Omit：Pick + Exclude
