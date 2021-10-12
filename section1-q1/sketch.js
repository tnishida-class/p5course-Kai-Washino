// 練習問題：神戸市のマーク
function setup(){
  createCanvas(1000, 1000);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(100 - 25, 100, 100, 100, QUARTER_PI -3, QUARTER_PI *-3 +PI);
  // BLANK[1]

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);

  strokeCap(ROUND);
  strokeWeight(0);

  fill(14, 47, 146);
  //arc(100 + 25, 300, 100, 100, 0, PI * 2);
  circle(110, 300, 100);

  fill(255, 255, 255);
  circle(102, 295, 95);

  fill(22, 131, 46);
  circle(100, 293, 90);

  fill(255, 255, 255);
  circle(98, 298, 86);

  fill(110, 110, 110);
  textStyle(BOLD);
  textSize(22);
  text("KOBE", 67, 290);
  textSize(8);
  text("UNIVERSITY", 80, 305);
}
