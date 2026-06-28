<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:antibrowserhub-rules -->
# AntiBrowserHub 项目开发规范

## 🌐 多语言 (i18n) — 强制要求

**所有面向用户的文本必须支持 6 种语言，没有例外。**

支持的语言: `en` | `zh` | `ru` | `ja` | `fr` | `de`

### i18n 架构概览

项目使用 3 层 i18n 体系，根据内容类型选择正确的层：

| 层 | 文件 | 用途 | 使用方式 |
|---|------|------|---------|
| **UI 字典** | `src/i18n/dictionaries.ts` | 全局 UI 文本（导航、按钮、标签） | `const { t } = useI18n(); t.nav.reviews` |
| **页面翻译** | `src/i18n/pages.ts` | 页面级内容（首页、关于页等） | `const { p } = useI18n(); p.home.heroTitle` 或在组件中用 `getPageTexts(locale)` |
| **浏览器翻译** | `src/i18n/browsers.ts` | 浏览器特定翻译（tagline、features） | `getBrowserI18n(slug, locale)` |

### 添加新 UI 文本的流程

1. **定义接口** — 在 `dictionaries.ts` 的 `Dictionary` 接口中添加新字段
2. **添加所有 6 种语言** — 在 `en`, `zh`, `ru`, `ja`, `fr`, `de` 对象中都添加翻译
3. **使用** — 通过 `useI18n()` hook 访问

```typescript
// ❌ 错误 — 硬编码英文
<h2>Latest Deals</h2>

// ✅ 正确 — 使用 i18n
const { t } = useI18n();
<h2>{t.deals.title}</h2>
```

### 页面级内联翻译模式

对于页面独有的文本（不共享），使用 **inline i18n map** 模式：

```typescript
// ✅ 正确 — 用于页面独有文本
const ui: Record<string, Record<string, string>> = {
  title: {
    en: "Compare Browsers",
    zh: "浏览器对比",
    ru: "Сравнение браузеров",
    ja: "ブラウザ比較",
    fr: "Comparer les navigateurs",
    de: "Browser vergleichen",
  },
};

// 使用辅助函数
const i = (m: Record<string, string>, locale: string) => m[locale] || m.en;
<h1>{i(ui.title, locale)}</h1>
```

### 添加新浏览器时的 i18n

在 `src/i18n/browsers.ts` 中添加对应条目，格式：

```typescript
"browser-slug": {
  en: { tagline: "...", features: ["...", "..."] },
  zh: { tagline: "...", features: ["...", "..."] },
  ru: { tagline: "...", features: ["...", "..."] },
  ja: { tagline: "...", features: ["...", "..."] },
  fr: { tagline: "...", features: ["...", "..."] },
  de: { tagline: "...", features: ["...", "..."] },
},
```

### i18n 检查清单

添加任何新功能前，确认以下所有项：

- [ ] 所有用户可见文本都已翻译为 6 种语言
- [ ] 使用了正确的 i18n 层（dictionaries / pages / browsers / inline map）
- [ ] 英文作为 fallback（`m[locale] || m.en`）
- [ ] 新增的 `Dictionary` 字段在所有 6 个语言对象中都有值
- [ ] 组件中使用 `useI18n()` hook 获取 locale 和翻译

---

## 📁 项目结构

