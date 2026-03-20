# CLAUDE.md

This file provides guidance to Claude Code (`claude.ai/code`) when working with code in this repository.

## システム概要

このリポジトリは、`source/*.md` に配置した Markdown ベースの講義資料を、Pandoc を用いて `docs/*.html` に変換し、GitHub Pages で公開するためのシステムである。

対象は、Python 言語プログラミングのハンズオン形式授業向けのウェブ講義資料であり、変換後の HTML には、学習体験を損なわない適切な UI/UX が求められる。特に、以下のような表示・操作性を前提とする。

- `docs/style.css` による統一された見た目
- `template.html` による共通レイアウト
- コードブロックに対する適切なシンタックスハイライト
- コードのクリップボードコピー機能
- 行番号表示や行参照のしやすさ

公開 URL のベースは、`pandoc-make.yaml` 内の `base-url` で設定する。

## 重要な注意事項

Claude Code に対して、`source` フォルダ内の Markdown ファイルに記述される**講義内容そのもの**への提案、改善、加筆、校正、書き換えは求めていない。

Claude Code が対象とするのは、主として以下のような**仕組み・構成・表示・変換まわり**の技術的事項である。

- Pandoc 変換設定
- テンプレート
- CSS
- 補助的なスクリプト
- ビルド手順
- 出力 HTML の構造や使い勝手

したがって、講義本文の教育内容や説明内容には立ち入らず、必要がある場合も技術的観点に限定して扱うこと。

## ビルド方法

VS Code のビルドタスク（`Ctrl+Shift+B`）を利用するか、以下のコマンドを直接実行する。

### 単一ファイルを変換する場合

```bash
pandoc source/lectureXX.md -o docs/lectureXX.html -d pandoc-make.yaml
```

### すべての講義資料を一括変換する場合

```bash
for f in source/*.md; do
  base=$(basename "$f" .md)
  pandoc "$f" -o "docs/${base}.html" -d pandoc-make.yaml
done
```

## ファイル構成

- `source/lectureXX.md` — 講義資料のソース Markdown
- `docs/lectureXX.html` — 変換後の HTML（GitHub Pages で公開）
- `docs/style.css` — 全講義資料で共通利用するスタイルシート
- `docs/favicon.ico` — ファビコン
- `pandoc-make.yaml` — Pandoc の変換設定
- `template.html` — 共通 HTML テンプレート（ヘッダー・フッター・ナビゲーション等を含む）

## Pandoc 設定 (`pandoc-make.yaml`)

| 設定項目 | 内容 |
| --- | --- |
| 数式 | MathJax を使用 |
| 見出し番号 | 自動付与（`number-sections: true`） |
| 目次 | 自動生成（深さ 2） |
| 見出しレベル | `shift-heading-level-by: -1` により、Markdown の `#` を実質的に `<h2>` 相当に調整 |

## 講義資料 Markdown のフロントマター

各講義資料の先頭には、以下の形式のフロントマターを記述する。

```yaml
---
var:
  header-title: "2026-2I プログラミング1 第XX回 講義資料"
  header-date: "YYYY年MM月DD日 (曜) X時限"
---
```

## 公開フロー

1. `source/lectureXX.md` を編集する
2. Pandoc でビルドし、`docs/lectureXX.html` を生成する
3. `docs/` 以下を `git add` してコミットする
4. GitHub にプッシュする
5. GitHub Pages により `docs/` 以下が公開される

## 補足

- `.gitignore` により、`.vscode/` はリポジトリに含まれない
- 生成物である `docs/*.html` は公開対象であるため、ソース更新時は変換結果の差分にも注意すること
- 出力 HTML の品質は、見た目だけでなく、授業中の参照性・可読性・操作性を含めて確認すること