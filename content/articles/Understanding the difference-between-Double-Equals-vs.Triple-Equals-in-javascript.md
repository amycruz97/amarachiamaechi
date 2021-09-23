---
title: Understanding the difference between Double Equals vs. Triple Equals in Javascript.
description: If you aren’t sure what the difference between == and === are in JavaScript, you aren’t alone. A lot of people still struggle to understand the difference between ‘==’ and ‘===’ in javascript.
img: https://res.cloudinary.com/amycruz/image/upload/v1632430528/double.png
alt: images
---

First, Let's get to know what is Double Equals and Triple Equals:


### Double Equals(==):

> Double equals are officially known as the abstract equality comparison operator or loose equality. it will compare two elements irrespective of their datatype. It also converts the variable values to the same type before performing a comparison. This is known as [type coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion).

### Triple Equals(===):
>Triple equals are termed the strict equality comparison operator or identity operator, but it will compare two elements by value and datatype. Strict operators do not convert the variable values to the same type before performing a comparison but instead, it returns true only if both values and types are identical for the two-variable in comparison.


```

console.log(10 == "10"); //true
console.log(10 === "10"); //false

```

**Note:** When you use the double equals, it returns true because the string 10 is converted to the number 10 before the comparison is made. While the triple equals compare the types and value and return false.

Let's take a look at this example:

```js
const myAge = 30;
const yourAge= 30;
console.log(myAge);  //30;
console.log(yourAge);  //30;
console.log(myAge == yourAge); //true
console.log(myAge === yourAge); //true

```

Note that double equals and triple equals returned true because both variables have the same data type and values which is 30;

Let's also consider another example:

```js
const yourAge= "30";
console.log(myAge);  //30;
console.log(yourAge);  //30;
console.log(myAge == yourAge); //true
console.log(myAge === yourAge); //false

```

Note the difference, this time the triple equals returned false. why, it is because the myAge is an integer variable with a value of 30, and the yourAge variable is a string variable with a string value of “30”.

```js
const fName= "Amy";
const lName= "Cruz";
console.log(fName);  //Amy;
console.log(lName);  //Cruz;
console.log(fName == lName); //true
console.log(fName === lName); //true
```

Note that double equals and triple equals are true because they are both of the same data type and value which is a string.

## Equality Operators and Other reference types

So far, we have been exploring equality operators using [primitive types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).

What about reference types like [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

```js
const num1 = [1,2,3];
const num2 = [1,2,3];
console.log(num1 ==  num2); // false
console.log(num1 === num2); // false
```

**Note:** You cannot compare two arrays that have identical contents the same way we do it for primitive types. Even though the array contents are the same, these essentially have different values. Same also applies to objects and other reference types.

### So which one should I use?

#### Triple Equals is superior to double equals.

In general “===” operator is recommended since it never does type conversion we are doing an exact comparison thus it always produces correct results.

Thanks for reading. 😊😊😊😊