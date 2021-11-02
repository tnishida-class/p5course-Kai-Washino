// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  let percentage_old = 0;
  let percentage = 0;
  for(let i = 0; i < scores.length; i++){ total += scores[i]; }
  for(let i = 0; i < scores.length; i++){
    percentage_old = percentage;
    percentage += scores[i]/total;
    arc(200, 200, 200, 200, 2 * PI * percentage_old, 2 * PI * percentage, PIE);
  }

  //arc(200, 200, 200, 200, 0, PI * 0.5, PIE);
  // BLANK[1]
}
