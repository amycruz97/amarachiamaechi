---
title: Your guide to reactivity in Vue.js
description: In this article, we will look at reactivity in Vue.js and how it works.
img: https://res.cloudinary.com/amycruz/image/upload/v1632431248/reactivity.png
alt: images
---

<br>

## Introduction
Reactivity describes the situation in which changes in the application state are automatically rendered in the DOM.

Vue is a progressive framework for building modern reactive user interfaces and single applications. Vue enables augmented rendering of the HTML markup through a template declaration that is bound to a data model.

Vue.js has an adaptable reactive architecture that focuses on declarative rendering of data models and component composition.

Reactivity in Vue, allows Vue to communicate at every layer of the application and updates the view base data modification.


## How Vue 3 handles reactivity using proxy
Reactivity is a programming paradigm that is based on data flows and the propagation of change. This allows us to adjust to data changes or events in a declarative manner.

In Vue, the reactivity system has always existed ever since its earliest version. One of Vue’s most powerful features is its reactivity system.

## Reactive state in Vue 2
Before diving into how reactivity works in Vue 3, let’s briefly recap how to create reactive data in a Vue 2 application. If you want Vue to keep track of the changes you’ve made to the data, you need to declare the property outside of an object that’s returned from the data function.


```js
<template>
  <h1>My name is {{ name }}</h1>
</template>
<script>
  export default {
    data() {
      return {
        name: "amycruz"
      };
    }
  };
</script>

```

In Vue 2, Vue looks through all properties and uses Object.defineProperty() to create getters and setters for each piece of data and ensure data changes are being tracked.

According to the MDN web docs, object.defineProperty() defines a new property directly on an object. It can also modify an existing property on an object and return the object. With object.defineProperty, we can easily set the getters and setters of an object.

```
const data = {
    count: 10
};

const newData = {

}

Object.defineProperty(newData, 'count', {
  get() { return data.count; },
  set(newValue) { data.count = newValue; },
});

console.log(newData.count); // 10

newData.count = 20;

console.log(newData.count); // 20

```

Here, we added two objects: data and newData (empty). Data is holding our original object, while newData will serve as the object. We’ll be setting the property using object.defineProperty().

To track when a property is accessed or modified, we can do this:


```js
const data = {
    count: 10
};

const newData = {

}

function track(){
  console.log("Prop accessed")
}
function trigger(){
  console.log("Prop modified")
}
Object.defineProperty(newData, 'count', {
  get() {track();return data.count; },
  set(newValue) { data.count = newValue;trigger(); },
});

console.log(newData.count); 
// Prop accessed 
// 10

newData.count = 20;
// Prop modified

console.log(newData.count); 
// Prop accessed
// 20
```

With the trigger and track function, we can easily see when changes occur and perform dependency-tracking and change-notification operations.

As a developer, it is important that you really have a solid understanding of how reactivity works is Vue 3 to avoid the limitations of reactivity — particularly in Vue 2. You also need to understand reactivity to use new features, such as the composition API.

By default, JavaScript is not naturally reactive:

```js
// index.js 
let cost = 10
let qty =  5
let total = cost * qty
console.log(`The total amount is ${total}`) // The total is 50
cost = 20
console.log(`The total amount is ${total}`) // The total is 50. total doesnt get updated

```

Looking at the code example, you’ll notice that the total value hasn’t been updated, even after we change the cost to 20.

To add a little reactivity to our code, we can turn the calculation into a function:


```js
let cost = 10
let qty =  5
let total = 0

//declare a computation
const computeTotal = () => total = cost * qty
computeTotal(); 
console.log(total) // 50
cost = 20
console.log(total) // still outputs 50
computeTotal() //run the computation again
console.log(total) // outputs 100
```

As you can see, now we can run the computation function to update the computed value of the total.

In the code example above, we manually ran the computation after the value of cost changed in order to get the updated total. This process is unreliable, and the computation has to be run manually. This can be a problem, because it can negatively effect performance.

Reactivity in Vue 3
In Vue 3, the reactive API has been rewritten to solve many of the shortcomings of Vue 2. The reactive system was rewritten to utilize JavaScript’s proxies. A proxy acts as a wrapper around an object or function that intercept operations, like getting and setting a value.

With the new reactive system in Vue 3, there is now better support for observing changes in data using proxy objects.

Proxy objects enable you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

With proxies, we can intercept operations like get and set and immediately see when data is accessed or changed.

To create a proxy, you will need to pass two parameters:

target: the data object
handler: the object that defines the operations you want to intercept

Let’s look at the basic example below:

```js
const data = {
  meal: "rice"
}

const handler = {
  get(target, prop, receiver){
    console.log("Data Get: ", target, prop);
    return target[prop];
  },
  set(target, key, value, receiver) {
    console.log("Data Set: ", target, key, value);
    return target[key] = value;
  }
}

const proxy = new Proxy(data, handler);

console.log(proxy) // { meal: "rice" }
console.log(proxy.meal) 
// Data Get: { meal: "rice" } meal
// rice
proxy.meal = "yam"
// Data Set: { meal: "rice" } meal yam
// yam
```

