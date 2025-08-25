import { renderMarkdown } from './markdown.js';
import { renderHTML } from './html.js';

const desc = {
  severityLevels: {
    low: '低危',
    moderate: '中危',
    high: '高危',
    critical: '严重',
  },
};

/**
 * 讲auditResult渲染为markdown格式的字符串
 * @param {object} auditResult 规范化的审计结果
 * @param {object} packageJson 包的package.json内容
 */
export async function render(auditResult, packageJson, savePath) {
  const data = {
    audit: auditResult,
    desc,
    packageJson,
  };
  // 目前支持这2种格式，后续需要其余格式可再使用策略模式扩展
  const renderType = savePath.endsWith('.html') ? 'html' : savePath.endsWith('.md') ? 'markdown' : '';
  switch (renderType) {
    case 'html':
      return await renderHTML(data);
    case 'markdown':
      return await renderMarkdown(data);
    default:
      return Promise.reject(new Error('暂不支持的渲染格式'));
  }
}
