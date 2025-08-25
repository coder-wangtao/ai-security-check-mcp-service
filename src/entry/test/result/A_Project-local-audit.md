# `xiyongApplication`审计结果


您所审计的工程总共有 **48** 个风险漏洞。

其中：

- **严重漏洞**：共计 **8** 个
- **高危漏洞**：共计 **29** 个
- **中危漏洞**：共计 **10** 个
- **低危漏洞**：共计 **1** 个

> 说明：
>
> - **严重**漏洞被认为是极其严重的，应该立即修复。
> - **高危**漏洞被认为是严重的，应该尽快修复。
> - **中危**漏洞被认为是中等严重的，可以选择在时间允许时修复。
> - **低危**漏洞被认为是轻微的，可以根据自行需要进行修复。

下面是漏洞的详细信息


## 严重漏洞

共计 **8** 个


### `babel-traverse`

**漏洞描述**：

- Babel vulnerable to arbitrary code execution when compiling specifically crafted malicious code
  - npm漏洞编号：`1096879`
  - 漏洞详细说明：https://github.com/advisories/GHSA-67hx-6x53-jw92
  - 漏洞等级：严重
  - 受影响的版本：`<7.23.2`


**依赖关系**：



- `xiyongApplication` / `babel-register` / `babel-core` / `babel-traverse`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `babel-core` / `babel-traverse`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `babel-core` / `babel-traverse`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `babel-core` / `babel-traverse`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `babel-core` / `babel-traverse`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `babel-core` / `babel-traverse`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `babel-core` / `babel-traverse`

  

- `xiyongApplication` / `babel-helpers` / `babel-template` / `babel-traverse`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `babel-jest` / `babel-plugin-istanbul` / `istanbul-lib-instrument` / `babel-traverse`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `babel-jest` / `babel-plugin-istanbul` / `istanbul-lib-instrument` / `babel-traverse`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `babel-jest` / `babel-plugin-istanbul` / `istanbul-lib-instrument` / `babel-traverse`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `babel-jest` / `babel-plugin-istanbul` / `istanbul-lib-instrument` / `babel-traverse`

  

- `xiyongApplication` / `jest` / `jest-cli` / `istanbul-api` / `istanbul-lib-instrument` / `babel-traverse`

  

- `xiyongApplication` / `jest` / `jest-cli` / `istanbul-lib-instrument` / `babel-traverse`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-jasmine2` / `babel-traverse`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-jasmine2` / `babel-traverse`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-jasmine2` / `babel-traverse`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-jasmine2` / `babel-traverse`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-jasmine2` / `babel-traverse`

  
  

**漏洞包所在目录**：

- `node_modules/babel-traverse`


### `eventsource`

**漏洞描述**：

- Exposure of Sensitive Information in eventsource
  - npm漏洞编号：`1095006`
  - 漏洞详细说明：https://github.com/advisories/GHSA-6h5x-7c5m-7cr7
  - 漏洞等级：严重
  - 受影响的版本：`<1.1.1`


**依赖关系**：



- `xiyongApplication` / `react-dev-utils` / `sockjs-client` / `eventsource`

  

- `xiyongApplication` / `webpack-dev-server` / `sockjs-client` / `eventsource`

  
  

**漏洞包所在目录**：

- `node_modules/eventsource`


### `form-data`

**漏洞描述**：

- form-data uses unsafe random function in form-data for choosing boundary
  - npm漏洞编号：`1106509`
  - 漏洞详细说明：https://github.com/advisories/GHSA-fjxv-7rqg-78g4
  - 漏洞等级：严重
  - 受影响的版本：`<2.5.4`


**依赖关系**：



- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request` / `form-data`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `form-data`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `form-data`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `form-data`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `form-data`

  

- `xiyongApplication` / `less` / `request` / `form-data`

  

- `xiyongApplication` / `node-sass` / `node-gyp` / `request` / `form-data`

  

- `xiyongApplication` / `node-sass` / `request` / `form-data`

  

- `xiyongApplication` / `electron` / `electron-download` / `nugget` / `request` / `form-data`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `form-data`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `form-data`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `form-data`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `form-data`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `form-data`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `form-data`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `form-data`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `form-data`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `form-data`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `form-data`

  
  

**漏洞包所在目录**：

- `node_modules/form-data`

- `node_modules/less/node_modules/form-data`


### `loader-utils`

**漏洞描述**：

- Prototype pollution in webpack loader-utils
  - npm漏洞编号：`1094088`
  - 漏洞详细说明：https://github.com/advisories/GHSA-76p3-8jx3-jpfq
  - 漏洞等级：严重
  - 受影响的版本：`<1.4.1`

- loader-utils is vulnerable to Regular Expression Denial of Service (ReDoS) via url variable
  - npm漏洞编号：`1095055`
  - 漏洞详细说明：https://github.com/advisories/GHSA-3rfm-jhwj-7488
  - 漏洞等级：高危
  - 受影响的版本：`>=1.0.0 <1.4.2`

- loader-utils is vulnerable to Regular Expression Denial of Service (ReDoS)
  - npm漏洞编号：`1097143`
  - 漏洞详细说明：https://github.com/advisories/GHSA-hhq3-ff78-jv3g
  - 漏洞等级：高危
  - 受影响的版本：`>=1.0.0 <1.4.2`


**依赖关系**：



- `xiyongApplication` / `react-dev-utils` / `loader-utils`

  
  

**漏洞包所在目录**：

- `node_modules/react-dev-utils/node_modules/loader-utils`


### `react-dev-utils`

**漏洞描述**：

- react-dev-utils OS Command Injection in function `getProcessForPort`
  - npm漏洞编号：`1089062`
  - 漏洞详细说明：https://github.com/advisories/GHSA-5q6m-3h65-w53x
  - 漏洞等级：中危
  - 受影响的版本：`>=0.4.0 <11.0.4`


**依赖关系**：



- `xiyongApplication` / `react-dev-utils`

  
  

**漏洞包所在目录**：

- `node_modules/react-dev-utils`


### `request`

**漏洞描述**：

- Server-Side Request Forgery in Request
  - npm漏洞编号：`1096727`
  - 漏洞详细说明：https://github.com/advisories/GHSA-p8p7-x288-28g6
  - 漏洞等级：中危
  - 受影响的版本：`<=2.88.2`


**依赖关系**：



- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request`

  

- `xiyongApplication` / `less` / `request`

  

- `xiyongApplication` / `node-sass` / `node-gyp` / `request`

  

- `xiyongApplication` / `node-sass` / `request`

  

- `xiyongApplication` / `electron` / `electron-download` / `nugget` / `request`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request`

  
  

**漏洞包所在目录**：

- `node_modules/less/node_modules/request`

- `node_modules/request`


### `shell-quote`

**漏洞描述**：

- Improper Neutralization of Special Elements used in a Command in Shell-quote
  - npm漏洞编号：`1096375`
  - 漏洞详细说明：https://github.com/advisories/GHSA-g4rg-993r-mgx7
  - 漏洞等级：严重
  - 受影响的版本：`<=1.7.2`


**依赖关系**：



- `xiyongApplication` / `react-dev-utils` / `shell-quote`

  
  

**漏洞包所在目录**：

- `node_modules/shell-quote`


### `webpack-dev-server`

**漏洞描述**：

- Missing Origin Validation in webpack-dev-server
  - npm漏洞编号：`1087645`
  - 漏洞详细说明：https://github.com/advisories/GHSA-cf66-xwfp-gvc4
  - 漏洞等级：高危
  - 受影响的版本：`<3.1.11`

- webpack-dev-server users' source code may be stolen when they access a malicious web site with non-Chromium based browser
  - npm漏洞编号：`1105256`
  - 漏洞详细说明：https://github.com/advisories/GHSA-9jgg-88mc-972h
  - 漏洞等级：中危
  - 受影响的版本：`<=5.2.0`

- webpack-dev-server users' source code may be stolen when they access a malicious web site
  - npm漏洞编号：`1105257`
  - 漏洞详细说明：https://github.com/advisories/GHSA-4v9v-hfq4-rm2v
  - 漏洞等级：中危
  - 受影响的版本：`<=5.2.0`


