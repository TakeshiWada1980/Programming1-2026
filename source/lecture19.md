---
var:
  header-title: "2026-2I プログラミング1 第19回 講義資料"
  header-date: "2026年10月23日 (金) 2時限"
---

# 第19回 2I-プログラミング1

## 概要・連絡

### 連絡事項

- **_課題06_** ( [内容の詳細](lecture18.html#課題06-ポートフォリオ制作) ) の提出期限は 11月12日 (木) 17:00 です。

- 今回の講義では、`IPython.display` という **Jupyter 環境での表示を支援するモジュール**を利用して、**表形式のデータ** ( `DataFrame` 型) を見やすく整形して出力する方法について学びます。そのため、[**Google Colab**](https://colab.research.google.com/?hl=ja) または [ローカル PC に構築した Jupyter 環境](lecture09.html#jupyterの実行) での実行を推奨します。
  - 演習問題の解答例は [こちら](https://colab.research.google.com/drive/1pOtQoizNrAp3zAW0n1KiDTy1jSyF0z2u?usp=sharing) を参照してください。
 
 
### 今回講義の達成目標

- **ラムダ式** (無名関数) を理解して記述することができる。
- ラムダ式と map 関数を組み合わせた処理をリストに対して適用できる。
- Pandas を使って **CSVファイル** の読込みができる。
- Pandas を使って **表形式データ** に対する初歩的な操作や処理ができる。

## 京都大学「プログラミング演習」の教科書

昨年度の「情報1」などでも何度か紹介していますが、京都大学の**全学共通科目**「**プログラミング演習（Python）**」のテキスト（教科書）の**2023年度版**が公開されています。

皆さんの現在の知識やスキルでも十分に取り組める内容だと思いますので、少し背伸びをするつもりで、ぜひ読んでみてください。特に、本科目ではあまり扱っていない**コンピュータサイエンス（計算機科学）に関する内容**も充実しており、学びをさらに深めたい人におすすめです。

- [京都大学「プログラミング演習（Python）」テキスト（2023年度版）](http://hdl.handle.net/2433/285599)

その他のPython関連の公開教材

- [Pythonプログラミング基礎](https://mdsc.kyushu-u.ac.jp/lectures#python_basic) — 九州大学 数理・データサイエンス教育研究センター
- [Pythonプログラミング入門](https://utokyo-ipp.github.io/) — 東京大学 情報基盤センター
- [Python演習1](https://www.gifu-nct.ac.jp/elec/ohashi/python/documents/site/python1/) — 岐阜高専

## ラムダ式

ここでは「**ラムダ式**」というものについて学びます。ラムダ式は <span class="masked">無名関数</span> と呼ばれることもあります。

### 準備: 関数の定義と呼び出し (復習)

[第11回講義](lecture11.html#関数-function-初級) で学んだように、Python では次のように **_関数_** (**Function**) を「**定義**」して、さらに「**呼び出し** (Call)」をすることができます。

```python{.numberLines caption="「関数の定義」と「関数の呼び出し」"}
%reset -f

# 自作関数 add を定義する
def add(a,b):
  c = a+b
  return c

x = 10
y = 20
z = add(x,y) # 自作関数 add の呼び出し (コール)

print(f'z => {z}') # z=> 30 
```

::: {.balloon .char-01 .face-05 .tone-blue}
このプログラムでは、**第04行目** から **第06行目** にかけて `add` という名前の自作関数を「**定義**」しています。

`add` 関数では **引数** (ひきすう) として受け取った2つの値 `a` と `b` を加算して変数 `c` に格納し、それを `return c` で「**戻り値**」としています。ここで `def` は **Define** (「定義」という意味) の略語になります。
:::


**第10行目** では、変数 `x` と `y` を <span class="masked">引数</span> として与えて自作関数 `add` を呼び出して、その <span class="masked">戻り値</span> を変数 `z` に代入しています。

このプログラムを実行すると、次のような結果が得られます。

```
z => 30
```

以上は、7月上旬で学んだ [第11回講義](lecture11.html#関数-function-初級) の「**復習**」であり、以降の解説を理解する大前提になります (ここまでの内容が曖昧だと以降の説明を理解することはできません、第11回に戻って復習してください) 。

- **演習1**: 関数の「定義」が「呼び出し」以降の行に記述されている場合、つまり、**第04行目** ～ **第06行目** の内容が、**第10行目** よりも後に記述されていた場合、どのような結果になるか予想してください。また、実際にコードを書き換えて結果を確認してください。

- **演習2**: 関数 `add` を `add(10,20,30)` あるいは `add(10)` のように呼び出すと (つまり、引数の過不足がある状態で呼び出すと) どのようになるか確認してください。

- **演習3**: 関数 `add` について、**3 個の引数**を受け取り、それらを加算する処理に書き換えてください。
  - たとえば `add(10,20,30)` のように呼び出して、戻り値として `60` を得るように `add` の定義を書き換えてください。

### 関数における変数の省略

前のセクションにおいて、関数 `add` の定義 (**第04行目**から**第06行目**) では、変数 `c` に計算結果を格納し、それを `return c` のようにして「**戻り値**」を明示しました。この処理は、次のように 変数 `c` を作成せずに直接的に記述することができます。つまり <span class="masked">`return 変数`</span> ではなく <span class="masked">`return 式`</span> のように記述することができます。

```python{.numberLines caption="関数の戻り値を式で直接指定"}
%reset -f
# 関数の定義
def add(a,b):
  return a+b # 計算結果を直接 return する

# 関数の呼び出し
z = add(10,20)
```

### 関数を変数に代入する

関数は、次のように **変数に代入 (格納) して、そこから呼び出すこと** ができます。

```python{.numberLines caption="関数を変数に代入して、その変数から関数を呼び出す例"}
%reset -f
def add(a,b):
  return a+b

sum_two_numbers = add        # 関数 add を 変数 sum_two_numbers に代入
print(type(sum_two_numbers)) # => <class 'function'>
z = sum_two_numbers(10,20)   # 注目!
print(f'z => {z}')
```

**第02行目～第03行目** で自作関数 `add` を定義しています。つづいて **第05行目** では、この自作関数 `add` を変数 `sum_two_numbers` に**代入**しています。

::: {.balloon .char-01 .face-01 .tone-pink}
代入の際は、「`=add()`」ではなく「`=add`」のように**記述している点に注意**してください。

もしも、括弧をつけて代入すると「<u>関数そのものを代入</u>」ではなく「<u>関数を実行した結果の戻り値を代入</u>」という意味になってしまいます。
:::

**第07行目** では、`z=sum_two_numbers(10,20)` のように関数を呼び出しています。これは、関数 `add` に `sum_two_numbers` という「**別名**」を与えて、その別名で関数を呼び出していると捉えることもできます。

- 別名を与えた後も、`z = add(10,20)` のように、元の名前を使って関数を呼び出すことができます。

このように、Python では、**数値や文字列と同様に「関数」も変数に代入して利用できます**。これは自作関数に限らず、<span class="masked">各種ライブラリが提供する関数</span> についても同様です。

例えば、`math` モジュールには、ラジアン（弧度法）で表された角度を度（度数法）に変換する関数 `math.degrees` があります。この関数も、次のように `r2d` という**短い別名**を付けて利用することができます。


::: {.balloon .char-01 .face-05 .tone-blue}
`r2d` は「Radians to Degrees」の略です。プログラミングでは、関数名や変数名などで「to」の代わりに「2」を使うことがあります。
:::


```python{.numberLines caption="ライブラリが提供する関数に省略名を与える例"}
%reset -f
import math
r2d = math.degrees  # ここに注目!
print(f'pi/2 は {r2d(math.pi/2):.1f} 度です。')
print(f'pi/4 は {r2d(math.pi/4):.1f} 度です。')
```

::: {.note .type-tips}
**第一級オブジェクト**

Python では、関数も数値や文字列などと同じように、変数に代入したり、他の関数の引数として渡したりできます。このように扱えるものを「**第一級オブジェクト** (First-class Object)」と呼びます。
:::


::: prompts
- Pythonでは「関数は第一級オブジェクト（First-class Object）である」と説明されました。意味が分かりません。あと、関数を第一級オブジェクトとして扱えることに、どのようなメリットがあるのかも教えてください。
:::

### 関数を辞書型やリスト型の要素に使用する

変数に 格納 (代入) できるということは、次のように <span class="masked">「辞書型」や「リスト型」の要素にすることもできる</span> ということになります。以下のプログラムで `calc` という変数は「Calculation (演算)」の略称として使用しています。

```python{.numberLines caption="関数を辞書の 値 (Value) として登録"}
%reset -f
def add(a,b):
  return a+b

def subtract(a,b):
  return a-b

calc = {} # 空の辞書 
calc['加算']=add       # 関数を辞書の「値」として登録
calc['減算']=subtract  # 〃

z1 = calc['加算'](10,20) # 辞書calcから関数を呼び出し
z2 = calc['減算'](10,20) # 〃
print(f'z1 => {z1}')
print(f'z2 => {z2}')
```

- **演習** 上記のプログラムに「**乗算**」をする関数 `multiply` を追加実装して、辞書型の変数 `calc` に追加してください。また、それが問題なく呼び出せることも確認してください。

### ラムダ式 (無名関数)

Pythonには **_ラムダ式_** あるいは **_無名関数_** と呼ばれる**概念・構文**があります。

::: {.balloon .char-01 .face-05 .tone-blue}
ラムダ式 (無名関数) は、Python 固有のものではなく最近のプログラミング言語にも一般的に備えられているものです。この講義では主に「**ラムダ式**」という呼称を使用します。
:::

ラムダ式は、関数定義の構文のひとつで <span class="masked">名前を持たない一時的な関数を定義</span> するための構文です。`lambda` キーワードを使用して定義され、主に「**短い処理の関数**」や「**関数を引数として渡す場合**」に使用されます。ラムダ式には**名前を付ける必要がなく**、つまり、適切な関数名を考えることに悩まされることなく、1行 (ワンライナー) で記述できるため、実務的なコードでは頻繁に使用されます。

ラムダ式を使うと、先ほどのプログラムは次のように記述することができます。ここでは `add` や `subtract` 、`multiply` などの名前を付けた関数定義が不要な点に着目してください。`calc['XX']=` という**代入部分 (右辺) で関数を定義**しています。

```python{.numberLines caption="ラムダ式の利用"}
%reset -f
calc = {}
calc['加算']= lambda a,b : a + b
calc['減算']= lambda a,b : a - b
calc['乗算']= lambda a,b : a * b

z1 = calc['加算'](10,20)
z2 = calc['減算'](10,20)
z3 = calc['乗算'](10,20)
print(f'z1 => {z1},  z2 => {z2},  z3 => {z3}')
```

Python のラムダ式には、<span class="masked">1つの式しか記述できない</span> という制約があります。そのため、**複数の文からなる処理をラムダ式で記述することはできません** (そのような場合は、通常の `def` による関数定義を使用します)。

一方、C# や JavaScript などの言語では、ラムダ式 (JavaScript では「アロー関数」と呼ばれます) のなかに複数の文を記述することができます。

### ラムダ式の記述法

次に示すような **通常の関数定義** ( `func-lambda-01.py` ) と **ラムダ式による関数定義** ( `func-lambda-02.py` ) について相互変換ができるようになっておいてください。

```python{.numberLines caption="func-lambda-01.py"}
def add (a,b):
  return a+b
print(type(add))  # => <class 'function'>
print(add(10,20)) # => 30
```

```python{.numberLines caption="func-lambda-02.py"}
add = lambda a,b : a+b
print(type(add))  # => <class 'function'>
print(add(10,20)) # => 30
```

通常の関数もラムダ式も、定義した後の「型」や「呼び出し方法」は同じです。

::: prompts
- Python のラムダ式について、`def add(a,b): return a+b` と `add = lambda a,b : a+b` を比較しながら、引数・戻り値・呼び出し方を初心者向けに説明してください。また、ラムダ式には1個の式しか記述できないとはどういう意味か、通常の関数定義を使うべき例も示してください。
:::

- **演習**：`add = lambda a,b : a+b` を `add = lambda (a,b) : a+b` に書き換えて実行し、どのような結果になるか確認してください。

## mapとラムダ式の組み合わせ

ラムダ式は、一般に `map` 関数、`filter` 関数、`sorted` 関数、`functools.reduce` 関数などと組み合わせて使用することが多いです。ここでは、最も利用頻度が高いと思われる `map` 関数との組み合わせについて紹介しておきます。

### map関数

Pythonの組み込み関数である `map` は <span class="masked">リストやタプルを構成する個々の要素に任意の関数を適用</span> する機能を提供します。

例えば、次のように「**文字列**」を要素に持つリスト `arr1` があるとします。

```python{.numberLines caption="文字列を要素に持つリスト"}
%reset -f
arr1=['10','20','30','40']
print(type(arr1[0])) # => <class 'str'>
print(arr1)
```

実行結果は次のようになります。`<class 'str'>` と出力されることからも、`['10',...` のように要素がシングルクォーテーションで囲まれて出力されることからも、`arr1` の要素は「文字列型」であることが確認できます。

```
<class 'str'>
['10', '20', '30', '40']
```

次に、この `arr1` の各要素に対して `int()` 関数を適用して「**(文字列を) 整数値に変換したい**」とします (<span class="masked">`a=int('100')` のようにすれば、変数 `a` には整数型の`100` が得られることは学習済みです</span>)。このようにしたいときは、次のように `map` 関数を活用します。

```python{.numberLines caption="map関数の利用（文字列型→整数型）"}
%reset -f
arr1=['10','20','30','40']
# print(type(arr1[0])) # => <class 'str'>
# print(arr1)

# map を適用
arr2 = map(int, arr1)
print(type(arr2))    # => <class 'map'>

# map型をリスト型に変換
arr2 = list(arr2)

print(type(arr2))    # => <class 'list'>
print(type(arr2[0])) # => <class 'int'>
print(arr2)
```

実行結果は次のようになります。

```
<class 'map'>
<class 'list'>
<class 'int'>
[10, 20, 30, 40]
```

以上の結果から、最終的に `arr2` には `[10, 20, 30, 40]` のように整数型を要素に持つリストが得られていることが分かります。また、**第07行目** と **第11行目** はまとめて `arr2 = list(map(int,arr1))` のように1行で書くこともできます (基本的には1行で書くことが多いです)。

```python{.numberLines caption="map関数の利用（文字列型→整数型）"}
%reset -f
arr1=['10','20','30','40']

# map を適用
arr2 = list(map(int,arr1))
print(arr2)
```

ここでは、`map` 関数を使うことで <span class="masked">`for` などの繰り返し構文を使用せずに簡潔に処理が書けていること</span> に注目してください。もし、`for` を使用して同じ処理を実行する場合は、以下のようになります。

```python{.numberLines caption="for構文の利用"}
%reset -f
arr1=['10','20','30','40']

# for を適用
arr2 = []
for a in arr1:
  arr2.append(int(a))
print(arr2)
```

両者を比較すると `map` を使ったほうがシンプルに記述できることが分かります。そのため、実務プログラムでも `map` が多用されます。`map` を使ったプログラムも読めるようになっておいてください。

なお、タプル型で結果を得たい場合は、<span class="masked">`arr2 = tuple(map(int,arr1))`</span> のようにします。

### mapと自作関数の組合せ

先の例では `arr2 = list(map(int,arr1))` のように標準関数である `int` と `map` を組み合わせました。しかし、`map` には標準関数以外にも、次のように**自作関数を組み合わせることができます**。

次のプログラムは、文字列として数値が格納されるリストを対象に、整数型に変換して、さらに値を2倍にする処理を行ないます。実際にプログラムを実行して結果を確認してください。


```python{.numberLines caption="mapと自作関数の組合せ"}
%reset -f

# 値を2倍にする関数
def double(a):
  return a*2

arr = ['10','20','30','40']
arr = list(map(int, arr))   # 標準関数 int を適用し...
arr = list(map(double,arr)) # 自作関数 double を適用
print(arr) # => [20, 40, 60, 80]
```

### mapとラムダ式の組合せ

先の例では、自作関数 `double` を定義して `map` の第1引数に与えましたが、次のように <span class="masked">ラムダ式を直接与えること</span> ができます。実際に以下のプログラムを実行して結果を確認してください。

```python{.numberLines caption="mapとラムダ式の組合せ 1"}
%reset -f
arr = ['10','20','30','40']
arr = list(map(int, arr))
arr = list(map( lambda a : 2*a, arr)) 
print(arr) # => [20, 40, 60, 80]
```

このプログラムは **第03行目** と **第04行目** をまとめて次のように書くこともできます。

```python{.numberLines caption="mapとラムダ式の組合せ 2"}
%reset -f
arr = ['10','20','30','40']
arr = list(map( lambda a : int(a)*2, arr)) 
print(arr) # => [20, 40, 60, 80]
```

なお、`map` を使わずに記述すると、次のような**繰返し構文を含むプログラム**となります。

```python{.numberLines caption="mapと自作関数の組合せ"}
%reset -f
arr = ['10','20','30','40']
for i in range(len(arr)):
  arr[i] = int(arr[i])*2
print(arr) # => [20, 40, 60, 80]
```

### 三項演算子とラムダ式

いま、「何らかの計測実験で電流」を測定したとします。本来、その実験では電流は「非負の値」となるはずですが、ノイズの影響で稀にマイナスの値も計測されてしまうという問題があります。このため、**マイナスの計測値は全て「0.0」に書き換えたいという要求**があるとします。

このような処理は、自作関数と `map` 関数の組み合わせで実現できます。プログラムを実行して、意図した結果が得られるか確認してください。

```python{.numberLines caption="mapと自作関数の組合せ"}
%reset -f
def clip_negative(a):
  if a >= 0:
    return a
  else :
    return 0.0

arr = [2.3, 0.2, -1.9, 1.8]
arr = list(map(clip_negative,arr)) 
print(arr) # => [2.3, 0.2, 0.0, 1.8]
```

この処理を「ラムダ式」を使って記述することを考えます。しかし、既に述べたように Python のラムダ式は <span class="masked">１つの式しか含めることができず、複数行にわたる文を含むこと</span> はできません。上記の `clip_negative` 関数は**条件分岐**を含み、複数の文から構成されており、そのままラムダ式として記述することはできません。

このようなとき、**条件式（三項演算子）** を使用することでラムダ式にできる場合があります。

### 条件式 (三項演算子)

条件式 (三項演算子) は、`a = [真のときの値] if [条件] else [偽のときの値]` という形式で記述します。そして、次のように動作します。

1. `[条件]` を評価します。
1. 評価が `True` であれば `[真のときの値]` が返され変数 `a` に代入されます。
1. 評価が `False` であれば `[偽のときの値]` が返され変数 `a` に代入されます。

具体的な記述を見たほうが分かりやすいです。既に学習済みですが `%` は割った「余り」を求める演算子です。つまり、`dice%2==0` は <span class="masked">2で割ったときの余りは 0 であるか?</span> の意味になります。次のプログラムを実行して動作を確認してください。

```python{.numberLines caption="条件式 (三項演算子) の例"}
%reset -f
import random as r
dice = r.randint(1,6) # 1～6の整数乱数
a = '丁(偶数)' if dice%2==0 else '半(奇数)' # 条件式 (三項演算子)
print(f'賽の目 {dice} で {a} です')
```

この条件式を使えば、先ほどのプログラム (リストに含まれる負の値を 0.0 にする) は次のように記述することができます。

```python{.numberLines caption="条件式 (三項演算子) の利用 1"}
%reset -f
def clip_negative(a):
  b = a if a >= 0 else 0.0  # 条件式 (三項演算子) で記述
  return b

arr = [2.3, 0.2, -1.9, 1.8]
arr = list(map(clip_negative,arr)) 
print(arr)
```

さらに、関数 `clip_negative` の変数 `b` を省略して次のように記述できます。

```python{.numberLines caption="条件式 (三項演算子) の利用 2"}
%reset -f
def clip_negative(a):
  return a if a >= 0 else 0.0  # 注目

arr = [2.3, 0.2, -1.9, 1.8]
arr = list(map(clip_negative,arr)) 
print(arr)
```

ここまでくれば、関数 `clip_negative` を**ラムダ式で記述できること**に気付いたと思います。条件式 (三項演算子) を含むラムダ式と `map` 関数を組み合わせたプログラムを次に示します。実行して動作を確認してください。

```python{.numberLines caption="条件式 (三項演算子) を含むラムダ式"}
%reset -f
arr = [2.3, 0.2, -1.9, 1.8]
arr = list(map( lambda a : a if a >= 0 else 0.0, arr)) # 注目
print(arr)
```

条件式 (三項演算子) を使用すると**可読性は犠牲になるものの**プログラムを劇的に短くすることができます。

::: {.note .type-tips}
**標準関数 max**

標準関数の `max` を使用すると上記の処理はよりシンプルに記述できます。`max` は与えられた引数のうち、大きいほうの値を返す標準関数 (インポート不要) です。例えば `a = max( -1.2, 0.0 )` とした場合は、変数 `a` には `0.0` が格納されます。

```python{.numberLines}
arr = list(map( lambda a : max(a,0.0), arr))
```

`max` 関数には「3つ以上の引数を与えること」や「リスト形式で1個の引数を与えること」もできます。同様に、引数のうちもっとも小さい値を返す `min` 関数もあります。

:::


**演習**: `arr1` には100点満点の「成績」が格納されている。60点未満を「不合格」、60点以上を「合格」として **第04行目** のような値が得られるようにプログラムを記述してください。

```python{.numberLines caption="演習"}
%reset -f
arr1 = [60, 70, 45, 55, 90]
arr2 = 0    # ここを書き換え
print(arr2) # => ['合格', '合格', '不合格', '不合格', '合格']
```

なお、次のような解答は期待していません (ここでは `map`、ラムダ式、条件式を使用することを期待しています) 。

```python{.numberLines }
%reset -f
arr1 = [60, 70, 45, 55, 90]
arr2 = []
for a in arr1:
  if a >= 60:
    arr2.append('合格')
  else:
    arr2.append('不合格')
print(arr2) # => ['合格', '合格', '不合格', '不合格', '合格']
```

## Pandas入門

[前回講義](lecture18.html#pandas-を使った-csv-excel-ファイルの読み込み) で学習したように **_Pandas_** (**パンダス**) は「**表形式データ**」の操作や処理を得意とするライブラリ (モジュール) です。CSV/Excelをはじめとした様々な表形式データの読込みや書出し、表形式データの操作や処理を効率的かつ高速に実行する機能を提供します。

また、Pandas は、Pythonを使った **データ分析** や <span class="masked">機械学習 (マシンラーニング)</span> の **前処理** のための「定番ツール」であり、多くの場合、数値計算ライブラリ「**NumPy**」と可視化ライブラリ「**Matplotlib**」と組み合わせて使用されます。特に「データサイエンティスト」や「AIエンジニア」にとって Pandas はほぼ必須ツールになります。

::: {.note .type-tips}
**データサイエンティスト・AIエンジニア**

データサイエンティスト、AIエンジニアの「**業務内容や将来性**」「年収」「適性 (向いている人)」「関連資格」などは、下記を参考にしてください。なお、高専卒業後に大学編入して**大学院まで**進むことで、これらの職に就ける可能性が高くなります (チャンスや機会に恵まれるようになります)。

- **データサイエンティスト** @ キャリアガーデン
  - https://careergarden.jp/data-scientist/
- **AIエンジニア** @ キャリアガーデン
  - https://careergarden.jp/ai-engineer/

:::

### CSVファイルの読込み

[前回講義](lecture18.html#pandas-を使った-csv-excel-ファイルの読み込み) でも体験したように Pandas ライブラリを使用すると CSVファイル のデータを `DataFrame` 型として、プログラムのなかに簡単に取り込むことができました。

以下に [score-1.csv](data/19/score-1.csv) を「**DataFrame型**」として読込み、その内容を表示するプログラムを示します。なお、ウェブからのファイルダウンロードに使用する `requests` ライブラリは、Pythonの標準ライブラリ (モジュール) ではありません。そのため、実行時に <span class="masked">`ModuleNotFoundError: No module named 'requests'`</span> が生じたら <span class="masked">`pip install requests`</span> で当該ライブラリをインストールしてください (**GoogleColab環境ではデフォルトでインストールされています**)。

```python{.numberLines caption="CSVファイルの読込みと確認"}
import os
import requests  # ウェブからファイルをダウンロードする際に利用
import pandas as pd

# CSVファイルをウェブから取得してカレントフォルダに保存
url = 'https://takeshiwada1980.github.io/Programming1-2025/data/19/score-1.csv'
res = requests.get(url)
# print(type(res)) # => <class 'requests.models.Response'>

if res.status_code != 200:
  raise Exception(f'ファイルのDLに失敗。強制終了します。Code:{res.status_code}')

fn = 'score-1.csv'
with open(fn,'wb') as file: 
  file.write(res.content)

# CSVファイルの読込み
assert os.path.isfile(fn)
df = pd.read_csv(fn,encoding='utf-8')
# print(type(df)) # => <class 'pandas.core.frame.DataFrame'>

# データフレームの整形出力
display(df)
```


- **第03行目**では、Pandas ライブラリ (モジュール) をインポートしています。**慣例的に Pandas は** `pd` **という省略名で使用します**。インポートの際は `pandas` のように**小文字**で表記することに注意してください。

- **第07行目** では、指定したURLに「**HTTP GET リクエスト**」を送り、その結果 (レスポンス) を変数 `res` に格納しています。`res` という変数名は <span class="masked">response (応答)</span> の略語としてよく利用されます。変数 `res` は `requests.models.Response` 型のオブジェクトになります。

- **第10行目～第11行目** では、変数 `res` の [HTTPステータスコード](https://www.google.com/search?q=HTTPステータスコード) を確認しています。ステータスコードは「**3桁の数字**」から構成され `200` は「OK」を意味します。ここでは `200` **以外**のステータスコードが返ってきた場合には<span class="masked">「エラー」としてプログラムを強制終了するようにしています</span>。`raise Exception(...)` は、この強制終了に関連した **例外処理** というものに関連する命令です (詳しくは今後の講義で扱います)。
  - ステータスコードとして知っておいてほしいものとしては `404` の「**Not Found**」、`401` の「**Unauthorized**」、`500` の「**Internal Server Error**」などがあります。

- **第13行目～第15行目** では、`score-1.csv` という名前でファイルを **バイナリ書き込みモード** (`wb`モード) でオープン (新規作成) して、ウェブから取得した内容 (`res.content`) を書き込んでいます。実行後、以下の図のようにColabのカレントフォルダに `score-1.csv` が出力されていることを確認できます。

![img](figs/19/vscode_01.png)

- **第19行目** では、Pandas の `read_csv` 関数を使って「CSVファイル」を読み込み、**DataFrameオブジェクト**として変数 `df` に格納しています (<span class="masked">慣例的に Pandas のサンプルコードでは、DataFrameオブジェクトに `df` という変数名をつけます</span>)。なお、CSVファイルに「日本語」が含まれ、その文字コードが **ShiftJIS** の場合は、引数に `encoding='cp932'` を指定します。 

- **第23行目** では、`df` の内容を**整形して表示**しています。この `display` 関数は、Jupyter や GoogleColab で有効です。それ以外の Python 環境では `print(df)` を使用してください。

上記のプログラムを実行して動作を確認してください。

::: prompts
- Pandas を学び始めたところです。CSVファイルと DataFrame の違い、`df = pd.read_csv(fn, encoding='utf-8')` の処理内容、`display(df)` と `print(df)` の表示の違いを、初心者向けに説明してください。Jupyter や GoogleColab と、通常の Python スクリプトで使える表示方法の違いも教えてください。
:::

- **演習1**: `display(df)` を `print(df)` に書き換えて動作を確認してください。
- **演習2**: **第19行目** で `encoding='cp932'` のように引数を指定するとどのようになるか確認してください。

### 型の確認

DataFrameオブジェクトでは「**列単位**」で型 (type) が**統一**されます。通常、型はファイル読み込み時に最適なものが自動設定されます。各列の「**型**」は、次のように DataFrameオブジェクトの `dtypes` **プロパティ** を使って確認できます。

```python{.numberLines caption="DataFrameオブジェクトの各列の「型」の確認"}
%reset -f
import pandas as pd

fn = 'score-1.csv'
df = pd.read_csv(fn,encoding='utf-8') # 'score-1.csv' を読み込み
print(df.dtypes)
```

実行結果は次のようになります (実際に実行して確認してください) 。最終行の `dtype: object` は無視して構いません。

なお、本資料の型の表示例は Pandas 2.x の標準設定に基づいています。Pandas 3.0 以降では、文字列を含む列の型が `object` ではなく `str` と表示されますが、以下の処理は同じように進められます。

```
ID      int64
氏名     object
性別     object
国語      int64
数学     object
英語      int64
理科      int64
社会    float64
備考     object
dtype: object
```

この表示例では、文字列を含む「**氏名**」「**性別**」「**備考**」に加えて <span class="masked">「欠」という文字列を含む「数学」</span> も `object` となっています。「数学」の列を数値として集計するには、文字列の「欠」を欠損値に置き換え、列の型を数値型に変換する必要があります。

また、列要素のすべてが「**整数**」に変換できる場合、型は `int64` になります。これは「**64ビットの整数型**」を意味しており $-2^{63}$ から $2^{63}-1$ までの整数値を扱うことができます。なお、$2^{63}-1$ は <span class="masked">9,223,372,036,854,775,807</span> となります。

::: {.balloon .char-01 .face-02 .tone-yellow}
列要素に「**実数値 (小数)**」を含む場合、型は `float64` になります。「**社会**」の列には「洞木 ヒカリ」の成績 `90.5` を含むため `float64` となります。

このような数値の列では、整数と小数が混ざっていると、<span class="masked">小数を扱える `float64` 型に統一</span> されます。型が `float64` の場合、整数値であっても `90.0` のように小数部のついた表示となります。 
:::

DataFrame に対して、各種操作 (列同士の計算などを含む) をするためには、不適切な値を修正したり、計算対象の列を数値型に変換したりしておく必要があります。これらの処理を **_前処理_** (**Preprocessing**) と言います。

### 準備: インデックスの設定

Pandas における **インデックス (index)** とは「**行**」を特定するためのラベルです。現時点ではインデックスとして **0** から **7** が自動的に設定されています。例えば、値を修正する場合には、**この「インデックス」と「列名」を用いて位置を特定**します。そのため、<span class="masked">分かりやすい値をインデックスとして設定しておくこと</span> が推奨されます。

現在の「インデックス」は「ID」とも値がずれており、分かりづらい (混乱しやすい) ものとなっています。以降の作業のために「氏名」をインデックスに設定していきたいと思います。

![img](figs/19/df-index-01.png)

次のプログラムの **第06行目** のようにDataFrameオブジェクトの `set_index` メソッドを使って **任意の「列」をインデックスに置き換えること**ができます。

```python{.numberLines caption="インデックスの設定"}
%reset -f
import pandas as pd

fn = 'score-1.csv'
df = pd.read_csv(fn,encoding='utf-8')
df.set_index('氏名',inplace=True) # 列「氏名」をインデックスに設定
display(df)
```

実行結果は次のようになります。「氏名」がインデックスになりました。なお、**第06行目** は `df = df.set_index('氏名')` のように記述することもできます。

![img](figs/19/df-index-02.png)

- **演習1**: **第06行目** を `df.set_index('氏名')` に書き換えるとどのようになるか確認してください。
- **演習2**: **第06行目** を `df = df.set_index('氏名')` に書き換えるとどのようになるか確認してください。
- **演習3**: **第06行目** を `df = df.set_index('氏名',inplace=True)` に書き換えるとどのようになるか確認してください。

::: {.note .type-tips}
**inplaceオプション**

DataFrameオブジェクト のメソッドには `set_index` の他に `inplace` **オプション**を指定できるものがいくつか存在します。基本的には `inplace=False` が**デフォルト**であり、オプションを明示的に指定しない場合は、これ (`inplace=False`) が適用されます。

`inplace=True` を**指定せず** `df.set_index('氏名')` とすると、変更を加えた**新しい DataFrame オブジェクトが生成され**、それが戻り値として返されます。このとき、元々の DataFrameオブジェクト である `df` には変更は加えられません。変更後の DataFrame オブジェクトを使用するためには `df2 = df.set_index('氏名')` のように新しい変数 (例えば `df2` など) に割り当てるか、`df = df.set_index('氏名')` のように **元の変数に上書きする必要** があります。

一方で、`inplace=True` を指定すると、元々の DataFrame オブジェクト `df` を **直接変更** します。つまり、`set_index` メソッドは「戻り値」を返さず (何もないことを意味する `None` を戻り値として返して)、元の `df` が変更されます。
:::

### 前処理: 欠損値の設定

「綾波 レイ」の「数学」の成績は、現状で「**文字列**」の「欠」となっています。「欠」という文字列は、人間から見れば「**(欠席によって) 成績が存在しない**」ということが分かりますが、コンピュータ (=Pandasライブラリ) にはそのようには認識されません。

::: {.balloon .char-01 .face-01 .tone-pink}
一般に「欠」や「-」「空白」のような記号で表記される **欠損値** (Missing Data) は、Pandas では NumPy の `np.nan` を使って与えます。また、そのように与えられた欠損値は、整形出力された表では「**NaN** (**Not a Number**)」のように表示されます。
:::

次のプログラムは、「綾波 レイ」の「数学」の成績を「欠」という文字列から、NaN (=`np.nan`) へと書き換える例です。DataFrame オブジェクトは `df.loc['綾波 レイ','数学']` のように <span class="masked">`df.loc[インデックス名,列名]`</span> で値の参照/書き換えができます。

```python{.numberLines caption="欠損値(NaN)の設定"}
%reset -f
import pandas as pd
import numpy as np   # 要インポート

fn = 'score-1.csv'
df = pd.read_csv(fn,encoding='utf-8')
df.set_index('氏名',inplace=True)
df.loc['綾波 レイ','数学'] = np.nan  # インデックスと列名で位置を指定して値を変更
display(df)
```

実行結果は次のようになります。「欠」であったものが「NaN」に変わっていることが確認できます。

![img](figs/19/df-nan-01.png)

なお、DataFrame 内に「欠」が**多数存在する場合**、上記の `df.loc['綾波 レイ','数学'] = np.nan` のように1個1個の位置を指定することは非常に面倒です。そのような場合は `df.replace('欠', np.nan, inplace=True)` のようにして一括処理ができます。Replaceは「置き換える」の意味です。

- **演習1**: **第08行目** を `df.replace('欠', np.nan, inplace=True)` に書き換え、その結果について確認してください。
- **演習2**:「洞木 ヒカリ」の「理科」の成績を `75` に修正してください。
  - 解答例 <span class="masked">`df.loc['洞木 ヒカリ','理科'] = 75`。</span>

### 前処理: 型の変換

現状で「国語」「英語」「理科」の型は `int64`、「社会」の型は `float64` ですが、「数学」はまだ文字列を含む列の型 (`object`、Pandas 3.0 以降では `str`) になっています。「5科目の合計点」などを求めるために、まず「数学」を数値型に変換する必要があります。ここでは扱いを分かりやすくするため、5科目の型を全て `float64` にそろえます。なお、`int64` と `float64` の列同士は、そのままでも計算できますが <span class="masked">`int64` では `NaN` を扱えない</span> ため、欠損値を含む「数学」には `float64` を使います。

型の変換には `astype` メソッドを利用します (`astype` には `inplace` オプションはありません)。また、以降の処理で「**ID**」と「**備考**」の列は不要なので、ここで**削除** (Drop) もしておきます。

```python{.numberLines caption="型の変換と不要列の削除"}
%reset -f
import pandas as pd
import numpy as np

fn = 'score-1.csv'
df = pd.read_csv(fn,encoding='utf-8')
df.set_index('氏名',inplace=True)
df.loc['綾波 レイ','数学'] = np.nan

# 列の型変換
df['国語'] = df['国語'].astype(float) # int64  -> float64
df['数学'] = df['数学'].astype(float) # object -> float64
df['英語'] = df['英語'].astype(float) # int64  -> float64
df['理科'] = df['理科'].astype(float) #  〃

# 不要列の削除
df.drop(['ID','備考'], axis='columns', inplace=True)

print(df.dtypes)         # 各列の型確認
display(df)              # 内容確認
df.to_csv('score-2.csv') # 保存
```

上記の実行結果は次のようになります。「**ID**」と「**備考**」の列が削除され、各科目の成績をあらわす列の型が `float64` になっていることが確認できます。**第17行目** での **不要列の削除** では `axis='columns'` を指定していますが、これを指定しないと <span class="masked">「列」ではなく、「ID」や「備考」というインデックスの「行」を削除しようと</span> するため注意してください。

また、**第21行目** では、DataFrameオブジェクト の `to_csv` メソッドを使って、前処理した内容を `score-2.csv` として保存しています。カレントフォルダに CSVファイル が生成されていることも確認してください。 

```
性別     object
国語    float64
数学    float64
英語    float64
理科    float64
社会    float64
dtype: object
```

::: {.note .type-tips}
**複数の列をまとめて型変換**

次のようにリストを使って、複数の列について同時に「型変換」をすることができます。

```python{.numberLines}
# 列の型変換
subjects = ['国語','数学','英語','理科']  # 対象の列名のリスト 
df[subjects] = df[subjects].astype(float)
```
:::

### 要約統計量の確認

Pandas の機能を使って「データ概要」を把握してみます。

まずは、**前処理後に保存したデータ** (`score-2.csv`) を再読み込みして、そのデータの「**型**」と「**内容**」について念のために確認します。次のプログラムの **第04行目** のように `index_col` を指定すると <span class="masked">指定した列がインデックスとして使用される</span> ようになります。

```python{.numberLines caption="インデックスとして使用する列を指定する読込み"}
%reset -f
import pandas as pd
fn = 'score-2.csv'
df = pd.read_csv(fn,encoding='utf-8',index_col='氏名')
print(df.dtypes)
display(df)
```

実行すると、各列の型情報とともに、次のように「氏名」がインデックスに設定された DataFrameオブジェクト の内容が確認できるはずです。

![img](figs/19/df-index-03.png)

これらについて、基本的な「**要約統計量**」を計算して出力させてみます。これには、DataFrameオブジェクトの `describe` メソッドを使用します。

```python{.numberLines caption="要約統計量の確認"}
%reset -f
import pandas as pd
fn = 'score-2.csv'
df = pd.read_csv(fn,encoding='utf-8',index_col='氏名')
display(df.describe()) # 要約統計量の表示
```

実行結果は次のようになります。なお、デフォルトでは**小数点以下の表示桁数が大きく見づらい**ため、必要に応じて **第05行目** を `display(df.describe().round(1))` のように書き換えてください。`.round(1)` メソッドで、小数部が1桁になるような丸め処理がされます。

![img](figs/19/df-describe-01.png)

各行の項目は、次のような意味となります。

- **count** - データの個数 (`NaN`を含めない個数)
- **mean** - 算術平均
- **std** - 標準偏差（データの「ばらつき」の度合い）
- **min** - 最小値
- **25%** - 第1四分位数 (データを小さい方から並べたときの 25% 地点の値) 
- **50%** - 中央値（メディアン）、第2四分位数 
- **75%** - 第3四分位数 (データを小さい方から並べたときの 75% 地点の値)
- **max** - 最大値

mean (平均値計算) などでは `NaN` が除外されていることが確認できると思います。

### 簡易グラフ出力

DataFrameオブジェクト は <span class="masked">内部的に Matplotlib を呼び出して簡易的なグラフを描画する機能</span>を持っています。ただし、DataFrame オブジェクトに「日本語テキスト」を含むときは、グラフに日本語を表示するために [japanize-matplotlib](https://pypi.org/project/japanize-matplotlib/) をインポートする必要があります。

もし、`ModuleNotFoundError: No module named 'japanize_matplotlib'` が発生する場合は、次のように japanize-matplotlib を pip でインストールしてください。

```
!pip install japanize_matplotlib
```

GoogleColab 環境では、**独立したコードセル**で `!` を先頭に付けて、ライブラリのインストールができます。

![img](figs/19/pip-01.png)

次のように `df.plot.barh()` メソッドにより、簡易的な棒グラフを描画することができます。 

```python{.numberLines caption="簡易的な棒グラフの描画"}
%reset -f
import pandas as pd
import japanize_matplotlib # 日本語対応
fn = 'score-2.csv'
df = pd.read_csv(fn,encoding='utf-8',index_col='氏名')
df.plot.barh() # 水平の棒グラフ (簡易)
```

実行すると次のようなグラフが出力されます。

![img](figs/19/df-chart-01.png)

また、**第06行目** を `df.plot.box()` にすると、次のような **箱ひげ図 (ボックスプロット)** を描画することができます。英語の「〇」印は **外れ値** を表します。なお、箱ひげ図の読み取り方法は、「情報1」の第11回講義で学習済みです。

![img](figs/19/df-chart-02.png)

- **演習** `import japanize_matplotlib` をコメントアウトしてプログラムを実行するとどのようになるか確認してください。

::: {.note .type-senior}
**美しく体裁を整えたグラフを描画するためには…**

DataFrameオブジェクトの `plot.xxxx()` メソッドでは、Pandas の内部で Matplotlib が呼び出されグラフが描画されます。ごく簡単にグラフを描画できますが、その**体裁について細かな設定や調整をしたい場合**は、次のように <span class="masked">Matplotlib 側から DataFrame オブジェクトを参照</span> してグラフを描画する必要があります。

![img](figs/19/df-chart-03.png)

```python{.numberLines caption="整形されたグラフ-1"}
%reset -f
import numpy as np
import pandas as pd
import japanize_matplotlib
import matplotlib.pyplot as plt

fn = 'score-2.csv'
df = pd.read_csv(fn,encoding='utf-8',index_col='氏名')

n = len(df) 
w = 1.2
cmap = plt.get_cmap('Pastel2')
fig,ax = plt.subplots(dpi=120,figsize=(8,5))
ax.axvline(60,c='tab:pink',lw=5,zorder=1)
for i,subject in enumerate(['国語','数学','英語','理科','社会']):
  ax.barh( np.arange(n)+(w*i/n)-w*2/n, df[subject].values, height=w/n, 
          label=subject, color = cmap(i),edgecolor='black',linewidth=0.5)
ax.set_yticks(np.arange(n),df.index)
ax.invert_yaxis()
ax.tick_params(axis='y',length=0)
ax.tick_params(axis='x',direction='in')
ax.legend(loc='upper left', bbox_to_anchor=(1,1), frameon=False)
ax.grid(axis='x',ls='--')
ax.set_axisbelow(True)
plt.tight_layout()
plt.savefig('df-chart-03.png',dpi=150)
plt.show()
```

---

![img](figs/19/df-chart-04.png)

```python{.numberLines caption="整形されたグラフ-2"}
%reset -f
import numpy as np
import pandas as pd
import japanize_matplotlib
import matplotlib.pyplot as plt

fn = 'score-2.csv'
df = pd.read_csv(fn,encoding='utf-8',index_col='氏名')

fig,axis = plt.subplots(dpi=120,figsize=(9,7),ncols=3,nrows=3)
for i,ax in enumerate(axis.flatten()):
  if i < len(df) :
    ax.axhline(60,lw=2,c='tab:pink',zorder=1)
    ax.bar(df.columns[1:],df.iloc[i][1:], edgecolor='black',
           linewidth=0.75, color=plt.get_cmap('Pastel2').colors)
    ax.tick_params(axis='x',length=0)
    ax.tick_params(axis='y',direction='in')
    ax.set_ylim(0,100)
    ax.set_yticks(range(0,101,20))
    ax.grid(axis='y')
    ax.set_axisbelow(True)
    ax.set_title(df.index[i])
  else :
    ax.axis('off')

plt.tight_layout()
plt.savefig('df-chart-04.png',dpi=150)
plt.show()
```

:::

### DataFrameのサブセットの取得

DataFrame から**特定の列や行を選択して作成されるオブジェクト**を (DataFrameの) **サブセット**と言います (サブセットとは数学の用語で「部分集合」を意味します)。

例えば、性別と理系科目の列だけを選択したサブセット `df2` は、次のように作成できます。

```python{.numberLines caption="特定の列を含むサブセットの取得-1"}
%reset -f
import pandas as pd
fn = 'score-2.csv'
df = pd.read_csv(fn,encoding='utf-8',index_col='氏名')
df2 = df[['性別','数学','理科']] # サブセットの作成
display(df2)
```

実行すると次のようになります。なお、**第05行目** を `df2 = df['性別','数学','理科']` のように **間違えて書く人が多い** ので注意してください (この場合、どのようになるか確認してみてください)。

![img](figs/19/df-subset-01.png)

また、列の指定は、次のように変数を経由して行なうこともできます。また、このサブセットの作成を利用することで <span class="masked">列の順番を並べ替え</span>したり、<span class="masked">不要な列を削除</span> したりすることもできます。

```python{.numberLines caption="特定の列を含むサブセットの取得-2"}
%reset -f
import pandas as pd
fn = 'score-2.csv'
df = pd.read_csv(fn,encoding='utf-8',index_col='氏名')
subjects = ['理科','英語','数学','国語','社会']
df2 = df[subjects]  # リストを与えて特定列のサブセットを作成
display(df2)
```

また「行」については以下のように **スライス** を使ってサブセットを取得することができます。スライスについては [第17回講義](lecture17.html#スライス) で学習済みです。

```python{.numberLines caption="行の指定によるサブセット取得"}
%reset -f
import pandas as pd
fn = 'score-2.csv'
df = pd.read_csv(fn,encoding='utf-8',index_col='氏名')
df2 = df.iloc[3:]  # ゼロオリジンで3行目以降を取得
display(df2)
```
### 集計処理

ここでは、DataFrame オブジェクト を対象に「合計」や「平均」などを求める集計処理を行なう方法を紹介します。DataFrame オブジェクト の各種メソッドを使うことで、繰返し構文を使わずに処理できる点に着目してください。

まずは、各学生について、国語・数学・英語・理科・社会の「5科目」の試験成績に対して「合計 (Sum)」、「平均 (Mean)」、「欠点科目数」を求めてみたいと思います。

次のプログラムを実行してみてください。

```python{.numberLines caption="集計処理.py"}
%reset -f
import pandas as pd

fn = 'score-2.csv'
df = pd.read_csv(fn,encoding='utf-8',index_col='氏名')

subjects = ['国語','数学','英語','理科','社会'] 
df['合計'] = df[subjects].sum(axis='columns')
df['平均点'] = df[subjects].mean(axis='columns')
df['欠点科目数'] = (df[subjects] < 60).sum(axis='columns')
display(df)
```

実行結果は、次のようになります。

![img](figs/19/df-01.png)

**第08行目** では、DataFrame に「合計」という「**列**」を新規に作成して、そこに各科目の点数の合計を格納しています。`df[subjects].sum(axis='columns')` は `df[['国語','数学','英語','理科','社会']].sum(axis='columns')` の意味であり、「国語」「数学」「英語」「理科」「社会」の「**列** (`columns`)」を対象に合計 (`sum`) を求める処理になります。`sum` メソッドのオプションで `axis='columns'` を指定しないと <span class="masked">行方向 (縦方向) の合計を求める処理</span> になってしまうので注意してください。また、このオプションは `axis=1` のように数字で指定することもできます。

**第09行目** では、同様の考え方で `mean` メソッドを使って「**平均**」を求める処理をしています。`sum` や `mean` の他に、最大値を求める `max` メソッド、最小値を求める `min` メソッド、<span class="masked">中央値</span> を求める `median` メソッドなどがあります。

なお、`sum` や `mean` は、標準では欠損値 (`NaN`) を除外して計算します。そのため、数学が欠損値の「綾波 レイ」の平均点は、残りの4科目の平均になります。

---

**第10行目** では「**60点未満の科目数**」をカウントしています。この部分は、やや複雑なので **第10行目** を以下のように分解して、2段階で考えていきます。

```python{.numberLines caption="解説1.py"}
df2 = df[subjects] < 60
display(df2)
df['欠点科目数'] = df2.sum(axis='columns')
```

`解説1.py` の **第01行目** では `df[subjects] < 60` の結果を `df2` に代入し、**第02行目** では整形出力しています。出力の結果、`df2` は次のような内容を持った DataFrameオブジェクト であることが分かります。

![img](figs/19/df-02.png)


::: {.balloon .char-01 .face-05 .tone-blue}
`df2` のなかで `True` となっている箇所は、元々の `df` で値が「60未満」だった箇所です。例えば、鈴原トウジの国語が `True` になっているのは、元々の `df` で `40.0` であったためです。

このように DataFrame オブジェクトに比較演算子を適用すると ( `df[subjects] < 60` のようにすると)、真偽値の DataFrame オブジェクトが生成されます。
:::

`解説1.py` の **第03行目** では、真偽値を値に持った `df2` に対して `df2.sum(axis='columns')` として、列方向 (横方向) の合計を求めています。`sum` や `mean` などのメソッドで、`True` は「1」、`False` は「0」として扱われます。これにより、欠点科目数のカウントができています。

ここで、`NaN < 60` は `False` になるため、この例では欠損値は欠点科目数に含めません。

---

- **演習1**: `集計処理.py` の第08行目を `sum(axis=1)` としても同じ結果が得られることを確認してください。また `sum(axis='rows')` あるいは `sum(axis=0)` とすると、どのような結果になるか確認してください。

- **演習2**:「理系科目平均」と「文系科目平均」という列を作成し、適切な値が表示されるようにしてください。小数点以下の桁数も適切に表示するようにしてください。
  - **解答例**: <span class="masked">`df['理系科目平均'] = df[['理科','数学']].mean(axis='columns').round(1)`</span>
  - **解答例**: <span class="masked">`df['文系科目平均'] = df[['国語','英語','社会']].mean(axis='columns').round(1)`</span>

- **演習3**:「欠点率」という列を作成し、適切な値が表示されるようにしてください。
  - **解答例**: <span class="masked">`df['欠点率'] = (df[subjects] < 60).sum(axis='columns')/5*100`</span>

<br>

(参考)

![img](figs/19/df-03.png)

### ラムダ式を使った変換

DataFrameオブジェクト の `map` メソッドを使うと、DataFrame内の「各要素」に対して「任意の関数 (ラムダ式)を適用すること」ができます。`map` は、元の DataFrameオブジェクトを **変更せず**に、新しい DataFrameオブジェクト を戻り値として返します。

以下のプログラムは `map` メソッドを使って **60点未満を「不合格」、60点以上を「合格」という文字列** に置き換えた `df2` という DataFrameオブジェクト を作成・整形出力する例です。ここでは `lambda p: '合格' if p >=60 else '不合格'` という条件式を含んだ「ラムダ式」を利用しています。

ただし、欠損値 (`NaN`) に対する `p >= 60` の比較結果も `False` になるため、この例では欠損値も「不合格」になります。

```python{.numberLines caption="合格・不合格.py"}
%reset -f
import pandas as pd

fn = 'score-2.csv'
df = pd.read_csv(fn,encoding='utf-8',index_col='氏名')

subjects = ['国語','数学','英語','理科','社会']
df2 = df[subjects].map(lambda p: '合格' if p >=60 else '不合格' )
display(df2)
# display(df) # df は影響を受けていない。
```

実行結果は次のようになります。

![img](figs/19/df-04.png)

なお `print(df2.dtypes)` を実行すると次のようになります (各列の型が `float64` から、文字列を含む列の型である `object`、Pandas 3.0 以降では `str` になっていることが確認できます)。

```
国語    object
数学    object
英語    object
理科    object
社会    object
dtype: object
```

- **演習** 90点以上を「秀」、90点未満80点以上を「優」、80点未満70点以上を「良」、70点未満60点以上を「可」、60点未満を「不可」のような文字列に置き換えた DataFrameオブジェクト `df3` を作成し、出力してください。なお、**このような多段階の条件分岐をラムダ式で扱うことは適切ではないので、通常の関数定義を利用してください**。
  - **ヒント**: 上記の `合格・不合格.py` をラムダ式を使用せずに通常の関数定義を使って記述すると、次のようになります。

```python{.numberLines caption="合格・不合格2.py"}
%reset -f
import pandas as pd

def grade_converter(p):
  if p >= 60 :
    return '合格'
  else :
    return '不合格'

fn = 'score-2.csv'
df = pd.read_csv(fn,encoding='utf-8',index_col='氏名')

subjects = ['国語','数学','英語','理科','社会']
df2 = df[subjects].map(grade_converter)
display(df2)
```

## 大学編入試の問題に挑戦 (1)

大学編入学 (学力選抜) の情報系学科の **専門試験** では <span class="masked">C言語を用いたデータ構造とアルゴリズム</span> に関する問題がよく出題されます。

「**C言語**」については3年生の前期科目「**プログラミング2**」で詳しく学びますが、その基本文法は「**マイクロコンピュータ**」の授業で既に学んでいるはずです。さらに「データ構造とアルゴリズム」は **特定のプログラミング言語に依存しない** ため (つまり、これまでに本科目で Python言語 を用いて学んできた内容を応用できるため)、<span class="masked">現段階でも十分に解答できる問題</span> が多数あります。

以下に紹介する問題は [豊橋技術科学大学 情報・知能工学課程](https://cs.tut.ac.jp/) の令和5年度の [編入学試験問題](https://www.tut.ac.jp/exam/entrance/past.html) から抜粋したものです。即答できる問題ではありませんが、PCを道具に使って取り組めば、**現時点でも十分に解ける内容**となっています。

---

リスト1 は, 3つの変数, `a` と `b` と `M` のそれぞれにある自然数を入力として与えたとき, 変数の値を出力する **C言語プログラム** である。以下の空欄 **[A]** ～ **[C]** に入れる適切なものを答えよ。ただし, int型は 32bit であるとし, 扱う自然数はint型で表現できるものとする。

> リスト1において, `a` に4, `b` に2, `M` に5を入力したとき, 19行目の `n` の値は **[A]** である。また, `a` に4, `b` に8, `M` に5を入力したとき, 19行目の `n` の値は **[B]** である。また, `a` に 4, `b` に256, `M` に5を入力したとき, 19行目の `n` の値は **[C]** である。 

```c{.numberLines caption="リスト1 (C言語プログラム)"}
#include <stdio.h>

int main(void){

  int i, a, b, M;
  int n = 1;

  printf("自然数を入力:");
  scanf("%d", &a);
  printf("自然数を入力:");
  scanf("%d", &b);
  printf("自然数 M を入力:");
  scanf("%d", &M);

  for(i=1; i<=b; i++) {
    n=(a*n)%M;
  }

  printf("n = %d\n",n);

  return 0;
}
```

実際の試験ではPC（各種言語の実行・開発環境）を使用することはできません（紙と鉛筆、頭だけを用いて解答する必要があります）。しかし、**入試勉強として取り組む際には**、単に問題を眺めて挑むのではなく <span class="masked">PCを使って実際に手を動かしてコーディング・実行し、それを通じて理解を深め、思考力を鍛えること</span> を**強く推奨**します。上記の問題であれば **第16行目の直後** (`for` 文のブロック内) に、ループ毎の変数値を出力する文を追加することは非常に効果的です。

::: {.balloon .char-01 .face-02 .tone-yellow}
C言語の実行開発については、昨年度の「**情報1**」の第10回講義で紹介しているように [Paiza.IO](https://paiza.io/ja) などのウェブブラウザから利用可能なオンライン型のC言語の実行開発環境を利活用してください。

- Paiza.IO で試すときは、`scanf("%d", &a);` の部分は `a=4;` のように書き換えて実行することをお勧めします。
:::


また、C言語プログラム を Pythonプログラム に移植することで、「理解が深化する」「勘違いに気づく」「実装力が鍛えられる」といった効果があります。一見すると遠回りのように思えるかもしれませんが、**実際には非常に効果的で効率的な学習法**です。

