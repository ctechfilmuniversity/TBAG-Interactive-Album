# "Thus" Final TBAG Project #

## Idea ##
A warm, bass and field recordings-driven meditative track, coupled with visuals reminiscent of a sea of neon lights; rendered somewhere between the style of a bokeh photograph and a crayon drawing. 

![img1](img/tbag_img1.png)

## Technical Choices ##
I stuck with *three.js* and used *Logic Pro* for the audio. Halfway through working on the project, my local *node.js* and *Vim* setup fell apart. I didn't have the time to fix it so I resorted to a simple online library setup. 

Audio: 
All audio was recorded by me. 
- Field recording, walking through snow, *Zoom h2Next*
- Field recording, rainforest critters in Vietnam, *iPhone* 
- *Ibanez* bass & *Fender Stratocaster*
- *Komplete Audio 1 and 2* pre-amp - *Native Instruments* 
- MIDI keyboard 

## Artistic Intention ##
### Visuals ###

To take advantage of the strengths of coding versus no-code 3D animation programs, I wrote simple, yet recursive code to create comparatively complex visual structures. While the resulting fractals were symmetric by design, I used the frequency data to animate them individually - I wanted to stay away from the typical, symmetrical fractals aesthetic. The largest fractal "fleet", the one in the middle, reacts to only a very specific frequency range and when it does, all the spheres that make up the fractal shape move uniformly, therefore maintaining its typical fractal aesthetic. The spheres of the fractal fleets surrounding the middle fleet react to a variety of frequencies; their reactivity and their animation in the Y-axis both depend on their individual size. This results in a distortion of the fractal symmetry. 

I choose the grainy visuals as a reflection of the high frequencies coming from the rainforest field recording. The material's transparency allows for interesting overlapping colors, adding more detail. Finally, I found the grainy, sketchbook aesthetic of the material to be something I haven't seen combined that often with fractals and found the result more compelling than any other materials I experimented with. 

On top of using the sound frequencies to animate the y-axis of the spheres, I also used them to trigger camera movements. I intended for the camera movement to be slow, standing in contrast to the spheres jittering in response to the frequencies. Like the two chords that I play over and over again on the bass, the camera was to move through a few set positions over and over again, hopefully introducing a calming sense of repetition or perhaps even a slightly melancholic feeling of going through the motions in something over and over again. Additionally, the movement of the camera adds a new, visual rhythm to the track, which sometimes synchronizes in an obvious way with the audio track, sometimes less so. 

### Audio ###
The verse part of the riff sounds very visual and meditative to me. I decided to use it for this project and wanted to create a melodic track with a typical song structure and combine that with disparate field recordings. I was inspired by Laura Misch's 2023 album "Sample The Sky", which quite seamlessly blends a lot of nature field recordings into accessible jazz tracks. I wanted to use the field recordings as instruments that supported and contrasted the underlying chord structure and melodies. I decided to keep the (almost painfully) high frequencies of the cicadas in the track because it felt like it situated the rest of the music somewhere outdoors too. 

**LINK to mp4 & audio:** https://owncloud.gwdg.de/index.php/s/igk4vOYv5ybCiFv PW: tbag_huson

## Learnings and Reflection ##
- Improved my JavaScript skills
- Started thinking about how visuals and audio can work together as well as how to do this technically - the journey has just begun! 
- Gained a better understanding of the components required to render a 3D image on the screen in a specific way.
- The camera movement isn't quite where I want it to be - it looks laggy at times and I'm also not really happy with how it synchronizes with the track. But there's only so much one can do in a few days...

![img2](img/tbag-img2.png)