
# Graphic-Project TBAG  Paul Seybold 
 
## IDEA: 
 
The Question behind my coding project is, how to visualize music? 
So the question was what does music look like? How can sounds be interpreted 
visually? 
Of course there is no personal answer to this and also the feeling that music belongs 
to every track and genre. 
An interesting thought here for was from Edmund Husserl:  
 
We only perceive the present tone, the respective tone ‘now’; the sound of the 
previous notes is really just a memory.  
 
To visualize this idea of understanding music, I decided to use the Fast Fourier 
transformation (FFT). The FFT detects the audio signal and converts it into a 
spectrum of values (amplitudes).  
The Frequency range as the respective amplitudes are mapped to the grid and show 
the time based changes of the song. So I can not only see the tone-”now”, there are 
all further tones.  
The generated grid translates the music in a three dimensional moving landscape.  
 
## Technical solution: 
 
- Soundanalyzation:   
- p5.FFT:  
computes amplitude values along the frequency domain. The array 
indices correspond to frequencies (i.e. pitches), from the lowest to the 
highest that humans can hear. Each value represents amplitude at that 
slice of the frequency spectrum. 
- Grid 
- vertices looped with the for() function creates the grid which is the base 
for the sound visualisation. 
 
 
- Sound Visualization: 
- FFT signal detected by the p5.FFT function. 
- spectrum arrays analyzed by the fftanalyze function 
 
- Background: 
- The background is a rotating sphere where a picture (orbit2.jpg)is 
mapped.  
- Sun: The sun is also a rotating sphere.  
- ellipsoid: rotating ellipsoid shape. not filled, just thin lines.  
 
### Variant​:  
Var 1: the basic function of the Idea.  
 
### Var 2: 

- modified solution. The spectrum is mapped on x-  and y-axis.  
- Also it generated the previous sound to the next points of the grid.  
(activated by default!) 
 
### How to Use:  
- Play / Pause Button on the lower left corner. 
- Orbit Control by  mouse 
 
## Challenges​:  
 
- The Challenge was to understand how the FFT works and how I connect it to 
the grid. In this process i learned to work with the array function and for() 
loops.

![](./img/sun.jpg)
![](./img/orbit2.jpg)