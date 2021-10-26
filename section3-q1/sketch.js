// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 60;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  if(20 < count && count < 26){
    size = 10 * (count - 20);
  }

  else{
    size = 20;
  }
  // BLANK[1]
  ellipse(width / 2, height / 2, size);
}
