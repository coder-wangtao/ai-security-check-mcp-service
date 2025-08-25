# 研发基于MCP<JSON-RPC>的前端工程通用的安全依赖审计工具，获得超过 `npm audit` 的体验。

### 什么是安全审计？
是指某个工程的所有直接依赖和间接依赖进行安全验证，发现其是否包含潜藏的风险。

### 主要实现
实现 `export async function auditPackage(projectRoot, savePath) {}` 然后根据MCP<JSON-RPC>输出，可作为MCP_SERVER使用，本项目初期，暂且使用MVP规则。

### 功能函数工作流程
1. **创建工作目录**：创建一个临时的工作目录，用于保存执行期间要用到的临时文件
2. **解析工程**：解析本地工程目录或者远程仓库链接，得到对应的 `pacakge.json` 文件内容
3. **生成lock文件**：将 `pacakge.json` 写入到临时工作目录，同时根据它生成 `pacakge-lock.json`
4. **安全审计**：进入到临时工作目录，使用 `npm audit` 命令进行安全审计，并讲审计结果规格化
5. **渲染**：将上一步得到的规格化审计结果进行渲染，渲染成标准化的 `markdown` 内容，并保存到结果文件
6. **删除工作目录**：将之前创建的临时工作目录删除
7. **将结果保存到指定路径**：将审计结果最终输出为一份可友好查看的文件

### ai-security-check-mcp-service

这是一个基于 Node.js 的 MCP Server，通过标准输入输出（STDIO）与 MCP 客户端通信。可以使用 `npx @modelcontextprotocol/inspector` 来进行调试。

## 安装和使用

全局安装或者直接使用 npx 运行：：
```bash
npm install -g ai-security-check-mcp-service

npx ai-security-check-mcp-service
```

## 使用
配合vscode等具有AI聊天功能的客户端应用来使用，手动添加MCP服务器配置即可，主配置项 command `npx` args `ai-security-check-mcp-service`
