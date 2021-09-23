---
title: Building Accessible Front-End Applications
description: Building accessible applications give everyone equal access to the web irrespective of their condition. Several techniques, tools, and guidelines are available for building accessible front-end applications, making the job easier than ever before.
img: https://res.cloudinary.com/amycruz/image/upload/v1632425013/building_accessible.png

alt: Building accessible front-end applications cover 
---


<br>

In this tutorial, you will learn about web accessibility, why it is essential to build accessible front-end applications that will benefit all users, and tools you can leverage to implement accessibility in your workflow.

## What is Web Accessibility?
Before we dive into web accessibility, We must know what the term accessibility entails.
Accessibility is often abbreviated to A11y for short. A11y is created by combining the:

a — first letter of accessibility

11–11 letters between first and last letters of accessibility

y — last letter.

Accessibility means the ability to have access to anything irrespective of one’s condition.
We can see how lack of accessibility affects our everyday life. For example, we see how difficult it is for someone in a wheelchair to visit places built without accessibility in mind. We can also see how some people with specific disabilities like blindness find it challenging to operate or use a website.

A website is accessible when its content is available and can be operated by literally anyone.
According to Wikipedia, Web accessibility is the inclusive practice of ensuring there are no barriers that prevent interaction with, or access to, websites on the World wide web by people with physical disabilities, situational disabilities, and socio-economic restrictions on bandwidth and speed.

As a developer, it is easy to assume that all users access our website the same way, which is not valid. Some users access websites with a keyboard, mouse, voice-over, and many more devices. When you develop a website with accessibility in mind, all users have equal access to the web page’s information and functionality.

### Why is Web Accessibility Important?
Web accessibility is important because it benefits everyone. The web has become part of our lives — people from different parts of the world access the web daily. People use the web to study, do online shopping, book doctor’s appointments, chat with family and friends, etc. The web should be accessible to everyone to provide equal access to users and not limit them from getting the web’s full benefits and capacity. Also, an accessible website can help people with disabilities actively use the web without obstructions.

### Web Accessibility principles
The Web Content Accessibility Guidelines (WCAG) provide an international set of guidelines and principles for web accessibility.

WCAG is broken down into four principles known as POUR.

P — Perceivable

O — Operable

U — Understandable

R — Robust

**Perceivable**

Users must be able to process information gotten from the web. Information is not accessible if the user cannot process it. The perceivable principle states that users should identify contents and interact with the interface using one or more of their senses.

**Operable**

People with disabilities should be able to operate web pages and applications with a variety of tools. If a user cannot operate your website with a mouse, a keyboard-based operation should be implemented. Users should also control elements on the web page, no matter the tools or assistive technology.

**Understandable**

The content on the web page must be understandable to all users. Users should be able to understand the information on the web page. If a user can perceive and also operate a website, that doesn’t mean they understand it. An understandable website uses clear and concise language and limits confusion and ambiguity. It is also comprehendible, and the functionality is also easy to understand.

**Robust**

Websites should be compatible across all platforms, devices, and browsers. The web content should be compatible with current and future software and tools. A wide range of technologies can also access the content on the web page without limitations. One of the best ways to meet the robustness principle is to be consistent and follow standards and conventions when building for users.

### How to Make Web Accessible
The best way to make our website accessible as a front-end developer is by integrating accessibility into your development process. When this is done, the result is a product that is accessible for everyone.
Let us look at some of the ways we can make our website accessible for everyone.

**Always use the title tag.**
All web pages should include a <title><title> element within the head element. The title tag should also be unique to each page on the website. Not only do unique titles allows screen readers to distinguish pages, but they also enhance search results. The HTML title element makes it easy for screen readers to announce the page title when a website loads. If used correctly, the `<title><title>` element is crucial to making our website accessible.


```js
<html>
  <head>
    <title>Unique and Descriptive Page Title - cruz page</title>
  </head>
  <body>
    <h1>Provide a unique and descriptive page title</h1>
    …
  </body>
</html>
```

When you provide a unique and concise title, it helps users who use assistive technologies to understand what a web page entails.

### Define the Language of the website
Defining the Language of the website enables screen readers to read out the content with the correct pronunciation. If you do not specify the website’s language, the user’s assistive technologies will use its default language for rendering the page.

You can identify the primary Language of the website in the HTML element.

```js
<!DOCTYPE html>
<html lang="en">
<head>
<title>Title of the document</title>
</head>
<body>
The content of the document......
</body>
</html>
<html lang="en"
```

The example above en specifies English as the primary language for the webpage. You can change the lang attribute to the language of the webpage.

### Implement Keyboard Navigation
A keyboard can be the primary means some users use to navigate websites. A keyboard user typically uses the tab key to navigate through contents on the web.

The most crucial goal of keyboard accessibility is to make sure that users can navigate web content efficiently using their keyboard.
Testing your website for keyboard accessibility is pretty straightforward. Just press the tab key and navigate from the top to the bottom of the page.

