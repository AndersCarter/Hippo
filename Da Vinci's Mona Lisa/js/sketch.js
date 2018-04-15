

function createSketch(filepath) {
  var sketch = function(p) {

    var img;

    p.preload = function() {
      img = p.loadImage(filepath);
    }

    p.setup = function() {
      p.createCanvas(img.width * 2, img.height);
      p.image(img, 0, 0);
      p.image(img, img.width, 0);
    };

    p.draw = function() {

    };
  };

  new p5(sketch);
}
