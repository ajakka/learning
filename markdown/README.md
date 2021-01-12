# All I know about Markdown

## Vanilla Markdown

### Headings
```
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```
#### Heading 4

### Italics
```
*Italic* text
_Italic_ text
```
_Italic_ text

### Strong (bold)
```
**Strong (bold)** text
__Strong (bold)__ text
```
__Strong (bold)__ text

### Strikethrough
```
~~Strikethrough~~ text
```
~~Strikethrough~~ text

### Horizontal rules
```
---  ___
```

### Blockquotes
```
>Quote
```
>Quote

### Unordered lists
```
* Item One
* Item Two
* Item Three
* Item Four
    * Sub Item One
    * Sub Item Two
        * Sub sub Item One
```
* Item One
* Item Two
* Item Three
* Item Four
    * Sub Item One
    * Sub Item Two
        * Sub sub Item One

### Oreder lists
```
1. Item One
1. Item Two
1. Item Three
1. Item Four
    1. Sub Item One
    1. Sub Item Two
        1. Sub sub Item One
```
1. Item One
1. Item Two
1. Item Three
1. Item Four
    1. Sub Item One
    1. Sub Item Two
        1. Sub sub Item One

### Inline and Blocks of code
Inline code
```
`console.log('we put code inside back tics')`
```
`console.log('we put code inside back tics')`

Block of code (Only on github)
```
```Used Language here (optional)
Block of code here```
```
```javascript
var mes = 'for blocks of code we wrap code inside tripple back tics with a header that indicats which language (header is optional)';
console.log(mes)`
```

### Linkes
```
[Website Name](https://www.example.com "Title that shows when hover over")
```
Note: if you don't put http or https before the link, github will translate it into a subfolder inside the repository.

[Website Name](https://www.example.com "Title that shows when hover over")

### Images
```
![Image Name](./alien.jpg)
```
Note: you can also put full path like https://someweb.site/sub/image.png

![Image Name](./alien.jpg)


# Github Markdowns

### Blocks of code 
```
```Used Language here (optional)
Block of code here```
```
```javascript
var mes = 'for blocks of code we wrap code inside tripple back tics with a header that indicats which language (header is optional)';
console.log(mes)`
```

### Tables
```
|Name      |Email               |
|----------|--------------------|
|Abderrahim|abderrahim@gmail.com|
|Abderrahim|abderrahim@gmail.com|
|Abderrahim|abderrahim@gmail.com|
```
|Name      |Email               |
|----------|--------------------|
|Abderrahim|abderrahim@gmail.com|
|Abderrahim|abderrahim@gmail.com|
|Abderrahim|abderrahim@gmail.com|

### Tasklists
```
* [x] Task 01
* [ ] Task 02
```
* [x] Task 01
* [ ] Task 02

### More Info

[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

[Markdown Support VSCode](https://github.com/yzhang-gh/vscode-markdown)
