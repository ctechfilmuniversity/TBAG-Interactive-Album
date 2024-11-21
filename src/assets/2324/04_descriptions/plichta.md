
Theoretical Backgrounds of Audio and Graphics - Winter term 23/24
Prof. Dr.-Ing. Angela Brennecke | Film University Babelsberg KONRAD WOLF

# Playhead
A project by Marek Plichta

  ##  Brief outline of your idea
  My idea was to create a virtual "directional microphone" in AR that allows the user to pick up 1 sec fragments of a song I composed. Scanning all fragments the user can decide to either listen to the whole song in its' original linear fashion or dive into a small segment and deconstruct its elements in a non-linear way.
 
  The sound fragments are distributed evenly in the form of simple cubes that each carry a small layer of the song at that second. It needs an average of 5-15 cubes per second to hear all elements of the song at a particular second. This means the song consists of hundreds of cubes. 

The layout of the cubes in 3D space follows the structure of the song that I projected on a grid. The grid spaces itself in instruments, frequencies and time.

  The AR aspect allows the user to hear the sounds spatially as each fragment will be louder/quieter depending on the distance. The directional microphone allows to scan the cubes from any distance and group them together into new clusters in a non-linear way.

  The user can also find some "natural" sounds hidden in the village below the floating cubes.  



## From Ableton song to AR app
- In Ableton I dissected my original track in 1 sec pieces and exported 656 audio files (more or less by hand) separately. For example, for the drums I would put the snare and the high head on different layers and so on a separate file which is represented by the cubes in my AR app.   


## Videos
[Project page: Videos and work in progress](https://www.notion.so/artbymarek/Playhead-900159110863482b8344ccd50d9a4f9a?pvs=4)

Please note: I made one version for Tbag and then I worked a few days more on other features for CC. Version v1 is the one for Tbag. 

## Project files
[Unity 2022 Project file on Dropbox](https://www.dropbox.com/scl/fo/7l9lb10gpevrxamnqa00o/h?rlkey=depjewbavioonlk9vol7n2hxv&dl=0)

  
  
## Description of the technical choices
- My main choice was to focus on making my track interactive and finding ways for the user to explore sound in AR space. For that Unity seemed the right choice because of its established AR capabilities and performance on mobile devices. I also picked Unity over three.js because I wanted to focus on working with game engines and learn C# long term.
- I kept the 3D models and visuals simple to focus on coding and because the minimal look fit my artistic idea of adding `life` to the world through sound mostly. 
- I used Ableton Live 11, Ableton Note, and a field recorder to record some singing and everyday sounds at first. Especially Ableton Note was a great tool to sketch out beats and then refine them in Live.

 ## Description of the artistic intention
- When I finished school I travelled in south-east asia and spent a lot of time sitting in the deep jungle. The orchestra of nature sounds was mesmerizing to me. I sometimes couldn't believe the richness and variety of sounds. I had my sketchbook with me to draw but I really wished I had a directional microphone with me to record all the beauty I heard. This made me want to explore the idea of a directional microphone in the virtual world. I think there is a lot of potential from an interaction design perspective as most exploring is done with sight. In the process of working on this project I also remembered a work of one of my favorite artist, Nam Jun Paik that made it possible to explore a song in a non-linear way already in 1963. 
  
  ![Nam June Paik Randomaccess 1963](pics/namjunepaik_randomaccess_1963.jpg)
  
## Learnings and reflections
- I learned a lot about music production and making. I had no experience in this before and was happy to learn how to use a DAW and make some music. 
- I learned a lot more about Unity and C#. The project was technically very challenging for me and at the same time fun to tackle. 
- I have lots of more ideas for the project I would like to manifest 
  
## Reflection on the 3D tool used
- Unity was the right choice for my needs even if it is still cumbersome in many ways, which is quiet astonishing for such an established tool.

## External credits
- 3D model in the app was downloaded as a free asset from the Unity store and modified by me in terms of texture and lightning as well as proportions
- Wind and cricket sounds downloaded from Freesound
- Some math calculation in my code were developed with the help from ChatGTP 