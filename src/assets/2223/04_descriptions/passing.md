# Space dream pop

[Link to the .mp4 Video](https://drive.google.com/file/d/1JOIYkbveNEr4Ev4wvQsu4FP_eU5VmYUb/view?usp=share_link)


## Idea outline

The main idea was combining elements from the dream pop aesthetics with themes of retro futurism or space travel. I especially wanted to have a 'floating' kind of vibe that could both be floating through space or water.

## Technical choices

For the audio track I chose Ableton to create the dream pop song. I worked mostly in the clip view, putting together the individual tracks and then recorded an arrangement. Only then I added the recorded sample in the arrangement view as an afterthought (where the weird scratchy noises are real world as opposed to the very smooth dream world). The instrument setup is very classic with lots of reverb and chorus on guitar and piano for the dream pop feel.

For the visuals I wasn't sure for a long time how to map the audio information. I ended up cutting away most of the FFT frequency data as it didn't give me any useful results and then mapped the remaining frequencies to spheres that I imagined to be like stars or planets. The actual value coming from FFT is mapped to scale the stars, so we end up with some that chance their size a lot and some (still most?) that just stay.

I tried both p5.sound's peak detection and a script I found online that uses the FFT data but the outcomes were less then ideal. Luckily for me the amplitude analysis reacts well with the bass in the song so I used that to change the background color.

Since all geometry stays in place, I decided to have the camera move slowly around as a glorified way of stargazing.

## Artistic intention

I think science-ficion from the 1970ies is a great source of inspiration for imagining alternative futures and is currently having a revival. At the start of the semester I was reading *The Dispossessed* by Ursula K. Le Guin which helped kick-start the idea for this project.

From here on I wanted to inject something more current or modern into the sci-fi-retro mix and chose dream pop as a very fluffy and, well, dreamy, and because I personaly really like it.

Ultimately I wanted an exploration of space (planets, stars maybe space crafts) but with nice colors and chill music.

## Learnings and reflections

I never produced a song digitally with a DAW before this class but I really liked it. Overall created about three half-finished songs before settling on the parts that ended up in the final production. Not necessarily because I thought I was done, but more because I knew I had to stop for time. I spend a lot time trying out and adjusting things and I know I only scratched the surface of what's possible. I will definitely continue to doing this and will hopefully include recodings from my real-life instruments as well.

Programming 3D visuals was also very new to me, especially the lower level concepts. While I also really like it there are some things, like generating custom geometry, that I understand in theory but definitely haven't mastered code-wise yet. It's not surprising to me that the visual part comes anywhere near to what I had in mind but that's something I just have to deal with and improve over time.