**依赖关系**：



- `xiyongApplication` / `webpack-dev-server`

  
  

**漏洞包所在目录**：

- `node_modules/webpack-dev-server`





## 高危漏洞

共计 **29** 个


### `ansi-html`

**漏洞描述**：

- Uncontrolled Resource Consumption in ansi-html
  - npm漏洞编号：`1102319`
  - 漏洞详细说明：https://github.com/advisories/GHSA-whgm-jr23-g3j9
  - 漏洞等级：高危
  - 受影响的版本：`<0.0.8`


**依赖关系**：



- `xiyongApplication` / `webpack-dev-server` / `ansi-html`

  
  

**漏洞包所在目录**：

- `node_modules/ansi-html`


### `axios`

**漏洞描述**：

- Axios vulnerable to Server-Side Request Forgery
  - npm漏洞编号：`1090049`
  - 漏洞详细说明：https://github.com/advisories/GHSA-4w2v-q235-vp99
  - 漏洞等级：中危
  - 受影响的版本：`<0.21.1`

- Axios Cross-Site Request Forgery Vulnerability
  - npm漏洞编号：`1097679`
  - 漏洞详细说明：https://github.com/advisories/GHSA-wf5p-g6vw-rhxx
  - 漏洞等级：中危
  - 受影响的版本：`>=0.8.1 <0.28.0`

- axios Inefficient Regular Expression Complexity vulnerability
  - npm漏洞编号：`1102326`
  - 漏洞详细说明：https://github.com/advisories/GHSA-cph5-m8f7-6c5x
  - 漏洞等级：高危
  - 受影响的版本：`<0.21.2`

- axios Requests Vulnerable To Possible SSRF and Credential Leakage via Absolute URL
  - npm漏洞编号：`1103617`
  - 漏洞详细说明：https://github.com/advisories/GHSA-jr5f-v2jv-69x6
  - 漏洞等级：高危
  - 受影响的版本：`<0.30.0`


**依赖关系**：



- `xiyongApplication` / `axios`

  
  

**漏洞包所在目录**：

- `node_modules/axios`


### `braces`

**漏洞描述**：

- Regular Expression Denial of Service in braces
  - npm漏洞编号：`1085715`
  - 漏洞详细说明：https://github.com/advisories/GHSA-g95f-p29q-9xw4
  - 漏洞等级：低危
  - 受影响的版本：`<2.3.1`

- Regular Expression Denial of Service (ReDoS) in braces
  - npm漏洞编号：`1089939`
  - 漏洞详细说明：https://github.com/advisories/GHSA-cwfw-4gq5-mrqx
  - 漏洞等级：低危
  - 受影响的版本：`<2.3.1`

- Uncontrolled resource consumption in braces
  - npm漏洞编号：`1098094`
  - 漏洞详细说明：https://github.com/advisories/GHSA-grv7-fg5c-xmjg
  - 漏洞等级：高危
  - 受影响的版本：`<3.0.3`


**依赖关系**：



- `xiyongApplication` / `watchpack` / `watchpack-chokidar2` / `chokidar` / `braces`

  

- `xiyongApplication` / `webpack-dev-server` / `chokidar` / `braces`

  

- `xiyongApplication` / `watchpack` / `watchpack-chokidar2` / `chokidar` / `anymatch` / `micromatch` / `braces`

  

- `xiyongApplication` / `webpack-dev-server` / `chokidar` / `anymatch` / `micromatch` / `braces`

  

- `xiyongApplication` / `sane` / `anymatch` / `micromatch` / `braces`

  

- `xiyongApplication` / `awesome-typescript-loader` / `micromatch` / `braces`

  

- `xiyongApplication` / `react-dev-utils` / `globby` / `fast-glob` / `micromatch` / `braces`

  