In the above example, we’ve created a proxy object that accepted a data object. We also have a handler that we use to intercept the get and set operations in our objects. Anytime we try to access the meal prop, Data Get: { meal: "rice" } meal is logged on the console. The same thing happens when we try to update the meal prop value in the proxied objects.

In order to maintain the normal behavior of object getters and setters, we need to use the reflect object to reflect the normal object behavior.

Let’s look at the example below:

```js
const data = {
  meal: "rice"
}

const handler = {
  get(target, prop, receiver){
    console.log("Data Get: ", target, prop);
    return Reflect.get(target, prop, receiver);
  },
  set(target, key, value, receiver) {
    console.log("Data Set: ", target, key, value);
    return Reflect.set(target, key, value, receiver);
  }
}

const proxy = new Proxy(data, handler);

console.log(proxy) // { meal: "rice" }
console.log(proxy.meal) 
// Data Get: { meal: "rice" } meal
// rice
proxy.meal = "yam"
// Data Set: { meal: "rice" } meal yam
// yam

```

With Reflect, we don’t have to handle prop accessing or changes manually like we did previously.

To see when data is accessed or changed, we can add three functions:

track: lets us know when someone accessed data
watch: informs us when someone set the prop of the object
trigger: informs us when any data is changed in the object

Check out the example below:

```js
const proxy = new Proxy(data, handler);

console.log(proxy) // { meal: "rice" }
console.log(proxy.meal) 
// Data Get: { meal: "rice" } meal
// rice
proxy.meal = "yam"
// Data Set:  { meal: 'rice' } meal yam { meal: 'rice' }
// Data Change:  { meal: 'rice' } meal yam { meal: 'rice' }
// yam
proxy.meal = "beans"
// Data Set:  { meal: 'yam' } meal beans { meal: 'yam' }
// Data Change:  { meal: 'yam' } meal beans { meal: 'yam' }
// beans
proxy.meal = "beans"
// Data Set:  { meal: 'beans' } meal beans { meal: 'beans' }
// beans
```

Here, we are able to determine what to do when data changes based on the custom functions we’ve added.

Vue comes with the reactive method, which is used to create a reactive state in JavaScript or Vue. Basically, the reactive method is just a function that creates a proxy and wraps it around provided data objects, ultimately turning it into a proxied object.

It essentially converts your data into a proxy object, which enables Vue to perform dependency-tracking and change-notification when properties are accessed or modified.

Combining everything we know now, we should be able to create our own reactive method:

```js
const reactive = (data) =>{

    const track = (target, prop, receiver) =>{
      console.log("Data Get: ", target, prop);
    }
    const trigger = (target, key, value, receiver) =>{
      console.log("Data Change: ", target, key, value, receiver);
    }
    const watch =(target, key, value, receiver)=>{
      console.log("Data Set: ", target, key, value, receiver);
    }
    const handler = {
      get(target, prop, receiver){
        track(target, prop, receiver)
        return Reflect.get(target, prop, receiver);
      },
      set(target, key, value, receiver) {
         watch(target, key, value, receiver)
        if(target[key]!=value){
          trigger(target, key, value, receiver)
        }
        return Reflect.set(target, key, value, receiver);
      }
    }
    
    const proxy = new Proxy(data, handler);
    
    return proxy
}

const store = reactive({
  count: 0
})

store.count;
// Data Get: { count: 0 } count
// 0
store.count++;
// Data Set: { count: 0 } count 1 { count: 0 }
// Data Change: { count: 0 } count 1 { count: 0 }
// 1

```

We’ve just created a reactive method that turns our data object into a proxy. This also lets us perform change notification on every prop change.

These proxied objects cannot be seen by the user, but under the hood they let Vue perform dependency-tracking and change-notification when properties are accessed or modified. The Vue team released the reactivity package as a separate package in Vue 3.

Vue internally tracks all objects that have been made reactive, so it always returns the same proxy for the same object.

With this, we can say every component instance has a corresponding watcher instance, which records any properties “touched” during the component’s render as dependencies. If in the future a dependency’s setter is triggered, it notifies the watcher, which in turn causes the component to re-render.

On the first mount or render, a component would have tracked a list of dependencies ( or data in objects). These are the properties it accessed during the render. These make the component a subscriber to each of these properties. A a result, when a proxy intercepts a set operation, the property will notify all of its subscribed components to re-render.

<br>

## Conclusion

Congrats! You now have a good understanding of what reactivity is and how it works in Vue. We also learned about reactive state in Vue 2 and used this knowledge to more effectively grasp and appreciate the value of reactivity in Vue 3.


<br>


This article was originally published at [Logrocket](https://blog.logrocket.com/your-guide-to-reactivity-in-vue-js/).