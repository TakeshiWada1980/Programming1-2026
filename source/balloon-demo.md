---
title: 吹き出しコンポーネント確認
var:
  header-title: "2026-2I プログラミング1 吹き出しコンポーネント確認"
  header-date: "確認用サンプル"
---

# 吹き出しコンポーネント確認

以下は、講義資料用の `balloon` コンポーネントの表示確認サンプルです。

## raw HTML 記法

<div class="balloon char-01 face-01 tone-blue">`:hover` は、マウスカーソルが要素の上にある間だけ適用される CSS の状態です。</div>

## fenced div 記法

::: {.balloon .char-01 .face-02 .tone-green}
`:hover` は、マウスカーソルが対象要素の上にある間だけ適用される疑似クラスです。

ボタンやリンクに視覚的な反応をつけたいときによく使います。
:::

## 画像なしフォールバック

::: {.balloon .tone-gray}
`char-XX` や `face-YY` を指定しない場合は、キャラ画像なしで本文だけを表示します。
:::
