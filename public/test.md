# My CV

## scp 远程上传文件
```shell
scp 本地文件路径 用户名@服务器ip:目标路径
```

```
scp -r 本地文件夹路径 用户名@服务器ip:目标路径
```

## SSH 连接
```
ssh root@xxx.xxx.xxx
```
## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### 添加环境变量 XXX 说明

```
step1：根目录添加.env.XXX文件
step2：src/api/server.js中添加XXX对象，参照production配置
step3：src/api/axios-interceptor-crypto.js中ClientInfoMaps对象添加         XXX环境配置信息
```

### Git 同步库

```
git remote add upstream http://xxx.git
```

执行 git pull upstream master，其中 pull=fetch+merge.

### vscode 配置自动保存安装 eslint 格式化

配置 1：

```json
{
  "editor.quickSuggestions": {
    //开启自动显示建议
    "other": true,
    "comments": true,
    "strings": true
  },
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  // 每次保存的时候自动格式化
  "editor.formatOnSave": true,
  // 每次保存的时候将代码按eslint格式进行修复
  "eslint.autoFixOnSave": true,
  // 添加 vue 支持
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  // 让prettier使用eslint的代码格式进行校验
  "prettier.eslintIntegration": true,
  // 去掉代码结尾的分号
  "prettier.semi": false,
  // 使用单引号替代双引号
  "prettier.singleQuote": true,
  // 让函数(名)和后面的括号之间加个空格
  // "javascript.format.insertSpaceBeforeFunctionParenthesis": false,
  // html格式化，这个按用户自身习惯选择
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  // 让vue中的js按编辑器自带的ts格式进行格式化
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-aligned"
      // vue组件中html代码格式化样式
    }
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/dist": true
  },
  "emmet.syntaxProfiles": {
    "javascript": "jsx",
    "vue": "html",
    "vue-html": "html"
  },
  // 设置字体
  "editor.fontFamily": "'Droid Sans Mono', 'Courier New', monospace, 'Droid Sans Fallback'",
  // vscode 程序title位置显示内容，这里设置了显示路径
  "window.title": "${dirty}${activeEditorMedium}${separator}${rootName}",
  // 编辑器建议 显示在头部
  "editor.snippetSuggestions": "top",
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue"
}
```

配置 2：

``` json
// {
//     "explorer.confirmDelete": false,
//     "[javascript]": {
//         "editor.defaultFormatter": "HookyQR.beautify"
//     },
//     "[vue]": {
//         "editor.defaultFormatter": "octref.vetur"
//     },
//     "vetur.completion.scaffoldSnippetSources": {

//     },
//     "vetur.grammar.customBlocks": {

//     },
//     "eslint.trace.server": null,
//     "eslint.runtime": ""
// }
{
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  // #每次保存的时候自动格式化
  "editor.formatOnSave": false,
  // #每次保存的时候将代码按eslint格式进行修复
  "eslint.autoFixOnSave": false,
  // 添加 vue 支持
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  // #让prettier使用eslint的代码格式进行校验
  "prettier.eslintIntegration": true,
  // #去掉代码结尾的分号
  "prettier.semi": false,
  // #使用带引号替代双引号
  "prettier.singleQuote": true,
  // #让函数(名)和后面的括号之间加个空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  // #这个按用户自身习惯选择
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  // #让vue中的js按编辑器自带的ts格式进行格式化
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatterOptions": {
    // "js-beautify-html": {
    //   "wrap_attributes": "force-aligned"
    //   // #vue组件中html代码格式化样式
    // },
    "prettyhtml": {
      "printWidth": 160
    },
    "prettier": {
      "singleQuote": true,
      "proseWrap": "never",
      "printWidth": 130
    }
  },
  // 格式化stylus, 需安装Manta's Stylus Supremacy插件
  "stylusSupremacy.insertColons": false, // 是否插入冒号
  "stylusSupremacy.insertSemicolons": false, // 是否插入分好
  "stylusSupremacy.insertBraces": false, // 是否插入大括号
  "stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
  "stylusSupremacy.insertNewLineAroundBlocks": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.runtime": "",
  "eslint.codeAction.disableRuleComment": {},
  "[javascript]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  "[html]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  "explorer.confirmDelete": false,
  "[jsonc]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  "liveServer.settings.port": 8088,
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "[json]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  "[scss]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  "window.zoomLevel": 0 // 两个选择器中是否换行
}

```

### js代码

```js
const a = 1;
function b(){
  console.log(a)
}
b();
```
