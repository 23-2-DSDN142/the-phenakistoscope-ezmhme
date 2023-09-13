const SLICE_COUNT = 13;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("jellyfish" , "png", 12);
  pScope.load_image("backgroundlayer" , "png");
  pScope.load_image("coral" , "png");
}

function setup_layers(pScope){

  new PLayer(null, 255);  //lets us draw the whole circle background, ignoring the boundaries

  var backgroundlayer = new PLayer(backgroundlayer);
  backgroundlayer.mode(RING);

  var coral = new PLayer(coral);
  coral.mode(RING)

  var jellyfishSequence = new PLayer(jellyfish);
  jellyfishSequence.mode(RING);
  jellyfishSequence.set_boundary(0,1000);

  //var layer2 = new PLayer(squares);
  //layer2.mode(RING);
  //layer2.set_boundary(0,100);
}

function jellyfish(x, y, animation, pScope){
  //pScope.draw_image("backgroundlayer",x,y);

  scale(1.5);
  pScope.draw_image_from_sequence("jellyfish", 0, -270-animation.wave(1)*20, animation.frame*0.5);

  scale(0.15);
  pScope.draw_image("coral", 1300-animation.wave(1)*15, 2700);
}

//function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  //let angleOffset = (360 / SLICE_COUNT) / 2
  //let backgroundArcStart = 270 - angleOffset;
  //let backgroundArcEnd = 270 + angleOffset;

  //fill(50)
  //arc(x,y,300,300,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  //fill(255)
  //rect(0,0,animation.frame) // .wave is a cosine wave btw
//}