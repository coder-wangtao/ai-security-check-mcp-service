import fs from "fs";
import { join } from "path";
import { runCommand } from "../common/utils.js";

export async function npmAudit(workDir) {
  const cmd = `npm audit --registry=https://registry.npmjs.org --json`; // 检查项目依赖中是否存在 已知的安全漏洞。 把结果以 JSON 格式 输出，而不是默认的人类可读格式。
  const jsonResult = await runCommand(cmd, workDir); // 在工作目录中执行命令
  const auditData = JSON.parse(jsonResult);
  return auditData;
}
