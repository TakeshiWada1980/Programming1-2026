---
var:
  header-title: "2026-2I プログラミング1 第12回 講義資料"
  header-date: "2026年07月13日（月）3時限"
---

# 第12回 2I-プログラミング1

## 準備

- [GoogleColab.](https://colab.research.google.com/?hl=ja) にログイン、もしくは、ローカル環境の Jupyter を起動し、「`PG1-第12回講義.ipynb`」という名前でノートブックを作成しておいてください。
- 授業の冒頭で「小テスト❹」を実施します。筆記用具を準備しておいてください。
- 前回講義で[課題04 (自由課題)](lecture11.html#課題04-自由課題)が出題されています。期限はだいぶ先ですが、計画的に取り組んでください。
    - ***共有URLの提出期限*** : **2026年7月26日(日) 23:00** 
    - ***内容の完成期限*** : **2026年8月9日(日) 23:00** 

## 復習 (リストとnparray)

[前々回](lecture10.html#繰返し構文-ループ変数に小数値を使用したい場合)、[前回](lecture11.html#演習1-目標時間-10分)の講義では、NumPy (ナンパイ) の `np.arange` を使った **繰り返し計算処理** について学びました。基本的かつ様々な場面で利用する処理なので定着させておいてください。

### 練習問題

※ 今回の演習の実装例 (解答例) は [こちら](https://colab.research.google.com/drive/15tykHDbOsAygAeU9-nTMlHjeB9DB-MTo?usp=sharing) を参照してください。

#### 問題 1

次の値を `np.arange` を利用して数値計算せよ。※ 微分積分1の教科書 p.12 の「例1.12」から抜粋。

$$ \sum_{k=1}^{10}(4k-3) $$ 

- 適切に計算できれば <span class="masked">190</span> が求めるはずです。

#### 問題 2

次の級数の和を `np.arange` を利用して数値計算せよ (近似計算で可)。※ 微分積分1の教科書 p.28 の \[6\] から抜粋。

$$ \sum_{n=1}^{\infty}\frac{1}{2^{n-1}} $$ 

- 適切に計算できれば「2」が求めるはずです。
- この問題は <span class="masked">プログラミング (数値計算的なアプローチ) だけでは正解にたどり着けない場面がある例で、数学的理論も必要であることを実感してもらうこと</span> を意図した問題です。

## 辞書 (dict)

Python における ***辞書*** (＝**dict**, Dictionary) は、他のプログラミング言語では <span class="masked">連想配列</span> や <span class="masked">ハッシュ</span>、<span class="masked">ハッシュテーブル</span> と呼ばれているものです。

辞書は「**キー (Key)**」と「**値 (Value)**」の組み合わせを格納する組込み型の**データ構造**で「**キー** (多くの場合は文字列) 」を使って「**値 (Value)**」を高速に参照 (＝取得) できる点に特徴があります。

例えば、辞書は次のように**初期化**して (初期値を設定して)、その後、**キー**を使ってそれに対応する**値**を参照することができます。なお、辞書に使用する括弧は `[ ]` ではなく `{ }` なので注意してください。

下記のプログラムを実行し、その結果を確認してください ([元ネタ](https://www.tv-tokyo.co.jp/yoshihiko/cast/yoshihiko.html))


```python{.numberLines caption="dict01.py"}
%reset -f

# 辞書の【初期化】 keyとvalueを : で区切って与える
player = {
  'name': '勇者ヨシヒコ', # 各ペアはカンマで区切る
  'level': 3,
  'hp': 120,
  'attack': 16,
  '称号': '正義漢', # key には日本語も利用可能
  'items': ['いざないの剣','たびびとのふく','やくそう'] # リストも格納可能
}

# 辞書の値【参照】[] に key を与えて value を参照
print( player['name'] ) # => 勇者ヨシヒコ'
# print( player[name] )   # => 実行時エラー。name という変数は存在しない
```

上記の **第15行目** をアンコメントすると (＝コメントアウトを解除すると) 実行時エラーになることを確認してください。

`player['name']` ではなく `player[name]` のようにしてしまうと、`name` という文字列をキーとするのではなく、`name` という変数を探し、**その変数に格納されている値をキーとして事象の値を参照する処理** になってしまいます。プログラムのなかには `name` という変数は存在しないので、当然ながら NameError が発生します。


もし、`print(player[name])` によって、意図する値を出力したいのなら、その文の前に `name='name'` を記述しておく必要があります。

なお、**f文字列の内部で キー (文字列) を使って辞書の値の参照する場合** は、以下のように「シングルクォーテーション」と「ダブルクォーテーション」を使い分けしてください。

```python{.numberLines caption="f文字列全体をダブルクォートで囲って、内部ではシングルクォートを使用"}
print( f"HP = {player['hp']}" ) # => HP = 120
```

もしくは、次のようにすることも可能です。

```python{.numberLines caption="f文字列全体をシングルクォートで囲って、内部ではダブルクォートを使用"}
print( f'HP = {player["hp"]}' ) # => HP = 120
```

- HPを画面表示するためのコードを `dict01.py` に追加して、その結果を確認してください。
- ダブルクォーテーションだけで記述した `print(f"HP = {player["hp"]}")` のような文を実行するとどうなるか。結果について推測したうえで、実際にコードを実行して検証してください。
- `print(player['mp'])` のように**存在しないキーを与える**とどうなるか。結果について推測したうえで、実際にコードを実行して検証してください。
- `print(player)` を追記し、その実行結果を確認してください。

### 演習1 (<i class="fa-solid fa-stopwatch"></i> 目標時間: 8分)

次のような **期待する出力** が得られるように `dict01.py` の第13行目以降を書き換えてください。

**(期待する出力)**
```
勇者ヨシヒコ (正義漢)
 - Lv : 3
 - HP : 120
 - 持ち物 : いざないの剣, たびびとのふく, やくそう
```

**(ヒント)**

- 「持ち物」の一覧を出力するためには「for文」か「アンパック」を使用します。アンパックは [第10回講義](lecture10.html#演習5-目標時間-10分) 既に学習済みです。
    - for文を利用する場合のヒント :<span class="masked">`for item in player['items'] :
`</span> 
    - アンパックを利用する場合のヒント : <span class="masked">`print( *player['items'], sep=', ' )`</span> 

### 辞書の値 (value) の更新、キーと値のペアの追加

次のプログラムを実行して、その結果を確認してください。また、**その実行結果とプログラムを照らし合わせて、辞書型の特性について理解**してください。必要に応じてコードを書き換えて、その実行結果がどう変化するかを実証的に確認してください。

```python{.numberLines caption="値の更新、キーと値の追加"}
%reset -f

# キーとして 'x' と 'y' を持った辞書の値を「整形表示」する関数を定義
def print_point(p):
  assert type(p) is dict  # 辞書型(dict)であることを確認
  print(f"({p['x']:.1f}, {p['y']:.1f})")

p1 = {} # 空の辞書を作成（辞書の初期化）。「p1=dict()」でも同じ処理になる
p1['x'] = 10  # key:'x'  value:10  の追加
p1['y'] = 20

p2 = {'y':100, 'x':50} # キーは順不同で可
p2['y'] = 40 # 書き換え（上書き）

print_point(p1)
print_point(p2)
```

上記のプログラムの解読を通して、以下のことが分かると思います。

- 関数の引数に「辞書型」を与えることもできる。関数については[第11回講義](lecture11.html#関数-function-初級)で学習済みです。
- **第05行目** のように `type(xxx) is dict` によって、引数として受け取った `xxx` が辞書型かどうかを確認できる。`assert` についても[第11回講義](lecture11.html#アサート文)で学習済みです。
- 変数 `yyy` を「**空のリスト**」として初期化するには `yyy=[]` あるいは `yyy=list()` のように記述しました。これに対して「**空の辞書**」として初期化するには `xxx={}` あるいは `xxx=dict()` のように記述します。
- 関数を利用することでプログラムをすっきりと記述することができます。

#### 定着確認

- 変数 `items` を「空のリスト」として初期化するための文を答えよ。
    - 答え: <span class="masked">list=[]</span> 
- 変数 `player` を「空の辞書」として初期化するための文を答えよ。
    - 答え: <span class="masked">player={}</span> 

### 辞書が特定のキーを持つかチェックする方法

次のようにして、辞書が <span class="masked">特定のキーを持っているか</span> を判定することができます。プログラムを実行して、その結果を確認してください。

```python{.numberLines caption="辞書が特定のキーを持つかをチェックする方法"}
%reset -f
items = { 
  'やくそう':8,
  'どくけしそう':2,
  'ぬののふく':1
}

for x in ['やくそう', 'きえさりそう'] : # ループ変数 x は「やくそう」→「きえさりそう」
  print(f'勇者ヨシヒコは「{x}」を',end='')
  if x in items.keys() : # 辞書型にキー「x」が含まれるか?
    print(f'{items[x]}個もっている。')
  else :
    print('もっていない。')
```


#### 定着確認

- 辞書型のオブジェクト `items` のキーに `'こんぼう'` を含むかどうかを判定する条件式を答えよ。
    - 答え: <span class="masked">`'こんぼう' x in items.keys()`</span> 
- 辞書型のオブジェクト `items` のキーの数を出力する `print` 文を記述せよ。
    - 答え: <span class="masked">`print(len(items.keys()))`</span> 

### 演習2 (<i class="fa-solid fa-stopwatch"></i> 目標時間: 10分)

期待する結果に示すように <span class="masked">辞書が持っているキーと値を全列挙する方法</span> について、ウェブ検索や[生成AI](https://omu.portalai.jp/)などを利用して調べて**理解し**、実際に検証してください (処理の目的が明確なとき、それを自己解決するための演習です) 。

具体的には、次のように初期化された辞書から **期待する結果** を得るようなコードを記述してください。

```python{.numberLines caption="キーと値の全列挙"}
%reset -f

# この関数を書き換える
def print_dict(d):
  assert type(d) == dict
  print('...')

character_status = {
  'name': 'Hiro',
  'level': 10,
  'hp': 100,
  'mp': 30,
  'attack': 15,
  'defense': 10,
  'experience': 0,
}

print_dict(character_status)
```

**(期待する結果)**

```
name       : Hiro
level      :   10
hp         :  100
mp         :   30
attack     :   15
defense    :   10
experience :    0
```

**ヒント** f文字列の書式指定 (左寄せの空白埋め、右寄せの空白埋め) を上手に活用してください。書式指定は[第03回講義](lecture03.html#出力の書式指定)で既に学習済みです。

```python{.numberLines caption="左寄せの空白埋め・右寄せの空白埋めの書式指定子"}
%reset -f
num = 123
print(f'...{num:>10}...')
print(f'...{num:<10}...')
```

#### 定着確認

- 辞書型のオブジェクト `items` のキー (key) を全表示するための `print` 文を記述せよ。
    - 答え: <span class="masked">`print(*items.keys())`</span> 
- 辞書型のオブジェクト `items` の値 (value) を全表示するための `print` 文を記述せよ。
    - 答え: <span class="masked">`print(*items.values())`</span> 


## リストの扱いに関する補足① : for構文との組み合わせ

[第08回講義](lecture08.html#pythonicなリストとfor文の組み合わせ)で学んだように、for構文を使ってリストの全要素を参照するような処理は、次のように記述することができます。

```python{.numberLines caption="loop01a.py (非推奨)"}
%reset -f
items = ['やくそう', 'どくけしそう', 'ひのきのぼう', 'たびびとのふく']
# print(len(items)) # => 4
for i in range(len(items)):
  print(items[i])
```

```python{.numberLines caption="loop01b.py (推奨)"}
%reset -f
items = ['やくそう', 'どくけしそう', 'ひのきのぼう', 'たびびとのふく']
for c in items: # このようにスマートに記述可能
  print(c)
```

上記では、ループ変数 `c` には数値ではなく、リスト `arr` の要素 (つまり「やくそう」「どくけしそう」…) が順番に格納されながら繰返し処理されます。

Python では基本的に `loop01b.py` のような記述が推奨されます。`loop01a.py`の記述は非推奨です。

### Enumerate

リストと繰返しを組み合わせる場合、以下のように「その要素は何番目か」もあわせて出力したい場合があります。

```
1. やくそう
2. どくけしそう
3. ひのきのぼう
4. たびびとのふく
```

このような場合は `enumerate` 関数 (イニューマレイト関数) を利用して次のように記述できます。enumerate は <span class="masked">列挙する</span> という意味になります。実際に実行して、その結果について確認してください。

```python{.numberLines caption="enumerateの利用1"}
%reset -f
items = ['やくそう', 'どくけしそう', 'ひのきのぼう', 'たびびとのふく']
for i,c in enumerate(items): # ここに注目!
  print(f'{i+1}. {c}')
```

さらに、`enumerate` 関数は、**第2引数に初期値を設定可能**で、以下のように記述することもできます。

```python{.numberLines caption="enumerateの利用2"}
%reset -f
items = ['やくそう', 'どくけしそう', 'ひのきのぼう', 'たびびとのふく']
for i,c in enumerate(items,1): # i の初期値を 1 に設定
  print(f'{i}. {c}')
```

`enumerate` 関数は、**利用頻度が高い**ので覚えておくようにしてください ( <span class="masked"> 自分は使う予定がなくても、他人のプログラムを読む場面で出現するので、enumerateの挙動は十分に理解しておいてください </span>)。


### 演習3 (<i class="fa-solid fa-stopwatch"></i> 目標時間: 10分)

下記の「**期待する出力**」が得られるように、次のプログラムを変更・追記し、その実行結果を確認してください。

- ここでは `range` 関数と `len` 関数の組み合わせではなく、`enumerate` 関数の利用を意図しています。
- ここでは `enumerate` の第2引数に、適切な初期値を設定することを期待しています。
- 数値のゼロ埋め方法を忘れてしまった場合は「Python f文字列 書式指定 ゼロ埋め」などで検索してください。

```python{.numberLines caption="演習3"}
%reset -f
codename = ['Coffee Lake Refresh','Comet Lake',
            'Rocket Lake','Alder Lake','Raptor Lake','Meteor Lake']
# ここから先にコードを追加
```

**期待する出力**

```
■ intel デスクトップPC用Coreプロセッサのコードネーム
第09世代 Coffee Lake Refresh
第10世代 Comet Lake
第11世代 Rocket Lake
第12世代 Alder Lake
第13世代 Raptor Lake
第14世代 Meteor Lake
```

## リストの扱いに関する補足② : アンパック

[第10開講](lecture10.html#演習5-目標時間-10分)で簡単に触れていますが `unpack-01a.py` は `unpack-01b.py` のようにスマートに記述することができます。

どちらのプログラムも同じ出力が得られることを確認してください。

```python{.numberLines caption="unpack-01a.py"}
%reset -f
ip_addr = [192,168,110,4]
print(ip_addr[0], ip_addr[1],ip_addr[2],ip_addr[3],sep='.')
```


```python{.numberLines caption="unpack-01b.py"}
%reset -f
ip_addr = [192,168,110,4]
print(*ip_addr,sep='.') # アンパック。リストの先頭の * に注目
```

Pythonにおける **アンパック** または **アンパッキング** とは、リスト内の要素を個々の変数に分割して関数の引数に与える手法を指します。アンパックするためには、変数名の先頭に `*` を与えます。

- `unpack-01b.py` の**第03行目**を `print(ip_addr,sep='.')` のようにした場合 (アスタリスク `*` を付けていない場合) 、どのような出力を得るか。結果について推測したうえで、実際にコードを実行して確認せよ。

## リストの扱いに関する補足③ : スライス

Pythonのリストでは **スライス** という操作により、指定の部分範囲を取得することができます。スライスは `[]` の内部で、コロン `:` を使って、`[開始値:終了値]` のように範囲を表現します。

例えば `arr[2:6]` とした場合、次の図のようにリスト `arr` の「2番目から5番目 (=6-1番目)までの範囲」の部分取得ができます。また、開始値を省略すると「リストの先頭から」となり、終了値を省略すると「リストの末尾まで」の意味になります。

![img](figs/12/slice01.png)

スライスしたものは、**関数の引数などに利用可能**です。例えば、次のプログラムは、<span class="masked">合計</span> を求める組み込み関数 `sum()` の引数に「スライスしたリスト」を与えています。実際に実行して、その結果について確認してください。

```python{.numberLines caption="リストの部分合計を求めるプログラム"}
%reset -f
arr = [10,20,30,40,50,60,70,80]
s1 = sum(arr)
print(f's1 = {s1}') # sum

s2 = sum(arr[:3]) # 0番目から2番目（3番目を含まない）までの合計
s3 = sum(arr[3:]) # 3番目から最後までの合計
s4 = sum(arr[2:6]) # 2番目から5番目までの合計
print(f's2={s2}, s3={s3}, s4={s4}') 
```

- `print(arr[:3])`、`print(arr[3:])`、`print(arr[2:6])` を追記すると、その出力はどのようになるか。結果について推測したうえで、実際にコードを実行して確認してください。
- `arr[:]` とすると、どのようになるか (何らかのスライス処理がされるのか、それとも文法エラーや実行エラーとなるのか、以下同様) 。結果について推測したうえで、実際にコードを実行して確認してください。
- `arr[]` とすると、どのようになるか。
- `arr[:100]` とすると、どのようになるか。
- `arr[3:3]` とすると、どのようになるか。
- `arr[5:3]` とすると、どのようになるか。
- `arr[-1:]` や `arr[-2:]` とすると、どのようになるか。
- `arr[:-1]` や `arr[:-2]` とすると、どのようになるか。
- `arr[2:6:2]` とすると、どのようになるか。


## 文字列に対する１文字参照やスライス処理

「文字列」は「リスト」ではありませんが、「リスト」と同じように `[]` を使って**要素 (=1文字) を参照**したり、**スライス**で部分文字列を取得することができます。半角文字、全角文字、絵文字を含めてPythonでは適切に「1文字」を切り分けることができます。

例えば、変数 `item` に「やくそう」という文字列が格納されている場合...

- `name[0]` で「や」
- `name[0:2]` で「やく」
- `name[-1]` で「う」
- `name[1:]` で「くそう」

...を参照することができます。

ただし、あくまで「**リストと同じように操作できる**」だけで、文字列はリストではないので <span class="masked">`name[0]='ど'`</span> のような操作はできません (薬草を毒草に変えることはできません)。書き換えようとすると、どのようなエラーになるのか実際にコードを書いて確認してください。

以下は、トランプのカードを「スート (♠♦♥♣) 」と「ランク (A234...JQK) 」の **2文字からなる文字列** として表現し、さらに `[]` を使って**「スート」と「ランク」を個別参照している例**です。実際に実行して結果を確認し、**プログラムを解読・理解**してください。

```python{.numberLines}
%reset -f
import random as r
cards = ['♠A', '♠2', '♥3', '♥4','♣Q', '♣K']

print(f'山札は {cards}')

print()
card = r.choice(cards)
print(f'山札から1枚ひいたカードは「{card}」')
print(f'  スートは「{card[0]}」、ランクは「{card[1]}」でした。') 
print()

cards.remove(card)
print(f'よって、現在の山札は {cards}')
```

また、文字列は、次のようにfor文にも使うことができます。

```python{.numberLines}
%reset -f
string = '微分積分１で爆死'
print(' _人人_')
for c in string : # for in (文字列)
  print(f'_) {c} (_')
print(' ^Y^Y^^')
```

## GoogleColab.の出力セルのクリア

Jupyter環境 (Google Colab.) における出力セルは `IPython.display.clear_output()` によって**内容をクリア (消去) すること**ができます。

次のプログラムを実行して、その結果について確認してください。

```python{.numberLines}
%reset -f
import time
import IPython.display # 要インポート

for i in range(5,0,-1):
  print(f'{i}...')
  time.sleep(1) # Arduino の wait に相当。単位は「秒」
  IPython.display.clear_output() # 出力セルの消去

print('🚀')
for i in range(3):
  time.sleep(0.5)
  print('⚡')
```

### 応用例

自由課題のヒントにしてください。

```python{.numberLines}
%reset -f
import time
import random as r
import IPython.display

n=9           # 9回（イニング）までのゲーム委
G = [-1]*n    # スコアの初期化
H = [-1]*n
wait_time = 2 # [Sec]

# チームのスコア #########################
def print_team_score(name,score):
  print(f'{name}|',end='')
  for i in range(n):
    if score[i] != -1:
      print(f'{score[i]:>2}|',end='')
    else :
      print('  |',end='')
  print(f'{sum(score[:t]):>2}|')

# スコアボード全体の出力 #################
def print_score_board():

  IPython.display.clear_output() # 出力をクリア

  print('-+'+'--+'*(n+1))
  print(' |',end='')
  for i in range(1,n+1):
    print(f'{i:>2}|',end='')
  print('計|')
  print('-+'+'--+'*(n+1))

  print_team_score('G',G)
  print_team_score('H',H)

  print('-+'+'--+'*(n+1))

# メイン処理 #############################
for t in range(n):

  # 先攻「G」の攻撃回
  G[t] = r.choices([0,1,2,3],[5,3,1,1])[0]
  print_score_board()
  time.sleep(wait_time)

  # 後攻「H」の攻撃回
  H[t] = r.choices([0,1,2,3],[4,3,2,1])[0]
  print_score_board()
  time.sleep(wait_time)

if sum(H) > sum(G):
  print('😄😄😄😄😄')
else :
  print('😱😱😱😱😱')
```


## 条件式の工夫

ユーザーから入力された文字列が `犬` または `いぬ` または `イヌ` のとき、「**ワン ! **」という文字列を出力する処理を考えます。

この処理 (条件分岐) を素直に記述すると次のようになります。`or` で **OR条件** を表現しています。`or` は [第06回講義](lecture05.html#or条件)で既に学習済みです。

```python{.numberLines}
%reset -f
animal = input('動物名を入力してください : ')
if animal == '犬' or animal == 'いぬ' or animal == 'イヌ' :
  print('ワン!')
else :
  print('・・・')
```

これに対して、(初心者において) **よくある間違い**として、次の**第03行目**のように**不適切な条件式**を記述してしまうことがあります。

```python{.numberLines}
%reset -f
animal = input('動物名を入力してください : ')
if animal == '犬' or 'いぬ' or 'イヌ' : # 不適切な条件式
  print('ワン!')
else :
  print('・・・')
```

上記の条件式 `animal == '犬' or 'いぬ' or 'イヌ'` では「ネコ」を入力した場合でも「**ワン ! **」が出力されてしまいます。実際に実行して結果を確認してみてください。この理由は、if文の **条件式を書く位置** には、単なる「数値」や「文字列」も記述可能で、その場合、特定の値以外では条件が「**真**」として判定されるためです。

実際に確認してみます。以下のプログラムを実行して、その結果を確認してみてください。以下に示す例では、すべての条件が「**真**」として判定され、処理 (`print()`) が実行されています。

```python{.numberLines}
%reset -f
if 'いぬ' :
  print('1')

if 109 :
  print('2')

if -20 :
  print('3')

if 3.14 :
  print('4')

if ['A','B','C'] :
  print('5')

if [0] :
  print('6')

# 次の XXX の部分を自分で思いつく値に変更して実行してみてください。
# if XXXX :
#   print('7')
```

一方で、条件が「**偽**」として判定されるのは、次のように限られた値だけになります。実際に、その実行結果を確認してみてください。

```python{.numberLines}
%reset -f
if 0 :
  print('1')

if 0.0 :
  print('2')

if [] :
  print('3')

if None:
  print('4')

if False :
  print('5')

if '' :
  print('6')
```

以上踏まえ、条件式に `animal == '犬' or 'いぬ' or 'イヌ'` を使用すると、`animal` の内容に関係なく、`いぬ` が「真」となってしまいます。


よって、`animal` が「犬」「いぬ」「イヌ」のいずれかのときだけ「**真**」とするためには、最初に示したように `animal == '犬' or animal == 'いぬ' or animal == 'イヌ' ` と記述するか、[第08回講義](lecture08.html#要素の検索) で学んだように次のようにする必要があります。

```python{.numberLines}
%reset -f
animal = input('動物名を入力してください : ')
if animal in ['犬','いぬ','イヌ'] : # リスト ['犬','いぬ','イヌ'] に anmial は含まれるか?
  print('ワン!')
else :
  print('・・・')
```

## プログラマの心得「前向きな怠惰の思想」

ICTエンジニア (特にプログラマやSE) には「**面倒な作業はラクして簡単に瞬殺で済ませようとする「前向きな怠惰」の姿勢や信念**」が必要です。これは、言い換えれば「**めんどくさいことをしないためならいかなる努力も惜しまない姿勢や信念**」が必要とも言えます。

「関数化できる処理を、関数定義しない」、「変数を使わずに、数値リテラルを使用する」、「同じような処理をfor文を利用せずに記述する」といった姿勢では、プログラミングスキルは一向に伸びませんし、コーディングはいつまでも面倒なままで、楽にも楽しくもなりません。

### 具体的な事例

一般に、自由課題では「**トランプ**」を使ったゲームをテーマにプログラミングに取り組む学生が多いです。

例えば、**52枚のカードの初期化**について、最も愚直な方法は次のようなものです。

```python{.numberLines caption="トランプカードの初期化（Lv.1）"}
%reset -f
# プログラマ的な発想・姿勢に基づかない初期化
cards = ['♠A', '♠2', '♠3', '♠4', '♠5', '♠6', '♠7', '♠8', '♠9', '♠10', '♠J', '♠Q', '♠K',
         '♦A', '♦2', '♦3', '♦4', '♦5', '♦6', '♦7', '♦8', '♦9', '♦10', '♦J', '♦Q', '♦K',
         '♥A', '♥2', '♥3', '♥4', '♥5', '♥6', '♥7', '♥8', '♥9', '♥10', '♥J', '♥Q', '♥K',
         '♣A', '♣2', '♣3', '♣4', '♣5', '♣6', '♣7', '♣8', '♣9', '♣10', '♣J', '♣Q', '♣K']
print(cards)
```

上記のコードを記述に要する時間は、せいぜい3分程度ですが、この3分の面倒を避けるために **プログラムを、考えたり、調べたり、試行錯誤したりすることに1時間、2時間を費やすことができるか** が、プログラミング思考になれているか、否かの指標になります。

このような <span class="masked">めんどくさいことをしないためならいかなる努力も惜しまない</span> ということができれば、上記 `card_init_01.py` は、次のように書けることに気付き、その内容の理解に至ると思います。これにより、このカードの初期化に相当するタスクからは **永遠に解放される** という恩恵を得ることができます。

```python{.numberLines  caption="トランプカードの初期化（Lv.2）"}
%reset -f
# プログラマ的な発想・姿勢に基づく初期化
suit = ['♠','♥','♦','♣']
rank = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
cards = [None]*(len(suit)*len(rank))
t = 0
for s in suit:
  for n in rank :
    cards[t]=f'{s}{n}'
    t+=1
print(f'cards={cards}')
```

さらに、時間を費やせば、次のようなプログラムにできるというところに到達すると思います。

```python{.numberLines  caption="トランプカードの初期化（Lv.3）"}
%reset -f
suit = list('♠♥♦♣')
rank = ['A'] + list(map(str, range(2, 11))) + list('JQK')
cards = [None]*(len(suit)*len(rank))
t = 0
for s in suit:
  for n in rank :
    cards[t]=f'{s}{n}'
    t+=1
print(f'cards={cards}')
```

さらに、時間を費やせば、次のようなプログラムにできるというところに到達すると思います (**ラムダ式**や**map**などを含んだ下記のコードを理解するためには、数時間～十数時間を必要とします、現時点では以下の詳細について必ずしも理解する必要はありません) 。

`itertools.product()` 関数は「情報2」の第12回講義 (データベース関連) で学んだ集合演算の「**直積**」に相当する処理です。

```python{.numberLines  caption="トランプカードの初期化（Lv.4）"}
%reset -f
import itertools
suit = list('♠♥♦♣')
rank = ['A'] + list(map(str, range(2, 11))) + list('JQK')
cards = list(map( lambda x: x[0]+x[1],itertools.product(suit,rank)))
print(f'cards={cards}')
```

### 演習4 (<i class="fa-solid fa-stopwatch"></i> 目標時間: 15分)

次に示すプログラムの Step1 のトランプの初期化を「全52枚」に書き換え、さらに `judge()` 関数を完成させてください。ここでカードは、ランクが大きいほうが強いものとします (ただし、例外的にキングよりもエースが強いものとします)。

また、ランクが同じ場合は、スペード、ハート、ダイヤ、クローバの順で強いものとします (スートではスペードが最強) 。

```python{.numberLines  caption="演習4"}
%reset -f
import random as r

# 引数で受け取った札束の状態を確認する関数
def print_cards (x) :
  assert type(x) is list
  print(f' ※現在の山札は |',end='')
  print(*x,sep='|',end='') # アンパック
  print(f'| の {len(x)}枚 です。')

# c1 が強い場合は「True」, c2が強い場合は「False」を返す関数
def judge(c1,c2):
  assert type(c1) is str
  assert type(c2) is str
  assert c1 != c2
  return True # 現状では常に True を返す関数になっている

## Step1 ####
print(f'トランプの初期化')
cards = ['♠A', '♠2', '♥10', '♥4','♣Q', '♣K']
print_cards(cards)

## Step2 ####
print()
r.shuffle(cards)
print(f'山札をシャッフルしました。')
print_cards(cards)

## Step3 ####
print()
p1 = cards.pop()
print(f'P1が山札から 1枚ひいたカードは |{p1}| でした。 ',end='')
print(f'このカードのスートは「{p1[0]}」、ランクは「{p1[1:]}」です。')
print_cards(cards)

## Step4 ####
print()
p2 = cards.pop()
print(f'P2が山札から 1枚ひいたカードは |{p2}| でした。 ',end='')
print(f'このカードのスートは「{p2[0]}」、ランクは「{p2[1:]}」です。')
print_cards(cards)

## Step5 ####
print()
print('この勝負、P1の「',end='')
if judge(p1,p2) : # 自作関数 judge の呼び出し
  print('勝ち',end='')
else :
  print('負け',end='')
print('」です。')
```

**(中級者向け)** 上記プログラムの Step3 と Step4 は、ほぼ同じ処理といえる。この処理を関数を使ってまとめよ。

ヒント：`draw_card` という関数で、「山札」と「名前(P1やP2)」を与え、引いたカードを返すような関数

## ライブラリのインポートに関する補足

自由課題に取り組む際、様々なウェブを参照すると思います。ウェブに掲載されているサンプルプログラムでは `from math import sin` のように `from` を含んだ **インポートの表記** を見かけると思います。

`from` を使用する場合と、使用しない場合では、以下のように、ライブラリに含まれる **関数の呼び出し** が、若干変わってきます。

```python{.numberLines caption="import01.py"}
%reset -f
# from を使用したimport文
from math import sin,cos
x = sin(0.25)**2 + cos(0.25)**2 # math.は不要
print(x)
```

```python{.numberLines caption="import02.py"}
%reset -f
# from を使用しないimport文
import math
x = math.sin(0.25)**2 + math.cos(0.25)**2 # math.が必要
print(x)
```

- `import01.py` で `math.sin(0.25)` とすると、どのようになるか。結果について推測したうえで、実際にコードを実行して確認せよ。

- `import01.py` で $\sin^{2}(\theta)+\cos^{2}(\theta)+\tan^{2}(\theta)$ を計算したい。どのようにコードを書き換えればよいか。実際にコードを書き換え、その結果について確認せよ。

