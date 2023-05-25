
![alt](./img/origamiclouds.png)

# graphics: origami clouds

For the graphics project, I started by subdividing the triangles of the cube and extruding the new vertices. Looking at these new shapes, I felt like I was looking into clouds - origami clouds. Building on that, I continued to develop the clouds. Now the clouds morph into new shapes, just like real clouds do.

The basic shape is a cube. The triangles from this cube are then subdivided, saved as new vertices and faces, and extruded. This process is done muliple times, and each new shape is stored as a morph target for the origami clouds. In the loop, the clouds then morph between the different target shapes depending on a counter that grows with each frame.  The shapes are never fully reached; the vertices only go "halfway" toward a target. One shape of this is the cube, so you see the clouds approaching a cube from time to time. In the code a bit of documentation is included.

I implemented the origami clouds in three Js. For the subdivision of the triangles I used the Geometry class, which is very similar to p5 Geometry. I have to admit that this class is now deprecated in three.js (since two weeks) and in the new version only BufferGeometry is included, so my code works only until the given version of three.js (0.124.0). After subdividing the triangles, the clouds are converted to a BufferGeometry, so the morphing is done with that.


To enhance the feeling of clouds further, I followed a tutorial to create a low poly terrain and used the code of that tutorials (Terrain.js), so the majority of my work were the clouds. 
The Low Poly shape of the terrain supports the abstract clouds, that don’t look like real clouds, but behave like ones. They change their shape, you can see through them from time to time and they remind you of something else. To further enhance this and be creative, it is possible to change the color of the clouds. As a color scheme, I chose a blue palette to create a moody atmosphere. It looks like the end of the night - it is still dark outside, but you can already see some colors and shapes, just before the sun starts rising. After looking into those origami clouds, the morning starts. A weird morning... 

To run it locally: 
```
cd origami_clouds
npm install
```
for development:
```
npm run dev` 
```
for production:
```
npm run build
```

Then open localhost:1234.


# audio: a weird muesli morning

My idea was to create a morning feeling with the piece, using only sounds recorded while making cereal. It starts with a quiet, strange sound. More and more sounds emerge and it becomes a bit more abstract. The sounds build up for a while until the noises stop and all you hear is the loud scraping of the spoon. From then on, a second, more rhythmic part kicks in. This is supposed to be the more active part of the morning, where you get into your routine and just act. From time to time the rhythm is interrupted by something slightly unexpected - like a real morning. Towards the end, the rhythm is interrupted more and more and turns into a strange, broken sound. At the end, all you hear is a slamming and the sad sound of a scraping spoon. This is the moment when you close the door and start the day.

For my piece music concrète, I recorded sounds made while eating cereal in the morning. I didn't use any food sounds. Instead, I tried to capture all the other sounds that might not be so obvious. These included throwing cereal into a bowl, shaking it in the box, using different types and different textures of cereal, including muesli and oats. I recorded a 'clink' sound that a cereal made when it touched the ceramic bowl. I also recorded the opening of a milk bottle, the scratching of the surface of the bowl with a spoon, the pouring of milk around the cereal, the closing of the fridge and a voice that occurred randomly during the recording (the "aaahhh" sound).

I cut these samples into small pieces and selected the most appropriate ones. I removed the noise that was in the background with EQ subtraction. I also pitched some sounds and added reverb to the sound. For the drum part, I pitched the sounds and cut them to have the appropriate diamond shape. From the pling sound, I created a virtual MIDI controller and played some semi-harmonic keys. I experimented with putting the sounds together in different ways to create this abstract to rhythmic to abstract story. I also added automation to most of the samples and mixed the channels so that a spatial sound developed. All in all, the process was challenging for me as I had no previous experience of producing such a song and it was difficult to get the samples where I wanted them.

# learnings and reflection


Especially the audio project was challenging to me, since I had only a limited experience with audio production before. It was also a learning process to explore how I can work with my own recordings and how to capture the sounds in a good way. The piece is very experimental and as was the process. 

I had more experience with graphics, but three.js was new to me. I learned how to work with vertices, faces and normals in the Geometry and the BufferGeometry class. It was frustrating when I updated my three js version and everything stopped working, because the Geometry Class was removed from core in the update. I already spent a lot of time on writing the OrigamiCloud.js file, so I decided to stick to my code and just use the old three.js version. For the future it would have been better to just use the BufferGeometry Class for everything from the beginning, but it is less intuitive than the Geometry Class, which I why I decided to use this for the triangle subdivision algorithm in the first place.

In the end I am happy with the result and have some ideas how I could further evolve the graphics project (moving the clouds, adding sound, moving the terrain, making a gradient sky,… ), that I could work on given more time.