- `xiyongApplication` / `webpack-dev-server` / `http-proxy-middleware` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-haste-map` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-haste-map` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-haste-map` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-haste-map` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-jasmine2` / `expect` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-jasmine2` / `expect` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-jasmine2` / `expect` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-jasmine2` / `expect` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-jasmine2` / `expect` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-jasmine2` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-jasmine2` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-jasmine2` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-jasmine2` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-jasmine2` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-snapshot` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-jasmine2` / `jest-snapshot` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-jasmine2` / `jest-snapshot` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-jasmine2` / `jest-snapshot` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-jasmine2` / `jest-snapshot` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-jasmine2` / `jest-snapshot` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest-resolve-dependencies` / `jest-snapshot` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-snapshot` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-snapshot` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-util` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-util` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-util` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-util` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-util` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jest-util` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jest-util` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jest-util` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jest-util` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jest-util` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-node` / `jest-util` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-node` / `jest-util` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-node` / `jest-util` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-node` / `jest-util` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-jasmine2` / `jest-util` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-jasmine2` / `jest-util` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-jasmine2` / `jest-util` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-jasmine2` / `jest-util` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-jasmine2` / `jest-util` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-util` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-util` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-util` / `jest-message-util` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `micromatch` / `braces`

  

- `xiyongApplication` / `watchpack` / `watchpack-chokidar2` / `chokidar` / `readdirp` / `micromatch` / `braces`

  

- `xiyongApplication` / `webpack-dev-server` / `chokidar` / `readdirp` / `micromatch` / `braces`

  

- `xiyongApplication` / `sane` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `babel-jest` / `babel-plugin-istanbul` / `test-exclude` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `babel-jest` / `babel-plugin-istanbul` / `test-exclude` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `babel-jest` / `babel-plugin-istanbul` / `test-exclude` / `micromatch` / `braces`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `babel-jest` / `babel-plugin-istanbul` / `test-exclude` / `micromatch` / `braces`

  

- `xiyongApplication` / `css-loader` / `webpack` / `micromatch` / `braces`

  

- `xiyongApplication` / `html-webpack-plugin` / `webpack` / `micromatch` / `braces`

  

- `xiyongApplication` / `mini-css-extract-plugin` / `webpack` / `micromatch` / `braces`

  

- `xiyongApplication` / `optimize-css-assets-webpack-plugin` / `webpack` / `micromatch` / `braces`

  

- `xiyongApplication` / `terser-webpack-plugin` / `webpack` / `micromatch` / `braces`

  

- `xiyongApplication` / `url-loader` / `webpack` / `micromatch` / `braces`

  

- `xiyongApplication` / `webpack-dev-server` / `webpack-dev-middleware` / `webpack` / `micromatch` / `braces`

  

- `xiyongApplication` / `webpack-dev-server` / `webpack` / `micromatch` / `braces`

  
  

**漏洞包所在目录**：

- `node_modules/braces`

- `node_modules/jest-cli/node_modules/braces`

- `node_modules/jest-config/node_modules/braces`

- `node_modules/jest-haste-map/node_modules/braces`

- `node_modules/jest-message-util/node_modules/braces`

- `node_modules/jest-runtime/node_modules/braces`

- `node_modules/test-exclude/node_modules/braces`


### `cross-spawn`

**漏洞描述**：

- Regular Expression Denial of Service (ReDoS) in cross-spawn
  - npm漏洞编号：`1104663`
  - 漏洞详细说明：https://github.com/advisories/GHSA-3xgq-45jj-v275
  - 漏洞等级：高危
  - 受影响的版本：`<6.0.6`


**依赖关系**：



- `xiyongApplication` / `node-sass` / `cross-spawn`

  

- `xiyongApplication` / `react-dev-utils` / `cross-spawn`

  
  

**漏洞包所在目录**：

- `node_modules/node-sass/node_modules/cross-spawn`

- `node_modules/react-dev-utils/node_modules/cross-spawn`


### `electron`

**漏洞描述**：

- Context isolation bypass via leaked cross-context objects in Electron
  - npm漏洞编号：`1087468`
  - 漏洞详细说明：https://github.com/advisories/GHSA-m93v-9qjc-3g79
  - 漏洞等级：高危
  - 受影响的版本：`<7.2.4`

- Context isolation bypass via contextBridge in Electron
  - npm漏洞编号：`1087469`
  - 漏洞详细说明：https://github.com/advisories/GHSA-h9jc-284h-533g
  - 漏洞等级：高危
  - 受影响的版本：`<7.2.4`

- Arbitrary file read via window-open IPC in Electron
  - npm漏洞编号：`1087470`
  - 漏洞详细说明：https://github.com/advisories/GHSA-f9mq-jph6-9mhm
  - 漏洞等级：中危
  - 受影响的版本：`<7.2.4`

- AutoUpdater module fails to validate certain nested components of the bundle
  - npm漏洞编号：`1088971`
  - 漏洞详细说明：https://github.com/advisories/GHSA-77xc-hjv8-ww97
  - 漏洞等级：中危
  - 受影响的版本：`<15.5.0`

- Compromised child renderer processes could obtain IPC access without nodeIntegrationInSubFrames being enabled
  - npm漏洞编号：`1088975`
  - 漏洞详细说明：https://github.com/advisories/GHSA-mq8j-3h7h-p8g7
  - 漏洞等级：低危
  - 受影响的版本：`<15.5.5`

- Exfiltration of hashed SMB credentials on Windows via file:// redirect
  - npm漏洞编号：`1089220`
  - 漏洞详细说明：https://github.com/advisories/GHSA-p2jh-44qj-pf2v
  - 漏洞等级：中危
  - 受影响的版本：`<18.3.7`

- Electron's sandboxed renderers can obtain thumbnails of arbitrary files through the nativeImage API
  - npm漏洞编号：`1089278`
  - 漏洞详细说明：https://github.com/advisories/GHSA-mpjm-v997-c4h4
  - 漏洞等级：中危
  - 受影响的版本：`<11.5.0`

- Renderers can obtain access to random bluetooth device without permission in Electron
  - npm漏洞编号：`1092662`
  - 漏洞详细说明：https://github.com/advisories/GHSA-3p22-ghq8-v749
  - 漏洞等级：低危
  - 受影响的版本：`<13.6.6`

- Electron vulnerable to out-of-package code execution when launched with arbitrary cwd
  - npm漏洞编号：`1094579`
  - 漏洞详细说明：https://github.com/advisories/GHSA-7x97-j373-85x5
  - 漏洞等级：中危
  - 受影响的版本：`<22.3.19`

- Electron context isolation bypass via nested unserializable return value
  - npm漏洞编号：`1094583`
  - 漏洞详细说明：https://github.com/advisories/GHSA-p7v2-p9m8-qqg7
  - 漏洞等级：中危
  - 受影响的版本：`<22.3.6`

- Electron affected by libvpx's heap buffer overflow in vp8 encoding
  - npm漏洞编号：`1096494`
  - 漏洞详细说明：https://github.com/advisories/GHSA-qqvq-6xgj-jw8g
  - 漏洞等级：高危
  - 受影响的版本：`<22.3.25`

- ASAR Integrity bypass via filetype confusion in electron
  - npm漏洞编号：`1099657`
  - 漏洞详细说明：https://github.com/advisories/GHSA-7m48-wc93-9g85
  - 漏洞等级：中危
  - 受影响的版本：`<22.3.24`

- IPC messages delivered to the wrong frame in Electron
  - npm漏洞编号：`1105071`
  - 漏洞详细说明：https://github.com/advisories/GHSA-hvf8-h2qh-37m9
  - 漏洞等级：中危
  - 受影响的版本：`<9.4.0`

- Electron vulnerable to Heap Buffer Overflow in NativeImage
  - npm漏洞编号：`1105820`
  - 漏洞详细说明：https://github.com/advisories/GHSA-6r2x-8pq8-9489
  - 漏洞等级：中危
  - 受影响的版本：`<28.3.2`


**依赖关系**：



- `xiyongApplication` / `electron`

  
  

**漏洞包所在目录**：

- `node_modules/electron`


### `follow-redirects`

**漏洞描述**：

- Exposure of Sensitive Information to an Unauthorized Actor in follow-redirects
  - npm漏洞编号：`1092623`
  - 漏洞详细说明：https://github.com/advisories/GHSA-pw2r-vq6v-hr8c
  - 漏洞等级：中危
  - 受影响的版本：`<1.14.8`

- Follow Redirects improperly handles URLs in the url.parse() function
  - npm漏洞编号：`1096353`
  - 漏洞详细说明：https://github.com/advisories/GHSA-jchw-25xp-jwwc
  - 漏洞等级：中危
  - 受影响的版本：`<1.15.4`

- follow-redirects' Proxy-Authorization header kept across hosts
  - npm漏洞编号：`1096856`
  - 漏洞详细说明：https://github.com/advisories/GHSA-cxjh-pqwp-8mfp
  - 漏洞等级：中危
  - 受影响的版本：`<=1.15.5`

- Exposure of sensitive information in follow-redirects
  - npm漏洞编号：`1102323`
  - 漏洞详细说明：https://github.com/advisories/GHSA-74fj-2j2h-c42q
  - 漏洞等级：高危
  - 受影响的版本：`<1.14.7`


**依赖关系**：



- `xiyongApplication` / `axios` / `follow-redirects`

  
  

**漏洞包所在目录**：

- `node_modules/follow-redirects`


### `hawk`

**漏洞描述**：

- Uncontrolled Resource Consumption in Hawk
  - npm漏洞编号：`1095062`
  - 漏洞详细说明：https://github.com/advisories/GHSA-44pw-h2cw-w3vq
  - 漏洞等级：高危
  - 受影响的版本：`<9.0.1`


**依赖关系**：



- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk`

  

- `xiyongApplication` / `less` / `request` / `hawk`

  

- `xiyongApplication` / `node-sass` / `node-gyp` / `request` / `hawk`

  

- `xiyongApplication` / `node-sass` / `request` / `hawk`

  

- `xiyongApplication` / `electron` / `electron-download` / `nugget` / `request` / `hawk`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk`

  
  

**漏洞包所在目录**：

- `node_modules/hawk`


### `hoek`

**漏洞描述**：

- hoek subject to prototype pollution via the clone function.
  - npm漏洞编号：`1105092`
  - 漏洞详细说明：https://github.com/advisories/GHSA-c429-5p7v-vgjp
  - 漏洞等级：高危
  - 受影响的版本：`<=6.1.3`

- Prototype Pollution in hoek
  - npm漏洞编号：`1105121`
  - 漏洞详细说明：https://github.com/advisories/GHSA-jp4x-w63m-7wgm
  - 漏洞等级：高危
  - 受影响的版本：`<4.2.1`


**依赖关系**：



- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk` / `cryptiles` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk` / `cryptiles` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk` / `cryptiles` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk` / `cryptiles` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk` / `cryptiles` / `boom` / `hoek`

  

- `xiyongApplication` / `less` / `request` / `hawk` / `cryptiles` / `boom` / `hoek`

  

- `xiyongApplication` / `node-sass` / `node-gyp` / `request` / `hawk` / `cryptiles` / `boom` / `hoek`

  

- `xiyongApplication` / `node-sass` / `request` / `hawk` / `cryptiles` / `boom` / `hoek`

  

- `xiyongApplication` / `electron` / `electron-download` / `nugget` / `request` / `hawk` / `cryptiles` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk` / `cryptiles` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk` / `cryptiles` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk` / `cryptiles` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk` / `cryptiles` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk` / `cryptiles` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk` / `cryptiles` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk` / `cryptiles` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk` / `cryptiles` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk` / `cryptiles` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk` / `cryptiles` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk` / `boom` / `hoek`

  

- `xiyongApplication` / `less` / `request` / `hawk` / `boom` / `hoek`

  

- `xiyongApplication` / `node-sass` / `node-gyp` / `request` / `hawk` / `boom` / `hoek`

  

- `xiyongApplication` / `node-sass` / `request` / `hawk` / `boom` / `hoek`

  

- `xiyongApplication` / `electron` / `electron-download` / `nugget` / `request` / `hawk` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk` / `boom` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk` / `hoek`

  

- `xiyongApplication` / `less` / `request` / `hawk` / `hoek`

  

- `xiyongApplication` / `node-sass` / `node-gyp` / `request` / `hawk` / `hoek`

  

- `xiyongApplication` / `node-sass` / `request` / `hawk` / `hoek`

  

- `xiyongApplication` / `electron` / `electron-download` / `nugget` / `request` / `hawk` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk` / `hoek`

  