It is essential you add a “Skip to Main Content” link into the code after the body element. The “Skip to Main Content” will allow keyboard-only users to skip to the main content without going through all the navigation links.

```js
<a class="skip-to-content-link" href="#main">
  Skip to main content
</a>
```


Another way to make our website accessible for keyboard users is by using native control elements button, input, select form label wherever possible. The native control element comes with inbuilt keyboard accessibility that is focusable and responds to keypress events by default.

### Make use of alternative text for images.
The alt attribute is used to describe an image.
Here is an example of how to use an alt attribute in our HTML

```
<img src="image-url" alt="A black dog">
```

<img :src="`/images/covers/dog.png`" />


The alt attribute should be provided for images in our HTML code. This makes it easy for people who cannot see and use a screen reader to understand its image.

This is also useful to people who turn off images due to low bandwidth and technologies that cannot see photos, such as search engines. If an alt attribute is not provided, screen readers will pronounce it as "image."The alt should be as descriptive as possible. It should be able to describe the content of the actual image. The example above alt= "A black dog" describes the dog's color instead of putting just dog as a description.

An alt should not include a “picture of” or “image of” because screen readers announce an image as an image. So an alt= "image of a black dog" would be announced as image, image of a black dog.


### Use semantic HTML
One way to accommodate all users is to use semantic HTML elements in our code. A semantic element is the structure of a web page that gives meaning to both the browser and developer.

Examples of semantic elements :
```
<header>
<nav>
<section>
<main>
<article>
<aside>
<footer>
<table>
<form>

```

The above semantic element defines the content on a web page.

Examples of non-semantic elements:
```
<div>
<span>
```
The above non-semantic elements tell us nothing about the content of a webpage.

**why use semantic HTML**
Let’s look at the benefit of using semantic elements in our code. But before that, let’s look at the example below. Semantic elements:

```js
<section>
  <article>
      <h1>My name is Amycruz<h1/>
        <p>I am a Front-end developer</p>
  
  </article>
</section>
<footer>&copy; Amycruz</footer>

```

Non-semantic elements:

```js
<div class="section">
      <div class="article">
        <h1>My name is Amycruz<h1/>
        <p>I am a Front-end developer</p>
      </div>
    <div id="footer">&copy; Amycruz</div>
```

Firstly, it is easier to read and understand the code written with semantic elements than those written with non-semantic elements.

Also, the example above that was written with semantic elements has greater accessibility. Assistive technologies like screen readers will be able to provide more information about the element to the user. While for sighted users, it is easier for them to identify various parts of the web page at a glimpse.

### Create accessible Forms
Forms are used to collect data and information from the users. When you create accessible forms, you are making it easy for the users to understand. Forms are commonly used on the webpage, like signing up, log in, buying a product, asking questions, contacting someone. If we don’t make forms accessible to users, we would be hindering many users from using the webpage, and when this happens, data collection becomes a problem.

**ways you can create an accessible form**

**Ensure Forms are Keyboard Accessible**

People who cannot use a mouse or with impaired vision uses keyboards to navigate web forms. The tab key enables users to move between links and form controls. Forms that use javascript for data manipulation can create interactions that only work with a mouse. So ensure that your web form can be operated appropriately with keyboards.

**Use Semantic HTML Form Elements for keyboard navigation**

As earlier stated, semantic elements are the structure of a web page that gives meaning to both the browser and developer. For example, using elements such as `<form>, <button>` clearly defines it purpose while non-semantic element such as `<div>, <span> `makes its purpose and makes it difficult to navigate through the webpage.


**Use Focus Styling keyboard navigation**
Using focus styling enables keyboard users to know which fields are being selected by the users.

```
input:focus {
  background-color: yellow;
}
```

In the example above, when a user clicks on the input field, the text field changes to a yellow background. This shows a keyboard user that is the place to input the text.

**Use visible labels — Not Placeholder Text.**

Placeholder attributes are those light-colored texts in a form that gives a short hint on the expected value on an input field. A placeholder text can be used in some inputs. Still, it should not describe what we want the user to do at that particular section because a placeholder attribute disappears once the user inputs data into the form. 
And `<label>` on the other hand, `<label>` is used to describe the form field's function, such as (input field, text area, checkbox, radio buttons, etc.). Proper use of labels will benefit screen reader users. The screen reader will read out the label when the user is focused on the element.

For some input types, we can use the placeholder attribute– but it is not the same as providing a visible label. The placeholder disappears once the user inputs data into the form, but the label describes the input.

```
<input type="text"  placeholder="first name">
```

**Use programmatic label**
The programmatic label enables the assistive technology to identify the purpose of the form.
The for attribute of `<label>` must be equal to the id attribute of an input field to bind them together, as shown below. This enables the screen reader to notify the user when he clicks on the associated name's text field.

```
<label for=”firstname”>First Name</label>
     
    <input type=”text” id=”firstname”>
```

