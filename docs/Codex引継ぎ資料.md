# Codex引継ぎ資料：社会システム計画学研究室HP

作成日：2026-06-04  
対象リポジトリ：https://github.com/laboratory-ip-ryukyu/laboratory-ip-ryukyu.github.io  
公開URL：https://laboratory-ip-ryukyu.github.io/

## 1. 目的

この資料は、ChatGPT上で行っていた研究室HPの修正作業を、Codexのプロジェクト管理へ引き継ぐためのものです。今後は、HTML/CSS/JSの具体的な修正やGitHubへの反映作業はCodex側で管理し、ChatGPT側は構成案・文章案・デザイン方針・データ整理の相談に使う想定です。

## 2. 現在のリポジトリ概要

| 項目 | 内容 |
|---|---|
| リポジトリ | laboratory-ip-ryukyu/laboratory-ip-ryukyu.github.io |
| 公開方式 | GitHub Pages |
| 主な言語 | HTML / CSS / JavaScript |
| 主要ページ | index.html, about.html, research.html, members.html, publications.html, news.html, portal.html, student-life.html |
| スタイル | css/style.css |
| JavaScript | js/main.js |
| 画像 | images/hero/slide01.jpg, slide02.jpg, slide03.jpg など |
| ニュース個別ページ | news/20260531.html など |

## 3. 現在のフォルダ構造

```text
lab-hp/
├─ index.html
├─ about.html
├─ research.html
├─ members.html
├─ publications.html
├─ news.html
├─ portal.html
├─ student-life.html
├─ sitemap.xml
├─ robots.txt
├─ favicon.ico
├─ favicon-32.png
├─ favicon-192.png
├─ apple-touch-icon.png
├─ css/
│  └─ style.css
├─ js/
│  └─ main.js
├─ images/
│  └─ hero/
│     ├─ slide01.jpg
│     ├─ slide02.jpg
│     └─ slide03.jpg
└─ news/
   └─ 20260531.html
```

## 4. 直近で行った作業

### 4.1 業績管理Excelの更新

ユーザー提供の `業績管理.xlsx` を確認し、以下のシート構成を把握しました。

| シート | 内容 |
|---|---|
| 査読付き論文 | 発行年、タイトル、著者名、雑誌名、巻号ページ、DOI |
| 学会発表 | 発表年月、タイトル、著者、学会名、会場 |
| その他 | 解説記事・受賞・書籍など |

研究者DBページ（琉球大学研究者データベース）の査読付き論文と照合し、業績管理リストにない査読付き論文15件を追加しました。

追加した主な内容：

- 2025年：レンタカー事故抑止・渋滞緩和に向けた産官学の取組み～沖縄ゆいまーるプロジェクト～
- 2025年：バス通行を考慮したハンプ形状に関する研究
- 2025年：A Study on the Development of a Traffic Volume Counting Method by Vehicle Type and Direction Using Deep Learning
- 2024年：AI交通量調査、ナンバープレート認識、LiDAR歩行者交通量調査など複数件
- 2023年：License Plate Classification、MaaS関連
- 2022年：動画像を用いたナンバープレート文字認識
- 2010年・2006年：水資源・渇水・気候変動関連

また、`高齢化の進展による水害時の避難行動要支援者支援に関する地域分析` の発行年を 2025年から2026年へ修正しました。

更新済みファイル名：`業績管理_更新版.xlsx`

### 4.2 publications.htmlの修正

当初、Excelから単純なHTML断片を生成して `publications.html` として差し替えたところ、公開ページのレイアウトが崩れました。

原因は、既存の `publications.html` が以下の独自構造とCSS/JSに依存していたためです。

```html
<div class="pub-item" data-type="peer-reviewed">
  <div class="pub-year">2026</div>
  <div class="pub-content">
    <div class="pub-title">...</div>
    <div class="pub-authors">...</div>
    <div class="pub-venue">...</div>
    <div class="pub-links">...</div>
  </div>
</div>
```

重要なクラス・属性：

- `pub-item`
- `pub-year`
- `pub-content`
- `pub-title`
- `pub-authors`
- `pub-venue`
- `pub-links`
- `data-type="peer-reviewed"`

この構造を保ったまま、査読付き論文106件を反映した `publications.html` を作成し、公開ページが正常に戻ったことを確認済みです。

作成済みファイル：

- `publications_fixed.zip`：publications.htmlのみ
- `lab-hp_fixed.zip`：サイト一式版

## 5. 重要な注意点

### 5.1 publications.htmlは丸ごと生成し直さない

`publications.html` は単なるリストではなく、既存のCSS/JSと連動しています。今後、業績を追加・修正する場合は、既存のHTML構造を維持して、該当する `.pub-item` のみを追加・編集してください。

