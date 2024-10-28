# "particle.experiments I" - Joel Schaefer - Final Project TBAG
<p>
<img  src='./media/img/r6.jpg' height='500'>

</p>

## Description

"particle.experiments I" artistically explores a transformation from harmonic, organic matter towards dark, technological structures. Abstract sounds & 3D visuals are building the tools to express this journey. The technical background is constituted in the search for new ways to visually materialize sounds. May it be in the form of geometry, color or motion (of particles).



## Audio


The project started with the audio. The full Audio was composited completely before any visuals were created. The process of audio creation was a rather intuitive, non-structured one. 

It started with a recording of me running through my flat, chaotically making sound with anything i came across that run. Then i had this 2-3 minute recording, filled with all kinds of different sounds. I used an old max for live tool (fully based on the flucoma library) i build some time ago, which splits the whole sample into single clips based on an audio level threshhold. So i had a lot of chopped clips then. What the tool does after that, is analyze the frequency spectrum over the time of all the clips separetely, writes that data into an highdimensional vector and reduces it back to a 2 dimensional representation, while preserving their respected distances to each other. That results in a 2D Grid where all the single clips are placed, clips that are closer to each other on the grid are also more similiar sonically to each other. My next step was then to intuitively drag around that grid and playing back those clips in a completely new order as before. I recorded that, so, again I had one big sound file. 

Now I started to use audio effects like granular delays, reverbs, pitch shifters, filters, eq's and so on. I resampled that heavily processed sounds again into a new recording. Then i listened through it and picked parts i like, processed them further, retimed then or just put them into a new arrangement again. Thats how the base structutre of the audio came out.

Months later, i reiterated over the arrangement, added some live recordings from playing my modular synthesizer over the existing arrangement. I came to new ideas, throwed old stuff out, kept some, rearranged some and so on. That were the last steps towards the final audio composition as it is now.


## Visuals

### General

For the 3D visualisation, I decided to work with Houdini. My goal was to explicitly work with channel operators (CHOPs) which can be thought of modulation signals like in Modular & Analog Audio Synthesis. As the common practice in 3D is more to work with animation curves and keyframing techniques, i wanted to get away from that and instead explore this procedural way of setting parameters in motion. As sound on computer is nothing else then floating point numbers sampled at high rates and as those CHOPs are nothing else then floating point numbers, audio files can be used inside houdini directly in these channel Operators. So in preparing for the animation i rendered all the single tracks of the audio composition into separate audio files, i had 12 separate audio files then. 

Now began the part of seeing what to do with it inside the procedural 3D realm. Creating a curve from the amplitude of an sound is the first and most direct way of course, and tho i wanted to go further than that, i still used that procedure to animate the amount of displacement on a geometry for example.

Further explorations:

### Audio Level To Position


The Channel holding the Audio Level is copied 3 times so that it can build a vec3, that can represent positions. Then there is a time offset on each channel, this creates interesting patterns & animations. Also it creates a funny path that describes the whole time of the audio file. Picture 1 is a more complex sound file as picture 2 is the result of a much simpler audio sequence. 

<p>
<img  src='./media/gif/AudioLevel2Position.gif' width='600'>
<img  src='./media/gif/test.gif' width='600'>

</p>


### Particle Force by Curve

As Particle Systems & Simulations play a major role in my final project, my first try was to use this path as a direct source of force for the particles.

<p>
<img  src='./media/gif/tbag_forcefromcurve.gif' width='600'>
</p>






### Points To Volume 

My next approach was to see what i can further do with this path. I converted it to a volume.

<p>
<img  src='./media/img/e1.png' height='400'>
<img  src='./media/img/e2.png' height='400'>
</p>


### Volume To Mesh & generate a Velocity Vectorfield based on mesh's normals 

Next step: I converted it to a mesh, so I had some geometry that is generated around that path, I added some noise onto the Position Attribute to make the surface a bit more irregular. To generate that swirly vector field around that mesh, i created another volume that has the size of the meshs bounding box. Its then fed into a Volume VOP Operator in which:
- The Geometry is "opened" as pointcloud, so for each voxel in the volume there is a lookup if there are points in the pointcloud closely
- That gives a volumetric representation of the mesh
- next is a Subtraction of the volume containing the meshs position information minus the original volume, that gives the direction vector between every voxels position value and every point of the sampled mesh, so a vector thats pointing from the meshs position towards the outside positions in the volume
- Finally, the crossproduct of this direction vector & the original normal vector of each point in the mesh is resulting in direction vectors on each voxel that "swirl" around the meshs surface:

