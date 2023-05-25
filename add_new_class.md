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

```shell
brew install handbrake
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

The produced preview videos should be placed in the `classname/03_short_videos` directory.

## videos:

```shell
for file in *.mkv; do HandBrakeCLI -i "$file" --output "./optimized/${file%.*}.mp4" --preset "Social 100 MB 5 Minutes 1080p30"; done
```
The produced preview videos should be placed in the `classname/02_videos` directory.


## Descriptions

Place the student's markdown files in the class directory `04_descriptions`. Theses will be shown on the individual project pages next to the large version of their video.

Each project also needs a short description, which can come from the markdown file - this is usually the overall artistic concept or introduction section. It will be displayed next to the preview video on the main page.