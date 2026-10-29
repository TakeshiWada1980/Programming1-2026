---
var:
  header-title: "2026-2I プログラミング1 第20回 講義資料"
  header-date: "2026年10月30日 (金) 2時限"
---

# 第20回 2I-プログラミング1

## 概要・連絡

### 連絡事項

- 次回、「小テスト」を実施します。鉛筆と消しゴムを持参してください。
  - 出題範囲は今回講義の「**定着確認**」です。Pythonの基礎文法に関する内容です。
- **_課題06_** ( [内容の詳細](lecture18.html#課題06-ポートフォリオ制作) ) の提出期限は、日本時間〔JST/UTC+9〕の **11月12日 (木) 17時** です。Teamsの「提出ボタンの押下忘れ」などに注意してください。
  - **_提出先_** Teamsの「PG1-課題06」です (作成済み)。 
  - 実際の採点 (評価) は早くても、11月16日 (月) の 16時以降です。

### 今回講義の達成目標

- NumPy を利用してベクトルと行列に関する基本的な演算ができる。
- 行列を使用して、2次元平面上の図形の移動、拡大縮小、回転の処理ができる。
- 位置、速度、加速度をベクトルとして扱い、物体運動についてシミュレートできる。

![img](figs/20/vec-08.svg)

物体運動のシミュレーションの応用例です。

![img](figs/20/sim-03.gif)


## 定着確認

以下、**小テストの練習問題**です (このままの内容や形式で出題されるわけではありません)。

- 次のプログラムを実行して標準出力に `0, 1, 2, 3, 4, 5, 6, 7, ` を得たい。【A】に記述すべきコードを答えよ。**答え:** <span class="masked">`i in range(8):`</span>

```python{.numberLines}
for 【A】
  print(i,end=', ')
```

- 次のプログラムを実行したとき、変数 `d` の値が **4 以上 8 未満** であれば標準出力に `はずれ` を得たい (それ以外のときは `あたり` を得たい)。【A】に記述すべきコードを答えよ。**答え:** <span class="masked">`4 <= d < 8 :`</span>

```python{.numberLines}
import random as r
d = r.randint(1,10)
if 【A】
  print('はずれ')
else :
  print('あたり')
```

- 次のプログラムを実行したとき、変数 `d` の値が **4 または 8** であれば標準出力に `はずれ` を得たい (それ以外のときは `あたり` を得たい)。【A】に記述すべきコードを答えよ。**答え:** <span class="masked">`d == 4 or d == 8 :`</span>

```python{.numberLines}
import random as r
d = r.randint(1,10)
if 【A】
  print('はずれ')
else :
  print('あたり')
```

- 次のプログラムを実行したとき、標準入力から与える文字列を **浮動小数点数型** として変数 `x` に得たい。【A】に記述すべきコードを答えよ。**答え:** <span class="masked">`float(input())`</span>

```python{.numberLines}
x =【A】
```

- 次のプログラムを実行したとき、下記の (期待する結果) のような標準出力を得たい。【A】に記述すべきコードを答えよ。**答え:** <span class="masked">`i in range(len(items)):`</span>

```python{.numberLines}
items = ['銅の剣','薬草','毒消し草','布の服']
for 【A】
  print(f'{i}. {items[i]}')
```

(期待する結果)

```
0. 銅の剣
1. 薬草
2. 毒消し草
3. 布の服
```

- 次のプログラムを実行したとき、下記の (期待する結果) のような標準出力を得たい。【A】に記述すべきコードを答えよ。**答え:** <span class="masked">`enumerate(items):`</span>

```python{.numberLines}
items = ['銅の剣','薬草','毒消し草','布の服']
for i, p in 【A】
  print(f'{i}. {p}')
```

(期待する結果)

```
0. 銅の剣
1. 薬草
2. 毒消し草
3. 布の服
```


- 次の関数 `func` を呼び出したとき、仮引数 `a` が「整数型」でなければアサートによってプログラムを強制終了したい。【A】に記述すべきコードを答えよ。**答え:** <span class="masked">`assert type(a) == int`</span>

```python{.numberLines}
def func(a, b, c):
  【A】
  x = (2*b+c)%a
  return x
```

- 次のプログラムを実行したとき、リスト `arr` の **2番目から5番目までの要素** を変数 `s` に合計し、標準出力に `s=180` を得たい。【A】に記述すべきコードを答えよ (ただし、スライスを利用すること)。**答え:** <span class="masked">`sum(arr[2:6])`</span>

```python{.numberLines}
arr = [10,20,30,40,50,60,70,80]
s =【A】
print(f's={s}') 
```

- 次のプログラムを実行したとき、標準出力に `pi=3.142` を得たい。【A】に記述すべきコードを答えよ。**答え:** <span class="masked">`pi:.3f`</span>

```python{.numberLines}
pi = 3.141592653589
print(f'pi={【A】}') 
```

## NumPy の基礎 (復習を含む)

**NumPy** (**ナンパイ**/**ナムパイ**) の基礎については [第17回講義](lecture17.html#numpy) で学びました。今回は、それを前提とした解説になります。もし、以下の説明が分からない場合は、[第17回講義](lecture17.html#numpy) に戻って学んでください。

また、2年生の通年科目「**ベクトル・行列**」で現時点までに学んでいる内容が概ね理解できている前提の解説になります。

### 初期化

NumPy では **ndarray 型オブジェクト** により、**ベクトル** (Vector) や **行列** (Matrix) を表現しました。例えば、以下のような 行列$A$ (2行3列) と 行列$B$ (3行2列)は、`np.array` の引数に [2次元リスト](lecture13.html#二次元リスト) を与えて**初期化**することができました。

$$ A = \begin{bmatrix} 20 & 30 & 40 \\ 50 & 60 & 70\end{bmatrix}\ \ \ \ B = \begin{bmatrix} 20 & 50 \\ 30 & 60 \\ 40 & 70 \end{bmatrix} $$

```python{.numberLines caption="ndarray型の初期化"}
%reset -f
import numpy as np  # numpy をインポート 

A = np.array([[20,30,40],[50,60,70]])   # 2次元リストを与えて初期化
B = np.array([[20,50],[30,60],[40,70]])

assert type(A) == np.ndarray  # 型を確認 
assert type(B) == np.ndarray
```

**第07行目** と **第08行目** では、変数 `A` と `B` が「**ndarray型**」であることを (念のために) 確認しています (`assert` は [第11回講義](lecture11.html#アサート文)、`type()` も [第11回講義](lecture11.html#どうやって型を確認するのか) で学習済みです)。もし「ndarray型」でなければ <span class="masked">AssertionError</span> が発生しプログラムは強制終了します。

Python標準の「リスト」と違い、**ndarray型オブジェクト** は<span class="masked">全要素が同じデータ型</span> である必要があります。初期化の際、引数として与える**リストに異なる型が混在する場合**、NumPy は自動的に型を変換してndarrayオブジェクトを生成します。

例えば、要素に「整数」と「浮動小数点数」が混在している場合、全ての要素を「浮動小数点数」に変換します。ndarrayオブジェクトが持つ要素の型は `dtype` プロパティで確認することができます。**プロパティ** とは、`.` でアクセスできる <span class="masked">オブジェクト内部の変数のようなもの</span> と考えてください (詳しいことは、**クラス (Class)** に関する講義で説明します)。

```python{.numberLines caption="型の確認"}
%reset -f
import numpy as np
A = np.array([[20,30,40],[50,60,70]])
print(f'A.dtype => {A.dtype}')  # A の要素の型を確認 
print(A)
```

実行結果は次のようになります。

```
A.dtype => int64
[[20 30 40]
 [50 60 70]]
```

`A.dtype` により、ndarrayオブジェクトである `A` が持っている「要素の型」が `int64` であることが確認できます (ローカル環境 (Windows環境) で実行している場合は `int32` になる場合があります)。これは `np.array()` で初期化する際に与える引数 (例えば `[[20,30,40],[50,40,30]]` ) によって自動的に決定されています。もし、型を明示的に指定したい場合は `np.array()` に `dtype` オプションを指定します。

```python{.numberLines caption="型を指定した初期化"}
%reset -f
import numpy as np
A = np.array([[20,30,40],[50,60,70]],dtype=float)
print(f'A.dtype => {A.dtype}')  # A.dtype => float64
print(A)
```

実行結果は次のようになります。

```
A.dtype => float64
[[20. 30. 40.]
 [50. 60. 70.]]
```

`A.dtype` が `float64` に変わっていることが確認できます。また、`print` 関数で出力した場合の要素の形式も `20` から `20.` になっていることが確認できます。`20.` は `20.0` の省略表記です。

### 各次元ごとの要素数の確認

ndarray型のオブジェクトは、次のように `shape` プロパティを使って **各次元ごとの要素数**、つまり、次元数が **2** であれば <span class="masked">何行何列の行列なのか</span> という情報を **タプル型** で得ることができます。具体例を以下に示します。

```python{.numberLines caption="行列の初期化"}
%reset -f
import numpy as np
A = np.array([[20,30,40],[50,60,70]])
B = np.array([[20,50],[30,60],[40,70]])

a_shape = A.shape
b_shape = B.shape
print(f'a_shape => {a_shape}  type(a_shape)=> {type(a_shape)}')
print(f'b_shape => {b_shape}  type(b_shape)=> {type(b_shape)}')
```

実行結果は次のようになります。

```
a_shape => (2, 3)  type(a_shape)=> <class 'tuple'>
b_shape => (3, 2)  type(b_shape)=> <class 'tuple'>
```

これより、変数 `A` は**2行3列**の行列 (=$2\times3$ 型行列)、変数 `B` は<span class="masked">3行2列 (=$3\times2$ 型行列)</span>の行列であることが分かります。なお、`a_shape` はタプル型なので `a_shape[0]` で「**行**」の数を、`a_shape[1]` で「**列**」の数を整数型として得ることができます。

```python{.numberLines caption="行列形状の確認"}
%reset -f
import numpy as np
A = np.array([[20,30,40],[50,60,70]])
assert type(A.shape) == tuple
assert type(A.shape[0]) == int
print(f'Aは「{A.shape[0]}行{A.shape[1]}列」の行列です。')
```

上記のプログラムを実行すると標準出力に `Aは「2行3列」の行列です。` を得ることができます。

#### 演習1

次に示す ndarrayオブジェクト `A` から `D` の `shape` プロパティの値を確認せよ (値を標準出力せよ)。

```python{.numberLines}
%reset -f
import numpy as np
A = np.array([[20,30,40],[50,60,70]])
B = np.array([[[10,20],[30,40]],[[50,60],[70,80]],
              [[20,10],[40,30]],[[40,50],[80,70]]])
C = np.array([10,20,30])    # 注意 C≠D
D = np.array([[10,20,30]])  # 注意 C≠D
```

#### 演習2

ndarrayオブジェクトは `ndim` プロパティを持ち、そこから配列の「**次元数**」を整数型で得ることができる。**演習1** で示した **ndarrayオブジェクト** `A` から `D` の `ndim` プロパティの「型」と「値」を確認せよ (結果を標準出力せよ)。

### 転置行列

ndarrayオブジェクトは `T` プロパティで「**転置行列** (Transposed Matrix) 」を得ることができます。例えば、行列 $B$ の**転置行列** $B^\top$ (あるいは分野によっては $^{t}B$ のように表記 ) は、`B.T` により得ることができます。


$$ B = \begin{bmatrix} 20 & 50 \\ 30 & 60 \\ 40 & 70 \end{bmatrix}\ \ \ \ B^\top = \begin{bmatrix} 20 & 30 & 40 \\ 50 & 60 & 70\end{bmatrix} $$

```python{.numberLines caption="'T'プロパティによる転置行列の取得"}
%reset -f
import numpy as np
B = np.array([[20,50],[30,60],[40,70]]) # 3行2列の行列

B2 = B.T  # Bの転置行列を取得して B2 に代入
print(B2)
print(f'B2.shape => {B2.shape}')
```

実行結果は次のようになります。

```
[[20 30 40]
 [50 60 70]]
B2.shape => (2, 3)
```

m行n列の行列 (=$m\times n$ 型行列) の転置は <span class="masked">n行m列 ($n\times m$ 型)</span> になります。

### 行列の積

ndarrayオブジェクト `A` と `B` の **_積_** (**Matrix product**) は、`np.dot(A,B)` あるいは `A@B` により計算ができます。

なお、演算子 `*` を使って <span class="masked">`A*B`</span> のようにコードを記述すると **アダマール積** (**Hadamard product**) の計算処理になるので十分に注意してください。

#### **アダマール積** (Hadamard product)

**アダマール積**は、以下のように**同じサイズの行列**に対して <span class="masked">要素ごと (成分ごと) の積</span> をとる計算となります (要素の添え字 $e_{ij}$ はプログラムの世界にあわせて **ゼロオリジン** にしています) 。数学上の記号としては <span class="masked">$\circ$ や $\odot$</span> が使われることがあります。

$$ A\odot B = \begin{bmatrix} a_{00} & a_{01} \\ a_{10} & a_{11} \end{bmatrix}\odot \begin{bmatrix} b_{00} & b_{01} \\ b_{10} & b_{11}\end{bmatrix} = \begin{bmatrix} a_{00}\cdot b_{00} & a_{01}\cdot b_{01} \\ a_{10}\cdot b_{10} & a_{11}\cdot b_{11}\end{bmatrix} $$

$$ A\odot B = \begin{bmatrix} 20 & 30 \\ 40 & 50 \end{bmatrix}\odot \begin{bmatrix} 2 & 3 \\ 2 & 3\end{bmatrix} = \begin{bmatrix} 40 & 90 \\ 80 & 150\end{bmatrix} $$

プログラムでは次のようになります。

```python{.numberLines caption="行列のアダマール積の計算例"}
%reset -f
import numpy as np
A = np.array([[20,30],[40,50]])
B = np.array([[ 2, 3],[ 2, 3]])
X = A*B  # *演算子による「アダマール積」の計算
print(X)
```

実行結果は次のようになります。

```
[[ 40  90]
 [ 80 150]]
```

<div class="note type-caution">
`B` が ndarrayオブジェクトのとき、`B**2` は「$B^2$」ではなく「$B\odot B$」の計算になることに注意してください。
</div>

#### **行列の積** (Matrix product)

「ベクトル・行列」の授業で習っているような「**積**」です。

$$ AB = \begin{bmatrix} a_{00} & a_{01} \\ a_{10} & a_{11} \end{bmatrix} \begin{bmatrix} b_{00} & b_{01} \\ b_{10} & b_{11}\end{bmatrix} = \begin{bmatrix} a_{00}\cdot b_{00}+ a_{01}\cdot b_{10} & a_{00}\cdot b_{01} + a_{01}\cdot b_{11} \\ a_{10}\cdot b_{00} + a_{11}\cdot b_{10} & a_{10}\cdot b_{01}+a_{11}\cdot b_{11}\end{bmatrix} $$


$$ AB = \begin{bmatrix} 20 & 30 \\ 40 & 50 \end{bmatrix}\begin{bmatrix} 2 & 3 \\ 2 & 3\end{bmatrix} = \begin{bmatrix} 100 & 150 \\ 180 & 270\end{bmatrix} $$

プログラムでは次のようになります。

```python{.numberLines caption="行列の積の計算例"}
%reset -f
import numpy as np
A = np.array([[20,30],[40,50]])
B = np.array([[ 2, 3],[ 2, 3]])
X = A@B  # @演算子による積の計算
print(X)
```

実行結果は次のようになります。

```
[[100 150]
 [180 270]]
```

なお、「ベクトル・行列」の授業で学んだように「行列の積と転置」に関連して、次のことが成立します (**この性質は後半の解説で利用します**)。線形代数の教科書 p.54 参照。

$$ A^{\top}B^{\top} = (BA)^{\top}$$

この性質は、次のようなプログラムでも確認できます。

```python{.numberLines caption="積と転置行列に関する性質"}
%reset -f
import numpy as np
A = np.array([[20,30,40],[50,60,70]])
B = np.array([[20,50],[30,60],[40,70]])

X = A.T @ B.T # X:「Aの転置行列」と「Bの転置行列」の積
Y = (B@A).T   # Y:「BとAの積」の転置行列

print('X = ')
print(X,end='\n\n')

print('Y = ')
print(Y)
```

実行結果は次のようになります。

```
X = 
[[2900 3600 4300]
 [3600 4500 5400]
 [4300 5400 6500]]

Y = 
[[2900 3600 4300]
 [3600 4500 5400]
 [4300 5400 6500]]
```


::: prompts
- NumPy の行列演算を学んでいます。`A = np.array([[20,30],[40,50]])`、`B = np.array([[2,3],[2,3]])` としたとき、`A*B` と `A@B` では何を計算しているのか、各要素の計算過程を比較しながら説明してください。また、`B**2` と `B@B` の違いも教えてください。
:::

## ベクトル・行列の応用 1

**コンピュータゲーム** (主にアクションやシューティングなど) や**コンピュータグラフィックス** (CG) の分野では <span class="masked">ベクトルと行列の計算が重要な役割</span> を果たしています。ベクトルと行列の概念を正しく理解し、計算処理に効果的に活用することで **よりシンプルで効率的なプログラム** が作成できるようになります (また、<span class="masked">既存のプログラムを解読・理解</span> できるようになります)。

まずは、**ベクトルと行列の応用例として**図形の「移動」、<span class="masked">「任意の点を基準とした拡大縮小」</span>、<span class="masked">「任意の点を基準とした回転」</span> について体験的に学びます。その後、多数の「点」の位置、速度、加速度をベクトルとして扱い、これらの点の運動が NumPy (行列計算) を使うことで、**極めてシンプルなプログラムでシミュレートできること** を体験的に学びます。

### ベクトル・行列を使った図形の表現

XY平面上の任意の座標は「**幾何ベクトル**」として表現することができます。ベクトルは「方向」と「大きさ」を持つ量で、例えば、X=5, Y=3 の座標点は、原点 $(0, 0)$ を始点として $(5, 3)$ を終点とする**ベクトル**として捉えることができます。

![img](figs/20/vec-01.svg)

また、三角形を構成する3つの頂点 $(1.5, 4.0)$、$(3.5, 5.0)$、$(4.5, 2.0)$ は、以下のような**行列** $P_{1}$ として表現できます。この行列では、**各行**が<span class="masked">三角形の1つの頂点</span> に対応しています。

$$ P_{1} = \begin{bmatrix} x_0 & y_0 \\ x_1 & y_1 \\ x_2 & y_2 \end{bmatrix} = \begin{bmatrix} 1.5 & 4.0 \\ 3.5 & 5.0 \\ 4.5 & 2.0 \end{bmatrix} $$

![img](figs/20/vec-02.svg)

このようにすることで、**n個の点から構成される図形**は <span class="masked">n行2列の行列  ($n\times 2$ 型行列)</span> として表現できます。また、<span class="masked">その転置、すなわち「2行n列」の行列</span> としても表現可能です。どちらの表現方法を使用するか (=プログラムとして分かりやすくシンプルに記述できるか) は状況によって異なりますが、この講義では基本的には **n行2列** の行列として表現します。

### 移動

行列により表現された図形 $P_{1}$ は、次のような行列計算 (加減算) で「**移動**」させることができます。

$$ P_{2} = P_{1} + M  = \begin{bmatrix} x_0 & y_0 \\ x_1 & y_1 \\ x_2 & y_2 \end{bmatrix}+ \begin{bmatrix} m_{x} & m_{y} \\ m_{x} & m_{y} \\ m_{x} & m_{y} \end{bmatrix} = \begin{bmatrix} x_0 + m_{x} & y_0 + m_{y} \\ x_1 + m_{x} & y_1 + m_{y} \\ x_2 + m_{x} & y_2 +m_{y} \end{bmatrix}$$

ここで $P_{2}$
は移動後の図形の位置を表す行列であり、$M$ は**移動量**を表す行列になります。$M$ の要素である $m_{x}$ は「**X方向の移動量**」を、$m_{y}$ は「**Y方向の移動量**」を表します。図形を構成する**各頂点は独立して同じ量だけ移動するため**、行列 $M$ の各行は同じ値になっています。

例えば、下図 (左) に示す三角形を「X方向に $2$ (つまり <span class="masked">$m_x=2$</span>)」、「Y方向に $-1$ (つまり <span class="masked">$m_y=-1$</span>)」だけ移動させる行列計算は次のようになります。

$$ P_{2} = P_{1} + M  = \begin{bmatrix} 1.5 & 4.0 \\ 3.5 & 5.0 \\ 4.5 & 2.0 \end{bmatrix}+ \begin{bmatrix} 2 & -1 \\ 2 & -1 \\ 2 & -1 \end{bmatrix} =\begin{bmatrix} 3.5 & 3.0 \\ 5.5 & 4.0 \\ 6.5 & 1.0 \end{bmatrix} $$

![img](figs/20/vec-03.svg)

このような行列計算により、図形を移動させることができます。この処理は NumPy を利用して次のように実装することができます。プログラムにおいて `P1` が移動前の図形、`M` が移動行列、`P2` が移動後の行列になります。

```python{.numberLines caption="図形の移動"}
%reset -f
import numpy as np

# P1の初期化
P1 = np.array([[1.5, 4.0],
               [3.5, 5.0],
               [4.5, 2.0]],dtype=float)

assert type(P1) ==  np.ndarray
print(f'P1.shape => {P1.shape} ... {P1.shape[0]}行{P1.shape[1]}列')

# 移動行列の初期化
M = np.array([[2, -1]],dtype=float)
print(f'M.shape  => {M.shape} ... {M.shape[0]}行{M.shape[1]}列')

# 移動後図形 P2 の計算
P2 = P1 + M  # 注: ブロードキャスト機能の自動適用
print(f'P2.shape => {P2.shape} ... {P2.shape[0]}行{P2.shape[1]}列')

print()
print('P2=')
print(P2)
```

実行結果は次のようになります。適切に移動ができていることが確認できます。

```
P1.shape => (3, 2) ... 3行2列
M.shape  => (1, 2) ... 1行2列
P2.shape => (3, 2) ... 3行2列

P2=
[[3.5 3. ]
 [5.5 4. ]
 [6.5 1. ]]
```

**第02行目**: NumPy をインポートして `np` という省略名で使用できるようにしています。もし `as np` を付けない場合は、以降のプログラムで `np` の部分を `numpy` のように記述しなければなりません。

**第05行目**、**第13行目**: `np.array` に2次元リストを引数として渡して、ndarrayオブジェクト (=NumPyで行列を表現する型) の「**初期化**」をしています。`dtype=float` オプションにより、行列の要素の型が `float64` となるように明示しています。なお、`M` は、**「ブロードキャスト機能」の利用を想定し** <span class="masked">`np.array([[2, -1]])` のように「1行2列」</span> として初期化しています。

**第10行目**、**第14行目**、**第18行目**: `shape` プロパティで各ndarrayオブジェクトの形状 (行列の行数と列数) を確認しています。

**第17行目**: 移動のための行列計算をしています。注意してほしいことは、数学的には <span class="masked">3行2列の $P_1$ に、1行2列の $M$ を加算することはできない</span> ということです。しかし、ここでは[第17回講義](lecture17.html#ブロードキャスト)で解説した NumPy の「**ブロードキャスト**」という機能により、`M` が「1行2列」から「3行2列」に **自動拡張され計算**されています。つまり、計算の際、$M$ が、次の $M'$ に自動拡張されることで、`P1` の各頂点が同じ量だけ移動し、新しい位置が `P2` に格納されます。

$$ M = \begin{bmatrix} 2 & -1 \end{bmatrix} $$
$$ M' = \begin{bmatrix} 2 & -1 \\ 2 & -1 \\ 2 & -1 \end{bmatrix} $$

ここでのポイントは、行列 (ndarrayオブジェクト) を利用することで <span class="masked">繰返し構文を利用することなく</span> `P2 = P1 + M` という極めてシンプルなコードで処理が書けていることです。また、NumPy ライブラリは「**C言語**」で実装されているため、(Pythonで繰返し構文とリストを使って計算するよりも)<span class="masked">はるかに効率的かつ高速に (内部的に) 計算される</span> というメリットもあります。

::: prompts
- NumPy で、図形の3つの頂点を格納した `P1` の形状が `(3,2)`、移動量を格納した `M` の形状が `(1,2)` のとき、`P1 + M` が計算できる理由を教えてください。ブロードキャストによって、どの要素とどの要素が加算されるのか、具体的な数値を使って初心者向けに説明してください。
:::

#### 演習3

移動行列 `M` は、ブロードキャストの利用を想定せずに、次のように初期化することもできます。実際に試して同じ結果が得られることを確認してください。

```python{.numberLines}
# M = np.array([[2, -1]],dtype=float) # ブロードキャストの利用を想定
M = np.array([[2, -1],[2, -1],[2, -1]],dtype=float) # 3行2列で初期化
```

#### 演習4

次のプログラムは **Matplotlib を使った処理の可視化** を含めた図形移動のサンプルプログラムです (Matplotlib は[第11回講義](lecture11.html#斜方投射のシミュレーションと可視化)や[第19回講義](lecture19.html#簡易グラフ出力)で簡単に学びました)。まずは、プログラムの動作確認をしてください。次に、四角形以上の任意の図形に対しても、最低限の変更で移動処理ができることを確認してください。

さらに (授業時間外学習として ChatGPT などを利用して) 可視化処理に関するプログラムを読解してください。

```python{.numberLines caption="図形の移動処理+可視化"}
%reset -f
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patheffects import Normal,Stroke
from matplotlib.ticker import FuncFormatter
from matplotlib.patches import Polygon

P1 = np.array([[1.5, 4.0],
               [3.5, 5.0],
               [4.5, 2.0]],dtype=float)

M = np.array([[2, -1]],dtype=float)

P2 = P1 + M

print(f'P1 =\n{P1}\n')
print(f'M  =\n{M}\n')
print(f'P2 = P1+M\n{P2}\n')

# 以下、可視化に関する処理
plt.rcParams['mathtext.fontset'] = 'cm'

fig,axis = plt.subplots(dpi=120,figsize=(6,3),ncols=2)

x_min,x_max = -2,8; y_min,y_max = -2,8
ot_prm = (Stroke(linewidth=3,foreground='#fff'),Normal(),)

for i,ax in enumerate(axis.flatten()):

  if i==1:
    ax.add_patch(Polygon(P1,ec='tab:gray',ls=':',fill=False))

  P = P1 if i==0 else P2
  ax.add_patch(Polygon(P,alpha=0.5))
  ax.scatter(P.T[0],P.T[1], marker='.')
  for i,p in enumerate(P):
    t = ax.text(p[0],p[1]+0.2,f'$({p[0]:.1f}, {p[1]:.1f})$',
                va='bottom',ha='center',fontsize=10, c='tab:blue')
    t.set_path_effects(ot_prm)

  ax.set_aspect('equal', adjustable='box')

  # ticks + ticklabels
  ax.spines['bottom'].set_position('zero')
  ax.spines['left'].set_position('zero')
  ax.spines['top'].set_visible(False)
  ax.spines['right'].set_visible(False)
  ax.tick_params(direction='inout',which='both')

  ax.set_xlim(x_min,x_max)
  ax.set_ylim(y_min,y_max)
  ax.set_xticks(range(x_min,x_max+1,2))
  ax.set_yticks(range(y_min,y_max+1,2))
  ax.set_xticks(range(x_min,x_max+1),minor=True)
  ax.set_yticks(range(y_min,y_max+1),minor=True)

  ax.xaxis.set_major_formatter(FuncFormatter(lambda p,q : f'{p:.0f}' if p!=0 else ''))
  ax.yaxis.set_major_formatter(FuncFormatter(lambda p,q : f'{p:.0f}' if p!=0 else ''))

  for t in ax.get_xticklabels()+ax.get_yticklabels():
    t.set_path_effects(ot_prm)

  ax.scatter(0,0,c='#000',marker='.')
  ax.set_axisbelow(True)
  ax.grid(lw=0.5,which='both',clip_on=False)

plt.tight_layout()
plt.show()
```

::: prompts
- 以下に貼り付ける、NumPy と Matplotlib を使った図形移動のプログラムについて、可視化に関する部分を解説してください。特に、`Polygon`、`ax.scatter(P.T[0],P.T[1])`、`ax.set_aspect('equal', adjustable='box')` の役割と、`P.T[0]` と `P.T[1]` で各頂点のX座標とY座標を取り出せる理由を教えてください。  
(ここにコードを貼付ける)
:::

### 拡大縮小

行列により表現された図形 $P_{1}$ は、次のような行列計算で「**拡大縮小**」させることができます。

$$ P_{2} = P_{1} S  = \begin{bmatrix} x_0 & y_0 \\ x_1 & y_1 \\ x_2 & y_2 \end{bmatrix} \begin{bmatrix} s_{x} & 0 \\ 0 & s_{y} \end{bmatrix} = \begin{bmatrix} s_{x}x_0 & s_{y}y_0 \\ s_{x}x_1 & s_{y}y_1 \\ s_{x}x_2 & s_{y}y_2 \end{bmatrix} $$

ここで $P_{2}$
は拡大縮小後の図形を表す行列であり、$S$ は**XYの拡大縮小倍率**を表す行列になります。$S$ の要素である $s_{x}$ は「**X軸方向の拡大縮小の倍率**」を、$s_{y}$ は「**Y軸方向の拡大縮小の倍率**」を表します。

$P_{1}$ は「**n行2列**」の行列で、$S$ は「**2行2列**」の行列であるため、その積である $P_{1}S=P_{2}$ は「**n行2列**」の行列になります ( $P_2$ と $P_1$ は同じ形状 (`shape`) になります) 。

例えば、図形を**横方向 (X方向) に1.6倍**、**縦方向 (Y方向) に1.2倍**に拡大する処理は、NumPyを使ったプログラムでは次のように書くことができます。

```python{.numberLines caption="図形の拡大縮小"}
%reset -f
import numpy as np
P1 = np.array([[1.5, 4.0],
               [3.5, 5.0],
               [4.5, 2.0]],dtype=float)
S  = np.array([[1.6,   0],
               [  0, 1.2]],dtype=float)
P2 = P1@S  # 拡大処理
print(P2)
```

なお、**第08行目** は `P2 = np.dot(P1,S)` のように書くこともできます (`@` を使った記法は Python 3.5 で導入されたものになります)。実行結果は次のようになります。

```
[[2.4 4.8]
 [5.6 6. ]
 [7.2 2.4]]
```

実行結果を可視化すると次のようになります。

![img](figs/20/vec-04.svg)

数式と可視化した結果をみれば分かるように、幾何ベクトルの「X成分」「Y成分」が、それぞれ $s_x$ 倍、$s_y$ 倍された結果として、図形が拡大縮小されています。この処理は <span class="masked">原点 $(0, 0)$ を基準とした拡大縮小をするもの</span> であり、人間にとっては「**拡大縮小と同時に図形が移動してしまっているように感じる処理**」になってしまいます。

PowerPoint や ドロー系のアプリでは、このような**原点基準の拡大縮小**ではなく、<span class="masked">図形に外接する長方形の左上</span> や <span class="masked">図形の重心</span> を基準とする拡大縮小処理が実装されています。

### 任意点を基準とする拡大縮小

原点以外の「任意の点」を基準とする拡大縮小処理は、図形の「**移動**」と「**原点を基準とする拡大縮小**」を組み合わせて行うことができます。

例えば、**図形の「重心」を基準として「1.5倍」に拡大したい**場合、次のように操作します。

1. 行列により表現された図形 $P_{1}$ の**重心の座標** $G=(g_x, g_y)$ を計算します。
2. この重心 $G$ が 原点 $O$ と重なるように図形を移動します。これは、図形をX方向に $-g_x$、Y方向に $-g_y$ だけ移動させる操作に相当します。
3. 原点 $O$ を基準に**1.5倍** ($s_{x}=s_{y}=1.5$) に図形を拡大します。
4. 図形の重心を元の位置 $G$ に戻します。つまり、図形を X方向に $g_x$、Y方向に $g_y$ だけ移動します。

![img](figs/20/vec-05.svg)

図形の **重心** は、図形を構成する各頂点のX座標とY座標について、それぞれを平均することで求めることができます (数学で学んでいるはずです)。つまり、次式のように計算できます。

$$ G = (g_x,\ g_y) = \left( \frac{x_0+x_1+x_2}{3},\ \frac{y_0+y_1+y_2}{3} \right) $$

ndarrayオブジェクトでは `.mean(axis=0)` メソッドで図形の重心を求める計算ができます。**メソッド** とは、オブジェクトから `.` でアクセスできる <span class="masked">「関数のようなもの」</span> と考えてください (詳しいことは、**クラス (Class)** に関する講義で説明します)。

```python{.numberLines caption="図形重心の計算"}
%reset -f
import numpy as np
P1 = np.array([[1.5, 4.0],
               [3.5, 5.0],
               [4.5, 2.0]])
G = P1.mean(axis=0)  # 重心を計算
assert type(G) == np.ndarray 
print(G)
```

実行結果は、次のようになります。$(1.5+3.5+4.5)/3=3.16...$ なので正しく計算できていることが分かります。

```
[3.16666667 3.66666667]
```

なお、ndarrayオブジェクトの `mean` メソッドでは、`axis` の指定で <span class="masked">平均を計算する軸 (方向) </span> を指定することができます。今回は、座標を「n行2列」の行列 (座標を表す「行ベクトル」を束ねたもの) に格納しているので、`mean(axis=0)` により重心を計算しています。

![img](figs/20/mat-axis-01.png)

以上を踏まえて、図形の重心を基準に拡大縮小するプログラムは、次のように書くことができます。

```python{.numberLines caption="図形の重心を基準とした拡大縮小"}
%reset -f
import numpy as np

P1 = np.array([[1.5, 4.0],[3.5, 5.0],[4.5, 2.0]])
S = np.array([[ 1.5,   0],
              [   0, 1.5]]) # 拡大行列
G = P1.mean(axis=0)         # 重心

P2 = (P1-G)@S+G  # 重心を基準とした拡大縮小
print(P2.round(1))
```

実行結果は次のようになります。

```
[[0.7 4.2]
 [3.7 5.7]
 [5.2 1.2]]
```

実行結果を可視化すると次のようになります。

![img](figs/20/vec-06.svg)

::: prompts
- 三角形の頂点を各行に格納した NumPy 配列 `P1` に対して、`G = P1.mean(axis=0)`、`P2 = (P1-G)@S+G` として、重心を基準に拡大縮小しています。`axis=0` の意味と、`P1-G`、`(P1-G)@S`、最後の `+G` がそれぞれどのような操作に対応するのか、座標の変化と関連づけて説明してください。ここでは `S = np.array([[1.5,0],[0,1.5]])` とします。
:::

### 演習5

次のプログラムは **Matplotlib を使った処理の可視化** を含めた図形の拡大縮小処理のサンプルプログラムです。まずは、プログラムの動作確認をしてください。

次に、**図形に外接する四角形の右下の点**を基準に拡大縮小するようなプログラムに書き換えてください。

```python{.numberLines caption="図形の拡大縮小処理(任意基準点)+可視化"}
%reset -f
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patheffects import Normal,Stroke
from matplotlib.ticker import FuncFormatter
from matplotlib.patches import Polygon

P1 = np.array([[1.5, 4.0],[3.5, 5.0],[4.5, 2.0]])
S = np.array([[ 1.5,   0],
              [   0, 1.5]]) # 拡大行列
G = P1.mean(axis=0)         # 基準座標

P2 = (P1-G)@S+G  # 座標Gを基準とした拡大縮小

print(f'P1 =\n{P1}\n')
print(f'G  =\n{G}\n')
print(f'P2 = (P1-G)@S+G\n{P2}\n')

# 以下、可視化に関する処理
plt.rcParams['mathtext.fontset'] = 'cm'
fig,axis = plt.subplots(dpi=120,figsize=(6,3),ncols=2)

x_min,x_max = -2,8; y_min,y_max = -2,8
ot_prm = (Stroke(linewidth=3,foreground='#fff'),Normal(),)

for i,ax in enumerate(axis.flatten()):

  if i==1:
    ax.add_patch(Polygon(P1,ec='tab:gray',ls=':',fill=False))

  P = P1 if i==0 else P2
  ax.add_patch(Polygon(P,alpha=0.5))
  ax.scatter(P.T[0],P.T[1], marker='.')
  ax.set_aspect('equal', adjustable='box')

  # ticks + ticklabels
  ax.spines['bottom'].set_position('zero')
  ax.spines['left'].set_position('zero')
  ax.spines['top'].set_visible(False)
  ax.spines['right'].set_visible(False)
  ax.tick_params(direction='inout',which='both')

  ax.set_xlim(x_min,x_max)
  ax.set_ylim(y_min,y_max)
  ax.set_xticks(range(x_min,x_max+1,2))
  ax.set_yticks(range(y_min,y_max+1,2))
  ax.set_xticks(range(x_min,x_max+1),minor=True)
  ax.set_yticks(range(y_min,y_max+1),minor=True)

  ax.xaxis.set_major_formatter(FuncFormatter(lambda p,q : f'{p:.0f}' if p!=0 else ''))
  ax.yaxis.set_major_formatter(FuncFormatter(lambda p,q : f'{p:.0f}' if p!=0 else ''))

  for t in ax.get_xticklabels()+ax.get_yticklabels():
    t.set_path_effects(ot_prm)

  ax.scatter(0,0,c='#000',marker='.')

  ax.set_axisbelow(True)
  ax.grid(lw=0.5,which='both',clip_on=False)

plt.tight_layout()
plt.show()
```

### 回転

XY平面上の座標 $(x,y)$ を **原点を中心に反時計回り** (=**CCW**: Counterclockwise) に $\theta$ 回転させたときの座標 $(x',y')$ は、次式のように2行2列の「**回転行列**」との積で求まることが数学的に知られています。

$$ \begin{bmatrix} x' & y' \end{bmatrix} = \begin{bmatrix} x & y \end{bmatrix} 
\begin{bmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{bmatrix} =  \begin{bmatrix} 
x\cdot \cos\theta - y \cdot \sin\theta & x\cdot \sin\theta + y \cdot \cos\theta \end{bmatrix}$$

例えば、 座標 $(x,y) =(4.5, 2.0)$ を反時計回りに $\theta=45^{\circ}$ 回転させたときの座標 $(x', y') = (1.8, 4.6)$ は、次のように計算できます。

$$ \begin{bmatrix} x' & y' \end{bmatrix} = \begin{bmatrix} 4.5 & 2.0 \end{bmatrix} 
\begin{bmatrix} \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} \\ -\frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} \end{bmatrix} = \begin{bmatrix} 
4.5\cdot \frac{\sqrt{2}}{2} - 2.0 \cdot \frac{\sqrt{2}}{2} & 4.5\cdot \frac{\sqrt{2}}{2} + 2.0 \cdot \frac{\sqrt{2}}{2} \end{bmatrix} \fallingdotseq \begin{bmatrix} 1.8 & 4.6 \end{bmatrix} $$

これを可視化すると下図のようになります。確かに回転行列との積により、回転後の座標が適切に求められていることが確認できます。なお、この「回転の原理」や「回転行列の導出」については本授業の範疇ではないので (興味・関心があるなら)[YouTube](https://www.youtube.com/results?search_query=回転行列+2次元)や[ウェブ検索](https://www.google.com/search?q=回転行列+2次元+導出)を利用して学んでみてください 。

![img](figs/20/vec-07.svg)

これを応用し、行列で表現された図形 $P_{1}$ についても、回転行列 $R$ との積によって**原点中心に回転**させることができます。

$$ P_{2} = P_{1} R  = \begin{bmatrix} x_0 & y_0 \\ x_1 & y_1 \\ x_2 & y_2 \end{bmatrix} \begin{bmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{bmatrix} = \begin{bmatrix} 
x_0\cdot \cos\theta - y_0 \cdot \sin\theta & x_0\cdot \sin\theta + y_0 \cdot \cos\theta \\
x_1\cdot \cos\theta - y_1 \cdot \sin\theta & x_1\cdot \sin\theta + y_1 \cdot \cos\theta \\
x_2\cdot \cos\theta - y_2 \cdot \sin\theta & x_2\cdot \sin\theta + y_2 \cdot \cos\theta \\
\end{bmatrix} $$

ここで $P_{2}$
は「回転後の図形」を表す行列であり、$R$ は 原点を基準に反時計回りに $\theta$ の回転を与える行列 (=**回転行列**) になります。$P_{1}$ は「**n行2列**」の行列で、$R$ は「**2行2列**」の行列であるため、その積である $P_{1}R=P_{2}$ は「**n行2列**」となります 。

![img](figs/20/vec-08.svg)

<div class="note type-tips">
**回転行列の成分の値が違う?**

ウェブで「**回転行列**」について調べると、一般には、次のような解説がされています。

> ２次元平面上の点 $(x,y)$ について、それを原点を中心に反時計回りに $\theta$ だけ回転させた点を $(x',y')$ とすると、これらは次のような関係となる。
> $$ \begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}=\begin{bmatrix} x\cdot \cos\theta - y \cdot \sin\theta \\ x\cdot \sin\theta + y \cdot \cos\theta \end{bmatrix}  \ \ \ \ \ \ ...(1)$$

ここで注目して欲しい点は、上記 (1) の回転行列と、この講義資料内で先ほど示した**回転行列の内容が違っている点**です。具体的には「$\sin\theta$」と「$-\sin\theta$」の位置が入れ替わっています。

これは、(1) 式では、座標を「**列ベクトル** (**2行1列**)」で扱い、講義資料のなかでは座標を「**行ベクトル** (**1行2列**) 」で扱っていることに起因します。(1) 式を次のように考えて、

$$ AB = \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}=\begin{bmatrix} x\cdot \cos\theta - y \cdot \sin\theta \\ x\cdot \sin\theta + y \cdot \cos\theta \end{bmatrix}$$

$$ (AB)^\top = \begin{bmatrix} 
x\cdot \cos\theta - y \cdot \sin\theta & x\cdot \sin\theta + y \cdot \cos\theta \end{bmatrix}$$

ここで、前半に確認した**転置行列の性質**「<span class="masked">$(AB)^\top = B^\top A^\top$</span>」を利用すれば、次のように本講義資料内で示す回転行列 $R$ が得られます。

$$ B^\top A^\top = \begin{bmatrix} x & y \end{bmatrix} \begin{bmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{bmatrix} =  \begin{bmatrix} 
x\cdot \cos\theta - y \cdot \sin\theta & x\cdot \sin\theta + y \cdot \cos\theta \end{bmatrix} = (AB)^\top $$
</div>

以上を踏まえて、原点を基準 (中心) に図形を回転するプログラムは、次のように書くことができます。

```python{.numberLines caption="原点を基準とした回転処理"}
%reset -f
import numpy as np
P1 = np.array([[1.5, 4.0],
                [3.5, 5.0],
                [4.5, 2.0]],dtype=float)
theta = np.radians(45)  # Deg -> Rad
R = np.array([[ np.cos(theta), np.sin(theta)],
              [-np.sin(theta), np.cos(theta)]]) # 回転行列

P2 = P1@R  # 原点を中心とした回転

print(f'P1=\n{P1}')
print(f'\nP2=\n{P2.round(1)}')
```

実行結果は次のようになります。

```
P1=
[[1.5 4. ]
 [3.5 5. ]
 [4.5 2. ]]

P2=
[[-1.8  3.9]
 [-1.1  6. ]
 [ 1.8  4.6]]
```

実行結果を可視化すると次のようになります (再掲)。

![img](figs/20/vec-08.svg)

::: prompts
- NumPy で、座標を行ベクトル `[x,y]` として扱い、`R = np.array([[np.cos(theta),np.sin(theta)],[-np.sin(theta),np.cos(theta)]])`、`P2 = P1@R` として反時計回りに回転させています。列ベクトルに左から掛ける回転行列と、`sin` の符号の配置が違う理由を、転置行列の性質を使って説明してください。また、`theta = np.radians(45)` とする理由も教えてください。
:::

### 任意点を基準 (中心) とする回転

原点ではなく図形の重心などの**任意の点を基準 (中心) とする回転処理**は、[任意点を基準とする拡大縮小](#任意点を基準とする拡大縮小) と同じ考え方で行なうことができます。

例えば、図形の重心を基準 (中心) とする回転処理は、次のように書くことができます。

```python{.numberLines caption="任意点を基準とした回転"}
%reset -f
import numpy as np

P1 = np.array([[0.0, 4.0],
               [3.5, 6.0],
               [6.5, 1.0]],dtype=float)
theta = np.radians(45)
R = np.array([[ np.cos(theta), np.sin(theta)],
              [-np.sin(theta), np.cos(theta)]])
G = np.mean(P1, axis=0)  # 重心
P2 = (P1-G)@R+G          # 重心を基準とした回転

print(f'P1=\n{P1}')
print(f'\nP2=\n{P2.round(1)}')
```

行列 (ndarrayオブジェクト) を使用することで `P2 = (P1-G)@R+G` のように、<span class="masked">極めて簡潔に処理 (プログラム) を記述</span> することができます。また、<span class="masked">図形を構成する頂点数が増え</span> ても、`P1` の初期化の引数だけ変更すれば全て対応させることができます。実行結果は次のようになります。

```
P1=
[[0.  4. ]
 [3.5 6. ]
 [6.5 1. ]]

P2=
[[0.7 1.5]
 [1.8 5.4]
 [7.5 4. ]]
```

実行結果を可視化すると次のようになります。重心を基準 (中心) とした図形の回転ができていることが確認できます。

![img](figs/20/vec-09.svg)

#### 演習6

任意の図形について、図形重心を中心に「1.2倍」に拡大して、さらに「90度」だけ回転させるようなプログラムを作成し、その結果を可視化して確認せよ。

## ベクトル・行列の応用 2

物体の位置、速度、加速度を「**ベクトル**」として扱うことで **物体の運動を比較的簡単にシミュレートすること** ができます。以降、特に単位を明示しませんが、ここでは位置の単位を mm ではなく **px (ピクセル)**、時間の単位を s ではなく **f (フレーム)** と考えてください。

いま、フレーム $f=0$ のときの**位置**が $p_{0} = (x_{0},\ y_{0})$、**速度**が $v_{0} = (vx_{0},\ vy_{0})$で、それが一定の **加速度** $a = (ax,\ ay)$ を受けながら「**等加速度運動**」するような「点」を考えます。ここで、位置、速度、加速度を、すべて「**ベクトル**」として考えます。

例えば、$f=0$ のときの**位置**が $p_{0} = (0,\ 0)$ 、**速度**が $v_{0} =(18,\ 20)$で、**加速度**が $a = (-0.8,\ -2.0)$ であるとすれば、$f=1$ の**位置**は $p_{1} = p_{0} + v_{0} = (18,\ 20)$、**速度**は $v_{1} = v_{0} + a = (17.2,\ 18.0)$ のように、**ベクトルの単純な加算**によって求めることができます。

速度の単位が `px/f`、つまり <span class="masked">1フレームあたりの位置の変化量</span>を意味していることを考えれば $p_{1}=p_{0} + v_{0}$ が理解できると思います。同様に、加速度が <span class="masked">1フレームあたりの速度の変化量</span>を意味していることを考えれば $v_{1}=v_{0} + a$ も理解できると思います。

同様に、$f=2$ の位置は $p_{2} = p_{1} + v_{1} = (35.2,\ 38.0)$、速度は $v_{2} = v_{1} + a = (16.4,\ 16.0)$ のように逐次計算によって求めることができます。

これらは、次のようなプログラムによって計算できます。

```python{.numberLines caption="等加速度運動のシミュレート"}
%reset -f
import numpy as np

p = np.array([ 0, 0],dtype=float)   # 初期位置 
v = np.array([18,20],dtype=float)   # 初期速度
a = np.array([-0.8,-2],dtype=float) # 加速度

# f=0 から 10 までをシミュレート
for f in range(0,11): 
  print(f'f={f:2}  ',end='')
  print(f'p=({p[0]:>5.1f}, {p[1]:>5.1f})  ',end='')
  print(f'v=({v[0]:>4.1f}, {v[1]:>5.1f})  ',end='')
  print(f'a=({a[0]}, {a[1]})')
  p = p + v  # 位置の更新 
  v = v + a  # 速度の更新
```

実行結果は次のようになります。

```
f= 0  p=(  0.0,   0.0)  v=(18.0,  20.0)  a=(-0.8, -2.0)
f= 1  p=( 18.0,  20.0)  v=(17.2,  18.0)  a=(-0.8, -2.0)
f= 2  p=( 35.2,  38.0)  v=(16.4,  16.0)  a=(-0.8, -2.0)
f= 3  p=( 51.6,  54.0)  v=(15.6,  14.0)  a=(-0.8, -2.0)
f= 4  p=( 67.2,  68.0)  v=(14.8,  12.0)  a=(-0.8, -2.0)
f= 5  p=( 82.0,  80.0)  v=(14.0,  10.0)  a=(-0.8, -2.0)
f= 6  p=( 96.0,  90.0)  v=(13.2,   8.0)  a=(-0.8, -2.0)
f= 7  p=(109.2,  98.0)  v=(12.4,   6.0)  a=(-0.8, -2.0)
f= 8  p=(121.6, 104.0)  v=(11.6,   4.0)  a=(-0.8, -2.0)
f= 9  p=(133.2, 108.0)  v=(10.8,   2.0)  a=(-0.8, -2.0)
f=10  p=(144.0, 110.0)  v=(10.0,   0.0)  a=(-0.8, -2.0)
```

Matplotlib を使って可視化してみます。

```python{.numberLines caption="運動のシミュレート・可視化"}
%reset -f
import numpy as np
import matplotlib.pyplot as plt

p = np.array([ 0, 0],dtype=float)   # 初期位置
v = np.array([18,20],dtype=float)   # 初期速度
a = np.array([-0.8,-2],dtype=float) # 加速度

fig,ax = plt.subplots(figsize=(5.5,3))   # 準備
ax.set_aspect('equal', adjustable='box') # アスペクト比を1:1に設定
ax.set_xlim(0,220) # X軸の範囲 最小0 ～ 最大220
ax.set_ylim(0,120) # Y軸の範囲 最小0 ～ 最大120

for f in range(0,20):
  ax.scatter(p[0],p[1],alpha=0.8,c='tab:blue') # 点を描画
  # print(f'f={f:2}  ',end='')
  # print(f'p=({p[0]:>5.1f}, {p[1]:>5.1f})  ',end='')
  # print(f'v=({v[0]:>4.1f}, {v[1]:>5.1f})  ',end='')
  # print(f'a=({a[0]}, {a[1]})')
  p = p + v  # 位置の更新
  v = v + a  # 速度の更新

plt.tight_layout()                # レイアウトの最適化
plt.savefig('sim-01.png',dpi=150) # 図の保存
plt.show()  # 図の画面表示
```

実行結果は次のようになります。なお、ベクトルを使用していないバージョンは [第11回講義](lecture11.html#斜方投射のシミュレーションと可視化) で扱っているので、比較してみてください。

![img](figs/20/sim-01.png)

**第15行目** で点 (図内の青丸) を描画しています。`c='tab:blue'` は <span class="masked">`color='tab:blue'`</span> の略表記で、`tab:blue` は Matplotlib で利用できる**既定の色の名前**です( [Matplotlibで利用できる色名の一覧](https://matplotlib.org/stable/gallery/color/named_colors.html#tableau-palette) )。既定の色名を指定する以外に <span class="masked">`c='#ff00ff'` または `c='#f0f'`</span> のような16進数による色指定ができます。

また、`alpha=0.8` は **透過度 (アルファチャンネル)** を指定するもので `0.0` で完全透明、`1.0` で不透明になります。図内で点が重なるような場合は、`alpha=0.3` から `alpha=0.8` にしておくと、体裁の整った図になります。

なお、**アンパック (展開)** の機能を利用して `ax.scatter(*p,alpha=0.8,c='tab:blue')` のようにシンプルに記述することもできます。以降、アンパックが利用できる部分はアンパックを使ってコードを示します。

<div class="note type-tips">
**ndarrayオブジェクトをアンパック (展開) して関数の引数に与える**

[第10回講義](lecture10.html#演習5-目標時間-15分)で解説したように、Python では関数の引数にリストやタプル、ndarrayオブジェクトに `*` を付けたものを指定すると、それが **展開** (**アンパック**) されて個別の引数として関数に渡されます。

```python{.numberLines caption="運動のシミュレート・可視化"}
%reset -f

def func(a,b,c) :
  return a*b*c

arr = [2,3,5]
x1 = func(arr[0],arr[1],arr[2])
x2 = func(*arr) # アンパックを利用

print(f'x1={x1}, x2={x2}')
```
</div>

さらに、速度 $v$ と 加速度 $a$ を表す「**ベクトル (矢印)**」も図内に表示してみます。ベクトル (矢印) を表示するには `ax` の `quiver` メソッドを使用します (以下の **第16行目** と **第17行目** に注目してください)。

```python{.numberLines caption="運動のシミュレート・可視化2"}
%reset -f
import numpy as np
import matplotlib.pyplot as plt

p = np.array([ 0, 0],dtype=float)   # 初期位置
v = np.array([18,20],dtype=float)   # 初期速度
a = np.array([-0.8,-2],dtype=float) # 加速度

fig,ax = plt.subplots(figsize=(5.5,3)) # 準備
ax.set_aspect('equal', adjustable='box') # アスペクト比を1:1に設定
ax.set_xlim(0,220) # X軸の範囲 最小0 ～ 最大220
ax.set_ylim(0,120) # Y軸の範囲 最小0 ～ 最大120

for f in range(0,20):
  ax.scatter(*p,alpha=0.8,c='tab:blue') # 点を描画
  ax.quiver(*p,*v,scale_units='xy',scale=1,alpha=0.4,color='tab:gray')    # 速度v
  # ax.quiver(*p,*a,scale_units='xy',scale=0.1,alpha=0.4,color='tab:red') # 加速度a
  p = p + v  # 位置の更新
  v = v + a  # 速度の更新

plt.tight_layout()                # レイアウトの最適化
plt.savefig('sim-02.png',dpi=150) # 図の保存
plt.show()  # 図の画面表示
```

実行結果は次のようになります。各位置 (各フレーム) における点の **速度** $v$ を表すベクトルが、図内に灰色で示されています。速度の単位は px/frame なので、<span class="masked">矢印の先端 (終点) が、ちょうど1フレーム後の位置</span> を指すようになります。

![img](figs/20/sim-02.png)

また、**第17行目** のコメントアウトを外すと、次のように各位置 (各フレーム) における点の **加速度を表すベクトル** が確認できます (以下の図では「速度ベクトル」を非表示にしています)。なお、加速度は、図に対して値が小さすぎるため、そのまま表示しても (小さすぎて) 見えません。そこで、`ax.quiver` の `scale` オプションで大きさを調整 (スケーリング) しています。

![img](figs/20/sim-02a.png)

ここまでは、1個の点の運動について扱いました。行列 (ndarrayオブジェクト) を使うことで、複数個の点についても **ほぼ同じように扱うことができます**。ここでは、初期位置、初期速度、加速度を与えて、以下のように放射状に拡散していく粒子の動きをシミュレートして、それを**アニメーション**させてみたいと思います。

![img](figs/20/sim-03.gif)

プログラムは次のようになります。アニメーションに関する部分でコードが少し複雑化しますが、各フレームの位置を計算する部分 (**第42行目**～**第44行目**) は、粒子数が増えても、先ほどと同じく簡潔に記述できていることが分かると思います。

```python{.numberLines caption="運動のシミュレート・可視化2"}
%reset -f
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from IPython.display import HTML

# 行列初期化
n  = 30  # 粒子数
P = np.empty((n,2))   # n行2列 (30行2列) の空の行列を作成 → 位置行列
V = np.empty_like(P)  # Pと同じサイズの空の行列を作成 → 速度行列
A = np.empty_like(P)  # 〃 → 加速度行列

# 初期値の設定
v0 = 0.9  # 初期速度
for i,d in enumerate(np.linspace(0,360,n,endpoint=False)):

  # i番目の各粒子の初期位置(f=0のときの位置)
  P[i] = np.array([5,10]) 

  # i番目の粒子の初期速度(f=0のときの速度)
  V[i] = np.array([v0*np.cos(np.radians(d)),v0*np.sin(np.radians(d))])

  # i番目の粒子の加速度
  A[i] = np.array([-0.01,-0.05])

# 可視化
fig,ax = plt.subplots(figsize=(5,5))

def update(frame):
  global P, V, A
  ax.clear()
  ax.set_aspect('equal', adjustable='box')
  ax.set_xlim(-20,30)
  ax.set_ylim(-20,30)
  alpha = max(0.95-0.01*frame, 0)
  ax.scatter(5,10,marker='x',c='#000')
  ax.scatter(P.T[0],P.T[1],alpha=alpha,c='tab:red')
  ax.text(0.01,0.99,f'Frame={frame}',va='top',transform=ax.transAxes)

  # 行列の更新処理
  if frame !=0 :
    P = P + V
    V = V + A
    A += np.random.random(size=(n,2))*0.01-0.005

ani = FuncAnimation(fig, update, frames=range(60), interval=50)
plt.close()
HTML(ani.to_jshtml())
```

#### 演習7

上記のプログラムを読解してください。具体的には、パラメータを変更して結果を確認したり、プログラムの途中に `print` を挿入することでプログラムの動作や内部処理について深く理解してください。Matplotlib による可視化やアニメーションについては ChatGPT や Gemini を使って機能の解説を受けてください。

- **第15行目**の `enumerate` は [第08回講義](lecture08.html#pythonicなリストとfor文の組み合わせ) で学習済みです。
- **第15行目**の `np.linspace` は [第17回講義](lecture17.html#np.linspace-による初期化) で学習済みです。

<div class="note type-senior">
**おまけ: アニメーションGIFの作成**

アニメーション GIF は次のように生成することができます。

```python{.numberLines caption="アニメーションGIFの作成"}
%reset -f
import os
import glob
import numpy as np
import IPython.display
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from PIL import Image

# 行列の初期化
n = 30; v0 = 1
P = np.empty((n,2))
V = np.empty_like(P)
A = np.empty_like(P)
for i,d in enumerate(np.linspace(0,360,n,endpoint=False)):
  P[i] = np.array([5,10])
  V[i] = np.array([v0*np.cos(np.radians(d)),v0*np.sin(np.radians(d))])
  A[i] = np.array([-0.01,-0.05])

# フレーム毎の連番ファイルを作成
for frame in range(60):
  fig,ax = plt.subplots(figsize=(5,5))
  ax.set_aspect('equal', adjustable='box')
  ax.set_xlim(-20,30); ax.set_ylim(-15,25)
  ax.set_aspect('equal', adjustable='box')
  ax.set_xlim(-20,30)
  ax.set_ylim(-20,30)
  alpha = max(0.95-0.01*frame, 0)
  ax.scatter(5,10,marker='x',c='#000')
  ax.scatter(P.T[0],P.T[1],alpha=alpha,c='tab:red')
  ax.text(0.01,0.99,f'Frame={frame}',va='top',transform=ax.transAxes)
  fn = f'tmp-{frame:03}.png'
  plt.tight_layout()
  plt.savefig(fn,dpi=120)
  plt.close()
  P = P + V
  V = V + A
  A += np.random.random(size=(n,2))*0.01-0.005

# アニメーションGIFの作成・保存
files = sorted(glob.glob('tmp-*.png'))
images = list(map(lambda f: Image.open(f), files))
images[0].save('animation.gif',save_all=True, 
               append_images=images[1:], duration=50, loop=0)

# tmpファイルの削除
for fn in glob.glob('tmp-*.png'):
  os.remove(fn)

# アニメーションGIFの表示
IPython.display.Image(open('animation.gif','rb').read())
```

</div>