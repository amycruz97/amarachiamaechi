---
title: Getting Started with Markdown
description: In this post, I will be writing a beginner guide to markdowm syntax
img: cover.png

alt: Getting Started with Markdown
---


<br>

## What is Markdown?

<br>

Markdown is a plain text formatting syntax aimed at making writing for the internet easier. Markdown is also a lightweight markup language with plain-text-formatting syntax.

John Gruber created the Markdown language in 2004 in collaboration with Aaron Swartz on the syntax, with the goal of enabling people to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML). Markdown is now one of the world’s most popular markup languages.

## Syntax Guide

<br> 

### Headers
Any line which is prefixed with a # the symbol is converted into a heading. The number of hashes indicates the level of the heading. For example:


```
# This is an h1 tag
## This is an h2 tag
### This is an h3 tag
#### This is an h4 tag
##### This is an h5 tag
###### This is an h6 tag
```

<br>


### Paragraphs
You need to use a blank line to create a new line and add the text in there.

```
This is the first paragraph

This is the second paragraph

This is the third paragraph

This is the fourth paragraph

```

<br>

### Emphasis


 **Bold**
To make a text bold, you need to put Double Asterisk (**) or Double underscore(__)

```

**This is a bold statement**

__This is also a  bold statement__

```
<br>

**Italic**
To make a text italics, you need to put Single Asterisk (*) or Single underscore(_)

```

*This is an italic statement*

_This is also an italic statement_

```

Note: You can also combine bold and italic in a text

```
***This text is boldly written***
```


```
I am **bold** not *italic*
```

<br>

### Strikethrough

Strikethrough uses two tildes.

```
~Strikethrough here~

```
<br>

### Lists
You can organize items into unordered and ordered lists.

**Unordered Lists**

There are three(3) ways to create unordered lists.

```
+ List 1
- List 2
* List 3

```

<br>

**Ordered Lists**

There are three(3) ways to create unordered lists.

```
1. List 1
1. List 2
1. List 3

```

**Nested Lists**

```
Unordered Lists

+ List 1
+ List 2
    * List 2a
    * List 2b
    * List 2c

**Ordered List**
1. List 1
1. List 2
1. List 3
    1. List 3.1
    1. List 3.2
    1. List 3.3

    
```


<br>

### Links
To create a link, enclose the link text in brackets (e.g., [Twitter]) and then follow it immediately with the URL in parentheses (e.g., (https://Twitter.com)).

```
[Inline styling](https://twitter.com/)
[Inline styling with title](https://twitter.com/ "Twitter")
[reference-style][1]
[link text]

[1]: https://twitter.com/
[link text]: https://twitter.com/

```

<br>

### Images
To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title after the URL in the parentheses.

Images should have alternate text (alt-text)

```
![image](https://picsum.photos/200)
![image with title](https://picsum.photos/200 "random images")
![reference image][image]


[image]: https://picsum.photos/200
```

<br>
### Blockquotes

To create a blockquote, add a > in front of a paragraph.

```

> This is a blockquote

```

Blockquote can contain multiple paragraphs. Add a > on the blank lines between the paragraphs.

```

> This is a blockquote
> 
> This is another blockquote

```

Blockquotes can also be nested by adding >> in front of the paragraph you want to nest.

```
> This is a blockquote
> 
>> This is another blockquote
```

<br>

### Line Breaks

To create a line, add `<br>` in front of a paragraph.

```
Hi, My name is Amycruz, <br> i love writing
```

<br>

### Horizontal Rule
To create a horizontal rule, use three or more asterisks (***), dashes ( — -), or underscores (___) on a line by themselves.

```
***

---

```
<br>

### Code Blocks
To denote a word or phrase as code, enclose it in backticks (`).

```js
const age = 10;
console.log(age)

```

Thanks for reading 😊😊😊😊