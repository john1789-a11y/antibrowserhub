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
**解决**：检查所有参数的一致性——特别是 UA、操作系统、屏幕分辨率 and GPU 的匹配`,

  "best-for-amazon": `## 为什么亚马逊卖家需要指纹浏览器？

亚马逊在检测**多店铺关联**方面极其严格。他们结合浏览器指纹、IP 追踪、Cookie 和行为分析来识别关联账号。如果被发现操作多个店铺，亚马逊会永久封禁所有相关店铺。

指纹浏览器能为每个店铺创建**完全隔离的浏览器环境**，彻底避免被亚马逊关联。

## 我们的首选推荐

### 1. MoreLogin — 最佳整体选择
- 采用基于 ML（机器学习）的真实画布指纹，能通过亚马逊的高级检测。
- 智能自动匹配时区、语言和地理位置。
- 每月仅需 **$5.4** 起，性价比极高。

### 2. AdsPower — 最适合自动化运营
- 内置 RPA 自动化，适合批量更新 listing、管理库存等重复性任务。
- 支持 50 多种指纹参数，SunBrowser 引擎兼容 Chrome 商店。

### 3. GoLogin — 最适合远程团队
- 提供云端 Web 访问，可在任何设备上管理店铺。
- 包含内置的免费代理，支持 Android 移动端 App。

## 亚马逊防关联设置建议

1. **一店一号**：每个店铺分配独立的浏览器配置文件。
2. **专属静态 ISP 代理**：使用静态住宅（ISP）代理，提供最真实的家庭宽带 IP。
3. **保持参数一致**：配置文件的时区、语言和地理位置必须与代理 IP 完全匹配。
4. **支付方式隔离**：使用不同的银行账户和信用卡，避免资金链关联。`,

  "best-for-facebook-ads": `## 为什么 Facebook 广告投放需要指纹浏览器？

Facebook 的防关联机制非常强大。在同一个浏览器中运行多个广告账号，极易因 Cookie 污染、IP 交叉或指纹一致而被批量封号。

## 热门指纹浏览器推荐

### 1. AdsPower — 最佳 Facebook 广告利器
- 内置 **RPA 自动化构建器**，可自动养号、发帖和管理广告。
- **Cookie 机器人**可自动收集 Cookie，加速账号权重积累。
- 起步价仅 **$5.4/月**。

### 2. Dolphin Anty — 最佳 Affiliate 营销浏览器
- 提供 **10 个永久免费配置文件**，适合预算有限的个人投手。
- 专为 Affiliate 营销设计，支持 Scenario 自动化和真实移动指纹。

### 3. MoreLogin — 适合成长型团队
- 机器学习 Canvas 指纹，完美避开 Facebook 的检测。
- 提供窗口同步器，可一键同步操作多个账号。

## Facebook 广告账号养号策略

- **第 1-3 天**：正常浏览 Facebook 信息流，观看视频，加入群组。
- **第 4-7 天**：参与互动，点赞、评论和分享。
- **第 8-14 天**：创建公共主页，设置商务管理平台 (BM)。
- **第 15-21 天**：绑定支付方式，投小额互动广告 ($5-10/天)。
- **第 22 天+**：逐步提高广告预算。`,

  "best-free-antidetect-browser": `## 免费指纹浏览器真的有用吗？

是的！几款主流的指纹浏览器都提供了功能完整的免费套餐，非常适合测试、个人多账号管理或小规模运营。

## 免费套餐对比

| 浏览器 | 免费环境数 | 核心功能 | 限制 |
|--------|------------|----------|------|
| **Dolphin Anty** | 10 | 真实指纹、基础自动化 | 无 API，团队功能受限 |
| **Incogniton** | 10 | 浏览器同步、Selenium 集成 | 无高级指纹生成 |
| **Undetectable** | 5 云端 + 无限本地 | 本地环境不限量！ | 云端仅限 5 个 |
| **GoLogin** | 3 | 云端配置、Web 端访问 | 功能有限 |
| **MoreLogin** | 2 | 解锁所有高级功能 (包括 API) | 仅限 2 个环境 |
| **AdsPower** | 2 | 核心指纹 spoofing、SunBrowser | 自动化功能受限 |

## 免费方案推荐

- **需要最多的免费环境？** 选择 **Dolphin Anty** (10 个) 或 **Incogniton** (10 个)。
- **需要在单台电脑上无限多开？** 选择 **Undetectable**（本地环境无限）。
- **需要最顶级的指纹质量与 API 功能？** 选择 **MoreLogin**（功能全解锁）。`,

  "best-for-affiliate-marketing": `## 为什么联盟营销需要指纹浏览器？

联盟营销 (Affiliate Marketing) 需要操作多个广告平台和联盟项目账号。一旦发生关联封号，意味着前期的测品投入和佣金积蓄都会付诸东流。

## 核心推荐