- `xiyongApplication` / `workbox-webpack-plugin` / `workbox-build` / `joi` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk` / `sntp` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk` / `sntp` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk` / `sntp` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk` / `sntp` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `hawk` / `sntp` / `hoek`

  

- `xiyongApplication` / `less` / `request` / `hawk` / `sntp` / `hoek`

  

- `xiyongApplication` / `node-sass` / `node-gyp` / `request` / `hawk` / `sntp` / `hoek`

  

- `xiyongApplication` / `node-sass` / `request` / `hawk` / `sntp` / `hoek`

  

- `xiyongApplication` / `electron` / `electron-download` / `nugget` / `request` / `hawk` / `sntp` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk` / `sntp` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk` / `sntp` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk` / `sntp` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk` / `sntp` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `hawk` / `sntp` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk` / `sntp` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk` / `sntp` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk` / `sntp` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk` / `sntp` / `hoek`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `hawk` / `sntp` / `hoek`

  

- `xiyongApplication` / `workbox-webpack-plugin` / `workbox-build` / `joi` / `topo` / `hoek`

  
  

**漏洞包所在目录**：

- `node_modules/boom/node_modules/hoek`

- `node_modules/hawk/node_modules/hoek`

- `node_modules/hoek`

- `node_modules/sntp/node_modules/hoek`


### `html-minifier`

**漏洞描述**：

- kangax html-minifier REDoS vulnerability
  - npm漏洞编号：`1105440`
  - 漏洞详细说明：https://github.com/advisories/GHSA-pfq8-rq6v-vf5m
  - 漏洞等级：高危
  - 受影响的版本：`<=4.0.0`


**依赖关系**：



- `xiyongApplication` / `html-webpack-plugin` / `html-minifier`

  
  

**漏洞包所在目录**：

- `node_modules/html-minifier`


### `http-proxy-middleware`

**漏洞描述**：

- Denial of service in http-proxy-middleware
  - npm漏洞编号：`1100223`
  - 漏洞详细说明：https://github.com/advisories/GHSA-c7qv-q95q-8v27
  - 漏洞等级：高危
  - 受影响的版本：`<2.0.7`


**依赖关系**：



- `xiyongApplication` / `webpack-dev-server` / `http-proxy-middleware`

  
  

**漏洞包所在目录**：

- `node_modules/http-proxy-middleware`


### `ip`

**漏洞描述**：

- ip SSRF improper categorization in isPublic
  - npm漏洞编号：`1101851`
  - 漏洞详细说明：https://github.com/advisories/GHSA-2p57-rm9w-gvfp
  - 漏洞等级：高危
  - 受影响的版本：`<=2.0.1`


**依赖关系**：



- `xiyongApplication` / `webpack-dev-server` / `bonjour` / `multicast-dns` / `dns-packet` / `ip`

  

- `xiyongApplication` / `webpack-dev-server` / `ip`

  
  

**漏洞包所在目录**：

- `node_modules/ip`


### `json5`

**漏洞描述**：

- Prototype Pollution in JSON5 via Parse Method
  - npm漏洞编号：`1096543`
  - 漏洞详细说明：https://github.com/advisories/GHSA-9c47-m6qq-7p4h
  - 漏洞等级：高危
  - 受影响的版本：`<1.0.2`


**依赖关系**：



- `xiyongApplication` / `babel-preset-react-app` / `@babel/core` / `json5`

  

- `xiyongApplication` / `babel-register` / `babel-core` / `json5`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `babel-core` / `json5`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `babel-core` / `json5`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `babel-core` / `json5`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `babel-core` / `json5`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `babel-core` / `json5`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `babel-core` / `json5`

  

- `xiyongApplication` / `react-dev-utils` / `loader-utils` / `json5`

  
  

**漏洞包所在目录**：

- `node_modules/json5`


### `lodash.template`

**漏洞描述**：

- Command Injection in lodash
  - npm漏洞编号：`1106902`
  - 漏洞详细说明：https://github.com/advisories/GHSA-35jh-r3h4-6jhm
  - 漏洞等级：高危
  - 受影响的版本：`<=4.5.0`


**依赖关系**：



- `xiyongApplication` / `workbox-webpack-plugin` / `workbox-build` / `lodash.template`

  
  

**漏洞包所在目录**：

- `node_modules/lodash.template`


### `merge`

**漏洞描述**：

- Prototype Pollution in merge
  - npm漏洞编号：`1096479`
  - 漏洞详细说明：https://github.com/advisories/GHSA-7wpw-2hjm-89gp
  - 漏洞等级：高危
  - 受影响的版本：`<2.1.1`


**依赖关系**：



- `xiyongApplication` / `sane` / `exec-sh` / `merge`

  

- `xiyongApplication` / `sane` / `watch` / `exec-sh` / `merge`

  
  

**漏洞包所在目录**：

- `node_modules/merge`


### `micromatch`

**漏洞描述**：

- Regular Expression Denial of Service (ReDoS) in micromatch
  - npm漏洞编号：`1098681`
  - 漏洞详细说明：https://github.com/advisories/GHSA-952p-6rrq-rcjv
  - 漏洞等级：中危
  - 受影响的版本：`<4.0.8`


**依赖关系**：



- `xiyongApplication` / `watchpack` / `watchpack-chokidar2` / `chokidar` / `anymatch` / `micromatch`

  

- `xiyongApplication` / `webpack-dev-server` / `chokidar` / `anymatch` / `micromatch`

  

- `xiyongApplication` / `sane` / `anymatch` / `micromatch`

  

- `xiyongApplication` / `awesome-typescript-loader` / `micromatch`

  

- `xiyongApplication` / `react-dev-utils` / `globby` / `fast-glob` / `micromatch`

  

