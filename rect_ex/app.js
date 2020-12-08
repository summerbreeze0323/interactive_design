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
    // Standard position
    const middleXPoint = document.body.clientWidth * 0.5;
    const middleYPoint = document.body.clientHeight * 0.5;

    // Green Ract
    this.ctx.fillStyle = "#00bb64";
    this.ctx.beginPath();

    const greenRectWidth = 300;
    const greenRectHeight = 150;

    const greenRectXPos = middleXPoint - greenRectWidth * 0.8;
    const greenRectYPos = middleYPoint - greenRectHeight * 1.5;
    this.ctx.rect(
      greenRectXPos,
      greenRectYPos,
      greenRectWidth,
      greenRectHeight
    );
    this.ctx.fill();

    // Brown Ract
    this.ctx.fillStyle = "#795548";
    this.ctx.beginPath();
    const brownRectWidth = greenRectWidth * 0.5;
    const brownRectHeight = 250;
    const brownRectXPos = greenRectXPos + greenRectWidth * 0.25;
    const brownRectYPos = greenRectYPos + greenRectHeight;

    this.ctx.rect(
      brownRectXPos,
      brownRectYPos,
      brownRectWidth,
      brownRectHeight
    );
    this.ctx.fill();

    // Black Ract
    this.ctx.fillStyle = "#000";
    this.ctx.beginPath();

    const blockRectHeight = brownRectHeight * 0.25;
    const blockRectWidth = greenRectWidth / 3;
    const blockRectXPos = brownRectXPos + brownRectWidth + greenRectWidth / 8;
    const blockRectYPos = brownRectYPos + (brownRectHeight - blockRectHeight);

    this.ctx.rect(
      blockRectXPos,
      blockRectYPos,
      blockRectWidth,
      blockRectHeight
    );
    this.ctx.fill();
  }
}

window.onload = () => {
  new App();
};
