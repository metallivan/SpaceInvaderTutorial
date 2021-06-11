add([
  text("YOU LOSE :( ... MAYBE NEXT TIME!"),
  origin('center'),
  scale(2),
  pos(width() / 2, height() / 6),
  color(rgb(255,0,0))
])
add([
  text("FINAL SCORE"),
  origin('center'),
  scale(4),
  pos(width() / 2, height() / 3),
  color(rgb(255,0,0))
])
add([
  text(args.score),
  origin('center'),
  scale(10),
  pos(width() / 2, height() / 2)
])

