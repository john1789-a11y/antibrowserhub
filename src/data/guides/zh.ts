// Chinese translations for guide content
export const zhGuides: Record<string, string> = {
  "automation-guide": `## 为什么要自动化指纹浏览器？

自动化使你可以从管理少量账号扩展到数百甚至数千个：
- **规模化运营** — 以编程方式创建、启动和管理配置文件
- **节省时间** — 自动化登录、发帖、数据收集等重复性任务
- **减少错误** — 消除多账号工作流程中的人为失误
- **全天候运行** — 安排任务自动执行

所有主流指纹浏览器都提供**本地 API**，让你能够以编程方式控制配置文件，并将自动化框架（Playwright、Selenium、Puppeteer）连接到已启动的浏览器实例。

---

## MoreLogin

**API 基础 URL：** \`http://127.0.0.1:40000\`
**API 文档：** [guide.morelogin.com](https://guide.morelogin.com)

MoreLogin 的本地 API 让你能够创建、启动、停止配置文件，并与 Puppeteer、Selenium 和 Playwright 无缝连接。

### Node.js + Puppeteer

\`\`\`javascript
const axios = require('axios');
const puppeteer = require('puppeteer');
const BASE = 'http://127.0.0.1:40000';

async function main() {
  // 1. 创建浏览器配置文件
  const createResp = await axios.post(BASE + '/api/env/create/quick', {
    name: 'automation-profile'
  });
  const envId = createResp.data.data.envId;
  console.log('Created profile:', envId);

  // 2. 启动配置文件
  const startResp = await axios.post(BASE + '/api/env/start', {
    envId: envId
  });
  const debugPort = startResp.data.data.debugPort;
  const wsEndpoint = startResp.data.data.wsEndpoint;

  // 3. 连接 Puppeteer
  const browser = await puppeteer.connect({
    browserWSEndpoint: wsEndpoint
  });
  const page = (await browser.pages())[0];
  await page.goto('https://browserleaks.com/canvas');
  console.log('Title:', await page.title());

  // 4. 停止配置文件
  await axios.post(BASE + '/api/env/stop', { envId });
}
main();
\`\`\`

## AdsPower

**API 基础 URL：** \`http://local.adspower.com:50325\`

AdsPower 提供本地 API 进行配置文件管理和浏览器自动化。

### Node.js + Puppeteer

\`\`\`javascript
const axios = require('axios');
const puppeteer = require('puppeteer');
const BASE = 'http://local.adspower.com:50325';

async function main() {
  const resp = await axios.get(BASE + '/api/v1/browser/start?user_id=YOUR_PROFILE_ID');
  const { ws } = resp.data.data;
  const browser = await puppeteer.connect({ browserWSEndpoint: ws.puppeteer });
  const page = (await browser.pages())[0];
  await page.goto('https://browserleaks.com/canvas');
  console.log('Title:', await page.title());
  await axios.get(BASE + '/api/v1/browser/stop?user_id=YOUR_PROFILE_ID');
}
main();
\`\`\`

## GoLogin

**API 基础 URL：** \`https://api.gologin.com\`

GoLogin 提供 REST API 和本地 Orbita 浏览器连接。

### Node.js + Puppeteer

\`\`\`javascript
const axios = require('axios');
const puppeteer = require('puppeteer');
const TOKEN = 'YOUR_API_TOKEN';
const PROFILE_ID = 'YOUR_PROFILE_ID';

async function main() {
  const resp = await axios.post('http://localhost:36912/browser/start-profile',
    { profileId: PROFILE_ID },
    { headers: { Authorization: 'Bearer ' + TOKEN } }
  );
  const { wsUrl } = resp.data;
  const browser = await puppeteer.connect({ browserWSEndpoint: wsUrl });
  const page = (await browser.pages())[0];
  await page.goto('https://browserleaks.com/canvas');
  console.log('Title:', await page.title());
}
main();
\`\`\`

## 自动化对比

| 功能 | MoreLogin | AdsPower | GoLogin | Multilogin | Dolphin Anty | Octo Browser |
|------|-----------|----------|---------|------------|-------------|-------------|
| Playwright | ✓ | ✗ | ✓ | ✓ | ✗ | ✗ |
| Selenium | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Puppeteer | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 本地 API | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| MCP 支持 | ✓ | ✗ | ✓ | ✗ | ✗ | ✗ |

## 最佳实践

- **错误处理** — 始终用 try-catch 包装 API 调用并处理超时
- **配置文件预热** — 启动后等待浏览器完全加载再连接
- **速率限制** — API 调用之间添加延迟，避免触发限制
- **清理** — 始终在脚本完成后停止配置文件
- **日志记录** — 记录所有操作以便调试和审计`,

  "getting-started": `## 什么是指纹浏览器？

指纹浏览器是一种专门设计的网络浏览器，通过为每个配置文件创建独特的**浏览器指纹**来管理多个在线身份。与暴露你真实数字指纹的普通浏览器不同，指纹浏览器会掩盖或替换这些标识符，使每个浏览器配置文件看起来像是来自不同设备的完全不同的用户。

## 为什么需要指纹浏览器？

如果你在 Amazon、Facebook、Google 或任何其他平台上管理多个账号，你可能遇到过账号封禁或限制。这是因为平台使用**浏览器指纹识别**来检测多个账号是否由同一人操作。

浏览器指纹收集的信息包括：
- **Canvas 指纹** — GPU 渲染图形的方式
- **WebGL 数据** — 3D 图形处理能力
- **屏幕分辨率** — 显示器尺寸
- **已安装字体** — 系统可用字体
- **User Agent** — 浏览器和操作系统信息
- **时区和语言** — 本地化设置
- **硬件并发数** — CPU 核心数

指纹浏览器为每个配置文件创建这些参数的独特组合，使每个账号看起来都来自不同的设备。

## 指纹浏览器如何工作？

1. **创建配置文件** — 创建一个具有独特指纹参数集的新浏览器配置文件
2. **指纹配置** — 浏览器分配（或你自定义）Canvas、WebGL、字体、屏幕大小等指纹值
3. **代理分配** — 你为每个配置文件分配代理（住宅、数据中心或 ISP），赋予每个配置文件唯一的 IP 地址
4. **隔离环境** — 每个配置文件在独立的容器中运行，拥有独立的 Cookie、缓存和本地存储
5. **不可检测的浏览** — 独特指纹 + 独特 IP 的组合使每个配置文件看起来像真正不同的用户

## 如何选择合适的指纹浏览器

以下是需要考虑的关键因素：

| 因素 | 选择要点 |
|------|---------|
| **指纹质量** | 基于 ML 的指纹 > 随机噪声注入 |
| **浏览器引擎** | 同时支持 Chromium + Firefox 最理想 |
| **免费计划** | 先试用再购买 — 寻找慷慨的免费方案 |
| **团队功能** | 角色权限、配置文件共享、审计日志 |
| **自动化** | API 支持（REST/本地）、Selenium、Puppeteer、Playwright |
| **价格** | 比较不同套餐的每个配置文件成本 |

## 快速入门步骤

1. **注册**指纹浏览器（大多数提供免费计划）
2. **下载并安装**桌面应用程序
3. **创建第一个配置文件**，使用默认指纹设置
4. **添加代理**（推荐使用住宅代理以获得最佳效果）
5. **启动配置文件**并访问 [BrowserLeaks](https://browserleaks.com) 验证你的指纹
6. **根据需要创建更多配置文件**

## 下一步

熟悉基本的配置文件创建后，可以探索：
- [如何设置代理](/guides/proxy-setup) — 详细的代理配置指南
- [指纹测试](/guides/fingerprint-testing) — 使用测试工具验证你的设置
- [浏览器自动化](/guides/automation-guide) — 用代码自动化工作流`,

  "proxy-setup": `## 为什么代理至关重要

指纹浏览器处理你的**浏览器指纹**，但你的 **IP 地址**同样重要。如果不使用代理，你的所有配置文件共享同一个 IP — 这对任何平台来说都是一个明显的警示信号。

## 代理类型

### 住宅代理
- **最适合**：社交媒体、电商、广告账号
- **检测风险**：极低（真实住宅 IP）
- **费用**：较高（$5-15/GB）
- **速度**：中等

### 数据中心代理
- **最适合**：网页抓取、批量操作
- **检测风险**：中等（已知的数据中心 IP 段）
- **费用**：低（$1-3/GB 或固定月费）
- **速度**：快

### ISP 代理
- **最适合**：长期账号、高价值操作
- **检测风险**：极低（静态住宅 IP）
- **费用**：最高（$2-5/IP/月）
- **速度**：快

### 移动代理
- **最适合**：移动端平台（Instagram、TikTok）
- **检测风险**：最低（共享运营商 IP）
- **费用**：高（$20-50/月）
- **速度**：不稳定

## 代理配置步骤

### 步骤 1：选择代理供应商

与指纹浏览器配合良好的热门供应商：
- **Bright Data** — 最大的代理网络
- **Oxylabs** — 企业级可靠性
- **Smartproxy** — 价格/质量的良好平衡
- **IPRoyal** — 经济实惠的住宅代理
- **922 Proxy** — 实惠的轮换代理

### 步骤 2：获取你的代理凭据

供应商会提供：
- **主机/IP**：例如 \`proxy.example.com\`
- **端口**：例如 \`8080\`
- **用户名**：你的账号用户名
- **密码**：你的账号密码
- **协议**：HTTP、HTTPS 或 SOCKS5

### 步骤 3：在指纹浏览器中配置

在大多数指纹浏览器中，代理配置流程如下：
1. 打开配置文件设置
2. 导航到代理设置部分
3. 选择协议（HTTP/SOCKS5）
4. 输入主机、端口、用户名、密码
5. 点击"检查代理"验证连通性
6. 保存配置文件

### 步骤 4：验证你的设置

启动带代理的配置文件后：
1. 访问 [whatismyipaddress.com](https://whatismyipaddress.com) 确认 IP 已更改
2. 检查 IP 位置是否与你预期的地区匹配
3. 确保配置文件中的时区和语言与代理位置匹配

## 最佳实践

- **一个代理一个配置文件** — 绝不在配置文件之间共享代理
- **匹配位置数据** — 确保时区、语言和地理位置与代理国家匹配
- **使用固定会话** — 账号管理时使用始终相同的 IP
- **轮换用于抓取** — 数据采集时使用轮换代理
- **监控代理健康** — 定期检查代理速度和正常运行时间`,

  "fingerprint-testing": `## 为什么要测试你的指纹

配置指纹浏览器后，你需要**验证你的设置是否真正有效**。一个配置不当的配置文件可能会泄露你的真实身份或触发反欺诈系统。

## 推荐测试工具

### 1. CreepJS
**网址**：[abrahamjuliot.github.io/creepjs](https://abrahamjuliot.github.io/creepjs/)

CreepJS 是最全面的指纹测试工具之一。它检测：
- Canvas 和 WebGL 指纹
- 音频指纹
- 字体检测
- 屏幕和设备信息
- 谎言和不一致性检测

**如何使用**：
1. 在指纹浏览器中打开一个配置文件
2. 访问 CreepJS 网站
3. 等待测试完成（大约 30 秒）
4. 查看"Trust Score"——分数越高越好
5. 检查"Lies"部分——应该显示"none detected"

### 2. BrowserLeaks
**网址**：[browserleaks.com](https://browserleaks.com/)

BrowserLeaks 提供单独的测试页面：
- **Canvas 指纹** — 检查唯一性
- **WebGL 报告** — GPU 和渲染器信息
- **WebRTC 泄露** — 检查真实 IP 是否暴露
- **字体指纹** — 已安装字体列表
- **JavaScript** — 浏览器 API 和对象

**如何使用**：
1. 逐个打开每个测试页面
2. 将结果与你的配置文件设置进行比较
3. 确保没有矛盾的信息

### 3. Pixelscan
**网址**：[pixelscan.net](https://pixelscan.net/)

Pixelscan 专注于检测不一致性：
- 浏览器 vs 操作系统不匹配
- 时区 vs IP 位置不匹配
- 屏幕分辨率异常
- WebGL 渲染器与声称的硬件不匹配

**如何使用**：
1. 访问 Pixelscan
2. 查看整体状态——目标是"Not detected"
3. 检查每个类别中是否有标记

## 关键检查清单

| 检查项目 | 通过标准 | 检查工具 |
|---------|---------|---------|
| Canvas 指纹 | 每个配置文件唯一 | BrowserLeaks |
| WebGL 渲染器 | 与操作系统/GPU 匹配 | BrowserLeaks |
| WebRTC 泄露 | 无真实 IP 泄露 | BrowserLeaks |
| 时区 | 与代理 IP 位置匹配 | Pixelscan |
| 语言 | 与代理国家匹配 | Pixelscan |
| 屏幕分辨率 | 常见分辨率值 | Pixelscan |
| User Agent | 与浏览器引擎匹配 | CreepJS |
| 字体 | 与操作系统匹配 | BrowserLeaks |
| 音频指纹 | 唯一且稳定 | CreepJS |
| 整体一致性 | 无矛盾信息 | Pixelscan |

## 常见问题排查

### WebRTC 泄露
**症状**：真实 IP 在 WebRTC 测试中可见
**解决**：在配置文件设置中禁用 WebRTC 或设置为"替换"模式

### 时区不匹配
**症状**：Pixelscan 显示时区与 IP 位置不匹配
**解决**：在配置文件中将时区设置为"自动匹配代理"

### Canvas 指纹相同
**症状**：多个配置文件显示相同的 Canvas 哈希
**解决**：启用 Canvas 噪声注入或使用 ML 指纹模式

### 字体检测
**症状**：检测到与声称的操作系统不匹配的字体
**解决**：使用浏览器的默认字体集，避免安装自定义字体

### Pixelscan 标记"疑似"
**症状**：Pixelscan 显示黄色或红色标记
**解决**：检查所有参数的一致性——特别是 UA、操作系统、屏幕分辨率和 GPU 的匹配`,
};