- `xiyongApplication` / `webpack-dev-server` / `http-proxy-middleware` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-haste-map` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-haste-map` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-haste-map` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-haste-map` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-jasmine2` / `expect` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-jasmine2` / `expect` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-jasmine2` / `expect` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-jasmine2` / `expect` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-jasmine2` / `expect` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-jasmine2` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-jasmine2` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-jasmine2` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-jasmine2` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-jasmine2` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-snapshot` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-jasmine2` / `jest-snapshot` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-jasmine2` / `jest-snapshot` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-jasmine2` / `jest-snapshot` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-jasmine2` / `jest-snapshot` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-jasmine2` / `jest-snapshot` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest-resolve-dependencies` / `jest-snapshot` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-snapshot` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-snapshot` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-util` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-util` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-util` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-util` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-util` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jest-util` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jest-util` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jest-util` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jest-util` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jest-util` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-node` / `jest-util` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-node` / `jest-util` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-node` / `jest-util` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-node` / `jest-util` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-jasmine2` / `jest-util` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-jasmine2` / `jest-util` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-jasmine2` / `jest-util` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-jasmine2` / `jest-util` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-jasmine2` / `jest-util` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-util` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-util` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-util` / `jest-message-util` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `micromatch`

  

- `xiyongApplication` / `watchpack` / `watchpack-chokidar2` / `chokidar` / `readdirp` / `micromatch`

  

- `xiyongApplication` / `webpack-dev-server` / `chokidar` / `readdirp` / `micromatch`

  

- `xiyongApplication` / `sane` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `babel-jest` / `babel-plugin-istanbul` / `test-exclude` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `babel-jest` / `babel-plugin-istanbul` / `test-exclude` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `babel-jest` / `babel-plugin-istanbul` / `test-exclude` / `micromatch`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `babel-jest` / `babel-plugin-istanbul` / `test-exclude` / `micromatch`

  

- `xiyongApplication` / `css-loader` / `webpack` / `micromatch`

  

- `xiyongApplication` / `html-webpack-plugin` / `webpack` / `micromatch`

  

- `xiyongApplication` / `mini-css-extract-plugin` / `webpack` / `micromatch`

  

- `xiyongApplication` / `optimize-css-assets-webpack-plugin` / `webpack` / `micromatch`

  

- `xiyongApplication` / `terser-webpack-plugin` / `webpack` / `micromatch`

  

- `xiyongApplication` / `url-loader` / `webpack` / `micromatch`

  

- `xiyongApplication` / `webpack-dev-server` / `webpack-dev-middleware` / `webpack` / `micromatch`

  

- `xiyongApplication` / `webpack-dev-server` / `webpack` / `micromatch`

  
  

**漏洞包所在目录**：

- `node_modules/jest-cli/node_modules/micromatch`

- `node_modules/jest-config/node_modules/micromatch`

- `node_modules/jest-haste-map/node_modules/micromatch`

- `node_modules/jest-message-util/node_modules/micromatch`

- `node_modules/jest-runtime/node_modules/micromatch`

- `node_modules/micromatch`

- `node_modules/test-exclude/node_modules/micromatch`


### `minimatch`

**漏洞描述**：

- minimatch ReDoS vulnerability
  - npm漏洞编号：`1096485`
  - 漏洞详细说明：https://github.com/advisories/GHSA-f8q6-p94x-37v3
  - 漏洞等级：高危
  - 受影响的版本：`<3.0.5`


**依赖关系**：



- `xiyongApplication` / `react-dev-utils` / `recursive-readdir` / `minimatch`

  
  

**漏洞包所在目录**：

- `node_modules/recursive-readdir/node_modules/minimatch`


### `node-fetch`

**漏洞描述**：

- node-fetch forwards secure headers to untrusted sites
  - npm漏洞编号：`1095073`
  - 漏洞详细说明：https://github.com/advisories/GHSA-r683-j2x4-v87g
  - 漏洞等级：高危
  - 受影响的版本：`<2.6.7`


**依赖关系**：



- `xiyongApplication` / `rc-editor-core` / `draft-js` / `fbjs` / `isomorphic-fetch` / `node-fetch`

  

- `xiyongApplication` / `antd` / `rc-editor-mention` / `draft-js` / `fbjs` / `isomorphic-fetch` / `node-fetch`

  
  

**漏洞包所在目录**：

- `node_modules/node-fetch`


### `node-forge`

**漏洞描述**：

- Prototype Pollution in node-forge debug API.
  - npm漏洞编号：`1088227`
  - 漏洞详细说明：https://github.com/advisories/GHSA-5rrq-pxf6-6jx5
  - 漏洞等级：低危
  - 受影响的版本：`<1.0.0`

- URL parsing in node-forge could lead to undesired behavior.
  - npm漏洞编号：`1088229`
  - 漏洞详细说明：https://github.com/advisories/GHSA-gf8q-jrpm-jvxq
  - 漏洞等级：低危
  - 受影响的版本：`<1.0.0`

- Improper Verification of Cryptographic Signature in `node-forge`
  - npm漏洞编号：`1088746`
  - 漏洞详细说明：https://github.com/advisories/GHSA-2r2c-g63r-vccr
  - 漏洞等级：中危
  - 受影响的版本：`<1.3.0`

- Open Redirect in node-forge
  - npm漏洞编号：`1093719`
  - 漏洞详细说明：https://github.com/advisories/GHSA-8fr3-hfg3-gpgp
  - 漏洞等级：中危
  - 受影响的版本：`<1.0.0`

- Improper Verification of Cryptographic Signature in node-forge
  - npm漏洞编号：`1102321`
  - 漏洞详细说明：https://github.com/advisories/GHSA-x4jg-mjrx-434g
  - 漏洞等级：高危
  - 受影响的版本：`<1.3.0`

- Improper Verification of Cryptographic Signature in node-forge
  - npm漏洞编号：`1102322`
  - 漏洞详细说明：https://github.com/advisories/GHSA-cfm4-qjh2-4765
  - 漏洞等级：高危
  - 受影响的版本：`<1.3.0`


**依赖关系**：



- `xiyongApplication` / `webpack-dev-server` / `selfsigned` / `node-forge`

  
  

**漏洞包所在目录**：

- `node_modules/node-forge`


### `node-sass`

**漏洞描述**：

- Improper Certificate Validation in node-sass
  - npm漏洞编号：`1091843`
  - 漏洞详细说明：https://github.com/advisories/GHSA-r8f7-9pfq-mjmv
  - 漏洞等级：中危
  - 受影响的版本：`>=2.0.0 <7.0.0`


**依赖关系**：



- `xiyongApplication` / `node-sass`

  
  

**漏洞包所在目录**：

- `node_modules/node-sass`


### `nth-check`

**漏洞描述**：

- Inefficient Regular Expression Complexity in nth-check
  - npm漏洞编号：`1095141`
  - 漏洞详细说明：https://github.com/advisories/GHSA-rp65-9cf3-cjxr
  - 漏洞等级：高危
  - 受影响的版本：`<2.0.1`


**依赖关系**：



- `xiyongApplication` / `postcss-svgo` / `svgo` / `css-select` / `nth-check`

  
  

**漏洞包所在目录**：

- `node_modules/svgo/node_modules/nth-check`


### `scss-tokenizer`

**漏洞描述**：

- Regular expression denial of service in scss-tokenizer
  - npm漏洞编号：`1095132`
  - 漏洞详细说明：https://github.com/advisories/GHSA-7mwh-4pqv-wmr8
  - 漏洞等级：高危
  - 受影响的版本：`<=0.4.2`


**依赖关系**：



- `xiyongApplication` / `node-sass` / `sass-graph` / `scss-tokenizer`

  
  

**漏洞包所在目录**：

- `node_modules/scss-tokenizer`


### `semver`

**漏洞描述**：

- semver vulnerable to Regular Expression Denial of Service
  - npm漏洞编号：`1101089`
  - 漏洞详细说明：https://github.com/advisories/GHSA-c2qf-rxjj-qqgw
  - 漏洞等级：高危
  - 受影响的版本：`<5.7.2`


**依赖关系**：



- `xiyongApplication` / `node-sass` / `node-gyp` / `semver`

  
  

**漏洞包所在目录**：

- `node_modules/node-gyp/node_modules/semver`


### `serialize-javascript`

**漏洞描述**：

- Cross-Site Scripting in serialize-javascript
  - npm漏洞编号：`1087544`
  - 漏洞详细说明：https://github.com/advisories/GHSA-h9rv-jmmf-4pgx
  - 漏洞等级：中危
  - 受影响的版本：`<2.1.1`

- Insecure serialization leading to RCE in serialize-javascript
  - npm漏洞编号：`1095131`
  - 漏洞详细说明：https://github.com/advisories/GHSA-hxcc-f52p-wc94
  - 漏洞等级：高危
  - 受影响的版本：`<3.1.0`


**依赖关系**：



- `xiyongApplication` / `terser-webpack-plugin` / `serialize-javascript`

  

- `xiyongApplication` / `css-loader` / `webpack` / `uglifyjs-webpack-plugin` / `serialize-javascript`

  

- `xiyongApplication` / `html-webpack-plugin` / `webpack` / `uglifyjs-webpack-plugin` / `serialize-javascript`

  

- `xiyongApplication` / `mini-css-extract-plugin` / `webpack` / `uglifyjs-webpack-plugin` / `serialize-javascript`

  

- `xiyongApplication` / `optimize-css-assets-webpack-plugin` / `webpack` / `uglifyjs-webpack-plugin` / `serialize-javascript`

  

- `xiyongApplication` / `terser-webpack-plugin` / `webpack` / `uglifyjs-webpack-plugin` / `serialize-javascript`

  

- `xiyongApplication` / `url-loader` / `webpack` / `uglifyjs-webpack-plugin` / `serialize-javascript`

  

- `xiyongApplication` / `webpack-dev-server` / `webpack-dev-middleware` / `webpack` / `uglifyjs-webpack-plugin` / `serialize-javascript`

  

- `xiyongApplication` / `webpack-dev-server` / `webpack` / `uglifyjs-webpack-plugin` / `serialize-javascript`

  
  

**漏洞包所在目录**：

- `node_modules/serialize-javascript`


### `ssri`

**漏洞描述**：

- Regular Expression Denial of Service (ReDoS)
  - npm漏洞编号：`1094077`
  - 漏洞详细说明：https://github.com/advisories/GHSA-vx3p-948g-6vhq
  - 漏洞等级：高危
  - 受影响的版本：`>=5.2.2 <6.0.2`


**依赖关系**：



- `xiyongApplication` / `css-loader` / `webpack` / `uglifyjs-webpack-plugin` / `cacache` / `ssri`

  

- `xiyongApplication` / `html-webpack-plugin` / `webpack` / `uglifyjs-webpack-plugin` / `cacache` / `ssri`

  

- `xiyongApplication` / `mini-css-extract-plugin` / `webpack` / `uglifyjs-webpack-plugin` / `cacache` / `ssri`

  

- `xiyongApplication` / `optimize-css-assets-webpack-plugin` / `webpack` / `uglifyjs-webpack-plugin` / `cacache` / `ssri`

  

- `xiyongApplication` / `terser-webpack-plugin` / `webpack` / `uglifyjs-webpack-plugin` / `cacache` / `ssri`

  

- `xiyongApplication` / `url-loader` / `webpack` / `uglifyjs-webpack-plugin` / `cacache` / `ssri`

  

- `xiyongApplication` / `webpack-dev-server` / `webpack-dev-middleware` / `webpack` / `uglifyjs-webpack-plugin` / `cacache` / `ssri`

  

- `xiyongApplication` / `webpack-dev-server` / `webpack` / `uglifyjs-webpack-plugin` / `cacache` / `ssri`

  
  

**漏洞包所在目录**：

- `node_modules/uglifyjs-webpack-plugin/node_modules/ssri`


### `tar`

**漏洞描述**：

- Arbitrary File Creation/Overwrite due to insufficient absolute path sanitization
  - npm漏洞编号：`1089685`
  - 漏洞详细说明：https://github.com/advisories/GHSA-3jfq-g458-7qm9
  - 漏洞等级：高危
  - 受影响的版本：`<3.2.2`

- Arbitrary File Creation/Overwrite on Windows via insufficient relative path sanitization
  - npm漏洞编号：`1095117`
  - 漏洞详细说明：https://github.com/advisories/GHSA-5955-9wpr-37jh
  - 漏洞等级：高危
  - 受影响的版本：`<4.4.18`

- Denial of service while parsing a tar file due to lack of folders count validation
  - npm漏洞编号：`1097493`
  - 漏洞详细说明：https://github.com/advisories/GHSA-f5x3-32g6-xq36
  - 漏洞等级：中危
  - 受影响的版本：`<6.2.1`


**依赖关系**：



- `xiyongApplication` / `node-sass` / `node-gyp` / `tar`

  
  

**漏洞包所在目录**：

- `node_modules/tar`


### `terser`

**漏洞描述**：

- Terser insecure use of regular expressions leads to ReDoS
  - npm漏洞编号：`1091691`
  - 漏洞详细说明：https://github.com/advisories/GHSA-4wf5-vphf-c2xc
  - 漏洞等级：高危
  - 受影响的版本：`<4.8.1`


**依赖关系**：



- `xiyongApplication` / `terser-webpack-plugin` / `terser`

  
  

**漏洞包所在目录**：

- `node_modules/terser`


### `trim-newlines`

**漏洞描述**：

- Uncontrolled Resource Consumption in trim-newlines
  - npm漏洞编号：`1095100`
  - 漏洞详细说明：https://github.com/advisories/GHSA-7p7h-4mm5-852v
  - 漏洞等级：高危
  - 受影响的版本：`<3.0.1`


**依赖关系**：



- `xiyongApplication` / `node-sass` / `meow` / `trim-newlines`

  
  

**漏洞包所在目录**：

- `node_modules/trim-newlines`


### `wangeditor`

**漏洞描述**：

- Cross-Site Scripting in wangeditor
  - npm漏洞编号：`1086982`
  - 漏洞详细说明：https://github.com/advisories/GHSA-g7mw-5cq6-fv82
  - 漏洞等级：高危
  - 受影响的版本：`>=0`


**依赖关系**：



- `xiyongApplication` / `wangeditor`

  
  

**漏洞包所在目录**：

- `node_modules/wangeditor`


### `webpack-dev-middleware`

**漏洞描述**：

- Path traversal in webpack-dev-middleware
  - npm漏洞编号：`1096729`
  - 漏洞详细说明：https://github.com/advisories/GHSA-wr3j-pwj9-hqq6
  - 漏洞等级：高危
  - 受影响的版本：`<=5.3.3`


**依赖关系**：



- `xiyongApplication` / `webpack-dev-server` / `webpack-dev-middleware`

  
  

**漏洞包所在目录**：

- `node_modules/webpack-dev-middleware`





## 中危漏洞

共计 **10** 个


### `@babel/runtime`

**漏洞描述**：

- Babel has inefficient RegExp complexity in generated code with .replace when transpiling named capturing groups
  - npm漏洞编号：`1104000`
  - 漏洞详细说明：https://github.com/advisories/GHSA-968p-4wvh-cqc8
  - 漏洞等级：中危
  - 受影响的版本：`<7.26.10`


**依赖关系**：



- `xiyongApplication` / `babel-preset-react-app` / `@babel/runtime`

  
  

**漏洞包所在目录**：

- `node_modules/@babel/runtime`


### `ajv`

**漏洞描述**：

- Prototype Pollution in Ajv
  - npm漏洞编号：`1097685`
  - 漏洞详细说明：https://github.com/advisories/GHSA-v88g-cgmw-v5xw
  - 漏洞等级：中危
  - 受影响的版本：`<6.12.3`


**依赖关系**：



- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request` / `har-validator` / `ajv`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `har-validator` / `ajv`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `har-validator` / `ajv`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `har-validator` / `ajv`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `har-validator` / `ajv`

  

