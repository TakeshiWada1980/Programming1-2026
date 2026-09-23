---
var:
  header-title: "2026-2I プログラミング1 第15回 講義資料"
  header-date: "2026年09月25日（金）2時限"
---

# 第15回 2I-プログラミング1

## 概要・連絡

### 前期末の成績評価について

- 前期末成績は、シラバスに示す割合に基づき、以下のように算出しました。
  - **課題 (70点)** : 各課題を10点満点で評価し、**課題01**を1倍、**課題02**を2倍、**課題03**を2倍、**課題04**を3倍、**課題05**を2倍した合計100点を70点換算して、小数第3位で四捨五入。
  - **小テスト (30点)** : 小テスト1～5の合計50点満点を30点換算して、小数第3位で四捨五入。
    - 小テスト3については、1回目と2回目の点数の平均値を採用。
  - 課題と小テストを合計して、整数値に四捨五入したものを前期末成績とした。

### Git/GitHub の学習について

Git / GitHub の理解や活用は **初学者にとっては非常に難しいもの** です。実際に、講師自身も非常に苦労した記憶があります。実際問題として <u>ある程度の時間を空けて3回ほど学びなおしてみて、やっと腑に落ちる</u> ぐらいが普通だと思います。

とはいえ**開発現場 (例えば開発系の就職やインターンシップなど) では必須となるスキル**なので、難しいからという理由で学習を避けるわけにもいきません。それに、少なくとも1回目の「学び」をしなければ、３回目の「学び」での腹落ちもあり得ません。苦しいですが頑張ってください。

なお、おすすめ学習法は、**分からないなりにも積極的に Git/GitHub を利用していくこと** です。


::: {.balloon .char-01 .face-05 .tone-blue}
例えば、インスタ (Instagram) でも「フィールド」「ストーリー」「リール」「ハッシュタグ」「メンション」「DM」「シェア」「タイムライン」「アクティビティ」「エンゲージメント」「リーチ」「インサイト」などの「操作」や「概念・用語」がありますが、分からないなりに日常的に使っていくうちに自然と覚えたり理解できるようになった思います。また、実際のところ、最低限の利用で必要な操作や概念は、かなり限られています。

Git / GitHub でも、それは同じです。高専祭に向けた開発などで日常的に使いながら覚えていきましょう。
::: 


### 復習

[前回講義](lecture14.html)では ***Git/GitHub*** に関連して次のような内容を取り上げました。**今回の講義内容は、以下の操作が「資料」を見なくてもできることを前提** としています。

