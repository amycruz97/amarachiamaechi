---
title: Styling a Vue.js application using CSS
description: Styling Vue components with CSS can help developers add design aesthetics to their applications, including background colors, font size, padding, positioning, animation, and responsive displays for different screen sizes.
img: https://res.cloudinary.com/amycruz/image/upload/v1632430393/styling.png

alt: Styling a Vue.js application using CSS banner
---


<br>

With Vue directives, you can manage class and style binding within the template. You can also use inline styling within components, or use an external CSS file to keep our application organized.

In this article, we will explore different ways of styling Vue components with CSS by building a simple web page.

### Prerequisites
Before going through this tutorial, there are a few things you should check for. First of all, you’ll need a code editor, preferably Visual Studio Code. Then, check that you have Node.js version 10.x or above installed by running the following in your terminal:

```
:node -v
```

You’ll also need Vue’s latest CLI. To get the latest version, uninstall the old CLI version first:

```
npm uninstall -g @vue/cli
 id="or">
 
 OR

yarn global remove @vue/cli
```

Then, install the latest version:

```
npm install -g @vue/cli

 OR

yarn global add @vue/cli
```

Alternatively, you can update the version like so:

```
npm update -g @vue/cli

OR

yarn global upgrade --latest @vue/cli
```

The repo for for this demo can also be found [here](https://github.com/amycruz97/managing-styes-in-vue). I also recommend checking out a recent list of [top Vue component libraries for further reading](https://blog.logrocket.com/top-10-vue-component-libraries-for-2020/).

### Set up your Vue project
To create a new project, run:

```
vue create <projectname>
```

You will then be asked to pick a preset. You can either choose:

1. The default preset which comes with a basic Babel + ESLint setup

2. Vue 3 preview, or

3. Select “Manually select features” to pick the features you need

Next, we will change directory:

```
cd <projectname>
```

And we will set ourselves up to view in a localhost :

```
npm run serve

or

yarn serve
```

### Use the scoped attribute to style in Vue
The scoped attribute attached to the style tag below means that any CSS style defined here is only going to be applied to this template and not outside the component/template.

First, create a navbar component, named “Navbar”:

```js
// @/components/Navbar.vue

<template>
    <div class="navbar">

        <div class="navLink">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Navbar'
}
</script>
<style scoped>
.navbar{
    background: #f44336;
    padding: 1rem;
    font-size: 1.5rem;
    border-bottom: 1px solid white;


}
.navLink{
text-align: center;
}
a{
    text-decoration: none;
    padding: 1rem;
    color:#fff;
    text-align: center;
}
@media only screen and (max-width: 600px) {
    .navLink{
        display: flex;
        flex-direction: column;
    }
}
</style>
```

In the example above, we created a navbar component. Inside it, we used a scoped attribute to style the navbar. This means that all the CSS styles defined here will only be applied in the navbar components.

### Link with an external CSS file
As our application grows bigger with lots of CSS, I would recommend separating the CSS styles into an external CSS file and linking it to the component. This is just one of many ways to clean up your code.

Here is an example:
```js
// @/components/Body.vue

<template>
    <div class="container"> 
        <div class="startPage">
        <h2>Cruz Page</h2>
        <button class="btn">Get started here </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Body'
}
</script>
<style scoped src="../assets/css/startpage.css">
/* @import '../assets/css/startpage.css'; */
</style>
```

Your above component will link to the external CSS file below:

```js
// @/assets/css/startpage.css';

.startPage {
    height: 600px;
    background-color: #f44336;
    text-align: center;
}
h2{
    padding-top: 10rem;
    font-size: 4rem;
}
.btn {
    background: black;
    color: #fff;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    outline: none;
    padding: 0.7rem 2rem;
    border: none;
    margin-top: 2rem;
}
```

When using an external file, you can either link it through the source file itself or import it in the style tag. For this example, we linked the external CSS file that we created in the assets folder in our Vue application.

### Use global styles in Vue.js
There are some styles that we will want to apply across components in our app. To do so efficiently, we will use global styling, rather than styling them in a scoped or external file (although this would work too). If you want to do general styling like fonts, colors, background-color, border-radius, and margin, global styling is your best option.

In our example below, we are going to add our global styling in our App.vue style tag.

```js
// @/src/App.vue

<template>
  <div>
    <Navbar/>
    <Body/>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Body from './components/Body.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Body
  }
}
</script>
<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
h1,h2,h3,h4,h5,h6{
  color: #fff;
}
</style>

```

As you will notice, we used a CSS wildcard selector (pronounced as an asterisk) to select all the element s in our application. In this instance, the margin and padding on all elements has been set to 0, and box-sizing has been set to border-box .

### Use inline styling
An inline CSS is used to apply a unique style to a particular HTML element using the style attribute.

Here is a simple example:
```
<h1 style="color: red; text-align: center;">I am a footer</h1>
```

In Vue.js, we can add an inline style to our element by binding the style attribute in the HTML tag. For reference, :style is shorthand for v-bind:style.

Inline styling can be done in two ways: using object syntax or array syntax. We will discuss both below.

### Object syntax
The object syntax allows us to use inline styling by putting the CSS attribute name as the key name of the object, and the values as the value of each CSS attribute. When using object syntax, use either camelCase or “kebab-case,” as in the example below.

```js
// @/components/Footer.vue

<template>
    <footer 
      :style="{backgroundColor: bgColor, color: textColor, 
              height: `${height}px`, textAlign: align, 
              padding: `${padding}rem`
              }">
          <p> &copy; 2020</p>
    </footer>
</template>
<script>
export default {
    data(){
        return{
            bgColor: 'black',
            textColor: 'white',
            height: 200,
            align: 'center',
            padding: 5
        }
    }
}
</script>
<style>

</style>
```

In this instance, we created a footer component and then used the object syntax to style the footer element.

With the object syntax approach, it is a good practice to bind to a style object directly so that as our application gets bigger, our template will look cleaner.

 Check it out in the following example:

 ```js
 <template>
        <footer :style="footerStyles">
          <p> &copy; 2020</p>
        </footer>
</template>
<script>
export default {
    data(){
        return{
            footerStyles:{
                backgroundColor: 'black',
                color: 'white',
                height: '200px',
                textAlign: 'center',
                padding: '5rem'
            }

        }
    }
}
</script>
<style>

</style>

```

### Array syntax
The other method of inline styling is to add multiple style objects with the array syntax. 
In the following example, we will add an extra object in the array syntax — textColor — which will change the text color to red:

```js
<template>
        <footer :style="[footerStyles1, textColor]">
        <p> &copy; 2020</p>
        </footer>
</template>
<script>
export default {
    data(){
        return{
            footerStyles1:{
                backgroundColor: 'black',
                height: '200px',
                textAlign: 'center',
                padding: '5rem'
            },
            textColor:{
                color: 'red',
            }

        }
    }
}
</script>
<style>

</style>
```

When you want to add multiple style objects as shown in the example above, it is best to use the array syntax; to dynamically style classes, the object syntax is the best method for inline styling.

## Conclusion
In this tutorial, we learned about different ways that we can style our Vue.js application, including scoped styling, linking to external CSS files, global styling, and inline styling with object and array syntax. We also made a [simple website](https://managing-styles.netlify.app/) to illustrate how to apply the different styling methods.

This article was originally published at [Logrocket](https://blog.logrocket.com/styling-a-vue-js-application-using-css/)
