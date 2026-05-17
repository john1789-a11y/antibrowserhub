// Japanese translations for guide content
export const jaGuides: Record<string, string> = {
  "getting-started": `## アンチ検出ブラウザとは？

アンチ検出ブラウザは、各プロファイルに固有の**ブラウザフィンガープリント**を作成して複数のオンラインIDを管理するための専用ウェブブラウザです。通常のブラウザと異なり、識別子を隠蔽または置換し、各プロファイルが異なるデバイスの異なるユーザーに見えるようにします。

## なぜ必要か？

Amazon、Facebook、Googleなどで複数のアカウントを管理している場合、アカウントの凍結や制限に遭遇したことがあるでしょう。プラットフォームは**ブラウザフィンガープリント**を使用してマルチアカウントを検出します。

ブラウザフィンガープリントが収集する情報：
- **Canvas指紋** — GPUのグラフィック描画方法
- **WebGLデータ** — 3Dグラフィック機能
- **画面解像度** — ディスプレイサイズ
- **インストール済みフォント** — 利用可能なシステムフォント
- **User Agent** — ブラウザとOS情報
- **タイムゾーンと言語** — ロケール設定
- **CPUコア数** — ハードウェア情報

## 仕組み

1. **プロファイル作成** — 固有のフィンガープリントパラメータを持つプロファイルを作成
2. **フィンガープリント設定** — Canvas、WebGL、フォント、画面サイズなどの値を設定
3. **プロキシ割り当て** — 各プロファイルに固有のIPアドレスを割り当て
4. **隔離環境** — 各プロファイルは独立したCookie、キャッシュ、ローカルストレージで動作
5. **検出不能なブラウジング** — 固有のフィンガープリント + 固有のIPの組み合わせ

## 選び方

| 要素 | ポイント |
|------|---------|
| **フィンガープリント品質** | ML基盤 > ランダムノイズ |
| **ブラウザエンジン** | Chromium + Firefox対応が理想 |
| **無料プラン** | 購入前にテスト |
| **チーム機能** | ロール権限、プロファイル共有 |
| **自動化** | API、Selenium、Puppeteer、Playwright対応 |
| **価格** | プロファイル単価を比較 |

## クイックスタート

1. アンチ検出ブラウザに**登録**
2. デスクトップアプリを**ダウンロードしてインストール**
3. デフォルト設定で**最初のプロファイルを作成**
4. **プロキシを追加**（住宅用プロキシ推奨）
5. プロファイルを**起動**して [BrowserLeaks](https://browserleaks.com) で確認
6. 必要に応じて追加プロファイルを作成

## 次のステップ

- [プロキシ設定](/guides/proxy-setup) — 詳細な設定ガイド
- [フィンガープリントテスト](/guides/fingerprint-testing) — 設定の検証
- [ブラウザ自動化](/guides/automation-guide) — コードによる自動化`,

  "proxy-setup": `## プロキシが不可欠な理由

アンチ検出ブラウザは**ブラウザフィンガープリント**を処理しますが、**IPアドレス**も同様に重要です。プロキシなしでは、すべてのプロファイルが同じIPを共有します。

## プロキシの種類

### 住宅用プロキシ
- **最適な用途**: SNS、EC、広告アカウント
- **検出リスク**: 非常に低い
- **コスト**: 高め（$5-15/GB）

### データセンタープロキシ
- **最適な用途**: スクレイピング、一括操作
- **検出リスク**: 中程度
- **コスト**: 低い（$1-3/GB）

### ISPプロキシ
- **最適な用途**: 長期アカウント
- **検出リスク**: 非常に低い
- **コスト**: 最高（$2-5/IP/月）

### モバイルプロキシ
- **最適な用途**: モバイルプラットフォーム
- **検出リスク**: 最低
- **コスト**: 高い（$20-50/月）

## 設定手順

### ステップ1: プロバイダーを選択
- **Bright Data** — 最大のプロキシネットワーク
- **Oxylabs** — エンタープライズ級の信頼性
- **Smartproxy** — 価格と品質のバランス

### ステップ2: 認証情報を取得
- **ホスト/IP**: 例 \`proxy.example.com\`
- **ポート**: 例 \`8080\`
- **ユーザー名とパスワード**
- **プロトコル**: HTTP、HTTPS、またはSOCKS5

### ステップ3: ブラウザで設定
1. プロファイル設定を開く
2. プロキシセクションに移動
3. プロトコルを選択
4. ホスト、ポート、認証情報を入力
5. 「プロキシチェック」をクリック
6. プロファイルを保存

## ベストプラクティス

- **1プロファイル1プロキシ** — 共有しない
- **位置情報の一致** — タイムゾーン、言語、地理位置を合わせる
- **固定セッション** — アカウント管理時
- **ローテーション** — データ収集時`,

  "automation-guide": `## なぜ自動化するのか？

自動化により、少数のアカウントから数百のアカウントへスケールアップできます：
- **スケーリング** — プロファイルをプログラムで作成・管理
- **時間節約** — ログイン、投稿、データ収集の自動化
- **エラー削減** — ヒューマンエラーの排除
- **24時間運用** — タスクの自動スケジューリング

---

## MoreLogin

**API URL:** \`http://127.0.0.1:40000\`
**ドキュメント:** [guide.morelogin.com](https://guide.morelogin.com)

### Node.js + Puppeteer

\`\`\`javascript
const axios = require('axios');
const puppeteer = require('puppeteer');
const BASE = 'http://127.0.0.1:40000';

async function main() {
  const createResp = await axios.post(BASE + '/api/env/create/quick', { name: 'automation-profile' });
  const envId = createResp.data.data.envId;
  const startResp = await axios.post(BASE + '/api/env/start', { envId });
  const browser = await puppeteer.connect({ browserWSEndpoint: startResp.data.data.wsEndpoint });
  const page = (await browser.pages())[0];
  await page.goto('https://browserleaks.com/canvas');
  console.log('Title:', await page.title());
  await axios.post(BASE + '/api/env/stop', { envId });
}
main();
\`\`\`

## 自動化比較

| 機能 | MoreLogin | AdsPower | GoLogin | Multilogin | Dolphin Anty | Octo Browser |
|------|-----------|----------|---------|------------|-------------|-------------|
| Playwright | ✓ | ✗ | ✓ | ✓ | ✗ | ✗ |
| Selenium | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Puppeteer | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| ローカルAPI | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| MCP | ✓ | ✗ | ✓ | ✗ | ✗ | ✗ |`,

  "fingerprint-testing": `## フィンガープリントテストの重要性

アンチ検出ブラウザを設定した後、**設定が正しく機能しているか検証**する必要があります。

## 推奨テストツール

### 1. CreepJS
**URL**: [abrahamjuliot.github.io/creepjs](https://abrahamjuliot.github.io/creepjs/)

最も包括的なフィンガープリントテストツールの一つ：
- CanvasとWebGLフィンガープリント
- オーディオフィンガープリント
- フォント検出
- 矛盾の検出

### 2. BrowserLeaks
**URL**: [browserleaks.com](https://browserleaks.com/)

個別のテストページ：
- **Canvas** — 一意性の確認
- **WebGL** — GPU情報
- **WebRTC** — IP漏洩チェック
- **フォント** — インストール済みフォント

### 3. Pixelscan
**URL**: [pixelscan.net](https://pixelscan.net/)

矛盾の検出に特化：
- ブラウザ vs OS の不一致
- タイムゾーン vs IP の不一致
- 画面解像度の異常

## チェックリスト

| 項目 | 合格基準 | ツール |
|------|---------|-------|
| Canvas指紋 | プロファイルごとに一意 | BrowserLeaks |
| WebGL | OS/GPUと一致 | BrowserLeaks |
| WebRTC漏洩 | IP漏洩なし | BrowserLeaks |
| タイムゾーン | プロキシIPと一致 | Pixelscan |
| 言語 | プロキシ国と一致 | Pixelscan |
| User Agent | エンジンと一致 | CreepJS |

## トラブルシューティング

### WebRTC漏洩
**解決策**: WebRTCを無効にするか「置換」モードに設定

### タイムゾーンの不一致
**解決策**: プロキシとの自動一致を設定

### 同じCanvasフィンガープリント
**解決策**: Canvasノイズ注入またはMLモードを有効化`,
};
