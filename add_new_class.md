# How to add a new class to the Interactive Album Website

The Interactive Album is hosted on Netlify, which monitors a GitHub repo and when it detects a commit, will update the site. Here is the repo: [https://github.com/ctechfilmuniversity/TBAG-Interactive-Album]

## Get the latest version of the site:

Start by pulling the latest change from the repo:

```shell
git clone git@github.com:ctechfilmuniversity/TBAG-Interactive-Album.git
```

or if you have already cloned the repo, to pull the latest version:

```shell
git pull
```

## Add a new set of students to the site:

To add a new class to the interactive album site, you'll need to gather a few things from the students:

1. Artist name
2. Sketch Title
3. A video of the sketch
4. Long Description
5. Short Description (max 500 characters)
6. Sketch Subtitle

## 01_Thumbnails

The thumbnails should be in landscape format, and should be at least 600px x 800px. They should show a key moment from the sketch, and should be visually interesting.

They will live inside the parallelograms on the main page, and in the grid in the class page, so they should have enough material and be framed so that they work both in a vertical and square format.

## 02_videos:

In order to make the site more performative and mobile-friendly, we need to transcode the collected screen captures into an optimized format, in a transcoding process. The videos can be processed with Handbrake to optimize them for web:

Terminal (on Mac), Windows may be different, or use the GUI version:

```shell
brew install handbrake
```

Wherever you are storing your collected video screencaptures, create a subfolder called `optimized`:

```shell
mkdir optimized
```

To transcode a single file to a smaller web-friendly format, (replace inputFile & outputFile accordingly):

```shell
HandBrakeCLI -i inputFile.mp4 --output "./optimized/outputFile.mp4" --preset "Social 100 MB 5 Minutes 1080p30"
```

To batch process an entire folder of media files:

```shell
for file in *.mkv; do HandBrakeCLI -i "$file" --output "./optimized/${file%.*}.mp4" --preset "Social 100 MB 5 Minutes 1080p30"; done
```

After transcoding, you should move the produced videos should to the `classname/02_videos` directory.

## 03_Video Previews

For each video, we also want to create a 30-second preview video that will be displayed on the class page. To create the shortened preview videos, we'll use Handbrake again.

In your media folder, create a subfolder called "optimized_previews":

```shell
mkdir short_videos
```

For a single file:

- replace inputFile and outputFile with the appropriate filename
- adjust the start-at and stop-at parameters to find a good section of the video with good movement and activity. The stop-at is the duration of seconds after the start-at that the video will be cut.

```shell
HandBrakeCLI -i inputFile.mp4 --start-at seconds:60 --stop-at seconds:30 --output ./short_videos/outputFile.mp4 --preset "Social 50 MB 5 Minutes 720p30"
```

for a whole folder, you can use this batch processing command:

```shell
for file in *.mkv; do HandBrakeCLI -i "$file" --start-at seconds:60 --stop-at seconds:30 --output "./short_videos/${file%.*}_preview.mp4" --preset "Social 50 MB 5 Minutes 720p30"; done
```

You should move the produced preview videos to the `classname/03_short_videos` directory.

## Descriptions

Each project also needs a short description, which can come from the markdown file - this is usually the overall artistic concept or introduction section. It will be displayed next to the preview video on the main page.

Place the student's markdown files in the class directory `04_descriptions`. Theses will be shown on the individual project pages next to the large version of their video.

## Adding a New Class to Constants/index.js

Let's assume we want to add the class of 2023. Here's how to do it:

Once you've gathered all the necessary assets, create a new directory structure for the class inside `./src/assets`. This is what the final structure should look like. Make sure that the filenames are named as follows: (thumbnails should end with `_thumb.png`, short videos should end with `_preview.mp4`, etc):

```
class year (e.g. 2223)
├── 01_thumbnails
│   ├── dakic_thumb.png
│   ├── mircea_thumb.png
│   ├── pang_thumb.png
│   ├── passing_thumb.png
│   ├── podoleanu_thumb.png
│   ├── schreiber_thumb.png
│   └── vasilkova_thumb.png
├── 02_videos
│   ├── andreea.mp4
│   ├── dakic.mp4
│   ├── pang.mp4
│   ├── passing.mp4
│   ├── podoleanu.mp4
│   ├── schreiber.mp4
│   └── vasilkova.mp4
├── 03_short_videos
│   ├── andreea.mp4
│   ├── dakic_preview.mp4
│   ├── dakik.mp4
│   ├── mircea_preview.mp4
│   ├── pang.mp4
│   ├── pang_preview.mp4
│   ├── passing.mp4
│   ├── passing_preview.mp4
│   ├── podoleanu.mp4
│   ├── podoleanu_preview.mp4
│   ├── schreiber.mp4
│   ├── schreiber_preview.mp4
│   ├── vasilkova.mp4
│   └── vasilkova_preview.mp4
└── 04_descriptions
    ├── dakic.md
    ├── mircea.md
    ├── pang.md
    ├── passing.md
    ├── podoleanu.md
    ├── schreiber.md
    └── vasilkova.md
```

Make sure your assets are organized in the same way as the directory structure above.

Edit `./src/assets/index.js`, to include the newly placed assets. This file abstracts away the absolute filepath into a javascript variable:

For example,

```javascript
// class of 2023
import newClass_thumb from "../assets/newClass_thumb.jpg";
import newClass_preview from "../assets/newClass_preview.mp4";
import newClass_video from "../assets/newClass_video.mp4";
import newClass_description from "../assets/newClass_description.txt";
```

For the class of '22 - '23, it might look like this:

```javascript
// class of 2223
//   thumbnails:
import aviram_thumb from "./2223/01_thumbnails/aviram_thumb.png";
import dakic_thumb from "./2223/01_thumbnails/dakic_thumb.png";
...
//   short videos:
import aviram_preview from "./2223/03_short_videos/aviram_preview.mp4";
import dakic_preview from "./2223/03_short_videos/dakic_preview.mp4";
...
//   videos:
import aviram_video from "./2223/02_videos/aviram.mp4";
import dakic_video from "./2223/02_videos/dakic.mp4";
import mircea_video from "./2223/02_videos/mircea.mp4";
...
//   descriptions:
import aviram_description from "./2223/04_descriptions/aviram.md";
import dakic_description from "./2223/04_descriptions/dakic.md";
...


...
export {
  ...

  dakic_thumb,
  mircea_thumb,
  ...

  dakic_preview,
  mircea_preview,
  ...

  dakic_video,
  mircea_video,
  ...

  dakic_description,
  mircea_description,
}
```

In the file `./src/constants/index.js`, we need to pull in the assets into the object that defines the class structure and details about the artwork:

```javascript
import {
  ...
  // class of xxxx
  //thumbnails
  aviram_thumb,
  dakic_thumb,
  ...
  //previews
  aviram_preview,
  dakic_preview,
  ...
  //videos
  aviram_video,
  dakic_video,
  ...
  //descriptions
  aviram_description,
  dakic_description,
  ...


  ...
```

Then, in the same `./src/constants/index.js` file, in the `sketchInfo` array, add an object with the new class details:

```javascript

{
id: 16,
title: "New Class Sketch",
artist: "New Artist",
subtitle: "audiovisual sketch",
short_description: "Short description of the new class sketch.",
description: newClass_description,
image: newClass_thumb,
short_video: newClass_preview,
videoPath: newClass_video,
year: '2023',
directory: ""
},
```

Save your changes and commit them:

```bash
git add .
git commit -m "Added new class to constants"
git push
```

Netlify will automatically detect the changes and rebuild and redeploy your site. When the process is complete, you can view your updated site with the new class added to the `constants/index.js` file.
