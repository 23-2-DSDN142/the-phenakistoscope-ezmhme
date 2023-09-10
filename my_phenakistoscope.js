const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  //pScope.load_image("jellyfish" , "png");
  pScope.load_image_sequence("jellyfish" , "png", 12);
}

function setup_layers(pScope){

  new PLayer(null, 255);  //lets us draw the whole circle background, ignoring the boundaries

  var jellyfishSequence = new PLayer(jellyfish);
  jellyfishSequence.mode(RING);
  jellyfishSequence.set_boundary(0,1000);

  //var layer1 = new PLayer(jellyfish);
  //layer1.mode(RING);
  //layer1.set_boundary( 200, 1000 );

  var layer2 = new PLayer(squares);
  layer2.mode( SWIRL(1) );
  layer2.set_boundary(0,100);
}

function jellyfish(x, y, animation, pScope){

  scale(2);
  pScope.draw_image_from_sequence("jellyfish", 0, -280-animation.wave(1)*20, animation.frame*0.5);

}

//function jellyfish(x, y, animation, pScope){
  
  //scale(0.2);
  //pScope.draw_image("jellyfish",-20,-2750-animation.wave(1)*180);

//}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  //fill(255)
  //arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  //fill(255)
  //rect(10,-300,animation.wave*50,20,20) // .wave is a cosine wave btw

  //ellipse(300,10,30,30)
  //ellipse(0,-50-animation.wave(2)*20,45,45) // .wave is a cosine wave btw
}