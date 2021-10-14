### Merge an audio with an image  

Use this command to merge audio & image to a video    
`ffmpeg -loop 1 -i image.png -i audio.mp3 -c:v libx264 -tune stillimage -shortest video.mp4`

`-i image.png`  is the image    
`-i audio.mp3`  is the audio    
`-shortest video.mp4` is the resulting video    

### Splite an audio   

Use this command to splite an audio   
`ffmpeg -ss 10 -i ../audio.mp3 -t 74 -c copy ../audio3.mp3`   

`-ss 10`  means where to start  
`-t 40`   means how much seconds ahead  


### Batch convert PNGs to JPGs    
`for i in *.png; do sips -s format jpeg $i --out $i.jpg;done`