```
src/
├── app/                    # Next.js App Router 页面
│   ├── layout.tsx          # 根布局（Analytics、ThemeProvider、I18nProvider）
│   ├── globals.css         # 全局 CSS（所有样式在这一个文件中）
│   ├── page.tsx            # 首页
│   ├── reviews/            # 浏览器评测
│   │   ├── [slug]/page.tsx # 动态评测页（Server Component）
│   ├── compare/            # 对比
│   │   ├── [slug]/page.tsx # X vs Y 动态对比页
│   ├── guides/             # 教程
│   ├── deals/              # 优惠折扣
│   ├── about/              # 关于页
│   └── sitemap.ts          # 自动生成的 Sitemap
├── components/             # 共享组件（Client Components）
├── data/                   # 数据层（纯 TypeScript 对象）
│   ├── browsers.ts         # 所有浏览器数据（评分、价格、功能等）
│   ├── comparisons.ts      # 对比配对生成逻辑
│   └── guides.ts           # 教程数据
├── i18n/                   # 国际化
│   ├── config.ts           # 语言定义（locales, Locale 类型）
│   ├── dictionaries.ts     # 全局 UI 翻译
│   ├── pages.ts            # 页面级翻译
│   └── browsers.ts         # 浏览器翻译
├── types/                  # TypeScript 类型定义
│   └── index.ts            # Browser, PricingPlan, FAQ 等接口
└── lib/                    # 工具函数
```

---

## 🧩 组件规范

### 分类

| 类型 | 指令 | 位置 | 示例 |
|------|------|------|------|
| **Server Component** | 无 `"use client"` | `app/` 页面文件 | `reviews/[slug]/page.tsx` |
| **Client Component** | `"use client"` 开头 | `components/` | `Header.tsx`, `SearchModal.tsx` |

### Server Component 规则

- 使用 `async function` + `await params`
- 不能使用 hooks（useState, useEffect, useI18n 等）
- i18n 文本只能通过 props 传递或使用 inline 翻译对象
- 必须实现 `generateStaticParams()` 和 `generateMetadata()` 用于 SSG

```typescript
// Server Component 标准模板
type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllBrowserSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // ...
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  // ...
}
```

### Client Component 规则

- 文件第一行必须是 `"use client";`
- 使用 `useI18n()` 获取 `locale` 和 `t`（翻译字典）
- 所有状态和副作用在 Client Component 中处理

---

## 📊 数据层规范

### 添加新浏览器

在 `src/data/browsers.ts` 中添加新条目，必须包含 `Browser` 接口的所有字段：

```typescript
{
  id: "slug-name",           // 唯一标识（小写，连字符分隔）
  name: "Display Name",      // 显示名称
  slug: "slug-name",         // URL slug（与 id 相同）
  tagline: "...",             // 一句话描述
  description: "...",         // 详细描述（2-3 段）
  logo: "",                   // 暂留空
  website: "https://...",     // 官方网站
  affiliateUrl: "https://...", // 联盟链接
  rating: {                   // 1-5 分
    overall: 4.2,
    fingerprint: 4.5,
    performance: 4.0,
    usability: 4.3,
    pricing: 4.0,
    support: 4.0,
  },
  pricing: { free: true, freeProfiles: 10, startingPrice: "$29/mo", plans: [...] },
  features: ["Feature 1 — Description", ...],
  pros: ["Pro 1", ...],       // 至少 5 条
  cons: ["Con 1", ...],       // 至少 3 条
  platforms: ["windows", "macos", "linux"],
  hasAPI: true,
  hasTeamFeatures: true,
  hasCookieImport: true,
  automationSupport: ["Selenium", "Puppeteer"],
  foundedYear: 2020,
  color: "#6366f1",           // 品牌色（用于 UI 标识）
  reviewContent: [...],       // 深度评测段落
  useCases: [...],            // 使用场景
  testimonials: [...],        // 用户评价
  faqs: [...],                // FAQ（至少 5 条）
}
```

**添加新浏览器后必须同步更新：**
1. `src/i18n/browsers.ts` — 添加 6 语言翻译
2. Sitemap 会自动包含（无需手动更新）
3. 对比页会自动生成所有配对

### 数据文件禁止事项

- ❌ 不要在数据文件中使用 `import` 动态模块
- ❌ 不要将 JSX 放入数据文件
- ✅ 数据文件只包含纯 TypeScript 对象和辅助函数

---

## 🎨 样式规范

### 样式系统