避けるべきこと：

- `publication-item` など別クラス名で置き換える
- `pub-content` を省略する
- `data-type` を消す
- ページ全体のheader/footer/nav構造を再生成する
- CSS/JSを確認せずに一覧部分だけ差し替える

### 5.2 Excel → HTML反映時の基本ルール

1. `業績管理_更新版.xlsx` の「査読付き論文」シートを基準にする。
2. 既存 `publications.html` の `.pub-item[data-type="peer-reviewed"]` の構造をテンプレートとして使う。
3. 年は新しい順に並べる。
4. DOIがある場合のみリンクを出す。
5. DOIリンクは `target="_blank" rel="noopener"` を付ける。
6. 反映後、ローカル表示またはGitHub Pagesで表示崩れを確認する。

## 6. Codexに最初に渡すとよい指示

以下の文章をCodexプロジェクトの初回指示として使うとよいです。

```text
このプロジェクトでは、研究室HP（GitHub Pages）のHTML/CSS/JSを管理します。
対象リポジトリは https://github.com/laboratory-ip-ryukyu/laboratory-ip-ryukyu.github.io です。

重要：既存デザインを崩さないことを最優先してください。特に publications.html は css/style.css と js/main.js に依存しており、業績一覧は .pub-item, .pub-year, .pub-content, .pub-title, .pub-authors, .pub-venue, .pub-links, data-type などの既存構造を維持してください。

修正時は、まず既存ファイル構造を確認し、差分が最小になるように変更してください。ページ全体を作り直すのではなく、必要箇所のみを編集してください。
```

## 7. 今後の推奨ワークフロー

### 7.1 通常のHP修正

1. Codexでリポジトリを開く。
2. 修正対象ページを確認する。
3. 関連するCSS/JSも確認する。
4. 最小差分で修正する。
5. ローカルプレビューまたはGitHub Pagesで確認する。
6. 問題なければcommit/pushする。

### 7.2 業績追加のワークフロー

1. Excelの該当シートを更新する。
2. 追加対象を一覧化する。
3. 既存HTML構造に沿って `.pub-item` を追加する。
4. 年順を確認する。
5. フィルタやタブ表示が動くか確認する。
6. 公開ページで表示確認する。

### 7.3 ニュース追加のワークフロー

1. `news.html` に一覧項目を追加する。
2. 必要に応じて `news/YYYYMMDD.html` を作成する。
3. `sitemap.xml` を更新する。
4. トップページに最新ニュースを表示している場合は `index.html` も確認する。

## 8. 今後やりたいこと・候補

- 業績管理Excelからpublications.htmlへの半自動変換
- newsページの追加テンプレート化
- members.htmlの年度更新を簡単にする
- Google Scholar / Researchmap / 研究者DBとの照合ルール作成
- スマホ表示の改善
- 研究テーマページの図・説明文の充実
- GitHub ActionsによるHTML検証やリンク切れチェック
- `README.md` の整備
- Codex用の作業ルールファイル作成

## 9. 重要ファイル一覧

| ファイル | 役割 | 注意点 |
|---|---|---|
| index.html | トップページ | ニュースやヒーロー画像と連動する可能性あり |
| publications.html | 業績ページ | 独自構造を維持。丸ごと再生成しない |
| members.html | メンバー一覧 | 年度更新時に編集頻度高 |
| news.html | ニュース一覧 | 個別ページとの整合に注意 |
| css/style.css | サイト全体のCSS | クラス名変更は影響大 |
| js/main.js | ナビ、フィルタ、アニメーション等 | HTML構造変更時は必ず確認 |
| sitemap.xml | 検索エンジン向けサイトマップ | 新規ページ追加時に更新 |
| robots.txt | クローラー設定 | 基本的に変更不要 |

## 10. 直近の成果物

| ファイル | 内容 |
|---|---|
| 業績管理_更新版.xlsx | 査読付き論文15件追加、年修正済み |
| publications_fixed.zip | 修正済みpublications.htmlのみ |
| lab-hp_fixed.zip | 修正済みサイト一式 |
| Codex引継ぎ資料_研究室HP.docx / .md | 本資料 |

## 11. Codexでの注意メモ

- まず `git diff` を確認してから作業する。
- 変更前に既存HTML構造を読む。
- CSS/JSと連動するクラス名は勝手に変えない。
- 特に `publications.html` は、Excel由来のデータだけを差し替える。
- 生成HTMLを貼る場合も、既存の1件分のHTMLをテンプレートにする。
- 表示確認後にcommitする。
- 大きく変更する場合は、先にバックアップブランチを作る。

## 12. 推奨コミットメッセージ例

```text
Update peer-reviewed publications list
```

または日本語なら：

```text
査読付き論文リストを更新
```
