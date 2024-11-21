Final Project in TBAG Wintersemester2023/24 - Adam Streicher


## The Dark Side of Rock and Roll
In this project, I explore the theorety of live decoding audio signals through the creation of a dynamic three js scene. In the set of a dark cave a shiny chromesphere follows the rhythm and character of a dramatic and percussive experimental music track. Sound and motion are synchronized through differt volumetric fields of influence. Within certain spectrums of frequency non-trivial systems are pushing and pulling floating rocks around and create on louder sounds captivating impulses.


### Context
This well-polished project is also my final submission for Creative Coding 1. The seperation for the evaluation is that in TBAG I want to focus on how I processed and decoded the audio to have them work as well-managable imputs to drive the visual systems of the code. Furthermore I'll take a brief look into the creation of the music piece.

### Music Piece

The audio track is maily composed of AI-prompted samples using Stableaudio and some field recordings. Preparing with careful editing and sampling of the audio snippets I created randomized arrangement systems for percussive elements. Other snippets where heavily altert through equalizing, streching or pitching. After my first composition in Reaper, I exported the processed layers into Ableton Live that I used for the very first time. There I utilized plugins to procedurally distribute delays and other effects in stereo space. Eventually, I automized some effects over time to enhance the compositional effects and then mastered the audio using equalizers and compressors for export. Even if this might have not been the cleanest workflow I managed to create something highly dynamic to drive later animations.


### Audio Processing

I looked at the audio visualizer example and read through the AudioAnalyser documentation and decided to mainly rely on its getFrequencyData function. However, I found that accessing the returned array was anything but practical. I found out that the amplitudes are put into frequency segments that are set by the Fast Fourier Transform or FFTSize when initializing the AudioAnalyser. I wanted to access the amplitudes based on frequency values and then I found this formula:

``f = Index * SampleRate / FFTSize``

This made sense, so wanted to write a function where I could input frequncy values. First the FFTSize had to be increased from the default 64. Since it cuts the frequncynumbers in even parts it does not consider the logarythmical hearing of humans. For example, I wanted to access the amplitude of frequncies around 35Hz so I had to increase the FFTSize up to 512 to not get strange behaviour trying to access it. The SampleRate of my Audio was 44100 Hz as usually. Eventually, I turned both into variables and wrote this function that would return me a smoothed amplitude which I could use for driving my animations. 

The previousAmplitude is a storage variable that holds the amplitude of the previous frame. It is used for smoothing using linear interpolate and is updated in the within the animate function.