- `xiyongApplication` / `less` / `request` / `har-validator` / `ajv`

  

- `xiyongApplication` / `node-sass` / `node-gyp` / `request` / `har-validator` / `ajv`

  

- `xiyongApplication` / `node-sass` / `request` / `har-validator` / `ajv`

  

- `xiyongApplication` / `electron` / `electron-download` / `nugget` / `request` / `har-validator` / `ajv`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `har-validator` / `ajv`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `har-validator` / `ajv`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `har-validator` / `ajv`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `har-validator` / `ajv`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `har-validator` / `ajv`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `har-validator` / `ajv`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `har-validator` / `ajv`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `har-validator` / `ajv`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `har-validator` / `ajv`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `har-validator` / `ajv`

  
  

**漏洞包所在目录**：

- `node_modules/less/node_modules/ajv`


### `browserslist`

**漏洞描述**：

- Regular Expression Denial of Service in browserslist
  - npm漏洞编号：`1093035`
  - 漏洞详细说明：https://github.com/advisories/GHSA-w8qv-6jwh-64r5
  - 漏洞等级：中危
  - 受影响的版本：`>=4.0.0 <4.16.5`


**依赖关系**：



- `xiyongApplication` / `react-dev-utils` / `browserslist`

  
  

**漏洞包所在目录**：

- `node_modules/react-dev-utils/node_modules/browserslist`


### `got`

**漏洞描述**：

- Got allows a redirect to a UNIX socket
  - npm漏洞编号：`1088948`
  - 漏洞详细说明：https://github.com/advisories/GHSA-pfrx-2q88-qq97
  - 漏洞等级：中危
  - 受影响的版本：`<11.8.5`


**依赖关系**：



- `xiyongApplication` / `electron-packager` / `@electron/get` / `got`

  
  

**漏洞包所在目录**：

