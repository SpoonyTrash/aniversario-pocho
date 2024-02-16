// spin wheelse
TweenMax.to('.wheel', 1, {rotation:"-=360", repeat:-1, ease:Power0.easeNone});

// bounce kitty
TweenMax.to('.kitty, .head', .1, {y:"-=4", repeat:-1, yoyo:true});

//drive in scooter
TweenMax.from('.puppet', 3, {x:"+=1000"});

//pop a wheelie
TweenMax.to('.puppet', .5, {delay:3, rotation:"+=30", x:"-=200", ease:Power1.easeIn});
TweenMax.to('.head', 1, {delay:2.8, rotation:"+=20", ease:Bounce.easeOut});

// speed up wheelse
TweenMax.to('.wheel', .3, {delay:3.5, rotation:"-=360", repeat:-1, ease:Power0.easeNone});

//drive off
TweenMax.to('.puppet', 1, {delay:4, x:"-=800",ease:Power2.easeIn});
