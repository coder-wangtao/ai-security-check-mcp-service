import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"; //MCP服务器
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"; //studio标准输入输出管道
import { z } from "zod"; // 参数认证
import { auditPackage } from "./entry/index.js";

const server = new McpServer({
  name: "ai-security-check-mcp-service",
  title: "前端工程项目安全审计服务器",
  version: "0.0.1",
});

server.registerTool(
  "auditPackage",
  {
    title: "审计前端工程",
    description:
      "审计前端工程的所有直接和间接依赖，得到安全审计结果。支持本地工程的审计，也支持远程仓库的审计。审计结果输出为文件，可选html或者md格式，这个根据输出参数的不同，适应性输出。",
    inputSchema: {
      projectRoot: z
        .string()
        .describe(
          '本地需要安全审计工程的文件夹根路径，或者远程仓库的URL地址，例如["D:\\DATA\\Project\\ShopProject\\", "/Users/rexhang/DATA/Project/ShopProject/", "https://github.com/webpack/webpack-dev-server/tree/v4.9.3/"]'
        ),
      savePath: z
        .string()
        .describe(
          '保存审计结果文件的路径，需要为本机地址，例如["D:\\DATA\\Project\\ShopProject\\[name]-local-audit.md", "D:\\DATA\\Project\\ShopProject\\[name]-local-audit.html", "/Users/rexhang/DATA/Project/ShopProject/[name]-remote-audit.md", "/Users/rexhang/DATA/Project/ShopProject/[name]-remote-audit.html"]'
        ),
    },
  },
  async ({ projectRoot, savePath }) => {
    await auditPackage(projectRoot, savePath);
    return {
      content: [
        {
          type: "text",
          text: `内容处理完成，审计结果文件已保存到: ${savePath}`,
        },
      ],
    };
  }
);

const transport = new StdioServerTransport();
server.connect(transport);
