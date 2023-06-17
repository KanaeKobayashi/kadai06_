# 課題6 -API-

## ①課題内容（どんな作品か）
- 本の検索とコメントを残せるアプリです。

## ②工夫した点・こだわった点
- 前回同様にreactとFirebaseで作りました。
- 前回使ったコンポーネント（ログイン機能、サインアウト機能）を使いました
- ゲストモードを作りました
- カードをクリックすると詳細が見られるようにしました。全体が見えるようにスクロールが出来、最後にコメントが書けるようにしてあります。
- コメントはまとめて見ることが出来、後からその本の詳細を確認することが出来ます。
- コメントは削除できます。
- コメントはcsvでダウンロード出来ます。
- ページのMoreボタンをクリックすると、詳細（Google Booksのサンプルが読める）
- もとのページを上書きするのではなく別タグで開くようにしました。その際は、rel="noopener noreferrer”属性を追加し、新しく開いたページがwindow.opener を介して元のページを操作するのを防ぐようにした
- 価格があるもののみ表示するようにしているので、最大４０件ですが少ないものもあります。
- keyは.evファイルを作って入れるので、表面にキーは出ないようにしました。
- デプロイしました。　https://apibooks-cdc8e.web.app

## ③難しかった点・次回トライしたいこと(又は機能)
- リンクを用いたかったが、うまく出来なかった。（本当はコメントのページは別ページにしたかったのだがうまくいかなかった）
- cssを当てながら書いていたら何がなんだかわからなくなってしまったので、cssは最後にしようと心に誓いました。
- bootstrapなどをうまく使いたいと思うが、どんな機能があり、どんなことができるかわかっていないので、まだ何も出来ない。色々な機能や書き方を理解したいと思う
- バックグラウンドの猫のイメージをもう少し小さくしたかったのだが、うまくいかなくなったので途中で諦めました。この辺りちゃんと操れるようになりたい

## ④質問・疑問・感想、シェアしたいこと等なんでも
- [質問] APIを叩くことは理解しましたが、色々ドキュメントを見ていてもなかなかピンと来ないのですが、何かコツみたいなものがあるのでしょうか？
- [感想] 本当は音声とか色々やってみようかとも思ったのですが、もう少しreactの使い方を理解したかったので、あえて、お手本のあるAPIで叩くところを学びました。reactはコツがなんとなくわかってきたので、この後うまく使っていきたいと思います。
- [参考記事] 
  - http://shincode.info/2021/08/17/cant-display-image-with-react/
  - https://reffect.co.jp/react/react-router-6/
  - https://ralacode.com/blog/post/how-to-use-react-router/
  - https://yoncoichi.com/image-opacity/
  - https://www.papaparse.com/
  - https://mui.com/material-ui/getting-started/usage/
