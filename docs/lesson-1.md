---
title: 'Lesson 1'
description: 'What is P5.js?'
---

# P5.js

[**P5.js**](https://p5js.org/) is "a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else!"

P5.js is basically the code version of everything a painter needs to paint: the canvas, all the paints and paintbrushes you could ever imagine, the techniques for painting different shapes and textures, et cetera.

But, what's so cool is that P5.js is not only about painting. You can bring in sounds too! And so much more. We'll learn more about this in future lessons.

For now, let's take a look at the [**P5.js web editor**](https://editor.p5js.org/). This is where we'll be doing most of our coding to begin.

![P5.js web editor](/images/lesson-1/p5js-web-editor.png 'P5.js web editor')

Cool! Go ahead and click that thing that looks like a Play button. What happens? You should see a gray box appear to the right. Nice, you just ran your first sketch! Congrats!

So what's going on here?

When we click Play, P5.js does two things:

1. It does whatever we tell it to do to "setup" the sketch
2. It does whatever we tell it to do to "draw" the sketch

It's like telling someone how to make a PB&J. To setup, you need to get your bread, your PB, and your J out. To actually make the sandwich, you use your knife to spread the PB&J across the bread.

So how do we tell P5.js what to setup and what to draw?

## Functions

Functions are the building blocks of coding, and are a little weird. Functions are essentially **instructions**. They're almost like recipes in a cookbook. There's a recipe for making PB&J, and a recipe for making ramen. In P5.js, there's a recipe for setting things up, there's a recipe for drawing things, and recipes for a million other things. And we can make our own recipes!

But what's super important is that there's a big difference between reading a recipe and actually _following_ the recipe to cook something. In coding language, the difference is in **defining** a function versus **calling** a function.

In our code, we have this:

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
```

See those "function" words? Those are us **defining** functions – we are **defining** what should happen in the setup step and the draw step.

Functions will always have parentheses ( () <-- those guys ) next to them. Sometimes stuff goes into those parentheses.

When we define a function, we give the function its **body**, which is all the stuff we write between the { }'s. Those are called curly braces.

So in the setup() **function definition**, we are saying "okay, when we setup, we want to create a canvas" How are we creating a canvas? By **calling** the `createCanvas` function! See the parentheses after `createCanvas`? So functions can call other functions, and that's super common.

Wait, but what's inside those parentheses? Those are called **function parameters**. Weird term, yeah, but basically they are ways of telling our function different ways of working. So, it's like we have a recipe for making a PB&J, and we tell the recipe that we are going to use strawberry jelly, or raspberry. In this case, we are telling our `createCanvas` function that we want our canvas to be a certain size. 400 pixels by 400 pixels.

Go ahead and change those numbers, and rerun your sketch. What happens?

So we got our canvas ready, and now we want to draw. So we do another **function definition**, this time for drawing. We say, "ok, when we draw, we want to draw a `background`" Again, this `background(220)` is a **function**, with **parameters** in those parentheses. Try and change that 220 to something else, and rerun the sketch. What happens?

Alright, last little detail: what's up with those semicolons, `;` ? We don't really use those in English, but in Javascript, those mark the end of a _line_. It's like a period in English, but in code its a semicolon. Weird but super important.

So to recap: we defined two functions, `setup()` and `draw()`, which P5.js will call when we press the Play button. `setup()` is going to then call the `createCanvas()` function, and `draw()` is going to call the `background()` function.

With me so far? I know, it's a lot. But let's get a little more exciting.

## Drawing shapes

Let's start drawing something on that canvas we set up. How about a circle? Well, there's a handy `circle()` function that P5.js gives us.

Now, ask yourself, when someone is giving you the instruction to draw a circle on a canvas, what do you need to know? Probably the two most important things are, "where?" and "how big?" That's where we use the **parameters** for the `circle()` **function**.

The `circle()` function takes three **parameters**: the x-coordinate of the center,
the y-coordinate of the center, and the diameter. In other words, the first two parameters say where it is left-right and up-down, and the third says how big it is.

Try adding `circle(100, 100, 50)` to your `draw()` function beneath the `background()` line. Don't forget your semicolon!

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(200, 200, 50);
}
```

Sweet! Play around with those three parameters. See how the first two move the circle around, and the third changes its size.

There are a whole bunch of shapes that P5.js gives us. We can see the list of them in the [**P5.js reference page**](https://p5js.org/reference/). This page is SUPER helpful, and I have it open all the time I am coding. Go down to the `Shape` section and click on the link for the `circle()`. We see a description of this function and how the parameters work.

![circle() reference](/images/lesson-1/circle.png 'Circle reference')

Go ahead and try getting some other shapes to show up! Let's look at
[**squares**](https://p5js.org/reference/#/p5/square) and a [**triangles**](https://p5js.org/reference/#/p5/triangle).

![square() reference](/images/lesson-1/square.png 'Square reference')

Squares have three required parameters, and a bunch of optional parameters. Just like the circle, the first two say where the square should be, and the third says how long the sides of the square should be.

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(200, 200, 50);
  square(175, 250, 50);
}
```

![triangle() reference](/images/lesson-1/triangle.png 'Triangle reference')

Triangles have three points, so our parameters are for saying where each of those points are, as (x,y) pairs.

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(200, 200, 50);
  square(175, 250, 50);
  triangle(200, 100, 150, 150, 250, 150);
}
```

It often makes it easier to draw out the points on paper first so you have an idea of where each of the (x,y)'s should go.

There are a bunch of other shapes in the [**P5.js reference page**](https://p5js.org/reference/). Go ahead and try some!

## Colors

In P5.js (and in most computer code!), colors are represented in a few ways. One way, we've actually already seen: the `220` in `background(220)` is actually a number representing a **greyscale** value, which means an amount of grey. This goes from 0 (fully black) to 255 (fully white), with 125 being a nice grey..

Another way to represent color is using **RBG**. RGB stands for "Red Green Blue" and is a way to represent every color using three numbers: the amount of red, the amount of green, and the amount of blue. Amounts for each of these colors also go from 0 (none) to 255 (all). (0,0,0) is black, and (255,255,255) is white.

Let's change our background to be red:

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 0, 0);
  circle(200, 200, 50);
  square(175, 250, 50);
  triangle(200, 100, 150, 150, 250, 150);
}
```

When there is one paremeter for `background()`, it is the amount of grey. When there are three, the first parameter of our `background()` function is the amount of red, the second is the amount of green, the third is the amount of blue. Try changing it so you have a blue background. Then try getting a purple background!

Now, what about those shapes? We can change the color of those shapes in two ways: the **stroke** and the **fill**. The stroke is a fancy name for the outline of the shape. The fill is a fancy name for the inside of the shape. Just like `background()`, we have `stroke()` and `fill()` functions. You can find these in the reference page as well! [**fill()**](https://p5js.org/reference/#/p5/fill) and [**stroke()**](https://p5js.org/reference/#/p5/stroke).

Let's make our shapes have a yellow outline and a pink fill:

```js
function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(255, 0, 0);

  stroke(255, 255, 0);
  fill(255, 125, 125);

  circle(200, 200, 50);
  square(175, 250, 50);
  triangle(200, 100, 150, 150, 250, 150);
}
```

One important thing to note is that `stroke()` and `fill()` change everything after them, so the circle, square and triangle will all be that new stroke and fill color. To change individual shapes, we can just keep doing more `stroke()` and `fill()` calls before each shape:

```js
function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(255, 0, 0);

  stroke(255, 255, 0);
  fill(255, 125, 125);

  circle(200, 200, 50);

  stroke(0, 255, 255);
  fill(125, 255, 125);

  square(175, 250, 50);

  stroke(255, 0, 255);
  fill(125, 125, 255);

  triangle(200, 100, 150, 150, 250, 150);
}
```

Finally, another helpful tool is turning off strokes and fills for shapes. We can do that with `noStroke()` and `noFill()`. Try that out and see what that does.

```js
function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(255, 0, 0);

  noStroke();
  fill(255, 125, 125);

  circle(200, 200, 50);

  stroke(0, 255, 255);
  fill(125, 255, 125);
  square(175, 250, 50);

  stroke(255, 0, 255);
  noFill();
  triangle(200, 100, 150, 150, 250, 150);
}
```

## Putting it all together

So we learned about functions! And parameters! And shapes! And colors! That's a lot, and we can do a lot with that alone.

Your assignment today is to make a creature using different shapes and different colors. Try using at least four shapes and a few colors. Give your creature a name and a story.

## Next steps

Next we will start animating our drawings, having things move and change over time. This will give our art a lot more life, and will open up many doors. Until then!