**Form Validation and Error Messages**
This is an essential aspect of an accessible form. Form validation ensures that web forms are filled out with all necessary information in the correct format. When working with forms, ensure that the user is submitting valid information. By default, HTML5 has a range of inbuilt functionalities that validate some input such as email addresses, numbers, etc. Though sometimes we need javascript to validate the form, you need to make the form validation as accessible as possible to understand each error and where it is coming from. Also, make sure your error messages are descriptive as possible.

### Making accessible Links
Links connect a file or document to another file or document. Making accessible links is one of the most important aspects of web accessibility.

**Here are a few ways you can make your link accessible to all users**
- Making the link text more descriptive and logical is a way to make links accessible to users. For example, instead of saying “click here,” you can say download pdf here.

- Do no use the word “link ” in your links. When they encounter a link, screen readers tell the user, so you don’t need to use the word link or link to in your links.

- Avoid using URLs as the link text. When we use URLs as a link, the screen reader will read it as text. For example, www.amycruz.com will be read as Double-U, Double-U, Double-U, Dot, Amycruz dot com…”


### Making Audio and Video Media Accessible
Audio and video are used by people regularly. We listen to music, watch youtube videos, movies on Netflix, stream conferences, and many more. Media should be produced in ways that the content is accessible to all audiences. An accessible media should include a transcript, audio description and also be delivered in an accessible media player.

**Ways to make Audio and Video Media Accessible**

There are many ways to make accessible media, but let us look at a few.

**Captions**
Using captions on all media will help all users. Captions also allow users who are deaf or have a hard time hearing. It also helps the non-English speaker to understand the content of the video. Using captions on all your media elements will help all users, not only disabled users.

**Audio Description**
You should provide an audio description so that people who are blind can get crucial visual content such as titles, speakers’ names, and email addresses.

**Transcript**
A transcript is a text version of a media. A transcript should not only include what is being said in the video, but it should also describe the vital information showing on the screen that would not be accessible without seeing the video. When we provide a transcript to our media, we are not only making it accessible for people with disabilities; we are also making it accessible to people with technical limitations.


**Avoid fast-flashing content**
Flashing content in videos should be avoided, and if it should be included, due diligence should be put in place. Flashy contents can cause seizures in some users who have seizure disorders.

**Choose an accessible media player.**
When choosing how to host your video, you should consider a media player that supports accessibility. Some of the things you should consider are:

- Does the media player support captions

- Does the media player support audio description

- Can keyboard users navigate it without a mouse

- is the functionality or features available across all platforms and browser

### Using ARIA
According to MDN, Accessible Rich Internet Applications (ARIA) is a set of attributes that define ways to make web content and web applications (especially those developed with JavaScript) more accessible to people with disabilities. Without ARIA, certain functionalities in our application will not be available to some users with disabilities, especially users who use screen readers and cannot use a mouse.

### Some of the most common uses for ARIA include:

**Descriptive labels**
You use ARIA to add more description to HTML elements like buttons, links.
Let’s look at this example below. Before:

```
<button onclick="window.close()">X</button>
```

After:

```
<button aria-label="Close" onclick="window.close()">X</button>
In the example above, the aria-label in the second example provided a description to help assistive technologies know that it will close once you click on the X button.
```

### Forms
Making accessible forms helps screen readers to interact with your application or website effortlessly. By adding the ARIA attribute to form elements, you can also build an accessible form.

```
<label for=“first-name”>First Name</label>
<input type=“text” id=“first-name” aria-required=“true” aria-autocomplete=“on” />
```
The example above will announce to screen readers that inputting your first name is required.
You can check out this [site](https://webaim.org/techniques/aria/) to learn about more ways to use ARIA.

### Web Accessibility Tools
Web accessibility tools are software that helps you determine if web content meets accessibility guidelines. The web accessibility tools you should use depends on your need and budget.

Here are some tools and websites used for checking if a website is accessibility compliant.
- WAVE Web Accessibility Evaluation Tool (WAVE)

- Bureau of Internet Accessibility

- Accessibility Checklist

- Accessibility Developer Tools — Google

- ColorTester

- tanaguru contrast finder

- VoiceOver -Apple

- a11y.css

- Accessibility insights

- The A11Y Project

- axe™ — The Standard in Accessibility Testing

- Contrast Checker

- Lighthouse

- tota11y

- Tenon

Easy Checks

You can also check out this GitHub repo and w3c page for a comprehensive list of web accessibility tools.

## Conclusion
In this article, you have learned about web accessibility, what it is, why it is important we make our web pages accessible. Some ways you can build accessible front-end applications. we also learn about tools you can leverage and implement in our workflow to help us build an accessible application

**Resources for Further Reading**

- Web Content Accessibility Guidelines (WCAG) 2.0

- W3C’s Web Accessibility Initiative

- Introduction to Web Accessibility

- Web accessibility by google

- Web accessibility — Udacity

This article was originally published at [workshub](https://www.works-hub.com/learn/building-accessible-front-end-applications-a8175)


