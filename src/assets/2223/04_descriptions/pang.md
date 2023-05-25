<!-- ---  
title: Theoretical Backgrounds of Audio and Graphics
author: Angela Brennecke
affiliation: Film University Babelsberg KONRAD WOLF
date: Winter term 20/21
---   -->
**Theoretical Backgrounds of Audio and Graphics - Winter term 21/22**

Prof. Dr.-Ing. Angela Brennecke | a.brennecke@filmuniversitaet.de | Film University Babelsberg *KONRAD WOLF*   

---
## Finished work
https://editor.p5js.org/Martapang/full/ZeKiYreUJ
(Best in full screen) 

Youtube link: https://youtu.be/fnL_pmIa_HA

Download link: 
https://drive.google.com/drive/folders/18pWUXP4nijcpAgqEbpGmezdCZXGEqvOE?usp=share_link


## Concept

* Name - Chlorophyll Chorus
      
* Scientists found that mushrooms "talk" using electrical impulses that spike when fungi come into contact with food sources or potential dangers. Originally I wanted to use mushrooms impulses for the sound data but it was diffifcult to grow mushrooms in winter. Instead, various plants and myself were used for generating the sound data. 

## Artistic intention/Description 
The project - Chlorophyll Chorus explores the hidden communication channels of plants, drawing inspiration from scientific discovery that suggest mushrooms "talk" to each other using electrical impulses.

By using plants to generate sound data and converting it into midi data, I create an audio-visual experience that highlights the interconnectedness of living things.

The incoming data from each plant is different. Through a combination of 3 plants and myself,I mixed them to a soundscape that reflects the patterns and rhythms of the plants. The plants "whisper" and "rap," their sounds coming together in a harmonic song.


## Technical choices
* In P5, I created a 3D particle system that imitates the microcurrent fluctuations. Particles represent mircocurrent, and as the particles move closer together, they "communicate" with each other and a vector is drawn to represent this interaction.

* Ableton is used to fed in midi data and manipulate them. Using a combination of different instruments, I created a song that still reflects the original pattern and rhythms of the plant data, which later respond to the movements and interactions of the particle system in P5.

*  A DIY Biodata Sonification Device is built and used to measure the electrical conductivity in plants using ardunio. The bio data is converted to midi signals in processing. 

Reference: https://electricityforprogress.com/biodata-sonification/

### Graphic
* To imitate the microcurrent fluctuations occurring across plant’s leaf,I created a particle system with lines connecting when the distance is close enough the input value. 

* The visual looks like a connection nextwork happen in space where stars communicating with each other with lines, size and the colors. 

### Biodata Sonification Device
* A Biodata Sonification Device was built to get the data and convert the it to midi data. 

  1. Tiny changes of electrical conductivity in plants are measured by probes and fed into a programmable microcontroller
  2. The changes translated to MIDI dtat for generating sound  
  3. MIDI data fed into computer using SerialMIDI

![Alt text](resources/Biodata_Sonification_Device2.jpg)
![Alt text](resources/Biodata_Sonification_Device1.jpg)
![Alt text](resources/Biodata_Sonification_Device3.jpg)

### Audio
* Before creating the audio, I had a rough idea what kind of style I want to go for. I lack of vocabs descriping the music genre since I have very little experience in music. 
Here is the reference of music I like and wanted to make a similar style.  dreamy and spaceial.  

  https://www.youtube.com/watch?v=ZxNzi0knBSk

* The bio data is from 3 plants, including pilea, monstera and fiddle leaf fig and me. They generated different midi patterns. The combination of me with each plant generate also different style. 

* The incoming midi data is rather random. What I tried to do is to combine them and make the track harmonic like they singing to each other. The note could soung a bit random but that's the intereasting part of it. For me it's like planting rapping or whispering. 

![Alt text](resources/pilea.jpg)
(midi data from pilea)

![Alt text](resources/Fiddle%20Leaf%20Fig.jpg)
(midi data from fiddle leaf fig)

![Alt text](resources/midi.jpg)
(midi data from monstera)

### Audio - Reactive Graphic
* Size of particle points - The size of the points reacts to the volume of the song.

* Camera angle -  The rotation of the camera angles reacts to the volume of the song.

* Line color  - The line color for the bass frequency is mapped to the value of r (red). G (green) is mapped the line color for the mid frequency.  B (blue) is mapped line color for the highMid frequency. 

* Mouse attraction - If the distance between the particle and the mouse is less than 450, the particle is moved away from the mouse, and verse vice. 

* Vector connection - This line scales connecintg to difference vector is magnituded to bass value of the audio. 




## Learnings and reflections

* Initiatively I planned to use L-system /space colonization as the graphic base. Since the sound data is from plants, It make sense to make the graphic organic. I spent few days to create a L-system tree. Sadly it is lagging when it turns to 3D. I didn't manage to get it smooth so I gave up and redo the whole thing.

* Connection is the underline concept of this project. Not only externally but also internally how the plants interconnect and communicate with different parts of the plant body. It's interesting to notice the difference of the sound data when connecting the device with me and the plants. 

* I am surprised to see how the graphic somehow related to the music. I wanted to create somethimg spacial and underwater kinda vibe to replicate how the impulse/mircocurrent transfer through the plants. 

* Please find my failed 3D fractal tree sketch as your reference. (It's still pretty nice tho)

 ![Alt text](resources/Tree.jpg)



