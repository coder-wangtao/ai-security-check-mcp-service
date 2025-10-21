// 这段代码是一个 调用 npm 官方安全审计接口（/npm/v1/security/audits）来检查单个包是否存在已知漏洞的函数。

const URL = "https://registry.npmjs.org/-/npm/v1/security/audits";

export async function remoteAudit(packageName, pacakgeVersion) {
  const body = {
    name: "example-audit", // 项目名字随便写
    version: "1.0.0", // 项目的版本，随便写
    requires: {
      [packageName]: pacakgeVersion,
    },
    dependencies: {
      [packageName]: {
        version: pacakgeVersion,
      },
    },
  };
  const resp = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await resp.json();
}
