import { auditPackage } from "../index.js";

// auditPackage(
//   `D:\\DATA\\Project\\AIProject\\TestDir\\A_Project`,
//   `D:\\DATA\\Project\\AIProject\\AI-Security-Check-MCP-SERVICE\\src\\entry\\test\\result\\A_Project-local-audit.md`
// ).then(() => {
//   console.log('本地工程审计完成');
// });

// auditPackage(
//   `D:\\DATA\\Project\\AIProject\\TestDir\\A_Project`,
//   `D:\\DATA\\Project\\AIProject\\AI-Security-Check-MCP-SERVICE\\src\\entry\\test\\result\\A_Project-local-audit.html`
// ).then(() => {
//   console.log('本地工程审计完成');
// });

// auditPackage(
//   `https://github.com/webpack/webpack-dev-server/tree/v4.9.3`,
//   `D:\\DATA\\Project\\AIProject\\AI-Security-Check-MCP-SERVICE\\src\\entry\\test\\result\\webpack-dev-server_4_9_3-remote-audit.md`
// ).then(() => {
//   console.log('远程工程审计完成');
// });

auditPackage(
  `https://github.com/webpack/webpack-dev-server/tree/v1.8.1`,
  `D:\\project\\ai-security-check-mcp-service\\src\\entry\\test\\result\\webpack-dev-server_1_8_1-remote-audit.html`
).then(() => {
  console.log("远程工程审计完成");
});
