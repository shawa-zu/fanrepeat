githubリポジトリ: https://github.com/shawa-zu/fanrepeat

# 地域コミュニティイベント管理アプリ
React × Vite × TailwindCSS

地域のイベントを「見つける / 追加する / 詳細を見る」ことができるシンプルなアプリです。  
ユーザーが迷わず使える UI を意識して設計しています。

---

## 🚀 セットアップ手順

### 1. クローン

    git clone https://github.com/yourname/community-app.git
    cd community-app

### 2. 依存関係のインストール

    npm install

### 3. 起動

    npm run dev

### 4. ブラウザでアクセス

    http://localhost:5173

---

## 🗂 使用技術

- React
- React Router
- Vite
- TailwindCSS
- LocalStorage
- JavaScript（ES Modules）

---

## 📁 ディレクトリ構成

    src/
    ├─ App.jsx
    ├─ main.jsx
    ├─ styles/
    │   └─ global.css
    ├─ components/
    │   ├─ Header.jsx
    │   ├─ EventCard.jsx
    │   └─ SearchBox.jsx
    ├─ pages/
    │   ├─ Login.jsx
    │   ├─ EventList.jsx
    │   ├─ EventForm.jsx
    │   └─ EventDetail.jsx
    └─ hooks/
        └─ useEvents.js

---

## 🌐 画面構成

### 1. `/login` ログイン画面
- メールアドレスを入力してログイン  
- 未入力はエラー表示  
- ログイン後は `/events` へ遷移  
- LocalStorage に user を保存  

### 2. `/events` イベント一覧
- イベントをカード形式で表示  
- 検索で絞り込み  
- 「追加する」で `/events/new`  
- カードクリックで詳細へ遷移  
- LocalStorage のデータを自動読み込み  

### 3. `/events/new` イベント追加画面
- タイトル必須  
- 日付・説明を入力可能  
- 保存後 `/events` に戻る  

### 4. `/events/:id` イベント詳細
- タイトル / 日付 / 説明を表示  
- 直接 URL アクセスでも動作  
- 一覧に戻るリンクあり  

---

## 💾 データ構造

useEvents カスタムフックで管理・永続化します。

    {
      id: number,
      title: string,
      date: string,
      description: string
    }

---

## 🧩 主な機能

### ✔ LocalStorage による永続化  
リロードしてもイベントが消えない仕様。

### ✔ カスタムフック（useEvents）で一元管理  
- 読み込み  
- 追加  
- 取得  
を共通ロジックで実行。

### ✔ レスポンシブ UI（TailwindCSS）
- モバイルでも綺麗  
- シンプルで読みやすい画面デザイン  

### ✔ UX 配慮（迷わない UI）
- 必須項目は明示  
- エラーは赤字でわかりやすく  
- 戻るリンクでストレスなく移動  

---

## 🧪 動作フロー（簡潔）

1. `/login` でメールを入力しログイン  
2. `/events` に遷移してイベント一覧を見る  
3. 検索ボックスで絞り込み  
4. 「追加する」を押してフォームへ  
5. イベントを作成  
6. 一覧に反映  
7. カード押下で詳細  
8. 右上のログアウトで `/login` に戻る  

---

## 📄 ChatGPT 活用ポイント

- 画面構成（Login / List / Detail / Form）を ChatGPT と共同設計  
- React Router / Hooks 設計の最適化  
- コンポーネント分割方針  
  - EventCard  
  - SearchBox  
  - Header  
- 状態管理ロジック（useEvents）を対話しながら作成  
- README などのドキュメント自動生成で効率化  

---

## 🕒 作業時間（実績）

| 作業内容 | 時間(時間) | ChatGPT活用度 |
|---------|-------------|----------------|
| 要件定義・設計 | 1.0 | 中 |
| 環境構築 | 0.5 | 高 |
| ログイン画面実装 | 1.5 | 高 |
| イベント一覧画面実装 | 2.0 | 高 |
| レスポンシブ対応 & UI調整 | 1.0 | 中 |
| データ保存（useEvents） | 1.0 | 高 |
| バグ修正・調整 | 1.0 | 高 |
| ドキュメント作成 | 0.5 | 中 |
| **合計** | **8.5h 程度** | — |

---

## 🎉 備考

本アプリは「最小の手間で価値を届ける UI」を意識し、  
React 初学者でも理解しやすいコード構造を心がけています。