- **所有样式** 都在 `src/app/globals.css` 中定义
- 使用 **CSS 变量** 管理主题色、间距、圆角等
- 支持 **暗色/亮色** 双主题：`[data-theme="light"]` 和默认暗色
- **不使用** Tailwind CSS、CSS Modules 或 CSS-in-JS

### CSS 变量（设计令牌）

```css
/* 使用这些变量，不要硬编码颜色 */
var(--bg-primary)        /* 主背景 */
var(--bg-card)           /* 卡片背景 */
var(--text-primary)      /* 主文字 */
var(--text-secondary)    /* 次要文字 */
var(--text-muted)        /* 弱化文字 */
var(--color-indigo)      /* 主题色 */
var(--color-cyan)        /* 强调色 */
var(--color-emerald)     /* 成功/正面 */
var(--color-rose)        /* 错误/负面 */
var(--gradient-primary)  /* 主渐变 */
var(--border-primary)    /* 边框 */
var(--radius-md)         /* 圆角 */
var(--font-sans)         /* 主字体 Inter */
var(--font-mono)         /* 等宽字体 JetBrains Mono */
```

### 新增组件样式的流程

1. 在 `globals.css` 中找到对应的区域（有注释分隔），使用 `/* ===== COMPONENT_NAME ===== */` 注释标记
2. 添加 `@media (max-width: 768px)` 响应式样式
3. 确保暗色/亮色主题都正常显示

### 响应式断点

```css
@media (max-width: 1024px) { /* 平板 */ }
@media (max-width: 768px)  { /* 手机 */ }
@media (max-width: 480px)  { /* 小屏手机 */ }
```

---

## 🔍 SEO 规范

### 每个页面必须包含

1. **Metadata** — `generateMetadata()` 返回 title + description
2. **Schema.org JSON-LD** — 结构化数据（Review、FAQPage、BreadcrumbList、Article 等）
3. **Breadcrumb** — 使用 `<Breadcrumb>` 组件
4. **Sitemap** — 在 `src/app/sitemap.ts` 中注册新页面
5. **语义化 HTML** — 使用 `<section>`, `<article>`, `<nav>`, `<main>` 等

### Metadata 模板

```typescript
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: "Page Title — Specific Keywords 2026",
    description: "Compelling description under 160 characters...",
  };
}
```

### Sitemap

- 新路由必须添加到 `src/app/sitemap.ts`
- 动态路由（如浏览器评测）使用数据函数自动生成
- 优先级：首页 1.0、列表页 0.9、详情页 0.8、对比页 0.7

---

## 📦 添加新功能的标准流程

### 1. 新建页面

```
1. 创建路由 → src/app/{route}/page.tsx
2. 添加 i18n  → dictionaries.ts 或使用 inline map（6 种语言）
3. 添加 SEO  → generateMetadata() + JSON-LD + Breadcrumb
4. 添加样式  → globals.css
5. 更新导航  → Header.tsx（桌面 + 移动端） + Footer.tsx
6. 更新 Sitemap → sitemap.ts
7. TypeScript 检查 → npx tsc --noEmit
```

### 2. 新建组件

```
1. 确定类型 → Server Component 还是 Client Component
2. 创建文件 → src/components/{Name}.tsx
3. 添加样式 → globals.css 中新增对应 CSS 区块
4. i18n → 所有文本必须支持 6 种语言
5. 响应式 → 添加 @media 断点
```

### 3. 新增浏览器评测

```
1. 数据 → src/data/browsers.ts（完整 Browser 对象）
2. 翻译 → src/i18n/browsers.ts（6 语言 tagline + features）
3. 验证 → npx tsc --noEmit（零错误）
4. 自动完成 → Sitemap、对比页、搜索索引会自动包含
```

---

## ⚠️ 禁止事项