### 1. Dolphin Anty — 专为联盟客设计
- 创始人本身就是联盟客，完美契合流量套利行业的需求。
- **10 个免费环境**，提供真实的 iOS/Android 移动端指纹。

### 2. AdsPower — 大规模团队的首选
- 强大的 **RPA 自动养号和注册** 模板。
- **多窗口同步器** 方便多账号批量操作。

### 3. MoreLogin — 性价比极高
- 机器学习防关联技术，**$5.4/月** 起，非常适合预算有限但追求高品质指纹的团队。

## 联盟营销基本工作流

1. **环境准备**：创建指纹环境，绑定独享住宅代理，进行 Cookie 导入和养号。
2. **渠道入驻**：在各大联盟网络注册账号，使用指纹浏览器隔离审核身份。
3. **广告投放**：多账号运行广告测试创意，利用同步器快速起量。`,

  "best-for-web-scraping": `## 为什么使用指纹浏览器进行网页抓取？

现代网站使用了大量的反爬虫机制（如 Cloudflare、验证码和浏览器指纹识别）。传统的爬虫框架（如 Puppeteer、Playwright）如果直接运行在无头模式下，很容易被识别为机器人并遭遇 IP 封锁。

指纹浏览器通过提供**极具真实性的指纹环境**与**代理隔离**，能完美伪装成真实用户。

## 推荐选择

### 1. MoreLogin — 最佳网页抓取 API
- 拥有强大的本地 API 和 REST API，在免费套餐中即可免费使用。
- 深度支持 Playwright、Selenium 和 Puppeteer，能有效过 Cloudflare。

### 2. GoLogin — 最佳云端爬取
- 支持在云端服务器上运行爬取环境，节省本地计算资源。
- 提供 Linux 版本，适合直接部署在抓取服务器上。

### 3. Multilogin — 顶级企业级数据爬取
- 引擎底层的指纹修改（Mimic 和 Stealthfox），防封能力最强。
- 支持无头（Headless）运行，非常稳定。`,

  "best-for-tiktok": `## 为什么 TikTok 运营需要特殊工具？

TikTok 作为一个移动优先的平台，其风控系统极其严格。它会检测设备的移动指纹、GPS 定位、代理 IP 类型以及操作行为模式。

## 热门指纹浏览器推荐

### 1. AdsPower — 最适合 TikTok 广告
- 提供 TikTok 专用的 RPA 自动化模板，支持自动管理广告组与预算。
- 支持多窗口同步操作。

### 2. Dolphin Anty — 最适合 TikTok 创作者
- 强大的 Android 和 iOS 移动指纹模拟，通过 TikTok 的移动风控。
- 10 个免费配置文件，适合零成本开始矩阵起号。

### 3. MoreLogin — 最佳 TikTok 店铺选择
- 支持 **云手机 (Cloud Phone)** 整合，能直接在浏览器中操作真实的云端 Android 系统。
- 画布指纹质量高，防关联效果好。`,

  "best-for-crypto-airdrop": `## 为什么加密货币空投需要指纹浏览器？

在加密货币圈，薅空投（Airdrop Farming）是快速积累资本的手段。然而，项目方会采用 **Sybil（女巫）攻击检测** 来清洗多开地址。如果你的多个钱包在同一设备、同一 IP 下与合约交互，会被直接拉黑。

## 核心推荐

### 1. MoreLogin — 薅空投神器
- **窗口同步器**：可以在一个主窗口操作，其余几十个窗口同步跟随，极大提高刷单效率。
- **扩展支持**：支持批量安装 MetaMask、Phantom 等主流插件。
- 极低的价格 (**$5.4/月** 起) 适合空投工作室大规模部署。

### 2. AdsPower — 标签与分组管理
- 适合对数百个钱包进行分组和状态标记（如：已交互、待交互）。
- 可配合 RPA 自动运行常规的交互任务。

## 空投多开安全防封实践

1. **一包一镜**：一个冷钱包或热钱包严格绑定一个浏览器环境，不要混用。
2. **代理隔离**：每个环境必须配备专属住宅 IP，不要共享。
3. **资金隔离**：避免从同一个交易所地址或中心化钱包往所有多开钱包打币，建议使用 Sub-accounts（子账户）或混币器进行资金分发。
4. **行为随机**：错开交互时间，随机化交易金额，避免操作的逻辑一致。`,

  "cheapest-antidetect-browser": `## 2026 热门指纹浏览器价格对比

寻找最便宜的指纹浏览器取决于你需要多少个浏览器环境：

| 浏览器 | 免费环境 | 10个环境 | 50个环境 | 100个环境 | 100环境单价 |
|--------|----------|----------|----------|-----------|-------------|
| **MoreLogin** | 2 | $5.4/月 | 自定义 | 自定义 | 约 $0.15-$0.3 |
| **AdsPower** | 2 | $5.4/月 | 约 $20/月 | $30/月 | $0.30 |
| **GoLogin** | 3 | $24/月 | $24/月 | $24/月 | $0.24 |
| **Dolphin Anty** | 10 | $89/月 | $89/月 | $89/月 | $0.89 |
| **Multilogin** | 0 | €99/月 | €99/月 | €99/月 | €0.99 |