(I learned that technique from this Entagma tutorial: 
https://www.youtube.com/watch?v=yqM_3goH4J8&t=321s )

<p>
<img  src='./media/img/e4.png' width='500'>
<img  src='./media/img/e3.png' width='337'>


</p>



### Animation (Playback Of Sound) results in Growing Vectorfield 

When animating the original path, it results in a evolving vectorfield. 

<p>
<img  src='./media/gif/path.gif' width='600'>
<img  src='./media/gif/velfield.gif' width='600'>

</p>


### Particle Advection by Velocity Volume / Vectorfield

This vector field can now be fed to the particles as a volume, which the particles advects to using the "Pop Advect To Volume" Operator inside a POP Network. 
<p>
<img  src='./media/gif/tbag_expl.gif' width='600'>
<img  src='./media/gif/tbag_forcefromvolume.gif' width='600'>
</p>



### Audio Spectral To Particle Force & Color

Here, another approach is used. The spectrum of the audio file is applied to all the particles as color attribute. This attribute is used for the color, the amplitude of a wind noise force and for the size of this noise. In the final animation i also used the spectral information to define how much the particles is advected by the volume, so a combination of the previously described technique. The frequencys are copied onto the particles so that the first particles represent the lower frequencys, and the last particles represent the higher frequencies in the spectrum. The result is explosion like effects that differ a lot based on the timbre of the sound. 

<p>

<img  src='./media/gif/noisebyspectrum.gif' width='600'>
<img  src='./media/img/r5.jpg' width='600'>
</p>

### Arrangement

In the end I build 2 scenes, in both most till all animations are driven by the described CHOP / audio workflows. First I only had the scene with the orange background and the fluid particles. I actually had a render of this for full 2 minutes but i realized that I was going for the final render too early as many of the animations weren't fitting to the sound at all.. As this scene took nearly 6 days to render i decided to not rerender any parts of this but instead just take the part that works well and cut out 1.20 minutes of it and build a 2nd scene which uses the same audio but different content. This one goes till minute 1.20. Here i made much more preview shots & test renderings to see when the audio driven animations are working and when not. I chose to use 2 cameras as i really liked the close perspective with depth of field(s. Testshots 3 & 4). But when that particle are pushed out quite far after around 30 seconds, the close perspective wasn't looking good anymore. Thats why I chose to switch to a camera that looks onto the simulation from further distance and also from a different direction. However the particle simulation isn't cut by the camera switch, i made the cameras switch exactly at the same frame and cutted it together in then end at that exact time aswell, so its really just a switch in perspective but not a switch of 2 different particle simulations. So although i had to cut 3 renderings together in the end, the temporal, audioreactive connection to the orignal audio is mostly preserved throughout the animation. 

### Test Shots

<p>
<img  src='./media/img/r1.jpg' height='400'>
<img  src='./media/img/r2.jpg' height='400'>
<img  src='./media/img/closeshot.jpg' height='400'>
<img  src='./media/img/closeshot2.jpg' height='400'>


</p>


## Artistic Intention

Initially, the idea for this project was a purely narrative (through abstract aestetics) one. Starting from a organic & harmonic atmosphere that dissolves into a dark, technological feeling. I wanted to emphasize especially on the aspect of darkness in a way that the technological realm at some point starts to crack and black liquid is pouring out of it, combined with an intense & oppressive sound atmo that illustrates the visual happenings. I thought about thick slime like black liquids breaking up technical structures. However, due to different factors i wasn't able to express this idea within this project. A slight relation from the audio site to this narrative is there i think, but for the visuals i have to say that i wasn't able to express that narration to anything close to what my intention / imagination was when i came up with that idea. 


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

## CONCLUSION + LEARNINGS

During February i encountered some problems with my time management & in my creative workflow, thats why it took me more time then given by the official deadline.. 

As I put my focus in the first semster on extending my TouchDesigner, MaxMSP, Python & GLSL knowledge, working with Houdini was a super small part of this semsters work of mine. Less then 1% i would say - in the beginning of the semester i tried some things with Houdini for TI but this was mainly about exploring how to export data from Houdini to TouchDesigner and vice versa and looking fo the most efficient ways to do that, so my work with Houdini in those 1 or 2 weeks was of a purely functional nature, no artistic use of it at all. Therefore it took me more time then i thought till i got back into it. And still i wasn't able to achieve what i aimed for initially in the visual domain. 

I think this is partly also due to the fact that i wasn't familiar with creating the audio first and then the visuals. I'm usually doing audiovisual works the other way around or back and forth, so that was kind of new for me.

With the work on the audio and with the technical explorations on using audio data in houdini im satisfied and i think I learned quite a lot in those domains. Also i learned much regarding non-realtime audiovisual media creation in general & came up with new ideas for audiovisual production in the future as pointed out in the "Reflection on the 3D tool used" section. 


## Links

Animation Video: https://youtu.be/VlAgBbO22HE

All Files: https://drive.google.com/drive/folders/14JUykGBS6D5B5wm9HRiaXn6Ox1BEE7a6?usp=sharing
