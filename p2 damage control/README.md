# where'd everybody go?

‘where’d everybody go’ is a rough realization of a much more ambitious project, and serves as a learning (and humbling) experience to someone relatively new to coding. The purpose is to convey a story to the player through music and dialogue, in which the world ends and our two characters make peace with their inevitable demise. I love to tell stories of warmth within desolation, hope within hopelessness, and this was going to be one of them. The issue came in being overly ambitious in my planning phase.

My notes are laid out in 5 chapters, each of which has multiple images to display and dialogue trees to find. The problem with this is that coding a dialogue tree without having any experience is quite hard, and I found myself stumbling over multiple states and check functions before I realized it was too complex an idea for the time I had to finish the work.

I simplified and simplified, eventually deciding that laying out the code in a way that makes it easy for the user to discover all the different end states, regardless of how much narrative sense it made, was best. This isn’t a super sophisticated piece of code, and I have plenty of things I wish I had done better, but it functions!

A basic technical description of the piece is that it’s a an interface where the user can type in whatever they want, and typing in certain words or phrases will trigger a progression in the narrative. Four of these key phrases are laid out for the user right from the start, under text reading “things to discover”. The fifth key phrase is displayed after all four previous phrases are checked as “true”. This final phrase is the only one without an image accompanying it, so as to let the player sit with the words. Activating the final phase sets the counter in the bottom of the screen to 5 of 5, which fulfills the conditions to activate the “ending” state.

All of the music and images were made by me, all of the code as well. This is both a cool fun fact as well as the main issue with the project. I am still learning to not try and do every single thing myself, as that results in some pretty poor time management and a bit of a disappointing final product. To give some idea of the initial goal of this project, i’ve included pictures of the initial notes in the , as well as a link to the broken first attempt code.

https://github.com/scubbard/cart253/tree/main/p2(BROKENATTEMPT)
