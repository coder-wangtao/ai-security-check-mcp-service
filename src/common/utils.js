import { fileURLToPath } from "url"; // 从 Node.js 的内置模块 url 导入 fileURLToPath 函数。作用：把 file:// 格式的 URL 转换成普通文件路径。
import { dirname } from "path";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec); // 将 exec 转换为返回 Promise 的函数

// 执行命令
export async function runCommand(cmd, cwd) {
  // cmd 要执行的命令字符串 cwd：命令执行的工作目录
  try {
    const stdout = await execAsync(cmd, {
      cwd,
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    // 返回 audit 的 JSON 结果
    return stdout.stdout.toString();
  } catch (err) {
    if (err.stdout) {
      return err.stdout.toString();
    }
    throw err;
  }
}

// 生成唯一的id
export function uniqueId() {
  return Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
}

// 根据 import.meta.url 获取当前模块的文件路径。
// ESM 模块中无法直接使用 __filename，所以用这个函数代替。
export function getFilename(importMetaUrl) {
  return fileURLToPath(importMetaUrl);
}

// 获取当前模块的 目录路径。
export function getDirname(importMetaUrl) {
  return dirname(getFilename(importMetaUrl));
}
