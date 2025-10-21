import { getDepChains } from "./getDepChain.js";

// "vulnerabilities": {
//   "@intervolga/optimize-cssnano-plugin": {
//     "name": "@intervolga/optimize-cssnano-plugin",   // 漏洞相关的包名
//     "severity": "moderate",  // 漏洞严重等级，这里是“中等”
//     "isDirect": false, // 是否是你的项目直接依赖，这里是 false，说明是间接依赖
//      漏洞传播路径：@intervolga/optimize-cssnano-plugin 依赖了 cssnano，而 cssnano 又依赖 postcss，再依赖 webpack 等
//      用途：只列出漏洞是通过哪些依赖间接引入的。
//     "via": ["cssnano", "cssnano-preset-default", "postcss", "webpack"],
//     "effects": ["@vue/cli-service"],     // 哪些直接依赖受到了影响，这里是 @vue/cli-service
//     "range": "*",     // 受影响版本范围，这里是所有版本
//     "nodes": ["node_modules/@intervolga/optimize-cssnano-plugin"],      // 漏洞包在你的 node_modules 中的位置
//     提供修复的方法：升级 @vue/cli-plugin-babel 到 5.0.9 版本（这是一个大版本更新，可能会有破坏性变化）
//     "fixAvailable": {
//       "name": "@vue/cli-plugin-babel",
//       "version": "5.0.9",
//       "isSemVerMajor": true
//     }
//   },
// }

// 理解方式：不仅知道漏洞来源，还能具体知道漏洞类型、风险程度和修复范围。
// "via": [
//   {
//     "source": 1097679,
//     "name": "axios",
//     "dependency": "axios",
//     "title": "Axios Cross-Site Request Forgery Vulnerability",
//     "url": "https://github.com/advisories/GHSA-wf5p-g6vw-rhxx",
//     "severity": "moderate",
//     "cwe": ["CWE-352"],
//     "cvss": {
//       "score": 6.5,
//       "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:N/A:N"
//     },
//     "range": ">=0.8.1 <0.28.0"
//   }
// ]

function _normalizeVulnerabilities(auditResult) {
  const result = {
    critical: [], //严重漏洞
    high: [], // 高危漏洞
    moderate: [], // 中危漏洞
    low: [], // 低危漏洞
  };
  for (const key in auditResult.vulnerabilities) {
    const packageInfo = auditResult.vulnerabilities[key];
    const normalizedPackage = _normalizePackage(packageInfo);
    if (normalizedPackage) {
      result[normalizedPackage.severity].push(normalizedPackage);
    }
  }
  return result;

  function _normalizePackage(packageInfo) {
    const { via = [] } = packageInfo;
    const validVia = via.filter((it) => typeof it === "object");
    if (validVia.length === 0) {
      return null;
    }
    const info = {
      name: packageInfo.name,
      severity: packageInfo.severity,
      problems: validVia,
      nodes: packageInfo.nodes || [],
    };
    info.depChains = getDepChains(packageInfo, auditResult.vulnerabilities);
    // info.depChains = info.depChains.filter(
    //   (chain) => !isInvalidChain(chain, packageInfo.name)
    // );
    return info;
  }
}

function isInvalidChain(chain, packageName) {
  return chain.length === 0 || (chain.length === 1 && chain[0] === packageName);
}

export function normalizeAuditResult(auditResult) {
  return {
    vulnerabilities: _normalizeVulnerabilities(auditResult),
  };
}
