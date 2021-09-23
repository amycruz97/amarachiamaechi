---
title: The bleeding edge of JavaScript classes
description: In this article, we’ll look at the bleeding edge of JavaScript classes.
img: https://res.cloudinary.com/amycruz/image/upload/v1632430448/bleeding.png

alt: The bleeding edge of JavaScript classes
---

JavaScript classes are a special type of function. However, they’re similar to typical functions in that JavaScript classes are declared with a keyword and initialized with an expression syntax.

JavaScript didn’t originally have classes. Classes were added with the introduction of ECMASCRIPT 6 (es6), a new and improved version of JavaScript (ECMASCRIPT 5 being the older version).

A typical JavaScript class is an object with a default constructor method. JavaScript classes are built on prototypes, but with an expression syntax.

Before classes existed, prototypes were used to emulate classes in JavaScript. A prototype is a default object attached to every JavaScript function and object. Additional properties can be attached to a prototype, which helps us emulate JavaScript classes.

For a better understanding of this, let’s declare a function named ‘car’ with two parameters: age and name.

```js
function Car(){
    this.name = 'dragon';
    this.age = 3;
}
```

`Car.prototype.color = 'white'`

Next, let’s create a new car instance:

`let Car1 = new Car()`

Now we’re going to log the newly added property to the console:

`console.log(Car1.color)`

The JavaScript function car in this case serves as a class with three properties: name, age and color. In other words, JavaScript uses inheritance that comes with prototypes to emulate classes.


### ES6 classes

With the introduction of classes in JavaScript, ES6 provided us a much more concise way of class declaration using a syntax that’s similar to other object oriented programming languages. As opposed to ES5’s approach to classes, ES6 has no need for the function keyword when working with classes though under the hood. JavaScript still considers classes a special type of function.

Arguably, the major difference between a class and a function is hoisting: unlike functions, JavaScript classes need to be declared before being accessed. Otherwise, it’ll throw an error.

### Class keyword

JavaScript provides us with a class keyword, which is the primary way of defining classes. It serves as syntactic sugar to the already existing prototype inheritance pattern.

```js
//javascript class declaration
class Car  {
   //methods
}
```

As shown above, the class keyword is used to specify that a JavaScript class is being defined.

One can follow a different approach from the above when defining a class by using class expressions for more flexibility. This way, a class can either be named or unnamed.

```
//unnamed javascript class expression
let Car = class {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}
```

Here’s an example of a named JavaScript class expression:

```js
//named javascript class expression
let Car = class Car {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}
```

### Constructor method

A constructor method is a special method in JavaScript used for initializing class objects. It is called automatically in JavaScript once a class is initiated. There can only be one constructor method in any JavaScript class.

When not defined, JavaScript adds an empty constructor with zero parameter to the class in question.

Here’s an example of a class with a constructor method:

```js
//javascript class with a constructor
 class Car {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

```

The above class contains a constructor with two parameters: name and age.

### Static method
A static method is a method that is called on the class itself, rather than on an instance of the class. A static method is not an instance of a class, but it’s related to a class in terms of functionality.

Here’s a typical example of a static method:

```js
class Math {
    static add(number1 , number2){
        return number1 + number2
    }
}
```

The above static method can then be called as shown below:

```
let additionResult = Math.add(2,3)

```

Note that the static method add shows us what it means to make an addition.

### ES6 class syntax

A typical JavaScript class has the syntax seen below:

```js
class Car {
    constructor(){
        //default operation
    }
    method(){
        //operation2
    }

}
```

### Problems with ES6 classes
Classes may provide a more complex solution to an otherwise simple way of performing certain operations in JavaScript. People who have backgrounds in object oriented programming language may decide to perform simple operations with classes even when they’re not necessary.

Some developers may argue that the addition of classes took away the originality of JavaScript, and that making use of prototypes was a more flexible way of performing operations that require classes. This is because unlike classes in other object oriented programming languages, JavaScript does not provide basic class functionalities, such as private variable declaration.

ECMASCRIPT 2020 aims to solve some of these problems.

### ECMASCRIPT 2020 additions to classes
Every year, additions and modifications are made to JavaScript to serve the needs of JavaScript users. The latest modifications are in ECMASCRIPT 2020. Some of the additions to classes for the year 2020 includes private class variables and static fields.

Private class variable: When working in a large codebase with a lot of variable declaration, there could be a need for a variable that can only be accessed within a class. A private class variable solves this problem. With the addition of a hash in front of a variable name, a private variable can easily be created.

```js
class Detail {
      #name = "steve"
     welcome(){
        console.log(this.#message)
      }
 }

 const detail_1 = new Detail()
   detail_1.welcome() 

```

The above variable ‘#name’ can only be accessed within the class ‘Detail’.

Static fields: For an understanding of static fields, let’s consider the code snippet below;

```
class Detail {
     #name = "steven"

     welcome(){
         console.log(this.#message)
     }
 }

 ```

 With the older version of JavaScript, an attempt to access the method ‘welcome’ without creating a new class instance seems impossible. But with the latest addition, we can access these methods without any need for an instance creation.

The above method can be accessed as shown below:

```
const DetailMethod = Detail.welcome()
```
<br>

## Conclusion
JavaScript classes solve some of the problems that come with using prototypes. They make class declaration more direct and straightforward. The newest ECMASCRIPT 2020 makes it even easier to make use of classes by adding more flexibility.

This article was originally published at [Logrocket](https://blog.logrocket.com/the-bleeding-edge-of-javascript-classes/)