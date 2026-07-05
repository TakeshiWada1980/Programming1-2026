---
var:
  header-title: "2026-2I プログラミング1 第11回 講義資料"
  header-date: "2026年07月06日（月）3時限"
---

# 第11回 2I-プログラミング1

## 準備・案内

- **_小テスト3 (再)_** を実施します。
- 今回の演習の実装例（解答例）は [こちら](https://colab.research.google.com/drive/1avzHQaschVAhV1JFb0xc_r3eW53_4JdX?usp=sharing) を参照してください。
- 卒業研究に関するアンケートにご協力ください。

### 次回も小テストを実施します。

- 今回の講義資料の範囲を中心とした出題です。特に「**関数**を用いた基本的な Pythonプログラム を正しく記述できる」ようになっておいてください。
  - 関数の「**引数**」と「**戻値**」の意味・役割について正しく理解しておいてください。
  - 関数を **定義するコード** を正しく記述できるようになっておいてください。
  - 関数を **呼び出すコード** を 〃 。

## 課題04 (自由課題)

現在までの **Pythonプログラミングの学び (約4カ月) の集大成** として GoogleColab で実行可能な Pythonプログラムを作成して提出してください。いわゆる ***自由課題*** となります。

- ***共有URLの提出期限*** : **2026年7月26日(日) 23:00** 
- ***内容の完成期限*** : **2026年8月9日(日) 23:00** 
  - 上記の「内容の完成期限」以降に採点します。
  - 課題の採点後は、**修正版の再提出・追提出があっても原則として再評価はしません** (採点がフィードバックされるまではノートブックの内容を変更して問題ありません)。
- ***提出先*** : Teams「**PG1-課題04**」
  - 「**<u>リンクを知っている全員</u>**」に共有設定されたリンク (URL) を提出してください。
    - `https://colab.research.google.com/drive/1xxxx?usp=sharing` の形式になるはずです。
  - 提出されたリンクは **本校の学生・教員に公開** します。公開可能な内容 (コンテンツ) としてください。**公序良俗**や**著作権**などに反しなければ「テーマ」について制限はありません。ゲームでも、学習支援ツールでも何でもどうぞ。
- ***評価*** : テキストセルによるプログラムの紹介・解説を「**5点満点**」、コードセル (プログラム本体) を「**5点満点**」で、「**合計10点満点**」で評価します。「7.6点」を標準とします。
    - 提出遅れや体裁上の不備、共有設定ミスがあれば合計点から減点するので注意してください (指摘後に対応しても回復はないので提出時に十分に確認してください)。
- ***取り組み時間の目安*** : この課題には **最低でも「10時間以上」** を費やして取り組んでください (本科目では前期末試験を実施しないので、試験勉強に相当する時間と熱量を投資してください)。

<div class="note type-caution">
**注意**

「課題04」の直接的な評価は「10点満点」ですが、最終成績を評価するときには課題01～03よりも **ウエイト (重み) は大きくします**。特に、<u>ここまでの課題に未提出があったような学生は **挽回のチャンス**</u> なので、提出に不備が無いように細心の注意を払い、十分な時間と熱量を費やして計画的に取り組んでください。

</div>

- 参考 : [2025年度の作品](https://omunet-my.sharepoint.com/:t:/g/personal/z21707r_omu_ac_jp/IQCEbZzWW0DURbq3jVVoAuioAZub8me_2GsJcdqct20YBUU?e=yQ87bi) (学内のみ)
- 参考 : [2024年度の作品](https://omunet-my.sharepoint.com/:t:/g/personal/z21707r_omu_ac_jp/Ea9YIErxB69JqyuaHCuKK_gBBWACgldEs07JMXGezJFliQ?e=ariWHS) (学内のみ)
- 参考 : [2023年度の作品](https://omunet-my.sharepoint.com/:t:/g/personal/z21707r_omu_ac_jp/Ecy_z24h9vhJqOFNXh8GtkoBfzSTK1BZp8CE33TCF_91BQ?e=sHu38r) (学内のみ)

### 課題04 として提出するファイルの作成手順 (🚨必読・重要🚨)

- 課題04 の[テンプレート](https://colab.research.google.com/drive/1uol10dRtUxc8O6eks9Fn2JZxxhXoUSfi?usp=sharing) を用意しています。必ずこれを利用してください。
- 雛形を複製して「課題04_**48-WT**.ipynb」のような名前のノートブックを作成してください。ここで「**48-WT**」の前半は「**出席番号**」、後半は「氏名の**大文字イニシャル** (姓・名の順番の半角大文字)」としてください。
    - 出席番号が1桁の学生は、ゼロ埋めしてください。例：`課題04_01-XX`、`課題04_07-XX`
    - ノートブックの名前のミスは、2点減とします。
- ノートブックの共有設定を変更して「**リンクを知っている全員**」が「**閲覧者**」となるように設定してください。


![img](figs/11/colab01.png)

### 注意事項

- 作品 (課題) は、GoogleColab 上で実行可能なものとしてください。
  - Colab環境で `pip` を使ってライブラリを追加することはOKです。
  - 部分的に JavaScript などを含めても問題ありませんが、あくまで Python を「主」としてください。
- [課題04のテンプレート](https://colab.research.google.com/drive/1uol10dRtUxc8O6eks9Fn2JZxxhXoUSfi?usp=sharing) に従って、テキストセルに **プログラムの「タイトル」や「説明」など** を記述してください。
  - この部分の記述も評価対象 (50\%相当) になります。
- 現在までに、**<u>この授業で学んだことを最大限に取り込んだ内容</u>** が期待されます。この授業で扱っていない技術やライブラリを組み込むことも歓迎・推奨です。
  - 変数、条件分岐、繰り返し、関数、文字列処理、乱数 (ランダム)、各種ライブラリ
  - [Forms機能](https://colab.research.google.com/notebooks/forms.ipynb)、[ipywidgets](https://www.google.com/search?q=ipywidgetとは) なども使用可
- プログラムの実行結果 (出力セル) を残しておいてください。
- ITエンジニア界隈では、インターンシップ (4年生) や 就職活動などで <span class="masked">ポートフォリオ (作品集)</span> の提出が求められます。その「準備」という位置づけでも頑張って取り組んでください。例えば、以下のような設問が設定されていることがあります。

> 現在までに自分で作成してきたアプリやウェブサービスなどの成果物について記述してください。公開しているURLあれば記載してください。

> GitHub等でソースコードを公開していたらそのURIを教えてください。

ポートフォリオとしての「質」を考えた場合、コメントの有無や内容、可読性、保守性、再利用性などもポイントとなります。プログラミングの経験のある学生は、その点も意識してください。

## 復習: 実行開発環境の構築

今後、授業のなかで練習時間は確保しませんが、以下の手順で <span class="masked">Pythonの仮想環境の新規構築がスムーズにできる</span> ようになっておいてください。指示があったときは、以下の作業が (ライブラリのダウンロードとインストールの待ち時間を除いて) ***5分以内*** にできるようになっておいてください。

1. プロジェクトフォルダの作成、VSCodeによるフォルダのオープン
2. 仮想環境の作成
    - `python -m venv .venv`
3. 仮想環境の有効化 
    - `.venv/Scripts/Activate.ps1`
4. pipのアップグレード 
    - `python -m pip install --upgrade pip`
5. 必要パッケージのインストール
    - `pip install XXXXX`
6. 動作確認用のプログラムファイルの新規作成
    - 通常プログラムなら `xxxx.py`
    - ノートブックプログラム (=<span class="masked">Jupyter環境を要インストール</span> ) なら `xxxx.ipynb`,
7. プログラムの実行と動作確認
    - 通常プログラムなら `.vscode/launch.json` の作成（Python Debuggerの設定）して、`F5` 押下でコンソールに実行結果が表示されることを確認する ([第09回講義資料](lecture09.html#pythonファイルの実行) を参照)。
    - ノートブックプログラムなら、ランタイムの設定をして、出力セルに実行結果が表示されることを確認する ( [第09回講義資料](lecture09.html#ノートブックの新規作成と実行))。
    - ライブラリを `import` するための文を書いたときに <span class="masked">ModuleNotFoundError が発生しないこと</span> の確認

慣れるまでは **週1で練習**してください。

## ファイルネームに関する注意

Jupyter環境 (GoogleColab環境) **以外**で、プログラムファイルを作成する際は、ファイル名に <span class="masked">日本語やスペース (半角も全角も) 、ハイフンなどを使用しないでください</span>。

また、プログラムのなかでインポートしているライブラリ (モジュール) と <span class="masked">同じ名前のPythonファイル名をつけないでください</span>。

例えば、プログラムのなかに `import random` という文を含む場合、そのプログラムファイルに `random.py` という名前を付けたり、同フォルダに `random.py` というファイルが存在すると <span class="masked">実行時エラー</span> が発生します。

初心者によくあるミスなので注意してください。


<div class="note type-caution">
**注意**

`.venv` は仮想環境を管理するためのフォルダです。この `.venv` フォルダ内に `test01.py` や `test02.ipynb` など、自分で作成したプログラムファイルを配置しないでください。

**▼▼ NGな配置例👎 ▼▼**

```
📂 PG1-10
└─ 📂 .venv
    ├─ 📂 ... 
    ├─ 📂 ...
    ├─ 📝 test01.py     👈.venvフォルダ内部に配置 NG
    └─ 📝 test02.ipynb  👈.venvフォルダ内部に配置 NG
```


**▼▼ OKな配置例👍 ▼▼**

```
📂 PG1-10
├─ 📂 .venv
│   ├─ 📂 ... 
│   └─ 📂 ...
├─ 📝 test01.py
└─ 📝 test02.ipynb
```


</div>


### 演習1 (<i class="fa-solid fa-stopwatch"></i> 目標時間: 10分)

#### 手順1 (準備)

ローカルに構築した仮想環境 (＝新規作成は不要。前回講義で作成した `PG1-10` をそのまま利用すればOK) で `pip install numpy` を実行して、numpy をインストールしてください。

```
.venv/Scripts/Activate.ps1
pip install numpy
```

既に、仮想環境に `numpy` がインストール済みであれば `pip install numpy` は省略可能です (再度、実行しても問題はありません)。

<div class="note type-tips">
**仮想環境の明示的な有効化**

VSCodeは起動時に、`.venv` フォルダの存在を検知して、**自動的に仮想環境を有効化** します。ただし、タイミングの問題などで、仮想環境が自動的に有効化されない場合もあります。その状態で、`pip` を実行すると、ライブラリが (仮想環境ではなく) **グローバル環境 (共通環境)** にインストールされてしまいます。

グローバル環境にライブラリがインストールされると、ライブラリ同士の依存関係の問題で根深いバグや不具合を引き起こす可能性があります。特に複数のライブラリを組み合わせて大規模な開発をするときに起きます。

そのため、上記では `.venv/Scripts/Activate.ps1` のコマンドで <span class="masked">明示的に仮想環境を有効化</span> しています。 

なお、現在、有効になっているPython環境は、PowerShellで以下のコマンドを打って確認できます。表示されたパスに、プロジェクトフォルダの `.venv` が含まれていれば仮想環境が有効化されています。

```
Get-Command python | Select-Object -ExpandProperty Definition
```

なお、そもそも「**仮想環境とは何なのか？**」が分からない人は、以下のプロンプトで生成AIに質問してください。

> Pythonプログラム開発では、仮想環境を構築して、それを有効化して作業するように言われます。そもそも「仮想環境」とは何ですか。それを使うことによるメリットはなんですか。使わないと何が問題なのですか。プログラミング初学者の高校2年生が理解できるように分かりやすく説明してください。専門用語の使用はできるだけ避けて、分かりやすいたとえで説明してください。

</div>

#### 手順2 (準備)

次に `np-01.py` という名前で「Pythonファイル」を新規作成してください。そして、以下のプログラムを貼り付けて「**期待する結果**」が得られるように `np.arange` の第2引数を調整してください (サンプルとして提示のプログラムでは `5.00` が表示されません)。

なお、`np.arange` については [前回講義](lecture10.html#繰返し構文-ループ変数に小数値を使用したい場合) で既に解説済みです。

```python{.numberLines caption="np-01.py"}
import numpy as np   # numpy を np という省略名で使用
for t in np.arange(0.0, 5.0, 0.5):
  print(f'{t:.2f}',end=' ')
```

期待する結果

```
0.00 0.50 1.00 1.50 2.00 2.50 3.00 3.50 4.00 4.50 5.00 
```

#### 手順3

さて、ここからが <span class="masked">本題</span> です。

上記のファイル名を `numpy.py` (プログラムのなかでインポートしているライブラリと同じ名前) に変更して、その実行結果を確認してください。

また、ファイル名を `np.py` に変更して、その実行結果を確認してください。

必要に応じて「なぜこのようなことが発生するのか」を**ウェブ検索**あるいは**ChatGPT**を使って解決してください。これは、**適切な検索キーワードやプロンプトを構築する練習です**。

🚨 ここから先は **GoogleColab** または **Jupyter** を利用してください 🚨

## 型 (Type)


ここまでは、**あえて**言及を避けてきましたが、Python においても、C/C++言語 (**Arduino言語**)、Java と同様に <span class="masked">型 (Type)</span> が存在して機能しています。

ただし、Python では、C/C++言語のようにプログラマによる**明示的な型付けはせずに**、Python実行環境が **動的に型付け** をします。つまり `a=10` という文を書けば `a` は自動的に <span class="masked">「整数型 (`int`)」</span> となります。


また、一方で `a='ABC'` という文を書けば `a` は <span class="masked">自動的に「文字列型 (`str`)」</span> となります。


**(プロンプト例)**

> プログラミングの文脈で「動的型付け」とはなんですか？私は Arduino (C言語) も、Pythonも、それぞれ約15時間ぐらい学んでいます。そんな私に分かるように解説してください。



- 例：`a=10` と書くと変数 `a` は、<span class="masked">整数 (int)</span> **型**として扱われる。
- 例：`a='10'` あるいは `a="10"` と書くと変数 `a` は、<span class="masked">文字列 (str)</span> **型**として扱われる。
- 例：`a=10.0` と書くと変数 `a` は、<span class="masked">浮動小数点数 (float)</span> **型**として扱われる。
- 例：`a=[10]` と書くと変数 `a` は、<span class="masked">リスト (list)</span> **型**として扱われる。

<div class="note type-tips">
**型付けの種類**

プログラミング言語の型システムには「静的型付け」「強い動的型付け」「弱い動的型付け」「型なし」などが存在します。それぞれ一長一短があります。興味のある学生は調べてみてください。なお、Pythonは <span class="masked">強い動的型付け言語</span> に属します。
</div>

**(プロンプト例)**

> プログラミング言語の型システムには「静的型付け」「強い動的型付け」「弱い動的型付け」「型なし」などが存在すると聞きました。それぞれの違いを教えてください。

### どうやって型を確認するのか?

`type()` という組み込み関数を使用して**データの「型」を確認できます**。


**(プロンプト例)**

> Pythonの「組み込み関数」って何ですか？以前に授業で習った気がするのですが、忘れてしまいました。


具体的には、`is` 演算子と `type()` の組み合わせで <span class="masked">変数が特定の型であるかどうか</span> を判定できます。ここでは print 関数と組み合わせていますが、**実務的なプログラムでは、if文の「条件」としてよく使用されます**。

例えば「変数 `a` が `str`型 であるか？」という判定は次のようにできます。 

```python{.numberLines caption="isとtypeによる型の判定"}
%reset -f
a = 'Hello'
print( type(a) is str ) # True
print( type(a) is int ) # False 
```

同様に、`isinstance()` という組み込み関数を利用することもできます。

```python{.numberLines caption="isinstanceによる型の判定"}
%reset -f
a = 'Hello'
print( isinstance(a, str) ) # True
print( isinstance(a, int) ) # False 
```

次のプログラムを実行して、その結果を確認してください。また、その結果とプログラムを突き合わせて内容を理解してください。

```python{.numberLines caption="type-test.py"}
%reset -f
a = 10 # 👈この値を書き換えてみる

# 型を確認する
print(f'変数aの型は {type(a)} です')
print('---')

# 代表的な型 str int bool float list
print(f'変数aの isinstance(a,str) は {isinstance(a,str)} です')
print(f'変数aの isinstance(a,int) は {isinstance(a,int)} です')
print(f'変数aの isinstance(a,bool) は {isinstance(a,bool)} です')
print(f'変数aの isinstance(a,float) は {isinstance(a,float)} です')
print(f'変数aの isinstance(a,list) は {isinstance(a,list)} です')
print('---')

# if文に組み込み① → isinstance() 関数
if isinstance(a,str) :
  print('変数aは、文字列型(str)です')
else:
  print('変数aは、文字列型(str)ではないです')

# if文に組み込み② → is 演算子
if type(a) is str :
  print('変数aは、文字列型(str)です')
else:
  print('変数aは、文字列型(str)ではないです')
```

#### 演習2 (<i class="fa-solid fa-stopwatch"></i> 目標時間: 8分)

上記プログラムの **第02行目** の `a=10` を次のように書き換え、その実行結果を確認してください。

- `a=10.0`
- `a=True` ※ 実行結果に注意!
- `a='abc'`
- `a=[]`
- `a=[10,20,30]`
- `a=0b1001` ※ `0b` で開始するのは2進数
- `a=0xFF5` ※ `0x` で開始するのは16進数
- `a=int(3.14)`

<div class="note type-senior">
**中級者向け「`isinstance`」と「`is`と`type`」による判定の違い**

演習2において **第02行目** を `a=True` としたときに予想外の結果がでたと思います。そのため、最初のうちは、is と type の組み合わせを利用することをお勧めします。

```python{.numberLines caption="実行結果に差がでる場合"}
%reset -f
a = True

# bool型であるか？
print( type(a) is bool)      # True
print( isinstance(a, bool) ) # True

# int型であるか？
print( type(a) is int )     # False
print( isinstance(a, int) ) # True ?!
```

両者の違いを理解するためには、中級レベルの理解 (「継承」などのオブジェクト指向プログラミングの基礎理解) が必要です。現時点では、皆さんの理解の範疇を超えると思うので、授業では扱いません。詳しく知りたい人は、生成AIを利用してください。プロンプトの例を示します。


**(プロンプト例)**

> Pythonで「a=True」のとき、「type(a) is int」はFalseになるのに、「isinstance(a, int)」はTrueになるのはなぜですか？

</div>


### 型が違うと何が変わるのか?

型によって、その変数 (オブジェクト) から **呼び出すことができる「メソッド」が違ってきます**。例えば、変数 `a` が **文字列型(str)** であれば、英字の小文字を大文字に変換する `a.upper()` のようなメソッドを呼び出せますが、それ以外の **整数型** (int) や **浮動小数点数型** (float) では <span class="masked"> (自分で確認しましょう🫠) </span> が発生します。

<div class="note type-tips">
**「メソッド」とは何か**

**メソッド**とは、オブジェクト指向プログラミングの用語になります。現時点では「変数名のあとに**ドット** `.` を付けて呼びだす関数」ぐらいに考えてください。
</div>

例として、次のコードを実行して結果を確認してください。その後、**第02行目**を `a=10` に書き換えて (つまり、<span class="masked">変数 `a` を「文字列型」から「整数型」に変えて</span>) 、その実行結果を確認してください。 

```python{.numberLines caption="型によって呼び出せるメソッドが変わってくる例"}
%reset -f
a='windows'
print( a.upper() )
```

上記のプログラムは、次のように改良することができます。実行して結果を確認してください。その後、`a=10` に書き換えて、その実行結果を確認してください。 

```python{.numberLines caption="型による条件分岐の導入"}
%reset -f
a='windows'
if type(a) is str :   # 変数aの型が文字列 (str) ならば
  print( a.upper() )
else :
  print('変数aは文字列型ではないので upper メソッドを持っていません。')
```

#### 演習3 (<i class="fa-solid fa-stopwatch"></i> 目標時間: 10分)

以下のプログラムに追記して、変数 `a` が

- 「文字列型」であれば文字列を3回出力する処理 (例えば `Wow!` が格納されていれば `Wow!Wow!Wow!` を出力)、
- 「整数型」または「浮動小数点数型」であれば5倍した値を出力する処理、
- 「リスト型」であればそのまま出力、
- それ以外の型 (例えば 真偽値型(bool) ) であれば `Error!` を出力する処理

にしてください。

ここでは、`elif` (既に[第05回講義](lecture05.html#elif節)で学習済み) を使用することを期待しています。また、`if` の条件文には、AND条件 `and` ([学習済み](lecture05.html#and条件))、OR条件 `or` ([学習済み](lecture05.html#or条件)) を使うことができました。例えば `if a%3==0 and a%5==0` は `a` が「3の倍数」かつ「5の倍数」のとき真になります。
 
```python{.numberLines caption="演習3"}
%reset -f
a='Wow!'  # この変数aには様々な値が入ることを想定しています。

# 型に応じて処理を変えるプログラムを追記
```

#### 定着確認

- Python では、変数を使う前に、その変数の型を明示的に宣言しておく必要がある。この説明は「適切」か「不適切」か答えよ。
  - **答え**: <span class="masked">不適切</span>
  - **解説**: <span class="masked">Python は動的型付け言語であり、C/C++やJavaのような型宣言の構文は存在しない。`a=10` のように値を代入するだけで、その値に応じて型が自動的に決まる。</span>

- `a=10` として `a` が整数型 (int) になったあと、同じプログラム内で `a='ABC'` と書くと、エラーになる。この説明は「適切」か「不適切」か答えよ。
  - **答え**: <span class="masked">不適切</span>
  - **解説**: <span class="masked">Python では、変数そのものに型が固定されているのではなく、代入された値に型がある。そのため `a` に別の型の値を再代入すれば、`a` の型もそれに応じて変わる（動的型付け）。エラーにはならない。</span>

- `a=True` のとき、`type(a) is int` と `isinstance(a, int)` は、常に同じ結果になる。この説明は「適切」か「不適切」か答えよ。
  - **答え**: <span class="masked">不適切</span>
  - **解説**: <span class="masked">`type(a) is int` は `False` になるが、`isinstance(a, int)` は `True` になる。bool型が int型の派生型であるために生じる現象で、両者は常に一致するとは限らない。</span>

- 変数 `a` に整数型 (int) の値が入っているとき `a.upper()` を呼び出すと、文字列型ではないため何も出力されないだけで、エラーにはならない。この説明は「適切」か「不適切」か答えよ。
  - **答え**: <span class="masked">不適切</span>
  - **解説**: <span class="masked">整数型 (int) は `upper` というメソッドを持っていないため、`a.upper()` を呼び出すと `AttributeError` が発生してプログラムが停止する。「何も起きない」わけではない。</span>

## 関数 (Function) 初級

プログラムにおいて <span class="masked">ある処理を行なうための一連の命令をまとめたもの</span> を ***関数 (Function)*** と呼びます。関数を利用することで、そのプログラムは**読みやすくなり**、また、**修正や変更も容易になります**。

これまでに `print()` や `input()` などを何度も使用してきましたが、これらはPythonが最初から提供している「**組み込み関数**」というものになります。また、`math.sin()` や `math.radians()` は、数学ライブラリをインポートすること (つまり <span class="masked">`import math` をすることで</span>) で使用可能になる関数です。

さらに、Pythonをはじめとして各種プログラムでは、プログラマ自身で**関数を定義して、それを呼び出して使用することができます**。

例えば「**税抜き価格を引数として与えると、税込み価格 (端数切捨て) を計算して返す関数**」は、次のように記述できます。実際に実行して、その結果を確認してください。ここでは食料品を対象に「税率8%」を考えています。

```python{.numberLines caption="関数の定義と呼出し"}
%reset -f

# 自作関数 add_tax_to_price を定義
def add_tax_to_price(price):
  x = price * 1.08
  x = int(x)
  return x # x を戻り値として呼び出し側に返す

p1 = 73
p2 = add_tax_to_price(p1)
print(f'ガリガリ君 {p1}円（税込み{p2}円）') 

p1 = 12
p2 = add_tax_to_price(p1)
print(f'うまい棒 {p1}円（税込み{p2}円）') 
```

ここで `def` は ***Define*** (日本語で「**定義**」の意味) の略語になります。

### 演習4 (<i class="fa-solid fa-stopwatch"></i> 目標時間: 15分)

上記のプログラムについて

- **引数なし** で関数を呼びだすと (つまり、**第10行目**や**第14行目**で `p2 = add_tax_to_price()` とすると) 、どのようになるか。結果について推測したうえで、実際にコードを実行して確認してください。

- 括弧なしで関数を呼びだすと (つまり `p2 = add_tax_to_price` とすると) どのようになるか。結果について推測したうえで、実際にコードを実行して確認してください。

- **第04行目**を `def add_tax_to_price(p):` に書き換えたとき、**プログラムが書き換え前と同じ動作をするように**、その他の部分を修正してください。

- **第04行目**を `def get_total_price(price):` に書き換えたとき、**プログラムが書き換え前と同じ動作をするように**、その他の部分を修正してください。

- 次のように「関数の呼び出し」を「関数の定義」よりも前に記述するとどうなるか。結果について推測したうえで、実際にコードを実行して確認してください。

```python{.numberLines caption="関数の定義と呼出しの順番"}
%reset -f
# 関数呼び出しを先に記述する
p1 = 73
print(f'ガリガリ君 {p1}円（税込み{add_tax_to_price(p1)}円）') 

# 関数定義をあとに記述する
def add_tax_to_price(price):
  return int(price * 1.08)
```

### 演習5 (<i class="fa-solid fa-stopwatch"></i> 目標時間: 10分)

引数として、0 から 5 までの **整数値** を与えると、それに対応して「☆☆☆☆☆」「★☆☆☆☆」・・・「★★★★☆」「★★★★★」という文字列を返してくる関数 `star` を定義してください。また、その動作確認してください。

なお、引数として**0未満の整数値**が渡されたときは「☆☆☆☆☆」、**6以上の整数値**が渡されたときは「★★★★★」を戻り値としてください。また、**整数値以外の引数**を受け取ったときは「ERROR」という文字列を戻り値としてください。

```python{.numberLines caption="レーティング用の星マークを得る関数"}
%reset -f

# 目的の処理をする関数に書き換える
def star(n):
  r = '★'*5
  return r

# 
print(star(4))     # => ★★★★☆
print(star(-4))    # => ☆☆☆☆☆
print(star(10))    # => ★★★★★

print(star('5'))   # => ERROR
print(star(['5'])) # => ERROR
print(star('1.5')) # => ERROR
```

- ヒント： <span class="masked">型の判定には `isinstance` や `type`、`is` などを使用する。</span>

### 複数の引数を持つ関数

関数では、**複数の引数**を受け取ることもできます。例えば、次に示すものは 2点の座標 x1, y1, x2, y2 を与えたとき、その距離を計算する関数の記述例です。実際に実行して、その結果を確認してください。

```python{.numberLines caption="複数の引数を受け取る関数"}
%reset -f

# 距離を計算する関数
def get_distance(x1,y1,x2,y2):
  return ( (x2-x1)**2 + (y2-y1)**2 )**0.5

p1_x, p1_y = 10, 10
p2_x, p2_y = 15, 25
d = get_distance( p1_x, p1_y, p2_x, p2_y )
print(f'距離は {d:.1f}')
```

#### 定着確認

- Python では、`def` で関数を定義した行が実行されると、その時点で関数の中身（ブロック）も一度実行される。この説明は「適切」か「不適切」か答えよ。
  - **答え**: <span class="masked">不適切</span>
  - **解説**: <span class="masked">`def` は関数を「定義する（登録する）」だけの文であり、関数の中身が実行されるのは、その関数が実際に呼び出されたときだけである。</span>

- `def add_tax_to_price(price):` の仮引数名を `def add_tax_to_price(p):` のように変更した場合、その関数を呼び出している側 (`add_tax_to_price(p1)` など) の変数名も `p` に合わせて書き換える必要がある。この説明は「適切」か「不適切」か答えよ。
  - **答え**: <span class="masked">不適切</span>
  - **解説**: <span class="masked">仮引数名は関数定義の内部だけで使われるローカルな名前であり、呼び出し側の変数名と一致させる必要はない。呼び出し側は「値」を渡しているだけで、その値が呼び出された時点の仮引数に格納される。</span>

- 1個の引数を受け取るように定義された関数を、引数を渡さずに呼び出すと (`add_tax_to_price()` のように) 、エラーになる。この説明は「適切」か「不適切」か答えよ。
  - **答え**: <span class="masked">適切⭕</span>
  - **解説**: <span class="masked">`price` に対応する値が渡されていないため `TypeError: add_tax_to_price() missing 1 required positional argument: 'price'` のようなエラーが発生する。</span>

- 関数の呼び出し (`add_tax_to_price(p1)` など) を、その関数を定義する `def ...` よりも前に書いても、問題なく動作する。この説明は「適切」か「不適切」か答えよ。
  - **答え**: <span class="masked">不適切</span>
  - **解説**: <span class="masked">Pythonのプログラムは上から順に実行されるため、関数の呼び出しが `def` による定義よりも前にあると、その時点ではまだ関数が定義されておらず `NameError` が発生する。</span>

- `get_distance(x1,y1,x2,y2)` のように複数の引数を持つ関数を呼び出すとき、渡す値の順番を入れ替えても、結果に影響はない。この説明は「適切」か「不適切」か答えよ。
  - **答え**: <span class="masked">不適切</span>
  - **解説**: <span class="masked">複数の引数は先頭から順番に仮引数 (`x1,y1,x2,y2`) へ対応づけられる（位置引数）。渡す順番を変えると各仮引数に格納される値も変わってしまい、結果も変わる。</span>

## アサート文

アサート (`assert`) は主に <span class="masked">デバッグやエラーチェック</span> を目的に使用する機能です。例えば、次のように `assert 条件文` という形式で使用します。ちなみに、**第03行目**の `.pop()` は、既に[第10回講義](lecture10.html#リスト要素の削除)で学習済みです。

```python{.numberLines caption="アサート文の利用例"}
%reset -f
arr = [0,1,0,1,0,1,0] # 長さ7のリストを初期化
arr.pop()             # リスト末尾の要素を取り除く

# arr の長さが 6 であることを「念のために確認したい」
assert len(arr) == 6 # ◀◀◀ これがアサート文

# (以降、継続処理)
print('後続処理')
```

`assert` は、それに続く条件式が **真 (True)** であることを「**確認**」する目的として使用します。

もし、条件式が **偽（False）** となる場合、プログラムはエラーメッセージを生成して**強制停止**します。一方で、**真 (True)** となる場合は <span class="masked">何も出力せずに処理を継続</span> します。

上記プログラムの場合、リスト `arr` が `pop()` メソッドによって <span class="masked">「長さ 6 になっていること」を念のために確認するため</span> に **第06行目** に `assert` 文を書いています。

ここで、**第02行目** を `arr=[0,1,0,1,0,1,0,1] # 長さ7のリストを初期化` に書き換えて再度実行してみてください。今度は <span class="masked"> (自分で確認しましょう🫠) </span> が発生します。


つまり、`assert`は「**ここでは、この変数は、こうなっているはず！**」を念のために確認する機能を提供します。

このようなことは、`if` と `print`、さらにプログラムを停止する `sys.exit()` や例外スローを組み合わせても可能ですが、 `assert` と比較すると手間になります。また、Jupyter環境 (Colab.環境) では `sys.exit()` は意図した動作をしません。

<div class="note type-tips">
**AssertionErrorの発生時に任意のメッセージを表示**

`assert` 文で、次のようにカンマにつづけてメッセージ (文字列) を設定しておくと **AssertionError** が発生したときに、その文字列を出力することができます。

```python{.numberLines caption="アサート文の利用例" startFrom="5"}
# カンマにつづけて任意の文字列を設定
assert len(arr) == 6, 'arr の長さが 6 以外になってる！どこかおかしい'
```

AssertionErrorが発生したときの画面出力

![img](figs/11/assert-01.png)

</div >

<div class="note type-caution">
**assertはデバッグ用途**

`assert` は、主に**デバッグのために使用する機能**であることを忘れないでください。**製品レベルのエラー処理**には、後の講義で学習する **例外処理** と `print` による文字列出力を組み合わせて使用します。

例外処理では、予期しないエラーが発生した場合でも、プログラムの処理を継続させることが可能となる仕組みを提供します。

</div>

### 演習6 (<i class="fa-solid fa-stopwatch"></i> 目標時間: 3分)

変数 `a` が**リスト型で**あることを「確認」するためのアサート文を指定の位置に記述してください。また、その動作確認をしてください (`a=10` や `a='10'` に書き換えて `assert` が機能するか確認してください) 。

```python{.numberLines caption="演習6"}
%reset -f
a = [10,20]

# 以下に変数aがリスト型であることを確認するアサート文を記述


print(f'リストの先頭要素は {a[0]} です。')
```

#### 定着確認

- `assert 条件式` は、条件式が **真 (True)** のときにエラーを発生させてプログラムを停止する。この説明は「適切」か「不適切」か答えよ。
  - **答え**: <span class="masked">不適切</span>
  - **解説**: <span class="masked">`assert` は条件式が **偽 (False)** のときに `AssertionError` を発生させてプログラムを停止する。真 (True) の場合は何も起きず、そのまま処理が継続される。</span>

- `assert` はデバッグ・確認のための機能であり、製品として提供するプログラムのエラー処理には、例外処理など別の仕組みを使うことが推奨される。この説明は「適切」か「不適切」か答えよ。
  - **答え**: <span class="masked">適切⭕</span>
  - **解説**: <span class="masked">`assert` は「ここではこうなっているはず」という開発者自身の前提を確認するための機能であり、あくまでデバッグ用途。製品レベルのエラー処理には、後の講義で学習する例外処理などを利用する。</span>

- `assert len(arr) == 6` のようなアサート文には条件式のみ書くことができ、条件が False だったときに表示する任意のメッセージを追加することはできない。この説明は「適切」か「不適切」か答えよ。
  - **答え**: <span class="masked">不適切</span>
  - **解説**: <span class="masked">`assert 条件式, 'メッセージ'` のようにカンマに続けて文字列を指定することで、`AssertionError` 発生時にそのメッセージを表示させることができる。</span>

## SQLiteとの連携


先週金曜日の「情報2」の授業のなかで RDB や SQL について触れたので「**Python と SQLite が簡単に連携できること**」を紹介しておきます。詳しいことは、今後の授業のなかで触れていきます。

Pythonには、SQLite3データベースに接続するための `sqlite3` という標準ライブラリが備えられています。

例えば、次のようなクエリに相当する処理 (情報2の第11回講義資料の p.201 を参照) は、、、

```
-- テーブル「社員表」が存在しているなら削除
DROP TABLE IF EXISTS 社員表;

-- ①フィールド「社員番号」「名前」「部署」「住所」を持ったテーブル「社員表」を作成
CREATE TABLE 社員表(社員番号,名前,部署,住所);

-- ②テーブル「社員表」にレコードを挿入
INSERT INTO 社員表 VALUES(2009001,'田中一郎','営業部','神奈川県伊勢原市');
INSERT INTO 社員表 VALUES(2009002,'山本二郎','開発部','神奈川県横浜市');
INSERT INTO 社員表 VALUES(2009003,'佐藤三郎','開発部','神奈川県横浜市');
INSERT INTO 社員表 VALUES(2009004,'ウチのシロ','帰宅部','神奈川県犬山市');

-- ③テーブル「社員表」から全項目(*)を選択して表示
SELECT * FROM 社員表;
```

以下のような Python プログラムによって記述することができます。実際に実行して確認してみてください。

```python{.numberLines caption="SQLite3との連携"}
%reset -f
import sqlite3

# DBとの接続の開始
conn = sqlite3.connect('test.db')
cur = conn.cursor() # DBのカーソル(Cursor)取得

# DBの作成
cur.execute("DROP TABLE IF EXISTS 社員表")
cur.execute("CREATE TABLE 社員表(社員番号,名前,部署,住所)")
cur.execute("INSERT INTO 社員表 VALUES(2009001,'田中一郎','営業部','神奈川県伊勢原市')")
cur.execute("INSERT INTO 社員表 VALUES(2009002,'山本二郎','開発部','神奈川県横浜市')")
cur.execute("INSERT INTO 社員表 VALUES(2009003,'佐藤三郎','開発部','神奈川県横浜市')")
cur.execute("INSERT INTO 社員表 VALUES(2009004,'ウチのシロ','帰宅部','神奈川県犬山市')")
conn.commit() # 処理を実行

# データの更新
# cur.execute("UPDATE 社員表 SET 名前='ウチのミケ', 住所='神奈川県猫山市' WHERE 社員番号=2009004")
# conn.commit()

cur.execute('SELECT * FROM 社員表')

table = list(cur)
for record in table:
  print(*record,sep='|') # タプル(＝リストのようなもの) のアンパック

# print(table[0][1]) # => 田中一郎
# print(table[3][2]) # => 帰宅部

# DBとの接続を切る
conn.close()
```

このプログラムでは、DBの新規作成を行なっていますが、通常は、データベースの新規作成などは他のソフトウェアでおこないます。プログラムでは、既存のデータベースに接続して必要なデータを読み込んだり、データの更新処理を行ないます。

## 斜方投射のシミュレーションと可視化

ここまで学習してきたことを組み合わせて「斜方投射」の**簡易シミュレーション**と**可視化**に挑戦してみましょう。このセクションでは **Jupyter環境 (Colab環境) を使用することを想定** します。

![img](figs/10/sim1.png)

### 確認

- ある時刻において位置 $x (\mathrm{m})$、速度 $v (\mathrm{m/s})$ の物体がある。この物体について、微小時間 $dt$ 秒後の位置を求めよ。  
答え：<span class="masked">$x+v\cdot dt$</span>

- ある時刻において速度 $v(\mathrm{m/s})$、加速度 $-g(\mathrm{m/s^2})$ の物体がある。この物体について、微小時間 $dt$ 秒後の速度を求めよ。  
答え：<span class="masked">$v-g\cdot dt$</span>

- ある時刻において位置 $x (\mathrm{m})$、速度 $v(\mathrm{m/s})$、加速度 $a(\mathrm{m/s^2})$ の物体がある。この物体について、微小時間 $dt$ 秒後の位置を求めよ。  
答え：<span class="masked">$x+v\cdot dt+0.5\cdot a \cdot dt^2$</span>
    - ただし、$dt$ が非常に小さいときは $x+v\cdot dt$ で近似できる。

### 基本プログラム

[前回の宿題](lecture10.html#宿題) として、以下のプログラムについては **既に60分を費やして読み込んでいることを前提** とします。

このプログラムでは「**斜方投射**」したときの <span class="masked">物体の位置 (X座標とY座標)</span> を **0.1秒間隔** で計算して、それをリスト `arr_x` と `arr_y` に格納し、最後にそれを可視化 (グラフ化) しています。

シミュレーションの時間範囲は、**第11行目**と**第12行目**のコード `dt=0.1` と `iter=80` から計算できるように、時刻 $0(\mathrm{s})$ から時刻 <span class="masked">$8.0(\mathrm{s})$（厳密に言えば $7.9(\mathrm{s})$ ）</span> となります。

実際にコードを実行して、その結果を確認してください。

```python{.numberLines caption="斜方投射のシミュレーション"}
%reset -f
import math
import matplotlib.pyplot as plt # 可視化支援ライブラリ

# パラメータ設定
v0 = 20.0    # 初速度(m/s)
theta = 60   # 水平方向から上方にθ(deg)に向けて投射
g = 9.8      # 重力加速度m/s^2

# シミュレーションの準備・設定
dt = 0.1  # 位置を計算する時間間隔
iter = 80 # シミュレーション繰返し回数

theta = math.radians(theta) # deg -> rad 変換

arr_x=[0]*iter # X位置を格納するリストの初期化
arr_y=[0]*iter # Y位置　〃

assert len(arr_x) == len(arr_y)

arr_x[0] = x = 0  # t=0 のX位置
arr_y[0] = y = 0  #  〃 のY位置

vx = v0 * math.cos(theta) # 初速度のX成分
vy = v0 * math.sin(theta) # 　〃　のY成分

# シミュレーション
for i in range(1,iter):
  vy = vy - g * dt # Y方向の速度更新
  x = x + vx * dt  # X位置の更新計算
  y = y + vy * dt  # Y位置 〃

  # 地面衝突の反発 (バウンド) の処理
  if y < 0:
    y = 0
    vy = -vy * 0.8  # 反発係数

  arr_x[i] = x # 更新されたX位置をリストに格納
  arr_y[i] = y #   〃    Y位置を  〃

# 可視化（現状でここから先は深く理解する必要はない）
fig,ax = plt.subplots(dpi=120)
ax.scatter(arr_x,arr_y,marker='o',s=20,alpha=0.5)
ax.axhline(0,c='black',lw=0.5)
ax.set_aspect('equal', adjustable='box')
ax.set_ylim(-1,30) # Y軸の表示範囲
plt.show()
```

- 斜方投射の初期位置を $(0,12)$ に変更してプログラムを実行してください。また、そのシミュレーションが適切なものであるか検証してください。**検証後はプログラムを元に戻しておいてください**。
- 斜方投射の角度を $45(deg)$ および $30(deg)$ に変更してプログラムを実行してください。また、そのシミュレーションが適切なものであるか検証せよ。最もX方向で遠くまで飛ばせる角度について考察してください。**検証後はプログラムを元に戻しておいてください**。
- 反発係数を $0.9$ および $0.7$ に変更してプログラムを実行してください。また、そのシミュレーションが適切なものであるか検証してください。**検証後はプログラムを元に戻しておいてください**。
- シミュレーションの時間範囲 ( 時刻 $0.0$ から $8.0$ まで ) を変えずに、その時間間隔を $0.2(\mathrm{s})$ に変更してプログラムを実行してください。また、そのシミュレーションが適切なものであるか検証してください。同様に、時間間隔を $0.05(\mathrm{s})$ とした場合についても実行してください。**検証後はプログラムを元に戻しておいてください**。
- $x=50$ の位置に壁が存在するとして**X方向にも衝突 (反発) **が生じるようにしてください。

### アニメーション

**第43行目** 以降がアニメーション対応にするための変更箇所になります。Gifを出力するためには `pip install pillow` が必要です。

![img](figs/11/animation.gif)

```python{.numberLines caption="斜方投射のJSアニメーション"}
%reset -f
import math
import matplotlib.pyplot as plt
import matplotlib.animation as animation
import IPython

# パラメータ設定
v0 = 20.0    # 初速度(m/s)
theta = 60   # 水平方向から上方にθ(deg)に向けて投射
g = 9.8      # 重力加速度m/s^2

# シミュレーションの準備・設定
dt = 0.1  # 位置を計算する時間間隔
iter = 120 # シミュレーション繰返し回数

theta = math.radians(theta) # deg -> rad 変換

arr_x=[0]*iter # X位置を格納するリストの初期化
arr_y=[0]*iter # Y位置　〃

assert len(arr_x) == len(arr_y)

arr_x[0] = x = 0  # t=0 のX位置
arr_y[0] = y = 0  #  〃 のY位置

vx = v0 * math.cos(theta) # 初速度のX成分
vy = v0 * math.sin(theta) # 　〃　のY成分

# シミュレーション
for i in range(1,iter):
  vy = vy - g * dt # Y方向の速度更新
  x = x + vx * dt  # X位置の更新計算
  y = y + vy * dt  # Y位置 〃

  # 地面衝突の反発 (バウンド) の処理
  if y < 0:
    y = 0
    vy = -vy * 0.8  # 反発係数

  arr_x[i] = x # 更新されたX位置をリストに格納
  arr_y[i] = y #   〃    Y位置を  〃

# アニメーション
fig,ax = plt.subplots(dpi=120,figsize=(8,3))
ss = 5 # 残像数

def frame(i):
  ax.clear()
  ax.set_aspect('equal', adjustable='box')
  ax.set_ylim(-1,30)
  ax.set_xlim(0, round(max(arr_x),-1)+5)
  ax.axhline(0,c='black',lw=0.5)
  ax.text(0.01,0.98,f't={i*dt:.2f}',va='top',transform=ax.transAxes)
  for t in range(ss):
    ax.scatter(arr_x[i+t],arr_y[i+t],
               marker='o',s=20,c='tab:blue',alpha=t/(ss+1))

plt.tight_layout()
ani = animation.FuncAnimation(fig, frame, interval=100,frames=iter-ss)
ani.save('animation.gif', writer='pillow', fps=10) # アニメーションGIFを出力
plt.close()

IPython.display.HTML(ani.to_jshtml()) # 出力セルにJavaScriptアニメーションを出力
```