- `node_modules/got`


### `node-notifier`

**漏洞描述**：

- OS Command Injection in node-notifier
  - npm漏洞编号：`1086436`
  - 漏洞详细说明：https://github.com/advisories/GHSA-5fw9-fq32-wv5p
  - 漏洞等级：中危
  - 受影响的版本：`<8.0.1`


**依赖关系**：



- `xiyongApplication` / `jest` / `jest-cli` / `node-notifier`

  
  

**漏洞包所在目录**：

- `node_modules/node-notifier`


### `postcss`

**漏洞描述**：

- Regular Expression Denial of Service in postcss
  - npm漏洞编号：`1093539`
  - 漏洞详细说明：https://github.com/advisories/GHSA-566m-qj78-rww5
  - 漏洞等级：中危
  - 受影响的版本：`<7.0.36`

- PostCSS line return parsing error
  - npm漏洞编号：`1094544`
  - 漏洞详细说明：https://github.com/advisories/GHSA-7fh5-64p2-3v2j
  - 漏洞等级：中危
  - 受影响的版本：`<8.4.31`


**依赖关系**：



- `xiyongApplication` / `autoprefixer` / `postcss`

  

- `xiyongApplication` / `css-declaration-sorter` / `postcss`

  

- `xiyongApplication` / `css-loader` / `postcss`

  

- `xiyongApplication` / `optimize-css-assets-webpack-plugin` / `cssnano` / `postcss`

  

- `xiyongApplication` / `optimize-css-assets-webpack-plugin` / `cssnano` / `cssnano-preset-default` / `postcss`

  

- `xiyongApplication` / `cssnano-util-raw-cache` / `postcss`

  

- `xiyongApplication` / `css-loader` / `icss-utils` / `postcss`

  

- `xiyongApplication` / `postcss-attribute-case-insensitive` / `postcss`

  

- `xiyongApplication` / `postcss-calc` / `postcss`

  

- `xiyongApplication` / `postcss-preset-env` / `postcss-color-functional-notation` / `postcss`

  

- `xiyongApplication` / `postcss-color-hex-alpha` / `postcss`

  

- `xiyongApplication` / `postcss-preset-env` / `postcss-color-mod-function` / `postcss`

  

- `xiyongApplication` / `postcss-color-rebeccapurple` / `postcss`

  

- `xiyongApplication` / `postcss-colormin` / `postcss`

  

- `xiyongApplication` / `postcss-convert-values` / `postcss`

  

- `xiyongApplication` / `postcss-custom-media` / `postcss`

  

- `xiyongApplication` / `postcss-custom-properties` / `postcss`

  

- `xiyongApplication` / `postcss-custom-selectors` / `postcss`

  

- `xiyongApplication` / `postcss-dir-pseudo-class` / `postcss`

  

- `xiyongApplication` / `postcss-discard-comments` / `postcss`

  

- `xiyongApplication` / `postcss-discard-duplicates` / `postcss`

  

- `xiyongApplication` / `postcss-discard-empty` / `postcss`

  

- `xiyongApplication` / `postcss-discard-overridden` / `postcss`

  

- `xiyongApplication` / `postcss-env-function` / `postcss`

  

- `xiyongApplication` / `postcss-flexbugs-fixes` / `postcss`

  

- `xiyongApplication` / `postcss-preset-env` / `postcss-focus-visible` / `postcss`

  

- `xiyongApplication` / `postcss-preset-env` / `postcss-focus-within` / `postcss`

  

- `xiyongApplication` / `postcss-font-variant` / `postcss`

  

- `xiyongApplication` / `postcss-gap-properties` / `postcss`

  

- `xiyongApplication` / `postcss-image-set-function` / `postcss`

  

- `xiyongApplication` / `postcss-preset-env` / `postcss-initial` / `postcss`

  

- `xiyongApplication` / `postcss-lab-function` / `postcss`

  

- `xiyongApplication` / `postcss-loader` / `postcss`

  

- `xiyongApplication` / `postcss-logical` / `postcss`

  

- `xiyongApplication` / `postcss-media-minmax` / `postcss`

  

- `xiyongApplication` / `postcss-merge-longhand` / `postcss`

  

- `xiyongApplication` / `postcss-merge-rules` / `postcss`

  

- `xiyongApplication` / `postcss-minify-font-values` / `postcss`

  

- `xiyongApplication` / `postcss-minify-gradients` / `postcss`

  

- `xiyongApplication` / `postcss-minify-params` / `postcss`

  

- `xiyongApplication` / `postcss-minify-selectors` / `postcss`

  

- `xiyongApplication` / `postcss-modules-extract-imports` / `postcss`

  

- `xiyongApplication` / `postcss-modules-local-by-default` / `postcss`

  

- `xiyongApplication` / `postcss-modules-scope` / `postcss`

  

- `xiyongApplication` / `css-loader` / `postcss-modules-values` / `postcss`

  

- `xiyongApplication` / `postcss-nesting` / `postcss`

  

- `xiyongApplication` / `postcss-normalize-charset` / `postcss`

  

- `xiyongApplication` / `postcss-normalize-display-values` / `postcss`

  

- `xiyongApplication` / `postcss-normalize-positions` / `postcss`

  

- `xiyongApplication` / `postcss-normalize-repeat-style` / `postcss`

  

- `xiyongApplication` / `postcss-normalize-string` / `postcss`

  

- `xiyongApplication` / `postcss-normalize-timing-functions` / `postcss`

  

- `xiyongApplication` / `postcss-normalize-unicode` / `postcss`

  

- `xiyongApplication` / `postcss-normalize-url` / `postcss`

  

- `xiyongApplication` / `postcss-normalize-whitespace` / `postcss`

  

- `xiyongApplication` / `postcss-ordered-values` / `postcss`

  

- `xiyongApplication` / `postcss-overflow-shorthand` / `postcss`

  

- `xiyongApplication` / `postcss-preset-env` / `postcss-page-break` / `postcss`

  

- `xiyongApplication` / `postcss-place` / `postcss`

  

- `xiyongApplication` / `postcss-preset-env` / `postcss`

  

- `xiyongApplication` / `postcss-pseudo-class-any-link` / `postcss`

  

- `xiyongApplication` / `postcss-reduce-initial` / `postcss`

  

- `xiyongApplication` / `postcss-reduce-transforms` / `postcss`

  

- `xiyongApplication` / `postcss-replace-overflow-wrap` / `postcss`

  

- `xiyongApplication` / `postcss-safe-parser` / `postcss`

  

- `xiyongApplication` / `postcss-selector-matches` / `postcss`

  

- `xiyongApplication` / `postcss-selector-not` / `postcss`

  

- `xiyongApplication` / `postcss-svgo` / `postcss`

  

- `xiyongApplication` / `postcss-unique-selectors` / `postcss`

  

- `xiyongApplication` / `postcss-merge-longhand` / `stylehacks` / `postcss`

  
  

**漏洞包所在目录**：

- `node_modules/autoprefixer/node_modules/postcss`

- `node_modules/css-declaration-sorter/node_modules/postcss`

- `node_modules/cssnano-preset-default/node_modules/postcss`

- `node_modules/cssnano-util-raw-cache/node_modules/postcss`

- `node_modules/cssnano/node_modules/postcss`

- `node_modules/postcss`

- `node_modules/postcss-attribute-case-insensitive/node_modules/postcss`

- `node_modules/postcss-calc/node_modules/postcss`

- `node_modules/postcss-color-functional-notation/node_modules/postcss`

- `node_modules/postcss-color-hex-alpha/node_modules/postcss`

- `node_modules/postcss-color-mod-function/node_modules/postcss`

- `node_modules/postcss-color-rebeccapurple/node_modules/postcss`

- `node_modules/postcss-colormin/node_modules/postcss`

- `node_modules/postcss-convert-values/node_modules/postcss`

- `node_modules/postcss-custom-media/node_modules/postcss`

- `node_modules/postcss-custom-properties/node_modules/postcss`

- `node_modules/postcss-custom-selectors/node_modules/postcss`

