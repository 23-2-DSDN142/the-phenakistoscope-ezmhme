const SLICE_COUNT = 13;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("jellyfish" , "png", 12);
  pScope.load_image("backgroundlayer" , "png");
  pScope.load_image("coral" , "png");
}

function setup_layers(pScope){
  //new PLayer(null, 255);  //lets us draw the whole circle background, ignoring the boundaries

  var background = new PLayer(backgroundlayer);
  background.mode(RING);

  var border = new PLayer(coral);
  border.mode(RING);
  border.set_boundary(0,0);

  var bubblelayer = new PLayer(bubble);
  bubblelayer.mode(SWIRL(10));
  bubblelayer.set_boundary(0, 1000);

  var jellyfishSequence = new PLayer(jellyfish);
  jellyfishSequence.mode(RING);
  jellyfishSequence.set_boundary(0,0);

  angleMode(DEGREES)
}

function backgroundlayer(x , y, animation, pScope){
  push();
  if(animation.frame<1/SLICE_COUNT){
    scale(0.8)
    pScope.draw_image("backgroundlayer", 0, 0);
  }
  pop();
}

function bubble(x, y, animation, pScope){
  rotate(1000*animation.frame);
  scale(1*animation.frame);
  stroke(190, 250, 249);
  strokeWeight(10);
  noFill();
  ellipse(250, 0, 85, 85);
  fill(190, 250, 249, 125);
  ellipse(250, 0, 85, 85);

  noFill();
  stroke(190, 250, 249);
  strokeWeight(10);
  strokeCap(ROUND);
  arc(247.5, -2.5, 50, 50, 0, 90);
}

function jellyfish(x, y, animation, pScope){
  push();
  scale(1.5);
  pScope.draw_image_from_sequence("jellyfish", 0, -270-animation.wave(1)*20, animation.frame*0.5);
  pop();
}

function coral(x, y, animation, pScope){
  push();
  scale(1.7);
  pScope.draw_image("coral", 125-animation.wave(1)*15, 465);
  pop();
}