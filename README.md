# 概要
URL：https://pokename.vercel.app/  
アプリ名：What is this pokemon name?  
内容：ポケモンの英名から日本語名を当てるクイズゲーム。  
期間：7時間

# 使用技術
| 技術 | 名 | 選定理由 |
| --- | --- | --- |
| 言語 | TypeScript | 最も描きなれている言語。静的に型を指定できるため、アプリケーションが肥大化した際に安全に開発を行える。|
| ライブラリ/フレームワーク | Next.js | ファイルパスルーティングを用いて素早く開発を行える。|
| CSS | TailwindCSS | ファイルサイズも小さく、素早く開発を行える。|
| 状態管理/キャッシュ管理 | Redux Toolkit / RTK Query | このライブラリの学習をするために本アプリを開発。|

# API, 使用データ
- [PokeAPI](https://pokeapi.co/)：豊富なデータ量のAPIを公開。
- [pokemon.json](https://github.com/fanzeyi/pokemon.json/blob/master/pokedex.json)：日本語名を含むjsonファイルを公開。