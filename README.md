# 指南

```tree
project
├─ .husky
├─ __tests__
│  └─ App-test.tsx
├─ android
├─ ios
├─ src                          // 项目源代码
│  ├─ assets                    // 静态资源
│  │  ├─ fonts                  // 字体资源
│  │  ├─ images                 // 图片
│  │  └─ styles                 // 样式
│  │     ├─ common.ts           // 公共样式
│  │     ├─ components          // 组件样式
│  │     └─ screens             // 页面样式
│  ├─ components                // 组件
│  │  ├─ base                   // 基础组件
│  │  └─ common                 // 公共组件
│  ├─ config                    // 项目配置
│  │  └─ config.ts
│  ├─ navigator                 // 项目路由导航
│  │  ├─ index.ts
│  │  └─ navigator.tsx
│  ├─ screens                   // 所有页面目录
│  │  ├─ README.md
│  │  └─ counter.tsx
│  ├─ service                   // 所有网络请求存放目录
│  │  └─ todos.ts
│  ├─ store                     // 所有redux相关
│  │  ├─ README.md
│  │  ├─ actions
│  │  │  └─ counter.ts
│  │  ├─ constants
│  │  │  └─ counter.ts
│  │  ├─ reducers
│  │  │  ├─ counter.ts
│  │  │  └─ index.ts
│  │  └─ store.ts
│  ├─ types                     // 项目数据结构的类型
│  │  ├─ screens                // 页面相关
│  │  │  └─ README.md
│  │  ├─ service                // 接口相关
│  │  │  ├─ README.md
│  │  │  └─ todo.ts
│  │  └─ store                  // redux相关
│  │     ├─ README.md
│  │     └─ actions
│  │        └─ counter.ts
│  ├ utils                      // 工具库
│  │  ├─ README.md
│  │  ├─ fetch.ts
│  │  ├─ internet.ts
│  │  ├─ responsive.ts
│  │  └─ status-code.ts
│  ├── App.tsx                  // container                
│  └── Base.tsx                 // 基类
├─ .buckconfig
├─ .editorconfig
├─ .eslintrc.js
├─ .gitattributes
├─ .gitignore
├─ .prettierignore
├─ .prettierrc.js
├─ .watchmanconfig
├─ app.json
├─ babel.config.js
├─ index.js                     // 入口文件
├─ metro.config.js
├─ package-lock.json
├─ package.json
├─ README.md
├─ tsconfig.json
└─ yarn.lock

```

## 风格指南

- 除ios和android文件夹内的代码外，其余所有代码层级缩进4个空格
- 除动态样式外，不得在行内写样式
- 每行语句结尾必须添加分号
- 除了标签行内的属性使用双引号外，其余的都是用单引号
- 解构数据时，括号的前后必须留空格
- 除了组件外，utils、网络请求、图片、样式等文件名都小写，可用短横线连接("-")
- 所有的组件文件名都大写，除复杂组件外，不得用文件夹嵌套；若复杂组件需使用文件夹嵌套时，文件夹命名按***小写中短横线(-)**连接
- 所有事件的方法名都采用小驼峰的命名方法
- 除匿名函数外，其余的事件方法必须使用`function`声明
- 除样式文件外，其余的文件都采用对象的方式导出，方便解构调用

Tips:
项目开启了eslint和husky的双重校验，如果未按照规范编码，则`git commit`时会被拦截而导致commit不成功，若未成功提交，终端中会有相应提示（项目中采用的规范基本上都是沿用了angular规范）
commit规范也将遵循angular提交规范，只不过项目中没有强制限制commit格式，建议格式如下：`git commit -m "<type>(<scope>): <subject>`

## 提交规范

### type(必须)

| 类型      | 说明                                             |
| --------- | ------------------------------------------------ |
| feat      | 新增功能                                         |
| fix       | Bug修复                                          |
| perf      | 提高代码性能的变更，比如提升性能、体验           |
| style     | 代码风格变更，比如：删除多余的空格、空行         |
| refactor  | 重构（即不是新增功能，也不是修改bug的代码变动）  |
| chore     | 构建过程或辅助工具的变动                         |
| UI        | 视图相关                                         |
| component | 组件相关                                         |
| test      | 单元测试相关                                     |
| docs      | 文档相关                                         |
| ci        | 持续集成和部署相关的改动 ，比如CI/CD配置文件更新 |
| merge     | 代码合并                                         |
| revert    | 代码回滚                                         |

### scope(可选)

scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等

### subject(必须)

- subject是commit目的的简短描述，不超过50个字符。
- 冒号与subject之间间隔一个空格

> 结尾不加句号或其他标点符号。
> 根据以上规范git commit message将是如下的格式：

```shell
git commit -m "feat(UI): 添加home页面广告模块"
git commit -m "fix(cart): 修复添加购物车时数量递增问题"
```