1. PCのローカルストレージに「プロジェクトフォルダ」を新規作成して VSCode でオープンすること。👉 [参考](lecture14.html#プロジェクトフォルダの作成)
1. VSCode を使ってプロジェクトフォルダに任意のファイル (例えば `README.md` など) を追加作成し、それを **リモートリポジトリ (GitHub) に公開** すること。👉 [参考](lecture14.html#ファイルの追加)
    - ***重要補足*** ここでは VSCode によりバックグラウンドで `git init` コマンドに相当する「**Gitの初期化**」も同時に行われています。具体的には、プロジェクトフォルダのなかに `.git` というフォルダ (隠しフォルダ属性) が作成され、プロジェクトフォルダが **ローカルリポジトリ** としてGitの管理下におかれるようになります。
    - Gitの管理下にあるフォルダでは、ファイルやフォルダの追加・削除・変更などが Git により追跡されるようになります。
1. ローカルリポジトリにあるファイルの内容を編集して、それを VSCode 上で「**コミット**」してリモートリポジトリ (GitHub) に「**プッシュ**」すること。👉 [参考](lecture14.html#ファイルを変更してコミットプッシュ)
    - ここではバックグラウンドで `git commit` コマンドや `git push` コマンドに相当する処理が行なわれています。
1. リモートリポジトリ (GitHub) の内容をウェブブラウザから確認すること。
1. リモートリポジトリにあるファイルをウェブブラウザから直接編集して **コミット** すること。👉 [参考](lecture14.html#リモートリポジトリでのファイル変更と同期)
1. リモートリポジトリ側で変更・コミットされた内容を、VSCode上でローカルリポジトリ側に取り込むこと (同期させること)。
    - ここではバックグラウンドで `git pull` コマンドに相当する処理が行なわれています。`git pull` コマンドは `git fetch` コマンドと `git merge` コマンドを組み合わせた操作と考えてください。


<div class="note type-tips">
**README.md とは**

`README.md` は GitHub において **プロジェクトで開発しているアプリの使い方や、プロジェクトの説明を記述するファイル** (マークダウン形式のファイル) です。この名前が付いたファイルは、ウェブブラウザから GitHub のリモートリポジトリにアクセスしたときに、トップページに自動表示されるようになります。

例えば、ディープラーニングに対応した機械学習のソフトウェアライブラリである **TensorFlow** は OSS (Open Source Software) として GitHub で開発されていますが、その[リポジトリ](https://github.com/tensorflow/tensorflow) にアクセスして、画面を少し下方にスクロールすると `README.md` として TensorFlow の概要が示されています。

TensorFlow は「テンサーフロー」または「テンソルフロー」と読みます。

</div>

### 定着確認

次回の講義で **_小テスト6_** を実施します。

- Git は主にソースコードのバージョンを管理するための <span class="masked">ソフトウェア (アプリ)</span> である。一方で、GitHub は、Git で管理しているソースコードをプロジェクトチーム (複数人) で簡単に共有することを主機能とする <span class="masked">ウェブサービス</span> である。
- Git において変更履歴を保管しておく場所のことを <span class="masked">リポジトリ</span> という。
- Git においてファイルの変更履歴を記録する操作を <span class="masked">コミット (commit) </span> という。また、この際に添えるメッセージのことを <span class="masked">コミットメッセージ</span> といい、これには日本語を使うことが <span class="masked">できる</span> 。
- ローカルリポジトリの内容をリモートリポジトリにアップロードする操作を <span class="masked">プッシュ (push)</span> という。
- リモートリポジトリの内容をローカルリポジトリにダウンロードして統合する操作を <span class="masked">プル (pull)</span> という。

**各種 Linux / Git コマンド** についても、機能概要を把握しておいてください。

## コマンドラインによる Git/GitHub の操作

前回の講義では VSCode の GUI (=Graphical User Interface) を通じて Git を操作する方法を学びました。


実務においてもコミットやプッシュなどの**単純操作**については VSCode から実行することが多いですが、**VSCode の GUI が対応していない複雑な Git 操作については、** <span class="masked">コマンドラインに git コマンドを入力して実行</span> **すること求められます** (つまり、皆さんはコマンドラインからの Git 操作も覚える必要があります)。

<div class="note type-senior">
**Arduino IDE と Git の組合せ**

Arduino 関連の開発のように VSCode を IDE (Integrated Development Environment: 統合開発環境) として使用しない場合においても、コマンドラインから Git を操作することが求められます。

</div>

ここでは、前回講義で VSCode 経由で実行した一連の Git 操作が **コマンドラインからでも同様に実行できることを体験・確認しておきます**。

Windows のスタートボタンを右クリックして「ターミナル」を起動し、ターミナルタブを ***Git Bash*** に切り替えておいてください。**Git Bash** に切り替えることで、**現在のブランチ** (ブランチの詳細は次回講義で解説) が表示されるようになり、また文字に適切な色が付き、さらに `ls` などの <span class="masked">Linux系のコマンド</span> も使えるようになります。

![img](figs/14/bash-terminal.png)


<div class="note type-senior">
**Git Bash の機能**

Git Bash は git 管理下にあるフォルダにいるとき、次のように**現在のブランチ** (下記の例では `main` ) を常時表示してくれます。git のコマンドライン操作では <span class="masked">現在どのブランチにいるか</span> という情報は極めて重要となるため、このブランチ表示機能は非常に便利です。

![img](figs/15/git-bash-01.png)

なお、`MINGW64` などを表示したくない場合などは、次のファイルを編集することで **表示をカスタマイズすること** ができます。
`C:\Program Files\Git\etc\profile.d\git-prompt.sh`

</div>

以下、`C:\Users\xxxx\Documents` の直下に「プロジェクトフォルダ」を作成して作業していきます。`xxxx` の部分は各自で読み替えてください。なお `xxxx` の部分に**日本語が含まれていると正常に動作しない可能性があります**。


::: {.balloon .char-01 .face-01 .tone-pink}
ドキュメントフォルダを OneDrive 同期している学生は、その影響のないフォルダで作業することを強く推奨します。OneDrive 同期のフォルダで作業すると予期せぬトラブルが発生することがあります。
:::

なお、以降で **Linux系のコマンド** を使用しますが、これは前期の「工学基礎実習」のネットワーク系テーマのなかで既に学んでいる内容です (<span class="masked">PC と Raspberry Pi を接続してコマンドラインからの操作でネットワーク設定</span> をしているはずです)。

<div class="note type-caution">
**注意**

以降の作業は、`git init` で初期化したときのデフォルトブランチが `main` であることを前提としています。

`git config --system -l` コマンドで、現在の設定が `init.defaultbranch=main` となっていることを確認してください。特に、前回授業で、Git を新規インストールしていない場合は `main` ではなく `master` になっていない可能性があります。

`init.defaultbranch=master` や、その他に設定されている場合は、ターミナルを **管理者モード** で開いて、以下のコマンドを実行して、デフォルトブランチが `main` になるようにすることをお勧めします。

```
git config --system init.defaultbranch main
```

</div>


### プロジェクトフォルダの作成

カレントフォルダを `C:\Users\xxxx\Documents` に切り替えるために `cd` コマンドで <span class="masked">フォルダ移動</span> します。`cd` は「**Change Directory**」の略称です。

以下のコマンドを入力してください (`$` は<span class="masked">プロンプトの入力促進記号なので実際には入力しません (以下同様)</span>)。なお、**Git bash 環境**では、パスの区切り文字にスラッシュ `/` が利用できるので、ここではスラッシュを使用していきます。

パスの表記法 (絶対パス/相対パス) については、前期の「情報2」の第06回講義ノートを参照してください。

```
$ cd /c/Users/xxxx/Documents
```

カレントフォルダ (=現在位置) を確認するために `pwd` コマンドを入力します。`pwd` は「**Print Working Directory**」の略称です。**Git bash 環境** (疑似Linux環境) では <span class="masked">ドライブが「フォルダ (ディレクトリ)」として扱われる</span> ので、絶対パスの先頭が `c:` ではなく `/c/` のように表記されます。

```
$ pwd
/c/Users/xxxx/Documents
```

この位置に `GitHub-Test-2` というフォルダを作成するために `mkdir` コマンドを入力します。`mkdir` は「**Make Directory**」の略称です。また `cd` コマンドを使って、作成したフォルダ内に移動します。

```
$ mkdir GitHub-Test-2
$ cd GitHub-Test-2/
```

正しくフォルダ移動ができたことを `pwd` (=Print Working Directory) で確認します。ここは、**必ず確認**してください。コマンドの応答が `/c/Users/xxxx/Documents` の場合、適切にフォルダ移動ができていません。

```
$ pwd
/c/Users/xxxx/Documents/GitHub-Test-2
```

カレントフォルダ (＝現在のアクティブなフォルダ) の中身を確認するために `ls` コマンドを入力します。詳細表示したいので `-al` オプションをつけます。なお、`ls` は「**List**」の略称です。

```
$ ls -al
total 4
drwxr-xr-x 1 xxxx 197121 0  9月 22 12:57 ./
drwxr-xr-x 1 xxxx 197121 0  9月 22 12:57 ../
```

これにより、現在、このフォルダの内容は「**空**」であることが確認できました。情報2の第06回講義で学習したように `./` は <span class="masked">「カレントフォルダ」</span> を意味し、`../` は <span class="masked">「親フォルダ」</span> を意味します。これらの特殊フォルダ表記は、空のフォルダ内容を `-a` オプションを付けて表示したときにも出力されます。

念のために `-l` オプションだけを付けて `ls` を実行してみます。

```
$ ls -l
total 0
```

これより `GitHub-Test-2` フォルダの中身が「空」であることを改めて確認できました。

また、`explorer .` をコマンド入力すると、Windows の「エクスプローラ」で <span class="masked">カレントフォルダを開くこと</span> ができます。**ドットの入力を忘れないようにしてください**。

```
$ explorer .
```

VSCode上でも、フォルダの中身が「空」であることが確認できました。

<div class="note type-tips">
**コマンドオプション**

Linuxコマンドのあとに `-` や `--` をつけて入力する文字を **(コマンド) オプション**といいます。例えば、`ls` のコマンドのオプションについて調べたいときは「[lsコマンド オプション](https://www.google.com/search?q=lsコマンド+オプション)」のようにウェブ検索してください。

`ls` の `a` オプション、`l` オプションの意味については**各自で調べて**ください。情報系技術者であれば常識として知っておいてほしい内容になります。
</div>


### Gitの初期化

このプロジェクトフォルダを「ローカルリポジトリ」として Git のバージョン管理下に置くために `git init` コマンドを入力します。`init` は Initialize (初期化する) の略語です。情報系では頻出するので覚えておいてください。

```
$ git init
Initialized empty Git repository in C:/Users/xxxx/Documents/GitHub-Test-2/.git/
```

これによりプロジェクトフォルダ内に `.git` という「隠しフォルダ」が作成されます。`ls -al` で確認してみます。Linux系では、**名前がドットから始まるファイルやフォルダ**は、通常「隠しファイル」や「<span class="masked">設定ファイル</span>」、「隠しフォルダ」とされます。`ls` コマンドで隠しフォルダやファイルを表示するためには `a` オプションが必要になります。

```
$ ls -al
otal 8
drwxr-xr-x 1 xxxx 197121 0  9月 22 14:03 ./
drwxr-xr-x 1 xxxx 197121 0  9月 22 12:57 ../
drwxr-xr-x 1 xxxx 197121 0  9月 22 14:03 .git/
```

通常の利用範囲では、皆さんが この `.git` のフォルダの内容に対して**直接的な操作をすることはありません** (誤って内容を変更したり、削除したりすると Git によるバージョン管理が壊れるので注意してください)。

これで、このプロジェクトフォルダは Git の管理下におかれます。`git status` コマンドで git の状態を確認してみます。

```
$ git status
On branch main

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

上記の各メッセージは次のような意味になります。

- `On branch main`
  - 現在の**ブランチ**は `main` です。
  - **ブランチ** (枝) の概念については、追々、学んでいきます。とりあえず、現時点では「**main という名前をつけた変更履歴の世界線にいる**」という程度の理解でいてください。気になる人は [ウェブで検索](https://www.google.com/search?q=git+ブランチとは) してみてください。
- `No commits yet`
  - まだコミット (=変更履歴の記録) は存在しません。
- `nothing to commit (create/copy files and use "git add" to track)`
  - ファイルを作成するかコピーしてきて `git add` コマンドにより、そのファイルを **トラッキング (=追跡) の対象** にしてください。「**トラッキング対象にする**」とは <span class="masked">Gitによって変更履歴を管理する対象 (バージョン管理する対象) にする</span> という意味になります。

### ファイルの作成とコミット

メモ帳などの適当なテキストエディタを使って `README.md` というファイル (拡張子に注意) をプロジェクトフォルダ内に作成して、次のような内容を記述して保存してください。

```markdown{.numberLines caption="README.md"}
# コマンドラインから git 操作
- gitの初期化 `git init`
- gitの状態確認 `git status`
```

ファイルを保存するとき、文字コードは「**UTF-8 (BOMなし)**」となるように注意してください。また、ファイル名が `README.md.txt` のような <span class="masked">2重拡張子とならない</span> ように注意してください。

![img](figs/15/notepad-save.png)

なお、コマンドラインから次のように打ち込むと **「メモ帳」が起動し** `README.md` **の新規作成ができます**。ただし、このように起動すると <span class="masked">メモ帳のウィンドウを閉じるまでは、コマンドラインは操作できない (入力できない)</span> ので注意してください。

```
$ notepad README.md
```

ファイルが保存できたら `ls -al` コマンドでプロジェクトフォルダの内容を確認します。フォルダ内に `README.md` が追加されたことを確認してください。

```
$ ls -al
total 9
drwxr-xr-x 1 xxxx 197121   0  9月 22 14:26 ./
drwxr-xr-x 1 xxxx 197121   0  9月 22 12:57 ../
drwxr-xr-x 1 xxxx 197121   0  9月 22 14:12 .git/
-rw-r--r-- 1 xxxx 197121 105  9月 22 14:28 README.md
```

この状態で、再度 `git status` を実行して Git のステータス (状態) を確認します。

```
$ git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

nothing added to commit but untracked files present (use "git add" to track)
```

ここで注目すべきは `Untracked files:` 以降のメッセージです。`README.md` が `Untracked` (非追跡対象) の状態、つまり、コミットの対象になっていない (=ステージングされていない状態である) ことが書かれています。また、このファイルをコミット対象とするためには `git add README.md` コマンドを使って登録するようにヒントが指示されています。

`README.md` をコミット対象に加えるため `git add` コマンドで[ステージング](lecture14.html#ファイルを変更してコミットプッシュ) (=ステージングエリアに対象ファイルを追加する処理) をします。

```
$ git add README.md
warning: in the working copy of 'README.md', CRLF will be replaced by LF the next time Git touches it
```

ここで「**warning**: in the working copy of 'README.md', CRLF will be replaced by LF the next time Git touches it」は...

> `README.md` というファイルの行末が `CRLF` であるが、コミットなどの git 操作により、これが `LF` に置き換えられる

...ということを警告しています。これは [意図的に設定していること](lecture14.html#要変更改行コードに関する設定) なので問題ありません。

再度、`git status` で Git ステータスを確認します。

```
$ git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   README.md
```

<div class="note type-tips">
**git add コマンド**

`git add README.md` コマンドは、VSCode での Git 操作で言えば、次のように「**+**」アイコンをクリックすることにより

![img](figs/15/git-command-01.png)

次のように `README.md` を**ステージングする操作** (=次のコミット対象として選択する操作) に相当します。このようにステージングすることを「**ステージングエリアに追加する/移動する**」のように表現することもあるので覚えておいてください。

![img](figs/15/git-command-02.png)


</div>

つづいて `git commit` コマンドを使って「**プロジェクトフォルダに** `README.md` **を新規作成した**」という変更履歴を ***コミット*** していきます。`-m` のオプションにつづけて (ダブルクォーテーションで括った) **コミットメッセージ** を指定します。

**慣例的**に最初のコミットには `first commit` や `initial commit`、`init commit` というコミットメッセージを付けます。コミットメッセージには <span class="masked">日本語も使えます</span>。

```
$ git commit -m "first commit"
[main (root-commit) 0cd9a26] first commit
 1 file changed, 3 insertions(+)
 create mode 100644 README.md
```

再度、`git status` で git 状態を確認します。

```
$ git status
On branch main
nothing to commit, working tree clean
```

これ (=`nothing to commit, working tree clean`) は、現在のリポジトリ (厳密には Working Tree) において、**コミット対象とするような変更操作はない**という状態、つまり、<span class="masked">前回コミット以降、特に変更が加えられていない状態</span> であることを示しています。


<div class="note type-caution">
**重要 : コミットメッセージを付けずにコミット操作をすると...**

コマンドラインで `-m` オプションを付けずに `git commit` を実行したり、次のように VSCode 上で **コミットメッセージ欄を空欄**でコミットボタンを押下すると...

![img](figs/15/git-command-03.png)

Git の[インストール時に設定したデフォルトテキストエディタ](lecture14.html#git-で使用する既定のテキストエディタの設定) (前回授業のインストール設定どおりであれば VSCode ) が自動起動して「**COMMIT_EDITMSG**」というファイルにコミットメッセージを入力するように促されます。

ここで立ち上がった「**COMMIT_EDITMSG**」のタブをそっと閉じれば ***コミットはキャンセルされます*** 。

![img](figs/15/git-command-04.png)

また、以下のようにコミットメッセージの「タイトル」と「詳細」を記述して**保存してからタブを閉じれば** そのコミットメッセージで ***コミットが実行されます***。

![img](figs/15/git-command-05.png)

一般に `COMMIT_EDITMSG` (コミットメッセージ) は、次のように構成します。`#` から開始する行は無視されます。また、詳細は省略することができます (その場合、1行目にタイトル (概要) だけを記入して保存してタブを閉じてください)。

```markdown{caption="COMMIT_EDITMSG"}
1行目：タイトル (変更内容の概要)
2行目 ：空行
3行目以降：詳細 (変更した理由の詳細)
```

詳しくは「[git コミットメッセージ 書き方](https://www.google.com/search?q=git+コミットメッセージ+書き方)」などでウェブ検索してください。

</div>

以上で、**ローカルリポジトリ** (≠リモートリポジトリ) に変更履歴が記録された、という状態になります。なお `git log` コマンドでコミットの履歴を確認できます。

### リモートリポジトリにプッシュ

つついて GitHub に **リモートリポジトリ** を作成して、そこにローカルリポジトリの内容を ***プッシュ*** (アップロード) していきます。

準備として [GitHub](https://github.co.jp/) にログインして `GitHub-Test-2` という **_空のリポジトリ_** を作成しておきます。基本的にはプロジェクトフォルダ (ローカルリポジトリ) と同じ名前にしておくことがお勧めですが、違う名前を設定することもできます。

GitHub で **空のリポジトリ** を作成する方法についてはウェブの情報を参照してください。作成時には <span class="masked">「Add a README file」のオプションにチェックを入れない</span> ように注意してください。また「**Public**」なリポジトリとしてください。

<div class="note type-caution">
**ここでは空のリモートリポジトリを作成**

ここで新規作成するリモートリポジトリには `.gitkeep` や `.gitignor`、`README.md` なども一切含まれない**完全に「空」のリポジトリとしてください**。何らかのファイルを含む場合、以下の「プッシュ」のステップで失敗する可能性があります。 

次のように、設定すれば完全に **空のリモートリポジトリ** を作成することができます。

![img](figs/15/github-01.png)

</div>


作成したリモートリポジトリの URL `https://github.com/zzzz/GitHub-Test-2.git` をメモしておいてください、以降の作業で必要となります。

<div class="note type-senior">
**コマンドラインから GutHub にリポジトリを新規作成するには**

前回講義で学んだ VSCode を使う方法では、VSCode から GitHub に新規リポジトリを作成することができました。この操作をコマンドラインから行なうためには、別途 [GitHub CLI](https://www.google.com/search?q=GitHub+CLI) というソフトのインストールが必要になります。

- CLI: Command Line Interface。

この授業で扱う範囲では GitHub CLI を使用する必要性は高くないので、ここではウェブブラウザ上から新規リポジトリを作成してもらっています。
</div>


ローカルPCの Git bash の操作に戻ります。`pwd` でカレントフォルダが `/c/Users/xxxx/Documents/GitHub-Test-2` であることを再確認してください。

`git remote add` コマンドを使って「ローカルリポジトリ」といま作成した「リモートリポジトリ」を紐づけます。以下のコマンドを実行することで、以降 `https://github.com/zzzz/GitHub-Test-2.git` を `origin` というショートカットネームで扱えるようになります。Git では **慣例的にメインとなるリモートリポジトリに** <span class="masked">`origin`(オリジン)</span> **という名前をつけます**。

```
$ git remote add origin https://github.com/zzzz/GitHub-Test-2.git
```

実行してエラーが返ってこなければ成功です。ここで設定した**リモートリポジトリURL**は `git remote -v` コマンドで確認できます。

```
$ git remote -v
origin  https://github.com/zzzz/GitHub-Test-2.git (fetch)
origin  https://github.com/zzzz/GitHub-Test-2.git (push)
```

もし、間違って設定した場合は `git remote remove origin` コマンドで情報を削除して、再度 `git remote add` コマンドを実行してください。

準備ができたので `git push` で、ローカルリポジトリの内容を、リモートリポジトリに ***プッシュ*** していきます。次のように `git push -u origin main` とコマンドを入力します。

```
$ git push -u origin main
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 16 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 347 bytes | 347.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/zzzz/GitHub-Test-2.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
```

上記のコマンドは「現在のブランチを `origin` の `main` ブランチにプッシュせよ」という意味になります。
ここで「現在のブランチ」は `git status` で確認したようにローカルリポジトリの `main` です。また `origin` とは `https://github.com/zzzz/GitHub-Test-2.git` に名付けたショートカットネームでした。つまり、**ローカルリポジトリの** `main` **ブランチの情報 (変更履歴) を、リモートリポジトリの** `main` **ブランチにアップロードせよ**、という意味になります。

もし、認証要求があれば指示に従って GitHub の Username と Password を入力してください (前回の授業で VSCode からのプッシュ操作を通じて認証を済ませており、その情報を Git が持っているので認証要求はされないと思います)。

念のため、ウェブブラウザで GitHub の `GitHub-Test-2.git` のトップページにアクセスして (必要に応じてウェブブラウザをリロードして)、ローカルリポジトリの内容 (新規作成した `README.md`) がリモートリポジトリに反映されていることを確認してください。

![img](figs/15/git-command-06.png)

以上のように Git 操作は、本来、コマンドラインから実行します。ただし、この方法は煩雑であるため VSCode や Sourcetree、[GitHub Desktop](https://desktop.github.com/) などのGUIアプリが使用されなす。なお、中級者以上はコマンドラインからの操作を好む傾向にあります。

### リポジトリの削除

このセクションで作成した「ローカルリポジトリ」と「リモートリポジトリ」を削除しておいてください。

## HTML/CSSの基礎

GitHub を利用したチーム開発のチュートリアルとして「**ウェブページの作成**」を取り上げる関係で、簡単に **HTML/CSS** について学んでおきます。HTML/CSS はインターンシップや就職・進学にむけて **ポートフォリオ (ウェブページ)** を作成するときにも利用します。

<div class="note type-senior">
**ポートフォリオとは**

IT系エンジニアを目指す学生にとっての「ポートフォリオ」とは <span class="masked">自分のスキルや経験、成果物をまとめて示すもの</span> です。履歴書や職務経歴書が「経歴」を示すことに対し、ポートフォリオは「自分は何ができるのか」を具体的に示す資料となります。具体的な内容としては「自己紹介」「**スキルセット (使用経験のあるプログラミング言語や開発環境、フレームワーク、クラウドサービス、ツールなど)**」「**成果物・制作物**」「**資格 (情報技術/その他)**」「**コンテスト・ハッカソン・イベント・セミナー・会社見学・インターンシップなどの参加歴**」「その他 (GutHub / AtCoder / Techful / SNS などのリンク) 」などを記載します。

内容の特性上、一般にはウェブページの形式で作成・公開されることが多いです。以下、ポートフォリオの作成例です。

- [ポートフォリオの作成例 2025-2I](https://omunet-my.sharepoint.com/:t:/g/personal/z21707r_omu_ac_jp/EcJwJ2lr6IxFozn_2lk7m6MB6PySj6NiE7ZfZXXHDbLnXQ?e=gVwSVv)&ensp;(学内のみ OneDrive)
- [ポートフォリオの作成例 2025-3I](https://omunet-my.sharepoint.com/:t:/g/personal/z21707r_omu_ac_jp/IQCkOzgKalDQTZEeh6XCMrQwAWOPlADts2bcmXen3DXRWWQ?e=Rhiwcx)&ensp;( 〃 )
- [ポートフォリオの作成例 2025-4I](https://omunet-my.sharepoint.com/:t:/g/personal/z21707r_omu_ac_jp/IQBUE_4Sm5ZDR6k5gu1YdJv7AeB4uR8Q-CCsUR6k9zy_FOo?e=uDmmGo)&ensp;( 〃 )

</div>

普段、私たちが目にしているウェブページは ***HTML*** (**HyperText Markup Language**) と ***CSS*** (**Cascading Style Sheets**) という言語を組み合わせてつくられています。いずれも、Pythonプログラムと同じように実体は <span class="masked">テキストファイル</span> であり、それを Chrome や Edge などのウェブブラウザが解釈して **レイアウトなどを整え装飾を施したウェブページとしてレンダリング** して表示しています。

なお、ウェブブラウザがウェブサーバから HTML や CSS を取得するときに使用する**プロトコル** (通信の規約・規則) を <span class="masked">HTTP (Hypertext Transfer Protocl)</span> といいます。

<div class="note type-tips">
**ウェブデザイナー**

[ウェブデザイナー](https://careergarden.jp/webdesigner/)はウェブサイトやウェブサービス、ウェブアプリケーションなどの <span class="masked">「外観」「視覚要素」「使いやすさ (UI/UX) 」</span> などを主に設計・実装する仕事です。この仕事ではデザインの知識に加えて、それを実際に形にするために **HTML/CSS の理解と知識、実践スキルが求められます**。その他にも JavaScript や Adobe Photoshop、Illustrator などのデザインソフトのスキルも要求されます。

- 参考: [YouTube検索「Web制作 Web開発 違い」](https://www.youtube.com/results?search_query=Web制作+Web開発+違い)
- 参考: [Googel検索「Web制作 Web開発 違い」](https://www.google.com/search?q=Web制作+Web開発+違い)

ウェブデザイナーの仕事では経験や実績も重視さるため、将来ウェブデザイナーを目指す場合、早期に HTML と CSS を学び、ポートフォリオを充実させていくことが大切です。また、企業に所属せずにフリーランス・個人として活躍する人も多いのが、ウェブデザイナーの特徴のひとつです。
</div>

### 準備

HTMLとCSSの概要を学ぶために「**カレーのレシピを掲載する簡素なウェブページ**」を制作してみます。適当な場所に `Curry-Recipe` という名前のプロジェクトフォルダを作成し、それを VSCode で開いてください。

<div class="note type-tips">
**HTMLとCSSの役割りの違い**

**HTML（HyperText Markup Language）** はウェブページの構造や内容 (コンテンツ) を記述するために使用されます。一方で **CSS（Cascading Style Sheets）** はウェブページのレイアウトや体裁、装飾を制御するために使用されます。端的に言えば HTML は <span class="masked">何を表示するか</span> を、CSSは <span class="masked">どのように表示するか</span> を担当する言語になります。

具体的には、HTMLでは「これはタイトルです」「これはリンクです」「これはXXXの子要素です」のように**テキストコンテンツに意味**を与えます。一方で、CSSでは「このテキストは赤色です」「この要素は画面の右上に配置します」といった**純粋な視覚的な情報**を与えます。

なお、**CSSを使用せずにHTMLだけでもウェブページを作成することも可能**です。しかし、その場合、デザインやレイアウトのカスタマイズが限られることになります。
</div>

### HTML

HTML (HyperText **Markup** Language) は、元となる文章 (プレーンテキスト) に対して `<strong>` と `</strong>` のような **タグ** と呼ばれるものを使って**マークアップ**することで (=意味付けすることで) 、<span class="masked">「見出し」「段落」「リスト (箇条書き)」「リンク」「表」「画像の埋め込み」</span>といったページ構造や意味を定義するマークアップ言語です。

実際に `index.html` というHTMLファイルを作成して、それがウェブブラウザから閲覧できることを確認してみます。

適当な場所に `Curry-Recipe` というプロジェクトフォルダを作成して VSCode でオープンし、そこで `index.html` というファイルを新規作成して、以下の内容を貼り付けて保存してください。

```html{.numberLines caption="index.html"}
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>XXX's Curry Recipe</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, user-scalable=yes"
    />
  </head>

  <body> <!-- ここから本文開始 -->

    <h1>XXX's Curry Recipe</h1>
    <p>
      我が家に伝わる一子相伝・門外不出の<strong>秘伝のカレーレシピ</strong>を
      今だけ特別に大公開！<br />
      このカレーがなぜ代々受け継がれてきたのか、その魅力をあなたも実感してください。
      秘伝のスパイスと調理法、家族を幸せにする魔法の一皿を体験してください！
    </p>

    <img src="curryrice.jpg" alt="カレーライスの画像" width="100%" />

    <h2>材料</h2>
    <p>
      <strong>8皿分の分量</strong
      >です。予算や気分にあわせて具材を追加したり、量を調整してください。
    </p>

    <ul>
      <li>市販のカレールー（中辛）... 1/2箱</li>
      <li>鶏肉 ... 400g</li>
      <li>玉ねぎ ... 3個（中サイズ）</li>
      <li>にんにく ... 1片</li>
      <li>水 ... 700ml</li>
      <li>サラダ油 ... 大さじ1</li>
      <li>
        <a href="https://ja.wikipedia.org/wiki/ガラムマサラ">ガラムマサラ</a>
        ... 適量
      </li>
    </ul>

    <h2>作り方</h2>
    <p>近日大公開！</p>
  </body> <!-- ここまで本文終了 -->
</html>
```

ファイルを保存するときは VSCode のウィンドウ右下に表示される文字コードが「**UTF-8**」になっていることを確認してください。

![img](figs/15/char-set.png)

また `<img src="curryrice.jpg" alt="カレーライスの画像" width="100%" />` のタグで画像を表示するために、次の画像を[ダウンロード](figs/15/curryrice.jpg)してプロジェクトフォルダの `index.html` と同じ階層に `curryrice.jpg` という名前で保存してください (この画像は生成系AIで作成したものであり、著作権などの問題はありません) 。

![img](figs/15/curryrice.jpg)

以上が完了したら、エクスプローラでドキュメントフォルダを開き `index.html` をダブルクリックします。標準的な環境であれば、ウェブブラウザが起動してレンダリングされた HTML を確認することができます。現時点では **CSSを適用していないため、簡素で地味なユーザーフレンドリーとは言えないページ** となっていることが分かると思います。

<div class="note type-senior">
**VSCode拡張機能: Live Server**

VSCodeに **Live Server** という拡張機能をインストールすると VSCode で編集した HTML/CSS/JavaScript の**変更内容をリアルタイムにウェブブラウザに反映させることができます** (ブラウザ側で手動でリロードする必要がなくなります)。VSCode の拡張機能の検索欄に `ritwickdey.liveserver` を入力すれば「Live Server」という拡張機能を見つけることができます (ぜひインストールしておいてください)。

インストール後は、次のようにウィンドウ右下に **Go Live** というアイコンが表示されるので、それをクリックするとブラウザが起動して VSCode 上でのファイル編集がリアルタイム反映されるようになります。詳しい機能や使い方に関しては「[VSCode Live Server](https://www.google.com/search?q=VSCode+Live+Server)」でウェブ検索してください。

![img](figs/15/live-server.png)

</div>

#### HTMLのタグの意味

***HTMLタグ*** とは「HTMLファイルに記述するマークアップのための記号」で、特定のキーワードを **角括弧** `<` と `>` で囲んだものです。HTMLに利用可能なタグ一覧は「[HTML タグ一覧](https://www.google.com/search?q=HTML+タグ一覧)」などでキーワード検索してください。

一般に、タグには **開始タグ** (例えば `<strong>`) と、**終了タグ** (例えば `</strong>`) があり、終了タグにはスラッシュ `/` が付きます。

上記の `index.html` に使われている各タグの概要は次のとおりです。

- `<!DOCTYPE html>`: このテキスト (HTMLファイル) が HTML5 で書かれていることをブラウザに通知します。これにより、ブラウザがテキストを適切に解釈・表示できます。
- `<html lang="ja">`: HTML 文書全体を囲む最も外側の要素です。`lang="ja"` 属性は、このページが日本語であることを示しています。
- `<head>`: この要素は、メタデータやリンク、スクリプト、スタイルシートなど、ページに関する補足情報を含みます。
- `<meta charset="utf-8" />`: このファイルの文字エンコーディングが「UTF-8」であることを示しています。実際のファイルの文字コードにあわせて適切に設定しないと <span class="masked">文字化け</span> が生じます。
- `<title>`: ブラウザのタブやウィンドウで表示されるページのタイトルを設定します。
- `<body>`: この要素内にページの主要なコンテンツ (テキスト、画像、リンクなど) を配置します。
- `<h1>`, `<h2>`: 見出しを作成します。`<h1>` はトップレベル (第1レベル) の見出し、`<h2>` はその次のレベル (第2レベル) の見出しを意味します。
- `<p>`: 段落 (パラグラフ) を作成します。
- `<strong>`: テキストを強調します。
- `<img>`: 画像を埋め込みます。`src`属性でファイルパス、`alt`属性で代替テキスト、`width`属性で幅を指定します。
- `<ul>`: 「・」を行頭記号とする箇条書きを作成します。この要素の内部に `<li>` を配置します。
- `<li>`: 箇条書きの各項目を定義します。
- `<a>`: アンカータグです。<span class="masked">ハイパーリンク</span> を作成する際に使用され `href` 属性でリンク先URLを指定します。

各タグの詳細はウェブ検索したり、[ChatGPT](https://chat.openai.com/chat)や Bing AI などの生成系AIで「**HTMLの**`<a>`**タグについて初心者向けに解説してください。**」などと質問して解決してください (かなり丁寧に解説してくれます)。

#### 演習①

次の要求を満たすように `index.html` を編集し、その結果をウェブブラウザで確認せよ。

- ブラウザのタブと、ページトップに表示されるタイトルを「高専太郎’s Curry Recipe」に変更したい(「高専太郎」の部分は各自の名前 (ニックネームで可) を設定すること)。
- カレーの材料に「**じゃがいも ... 2個**」を追加したい。
- カレーの材料に「**ターメリック ... 適量**」を追加したい。また、ターメリックの文字をクリックしたときに Wikipedia の当該ページに遷移するようにしたい。
- 材料の説明文において「8皿分の分量です。」のあとに **改行** を入れて「予算や気分にあせて・・・」を表示したい。

3つとも既に記述済みの HTML を注意深く見れば、そこに **ヒント (ほぼほぼ解答)** があります。

### CSS

つづいて、ウェブページの **レイアウトや装飾を定義するCSSファイル** をプロジェクトフォルダに追加します。`main.css` というファイルを新規作成して、以下の内容を貼り付けて保存してください。

```css{.numberLines caption="main.css"}
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font-family: "Yusei Magic", sans-serif;
  --theme-color-1: #f50;
  --theme-color-2: #fc3;
  color: #454545;
}

body {
  color: var(--main-foreground);
  line-height: 1.5;
  word-wrap: break-word;
  box-sizing: border-box;
  max-width: 980px;
  margin: 2em auto;
  padding: 0px 30px;
}

h1 {
  position: relative;
  text-align: center;
  font-size: 280%;
  padding: 0.2em 0.5em;
  letter-spacing: 0.1em;
  text-shadow: #fff 2px 0, #fff -2px 0, #fff 0 -2px, #fff 0 2px, #fff 2px 2px,
    #fff -2px 2px, #fff 2px -2px, #fff -2px -2px, #fff 1px 2px, #fff -1px 2px,
    #fff 1px -2px, #fff -1px -2px, #fff 2px 1px, #fff -2px 1px, #fff 2px -1px,
    #fff -2px -1px, rgba(0, 0, 0, 0.5) 3px 3px 3px;
  background: var(--theme-color-2);
  box-shadow: 0px 0px 0px 5px var(--theme-color-2);
  border: dashed 2px white;
}

h1::after {
  position: absolute;
  content: "";
  left: -7.5px;
  top: -7.5px;
  border-width: 0 0 1em 1em;
  border-style: solid;
  border-color: #fff #fff var(--theme-color-2);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
}

h2 {
  position: relative;
  font-size: 200%;
  letter-spacing: 0.05em;
  font-weight: normal;
  padding: 0 0 0 1.5em;
  border-bottom: 3px solid var(--theme-color-2);
}

h2::before {
  position: absolute;
  left: 0.4em;
  font-weight: bold;
  font-family: "Font Awesome 6 Free";
  content: "\f5ad";
  top: 0.2em;
  font-size: 85%;
  color: var(--theme-color-2);
}

img {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 20px;
}

strong {
  font-style: normal;
  font-weight: normal;
  font-size: 125%;
  padding: 0 0.2em;
  color: var(--theme-color-1);
}

a {
  text-decoration: none;
  color: var(--theme-color-1);
  cursor: pointer;
  border-bottom: 1.5px dashed;
  transition: background-color 0.5s;
}

a:hover {
  color: white;
  background-color: var(--theme-color-1);
  border-radius: 4px;
  border-bottom: none;
}

ul {
  list-style: none;
  padding: 0;
  margin-block-start: 0.7em;
  margin-block-end: 0.7em;
}

ul li {
  position: relative;
  padding: 0 0 0 1.6em;
  margin: 0;
  text-indent: 0.5em;
}

ul li::before {
  position: absolute;
  left: 0.5em;
  top: 0.4em;
  font-size: 75%;
  font-family: "Font Awesome 6 Free";
  font-weight: bold;
  content: "\f816";
}
```

さらに `index.html` ファイルなかの `<head>` から `</head>` の範囲を**次の内容に差し替えて上書き保存してください**。`<link>` タグを使用して <span class="masked">各種スタイルシートを取得して読み込ませる</span> ようにしています。

```html{.numberLines caption="index.html (抜粋)"}
<head>
  <meta charset="utf-8" />
  <title>XXX's Curry Recipe</title>
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap" />
  <link rel="stylesheet" href="main.css" />
</head>
```

第07行目にある1個目の`<link>`タグでは「**アイコンフォントライブラリ**」を提供している[FontAwesome](https://fontawesome.com/icons/categories)というサービス関連のスタイルシートを読み込んでいます。これにより<i class="fa-solid fa-fish-fins"></i> <i class="fa-solid fa-faucet-drip"></i> <i class="fa-solid fa-poo"></i> <i class="fa-solid fa-skull"></i> のようなアイコンを装飾として利用できるようになります。

第10行目にある2個目の`<link>`タグでは [Google Fonts](https://fonts.google.com/?subset=japanese)から `Yusei Magic` (油性マジック) という日本語フォントのスタイルシートを読み込んでいます。閲覧環境・閲覧デバイスに左右されることなく、同じフォントで描画されたウェブページを提供可能になります。

第13行目にある3個目の`<link>`タグでは、先ほど作成した `main.css` というオリジナルのスタイルシートを読み込んでいます。

上記の書き換えが完了したら (HTMLもCSSも上書き保存されていることを確認したら) 、改めてウェブブラウザで `index.html` を開いて表示を確認してください。CSS (スタイルシート) が適用されたことで **雰囲気や UI/UX が大きく改善**されたことが確認できるはずです。

<div class="note type-tips">
**Chrome のデベロッパーツール**

Google Chrome で `F12` または `Ctrl+Shift+I` を押下すると「**デベロッパーツール (開発者向けツール) **」が起動します。デベロッパーツールでは <span class="masked">スマートフォンやタブレットなどのモバイルデバイス画面をエミュレート</span> することができます。

![img](figs/15/chrome_dev_tool.png)

プリセットとして用意されているデバイス・機種は限られているので、必要に応じて下記URLの情報を参考にエミュレートデバイスを追加・設定してください。上記画像の「iPhone 15 Pro」はカスタムで追加・設定したものです。

- [https://github.com/amirshnll/custom-device-emulation-chrome](https://github.com/amirshnll/custom-device-emulation-chrome)

この他、デベロッパーツールでは HTML / CSS / JavaScript の開発に役立つ機能が多数利用できます。詳しくは「[Chrome DevTools 使い方](https://www.google.com/search?q=Chrome+DevTools+使い方)」などでウェブ検索してください。

</div>

#### 演習②

次の内容に取り組んでください。

- プロジェクトフォルダをローカルリポジトリに設定し、さらに GitHub にリモートリポジトリを発行せよ。リモートリポジトリは「Public」とし、名称は「Curry-Recipe」とすること。
- リモートリポジトリ `Curry-Recipe` を GitHub Pages の機能によりウェブ公開せよ (URL は`https://xxxx.github.io/Curry-Recipe/` のようになるはずである) 。また、公開されたウェブページをブラウザから確認せよ。
- 公開されたウェブページのURLの **QRコード** を生成し、それを利用してスマートフォンからウェブページを確認せよ。
- HTML または CSS を編集し、その内容を「コミット」「プッシュ」することで、編集内容がウェブページにも反映されることを確認せよ。

既に体験しているため把握していると思いますが GitHub Pages の各種機能は即時反映型ではないので (=**内容や設定を変更しても、それが反映されるまでに少なくとも3分程度の時間がかかるので**) 注意してください。

以上、すべての演習を終えたらリモートリポジトリとローカルリポジトリを削除しておいてください。

### GutHubリポジトリのクローン

今後、**授業** や **実験実習** では「サンプルコード」や「開発環境や提出課題のテンプレート」が **GitHubリポジトリとして教員から提供・配付されること** があります。このようなケースでは、学生側で ***クローン*** というgit操作により <span class="masked">リモートリポジトリで公開されている内容 (サンプルコードやテンプレート) を自分のPCにダウンロードしてくる</span> (= リモートリポジトリ の内容を ローカルリポジトリ に**複製**する) という作業が必要になります。

ここでは、**GitHubリモートリポジトリで「提出課題のためのテンプレート(ひな形)」が配布されていて、それをベースとした開発を行ない、その成果を自分のGitHubアカウントのリモートリポジトリに発行し、そのURLを提出する**、という一連の流れについて解説します。この操作は、今後、実際に利用するものなので確実に習得してください。

#### URLの確認

はじめにリモートリポジトリのURLを確認します。

git のクローン操作に必要な URL は `https://github.com/TakeshiWada1980/Curry-Recipe-2.git` のように末尾が `.git` となる形式です。この URL はリモートリポジトリのトップページから、次のように取得することもできます。

![img](figs/15/git-clone-01.png)

<i class="fa-regular fa-copy"></i> アイコンをクリックすると URL がクリップボードにコピーされます。

#### git clone コマンドの実行

ターミナル (Git Bashモードを推奨) を起動して、`cd` コマンドを使って「ローカルリポジトリ (=プロジェクトフォルダ) を作成したいフォルダ」まで移動します。移動後は `pwd` コマンドで現在位置を確認しておきます。

```bash{caption="実行例"}
$ cd "C:\Users\xxxx\Documents"
```

次のように `git clone [URL]` とコマンド入力すると、カレントフォルダに `Curry-Recipe-2` という**フォルダが作成され**、そのなかにURLで指定したリモートリポジトリの内容がクローンされます。

```bash{caption="実行例"}
$ git clone https://github.com/TakeshiWada1980/Curry-Recipe-2.git
Cloning into 'Curry-Recipe-2'...
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (5/5), done.
Receiving objects: 100% (5/5), 151.90 KiB | 75.95 MiB/s, don
```

なお、**作成されるフォルダ名を変えることもできます**。例えば `My-Curry-Recipe` というフォルダにクローンしたい場合は `git clone [URL] My-Curry-Recipe` のようにコマンドを実行します。

#### 不要なファイルの削除

クローンによって作成されたフォルダの内部に移動します。

```bash{caption="実行例"}
$ cd Curry-Recipe-2/
```

`ls -al` で確認すると `.git` フォルダが存在することが確認できます。ここでは、提出課題のテンプレートとして使用するためにクローンしてきたので、元のリポジトリの git履歴 (`.git`の内容) は不要です。`rm` コマンドで `.git` **フォルダを削除**しておきます。

```bash{caption="実行例"}
$ rm -fr .git
```

この `.git` フォルダには元のリポジトリで使用していたgit設定 (config) なども含まれているため **残しておくと思わトラブルの原因** になります。特に必要性がない限り、一旦、削除してください。

#### Git初期化 / 開発 / GitHub発行

クローンしたテンプレートを使って開発を進めるために、**改めてGitの初期化を実行**します。そして、開発を進めて GitHubリポジトリを発行します。課題として提出する場合は GitHub リポジトリを「**Public**」に設定する点に注意してください。

VSCodeを使用してこれらを行なう方法は [前回の講義資料](lecture14.html#リモートリポジトリの発行) を参照してください。また、コマンドラインを使用する方法は [今回の講義の前半](#gitの初期化) を参照してください。

#### リモートリポジトリURLの提出

[先ほどの手順](#urlの確認)により「**GitHubリポジトリのURL** (末尾が `.git` のURL) 」を取得し、それを教員から指定された方法で提出します。

#### 演習③

GitHubリポジトリ `https://github.com/TakeshiWada1980/Curry-Recipe-2.git` をローカルリポジトリにクローンせよ。ただし、ローカルリポジトリ (=プロジェクトフォルダ) の名前は `My-Curry-Recipe` に変更すること。

また、リポジトリの内容 (`index.html` `main.css` `curryrice.jpg` ) には編集を加えず、自分の GitHub リポジトリに発行せよ。

※ 次のセクション「コンフリクトの発生と解消」には、このリポジトリを利用します。

## コンフリクトの発生と解消

::: {.balloon .char-01 .face-05 .tone-blue}
ここから先は、ここまでの内容を十分に理解できてから取り組んでほしいと思います。まだ Git/GitHub の基本操作に慣れていないうちは、無理に進めず、後回しにしても構いません。

一方で、今後必ず身につけてほしいスキルでもあります (この操作ができないと、インターンシップやチーム開発系のハッカソンなどに参加したときに周囲に迷惑をかけてしまう)。基本操作に慣れてきたら、改めてこのセクションに戻って学び直してください。
:::

### コンフリクトの概要

Git/GitHub でチーム開発をする場合、***コンフリクト*** という問題が生じることがあります。この **コンフリクト** は ファイルの「**変更の競合**」を意味し <span class="masked">2名以上が「同じファイルの同じ個所」に対して特定のタイミングで編集を加えて git 操作</span> すると発生します。

例えば、アリスとボブが**共通のリモートリポジトリを使ってチーム開発**をしているとき、次のような状況で「コンフリクト」が発生します。

1. アリスがリモートリポジトリから「**プル**」する。
2. アリスが `README.md` の**3行目**を編集する。
3. アリスが変更をローカルリポジトリに「**コミット**」する。
4. アリスがローカルリポジトリの内容をリモートリポジトリに「**プッシュ**」する。

上記の「ステップ1」以降、「ステップ4」の完了までの間に、ボブが以下の 1 から 4 の実行をすると**アリスが「ステップ4」を実行したときにコンフリクトが発生し、アリス側でそれを解消する必要が生じます**。

1. ボブがリモートリポジトリから「**プル**」する。
2. ボブが `README.md` の**3行目**を編集する。
3. ボブが変更をローカルリポジトリに「**コミット**」する。
4. ボブがローカルリポジトリの内容をリモートリポジトリに「**プッシュ**」する。


<div class="note type-caution">
**コンフリクトの対処法**

上記のケースにおいて、アリスはコンフリクトを解消しない限り、開発を続行することはできません (次のコミットやプッシュ、プルをすることができません)。git/GitHub にはアリス側でのコンフリクトをボブに自動で通知するような機能は存在せず、また **アリスに代わってボブがコンフリクトを解消することもできません**。

コンフリクトは、チーム開発の過程で一定の確率で発生するため、その対処法についてはメンバー全員が理解しておく必要があります。
</div>

### コンフリクトを発生させる

演習③で作成したリポジトリ `My-Curry-Recipe` を使って、意図的にコンフリクトを発生させてみます。

まずは **アリス役**の「ステップ1」として VSCode で「**プル**」をします。これにより、リモートリポジトリの **最新の内容** がローカルリポジトリにダウンロードされます。チーム開発を行っているときは <span class="masked">自分以外がリモートリポジトリの内容を更新する可能性</span>があるので、定期的に「**プル**」を実行して最新の内容をローカルリポジトリに取り込むことが必要となります。

![img](figs/15/git-conflict-01.png)

つづいて **アリス役**の「ステップ2」として `index.html` の **第40行目** を `<li>鶏肉 ... 400g</li>` から `<li>鶏肉 ... 600g</li>` に変更し、**自動フォーマットせずに保存**してください。

<div class="note type-caution">
**自動フォーマットせずに保存する方法**

この編集を保存する際、VSCodeの環境・設定によっては「自動フォーマット (自動整形) 」が適用されて、**他の行も変更される可能性**があるので `Ctrl+K,S` のショートカットキーで「自動フォーマットせずに保存」の操作をしてください。`Ctrl+K,S` は「Ctrl」を押しながら「K」を押下、つづいて「Ctrl」を**離して**「S」を押下します。


なお、ここで「自動フォーマットせずに保存」をする必要があるのは、**このチュートリアルを実行しているときだけ**です。個人開発している場合や、([Prettier](https://www.google.com/search?q=prettierとは)や[autopep8](https://www.google.com/search?q=autopep8とは)のようなコードの自動整形のフォーマッターを統一して) チーム開発している場合は、通常の保存で問題ありません。
</div>

つづいて **アリス役**の「ステップ3」として `index.html` を**ステージング**して「**鶏肉の分量を600gに変更**」というコミットメッセージをつけて「コミット」だけをします。これで、変更がローカルリポジトリにだけ記録くされます。なお、**ここで誤って「コミットして同期」を選ぶと「プッシュ」と「プル」の操作もしてしまうことになるので注意**してください。

![img](figs/15/git-conflict-02.png)


---


次に、**ボブ役**になって「**ステップ1～4**」を実行します。


**ここではブラウザを使ってリモートリポジトリを直接操作することでボブ役を演じます**。ブラウザからリモートリポジトリにアクセスして `index.html` の **第40行目** を確認します。アリスが行なった変更 (400g→600g) は <span class="masked">まだアリスがプッシュをしていない</span> ため、リモートリポジトリには反映されていません。

GitHub上で `index.html` を開き、ペンアイコンをクリックして編集モードに切り替え、第40行目を `<li>鶏肉 ... 400g</li>` から `<li>牛肉 ... 400g</li>` に変更 (鶏肉→牛肉) して「Commit changes...」のボタンを押下します。

![img](figs/15/git-conflict-03.png)

コミットメッセージを「**鶏肉を牛肉に変更**」として「Commit changes」のボタンを押下します。なお、リモートリポジトリで実行する「コミット」は、実質的に「プッシュ」の操作も兼ねることになります。

![img](figs/15/git-conflict-04.png)

---

再び、**アリス役**に戻ります。

残していた「**ステップ4**」として「プッシュ」の操作を行ないます。

![img](figs/15/git-conflict-05.png)

すると、次のように「Can't push refs to remote. Try running "Pull" first to integrate your changes. (**リモートにプッシュできへんで。先に「Pull」して、変更統合してみてや**)」という警告メッセージのダイアログが表示され **プッシュに失敗** します。一旦、「キャンセル」のボタンを押下してダイアログを閉じます。

![img](figs/15/git-conflict-06.png)

このままでは作業が続行できないので、指示に従って「プル」を実行します (プル操作の方法は、アリスの「ステップ1」の説明を参照)。すると、これにより **コンフリクトが発生** して、VSCode が次のような画面に切り替わります。

![img](figs/15/git-conflict-07.png)

コンフリクトの発生によって、見慣れない画面表示になっても、まずは慌てず落ち着いて深呼吸をします。

### コンフリクトを解消する

画面の表示を落ち着いて読み取っていきます。

画面内の `<<<<<<< HEAD`、`=======`、`>>>>>>> 412b5...` を **コンフリクトマーカー** といい、コンフリクトが発生したときに git により自動挿入される文字列になります。ファイル内に、この特別な文字列 (コンフリクトマーカー) が残っていると git はコミット操作を受け付けてくれません。

![img](figs/15/git-conflict-08.png)


第41行目に緑背景で書かれている`<li>鶏肉 ... 600g</li>` が**アリスによる変更**で、第43行目に青背景で書かれている`<li>牛肉 ... 400g</li>` が**ボブによる変更**であることが分かります。

また、それら前後の行をみると、自分 (=アリス) の変更を「**現在の変更**」と称していて、ボブ (=プルしようとしているリモートリポジトリ) の変更を「**入力側の変更**」と称しています。

同じファイルの同じ行に変更があるが <span class="masked">(gitには)それを、どう処理すればいいものか分からない</span> という状態がコンフリクト (競合・衝突) になります。よって、人間が手動でその指示を与える必要があります。その指示を与えることが、コンフリクトの解消になります。

今回のコンフリクトの対処方法としては次のようものが考えられます。

1. アリス側 (現在の変更) の「鶏肉 ... 600g」を採用する (現在の変更を取り込む)。
1. ボブ側 (リモートリポジトリ) の「牛肉 ... 400g」にする (入力側の変更を取り込む)。
1. あいだをとって「鶏肉または牛肉 ... 400～600g」に書き換える。
1. あとでボブと話して解決するために「X肉 ... X00g (あとでボブと要協議)」書き換えておく。

まずは、対処の方針をきめます。ここでは両者の意見を反映するように「**鶏肉または牛肉 ... 400～600g**」のように書き換えて対応するものとします。

この場合、まずは VSCode で第40行目の `<<<<<<< HEAD`、第42行目の `=======`、第44行目の `>>>>>>> 412b5...` を削除します (<span class="masked">普通の文字のように BackSpace や Del キーで削除できます</span>)。次に、残った部分を編集して `<li>鶏肉または牛肉 ... 400～600g</li>` と書き換えます。

![img](figs/15/git-conflict-09.png)

書き換えが終わったら「保存」をします (ここでも `Ctrl+K,S` のショートカットキーで「自動フォーマットせずに保存」の操作をしてください) 。下図のように、コンフリクトを解消した `index.html` をステージングします。

![img](figs/15/git-conflict-10.png)

コンフリクトが問題なく解消されていれば、次のようにステージングされて「コミット」のボタンが押下可能になります。コミットボタンの右端を押して「**コミットして同期**」を実行します。エラーが返ってこなければ、これでコンフリクトが解消できたことになります。

なお「コミットして同期」ではなく「コミット」、「プッシュ」、「プル」という操作を個別に実行していっても問題ありません。既に何度もでてきていますが、VSCodeの「コミットして同期」は、「コミット」「プッシュ」「プル」をまとめて実行することを意味しています。

![img](figs/15/git-conflict-11.png)

以上により、コンフリクトが解消されてアリス側でも開発を継続することができます。

念のためにブラウザからリモートリポジトリの `index.html` の内容を確認してみてください。当該部分が「鶏肉または牛肉 ... 400～600g」になっていることが確認できると思います。

### コンフリクトの解消に役立つVSCodeの機能

VSCode には **コンフリクトを効率よく解消するための機能** が用意されています。

例えば、下記の「現在の変更を取り込む」をクリックすれば `鶏肉 ... 600g` だけを残して、`<<<...` や `===...` などのコンフリクト関連の行を自動削除してくれます。また「入力側の変更を取り込む」クリックすれば `牛肉 ... 400g` だけを残して同様の操作をしてくれます。

![img](figs/15/git-conflict-12.png)

また、コンフリクト状態のときに画面右下に表示される「**マージエディタで解決**」のボタンを押下すると、3画面で競合箇所を比較しながら修正を行なうことができます。詳しい使い方については「[Visual Studio Code 3 way merge editor](https://www.google.com/search?q=Visual+Studio+Code+3+way+merge+editor)」でウェブ検索してください。

![img](figs/15/git-conflict-14.png)

<div class="note type-caution">
**「現在の変更を取り込む」の注意点**

コンフリクトが発生した際「**現在の変更を取り込む**」を選択して、そのままステージングしてコミットすると以下のようなダイアログが表示されて**コミットに失敗**します。

これは、スペース1文字でもよいので何らかの変更を加えて保存、ステージング、コミットすることで解決します。例えば、今回の例であれば `<li>鶏肉 ... 600g</li>` の `</li>` タグの前に半角スペースを1個追加して `<li>鶏肉 ... 600g </li>` のようにしてファイル保存すれば解決します。

![img](figs/15/git-conflict-13.png)

上記のエラーは、直前の「鶏肉の分量を600gに変更」のコミットから**ファイル内容が何も変更されていないこと**に起因しています (前回コミットと内容に差分がない場合、新たにコミットすることができません) 。
</div>

## 宿題

講義時間内に終わらなかった内容に取り組んでください。また、2～3日程度の時間をおいてから再度、復習してください。次回の講義は **今回までの内容が定着していることを前提** として進めます。

次回講義では、Git を使用して「プロジェクトフォルダの内容を過去のバージョンに戻す方法 (リストアする方法)」や「ブランチを作成・切り替える方法」「GitHubでコラボレータを設定してチーム開発の環境を設定する方法」などを学習する予定です。