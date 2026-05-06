---
var:
  header-title: "2026-2I プログラミング1 第04回 講義資料"
  header-date: "2026年05月11日（月）3時限"
---

# 第04回 2I-プログラミング1

## 連絡事項と講義概要

- ***小テスト1*** の答案を返却します。
  - 小テストの各問題の実行例や解説、本日講義の演習の解答例や実行例などは [こちら](https://colab.research.google.com/drive/1f_etlSpI8RK8LLErXIYLxVVSszfNk6mh?usp=sharing) (GoogleColab) を参照してください。
- Googleに OMUID でログインして[GoogleColab](https://colab.research.google.com/?hl=ja) にアクセスし、`PG1-第04回講義.ipynb` というタイトルでノートブックを作成しておいてください。
  - 今回も [課題02](lecture04.html#課題02) として <u>ノートブックの共有リンク (URL) を提出してもらいます</u>。指定された名前で正しく作成してください。
- [課題01](lecture03.html#課題01) の期限は、5月10日 (日) **23:00** でした。未提出の学生は、至急提出🚨してください。
  - 提出期限を168時間（＝1週間・7日間）超過して提出されたものは、<u>未提出と同じく「0点」となります</u>。
  - 課題01の「設問5」の作品集は [こちら](https://colab.research.google.com/drive/168jRCNCYr3971AiDZ_Wr11kIL5D9L0nC?usp=sharing)(学内のみ)


### 小テスト1📝に関する補足：スラッシュとバックスラッシュ

Pythonでは、改行を表すときに `\n` という記法を用います。これは **バックスラッシュ** `\` と小文字の `n` を組み合わせたものです。

小テストの結果を見ると「**スラッシュ** `/`」と「**バックスラッシュ** `\`」を取り違えているケースがいくつか見受けられました。これらは形は似ていますが、役割も意味も異なるため、正確に区別する必要があります。

なお、使用している環境によっては、バックスラッシュ `\` が、**円マーク** `¥` のように表示される場合もあります。これはフォントや表示仕様による違いであり**実際には同一の文字**です。この点にも注意してください。

- 「**バックスラッシュ** `\`」と「**スラッシュ** `/`」 👉 異なる文字
- 「**バックスラッシュ** `\`」と「**円マーク** `¥`」 👉 同じ文字

### 小テスト1📝に関する補足：開始引用符と終了引用符

Pythonにおいて文字列リテラルを表すダブルクォートは、開始と終了で同一の記号 `"` を用います。シングルクォートについても同様に、開始と終了で同一の記号 `'` を用います。

小テストでは `“` と `”` のように **<u>開始と終了で異なる記号を使用している例</u>** が見られました。また、シングルクォートについても同様に例がありました。いずれもプログラムでは別の文字として扱われます。

これらは、今後の小テストでは誤答として扱いますので、注意してください。

![img](figs/04/quote.png)

### 課題01💻に関する補足：テキストセルのマークダウン記法

対数計算の $\log$ は `\log` のように記述するときれいにレンダリングできます。

- `log_{2} 16` とした場合 → $log_{2} 16$ 👉 斜体になってしまう
- `\log_{2} 16` とした場合 → $\log_{2} 16$

同様に $\sin$ は `\sin`、$\max$ は `\max` のように記述することで適切に数式をレンダリングすることができます。

- `sin x` とした場合 → $sin x$ 
- `\sin x` とした場合 → $\sin x$ 

また、テキストセル内で「**改行**」したいときは、以下のように `\` で1行の空行をあけます。`<br>` を使う必要はありません。

![img](figs/04/colab-08.png)



### 📝演習1 (⌛目標5分) ※前回講義で学んだことの復習

ソフトウェアエンジニアを目指すP君 (高専2年生) は、プログラミングのスキルアップのために友人とゲームづくりに取り組んでいる。いま、操作キャラの現在HP（ヒットポイント）をテキストベースで画面表示するためのUI (User Interface) として、次のようなものを作成することにした。

▼ 現在HPが $53$ のとき

```
🧡🧡🧡🧡🧡
🤍🤍🤍
```

▼ 現在HPが $8$ のとき (1行目が空行となっていることに注意)

```

🤍🤍🤍🤍🤍🤍🤍🤍
```

▼ 現在HPが $30$ のとき (2行目が空行となっていることに注意)

```
🧡🧡🧡
 
```

つまり、$10$ の位の値を「🧡」で表現し、$1$ の位の値を「🤍」で表現してHPを表現することにしました (HPは $0$ 〜 $99$ の整数値を想定)。これを実装してください。

```python{.numberLines caption="演習1 (ヒント)"}
# 演習1
%reset -f
hp = 23
print('🧡'*5)
```

#### 💡ヒント

- [前回講義](lecture03.html#四則演算) の「四則演算」で学んだ <span class="masked">剰余演算</span> や <span class="masked">整数除算</span> を利用してください。
- 繰り返し構文 `for` を使用せずに実装可能です。
- 実装例は [こちら](https://colab.research.google.com/drive/1f_etlSpI8RK8LLErXIYLxVVSszfNk6mh?usp=sharing) (自分で実装してから見てください)。


::: {.balloon .char-01 .face-02 .tone-yellow}
演習1でまったく手が動かないなら、ちょっと待って。理解力の話じゃなくて、プログラミングの学び方そのものが間違ってるかもしれないよ？

GeminiのコードをそのままコピペしてOKって思ってない？大事なのは「なぜそう書くのか」が自分の言葉で説明できるかどうか。「見てわかる」と「自分で書ける」は全然別物だから。理解できてるか確かめながら進む習慣、ちゃんとつけないとヤバいよ💦
:::

## 標準入力の利用

***標準入力***（**Standard Input**）とは、コンピュータ上でテキストベースのプログラムを実行する際、**ユーザからの文字列入力**を受け取るための「標準的な窓口」のことです。主に **キーボード** や **テキストファイル** を通して、プログラムに「文字列」を与えます (流し込まれます) 。

**<i class="fa-solid fa-comment-dots fa-flip-horizontal"></i>プロンプト例**

> GoogleColab を使って Python プログラミングを勉強しています。「標準入力」とは何ですか？文系の高校1年生でも、無理なく分かるように解説してください。特に「標準」ってどういうことですか？

例えば、**GUI** (Graphical User Interface) を持たない **コンソールプログラム** において <span class="masked">ユーザに「名前」や「年齢」を入力</span> してもらうような処理は「標準入力」を使って実現します。

::: {.note .type-tips}
**GUIプログラムの作成**

授業の後半 ([第26回講義](https://takeshiwada1980.github.io/Programming1-2025/lecture26.html)～[第27回講義](https://takeshiwada1980.github.io/Programming1-2025/lecture27.html)を予定) では、**PySide (Qt)** というライブラリを使用して、以下のようなウィンドウを持った GUI プログラムの開発にも取り組みます。

![img](figs/04/gui-app-01.png)



- [PySide](https://www.google.com/search?q=PySide) @ Google検索
:::

Pythonでは、`input` という関数を使って標準入力を受け取り、それを ***文字列*** として変数に格納します。例えば、標準入力から `2025` のような**数値を入力しても**、実際に変数に格納されるデータは <span class="masked">「数値」でなく「文字列」</span> となるので注意してください。


次のプログラムを実行して、***標準入力*** の動作を確認してください。

```python{.numberLines caption="標準入力を経由して値を取得"}
%reset -f
print('名前を入力してください >> ',end='')
name = input()
print('年齢を入力してください >> ',end='')
age = input()
print(f'{name}さんは{age}歳なんですねwww')
```

▼ Colabで `input(...)` を含むプログラムを実行したときの注意点 ▼

![img](figs/04/colab-02.png)


次に変数 `age` に格納された値が、***数値*** ではなく ***文字列*** であることを確認するために、次のプログラムを実行して動作を確認してください。

```python{.numberLines caption="標準入力から受け取った値は「数値」ではなく「文字列」になることに注意"}
%reset -f
print('名前を入力してください >> ',end='')
name = input()
print('年齢を入力してください >> ',end='')
age = input()
print(f'{name}さんの年齢を2倍すると{age*2}歳っすねwww') # この行を変更した
```

- 上記プログラムの**第02行目**と**第03行目**について `name = input('名前を入力してください >> ')` のように1行にまとめて記述できるかを、書き換えて実際に確かめてください。

**<i class="fa-solid fa-comment-dots fa-flip-horizontal"></i>プロンプト例**

> Python の `input()` は、なぜ数値を入力しても文字列として受け取るのですか？初心者にも分かるように、キーボード入力や標準入力の仕組みと関係づけて説明してください。

::: {.note .type-senior}
**中級者向け: 非ノートブック環境で実行した場合**

GoogleColab や Jupyter ではなく、**通常のコンソール環境** (非ノートブック環境) で `print('名前を入力してください >> ',end='')` を実行したときは、以下のように画面表示されます。

```
名前を入力してください >> _
```

:::

### 📝演習2 (⌛目標4分)

名前 `name`、年齢 `age`、性別 `sex` を標準入力から受け取り、`高専 太郎(20歳・男性)` のような文字列を出力するプログラムを作成してください。


::: {.balloon .char-01 .face-01 .tone-pink}
授業中は演習の時間が限られてるから、既出の再利用できるコードはコピペしてOK。どんどん活用して演習を進めて。

ただ、ゼロからコードを書くほうが断然力がつくから、それは自宅学習でやってみて。
:::

## 文字列を「整数値」に変換する int関数

**文字列を整数値に変換する**ためには <span class="masked">`int()`</span> 関数を使用します。


次のプログラムを実行して<u>「**文字列**」が「**整数値**」に変換できていること</u>を確認してください。

```python{.numberLines caption="文字列を整数値に変換するプログラム例"}
%reset -f
print('あなたの年齢を入力してください >> ',end='')
age = input()
age = int(age) # ここで文字列から整数値に変換
print(f'年齢を2倍すると{age*2}歳っすねwww')
```

- 上記の **第03行目** と **第04行目** について `age = int(input())` のように**1行にまとめて記述可能か**検証してください。
- 全角の文字列、例えば「**１６**」を標準入力から与えると、どのように処理されるか検証してください。
- 小数を含む文字列、例えば「**17.5**」を標準入力から与えると、どのように処理されるか検証してください。
- 整数値に相当する小数部を含む値、例えば「18.0」を入力すると、どのように処理されるか検証してください。
  - <u>指示がなくても自分で疑問を持ち、試して確かめること</u>を大切にしてください。こうした好奇心と行動力の積み重ねが、長期的には**高度なプログラミングスキルの習得**につながります。


## 文字列を「実数値」に変換する float関数

文字列を実数値 (小数を含む数値、厳密には**浮動小数点数**) に変換するためには <span class="masked">`float()`</span> 関数を使用します。


```python{.numberLines caption="文字列を実数値に変換するプログラム例"}
%reset -f
print('''時刻 0 において速度 v (m/s) の物体が、
一定の加速度 a (m/s^2) を保ちながら
t 秒間に進む 距離 x (m) を求めます。''')
print()
v = input('速度     v (m/s)   を入力してください  例）10.0 >> ')
v = float(v)
a = input('加速度   a (m/s^2) を入力してください  例）2.0 >> ') 
a = float(a)
t = input('走行時間 t (s)     を入力してください  例）5.0 >> ') 
t = float(t)
x = v*t + 0.5*a*t**2
print()
print(f'v = {v} (m/s), a = {a} (m/s^2), t = {t} (s)')
print()
print(f'走行した距離は {x} (m) です。')
```

- このプログラムは次の計算を実装したものになります。

$$ x(t) = vt+\frac{1}{2}at^2 $$

- 走行した距離について「**小数点以下2桁**」までを表示するようにして修正してください。
  - 前回講義で学んだ f文字列 の [書式指定子](lecture03.html#出力の書式指定)を利用してください。
- 計算式 `x = v*t + 0.5*a*t**2` を `x = v*t + t**2*0.5*a` に書き換えると (第2項の順序を変更すると) 、どのようになるか検証してください。


**<i class="fa-solid fa-comment-dots fa-flip-horizontal"></i>プロンプト例**

> Python の `int()` と `float()` の違いを説明してください。特に、`int('18')`、`int('18.0')`、`float('18')`、`float('18.0')` がそれぞれどうなるか、理由も含めて教えてください。

::: {.note .type-tips}
**三連引用符**

`'''` と `'''` で囲んだ**三連引用符**を使用すると、**長文や改行付きの文字列リテラル**の記述が簡単になります。**三連引用符**のなかでは <span class="masked">改行やスペース</span> がそのまま有効になります。`"""` と `"""` による囲みでも有効です。

次のように変数に格納して使用することもできます ([元ネタ FC版FF1](https://wikiwiki.jp/ffdic/セリフ/【この世界は暗黒に包まれている】))


```python{.numberLines caption="三連引用符の利用"}
%reset -f
msg = '''このせかいは あんこくにつつまれている
かぜはやみ うみはあれ
だいちはくさっていく
しかし ひとびとは１つのよげんをしんじ
それをまっていた
このよ あんこくにそまりしとき
４にんのひかりのせんし あらわれん
ながいぼうけんのすえ
４にんのわかものがこのちにたどりついた
そしてそのてには
それぞれクリスタルがにぎられていた'''
print(msg)
```
:::

::: {.note .type-senior}
**中級者向け: デフォルト値の設定**

次のようにすることで、`input()` の戻り値が「**空文字**」だったときのデフォルト値を設定することができます。

```python{.numberLines caption="文字列を実数値に変換するプログラム例（デフォルト値の設定あり）"}
%reset -f
print('''時刻 0 において速度 v (m/s) の物体が、
一定の加速度 a (m/s^2) を保ちながら
t 秒間に進む 距離 x (m) を求めます。
''')
v = float(input('速度     v (m/s)   を入力してください  例）10.0 >> ') or '10.0') 
a = float(input('加速度   a (m/s^2) を入力してください  例）2.0 >> ') or '2.0') 
t = float(input('走行時間 t (s)     を入力してください  例）5.0 >> ') or '5.0') 
x = v*t + 0.5*a*t**2
print(f'\nv = {v} (m/s), a = {a} (m/s^2), t = {t} (s)\n')
print(f'走行した距離は {x} (m) です。')
```
:::


### 📝演習3 (⌛目標6分)

標準入力から半径 `r` と高さ `h` を与えて「**円柱**」の体積 `V` と表面積 `S` を計算するプログラムを作成してください。

$$ V = \pi r^2 h $$

$$ S = 2\pi r^2 + 2\pi r h $$

なお、$\pi$ (定数) は、**mathライブラリ**から、次のように値を得ることができます。

```python{.numberLines caption="円周率の取得"}
%reset -f
import math
p = math.pi
# print(f'pi={p}') # => pi=3.141592653589793
```

::: {.note .type-caution}

**取り組みにあたっての注意事項**

プログラムを作成するだけでなく「**プログラムを使って正しく計算できているかどうかを検証・確認すること**」も演習に含まれています。

また、現時点では不要ですが、不正な値が入力された場合 (例えば <span class="masked">数値以外の文字列や、負の半径が入力された場合</span>) には、それを検出して <u>適切な処理をすること</u> も求められます。
:::

## コメント

プログラムにおける ***コメント*** とは、コードのなかに **説明や注意事項、開発者の意図などを表すために記すテキスト** です。コメントはプログラムの実行に影響を与えず、**他の開発者** や <span class="masked">未来の自分</span> がコードを理解する助けとして使用されます。

また、**<u>最近では AI から適切な支援を受けるために、処理の意図を伝えるためにも利用</u>** されます。

Python では `#` がコメントを表す記号になります。

Google Colab や VS Code などの開発環境では `Ctrl+/` のショートカットキーで、アクティブ行 (＝カーソルがある) の「**コメントアウト** (コメント化) 」「**アンコメント** (コメント解除) 」を切り替え可能です。


また、範囲選択しておけば、複数行をまとめてコメントアウト／アンコメントすることも可能です。

**<i class="fa-solid fa-comment-dots fa-flip-horizontal"></i>プロンプト例**

> Python の「コメント文」と「コメントアウト」の違いを説明してください。特に、プログラムの説明を書く場合と、デバッグのために一部のコードを一時的に無効化する場合の使い分けを知りたいです。

### 計算式をテストするとき

今回の講義では「標準入力」を取り上げましたが、ノートブック開発環境においては **基本的に標準入力は使用しません**。特に***デバッグ*** (＝プログラムが意図した動作をするようにエラーを取り除いたり、検証したりする作業) では、<span class="masked">実行毎に標準入力から値を与えることは煩雑なので</span>、以下のようにコメントを利用して「標準入力」と「リテラルによる入力（[ハードコーディング](https://www.google.com/search?q=ハードコーディング)）」を切り替えます。

```python{.numberLines caption="標準入力処理をコメントアウトした例"}
%reset -f
print('''時刻0において速度 v (m/s) の物体が、
一定の加速度 a (m/s^2) を保ちながら
t秒間に進む 距離x(m) を求めます。
''')
# v = float(input('速度 v (m/s) を入力してください >> '))
# a = float(input('加速度 a (m/s^2) を入力してください >> '))
# t = float(input('走行時間 t (s) を入力してください >> '))
v = 1.5
a = 2
t = 4
x = v*t + 0.5*a*t**2
print(f'走行した距離は {x} (m) です。')
```

開発中 (＝様々な値を与えて動作を検証するとき) は **第06行目** ～ **第08行目** をコメントアウトして、**第09行目** ～ **第11行目** のように直接的に変数に値を与えます。

一方で、本番環境では、**第06行目** ～ **第08行目** のコメントを解除して、**第09行目** ～ **第11行目** をコメントアウトすることで、ユーザからの入力を受け取ります。


::: {.note .type-senior}

**中級者向け: フォーム機能**

GoogleColab の環境では **フォーム** という機能を使って入力を与えることもできます。

次のコードを実行して、その動作を確認してみてください。

```python{.numberLines caption="フォームの利用例"}
%reset -f
name = '山田'     #@param {type:"string"}
height = 172.5    #@param {type:"number"}
age = 10          #@param {type:"slider", min:10, max:80, step:1}
print(f'{name}さんの身長は{height}で、年齢は{age}歳で、1年後は{age+1}歳になっています')
```

▼ 実行例 ▼

![img](figs/04/colab-05.png)

この **フォーム** の機能は、Google Colab. (Jupyter) 環境で**のみ**使用できます (Python固有の機能ではありません)。詳細については [公式ページ](https://colab.research.google.com/notebooks/forms.ipynb) を参考にしてください。

次のコードを実行して、動作を確認してみてください。

```python{.numberLines caption="高度なフォームの利用例"}
%reset -f
#@markdown # 物理学習支援ツール
#@markdown 時刻 $0$ において速度 $v$ ($\mathrm{m/s}$) の物体が、
#@markdown 一定の加速度 $a$ ($\mathrm{m/s^{2}}$) を保ちながら
#@markdown $t$秒間に進む 距離$x$($\mathrm{m}$) を求めます。

#@markdown 速度 $v$ ($\mathrm{m/s}$) を入力してください 
v = 1.5    #@param {type:"number"}
#@markdown 加速度 $a$ ($\mathrm{m/s^{2}}$) を入力してください 
a = 2    #@param {type:"number"}
#@markdown 走行時間 $t$ ($\mathrm{s}$) を入力してください 
t = 4    #@param {type:"number"}

x = v*t + 0.5*a*t**2
print(f't=0 から t={t} に走行した距離は {x:.2f} (m) です。')
```

:::

## 繰返し構文の利用

Python では次のような構文で n 回の ***繰り返し処理*** ができます。

```python{.numberLines caption="繰返し構文（for構文）"}
%reset -f
n = 5
for i in range(n):
  print('Hello ', end='')
  print('World.')
```

上記を実行すると、以下のように `Hello World.` という文字が5回出力されます。

```
Hello World.
Hello World.
Hello World.
Hello World.
Hello World.
```

Pythonでは、**繰返し処理をする範囲** を <span class="masked">インデント (字下げ)</span> により指示します。

例えば、次のように **第05行目** のインデントを解除して「どのように動作が変化するか」を確認して、「なぜそのようになるか」を考えてみてください。

```python{.numberLines caption="繰返しの適用範囲の確認"}
%reset -f
n = 5
for i in range(n):
  print('Hello ', end='')
print('World.') # 第05行目のインデントを解除
```

ここでは、変数 `n` を使用していますが、次のように `range` の引数に直接、数値リテラルを入れることもできます。

```python{.numberLines caption="繰返し構文 range の指定"}
%reset -f
for i in range(7): # 変数 n を未使用
  print('Hello World.')
```

- 現時点では <i>**ループ変数** `i` がどのような働きをするかは無視して問題ありません</i>。次回以降に解説します。
- 一般に Pythonでは、インデントに <span class="masked">半角スペースを「4個」</span> を使用します。しかし、この授業に限っては **講義資料の可読性を保つために半角スペースを「2個」使って** インデントを表現します。
- インデントは「全角文字スペース」では機能しません。実際に全角スペースを使ってインデントを与えると、どのようなエラーが発生するかを確認してください。

**<i class="fa-solid fa-comment-dots fa-flip-horizontal"></i>プロンプト例**

> Python の `for i in range(5):` の `i` は何ですか？今回は `i` を使わずに繰返しだけしたいのですが、それでも `i` が必要になる理由を初学者向けに説明してください。

### 📝演習4 (⌛目標4分)

繰り返し構文を利用して、次のような文字列出力を得るプログラムを記述してください。

```
AAA
AAA
AAA
BBBB
BBBB
BBBB
BBBB
BBBB
```

- ヒント: <span class="masked">繰返し構文を、独立して2回使用してください。</span>

## タートルグラフィックス

繰り返し構文に到達したので、その応用として **タートルグラフィックス** で遊んでみます。

[タートルグラフィックスの例 ( Google画像検索 )](https://www.google.com/search?q=タートルグラフィックス+例)

タートルグラフィックス (Turtle Graphics) は、プログラミング言語で簡単な「**図形**」や「**アニメーション**」を描画するためのひとつの手法です。Turtle は、そのまま「亀」の意味になります。

::: {.note .type-tips}

**タートルグラフィックス**

タートルグラフィックスの核となる概念は「**タートル**」と呼ばれるカーソルです。タートルは、プログラムによって指示されたとおりに画面上を移動し、<span class="masked">その軌跡に沿って線や図形を描画</span> します。タートルには...

- `x` 歩だけ前進する `forward(x)`
- `x` 歩だけ後退する `back(x)`
- `d` 度だけ左方向に向きを変える `left(d)`
- `d` 度だけ右方向に向きを変える `right(d)`

...などの基本的な操作が用意されており、これらの操作を組み合わせてさまざまな図形を描くことができます。

![img](figs/04/colab-06.png)

タートルグラフィックスは、特に「小学生」や「初心者向け」のプログラミング教育において、視覚的で直感的な理解を促すためによく使用されます。また、**繰り返しや条件分岐などのプログラミングの基本的な概念を学ぶのにも役立ちます**。

1年次の総合工学実験実習で、既に[Scratch](https://scratch.mit.edu/)で同様のことを行なっているハズです。体験入学を含めれば、今回で既に3回目の内容です。

:::

### 準備 (ライブラリの読み込み)

独立したコードセルを作成して、以下を実行してください。以降、**ノートブックを再開するたびに (GoogleColabに再接続するたびに) 実行**してください。


```
!pip install ColabTurtle
```

::: {.note .type-caution}
**注意**

Colab では、ノートブックを閉じたり、一定時間操作しなかったりすると、接続先のランタイムがリセットされることがあります。その場合、一度インストールしたライブラリも再度インストールが必要になるため、**ノートブックを開き直したときは、最初にこのセルを実行してください**。
:::


上記の `!pip install ColabTurtle` は Python プログラムではなく、Colab.を実行している **仮想マシン (Linux) に対する直接的な命令 (コマンド)** になります。このコマンドは、Pythonの <u>パッケージ管理システムである pip</u> を使って、<span class="masked">ColabTurtleというライブラリを仮想マシンにインストールする</span> ために実行しています。

▼ 実行結果 ▼ 

![img](figs/04/colab-07.png)


**<i class="fa-solid fa-comment-dots fa-flip-horizontal"></i>プロンプト例**

> GoogleColab を使って Python プログラミングを勉強しています。「`!pip install ColabTurtle` は Python プログラムではなく、Colab.を実行している 仮想マシン (Linux) に対する直接的な命令 (コマンド) になります」と説明されたのですが、全然分かりません。初学者向けに解説してください。

この「ColabTurtle」は、Google Colab 上でも動作するように [Turtle Graphics](https://pypi.org/project/PythonTurtle/) を実装したライブラリで、簡単な図形やアニメーションを描画するために使われます。

- [Turtle for Google Colab notebooks の リファレンス](https://github.com/tolgaatam/ColabTurtle?tab=readme-ov-file#api)
  - 必ず内容を確認してください。[課題02](#課題02) に取り組む際に必要になります。

### 基本形

ColabTurtleの基本形は以下のようになります。

```python{.numberLines caption="画面の初期化"}
%reset -f
import ColabTurtle.Turtle as t
t.initializeTurtle(initial_speed=5,initial_window_size=(400,400))
t.bgcolor(240,240,240) # 背景白 RGB で指定
```

**第02行目** では `ColabTurtle.Turtle` というモジュール (ライブラリ) を **インポート** して、`t` という略称で扱うことを指示しています。もともとインポートとは「輸入」の意味ですが、ここでは「**自分のプログラムのなかにXXXというライブラリを取り込む**」のようなイメージでとらえてください。

**第03行目** では、`t` (＝ColabTurtle.Turtle の略名) の ***初期化*** (初期設定) をしています。Initialize という語 (初期化という意味) はプログラミングでは頻出するので覚えておいてください。

- `initializeTurtle` メソッド (関数) の**第2引数**の値 `(400,400)` の値を変更して、実行結果が「**どのように変わるか**」を確認してください。

このような指示が与えられたとき、例えば...

- マイナスの値を与えるとどうなるのか🤔 
  - エラーが発生することは予想できるが、どのようなエラー文が出るのか
- 整数値ではなく実数値を与えるとどうなるのか🤔 
- `initializeTurtle(initial_speed=5)` のように省略するとどうなるか🤔 

...といったことを考えて (＝好奇心を持って、興味を持って、疑問を持って)、実際に手を動かして実行して確認できる人が、**最終的には高度なプログラミングスキルを習得できます**。


コピペして実行するという作業**だけ**では十分な成長は期待できません。

#### 補足

上記のプログラムは **第02行目** で `as t` を使わずに以下のように書くこともできます。このようにすると「可読性」が下がり、タイプミスしやすくなるというデメリットがあります。

```python{.numberLines caption="as を使わないで実装"}
%reset -f
import ColabTurtle.Turtle # ここで `as t` をつけていない
ColabTurtle.Turtle.initializeTurtle(initial_speed=5,initial_window_size=(400,400))
ColabTurtle.Turtle.bgcolor(240,240,240) 
```

例えば、**第02行目** で `import ColabTurtle.Turtle as tur` としたら、**第03行目** はどのように記述するべきでしょうか。考えて実際に手を動かして実行してみてください。


**<i class="fa-solid fa-comment-dots fa-flip-horizontal"></i>プロンプト例**

> Python の `import ColabTurtle.Turtle as t` は何をしている命令ですか？`import`、モジュール、`as t` の意味を、初心者向けに分けて説明してください。


### 絶対位置座標を与えてカメを移動させる

次のプログラムを実行して結果を確認してください。

```python{.numberLines caption="goto メソッドによる移動1"}
%reset -f
import ColabTurtle.Turtle as t
t.initializeTurtle(initial_speed=5,initial_window_size=(400,400))
t.bgcolor(240,240,240)
t.goto(50,30) # ここを追加した
```

さらに、次のプログラムを実行して結果を確認してください。

```python{.numberLines caption="goto メソッドによる移動2"}
%reset -f
import ColabTurtle.Turtle as t
t.initializeTurtle(initial_speed=5,initial_window_size=(400,400))
t.bgcolor(240,240,240)
t.goto(50,30)
t.goto(50,100) # 追加
```

「コード」と「実行結果」を突き合わせながら、次のようなことを**推測して、さらに確証を得てください**。プログラミングでは、このように「**サンプルコード**」と「**その実行結果**」から <span class="masked">機能や仕組み、内部動作を推測する・検証する</span> 能力が強く要求されます。この過程では `goto` メソッド (関数) のパラメータを変更したり文を追加したりして、実際に試すこともしてください。また、[リファレンス](https://github.com/tolgaatam/ColabTurtle) も参照してください。

- `goto` メソッドは何をする機能なのか。第1引数に与えた値 `50` はどんな意味を持つのか。第2引数に与えた値はどんな意味を持つか。
- 座標系は、どのように与えられるのか。原点はどこに位置するのか。X軸の正方向はどの向きか、Y軸の正方向はどの向きか。

上記のことが、指示されなくても反射的に、自然にできるようになってください。さらに「<span class="masked">引数に描画領域の範囲外の値を与えるとどうなるのか</span>」「<span class="masked">`goto` メソッドの引数に実数値を与えるとどうなるのか</span>」のような好奇心を持てるようになってください。

**<i class="fa-solid fa-comment-dots fa-flip-horizontal"></i>プロンプト例**

> ColabTurtle の座標系について説明してください。原点の位置、x座標とy座標の向き、数学で習う座標との違いを初学者向けに整理してください。

### ペンの上下/形状/色を操作する、背景色を設定する

次のプログラムを実行して結果を確認してください。また、`shape` メソッド、`bgcolor` メソッド、`color` メソッド、`up` メソッド、`down` メソッドなどの各メソッドがどのような機能を持つのか、引数としてどのような値を持つのかについて、***考える*** や ***試す*** を通して推測し、また、***調べる*** や ***試す*** を通して確証を得てください。

```python{.numberLines caption="ペンの上下/形状/色を変更、背景色を変更"}
%reset -f
import ColabTurtle.Turtle as t
t.initializeTurtle(initial_speed=5,initial_window_size=(400,400))

# ペンの形状をカメ（'turtle'）から円（'circle'）に変更 
t.shape(shape='circle')

# 背景色をセット（RGB指定 0～255）
t.bgcolor(240,240,240)

# ペンの色をセット（RGB指定 0～255）
t.color(0,0,255)
  
t.up() # ペンを持ち上げる
t.goto(50,30)

t.down() # ペンを下ろす
t.goto(50+300,30)

t.hideturtle() # ペン先を非表示
```

### 絶対座標で移動・相対位置指示で移動

次の `p1.py` は絶対座標でカーソルを移動させて正方形を描いています。また `p2.py` は相対位置指示で正方形を描いています。実際に動作させて確認してから、コードを解読してください。

```python{.numberLines caption="p1.py"}
%reset -f
import ColabTurtle.Turtle as t
t.initializeTurtle(initial_speed=5,initial_window_size=(400,400))
t.shape(shape='circle')
t.bgcolor(0,0,0)
t.color(0,255,0)
  
t.up(); t.goto(50,50);t.down() # 50,50に移動

t.goto(350,50)
t.goto(350,350)
t.goto(50,350)
t.goto(50,50)
```

```python{.numberLines caption="p2.py (繰返し構文を使用していない)"}
%reset -f
import ColabTurtle.Turtle as t
t.initializeTurtle(initial_speed=5,initial_window_size=(400,400))

t.shape(shape='circle')
t.bgcolor(0,0,0)
t.color(0,255,0)

t.up(); t.goto(50,50); t.down() # 50,50に移動

t.right(90)
t.forward(300)
t.right(90); t.forward(300)
t.right(90); t.forward(300)
t.right(90); t.forward(300)
```

新しく登場した `right` メソッドについても好奇心を持って...


- <span class="masked">実数値は与えられるのか</span>
- <span class="masked">負の値は与えられるのか</span>
- <span class="masked">360を超える値は与えられるのか</span>
- <span class="masked">もしかして `left` メソッドも存在するのか</span>

...といったことが自然に思い浮かぶように思考回路を変容させて、さらに実際に確認してみる習慣を身に付けてください (指示されなくても...)。

なお、`t.right(90)` は、現在のカメの向きを基準に、90度だけ右を向かせる命令（メソッド）ですが、これに対して `t.face(90)` は現在のカメの向きに無関係に <span class="masked">90度方向（6時方向）を向かせる</span> ための命令になります。`t.right()` と `t.face()` を使い分けられるようになっておいてください。

**<i class="fa-solid fa-comment-dots fa-flip-horizontal"></i>プロンプト例**

> Python の ColabTurtle の `right(90)` と `face(90)` の違いを教えてください。「現在の向きを基準にする」と「絶対的な向きを指定する」の違いが分かりません😭

::: {.note .type-tips}
**1行に複数の文を記述する方法**

Pythonでは原則として１行に1文を記述しますが、**セミコロン** `;` で区切って **１行のなかに複数の文** を記述することができます。

例えば、次の2つのプログラムは同じ意味を持ちます。

```python{.numberLines}
t.up();t.goto(50,50);t.down()
```

```python{.numberLines}
t.up()
t.goto(50,50)
t.down()
```
:::

#### 発展1 (五芒星)

まずは、コードをコピペして実行してから、コードを読解してください。

```python{.numberLines caption="p3.py (繰返し構文を使用していない)"}
%reset -f
import ColabTurtle.Turtle as t
t.initializeTurtle(initial_speed=5,initial_window_size=(400,400))

t.shape(shape='circle');t.bgcolor(0,0,0);t.color(0,255,0)
t.up(); t.goto(400/2,400/2);t.down()

d = 300
t.up()
t.forward(d/2);t.right(36/2)
t.down()
t.right(180-36);t.forward(d)
t.right(180-36);t.forward(d)
t.right(180-36);t.forward(d)
t.right(180-36);t.forward(d)
t.right(180-36);t.forward(d)
```

#### 発展2 (三角形)

まずは、コードをコピペして実行してから、コードを読解してください。

```python{.numberLines caption="p4.py (繰返し構文を使用していない)"}
%reset -f
import ColabTurtle.Turtle as t
t.initializeTurtle(initial_speed=5,initial_window_size=(400,400))

t.shape(shape='circle');t.bgcolor(0,0,0);t.color(0,255,0)
t.up();t.goto(400/2,400/2);t.down()

a = 60
d = 300
t.up()
t.forward(d/2);t.right(a/2)
t.down()
t.right(180-a);t.forward(d)
t.right(180-a);t.forward(d)
t.right(180-a);t.forward(d)
```

- 変数、繰り返し構文を利用すれば「**N角形**」に拡張できることに気づきますか、また、実際に実装できますか。

#### 📝演習5 (⌛目標12分)

- `p2.py` を「変数」や「繰返し構文」を使って書き直してください。
- `p3.py` を「変数」や「繰返し構文」を使って書き直してください。
- `p4.py` を「変数」や「繰返し構文」を使って書き直してください。

### 演習6 (課題02)

タートルグラフィックスを使って、以下の条件で「ラインアート」を作成してください。

- 描画領域のサイズは `(400,400)` または `(800,400)` とすること。
- 移動速度は `initial_speed=13` (最速) とすること。
- 授業で扱っていない構文やライブラリを使用してもよい。ただし、記述したプログラムについて説明を求められたときに、自分で論理を説明できるものだけを使用すること。
  - **NG例**「生成系AIが出力したコードを貼り付けたら、意味は分からないけどきれいな図形が描けた」
  - **NG例**「ネットから拾ったコードを貼り付けて数値を変えてみた (プログラムの内容は理解していないけど)」

#### 過年度の作成例


- 2025年度
  - [学生作品 (タートルグラフィックス) ①](https://colab.research.google.com/drive/12nP9lBtVLszUe8EwKTaz4WMzIj2Uop2R?usp=sharing)
  - [学生作品 (タートルグラフィックス) ②](https://colab.research.google.com/drive/1ujR2QgQCSki4HNtdNu8HH2WfEpmQt-Mb?usp=sharing)
  - [学生作品 (タートルグラフィックス) ③](https://colab.research.google.com/drive/1xxKZ1GBrcIQC7G37zRQ4tyvr93Ax55R0?usp=sharing)
  - [学生作品 (タートルグラフィックス) ④](https://colab.research.google.com/drive/1dXghldT-EhW0jT7odJhv8t1mnOfqnCXn?usp=sharing)
- 2024年度
  - [学生作品 (タートルグラフィックス) ①](https://colab.research.google.com/drive/1hRVWpVo-rwnNEv86WXF8j4A5_TdZJ6IQ?usp=sharing)
  - [学生作品 (タートルグラフィックス) ②](https://colab.research.google.com/drive/1GETjmxKZVuFbxfEY-ucVe7He8h-pbgqN?usp=sharing)
  - [学生作品 (タートルグラフィックス) ③](https://colab.research.google.com/drive/1wAGMFrZaG_2MME9QKMz1i9ktoTEkQAi2?usp=sharing)
  - [学生作品 (タートルグラフィックス) ④](https://colab.research.google.com/drive/1zgNio0j_cvpG4LJdOxvT60e-1ys4OCP5?usp=sharing)
  - [学生作品 (タートルグラフィックス) ⑤](https://colab.research.google.com/drive/1ES6e1RwtsnNWOi8XEY4dQPIskMXMN_X5?usp=sharing)
- 2023年度
  - [学生作品 (タートルグラフィックス) ①](https://colab.research.google.com/drive/1ajfmnLtRTDchw4yMMDnsFbLAI5c3NrC_?usp=sharing)
  - [学生作品 (タートルグラフィックス) ②](https://colab.research.google.com/drive/1k_mfwOGiLrenO3sm-rbcJs7gBpmqYMK7?usp=sharing)



## 課題02

`PG1-第04回講義.ipynb` の共有範囲を「**大阪公立大学 (閲覧可)**」に設定してください。共有の設定手順は[第03回講義](lecture03.html#googlecolabノートブックの共有設定)で解説済みです。

ノートブックの **_先頭_** に「テキストセル」を作成し、次の内容を貼り付け、氏名と出席番号を自分のものに書き換えてください。それにつづけて「ColabTurtleライブラリをインストールするコードセル」「**演習6**のコードセル」の順に配置してください。

```
# **プログラミング1 課題02**

- 出席番号: 99
- 氏名: 高専 太郎 
- 課題02の取組み時間: 約XXX分
```

- ***提出期限*** : 2026年05月24日 (日) 23時00分 (これ以降に確認・評価します)
    - 事前相談なく、提出期限を168時間（＝1週間・7日間）超過して提出されたもの（再提出を含む）は、未提出と同じく「0点」となります。

- ***取組みの目安となる時間*** : **120分**

- ***評価*** :
  - 「8点」を標準として「10点満点」で評価します。
    - 前期中間、前期末、後期中間、学年末の成績評価の際には「重み」が付けられます (例えば、課題01は1倍、課題02は1.5倍して総合するなど)。
  - 課題の採点後は、修正版の再提出・追提出があっても原則として再評価はしません。
  - 共有範囲 (閲覧可) が「大阪公立大学」もしくは「リンクを知っている全員」に設定されていない場合は「0点」となります。指摘を受けて修正しても「3点減」とします。

- ***提出物・提出先*** : GoogleColab ノートブック `PG1-第04回講義.ipynb` の **<u>共有リンク (URL)</u>** を Teams の指定位置に提出してください。手順は [第03回講義で解説済み](figs/03/teams-01.png) です。
  - `.ipynb` の <u>ファイル本体を提出するわけではない</u> ので注意してください。
  - 提出後 (提出期限後) も、<u>採点がフィードバックされるまではノートブックの内容を変更・更新して問題ありません</u>。

### 注意点

次に示す指示に従っていない場合は「減点」となります。

- ノートブックのタイトルは `PG1-第04回講義.ipynb` としてください。英数字と記号はすべて半角としてスペースを含めないでください。
- ノートブックの先頭から順番に、以下 ([見本](figs/04/kadai-02-sample.png)) のようにセルを配置してください。
    1. 出席番号や氏名を記載したテキストセル 
    2. `!pip install ColabTurtle` を記述したコードセル
    3. **演習6** に取り組んだコードセル (実行結果付き)
    4. (授業のなかで取り組んだ「演習」や「メモ」など)
- コードセルの実行結果は消さずに残してください。
- 先頭のテキストセルでは以下に注意してください。
    - 出席番号は、**本年度の出席番号**を半角で記入してください。1～9番の学生はゼロ埋めしてください。例えば、2番の学生は `02` のようにしてください。 
    - 氏名は姓と名の間に半角スペースをいれてください。
    - 取り組み時間は、必ず記入してください。`約XXX分` のまま残さないでください。
- 演習6のコードセルでは、先頭には必ず `%reset -f` を記載してください

#### 意識して欲しいこと

- 提出物 (納品物) として **品質 (クオリティ)** を強く意識して作成してください。これらの提出物は、今後、就職やインターンシップ等の応募・選考に使用する **ポートフォリオ (自身のスキルを示す作品集)** の素材となります。
  - 在学中の学習成果物として採用担当者に見せられないようなもの (やっつけ仕事の適当なプログラム) を作成しないでください。
  - 将来、ソフトウェアエンジニアを目指している学生が、本格的にプログラミング学習を始めて1カ月半が経過、その学習成果として提出するもの（能力やセンスを応募先に評価してもらうもの）として意識して取り組んでください。
- 課題として提出されたコードと出力は、知能情報コースの教員と学生に共有します。また、今後の広報活動 (コースガイダンス、体験入学) などに使用する場合があります。予め了承の上、提出してください。

- 取り組みにあたっては、生成AIを利用しても構いませんが、**生成AIが出力したコードについて構造や処理内容を十分に理解せぬまま提出することがないようにしてください**。

::: {.balloon .char-01 .face-01 .tone-pink}
この課題では「現在の自分の理解や実力を示したコード」「処理の意味や構造を説明でき、自分自身でも再び書けるコード」が求められています。
:::

### 中級者向け

::: {.note .type-senior}
**中級者向け: 再帰処理とタートルグラフィックスの組み合わせ例**

今後、**関数 (再帰処理)**、**条件分岐の構文**、**randomライブラリ**、mathライブラリなどを学習していけば、次のようなプログラムの内容を理解して書けるようになっていきます。興味のある学生は[フラクタル図形](https://www.google.com/search?q=フラクタル図形&tbm=isch)で検索してみてください。


```python{.numberLines caption="フラクタル図形"}
%reset -f
import ColabTurtle.Turtle as t
import math
import random
import matplotlib.pyplot as plt

cm = plt.get_cmap('Wistia',17)

t.initializeTurtle(initial_speed=13,initial_window_size=(400,300))
t.shape(shape='circle')
t.bgcolor('black')
t.color(*map(lambda p:int(p*255),cm(1)[:3]))

t.up(); t.goto(t.window_width()//2,t.window_height()-30);t.down()

color_offset = 0
init_length = 40
init_width  = 15
min_length = 12
max_level = 12

def draw_branch(p, w, v):
  p2 = max(1,int(p + (p * random.randint(-15,15)*0.01)))
  t.down();t.width(w);t.color(*map(lambda p:int(p*255),cm(color_offset+v)[:3]))
  t.forward(p2);
  generate_branch(math.ceil(p2*0.82),math.ceil(w*0.75),v+1)
  t.up();t.back(p2)

def generate_branch(p, w, v):
  if p < min_length or v > max_level:
    return
  else:
    a1,a2 = 20+random.randint(-2,2), 20+random.randint(-2,2)
    t.left(a1)
    draw_branch(p,w,v)
    t.right(a1+a2)    
    draw_branch(p,w,v)
    t.left(a2)

t.face(-90)
t.color(*map(lambda p:int(p*255),cm(color_offset)[:3]))
t.width(init_width+1)
t.forward(init_length)
generate_branch(init_length,init_width,0)
t.color(*map(lambda p:int(p*255),cm(color_offset)[:3]))
t.back(init_length)
```

実行例

![img](figs/04/colab-04.png)

:::