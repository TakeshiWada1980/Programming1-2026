---
var:
  header-title: "2026-2I プログラミング1 第09回 講義資料"
  header-date: "2026年06月26日（金）1・2時限"
---

# 第09回 2I-プログラミング1


## 前期中間の成績評価について

シラバス記載 (下記参照) に基づいて前期中間成績をつけています。

> 各達成目標に対する到達度を、課題70%、小テスト30%の割合で総合して評価する。　

- [課題01](lecture03.html#課題01)の評価 (10点満点) を**1倍**、[課題02](lecture04.html#課題02)の評価 (10点満点) を**2倍**、[課題03](lecture06.html#課題03)の評価 (10点満点) を**2倍**した合計50点を、**70点換算** (小数点第3位を四捨五入)。
  - 課題03は 6月18日(木) 10:00 の提出状況をもとに評価しています。
- 小テスト1 (10点満点) と小テスト2 (10点満点) を合計した20点を、**30点換算** (小数点第3位を四捨五入)。
  - 各小テストは採点して返却済み。解答例はTeamsに掲載済み。

- 上記2項目を合算して小数点第1位を四捨五入した100点満点を、前期中間の評価としています。

::: {.balloon .char-01 .face-01 .tone-pink}
学校における「**課題の未提出** (＝<span class="masked">できない状態のまま連絡や相談をせずに期限を過ぎること</span>)」は、就職後で言えば「**上司から指示された業務や、顧客から依頼された仕事を放棄すること、着手せずに放置する**」に等しいです。

学校としては「<u>**任された仕事を自己判断で放棄するような人材を社会に送り出すわけにはいかない**</u>」ので、不合格となるような成績評価となります。
:::

ここまでの範囲で未提出課題がある学生は、**今後の課題提出で挽回してください**。特に <span class="masked">「できない状態のまま、連絡や相談をせずに提出期限を過ぎる」</span> ということが無いように努めてください。

## 準備

- **_小テスト3_** を実施します。
- 次のファイルを予めダウンロードして「デスクトップ」に移動しておいてください。以降、それを前提とした解説となります。
    1. Python 3.13.14 Windows installer (64-bit) `python-3.13.14-amd64.exe` [入手先](https://www.python.org/downloads/release/python-31314/)
        - 既に、実験実習などで Python 3.13.14 をインストール済みの場合は不要です。
    2. Visual Studio Code Installer (System Installer x64) `VSCodeSetup-x64-1.125.1.exe` [入手先](https://code.visualstudio.com/download)
    3. Source Han Code JP | 源ノ角ゴシック Code `SourceHanCodeJP.ttc` [入手先](https://github.com/adobe-fonts/source-han-code-jp/releases)

<div class="note type-caution">
**注意**

以降の講義資料 (次回以降を含む) は `C:\Users\<ユーザ名>\Documents` 配下に各種プロジェクトフォルダ作成することを想定ています（パスのなかの `<ユーザ名>` は各自の環境に読み替えてください）。

もし、このフォルダが **OneDrive で同期されていたり**、`<ユーザ名>` に**日本語や記号が含まれる場合**は、講義資料の手順どおりに作業しても、期待どおりの結果が得られない可能性があります。これらに該当する場合は、

```
C:\Users\xxxx\Documents
```

を

```
C:\Projects
```

のように読み替えて作業してください。

- `C:\Projects` が存在しない場合は、各自で手動で作成してください。
- **OneDrive 同期フォルダ** や **日本語・記号を含むパスで発生したトラブル**については、本授業のサポート外なので、あらかじめご了承ください。

個人もしくは学校のマイクロソフトアカウントの OneDrive の設定で、以下の箇所 (赤枠の部分) が「**オン**」になっている場合、`C:\Users\<ユーザ名>\Documents` が OneDrive 同期の対象となっています。

![img](figs/09/onedrive-01.png)


</div>

## Pythonの実行・開発環境の構築 (ローカル環境)

今回の講義では、各自のノートPC (ローカル環境) に **Python** の <span class="masked">「実行環境」ならびに「開発環境」</span> を構築していきます。ここまでの授業では、実行開発環境として [Google Colab](https://colab.research.google.com/?hl=ja) (クラウド環境・リモート環境) を利用してきましたが、今後は**必要に応じて**ローカル環境に構築した実行開発環境も利用していきます。

ここで構築する環境は、**公式配付版 Pythonインストーラ版 の Python 3.13** と **Visual Studio Code (VSCode)** を組み合わせたものになります。

なお、「**Anaconda**」というプラットフォームを使って Python 開発環境を整備する方法もありますが、この授業では採用しません (推奨もしません)。Anaconda のほうがインストールは簡単ですが、本格的な学習や開発を考えた場合、ここで紹介する環境のほうが**情報量が豊富**で適しています。

### 事前確認

以降の作業を行なう前に、必ず以下の項目について確認してください。問題がある場合は、それを解決してから作業を進めてください。

- エクスプローラにおいて、**「拡張子」が表示される設定** になっていること。
- エクスプローラにおいて、**「隠しファイル (フォルダ)」が表示される設定** になっていること。
- ユーザーフォルダの名前に **日本語や特殊文字が含まれていない** こと。

Windowsのスタートボタンを右クリックして「**ターミナル**」を起動し、**ユーザーフォルダ (ホームディレクトリ) の名前を確認**してください。

```
C:\Users\wada>
```

上記の `wada` の部分が **ユーザーフォルダ** (ホームディレクトリ) の名前になります。


ここに <span class="masked">日本語や特殊文字</span> を含んでいる場合は、Python 開発用に、別途、Windows のアカウントを新規作成し、それを使用することを **強く推奨** します。アカウントの追加方法は [windows 11 アカウント 追加](https://www.google.com/search?q=windows+11+アカウント+追加) などで検索してください。

## コーディングに適したフォントのインストール

プログラム開発環境においては、以下のような文字について**判別しやすい「等幅フォント」**が望まれます。「等幅フォント」の概要は情報1の「第03回講義ノート」を参照してください。

- 「ゼロ：`0`」と「オー：`O`」
- 「イチ:`1`」と「エル：`l`」
- 「シングルクォーテーション:`'`」と「バッククォーテーション：`` ` ``」

これらの条件を満たしたフォント (**コーディング用フォント**、**プログラミング用フォント**) としては、次のようなものがあります。

- **Source Han Code JP** (源ノ角ゴシック Code JP)
  - [https://github.com/adobe-fonts/source-han-code-jp](https://github.com/adobe-fonts/source-han-code-jp)
  - [https://github.com/adobe-fonts/source-han-code-jp/releases](https://github.com/adobe-fonts/source-han-code-jp/releases)
- **JetBrains Mono**
  - [https://www.jetbrains.com/ja-jp/lp/mono/](https://www.jetbrains.com/ja-jp/lp/mono/)
- **白源** HackGen
  - [https://github.com/yuru7/HackGen](https://github.com/yuru7/HackGen)
  - [https://github.com/yuru7/HackGen/releases](https://github.com/yuru7/HackGen/releases)
- **Cica**
  - [https://github.com/miiton/Cica](https://github.com/miiton/Cica)
  - [https://github.com/miiton/Cica/releases](https://github.com/miiton/Cica/releases)
- **Myrica**
  - [https://github.com/tomokuni/Myrica](https://github.com/tomokuni/Myrica)
  - [https://github.com/tomokuni/Myrica/releases](https://github.com/tomokuni/Myrica/releases)

ここでは「**Source Han Code JP (日本語メニューネーム：源ノ角ゴシック Code JP) **」をインストールします (お好みで別のフォントを使っても問題ありませんが、開発効率とモチベーションに関わるので適切なフォントを使用してください)。なお「源ノ角」は <span class="masked">げんのかく</span> とよみます。

既に `SourceHanCodeJP.ttc`、ファイルアイコンを右クリックしてコンテキストメニューから「**インストール**」を選択してください。拡張子が `.ttc` のフォントファイルは、複数のバージョンを収録しているフォントファイル (True Type Font Pack) になります。`SourceHanCodeJP.ttc` をインストールすると次のようなフォントが追加されます。

- 源ノ角ゴシック Code JP EL
- 源ノ角ゴシック Code JP L
- 源ノ角ゴシック Code JP N
- 源ノ角ゴシック Code JP R
- 源ノ角ゴシック Code JP M
- 源ノ角ゴシック Code JP H	

`EL` や `L`、`N` は「**文字の太さの違い**」になります。

Wordなどを起動して、フォントとして「**源ノ角ゴシック Code JP**」が正常にインストールされたことを確認してください。

![img](figs/09/font1.png)

## Python のインストール

Python本体をインストールしていきます。

### リリース情報の確認とインストーラの入手

[Python公式ページ](https://www.python.org/) にアクセスしてリリース情報を確認します。

Pythonは頻繁にアップデートが行なわれており、基本的には ***安定版***  (**Stable Releases**) の**最新バージョンを使用すること**が望ましいです。

公式ページにアクセスして、メニューの「**Downloads**」から「**Windows**」を選択して [Windows向けのPythonのリリース状況](https://www.python.org/downloads/windows/) を確認します。

<div class="note type-tips">
**「リリース」とは**

リリース (Releases) とは <span class="masked">ソフトウェアやその新バージョンを一般公開すること、ユーザーが入手可能・利用可能な状態にすること</span> を意味します。
</div>


2026年6月21日時点では、Python全体の最新の**安定版** (Stable Release) は「Python 3.**14**.6」です。また、ひとつ前の系列である Python 3.13 の最新メンテナンスリリースとして「Python 3.**13**.14」が公開されています。

今回は、授業で使用するPythonのバージョンを統一するため、`Python 3.13.14` の `Windows installer (64-bit)` 版をダウンロードします (Windows installer (64-bit) のリンクをクリックします)。

![img](figs/09/python-02.png)

既にダウンロードしていると思うので、手元には「`python-3.13.14-amd64.exe`」があるはずです。なお、32bit版のWindowsや、ARM版のWindowsを使用している場合は「Download Windows installer (**32-bit**)」や「Download Windows installer (**ARM64**)」などを選択します。これらアーキテクチャの違いについては、情報2の「第02回講義ノート」の <span class="masked">CPUアーキテクチャ</span> の項目を参照してください。

なお「**Windows embeddable package**」とは、主に <span class="masked">Python実行環境が構築されていないPCを使用している人</span> に対して、自分が作成したPythonプログラムを配布して利用してもらうときに同梱するための「軽量のPython環境」です。

<div class="note type-tips">
**Stable Releases について** 

Stable Releases とは「**安定版**」という意味です。ソフトウェアのインストールにおいては、特段の理由がなければ、この Stable Releases (安定版) や LTS (長期サポート版) を選択するようにしてください。その他、次のようなバージョンがあります。

- **Long-Term Support Release (LTS) **: 特定のバージョンについて、長期間にわたりセキュリティ更新やバグ修正を提供するバージョンです。
- **Stable Releases**: 全ての機能が実装され、テストが完了し、広範囲の使用に耐えうると判断された最終的な製品です。
- **Maintenance Release（メンテナンスリリース）**：安定版リリース後に発見されたバグの修正や、小規模な改善を施したバージョンです。
- **Beta Release（ベータ版）**：開発が進んだ段階で、全ての機能が実装されているが、まだバグが存在する可能性があるものです。一般のユーザーに公開され、広範なテストとフィードバックが求められます。
- **Alpha Release（アルファ版）**：開発の初期段階で、全ての機能が完全には実装されていないものです。一部のテスターや開発者だけが使用し、バグの検出や新機能のフィードバックを提供します。

**Pre-release** は、上記の **Beta Release** や **Alpha Release** などを含んだ呼称です。

</div>

### SHA-256 チェックサムの確認 (オプション)

ダウンロードしたファイルが破損していないか、または公式ページで案内されているファイルと同一であるかを、**SHA-256** ハッシュ値によって確認する方法を紹介します。

ここでは、`python-3.13.14-amd64.exe` がデスクトップに置かれているものとします。

まず、ターミナルを起動し、モードを「**コマンドプロンプト**」に切り替えてください。

![img](figs/09/terminal-1.png)

次に、`cd` コマンドでデスクトップに移動します。その後、`certutil -hashfile python-3.13.14-amd64.exe SHA256` と打ち込んで **SHA-256によるハッシュ値**を計算します。ハッシュ値については、情報2の第09回講義ノートを参照してください。

```
C:\Users\xxxx> cd Desktop

PS C:\Users\xxxx\Desktop> certutil -hashfile python-3.13.14-amd64.exe SHA256
SHA256 ハッシュ (対象 python-3.13.14-amd64.exe):
c54d9b9bbb8a36e6489363ddd01139707fd781d72f1f9e90c7ec65d0061368e0
CertUtil: -hashfile コマンドは正常に完了しました。
```

このときのハッシュ値、具体的には `c54d9b9bbb8a36e6489363ddd01139707fd781d72f1f9e90c7ec65d0061368e0` と、ダウンロードページに掲載されている **SHA-256 checksum** の値を比較します。

**両者が一致**していれば、<span class="masked">公式に掲載されたファイルと同一であること</span> が確認できます。ハッシュ値が違っている場合は、ファイルが破損している可能性があるため、公式ページから再度ダウンロードしてください。

### インストール

`python-3.13.14-amd64.exe` をダブルクリックして実行します。

インストーラが立ち上がるので <span class="masked">Use admin privileges when installing py.exe</span> と <span class="masked">Add python.exe to PATH</span> の**両方にチェックを入れて**「Install Now」を選択します。

既にPythonがインストールされている環境では「Use admin privileges when installing py.exe」のチェックボックスがグレーアウトしていることもあります (その場合は、チェック不要です)。また、Python 3.13.x がインストールされている環境ではアップグレードを促す画面になるので、Python 3.13.14 にアップグレードしてください。

![img](figs/09/py_inst_01.png)

チェックボックスの意味は次の通りです。

- **Use admin privileges when installing py.exe**： 管理者権限を使用して Python Launcher (py.exe) をインストールする場合にはチェックを入れます。管理者権限でインストールしたほうが制限なくPython Launcher が利用できるのでチェックを入れておいてください。
- **Add python.exe to PATH**: インストールされた `python.exe` に対してパスを通します。詳細は後述します。チェックを入れておいてください。

### 正常にインストールされたことの確認 1

ターミナルを「**<u>再起動</u>**」して、モードを「コマンドプロンプト」に切り替えてください。

![img](figs/09/terminal-1.png)


Pythonのバージョン確認コマンドを打ち込み、問題なくインストールされたかを確認します。以下のように `python -V` (小文字の `-v` では適切な応答が返ってきません) または `python --version` によってバージョン確認ができます。

```
C:\Users\wada>python -V
Python 3.13.14
```

ハイフンに続けて入力するものを**コマンドオプション**といいます。オプションは、<span class="masked">大文字と小文字を区別する</span> ので注意してください。

なお、次のように誤ってPythonを **対話モード** (インタラクティブシェル) で起動してしまった場合は、`>>>` に続けて <span class="masked">`quit()`</span> を入力してください。対話モードの Python が終了してターミナルに戻ります。

```
C:\Users\wada>python
Python 3.13.14 (...) [MSC v.1943 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>> 
```

また、正常にインストールできていない場合、または、インストールはできたものの <span class="masked">Pythonに対するパスが通っていない場合</span> は以下のようになります。

```
C:\Users\wada>python -V
'python' は、内部コマンドまたは外部コマンド、
操作可能なプログラムまたはバッチ ファイルとして認識されていません。
```

- 上記にようになる場合は、正しくインストールできていないので教員もしくはクラスメイトにヘルプをだしてください。


:::{.note .type-tips}

**パスの確認**

ターミナルで `where.exe python` を実行すると、環境変数 `PATH` を使って検索される `python.exe` の場所を確認できます。コマンドプロンプトと PowerShell のどちらからでも実行できます。

```
PS C:\Users\xxxx> where.exe python
C:\Users\xxxx\AppData\Local\Programs\Python\Python313\python.exe
C:\Users\xxxx\AppData\Local\Microsoft\WindowsApps\python.exe
```

複数のパスが表示された場合は、基本的に**上に表示されたものが優先**されます。上の例では、1行目の `Python313\python.exe` が、インストールした Python 3.13 の実行ファイルです。

2行目の `WindowsApps\python.exe` は、Microsoft Store 版 Python を起動するための「アプリ実行エイリアス」です。1行目に `Python313\python.exe` が表示され、`python -V` で `Python 3.13.14` と表示されていれば問題ありません。

現在、`python` コマンドによって実際に起動される実行ファイルは、次のコマンドでも確認できます。

```
PS C:\Users\xxxx> python -c "import sys; print(sys.executable)"
C:\Users\xxxx\AppData\Local\Programs\Python\Python313\python.exe
```

`Python313\python.exe` が表示されない場合は、ターミナルを一度終了して起動し直してください。それでも表示されない場合は、Python の再インストールを行い、インストーラの「**Add python.exe to PATH**」にチェックが入っていることを確認してください。

:::



### 正常にインストールされたことの確認 2

通常は利用することはありませんが、最も基本的 (原始的) な **Pythonプログラムの実行方法** を確認しておきます。

Windows標準の「メモ帳」で次のようなプログラムを記述し `test.py` という名前でデスクトップに保存してください (時間短縮のため打ち込まずコピペしてください)。Colab環境 (Jupyter環境) ではないので <span class="masked">`%reset -f` などのマジックコマンド</span> は使用することはできません (記述すると **SyntaxError** になります)。

```python{.numberLines caption="test.py"}
print('A*Bの計算をします。')
a = float(input('Aの値を入力してください: '))
b = float(input('Bの値を入力してください: '))
print(f'{a}+{b}={a+b} です。')
```

ファイル保存の際は、文字コード (エンコード) は `utf-8` にしてください。また、ファイルの種類も「**すべてのファイル**」にしてください。

![img](figs/09/notepad-save.png)

ターミナル (コマンドプロンプト) を起動して、`cd` コマンドでデスクトップに移動し、`python test.py` でプログラムが実行できます。

```
C:\Users\wada>cd Desktop

C:\Users\wada\Desktop>python test.py
A*Bの計算をします。
Aの値を入力してください: 10
Bの値を入力してください: 20
10.0+20.0=30.0 です。
```

- `test.py` の第01行目に `%reset -f` を記述して、`python test.py` を実行するとどのようになるか確認せよ。

### Path設定

Pythonをデフォルト設定でインストールすると `C:\Users\wada\AppData\Local\Programs\Python\Python313` にインストールされます。実際にエクスプローラで、そのフォルダにアクセスしてみてください (`wada`の部分は各自のユーザーフォルダの名前に書き換えてください) 。

このフォルダのなかにある `python.exe` が Python の本体・実行ファイルになります。

![img](figs/09/python-01.png)


この実行ファイル (`python.exe`) をコマンドラインから起動するためには、本来であれば、次のようにその「**絶対パス**」あるいは「**相対パス**」を指定する必要があります。

```
C:\Users\wada>C:\Users\wada\AppData\Local\Programs\Python\Python313\python.exe -V
Python 3.13.14
```

もしくは

```
C:\Users\wada>.\AppData\Local\Programs\Python\Python313\python.exe -V
Python 3.13.14
```

しかし、このようにパスをつけて `python.exe` を実行することは非常に煩雑です。そこで、`C:\Users\wada\AppData\Local\Programs\Python\Python313\` の部分を <span class="masked">省略できるようにする仕組みが「パスを通す」という操作</span> になります。

「パスを通す」とは、環境変数 `PATH` に `C:\Users\wada\AppData\Local\Programs\Python\Python313\` を記載しておくことを指します。この設定をすることで `python.exe` または `python` と打ち込むだけで、実行することができるようになります。

具体的には、`sysdm.cpl` でシステムのプロパティのダイアログを起動し、**詳細設定** のタブから「環境変数」のボタンを押下し「Path」の項目を編集します (Pythonのインストールパスを追加します)。

```
C:\Users\wada>sysdm.cpl
```


この操作はPythonのインストール時に「**Add python.exe to PATH**」のオプションを選択すれば自動的に行われます。

なお、設定されたパスは次のように確認できます。

```
C:\Users\wada>set path
```

### pipの基本

詳しくは以降の授業で解説しますが、pip は <span class="masked">Python ライブラリ (モジュールやパッケージとも表現します)</span> を**管理するツール**です。`pip` コマンドを使用すると、インターネットから各種ライブラリをローカル環境にダウンロードおよびインストールし、その後、プログラムのなかで使用することができるようになります。

pip を使用する場合、まずは、次のコマンドで <span class="masked">`pip` そのものを最新版にアップグレード</span> します ( `pip` もPythonプログラムのひとつです)。このコマンドは定期的に使用するので覚えておくようにしてください (すぐに探せる場所にメモしておいてください)。

```
C:\Users\wada>python -m pip install --upgrade pip
Successfully installed pip-26.1.2
```

表示内容は、アップグレード前のバージョンや実行時点の最新版によって異なります。

現在の環境にインストールされているPythonライブラリは `pip list` というコマンドで確認ができます。

```
C:\Users\wada\Desktop>pip list
Package Version
------- -------
pip     26.1.2
```

上記のように、初期状態では最低限のモジュールしかインストールされていません。以降、各種モジュールをインストールする方法を紹介しますが、それらは環境をクリーンに保ちトラブルを避けるために、<span class="masked">仮想環境</span> を作成したうえで、そこにインストールしていきます。

仮想環境ではない環境は「グローバル環境」とよばれますが、このグローバル環境には原則として <span class="masked">新たなライブラリをインストールしない</span> ようにしてください。

### PowerShellの設定変更 (重要)

コマンドプロンプトのようなシェルで「PowerShell」があります (現段階で役割や機能の違いを把握する必要ははありません)。この PowerShell でも、Pythonスクリプトが実行できるように設定を変更しておきます (このあとに実行する VSCode では、PowerShell から Pythonスクリプト を実行することもあるため)。

ターミナルを起動してモードを「**Windows PowerShell**」切り替えてください。

![img](figs/09/terminal-2.png)

続けて、次のようにコマンドを入力してください。

```
PS C:\Users\wada> Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
```

上記コマンドは、現在のユーザーに対してスクリプトの実行ポリシーを「リモート署名（RemoteSigned）」に設定します。これにより、<span class="masked">自身で作成したスクリプトや信頼された発行元からのスクリプトが実行可能</span> になります。設定していない場合でも通常のPythonプログラムは実行できますが、後述する仮想環境の有効化スクリプト `Activate.ps1` が実行できないことがあります。

設定が正しく適用されたかを確認するには、以下のコマンドを入力 (コピペ) します。

```
PS C:\Users\wada> Get-ExecutionPolicy
RemoteSigned
```

出力された結果が `RemoteSigned` であれば、設定の変更が正しく反映されています。これにより、VSCodeなどの統合開発環境を使用して、PowerShell から Pythonスクリプト を実行することが可能になります。

## VSCodeのセットアップ

Visual Studio Code (VS Code) は各種プログラミング言語に対応した統合開発環境 (IDE: Integrated Development Environment) です。

### インストーラの実行

Visual Studio Code installer `VSCodeSetup-x64-1.125.1.exe` を実行してください。インストール途中で尋ねられる<span class="masked">「追加タスクの選択」</span>では、少なくとも次の項目にはチェックをいれてください (それ以外は好みに合わせてチェックをいれてください)。これらの設定ができていることを前提に授業を進めます。

**必ず、以下のオプション設定を実行してください。インストール後に設定することは、非常に面倒です。**

![img](figs/09/vs-code-19.png)

- エクスプローラのファイルコンテキストメニューに **[Codeで開く]** アクションを追加する。
- エクスプローラのディレクトリコンテキストメニューに **[Codeで開く]** アクションを追加する。
- PATHへの追加 (再起動後に使用可能)

### PC再起動

インストール完了後に、一旦、**PCを再起動**してください。

### VSCodeに拡張機能を追加

VSCode は「**目的にあわせて様々な拡張機能 (プラグイン) をインストールして使用**」します。拡張機能をインストールしていない状態では、VS Codeを便利に使用することはできません。

VSCode を起動してください。画面左側にならぶ**拡張機能のアイコン**をクリックして、Python開発用に次の拡張機能をインストールしてください。

- ms-ceintl.vscode-language-pack-ja
- ms-python.python
- ms-python.vscode-pylance
- ms-toolsai.jupyter
- oderwat.indent-rainbow
- pkief.material-icon-theme
- ms-python.autopep8

![img](figs/09/vs-code-01.png)

その他、必要に応じて拡張機能をインストールしてください。

### フォントとテーマの設定

コーディング用フォント「**Source Han Code JP (日本語メニューネーム：源ノ角ゴシック Code JP) **」をVS Codeのデフォルトフォントに設定します。

VSCode画面左下の「**<i class="fa-solid fa-gear"></i>設定のアイコン**」をクリックして「**設定**」を呼び出して `editor.fontFamily` の項目を次のように書き換えて保存してください。

```
'Source Han Code JP',Consolas, 'Courier New', monospace
```

同様に、`workbench.colorTheme` の項目でカラーテーマの変更ができます。


![img](figs/09/vs-code-02.png)

### その他の設定

VSCodeのメニューから「ファイル」「ユーザー設定」「設定」と進み、右上のアイコンをクリックします。

![img](figs/09/vs-code-18.png)

VSCodeの設定が JSON形式で表示されるので、以下の設定を追加して保存します。内容はお好みで変更してください。

```js{.numberLines caption="settings.json"}
{

  // 既存の設定の下に追加する 設定を追加する既存項目の末尾にカンマをつける

  ////【Python】の設定 ////
  "[python]": {
    "editor.defaultFormatter": "ms-python.autopep8",
    "editor.tabSize": 2, // タブサイズ
    "editor.formatOnType": false, // タイピング後の自動整形
    "editor.formatOnPaste": true, // 貼付け時の自動整形
    "editor.formatOnSave": true, // 保存時の自動整形
    "editor.detectIndentation": false // タブ制御関連 false 設定
  },
  "python.analysis.typeCheckingMode": "basic",

  "autopep8.args": [
    "--indent-size=2", // タブサイズは2とする
    "--max-line-length=80", // 1行あたり80行までは自動改行しない
    "--ignore=E70,E302,E305"
    // E70_ セミコロンによる2文記述を許可
    // E302 クラス定義前の２行の空行強制を無視
    // E303 クラス定義後の２行の空行強制を無視
    // E501 自動改行防止
  ],
}
```


## VS Codeを使ったPythonプログラムの開発の流れ

VS Codeを使って、**Pythonの仮想環境 (Virtual Environment) を構築**、Pythonプログラムのコーディング、Pythonプログラムの実行をするまでの一連の流れについて学びます。

### プロジェクトフォルダの作成

エクスプローラを開き、ドキュメンフォルダのなかに `2026-Programming1` を作成し、そのなかに移動してください。

<div class="note type-tips">
**ドキュメントフォルダをOneDrive同期している場合は...**

[準備のセクション](lecture09.html#準備)で説明したように「**ドキュメントフォルダ をOneDrive同期している場合**」は、`C:\Projects` を作成して、そこに `2026-Programming1` フォルダを作成してください。

![img](figs/09/vs-code-26.png)

</div>

今後は、この `2026-Programming1` フォルダの内部に **各種プロジェクトフォルダ** を作成して管理していきます。

![img](figs/09/vs-code-07.png)

**第09回講義**ということで、`PG1-09` という名前のプロジェクトフォルダを作成してください。なお、上記スクリーンショットにおいて、エクスプローラのアドレスバーの表示が旧年度のフォルダ名になっている場合がありますが、実際に使用するパスは `C:\Users\<ユーザ名>\Documents\2026-Programming1\` です。



<div class="note type-caution">
**プロジェクトフォルダのパスに日本語や記号を含まないように注意**

プロジェクトフォルダを `C:\Users\wada\Documents\授業\2年\プログラミング1\PG1-09` のような**日本語を含むパスに作成すると、不具合の原因**になります。そのようなケースは、授業でのサポート範囲外となるので注意してください (すべて自己解決できるのであれば問題ありません)。
</div>


作成したフォルダを選択して **「Shift」を押下しながら右クリック** して「**Codeで開く**」を選択してください。これにより、VSCode で対象のプロジェクトをオープンすることができます。

![img](figs/09/vs-code-03.png)

このように VS Code では <span class="masked">フォルダ単位</span> で**プロジェクトを管理**していくことを覚えておいてください。

:::{.note .type-caution}

**右クリックメニューに [Codeで開く] が表示されない場合**

Windows 11 では、フォルダを右クリックした直後のメニューに **[Codeで開く]** が表示されず、**[その他のオプションを確認]** を選択した先のメニューに表示されることがあります。まずは、そちらを確認してください。

どちらのメニューにも表示されない場合は、VS Code のインストール時に、コンテキストメニューへ **[Codeで開く]** を追加する項目をチェックしていなかった可能性があります。

VS Code をアンインストールする必要はありません。VS Code を終了してから、同じインストーラ `VSCodeSetup-x64-1.125.1.exe` を再実行してください。「追加タスクの選択」画面で、次の2項目にチェックを入れて、そのまま上書きインストールします。

- エクスプローラのファイルコンテキストメニューに **[Codeで開く]** アクションを追加する。
- エクスプローラのディレクトリコンテキストメニューに **[Codeで開く]** アクションを追加する。

上書きインストールをしても、既存のユーザー設定やインストール済みの拡張機能は通常そのまま維持されます。インストーラが手元にない場合は、[VS Code公式ダウンロードページ](https://code.visualstudio.com/download)から `System Installer x64` 版を再度ダウンロードしてください。

:::


<div class="note type-tips">
**このフォルダ内のファイルの作成者を信頼しますか?**

VSCode起動時に「**このフォルダ内のファイルの作成者を信頼しますか?**」を確認された場合は「**はい、作成者を信頼します**」を選択してください。

なお、ここでは フォルダ `PG1-09` を作成したのが自分なので「信頼します」を選択しましたが、自分以外が作成した場合は慎重に判断してください。フォルダ内に、PCを破壊するようなプログラムコードが配置されている可能性もあります。

</div>

### 仮想環境の作成と有効化

VSCodeが起動したら `Ctrl`+`j` を押下して「**ターミナル**」を表示します。ターミナルがデフォルトで PowerShell (**PS**) に設定されていることを確認してください。


![img](figs/09/vs-code-08.png)

次の `venv` コマンドを使って <span class="masked">Pythonの仮想環境 (Virtual Envronment)</span> を作成します。仮想環境内であれば、後先を考えずにPythonライブラリをインストールしても、あとで後悔するような事態は発生しません。

```
PS C:\Users\wada\Documents\2026-Programming1\PG1-09> python -m venv .venv
```

上記を実行すると `.venv` という仮想環境に関するものが格納される「隠しフォルダ」が作成されます (ドットからはじまる「ファイルは隠しファイル」、ドットからはじまるフォルダは「隠しフォルダ」という扱いになります)。

![img](figs/09/vs-code-17.png)


次のコマンドで仮想環境を ***有効化*** します。

```
PS C:\Users\wada\Documents\2026-Programming1\PG1-09> .\.venv\Scripts\Activate.ps1
```

ターミナルのプロンプトの先頭表示が `(.venv)` に変わっていることを確認します。仮想環境が有効化されているときは、このような表示になるので覚えておいてください。

```
(.venv) PS C:\Users\wada\Documents\2026-Programming1\PG1-09>
```


![img](figs/09/vs-code-20.png)

<div class="note type-senior">

**.venvフォルダの内容**

`python -m venv .venv` コマンドで仮想環境を構築すると `.venv` フォルダに仮想環境のための各種ファイルがインストールされます。また、後述する `pip` コマンドでライブラリをインストールすると、そのライブラリ本体も `.venv` のなかにインストールされます。

基本的には、`.venv` フォルダの内容をユーザが直接編集することはありません。下手に編集すると仮想環境が破壊される可能性があるため注意してください。

</div>


### Pythonファイルの新規作成とコードの記述

Pythonファイルを作成します。`test-01.py` というファイルを新規作成して・・・

![img](figs/09/vs-code-04.png)

次のプログラムを記述して「**保存**」してください。<span class="masked">保存操作を忘れないこと！</span>

```python{.numberLines caption="test-01.py"}
print('A*Bの計算をします。')
a = float(input('Aの値を入力してください: '))
b = float(input('Bの値を入力してください: '))
print(f'{a}+{b}={a+b} です。')
```

### Pythonファイルの実行

Pythonの「実行方法」について説明します。

まず、ファイル `test-01.py` を選択してアクティブな状態にしてください。

VSCodeの画面左側から「**実行とデバッグ**」のアイコンをクリックしてください。さらに、左パネルのなかの「**launch.jsonファイルを作成します**」というリンクをクリックしてください。

![img](figs/09/vs-code-09.png)

画面上部に表示される「**デバッガーの選択**」から「**Python Debugger**」を選択して・・・

![img](figs/09/vs-code-05.png)

さらに「**Pythonファイル 現在のアクティブな Python ファイルをデバッグする**」を選択します。

![img](figs/09/vs-code-10.png)


これより、実行とデバッグに関する **設定ファイル** (`.vscode/launch.json`) が自動作成されます。特に編集することはないので、この `launch.json` のタブは閉じてしまって問題ありません。保存するか尋ねられたときは、保存してください。 

![img](figs/09/vs-code-11.png)

以上で準備が整ったので、プログラムを実行してきます。再び、ファイル `test-01.py` を選択してアクティブな状態にしてください。そして `F5` を押下すと、画面下部のターミナルでプログラムが実行されます (数値を入れて計算しましょう)。以降、基本的には `F5` の押下でプログラムが実行できます。

![img](figs/09/vs-code-06.png)

なお、`F5` で実行されるのは選択中のPythonファイル (アクティブなPythonファイル) になります。`launch.json` などを選択中は意図した動作をしません。

もし、`F5` で実行とデバッグが正常に機能しない場合は、`.vscode/launch.json` を削除して、再度、上記の操作を試してください。

![img](figs/09/vs-code-12.png)

## Jupyterの実行

ローカル環境に構築したPython環境でも、Jupyter (ジュピター) という GoogleColab と同様のノートブック開発が利用できます (もともと Jupyter が先にあって、それをクラウド化したものが Colab というサービスです)。

### ライブラリのインストール

Jupyterの実行に必要なライブラリを `pip` コマンドでインストールします。VSCodeのターミナル (`Ctrl+J`で起動) から次のコマンドを実行してください。

```
python -m pip install jupyter
```

これにより、Jupyter に関連するライブラリが仮想環境にインストールされます (多数のライブラリをインストールするので、そこそこの時間がかかります)。インストールされたライブラリは、次のように確認できます。

```
python -m pip list
```

Jupyter の実行に必要な様々なライブラリがインストールされたことが確認できます。

![img](figs/09/vs-code-21.png)


一方で、別途、**VSCode外でターミナルを開いて** `python -m pip list` を実行してみてください。仮想環境のなかでインストールしたライブラリの影響を受けていないことが確認できます (Pythonの「グローバル環境」は **クリーンな状態** であることが確認できます)。

![img](figs/09/vs-code-22.png)


<div class="note type-senior">

**.venvフォルダの内容 (その2)**

`python -m pip install jupyter` コマンドによって、多数のライブラリがインストールされますが、それらはすべて `.venv` フォルダのなかに保存されます。

プロジェクトフォルダのなかに Jupyter 環境を構築すると **約300MB** を消費するので、不要になったプロジェクトフォルダは、適宜「破棄」や「再利用」するようにしてください。

![img](figs/09/vs-code-27.png)

</div>


### ノートブックの新規作成と実行

Jupyter 用に `test-02.ipynb` というファイルを新規作成します。そして、「**コードセル**」を追加し[さきほどと同様のプログラム](lecture09.html#pythonファイルの新規作成とコードの記述) を記述します。ノートブック環境なので `%reset -f` も利用できます。

![img](figs/09/vs-code-13.png)

初回実行時には、上記の❸の「**カーネルの選択**」、❹の「**Python環境...**」の選択、以下の「**.venv**」の選択が必要です。

![img](figs/09/vs-code-14.png)

以降は、GoogleColab. と同じように、コードセルを選択して `Ctrl+Enter` でプログラムを実行することができます。

### 注意点

`input()` を使った「**文字列の入力**」は <span class="masked">VSCodeの画面上部</span> に表示されるので注意してください。

![img](figs/09/vs-code-15.png)

セルの上下移動は、**以下の部分をクリック**してから `Alt` + `↑`、`Alt` + `↓` で行ないます。マウスのドラッグでうまくいかない場合があります。

![img](figs/09/vs-code-16.png)


<!-- ### おまけ: Pygame

```
pip install pygame
```

```python{.numberLines}
import pygame.examples.aliens
pygame.examples.aliens.main()]
```

```python{.numberLines}
import pygame.examples.glcube
pygame.examples.glcube.main()
```

http://westplain.sakura.ne.jp/translate/pygame/Examples.cgi -->


### 作業の再開

VSCode を終了して、再度、作業を再開する際には次のことに注意してください。

(以下、普段から VSCode を使って Python 開発している人は無視してください)

VSCode で作業を再開するときは、以下のようにエクスプローラで「**PG1-09**」のフォルダを選択し、Shiftを押下しながら右クリックで「Codeで開く」を選択する手順を踏んでください。それ以外の方法で再開した場合、<span class="masked">仮想環境が有効にならないこと</span> があるので注意してください。

![img](figs/09/vs-code-23.png)

VSCode で「**Python の仮想環境が適切に有効化されているか**」は以下の手順で確認できます。

![img](figs/09/vs-code-24.png)


<div class="note type-caution">
**プロジェクトフォルダを適切にオープンしていない例**

以下の図のように、`.venv` を直下に持っていないフォルダをオープンすると、**仮想環境が有効化されません** (仮想環境の自動検出と自動有効化がされません)。

![img](figs/09/vs-code-25.png)

</div>

## 演習

ここまでに作成した **PG1-09** を削除して、再度、環境を構築してください。また、以下についても復習しておいてください。

- VS Code を使ったプロジェクトの新規作成と破棄の練習
- VS Code の拡張機能
- VS Code の設定
