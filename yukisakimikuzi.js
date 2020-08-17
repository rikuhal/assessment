'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

/**
 * 指定した要素の子どもを全て削除する
 * @parm{HTMLElement}element HTMLの要素
 */
function removeAllChildren(element){
  while (element.firstChild){ //子どもの要素が有るかぎり削除
    element.removeChild(element.firstChild);
  }
}
assessmentButton.onclick = () => {
  const userName = userNameInput.value;
  if (userName.length === 0){ //名前が空の時は処理を終了する
  return;
}

  // TODO 診断結果表示エリアの作成
 removeAllChildren(resultDivided);
  const header = document.createElement('h3');
  header.innerText = '診断結果';
  resultDivided.appendChild(header);
  
  const paragraph = document.createElement('p');
  const result = assessment(userName);
  paragraph.innerText = result;
  resultDivided.appendChild(paragraph);

  // TODO ツイートエリアの作成
};
const answers = [
  '{userName}におすすめの行き先は熱海です。旅行好きな{userName}。レトロな町並み散歩、温泉街を楽しんでみてはどうでしょう。',
  '{userName}におすすめの行き先は伊東です。少し疲れ気味な{userName}。古くからの湯治場で、ゆっくり散歩などして休養してみては。',
  '{userName}におすすめの行き先は伊豆高原です。珍しい物好きな{userName}。美しい景観、個性派の美術館や博物館などを体験してみてはどうでしょう。',
  '{userName}におすすめの行き先は熱川です。情熱的な{userName}。湯煙の立ち上る温泉街で、ワニの園や熱帯植物、ハーブの園に出会ってみてはどうでしょう。',
  '{userName}におすすめの行き先は稲取です。変わった物好きの{userName}。「雛のつるし飾り」や奇祭「どんつく祭」など、独特な伝統文化を持つここを訊ねてみてはどうでしょう。',
  '{userName}におすすめの行き先は河津です。のんびり歩きが好きな{userName}。ハナショウブやバラなど花名所がも多く、古社寺散策や温泉など多彩な観光を楽しんでみてはどうでしょう。',
  '{userName}におすすめの行き先は下田です。歴史好きの{userName}。古い家並みが残る町で、幕末の歴史散歩を楽しんでみてはいかがでしょう。',
  '{userName}におすすめの行き先は修善寺です。いつも忙しい{userName}。たまには、自然と歴史と風上ある町並みの温泉街をゆっくり楽しんでみてはいかがでしょう。',
  '{userName}におすすめの行き先は韮山です。散歩好きな{userName}。鎌倉時代から幕末まで歴史を彩った町で、史跡巡りなどいかがでしょう。',
  '{userName}におすすめの行き先は三島です。散策好きな{userName}。湧水地が多い町で、水辺の散歩を楽しむのはいかがでしょう。',
  
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザーの名前
 * @return {string} 診断結果
 */
function assessment(userName) {
  // 全文字のコード番号を取得してそれを足し合わせる
  let sumOfCharCode = 0;
  for (let i = 0; i < userName.length; i++) {
    sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
  }

  // 文字のコード番号の合計を回答の数で割って添字の数値を求める
  const index = sumOfCharCode % answers.length;
  let result = answers[index];

  result = result.replace(/\{userName\}/g,userName);
  return result;
}
console.assert(
    assessment('太郎') === '太郎におすすめの行き先は下田です。歴史好きの太郎。古い家並みが残る町で、幕末の歴史散歩を楽しんでみてはいかがでしょう。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
);
//テストコード
console.assert(
    assessment('太郎')　=== '太郎におすすめの行き先は下田です。歴史好きの太郎。古い家並みが残る町で、幕末の歴史散歩を楽しんでみてはいかがでしょう。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
);

  

