---
layout: default

---
# Contribute

[github/Mo-M](https://github.com/Mo-M)

## Make a Tutorial

### Requirements

- Virtualbox 4.3
- Windows 8.1 VM
- Ubuntu 14.10 64Bit VM
- Mac OSX Yosemite VM
- Gimp
- imagemagick
- jekill 2.5.3

### Settings

- Screen 1024x778
- System Language: German

### Archive an old Tutorial

- move all the files of the selected tutorial **System/Program/** to **archiv/year-month-day/System/Program/**

### Create the Screens and thumbnails

- Make a screenshot in virtualbox of every step with the build in function "Take Screenshot" (Strg+E) and save them as png.

- Gimp:
    - Select the main window or the important part of the screenshot and crop it to selection.
    - Mark every user-action with a red (#f90206) rectangle (Rounded corners radius: 5.0, Border:4px). 
    - If there are several steps in one screenshot, numerate them with Sans Bold 25px red numbers.
    - Write if it's necessary some info text into the screenshot with red Sans Bold 25px text.
    - Export the image to the "imgs" directory as *.jpg with default export preferences.

- convert the images to thumbnails with a width of 250px and save these thumbnails to thumbs/

        for i in $(ls -1 imgs); 
        do 
            convert -thumbnail 250 imgs/$i ./thumbs/$i
        done


### Create the Pages

- create in the directory **System/Program/** e.g **Windows/Thunderbird/** the file index.md with following format:

        ---
        layout: tutorial
        system: <System>
        program: <Programname>
        version: <List of Programs and their versions>
        ---


- create for every step a single file in **System/Program/** named **\<step\>.md** e.g *1a.md* or *2.md* with following format:

        ---
        layout: images
        title: <title>
        subtitle: <subtitle>
        hidestep: <true/false>
        thumb: <thumbnail-filename>
        text: |
            <Short description of this Step (markdown or html)>
        info: |
            <expended info description (markdown or html)>
        images:
            - <imagefile>
            - <imagefile>
            ...

        ---

    - "*hidestep: true*" : hide the step number.


- build the website in the _site directory:

        jekyll build