| 禁止 | 原因 |
|------|------|
| 硬编码英文文本在 JSX 中 | 必须使用 i18n 系统 |
| 使用 Tailwind CSS | 项目使用纯 CSS |
| 使用 CSS Modules | 所有样式在 globals.css 中 |
| 在 Server Component 中使用 hooks | Server Component 不支持 |
| 使用 `require()` 导入 | 使用 ES `import` |
| 创建新的 CSS 文件 | 所有样式在 globals.css |
| 忽略移动端适配 | 必须添加响应式样式 |
| 只添加部分语言翻译 | 必须覆盖全部 6 种语言 |

---

## 🚀 部署

- **平台**: Vercel（通过 GitHub 自动部署）
- **分支**: `main` → 生产环境
- **Node 版本**: Vercel 上使用 Node 20+（本地可能不同）
- **部署前必检**:
  1. `npx tsc --noEmit` — 零 TypeScript 错误
  2. 所有新文本都有 6 语言翻译
  3. Sitemap 包含新页面
  4. `git push origin main` 触发自动部署

---

## 🔧 常用命令

```bash
npx tsc --noEmit          # TypeScript 类型检查
npm run dev               # 本地开发服务器
npm run build             # 生产构建（需要 Node >=20.9.0）
git push origin main      # 触发 Vercel 部署
```

---

## 🤖 Codex 多角色工作流

本项目使用 repo-scoped custom agents 管理复杂任务。主 Agent 负责需求澄清、决策、合并结果和最终交付；子 Agent 只处理边界清晰的分析、实现、审查或验证任务。

### 可用角色

| 角色 | 文件 | 用途 | 是否默认改代码 |
|---|---|---|---|
| `architect` | `.codex/agents/architect.toml` | 拆解需求、识别影响范围、制定实现方案和风险清单 | 否 |
| `explorer` | `.codex/agents/explorer.toml` | 阅读代码、定位文件、总结现有模式 | 否 |
| `implementer` | `.codex/agents/implementer.toml` | 按既定方案做最小范围实现 | 是 |
| `reviewer` | `.codex/agents/reviewer.toml` | 检查正确性、回归、安全、i18n、SEO 和测试缺口 | 否 |
| `tester` | `.codex/agents/tester.toml` | 运行验证、分析失败、补充聚焦测试建议 | 视任务而定 |

### 标准执行顺序

复杂需求默认按以下顺序处理：

1. `architect` 先输出影响范围、实现方案、风险点和验证方式。
2. `explorer` 定位相关文件、现有组件模式、i18n/SEO/样式约束。
3. 主 Agent 合并方案，决定是否进入实现。
4. `implementer` 按最小范围修改代码，避免无关重构。
5. `reviewer` 审查行为回归、项目规则违反、缺失测试和安全风险。
6. `tester` 运行 `npx tsc --noEmit`、`npm run lint`、必要时运行 `npm run build`，并解释任何失败。

### 并行规则

- 可以并行运行 `architect`、`explorer`、`reviewer`、`tester` 做只读分析。
- 默认不要让多个 Agent 同时编辑同一批文件。
- 写代码通常只交给一个 `implementer`，主 Agent 负责最终检查和整合。
- 子 Agent 输出必须是摘要和证据，不要把大量日志、无关搜索结果或猜测带回主线程。

### 推荐提示词

```text
按本项目 Codex 多角色工作流处理这个需求：
先让 architect 和 explorer 分析，主 Agent 合并实现方案；
再由 implementer 做最小范围修改；
最后让 reviewer 和 tester 验证。
遵守 AGENTS.md 中的 Next.js、i18n、SEO、样式和验证规则。
```

审查当前改动时使用：

```text
请并行使用 reviewer 和 tester 审查当前工作区改动。
reviewer 只关注行为回归、安全、i18n、SEO、样式规范和缺失测试；
tester 运行相关验证命令并分析失败原因。
等待两个角色完成后，按严重程度合并结论。
```
<!-- END:antibrowserhub-rules -->
