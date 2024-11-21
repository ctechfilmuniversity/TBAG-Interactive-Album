# "particle.experiments I" - Joel Schaefer - Final Project TBAG


## Description

"particle.experiments I" artistically explores a transformation from harmonic, organic matter towards dark, technological structures. Abstract sounds & 3D visuals are building the tools to express this journey. The technical background is constituted in the search for new ways to visually materialize sounds. May it be in the form of geometry, color or motion (of particles).



## Audio


The project started with the audio. The full Audio was composited completely before any visuals were created. The process of audio creation was a rather intuitive, non-structured one. 

It started with a recording of me running through my flat, chaotically making sound with anything i came across that run. Then i had this 2-3 minute recording, filled with all kinds of different sounds. I used an old max for live tool (fully based on the flucoma library) i build some time ago, which splits the whole sample into single clips based on an audio level threshhold. So i had a lot of chopped clips then. What the tool does after that, is analyze the frequency spectrum over the time of all the clips separetely, writes that data into an highdimensional vector and reduces it back to a 2 dimensional representation, while preserving their respected distances to each other. That results in a 2D Grid where all the single clips are placed, clips that are closer to each other on the grid are also more similiar sonically to each other. My next step was then to intuitively drag around that grid and playing back those clips in a completely new order as before. I recorded that, so, again I had one big sound file. 

Now I started to use audio effects like granular delays, reverbs, pitch shifters, filters, eq's and so on. I resampled that heavily processed sounds again into a new recording. Then i listened through it and picked parts i like, processed them further, retimed then or just put them into a new arrangement again. Thats how the base structutre of the audio came out.

Months later, i reiterated over the arrangement, added some live recordings from playing my modular synthesizer over the existing arrangement. I came to new ideas, throwed old stuff out, kept some, rearranged some and so on. That were the last steps towards the final audio composition as it is now.


## Reflection on the 3D tool used

I decided to use Houdini as a 3D tool & Redshift as Rendering Engine. My reasons are the following:

- Houdini is my 3D Software of choice since 2 years
- Redshift is my Renderer of choice since 1 year 
- Till now i rarely ever used CHOPs (& Sound) in Houdini for driving animations & simulations
- Interest in Proceduralism & 3D Visualization in General

My conclusion for working with audio in CHOPs in Houdini & takeaways for the next audiovisual project with Houdini:
Using the amplitude data of audio files in Houdini is however pretty straightforward and also manipulating that envelope derived from the amplitude with the many procedural CHOP operators is also really cool. However, I consider Amplitude data / the straight relation of loudness and visual parameters only fitting for certain effects. 

The way to access the spectral data of an audio file in Houdini seemed a bit cumbersome so that i didnt felt i could really explore the possibilities of it and it took a lot of time to make it create visually nice effects, i guess it would have been much easier to accomplish that effects manually by simply keyframing the visual parameters / using noise instead. It might be that i didn't foudn the best practice for extracting spectral information out of the audio files, but in the next project of this kind i wouldn't go that way again. Instead i would try to prepare that data inside audio environments and then feed it as CSV or prepared audiofiles to houdini, and just use it there directly. 

Another idea i would want to explore the next time is to not only use audio data as input but modulation data. So for example, take the value that defines how dry or wet a reverb effect on a certain channel is and bake it into some format that houdini can read. That could be much more meaningful or expressive as only the rendered audio of that channel i think.

A use of the data derived from the procedures i described in the audio section (mapping the similarity of sound clips) could also be interesting.

