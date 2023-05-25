# Final Project: The Brain Machine

My original idea of depicting the brain and the reaction to different emotions was discarded during the creation of the sound track. For me it was the first sound project and therefore I had difficulties to express the different feelings through sound. Especially the transition between the different emotions didn't really work. The basis of my new idea is still the brain. 

## Idea

The soundtrack is intended to represent the brain in a simplified way as a working machine. The viewer will be guided through the individual areas of the brain, which are audio-visually encapsulated from each other. Basically, each area has a similar process but still differs from each other in some details. 

## Technical Choices

### Audio

For me, it was the first time I produced an audio track. In the beginning, I had a lot of difficulties because I didn't really know where to start. After a few tutorials this changed and I felt that I could now start to create something of my own. I first created the basic beat and the basic melody, which you can hear throughout the whole track. During a tutorial, I discovered by chance that my telephone recordings sound like a heartbeat, when I filter the higher frequencies. I really liked the sound, so I used it as the basic beat of the song. When I was recording, I had made some recordings from an old computer, which gave me the idea for this project. You can hear the computer switching on at the beginning of the song. The sound of a slightly defective switch is repeatedly played in between to separate the individual sections.

<img src="img/heart_sound_with_telephone.png" />

### Graphics

I used the triangle subdivision to visualize the brain, which I already implemented during the homework. For the triangles' texture, I wanted to add a gradient, so I used a simple shader. The height of the triangles is influenced by the frequencies, depending on the frequency's height, the triangles rise in the front or back area. To visualize electrical signals I used lightning that hits the surface of the "brain" (inspiration: [Generative Lightning](https://editor.p5js.org/dlatolley/sketches/Bu3JRNqgF)). Another project that inspired me and I used it in a modified form is the following: [Particle System](https://therewasaguy.github.io/p5-music-viz/demos/05a_fft_particle_system/).

## Artistic Intention

### Audio

To imitate the feeling of listening to a machine I used a quite monotonous beat and repeating melody through the whole track. The start of the track should sound like booting up the machine. The electrical sound should represent electrical signals in the brain and separating the different areas of the track. I also adjusted the pan of the electric signal so that for every start of a area you hear it on the left side and at the end of the area you can hear it on the right side. That should simulate the moving of the signal. The heartbeat sound of the track is intended to represent a connection between the human brain and the constant beat of the machine.

### Graphics

The visualization of the brain with the triangle subdivision should represent the convolutions of the brain that gets active for different tasks (here: frequencies). The colors are inspired from the image down below that visualizes brain cells. The visualization of the electrical signal is done with lightning and represents the electrical communication signals in the brain. The particle system at the end should visualize hormone release in the brain, which also reacts on the intensity of the frequency. 

<img src="img/brain_11.jpeg" />

## Learnins and reflection

I learned a lot during the project about interacting with a DAW and creating my own song. I still cannot really exactly recreate the sound that I imagine in my head, but it was still a lot of fun to just try out random things in the DAW and see how it turns out.

Even if I have a lot of experience with programming the visual part was still a challenge for me, due to some issues I run into with not seeing some objects because of the light settings, texture, order of code etc. Also adding the shader to the triangles cost me a lot of time, because I created a custom shape for the triangles and didn't apply uv coordinates to vertices. It took really long to find out what the problem was. But in the end I'm really happy with the result and learned a lot about p5.js as well.

There are still some things that I want to add or change in my track, but couldn't manage during the time limit:
- recording of turning off the old computer and adding it to the end (the computer is at my mom's place and I had no time to go there and record it)
- synchronize visuals and sound a bit more: I think the visuals are a bit off with sound, because the triangle subdivision takes a lot of capacity to calculate and also the texture slows down the whole project. Maybe refactoring would help to make the code more efficient
- clean up the code
- adding some visuals for the harp part
- make particles more beautiful maybe with their own texture

I uploaded two formats of the video .mov and .mp4. The mp4 version has a really low quality and the mov version is more similar to the actual sound of the sound:

[Final Video](https://drive.google.com/drive/folders/1HBXFfF6FuwrW2ZW9-ZuesBD28Yy1Qo9j)