- `node_modules/postcss-dir-pseudo-class/node_modules/postcss`

- `node_modules/postcss-discard-comments/node_modules/postcss`

- `node_modules/postcss-discard-duplicates/node_modules/postcss`

- `node_modules/postcss-discard-empty/node_modules/postcss`

- `node_modules/postcss-discard-overridden/node_modules/postcss`

- `node_modules/postcss-env-function/node_modules/postcss`

- `node_modules/postcss-flexbugs-fixes/node_modules/postcss`

- `node_modules/postcss-focus-visible/node_modules/postcss`

- `node_modules/postcss-focus-within/node_modules/postcss`

- `node_modules/postcss-font-variant/node_modules/postcss`

- `node_modules/postcss-gap-properties/node_modules/postcss`

- `node_modules/postcss-image-set-function/node_modules/postcss`

- `node_modules/postcss-initial/node_modules/postcss`

- `node_modules/postcss-lab-function/node_modules/postcss`

- `node_modules/postcss-loader/node_modules/postcss`

- `node_modules/postcss-logical/node_modules/postcss`

- `node_modules/postcss-media-minmax/node_modules/postcss`

- `node_modules/postcss-merge-longhand/node_modules/postcss`

- `node_modules/postcss-merge-rules/node_modules/postcss`

- `node_modules/postcss-minify-font-values/node_modules/postcss`

- `node_modules/postcss-minify-gradients/node_modules/postcss`

- `node_modules/postcss-minify-params/node_modules/postcss`

- `node_modules/postcss-minify-selectors/node_modules/postcss`

- `node_modules/postcss-nesting/node_modules/postcss`

- `node_modules/postcss-normalize-charset/node_modules/postcss`

- `node_modules/postcss-normalize-display-values/node_modules/postcss`

- `node_modules/postcss-normalize-positions/node_modules/postcss`

- `node_modules/postcss-normalize-repeat-style/node_modules/postcss`

- `node_modules/postcss-normalize-string/node_modules/postcss`

- `node_modules/postcss-normalize-timing-functions/node_modules/postcss`

- `node_modules/postcss-normalize-unicode/node_modules/postcss`

- `node_modules/postcss-normalize-url/node_modules/postcss`

- `node_modules/postcss-normalize-whitespace/node_modules/postcss`

- `node_modules/postcss-ordered-values/node_modules/postcss`

- `node_modules/postcss-overflow-shorthand/node_modules/postcss`

- `node_modules/postcss-page-break/node_modules/postcss`

- `node_modules/postcss-place/node_modules/postcss`

- `node_modules/postcss-preset-env/node_modules/postcss`

- `node_modules/postcss-pseudo-class-any-link/node_modules/postcss`

- `node_modules/postcss-reduce-initial/node_modules/postcss`

- `node_modules/postcss-reduce-transforms/node_modules/postcss`

- `node_modules/postcss-replace-overflow-wrap/node_modules/postcss`

- `node_modules/postcss-safe-parser/node_modules/postcss`

- `node_modules/postcss-selector-matches/node_modules/postcss`

- `node_modules/postcss-selector-not/node_modules/postcss`

- `node_modules/postcss-svgo/node_modules/postcss`

- `node_modules/postcss-unique-selectors/node_modules/postcss`

- `node_modules/stylehacks/node_modules/postcss`


### `sockjs`

**漏洞描述**：

- Improper Input Validation in SocksJS-Node
  - npm漏洞编号：`1089877`
  - 漏洞详细说明：https://github.com/advisories/GHSA-c9g6-9335-x697
  - 漏洞等级：中危
  - 受影响的版本：`<0.3.20`


**依赖关系**：



- `xiyongApplication` / `webpack-dev-server` / `sockjs`

  
  

**漏洞包所在目录**：

- `node_modules/sockjs`


### `tough-cookie`

**漏洞描述**：

- tough-cookie Prototype Pollution vulnerability
  - npm漏洞编号：`1097682`
  - 漏洞详细说明：https://github.com/advisories/GHSA-72xf-g2v4-qvf3
  - 漏洞等级：中危
  - 受影响的版本：`<4.1.3`


**依赖关系**：



- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `tough-cookie`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `tough-cookie`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `tough-cookie`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `tough-cookie`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `tough-cookie`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request` / `tough-cookie`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `tough-cookie`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `tough-cookie`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `tough-cookie`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request` / `tough-cookie`

  

- `xiyongApplication` / `less` / `request` / `tough-cookie`

  

- `xiyongApplication` / `node-sass` / `node-gyp` / `request` / `tough-cookie`

  

- `xiyongApplication` / `node-sass` / `request` / `tough-cookie`

  

- `xiyongApplication` / `electron` / `electron-download` / `nugget` / `request` / `tough-cookie`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `tough-cookie`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `tough-cookie`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `tough-cookie`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `tough-cookie`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request-promise-core` / `request` / `tough-cookie`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `tough-cookie`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `tough-cookie`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `tough-cookie`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `tough-cookie`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `request` / `tough-cookie`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `tough-cookie`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `tough-cookie`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `tough-cookie`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `tough-cookie`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `jest-config` / `jest-environment-jsdom` / `jsdom` / `request-promise-native` / `tough-cookie`

  
  

**漏洞包所在目录**：

- `node_modules/less/node_modules/tough-cookie`

- `node_modules/tough-cookie`


### `yargs-parser`

**漏洞描述**：

- yargs-parser Vulnerable to Prototype Pollution
  - npm漏洞编号：`1088811`
  - 漏洞详细说明：https://github.com/advisories/GHSA-p9pc-299p-vxgp
  - 漏洞等级：中危
  - 受影响的版本：`>=6.0.0 <13.1.2`

- yargs-parser Vulnerable to Prototype Pollution
  - npm漏洞编号：`1088890`
  - 漏洞详细说明：https://github.com/advisories/GHSA-p9pc-299p-vxgp
  - 漏洞等级：中危
  - 受影响的版本：`>=16.0.0 <18.1.1`


**依赖关系**：



- `xiyongApplication` / `electron-packager` / `yargs-parser`

  

- `xiyongApplication` / `jest` / `jest-cli` / `yargs` / `yargs-parser`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runtime` / `yargs` / `yargs-parser`

  

- `xiyongApplication` / `jest` / `jest-cli` / `jest-runner` / `jest-runtime` / `yargs` / `yargs-parser`

  

- `xiyongApplication` / `webpack-dev-server` / `yargs` / `yargs-parser`

  
  

**漏洞包所在目录**：

- `node_modules/webpack-dev-server/node_modules/yargs-parser`

- `node_modules/yargs-parser`

- `node_modules/yargs/node_modules/yargs-parser`


### `zrender`

**漏洞描述**：

- Prototype Pollution in the merge and clone helper methods
  - npm漏洞编号：`1101086`
  - 漏洞详细说明：https://github.com/advisories/GHSA-fhv8-fx5f-7fxf
  - 漏洞等级：中危
  - 受影响的版本：`<=4.3.2`


**依赖关系**：



- `xiyongApplication` / `echarts` / `zrender`

  
  

**漏洞包所在目录**：

- `node_modules/zrender`





## 低危漏洞

共计 **1** 个


### `tmp`

**漏洞描述**：

- tmp allows arbitrary temporary file / directory write via symbolic link `dir` parameter
  - npm漏洞编号：`1106849`
  - 漏洞详细说明：https://github.com/advisories/GHSA-52f5-9888-hmc6
  - 漏洞等级：低危
  - 受影响的版本：`<=0.2.3`


**依赖关系**：



- `xiyongApplication` / `eslint-config-react-app` / `eslint` / `inquirer` / `external-editor` / `tmp`

  

- `xiyongApplication` / `react-dev-utils` / `inquirer` / `external-editor` / `tmp`

  

- `xiyongApplication` / `electron-packager` / `asar` / `tmp-promise` / `tmp`

  
  

**漏洞包所在目录**：

- `node_modules/tmp`

- `node_modules/tmp-promise/node_modules/tmp`


 



