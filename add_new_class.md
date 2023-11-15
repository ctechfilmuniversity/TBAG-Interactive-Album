# How to add a new class to the Interactive Album Website

To add a new class to the interactive album site, you'll need to gather a few things from the students:

1. Artist name
2. Sketch Title
3. A video of the sketch
4. Long Description
5. Short Description (max 500 characters)
6. Sketch Subtitle

Once you've gathered all the necessary assets, we can start. Create a new directory structure for the class:

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

## Thumbnails

The thumbnails should be in landscape format, and should be at least 600px x 800px. They should show a key moment from the sketch, and should be visually interesting.

They will live inside the parallelograms on the main page, and in the grid in the class page, so they should have enough material and be framed so that they work both in a vertical and square format.

## Video Previews

- For each video, you should create a preview video that will be displayed on the homepage. To create the shortened preview videos (default to 30 seconds) the videos can be processed with handbrake to optimize them for web:

Terminal:

```shell
brew install handbrake
```

In your media folder, create a subfolder called "optimized":

```shell
mkdir optimized
```

For a single file:

- replace inputFile and outputFile with the appropriate filename
- adjust the start-at and stop-at parameters to find a good section of the video with good movement and activity. The stop-at is the duration of seconds after the start-at that the video will be cut.

```shell
HandBrakeCLI -i inputFile.mp4 --start-at seconds:60 --stop-at seconds:30 --output ./optimized_previews/outputFile.mp4 --preset "Social 50 MB 5 Minutes 720p30"
```

for a whole folder, you can use this batch processing command:

```shell
for file in *.mkv; do HandBrakeCLI -i "$file" --start-at seconds:60 --stop-at seconds:30 --output "./optimized/${file%.*}_preview.mp4" --preset "Social 50 MB 5 Minutes 720p30"; done
```

```shell
ffmpeg -ss 00:01:00 -to 00:01:30 -i input.mp4 -c copy output_preview.mp4
```

You should move the produced preview videos to the `classname/03_short_videos` directory.

## videos:

If you haven't already above, in your media folder, create a subfolder called "optimized":

```shell
mkdir optimized
```

For a single file (replace inputFile & outputFile accordingly):

```shell
HandBrakeCLI -i inputFile.mp4 --output "./optimized/outputFile.mp4" --preset "Social 100 MB 5 Minutes 1080p30"
```

To batch process an entire folder of media files:

```shell
for file in *.mkv; do HandBrakeCLI -i "$file" --output "./optimized/${file%.*}.mp4" --preset "Social 100 MB 5 Minutes 1080p30"; done
```

You should move the produced preview videos should to the `classname/02_videos` directory.

## Descriptions

Place the student's markdown files in the class directory `04_descriptions`. Theses will be shown on the individual project pages next to the large version of their video.

Each project also needs a short description, which can come from the markdown file - this is usually the overall artistic concept or introduction section. It will be displayed next to the preview video on the main page.

## Deploying a Vite Site on Netlify and Adding a New Class to Constants/index.js

This guide assumes you have a working knowledge of JavaScript, Vite, and Git.

### Prerequisites

    Node.js and npm installed on your machine
    A GitHub account
    A Netlify account
    A Vite project ready to be deployed

Step 1: Pushing Your Vite Project to GitHub

Start by pushing your Vite project to a GitHub repository.

    Navigate to your Vite project's directory on your local machine.
    Initialize a new Git repository by running the following command:

    csharp

git init

Stage all your files for committing:

csharp

git add .

Commit your files:

sql

git commit -m "Initial commit"

Go to GitHub and create a new repository.
Link your local repository to your GitHub repository:

csharp

git remote add origin [Your GitHub Repo URL]

Push your files to your GitHub repository:

perl

    git push -u origin master

Step 2: Deploying Your Vite Project to Netlify

    Log in to your Netlify account and click on the "New site from Git" button.
    Choose GitHub as your Git provider.
    Select the GitHub repository where you've stored your Vite project.
    Configure the build settings. Set the "Build command" to npm run build and the "Publish directory" to dist.
    Click "Deploy site."

Netlify will then build and deploy your Vite application. When the process is completed, you will receive a URL to access your live site.
Step 3: Adding a New Class to constants/index.js

Let's assume we want to add the class of 2023. Here's how to do it:

    Open your constants/index.js file in your preferred text editor.
    Import the necessary assets at the top of the file, similar to how assets for the other classes were imported:

javascript

// class of 2023
import newClass_thumb from "../assets/newClass_thumb.jpg";
import newClass_preview from "../assets/newClass_preview.mp4";
import newClass_video from "../assets/newClass_video.mp4";
import newClass_description from "../assets/newClass_description.txt";

    In the sketchInfo array, add an object with the new class details:

javascript

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

    Save your changes and commit them:

bash

git add .
git commit -m "Added new class to constants"
git push

Netlify will automatically detect the changes and rebuild and redeploy your site. When the process is complete, you can view your updated site with the new class added to the constants/index.js file.
