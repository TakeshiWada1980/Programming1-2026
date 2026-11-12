---
var:
  header-title: "2026-2I プログラミング1 第21回 講義資料"
  header-date: "2026年11月13日 (金) 2時限"
---

# 第21回 2I-プログラミング1

## 概要・連絡

### 連絡事項

- 今回「**小テスト❼**」を実施します。鉛筆と消しゴムを準備してください。
- 後期中間の成績は **_小テスト❻・❼_** と **_課題06_** で評価します。
  - シラバス記載のように、課題「**7割**」、小テスト「**3割**」で評価します。

- [課題06](lecture18.html#課題06-ポートフォリオ制作) (ポートフォリオ) の [作品共有](https://omunet-my.sharepoint.com/:t:/g/personal/z21707r_omu_ac_jp/IQDC6QyXroEtTqpZ6Iz8GdDQAXyHAs3t6JGkZQvUPfEy4VA?e=CxhF07) <font size="-1">(学内のみ)</font>
  - 未提出の学生は、直ちに提出してください。11月19日 (木) 17時を過ぎると受付終了して「0点」で評価確定です。

### 今回講義の達成目標

今回の講義では [OpenCV](https://ja.wikipedia.org/wiki/OpenCV) を利用した「**画像処理の基礎**」について学びます。

1. OpenCV における画像データの扱いについて理解し、その画像の基本情報を確認できる。
2. スライス機能を利用して画像データに対する初歩的な操作ができる。
3. OpenCV からカメラ画像を取得することができる。

### 参考: データ処理と可視化の例

前回、前々回で学んだ <span class="masked">numpy、pandas、matplotlib</span> の組み合わせの応用例として [Ambient](https://ambidata.io/) からダウンロードしたCSV (=<span class="masked">Comma Separated Values</span>) を対象とした **データ処理** と **可視化 (グラフ化)** のサンプルを共有しておきます。

- [AmbientからDLしたCSVの描画](https://colab.research.google.com/drive/1R5wXpQ5gCRdxLjQ6ZIRLOE7RwXFZwvY_?usp=sharing) @Colab.

## コンピュータにおける画像の扱いについて

コンピュータにおける画像の表現や扱いについては、1年生の「**情報1**」、2年生の「**情報2**」「**メディアデザイン入門**」で既に学んでいる内容ですが、改めて復習しておきます。

### 画像形式 (ラスター形式とベクター形式)

コンピュータで扱う画像の「形式」には、大きく分けて <span class="masked">ラスター形式 (ビットマップ形式)</span> と <span class="masked">ベクター形式</span> があります。

**ラスター形式 (ビットマップ形式)** は、**格子状に配置したピクセル (点) の集合として表現した形式**で、各ピクセルの色や透明度の集合として構成されます。写真などの複雑な画像にも適した形式となっています。具体的なフォーマットとしては [JPEG](https://ja.wikipedia.org/wiki/JPEG), [PNG](https://ja.wikipedia.org/wiki/Portable_Network_Graphics), [HEIF/HEIC](https://ja.wikipedia.org/wiki/High_Efficiency_Image_File_Format) , [GIF](https://ja.wikipedia.org/wiki/Graphics_Interchange_Format) , [BMP](https://ja.wikipedia.org/wiki/Windows_bitmap) などがあります。

![img](figs/21/bitmap-01.png)

**ベクター形式** は、点、線、図形などを定義した**幾何学的な形状情報**（例えば、図形の頂点座標や線幅、端点の形状などの情報）で構成される形式で、<span class="masked">拡大や縮小などの操作をしても画質が劣化しないこと</span> が特徴となっています。そのため、主に「**CAD図面**」や「**テクニカルイラスト**」などに使われる形式となっています。また、「フォント」もベクター形式のデータと言えます。具体的なフォーマットとしては [SVG](https://ja.wikipedia.org/wiki/Scalable_Vector_Graphics) , [PDF](https://ja.wikipedia.org/wiki/Portable_Document_Format) , [EPS](https://ja.wikipedia.org/wiki/Encapsulated_PostScript) , [AI](https://ja.wikipedia.org/wiki/Adobe_Illustrator) などがあります。

::: {.balloon .char-01 .face-05 .tone-blue}
ベクター形式であっても**実際にディスプレイに表示する際にはコンピュータの内部でラスター画像（ピクセルベース）に変換** されています。この変換のことを「ラスタライゼーション」といいます。
:::

<div class="note type-tips">
**代表的なラスター形式の画像フォーマット**

- **JPEG** (**Joint Photographic Experts Group**): 高い圧縮率を持った <span class="masked">不可逆圧縮</span> 形式の画像データです。写真などの保存に使用されます。一方で、アルファチャンネル (透明度) をサポートせず、圧縮による <span class="masked">品質劣化</span> も生じることからロゴやアイコン、テクニカルイラスト、スクリーンショットなどの保存形式として向いていません。様々なOSやアプリ、デバイスで広くサポートされており、ウェブでは標準的な画像形式のひとつになっています。
- **PNG** (**Portable Network Graphics**): 高い圧縮率を持った <span class="masked">可逆圧縮</span> 形式の画像データです。JPEGとは逆で、アルファチャンネルをサポートして、圧縮による品質劣化がないため、ロゴやアイコン、テクニカルイラスト、スクリーンショットなどの保存形式に適しています。一方で、高画素の写真を PNG 形式にすると <span class="masked">ファイルサイズが非常に大きくなる</span> ので注意が必要です。例えば、縦6000px、横4000px の [写真](figs/21/photo-01.jpg) を PNG形式で保存すると、ファイルサイズが 55MB超 になりますが、JPEGの場合は高品質・低圧縮の設定で 16.5MB、低品質・高圧縮の設定で 2.5MB になります (具体的なファイルサイズは、元の画像が持っている情報量によって大きく変化します)。JPEGと同様にウェブでは標準的な画像形式のひとつになっています。
- **HEIF/HEIC** (**High Efficiency Image File Format / High Efficiency Image Coding**): 比較的新しいファイル形式で、高画質を維持した高圧縮（不可逆圧縮）が可能で、ファイルサイズを <span class="masked">同品質の JPEG の半分程度</span> に抑えることができます。iPhone や iPad で写真撮影したときのデフォルトの保存形式となっています。またアルファチャンネルもサポートします。ただし、JPEG や PNG と比較するとサポートしている OS・アプリ、デバイスが少ないという現状です。実際、<span class="masked">OpenCV (4.12.0) も、HEIF/HEIC の読込みには対応していません</span>。また、ウェブの標準的な画像形式ではありません (ウェブページに使用することは避けてください)。
</div>


#### 定着確認

- JPEG、PNG、SVG を「ラスター形式」または「ベクター形式」に分類せよ。
  - **答え**: <span class="masked">ラスター形式はJPEGとPNG、ベクター形式はSVG。</span>
- 背景を透明にしたロゴをラスター画像として保存する場合、JPEGとPNGのどちらが適しているか。理由も答えよ。
  - **答え**: <span class="masked">PNG。透明度を表すアルファチャンネルをサポートしているため。</span>
- ベクター画像をラスター画像に変換する処理を何というか答えよ。
  - **答え**:<span class="masked">ラスタライゼーション</span>

### ラスター形式における色情報の管理

ラスター形式の画像において「カラー画像」の表現には、**RGB色モデル** (RGBカラーモデル) が一般的に用いられます。このモデルでは「**赤 (Red)**」「**緑 (Green)**」「**青 (Blue)**」という <span class="masked">光の三原色</span> の輝度 (光の強度) の組み合わせで、様々な「色」をつくりだします。一般に「**フルカラー**」と呼ばれる画像では、各色の輝度を **8ビット** (=**1バイト**) 、つまり `0` から `255` までの **256階調** で表現して、その組み合わせとして **約1670万色** を表現 (発色) します。

$$ 256\times256\times256 = 16,777,216$$ 

::: {.balloon .char-01 .face-02 .tone-yellow}
このようなことから、圧縮せずに「カラー画像」を扱う場合、**1ピクセルにつき「3バイト」**の情報が必要になります。また、256階調の「グレースケール画像」では、**1ピクセルにつき「1バイト」**の情報が必要になります。
:::

なお、多くの場合、カラー画像は「**RGB (赤・緑・青)**」の順に輝度を並べて色情報を扱いますが、OpenCV においては [とある理由](https://www.google.com/search?q=opencv+bgr+なぜ) から<span class="masked">「BGR (青・緑・赤)」</span> という順 (RGBとは**逆順**) に並べて色情報を管理しています。この点には十分に注意してください。

![img](figs/21/color-RGB-01.png)

:::prompts
- 通常、カラー画像は「RGB」の順番で色情報を管理するのに、OpenCV では「BGR」という順序で色情報を管理しているのですか。
:::

<div class="note type-senior">
**HSV色モデル**

2年後期の「メディアデザイン入門」でも学んでいるように、色の表現としては「**HSV色モデル**」もあります。HSVは「**色相 (Hue)**」「**彩度 (Saturation)**」「**明度 (Value)**」の3つの要素の組み合わせで色を表現します。

- **色相**: 色の種類を表し、赤、黄、緑、青など色彩の違いを示します。色相は円状に配置され、0度 (赤) から 360度 (赤) の範囲で表されます。OpenCV では `0` (赤) から `255` (赤) の 1バイト (8ビット) の範囲にマッピングされます。
- **彩度**: 色の「**鮮やか**」さを表し、0％（無彩色）から100％（純色）までの範囲で示されます。OpenCV では `0` から `255` の整数値にマッピングされます。
- **明度**: 色の「**明るさ**」を表し、0％（完全な黒）から100％（完全な白）までの範囲で示されます。OpenCV では `0` から `255` の整数値にマッピングされます。

「**肌色の検出**」のような画像処理タスクでは、RGBモデルよりも、HSVモデルが特に有効です。肌色 (=ペールオレンジ、ベージュ) は特定の色相 (Hue) の範囲にあるため、HSVモデルであれば主に色相の情報を使って比較的容易に肌色を検出することができます。

以下は、<u>OpenCV で HSV モデルをベースに、HSV の範囲フィルタによって「肌色抽出」を実行した例</u>です。床や机などの似た色が多いなかで、概ね肌色を検出できていることが分かると思います。

![img](figs/21/image-processing-01.jpg)

なお、「HSVモデル」と「RGBモデル」は相互変換可能であり、OpenCV を含めて一般的な画像処理ソフトでは両方のモデルをサポートしています。
</div>

#### 定着確認

- RGB色モデルで使う光の三原色を、RGBの順に答えよ。
  - **答え**: <span class="masked">赤、緑、青。</span>
- RGBの各色を8ビットで表すとき、各色の輝度は何段階で表せるか。また、値の範囲を答えよ。
  - **答え**: <span class="masked">256段階。値の範囲は `0` から `255`。</span>
- 赤・緑・青をそれぞれ256段階で表すとき、組み合わせで何色を表せるか。式も示せ。
  - **答え**: <span class="masked">`256 × 256 × 256 = 16,777,216` 色。</span>
- 各成分を8ビットで表すとき、圧縮していないRGBカラー画像とグレースケール画像では、1ピクセルにつきそれぞれ何バイト必要か。
  - **答え**: <span class="masked">RGBカラー画像は3バイト、グレースケール画像は1バイト。</span>
- OpenCVのカラー画像で、あるピクセルの値が `[0, 0, 255]` だった。このピクセルは何色か。成分の並び順も答えよ。
  - **答え**: <span class="masked">赤。成分はBGR（青・緑・赤）の順に並ぶ。</span>
- HSVのH・S・Vは、色の種類・鮮やかさ・明るさのどれに対応するか。それぞれの名称とともに答えよ。
  - **答え**: <span class="masked">H は色相 (Hue、色の種類)、S は彩度 (Saturation、鮮やかさ)、V は明度 (Value、明るさ)。</span>
- 肌色を検出する例では、HSV のどの成分を主に利用するか。理由も答えよ。
  - **答え**: <span class="masked">色相 (Hue)。肌色に対応する色相が特定の範囲にあるため。</span>

## OpenCVを利用した画像処理

OpenCV を利用した「画像処理」の基礎について学んでいきます。ここで学んだ内容は次年度の「知能情報実験実習1」の前期テーマのなかでも使用します。

### OpenCVとは

**OpenCV**（**Open Source Computer Vision Library**）は <span class="masked">「画像処理」</span> と <span class="masked">「コンピュータビジョン」</span> に特化したオープンソースの**ライブラリ**です。1999年に **Intel** によって開発され、**リアルタイムでの高速画像処理を可能にするために最適化**されています。また、その「汎用性」と「拡張性」により幅広いプラットフォームで使用できる点にも特徴があります。

OpenCVは、本科目で学んでいる Python の他、**C++** や **Java** などの **様々なプログラミング言語** に対応しており、また、Windows、Linux、Mac OSといった主要 OS、[Raspberry Pi](https://ja.wikipedia.org/wiki/Raspberry_Pi) や [NVIDIA Jetson](https://ja.wikipedia.org/wiki/NVIDIA_Jetson) などのアーキテクチャにも対応しています。このため「**組込みシステム**」や「IoTデバイス」でも使用されることがあります。

<div class="note type-tips">
**組込みシステムとは**

**組込みシステム** (**Embedded System**) とは、パソコンやスマートフォンとは異なり、**特定の機能を実行するためだけに設計されたコンピュータシステム**を指します。例えば、家庭で使われる「洗濯機」「テレビのリモコン」「<span class="masked">車のエンジンを制御するコンピュータ</span>」「ゲーム機」などが **組込みシステム** の典型的な例となります。このほか「信号機」や「自動販売機」「産業用加工機械」「エレベータ」なども組込みシステムの一例となります。これらの製品には、センサーやアクチュエータと連動して動作を制御するための <span class="masked">小型コンピュータが組み込まれており</span>、この特徴から「組込みシステム」と呼ばれています。
</div>

また、OpenCVは **画像の取得 (読み込み)**、**処理**、**分析**、顔認識、物体検出などの幅広い機能を提供しており、これらの機能はセキュリティ、自動運転車、ロボティクス、医療画像解析など多岐にわたる分野で応用されています。

OpenCV の「基礎」を習得しておくことは、3年生以降に開講される「**マルチメディア情報処理（画像処理）**」や「**人工知能 (画像分類や物体認識)**」を学ぶうえでも非常に役立ちます。これらの分野は、**座学として学ぶだけではなく**、<span class="masked">実際に手を動かしてプログラムを実装すること</span>で理解が深まり、また楽しく学ぶことができます。

<div class="note type-senior">
**「画像処理」と「コンピュータビジョン」の違い**

「**画像処理**」と「**コンピュータビジョン**」は、いずれも画像に関連する分野・技術ですが、その目的や、焦点としているところが違っています。

「**画像処理**」は、画像の品質を向上させたり、特定の情報を抽出することに焦点を置いています。具体的には、画像のコントラストを調整したり、ノイズを除去して画像をシャープにしたり、色を補正するなど、画像に対する変更や操作が行われます。画像処理の主な目的は、画像をより分析しやすくしたり、人間やコンピュータに対してより見やすくすることにあります。

一方で「**コンピュータビジョン (CV)**」は「画像や動画から情報を理解・解釈すること」に焦点が置かれています。画像から物体を検出・識別・追跡したり、シーンの3D構造を理解するなど、**コンピュータが人間のように視覚情報を「理解」し、それをもとに意思決定・行動をできるようにすること** を目的としています。具体例としては、顔認識、物体検出、自動運転などがあります。

なお、実際の応用では、まず「画像処理」によって画像が最適化され、その後、「コンピュータビジョン」によって画像から情報を分析するという関係になっています。
</div>

### ライブラリのインストール

[OpenCV](https://pypi.org/project/opencv-python/) は、Pythonの標準ライブラリには含まれていませんが、<u>GoogleColab環境にはデフォルトでインストールされています</u>。


GoogleColabのコードセルで以下の Linuxコマンド を実行することで、インストールされている OpenCV のバージョン情報の確認ができます。なお、`grep` は <span class="masked">指定した文字列を含む行を表示</span> するための Linuxコマンド です。

```bash
!pip list | grep opencv
```

2026年11月12日時点での実行結果は、次のようになります。`opencv-python` が標準パッケージで、`opencv-contrib-python` は標準パッケージに加えて各種追加モジュールも含んだパッケージになります。また`opencv-python-headless` は <span class="masked">GUI関連の機能を含まないパッケージ</span> になります。

```
opencv-contrib-python                 4.14.0.94
opencv-python                         5.0.0.93
opencv-python-headless                5.0.0.93
```

![img](figs/21/colab-01.png)


:::prompts
- Python ライブラリ (パッケージ) として利用可能な `opencv-python` と `opencv-python-headless`、`opencv-contrib-python` の違い、使い分けを教えてください。
:::

#### ローカル開発環境のセットアップ

ローカル環境では **手動で OpenCV をインストールする必要** があります。適当なプロジェクトフォルダ (たとえば `OpenCV` など) を作成し、Python の仮想環境を有効化し、pip を最新版にアップグレードしてから、OpenCV をインストールしてください。

**今回の講義ではローカル環境も利用するため** **_全員がインストール_** してください。環境構築の詳細は [**第09回講義**](lecture09.html#vs-codeを使ったpythonプログラムの開発の流れ) を参照してください。

```bash
python -m venv .venv
```

```bash
.venv/Scripts/Activate.ps1
```

```bash
python -m pip install --upgrade pip
```

```bash
pip install opencv-python
```

Windows 環境 (PowerShell) では、以下のコマンドで特定パッケージ (ライブラリ) のバージョンを確認できます。

```bash
pip list | Select-String "opencv"
```

正常にインストールできたかどうかは、`import cv2` を含んだ Python プログラムを実行することで確認できます。実行して `ModuleNotFoundError: No module named 'cv2'` が発生しなければ、正常にインストールができています。

プロジェクトのトップに `check_cv2_ver.py` というファイルを作成して、以下のプログラムを貼付けて実行し、ライブラリが適切にインストールできたかを確認してください。

- プログラムの実行方法は [第09回講義](lecture09.html#pythonファイルの実行) で学習済みです。なお、仮想環境の読み込みのタイミングによっては失敗することがあります。その場合は、再実行してください。

```python{.numberLines caption="check_cv2_ver.py (cv2ライブラリのインストール確認)"}
import cv2
print("OpenCV version:", cv2.__version__)
```

次のような出力が得られれば問題ありません。

```
OpenCV version: 5.0.0
```

### 画像の読込みとデータ型の確認

Python から OpenCV を利用する場合の特徴として、**画像データ**が <span class="masked">NumPy の「ndarrayオブジェクト」</span> として扱われることが挙げられます。

具体的には、**横640px**、**縦480px**の「**カラー画像**」は `shape` が `(480,640,3)` のndarrayオブジェクト、簡単に言えば <span class="masked">3次元配列</span> となります。ここで、<span class="masked">`(640,480,3)` ではなく `(480,640,3)`</span> であることに注意してください (順番に注意してください)。

また「**グレースケール画像**」は `shape` が `(480,640)` の ndarra yオブジェクト、簡単に言えば「**2次元配列**」となります。

実際に、**ローカル環境 (非Jupyter環境)** で、これらを確認してみます。次の画像 [img-01.jpg](figs/21/img-01.jpg) をダウンロードして、プログラムと同じフォルダに配置してください。この画像は **横640px**、**縦480px** のJPEG形式のカラー画像になります。

![img](figs/21/img-01.jpg)

なお、[**第19回講義**](lecture19.html#csvファイルの読込み) で学んだように、次のようなプログラムで **ウェブからファイルをダウンロードしてカレントフォルダに保存すること** もできます (GoogleColab環境では、この方法のほうが便利です)。

- 実行前に、VSCode のターミナルから `pip install requests` を実行し、[requestsライブラリ](https://pypi.org/project/requests/)をインストールしておく必要があります。

```python{.numberLines caption="get_img.py ファイルのダウンロードと保存"}
import requests 

fn = 'img-01.jpg'
url = 'https://takeshiwada1980.github.io/Programming1-2026/figs/21/img-01.jpg'
res = requests.get(url)

if res.status_code != 200:
  raise Exception(f'ファイルのDLに失敗。強制終了します。Code:{res.status_code}')
else :
  with open(fn,'wb') as file: 
    file.write(res.content)
  print(f'カレントフォルダに {fn} を保存しました')
```

カレントフォルダに配置した `img-01.jpg` について確認するために、次のプログラムを作成して実行してください。

```python{.numberLines caption="check_img_info.py OpenCVにおける画像の扱い"}
import cv2

fn = 'img-01.jpg'
img = cv2.imread(fn)
if img is None:
  raise ValueError(f'Failed to load image: {fn}')

print(f'type  => {type(img)}')
print(f'ndim  => {img.ndim}')
print(f'dtype => {img.dtype}')
print(f'shape => {img.shape}')
```

実行結果は次のようになります。

```
type  => <class 'numpy.ndarray'>
ndim  => 3
dtype => uint8
shape => (480, 640, 3)
```

ここで `dtype` の `uint8` は「**符号なし8ビット整数 (Unsigned 8-bit Integer)**」を意味します。この `uint8` 型では **0 から 255 までの整数値** を使うことができます。

次に「**グレースケール画像**」の場合にどのようになるかを試してみます。OpenCV では `cv2.imread` 関数でファイルからデータを読み込む際に、引数で「カラー形式を指定」できます。ここでは、グレースケール画像として読み込むために、第2引数に `cv2.IMREAD_GRAYSCALE` を指定します。先のプログラムの **第04行目** を `img = cv2.imread(fn,cv2.IMREAD_GRAYSCALE)` に書き換えてプログラムを実行してみてください。

実行結果は次のようになります。

```
type  => <class 'numpy.ndarray'>
ndim  => 2
dtype => uint8
shape => (480, 640)
```

グレースケール画像として読み込むことで、`img` が**2次元配列**になっていることが確認できます。

### 画像の表示

OpenCV では `cv2.imshow` 関数により、以下の画像のように **ウィンドウ** を立ち上げて画像を表示させることができます。しかし、この `cv2.imshow` は **GUI 関連の処理** を含むため <span class="masked">ローカルに構築した Jupyter環境 や GoogleColab環境 では利用すること</span> ができません。また、プログラム終了とともにウィンドウも消えるため、あとから画像を確認したいような場合にも適しません (画像処理の前後を比較したい場合などに非常に不便です)。

![img](figs/21/cv-img-show-01.png)


`cv2.imshow` には以上のような「使いにくさ」があるため、Jupyter環境 や GoogleColab環境 なども含めて画像を表示する方法について解説します。いずれの方法も <span class="masked">一長一短</span> です。**各自で目的や環境・状況にあわせて使い分けられるようになってください**。

#### 表示方法1

`cv2.imshow` を使ってウィンドウに画像を表示する方法です。この方法は **Jupyter環境 や GoogleColab環境 では使用できません**。この方法では、ウィンドウが閉じられるまで**プログラムをブロック**します。つまり、<span class="masked">ウィンドウが閉じられるまで `my_imshow` 関数以降のプログラムが実行されません</span>。

実際に試してみてください。特に、ウィンドウが閉じられるまで[ほげほげ](https://www.google.com/search?q=ほげほげ)という文字列が出力されない (=**プログラムがブロックされること**) を確認してください。

```python{.numberLines caption="show_img_1.py (表示方法1)"}
import cv2

def my_imshow(img,wn='Image'):
  cv2.imshow(wn, img)
  while True:
    # ESCキーが押下されたら閉じる
    if cv2.waitKey(10) == 27:
      break
    # 閉じるボタンが押されたら閉じる
    if cv2.getWindowProperty(wn,cv2.WND_PROP_VISIBLE) < 1:
      break
  cv2.destroyAllWindows()

img = cv2.imread('img-01.jpg')
my_imshow(img) # ■■■ 画像の表示 ■■■
print('ほげほげ')
```

#### 表示方法2

この方法も **Jupyter環境 や GoogleColab環境 では使用できません**。**_方法1_** との違いは「**プログラムがブロックされないこと**」と「<span class="masked">プログラムが終了してもウィンドウが残っていること</span>」です。

```python{.numberLines caption="show_img_2.py (表示方法2)"}
import cv2
import tempfile
import subprocess
from PIL import Image  # 要 pip install Pillow

def my_imshow(img):
  if img.ndim == 2:
    im_pil = Image.fromarray(img)
  else:
    tmp = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    im_pil = Image.fromarray(tmp)
  with tempfile.NamedTemporaryFile(suffix=".png", dir=".", delete=False) as f:
    tmp_fn = f.name
  im_pil.save(tmp_fn)
  subprocess.Popen(['mspaint', tmp_fn])

img = cv2.imread('img-01.jpg')
my_imshow(img)  # ■■■ 画像の表示 ■■■
print('ほげほげ')
```

`ModuleNotFoundError` が発生した場合は、`pip` で必要なライブラリをインストールしてください (エラーメッセージをそのまま検索すれば、解決法が見つかります)。

この方法では、実行毎に `tmp87f7_xyc.png` のようなファイルが生成されるので、適宜、手動で削除してください。

#### 表示方法3

この方法は、**可視化ライブラリである Matplotlib** を利用したもので、**環境を問わずに、非Jupyter環境、Jupyter環境、GoogleColab環境 のいずれでも使用すること**ができます。この方法のデメリットとしては「**処理が重いこと**」「<span class="masked">Matplotlibによって加工された画像になってしまうこと</span>」などがあります。この方法により表示される画像は、**もともとの画像とは異なる解像度 (縦横のピクセル数)** になってしまいます。

```python{.numberLines caption="show_img_3.py (表示方法3)"}
import cv2
import matplotlib.pyplot as plt  # 要import

def my_imshow(img):
  if img.ndim == 2:
    plt.imshow(img,cmap='gray')
  else:
    tmp = cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
    plt.imshow(tmp)
  plt.show()

img = cv2.imread('img-01.jpg')
my_imshow(img) # ■■■ 画像の表示 ■■■
print('ほげほげ')
```

**ローカルの非Jupyter環境** で実行した場合は、次のようなウィンドウが表示され、そこで <span class="masked">拡大縮小などの操作</span> もできます。ただし、このウィンドウを閉じるまではプログラムはブロックされます。一方で、**GoogleColab環境** および **Jupyter環境** で実行しているときは、プログラムはブロックされません。

![img](figs/21/cv-img-show-04.png)

なお、この方法では Matplotlib の知識とスキルがあれば、以下のように <span class="masked">分析や考察に役立つ情報を付与した画像</span> を出力することもできます (これは論文や報告書を作成する際に非常に有用です)。

![img](figs/21/cv-img-show-05.png)

上記のようなグリッドは `my_imshow` 関数を次のように書き換えることで表示させることができます。

```python{.numberLines caption="Matplotlib版の my_imshow のカスタマイズ例"}
def my_imshow(img):
  fig, ax = plt.subplots()
  if img.ndim == 2:
    ax.imshow(img, cmap='gray')
  else:
    tmp = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    ax.imshow(tmp)
  ax.set_xticks(range(0, img.shape[1] + 1, 20), minor=True)
  ax.set_yticks(range(0, img.shape[0] + 1, 20), minor=True)
  ax.grid(which='major', lw=0.5, c='#333')
  ax.grid(which='minor', lw=0.5, c='#888')
  plt.show()
```

#### 表示方法4

この方法は **GoogleColab環境だけ** で利用できる方法です。**第07行目** が `cv2.imshow` ではなく `cv2_imshow` となっていること、**第04行目** のようなインポートが必要なことに注意してください。

```python{.numberLines caption="show_img_4.py (表示方法4)"}
# GoogleColab Only
%reset -f
import cv2
from google.colab.patches import cv2_imshow

img = cv2.imread('img-01.jpg')
cv2_imshow(img)
```

#### 表示方法5

この方法は **GoogleColab環境** および **Jupyter環境** だけで利用できる方法です。画像を一時ファイルに保存して、それを読込み、`IPython.display.Image` を使って「出力セル」に表示させる方法です。**GoogleColab環境** では、`cv2_imshow` を使ったほうが処理が高速であり、この方法を使用するメリットはありません。

```python{.numberLines caption="show_img_5.ipynb (表示方法5)"}
%reset -f
import cv2
from IPython.display import Image   # 要import

img = cv2.imread('img-01.jpg')
if img is not None:
  ok = cv2.imwrite('tmp.jpg', img)
  print(f"保存結果: {ok}")
else:
  print("画像の読み込みに失敗しました")
Image(open('tmp.jpg','rb').read())  # 'tmp.jpg' を出力セルに表示
```
---

**演習**:「**表示方法1**」から「**表示方法5**」について実際に実行して結果を確認せよ。

特に `img = cv2.imread('img-01.jpg')` ではなく `img = cv2.imread('img-01.jpg',cv2.IMREAD_GRAYSCALE)` のように <u>グレースケール画像として読み込んだ場合</u>  (`img` の `ndim` が `2` の場合)についても問題なく機能することを確認せよ。

### 画像の保存

画像の保存は `cv2.imwrite` 関数を使用します。第1引数に「ファイル名」、第2引数に「**ndarrayオブジェクト**」を指定します。ファイル形式は、ファイル名に応じて自動的に決定されます。

```python{.numberLines caption="画像の保存"}
import cv2
fn = 'img-01.jpg'
img = cv2.imread(fn)
if img is None:
  raise ValueError(f'Failed to load image: {fn}')

img = cv2.flip(img, 1)              # 左右反転
cv2.imwrite('img-01-flip.jpg', img)  # 保存処理
```

このプログラムを実行すると、次のような画像 `img-01-flip.jpg` が出力されます。また、**第08行目**を `cv2.imwrite('img-01-flip.png',img)` とすれば <span class="masked">PNG形式</span> の画像が出力されます。その他、出力可能な画像形式については[リファレンス](https://docs.opencv.org/4.12.0/d4/da8/group__imgcodecs.html#ga8ac397bd09e48851665edbe12aa28f25)を参照してください。

![img](figs/21/img-01-flip.jpg)

**演習**: `cv2.flip` の第2引数を `0` および `-1` に変更したときの結果について確認せよ。

### カラー画像の構成と色成分の取得

OpenCVにおいて、カラー画像は `(*,*,3)` という3次元配列となります。実際に詳しくみていきます。まずは、画像の左上座標 X=0, Y=0 のピクセルの**色を取得**して、その値を出力してみます。

```python{.numberLines caption="check_pic_color.py 特定ピクセルの色を取得"}
import cv2
fn = 'img-01.jpg'
img = cv2.imread(fn)
if img is None:
  raise ValueError(f'Failed to load image: {fn}')

p = img[0, 0]
print(f'type => {type(p)}')
print(f'p    => {p}')
```

実行結果は次のようになります。なお、**第07行目**は、C言語の配列に対するアクセスのように `p = img[0][0]` と書くこともできますが、Python では `p = img[0,0]` と書いたほうが**高速にアクセスが可能**です。

```
type => <class 'numpy.ndarray'>
p    => [ 44 136  77]
```

既に述べたように、OpenCVでは<span class="masked"> BGR </span> という順番に色情報が格納されるので、画像左上の X=0, Y=0 のピクセルは「**青44**」「**緑136**」「**赤77**」という色成分を持っていることがわかります。このことは、画像の左上が「草むら」であり、緑成分が大きいであろうという視覚的な情報からも確認できます。

---

- **演習1**: **第07行目** を `p = img[0][0]` に書き換えても、問題なく実行できることを確認せよ。

- **演習2**: 画像の**右端の中央**、つまり、X=639, Y=240 の色成分を確認せよ。また、この位置は「濃い茶色の毛の部分」であり、赤の成分が最も大きくなることを確認せよ。
  - ヒント:<span class="masked">配列に対しては数学と同じく、まずは「行」、次に「列」を指定することに注意してください。つまり、X=639, Y=240 の位置には `img[639, 240]` ではなく `img[240,639]` でアクセスします。</span>

### 画像 (ピクセルの色情報) の直接編集

次に、指定範囲のピクセルの色情報を上書きし、次の画像のように「目隠し」を加えてみたいと思います。具体的には、X軸範囲を 130～219、Y軸範囲を 210～229 として、これらの範囲 (長方形) を **黒色** に塗りつぶしていきます。

![img](figs/21/img-01-mask.jpg)

これは、次のプログラムによって実行することができます。**第14行目**には、実行環境にあわせて `img` を表示する処理を追加してください (必要に応じて `import` や 関数の定義が必要になります)。

```python{.numberLines caption="画像の直接編集 (非推奨)"}
import cv2

fn = 'img-01.jpg'
img = cv2.imread(fn)
if img is None:
  raise ValueError(f'Failed to load image: {fn}')

for x in range(130, 220):
  for y in range(210, 230):
    img[y, x, 0] = 0  # B
    img[y, x, 1] = 0  # G
    img[y, x, 2] = 0  # R

# ■■ img を表示する処理を追加 ■■
```

上記のプログラムは、二重ループによって指定範囲のピクセルを黒色に書き換えています。しかし、このようなループを使って多数のデータを書き換えるような処理は、Pythonの特性上、<span class="masked">非常に時間がかかることが知られています</span>。

そこで、次のように NumPy の「**スライス**」と「**ブロードキャスト機能**」を組み合わせる方法が推奨されています。スライスについては[第12回講義](lecture12.html#リストの扱いに関する補足③-スライス)を参照、ブロードキャスト機能については[第20回講義](lecture20.html#移動)を参照してください。

```python{.numberLines caption="画像の直接編集 (推奨)"}
import cv2
import numpy as np

fn = 'img-01.jpg'
img = cv2.imread(fn)
if img is None:
  raise ValueError(f'Failed to load image: {fn}')

img[210:230,130:220] = np.array([0,0,0],dtype=np.uint8)
      
# ■■ img を表示する処理を追加 ■■
```

2つの方法の処理時間について `timeit` を使って比較した結果を示します。方法の違いで、処理時間に <span class="masked">約60倍</span> の差がでることが確認できます。

- 2重ループを使用した方法
  - **456 µs** ± 2.83 µs per loop (mean ± std. dev. of 7 runs, 1,000 loops each)
- スライスとブロードキャストを使用した方法
  - **7.42 µs** ± 115 ns per loop (mean ± std. dev. of 7 runs, 100,000 loops each)

---

**演習**: 「紫色」の目隠しになるようにプログラムを修正せよ。

<div class="note type-senior">
**処理時間の計測**

Jupyter環境 もしくは GoogleColab環境 では、マジックコマンド `%timeit` を使用することで比較的簡単に**平均処理時間**の計測ができます。`%timeit` は、特定の1行のプログラムの平均処理時間を計測する機能を持っています。複数行のコードから成る処理を測定したい場合は、それらの処理を関数にまとめて `%timeit` を使用します。

例えば、今回のケースでは次のようにして処理時間の計測をしました。

```python{.numberLines caption="処理時間の計測-1"}
%reset -f
import cv2

def func(img):
  for x in range(130,220):
    for y in range(210,230):
      img[y,x,0] = 0
      img[y,x,1] = 0
      img[y,x,2] = 0

fn = 'img-01.jpg'
img = cv2.imread(fn)

%timeit func(img) # ここに注目
```

```python{.numberLines caption="処理時間の計測-2"}
%reset -f
import cv2
import numpy as np

def func(img):
  img[210:230,130:220] = np.array([0,0,0],dtype=np.uint8)

fn = 'img-01.jpg'
img = cv2.imread(fn)

%timeit func(img) # ここに注目
```

</div>

### 画像の直接編集 (グレースケール画像の生成)

「カラー画像」から「グレースケール画像」を生成するためには `cv2.cvtColor` 関数を利用することができます。具体的には、次のようにして カラー画像 `img` から、グレースケール画像 `img2` を生成することができます。

```python{.numberLines caption="to_gray_lib.py グレースケール変換"}
import cv2

fn = 'img-01.jpg'
img = cv2.imread(fn)
if img is None:
  raise ValueError(f'Failed to load image: {fn}')

assert img.shape == (480, 640, 3)

img2 = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)  # グレースケール変換
assert img2.shape == (480, 640)

# ■■ img2 を表示する処理を追加 ■■
```

カラー画像では `shape` が `(480,640,3)` であり、グレースケール画像では `shape` が `(480,640)` となる点に注意してください。

ここでは、OpenCV の画像操作について理解を深めるために、`cv2.cvtColor`  関数を使わずに **多次元配列の直接編集によってグレースケール画像を生成すること**も行ないます。「情報2」の第05回講義の資料で学んだように、グレースケール画像は次のような計算で作成することができます。

$$ \mathrm{Gray} =\mathrm{Blue}\cdot0.11 + \mathrm{Green}\cdot0.59 + \mathrm{Red}\cdot 0.3 $$

ここで青・緑・赤によって<span class="masked">重み (係数)</span> が違っているのは **人間の視覚特性** を考慮しているためです。上記の係数は[標準テレビジョン放送等のうちデジタル放送に関する送信の標準方式（平成二十三年総務省令第八十七号）](https://elaws.e-gov.go.jp/document?lawid=423M60000008087)に基づいたものになります。

この計算処理について愚直にプログラムを書くとすれば、次のようになります。

```python{.numberLines caption="グレースケール変換 (非推奨)"}
import cv2
import numpy as np

fn = 'img-01.jpg'
img = cv2.imread(fn)
if img is None:
  raise ValueError(f'Failed to load image: {fn}')

assert img.shape == (480,640,3)

# すべての要素が 0 で大きさが (480,640) の配列 img2 を生成
img2 = np.zeros((480,640),dtype=np.uint8)
assert img2.shape == (480,640)

# グレースケール画像の手動生成
for x in range(img.shape[1]):
  for y in range(img.shape[0]):
    img2[y,x] = img[y,x,0]*0.11 + img[y,x,1]*0.59 + img[y,x,2]*0.3 

# ■■ img2 を表示する処理を追加 ■■
```

**第12行目** の `np.zeros` は、第1引数で**指定する大きさ (形状) の多次元配列 (=ndarrayオブジェクト) を生成する関数**です。配列の要素はすべて `0` で初期化されます。同様の関数に `np.ones` があり、こちらは要素がすべて `1` で初期化されます。なお、すべての要素を任意の値、例えば `255` で初期化したい場合は <span class="masked">`np.ones((480,640),dtype=np.uint8)*255`</span> のようにします。 

既に解説したように Python の特性上、**多重ループを構成して値を編集するような操作**は <span class="masked">パフォーマンスの重大な低下</span> を引き起こします。そのため、上記のプログラムは、スライスを利用して以下のように記述することが推奨されます。

```python{.numberLines caption="to_gray.py グレースケール変換 (推奨)"}
import cv2
import numpy as np

fn = 'img-01.jpg'
img = cv2.imread(fn)
if img is None:
  raise ValueError(f'Failed to load image: {fn}')

assert img.shape == (480, 640, 3)

# すべての要素が 0 で大きさが (480,640) の配列 img2 を生成
img2 = np.zeros((480, 640), dtype=np.uint8)
assert img2.shape == (480, 640)

# グレースケール画像の手動生成【修正】
img2 = img[:, :, 0] * 0.11 + img[:, :, 1] * 0.59 + img[:, :, 2] * 0.3
assert img2.dtype == np.float64
img2 = img2.astype(np.uint8)  # dtype を float64 から uint8 に変換
assert img2.dtype == np.uint8

# ■■ img2 を表示する処理を追加 ■■
```

変更されているのは **第16行目** となります。ここで `img[:,:,0]` は `img[0:480,0:640,0]` の省略表記になります。スライスについて、いまいち分からないという場合は「[numpy スライス 解説](https://www.google.com/search?q=numpy+スライス+解説)」などで検索して解説記事を読んでください。

なお、**第16行目** の計算には小数が含まれるため、計算結果の ndarrayオブジェクト の要素の型 (`dtype`) は `float64` になります。`dtype` が `float64` の ndarrayオブジェクト は `cv2.imshow` で画像として表示ができません。そのため **第18行目** で 要素の型 (`dtype`) を `uint8` に変換しています。

**演習1**: `img[:,:,0]` を `img[0:480,0:640,0]` のように書き換え、同様に `img[:,:,1]` と `img[:,:,2]` も書き換え、問題なく動作することを確認せよ。

**演習2**: BGRの係数 (重み) を、すべて `0.3` とした場合の結果と比較せよ。また、係数を適当に変えて、その結果について確認せよ。

**演習3**: 次のプログラムを実行して **オーバーフロー (桁あふれ)** が生じるかどうかを確認せよ。

```python{.numberLines caption="オーバーフローに関する確認"}
import numpy as np

arr1 = np.ones((3,3),dtype=np.uint8)*50
arr1[1,:] = 100
arr1[2,:] = 200
print(f'arr1 =\n{arr1}',end='\n\n')

arr2 = np.ones((3,3),dtype=np.uint8)*100
print(f'arr2 =\n{arr2}',end='\n\n')

arr3 = arr1 + arr2
assert arr3.dtype == np.uint8
print(f'arr1+ arr2 = arr3 =\n{arr3}')
```

**演習4**: 上記の **演習3** でオーバーフローが生じると仮定する。このとき、加算結果が 255 を超える場合は、その値を `uint8` の最大値である 255 に制限したい。どのようにすればよいかを考え、また、ウェブ検索やChatGPTなどを利用して解決せよ (**調べた方法や提案された方法は、実際に試して確認すること**)。

**解答例1**: <span class="masked">`arr3 = np.where(arr1.astype(int) + arr2.astype(int) > 255, 255, arr1 + arr2)`</span>

**解答例2**: <span class="masked">`arr3 = np.clip(arr1*1.0 + arr2*1.0,0,255).astype(np.uint8)`</span>

### 画像の直接編集 (セピアカラー画像の生成)

グレースケール画像の応用として、次のような「セピアカラーの画像」を生成していきます。

![img](figs/21/img-01-sepia.jpg)

この画像は、次のようなプログラムで生成することができます。

```python{.numberLines caption="セピアカラーの画像の生成"}
import cv2
import numpy as np

fn = 'img-01.jpg'
img = cv2.imread(fn)
if img is None:
  raise ValueError(f'Failed to load image: {fn}')

img2 = img[:, :, 0] * 0.33 + img[:, :, 1] * 0.33 + img[:, :, 2] * 0.33
assert img2.shape == (480, 640)

img3 = np.zeros_like(img)
assert img3.shape == (480, 640, 3)
img3[:, :, 0] = img2 * 0.55  # Blue
img3[:, :, 1] = img2 * 0.8   # Green
img3[:, :, 2] = img2 * 1.0   # Red

# ■■ img3 を表示する処理を追加 ■■
```

**第12行目** の `np.zeros_like` 関数は、引数に指定した多次元配列と**同じ大きさの多次元配列**を作成する関数です。要素はすべて`0` で初期化されます。

また、次のように **ノイズを発生させて加算する処理** を **第10行目** と **第12行目** の間に入れることで、より雰囲気のある画像を生成することもできます。`np.random.normal` の第2引数の値を変化させることで、ノイズの適用量を変えることができます。

```python{.numberLines}
tmp = img2 + np.random.normal(0,10,img2.shape)
assert tmp.dtype == np.float64
img2 = np.clip(tmp,0,255).astype(np.uint8)
```

上記の **第01行目** では **正規分布** (「情報1」の第12回講義を参照) に従うノイズを発生させて `img2` に加算しています。`np.random.normal` で生成される多次元配列は `dtype` が `np.float64` です。そのため、**第02行目** でアサート文で確認しているように `tmp` の `dtype` も `np.float64` になります。このままでは**画像として利用できない**ので、**第03行目**で、最小値を0、最大値を255 にクリップして、さらに `astype` メソッドで型を `np.uint8` に変換しています。

- ウェブ検索「[NumPy clip](https://www.google.com/search?q=numpy+clip)」
- ウェブ検索「[NumPy astype](https://www.google.com/search?q=numpy+astype)」

![img](figs/21/img-01-noise.jpg)

**演習1**: `np.random.normal` について調べよ。また、第2引数の値を変化させて、その結果を確認せよ。

**演習2**: `np.random.normal` の第2引数を `20` 程度に設定して、クリップ処理をしない場合、どのような結果になるか確認せよ。つまり、`img2 = np.clip(tmp,0,255).astype(np.uint8)` を `img2 = tmp.astype(np.uint8)` にすると、画像に対してどのような影響が生じるかを確認せよ。

## OpenCVを利用したカメラ操作

OpenCV では、**PCに内蔵もしくは外部接続したカメラに接続して、そこから画像を得ること**ができます。ここでは、カメラに接続して**静止画像を得る方法**、また、連続的に静止画像を取得することで**実質的に動画を得る方法** について紹介します。

なお、この処理には Pythonが実行されるコンピュータに「カメラ」が接続されている必要があるため、**GoogleColab環境** では実行できません (既に説明していますが、GoogleColab環境において Pythonプログラム が実行されているのは <span class="masked">Googleのデータセンタのなかに構築される仮想マシン</span> であり、皆さんの PC ではありません)。

### カメラから画像を取得

PCに接続されたカメラから撮影した画像を ndarrayオブジェクト として取得、表示、保存するサンプルプログラムは次のようになります。ファイルから読み込んだ画像も、カメラから読み込んだ画像も、同様に **ndarrayオブジェクト (NumPyの3次元配列) として操作や処理** をすることができます。

```python{.numberLines caption="camera_1.py カメラから画像を取得して表示・保存"}
import cv2
import numpy as np
import time
from datetime import datetime as dt

# 画像表示用関数
def my_imshow(img,wn='Image'):
  cv2.imshow(wn, img)
  while True:
    # ESCキーが押下されたら閉じる
    if cv2.waitKey(10) == 27:
      break
    # 閉じるボタンが押されたら閉じる
    if cv2.getWindowProperty(wn,cv2.WND_PROP_VISIBLE) < 1:
      break
  cv2.destroyAllWindows()

# PCに接続されているカメラと接続
cap = cv2.VideoCapture(0)

# カメラと接続できたかを確認
if not cap.isOpened():
  raise IOError('カメラと接続できませんでした。強制終了します。')

# カウントダウン
for i in range(3,0,-1):
  ret, img = cap.read() # 調整のための仮撮影。
  print(f'撮影{i}秒前...')
  time.sleep(1)

# カメラ映像を取得して img に格納。成否を ret に格納
ret, img = cap.read()
assert type(ret) == bool
assert type(img) == np.ndarray

# キャプチャした画像を表示・保存
if ret:
  print(f'撮影ッ!!')
  my_imshow(img)
  fn = dt.now().strftime('photo-%Y%m%d-%H%M%S.jpg')
  cv2.imwrite(fn,img)
  print(f'写真を {fn} に保存しました。')
else:
  print('カメラから画像を取得できませんでした。')

# カメラと接続を解除 (カメラリソースの解放)
cap.release()
```

**第19行目** の `cv2.VideoCapture(0)` の引数 (この例では `0`) では、接続するカメラを選択しています。例えば、PCにフロントカメラとリアカメラがあって `cv2.VideoCapture(0)` では使いたいほうのカメラが利用できない場合は、`cv2.VideoCapture(1)` を指定します。同様に、USBカメラなどを接続していて、そちらに切り替えたい場合は、引数の数値を変えることで切り替えが可能になります。存在しないカメラを指定した場合は、**第23行目** の例外処理により、プログラムが強制終了します。

**第27行目** では、カメラ側でのオートフォーカスや、自動明るさ調整をカメラにさせるために仮撮影をしています。カメラの種類によっては、**第27行目** を実行しなくても (コメントアウトしてしまっても) 問題ありません。

もし、撮影した画像に対して画像処理を行いたい場合は、**第38行目** 以降に `img` に対する処理を記述します。

**演習**: **第27行目** をコメントアウトした場合の結果について確認せよ。

<div class="note type-senior">
**ローカルPCのJupyter環境で実行**

先述のように、カメラ関連の処理を GoogleColab環境 で実行することはできませんが、ローカルPCに構築した Jupyter環境であれば実行可能です。開発段階では Jupyter環境 のほうが便利なことが多いです。

```python{.numberLines caption="camera_1.ipynb カメラから画像を取得して表示・保存 (Jupyter版)"}
%reset -f
import cv2
import numpy as np
import time
from datetime import datetime as dt
from IPython.display import Image   # 要import

# PCに接続されているカメラと接続
cap = cv2.VideoCapture(0)

# カメラと接続できたかを確認
if not cap.isOpened():
  raise IOError('カメラと接続できませんでした。強制終了します。')

# カウントダウン
for i in range(3,0,-1):
  ret, img = cap.read() # 調整のための仮撮影。
  print(f'撮影{i}秒前...')
  time.sleep(1)

# カメラ映像を取得して img に格納。成否を ret に格納
ret, img = cap.read()
assert type(ret) == bool
assert type(img) == np.ndarray

# キャプチャした画像を表示・保存
fn = 'dummy.jpg'
if ret:
  print(f'撮影ッ!!')
  fn = dt.now().strftime('photo-%Y%m%d-%H%M%S.jpg')
  cv2.imwrite(fn,img)
  print(f'写真を {fn} に保存しました。')
else:
  print('カメラから画像を取得できませんでした。')

# カメラと接続を解除 (カメラリソースの解放)
cap.release()

Image(open(fn,'rb').read()) # 出力セルに表示
```

</div>

### カメラから連続的に画像を取得して処理

カメラから連続的に画像を取得して処理したい場合は、次のようにプログラムを構成します (このプログラムは Jupyter環境では動作しません)。

```python{.numberLines caption="camera_2.py カメラから連続的に画像を取得して処理"}
import numpy as np
import cv2

# PCに接続されているカメラと接続
cap = cv2.VideoCapture(0)

# カメラと接続できたかを確認
if not cap.isOpened():
  raise IOError('カメラと接続できませんでした。強制終了します。')

wn = 'Capture'  # ウィンドウの識別名の設定

# 無限ループ
while True:

  # カメラ映像を取得して img に格納。成否を ret に格納
  ret, img = cap.read()

  if not ret:
    print('カメラから画像を取得できませんでした。')
    break

  # 画像処理


  # 表示 (ウィンドウの表示内容の更新)
  cv2.imshow(wn,img)

  # ESCキーが押下されたらループから離脱
  if cv2.waitKey(1) == 27:
    print('[ESC]が押下されました')
    break
  
  # ウィンドウが閉じられたらループから離脱
  if cv2.getWindowProperty(wn,cv2.WND_PROP_VISIBLE) < 1:
    print('ウィンドウが閉じられました')
    break

# カメラと接続を解除 (カメラリソースの解放)
cap.release()
cv2.destroyAllWindows()
print('プログラムを正常終了')
```

例えば、リアルタイムに画像処理をして、それを反映させたい場合は **第24行目** 以降に `img` に対する操作を組み込みます。

**演習**: 上記のプログラムに「セピアカラー処理」と「ノイズ追加処理」を追加せよ。
