---
title: How to dynamically create JavaScript elements with event handlers
description: In this article, we’ll look at how to dynamically create JavaScript elements and how to attach event handlers to the dynamically created JavaScript elements.
img: https://res.cloudinary.com/amycruz/image/upload/v1632429235/dynamically.png
alt: my first blog post
---
<br>


### Introduction
Before we dive into how to attach event handlers to dynamically created JavaScript elements, it’s important that we understand JavaScript events and how they work.

According to MDN web docs, events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if you want to.

It can occur in different ways. For example: when a user clicks on the submit button to submit a form while a user plays or pauses a video, when a user presses a particular key on the keyboard, or when a user copies content from a web page.

In JavaScript, attaching event handlers on an element that is not yet created or does not exist on the page will throw an error. As a result, the event handler code won’t work.

**For example:**

```
//This is a  div with a class of container

<div class="container"></div>
```

```js
// we created a myBtn function stating that when ever we click btn, it should alert 'you clicked on the button class'

function myBtn() {
alert('you clicked on the button class')
};

// btn class does not exist  in our html page therefore this will throw an error of addEventListener of null
const btn = document.querySelector(".btn").addEventListener('click',myBtn)
```

In the above example, the btn class does not exist in our index.html page. Therefore, this will throw an error of addEventListener of null.

We can dynamically create an element in JavaScript and attach event handlers with these two methods:

**document.createElement() method**

This method allows us to create the HTML elements by their tag names, like `<div>`, `<p>`,`<img>`, and `<h1>`.

When we create an element with document.createElement, it doesn’t appear on the page immediately. It is going to store in JavaScript memory until it is injected in the DOM.

In this article, we are going to create a simple dog profile.

We’ll dynamically create our elements, inject it to the DOM, and also attach event handlers.



[Live demo at codepen](https://codepen.io/amycruz/pen/MWyxaZd)

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dog profile</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
   
    <script src="index.js"></script>
</body>
</html>
```

Here is our `index.html` with no element in the body of it. We are going to dynamically create the element from JavaScript, inject it into the DOM and also attach event handlers to the dynamically created elements.


```js


let newDog = document.createElement('div')

 newDog.classList.add('dog')

 const myImage = document.createElement('img')
 myImage.src="https://picsum.photos/id/237/500/500";
 myImage.alt='Dog photo'

 const h2 = document.createElement('h2')
 h2.textContent = 'My name is Roviel and i love playing and eating.'

 const p = document.createElement('p')
 p.classList.add('moreInfo')

 p.textContent= 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat.'


 const button = document.createElement('button')
 button.classList.add('btn')
 button.textContent= 'Click to read  more about me '

 document.body.appendChild(newDog)
 newDog.appendChild(myImage)
 newDog.appendChild(h2)
 newDog.appendChild(p)
 newDog.appendChild(button)

// Adding event handlers

 function showMore(){
   document.querySelector('.moreInfo').style.display ='block'
}

document.querySelector('.btn').addEventListener('click', showMore)
```


In our index.js, we used document.createElement() to dynamically create a new div. Then, we added a dog class to the div we created earlier.

The classList property is used to add, remove, and toggle CSS classes on an element.

Next, we created an image tag with src and alt attributes.

We also created the h2 tag and added text content in it. Additionally, we added a new p element with a class of info that will contain more information about the dog.

Next, we’ll dynamically creating a button with a class of btn. We’ll add text saying click here to read more.

If you inspect your browser, you won’t see the div with a class of dog we created because we haven’t appended it yet to the DOM.

Now, we’ve dynamically created an element. The question is: how do we inject it to the page?

To inject it into the DOM, we are going to use the .appendChild() method to append the dynamically created elements.

If you inspect your console, you will see the dynamically created elements injected in your DOM.

Now we can add event handlers.

To attach event handlers to the dynamically created button, we need to select the button with a class of btn and add an event listener of click.

We’re saying that onclick of the button, the p tag with a class of moreInfo should display block.

```js
 .dog{
            background-color: pink;
            width: 40vw;
            margin: 0 auto;
            border-radius: 10px;
            padding: 2rem;
            text-align: center;

        }
        img{
            width: 35vw;
        }
        

        button{
            background-color: black;
            color: white;
            padding: 5px;
            border-radius: 5px;
            outline: none;
            margin-top: 10px;
            border: none;
            animation: blink 2s infinite;
        }

        @keyframes blink {
    0% {
        background-color: #d90368
    }
    25% {
        background-color: #ff4e00;
    }
    50% {
        background-color: #000;
    }
    75% {
        background-color: #d90368;
    }
    100% {
        background-color: #058c42;
    }
}

     .moreInfo{
            display: none;
        }

        @media only screen and (max-width: 800px) {
            .dog{
            background-color: pink;
            width: 80vw;
            margin: 0 auto;
            border-radius: 10px;
            padding: 2rem;
            text-align: center;

        }
        img{
            width: 70vw;
        }
}

```

Here is the CSS code for styling the dog profile.

Creating of an element with JavaScript backtick strings
JavaScript backtick strings are also known as template literals.

According to MDN, template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

We are going to dynamically create an element with JavaScript template literals, inject them to the DOM, and also attach event handlers.

Check out this [live demo at codepen](https://codepen.io/amycruz/pen/KKzErrr)

Here we are still going to create the dog profile created earlier on with a difference in the JavaScript file. So, our HTML and CSS remains the same.

**template literals.js**

```js
//Using Template literals

let newDog =  `
<div class="dog">
<img  src="https://picsum.photos/id/237/500/500/" alt="dog"/>
<h2>My name is Roviel and i love playing and eating</h2>
<p class="moreInfo">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'
</p>
<button class="btn">Click to read  more about me</button>
</div>
`;

```

In the template literals.js file, we declared newDog, and use template literals to create multiple elements in it. If you console.log(newDog), you will see the element created like a string in the console.

Or if you console.log(typeof newDog), it is going to return a string showing that it is not yet a DOM element.

Next, we are going to use document.createRange() to turn the string into a DOM element.

Then we call createContextualFragment()) method that leaves on the range. When you console.log myFragment, you will see a range of objects ( a collection of elements, or part of HTML we can work with).

Then, we append myFragment to the body of the page.

NOTE: If you do need to do things like add event listeners or change classes, we should first put it in the DOM with a createcontextual fragment and put it in the body or anywhere in the page.

Next, we are selecting the button with a class of .btn where the users click to read more about the dog.

If you console.log(btn), you find out that it is in the DOM because we have injected it to the DOM through the createContextual fragment.

### Adding event handlers**

We added an event listener of click, and called a showMore function.

In the showMore function, we selected the class moreInfo. If you check on our css you find out that the text was set to display none. So now we are saying that onclick of the button, let the display none change to display block.

We have created a dog profile. All elements were created dynamically, and the event handler of onclick was added to the dynamically created elements.

<br>

## Conclusion
<br>
Congrats! You have just learnt how to dynamically create JavaScript elements using document.createElement, and also use the template literals.

You have also learnt how to attach event handlers to the dynamically created element.


This article was original published at [logrocket](https://blog.logrocket.com/how-to-dynamically-create-javascript-elements-with-event-handlers/)