*注：以上为按月订阅价格，按年订阅通常能节省 20%-50%。*

## 性价比之王

- **少于 10 个环境**：选择 **Dolphin Anty**（免费 10 个环境）。
- **10-100 个环境**：选择 **MoreLogin** 或 **AdsPower**（10个环境仅需 $5.4/月，按需定制最划算）。
- **100 个环境以上**：选择 **GoLogin** 或 **MoreLogin**（GoLogin 的 100 个环境套餐性价比非常高）。`,

  "avoid-amazon-suspension": `## 亚马逊如何检测卖家多账号？

亚马逊的风控系统采用多维度检测：
1. **浏览器指纹**：Canvas、WebGL、字体、分辨率等。
2. **网络环境**：IP 纯净度、DNS 泄露、WebRTC 泄露等。
3. **注册资料**：收款账户、法人信用卡、手机号、注册邮箱等。
4. **运营行为**：Listing 图片及文本相似度、产品重合度等。

## 使用指纹浏览器防封步骤

### 第一步：创建纯净环境
在 **MoreLogin** 或 **AdsPower** 中新建环境。不要手动覆盖指纹，选择自动生成指纹。

### 第二步：选择优质 ISP 静态住宅代理
不要使用动态住宅 IP 或便宜的数据中心 IP。购买静态住宅（ISP）代理，为每个店铺绑定一个固定 IP。

### 第三步：验证环境安全性
在启动环境后，使用 [BrowserLeaks](https://browserleaks.com) 检查 Canvas 和 WebGL 渲染，使用 [Pixelscan](https://pixelscan.net) 验证时区和语言一致性，确保状态全部为绿色的 "Consistent"。

### 第四步：资料与运营物理隔离
- 收款银行账户必须完全独立（如派安盈的不同子账户）。
- 绝不使用同一个邮箱在不同店铺买家号买东西。
- 上架的产品图要进行翻转、调色，描述文本要重新撰写。`,

  "multiple-facebook-accounts": `## Facebook 广告账号防封框架

Facebook 广告封号通常是因为设备指纹交叉污染或 IP 异常触发了 Meta 的安全风控。

### 推荐的账号结构

\`\`\`
指纹浏览器环境 A ──> 养号个号 A ──> 商务管理平台 (BM) A ──> 广告账户 A
指纹浏览器环境 B ──> 养号个号 B ──> 商务管理平台 (BM) B ──> 广告账户 B
\`\`\`

每个环境必须配备：独立住宅 IP、独立 Cookie、独立个号、独立支付卡。

### Facebook 养号核心细节

- **入驻阶段**：登录账号后，先静置 24 小时，不要进行任何修改或操作。
- **互动阶段**：前一周仅进行正常的社交互动。不要进入广告后台 (Ads Manager)。
- **绑卡阶段**：个号养足 2 周后，绑定信用卡。卡片持有人姓名最好与个号姓名或企业资料相符。
- **起量阶段**：先跑小预算广告（如主页赞），让 Meta 扣款 1-2 次成功后，再建立主广告系列。

### 代理要求
- 必须使用独享住宅代理或移动代理。
- 绝不要在运营过程中切换代理的地理位置。`,

  "chromium-vs-firefox-kernel": `## 指纹内核：Chromium 还是 Firefox？

大多数指纹浏览器在底层都是基于开源的 Chromium（如 MoreLogin、AdsPower 的 SunBrowser、GoLogin 等）。少部分品牌支持 Firefox 内核（如 Multilogin 的 Stealthfox、AdsPower 的 FlowerBrowser）。

## 两者对比

| 维度 | Chromium 内核 | Firefox 内核 |
|------|---------------|--------------|
| **真实市场份额** | 约 65%（极其常见，完美融入） | 约 7%（较少） |
| **指纹特异性** | 指纹生成点多，但容易被针对性检测 | 指纹生成逻辑不同，起到奇兵作用 |
| **插件兼容性** | 完美支持 Chrome 商店的所有插件 | 插件生态较小 |
| **自动化集成** | 完美支持 Puppeteer、Playwright 和 Selenium | Puppeteer 支持较差，Playwright 支持好 |
| **资源消耗** | 内存占用较大 | 内存占用相对较小 |

| 运营环境如何选择？ |
|--------------------|
| 1. **普通业务（跨境电商、空投、社媒）**：优先选择 **Chromium** 内核，兼容性最棒，插件安装方便。 |
| 2. **高强度的反爬与特殊检测网站**：当目标网站专门针对 Chromium 防关联浏览器进行升级检测时，使用 **Firefox** 内核可以有效避开检测锋芒。 |
| 3. **多账号防关联矩阵**：建议 70% 账号使用 Chromium，30% 使用 Firefox，进行内核层面的混合多元化，效果最佳。 |`,
};
