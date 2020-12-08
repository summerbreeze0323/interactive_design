class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
    this.canvas.width = document.body.clientWidth;
    this.canvas.height = document.body.clientHeight;

    window.requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    this.ctx.fillStyle = "#000";
    this.ctx.beginPath();
    this.ctx.arc();

    // 사각형
    // this.ctx.rect(
    //   document.body.clientWidth * 0.5 - 50,
    //   document.body.clientHeight * 0.5 - 50,
    //   100,
    //   100
    // );

    // rect를 활용하여 그림그리기?? 색깔 3가지 활용

    this.ctx.fill();
  }
}

window.onload = () => {
  new App();
};
