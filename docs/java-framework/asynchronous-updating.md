# Asynchronous Updating <Badge type="warning" text="difficult"/>

The primitive approach to particle simulations is this:
```java
physics.update()
draw()
physics.update()
draw()
physics.update()
.
.
.
```

However, this creates an unpleasant experience for the user if `physics.update()` or `draw()` is taking very long.
For instance, we don't want the physics computations to be slowed down just because drawing takes long.
And the other hand, we still want to have smooth camera movement even if the physics update is slow.

The solution is to execute `particles.update()` in a separate thread.
To make this easier, the framework already comes with a `Loop` class that supports this.
However, there are some pitfalls that are explained towards the end of this section.

## Spawning a Thread with `Loop.start()`

First, create an instance of the framework's `Loop` class:
```java
Loop loop = new Loop();
```

The following code starts a new thread that updates the particles as fast as possible.
The code also sets the `dt` setting to the actual time passed.
```java
loop.start(dt -> {
    physics.settings.dt = dt;
    physics.update();
});
```

You can pause the execution with `loop.pause = true`.

## Accessing Physics with `Loop.enqueue()`

Your main thread needs to use the `loop.enqueue()` whenever it want to access `physics`:
```java{6}
while (true) {

    // ...

    if (button.pressed()) {
        loop.enqueue(() -> {
            physics.settings.wrap = false;  // access physics
        });
    }

    // ...
}

physics.shutdown(1000);
```

Using `loop.enqueue()` puts the given command in a queue.
As soon as the other thread has finished its current update,
this queue is 
This method ensures that the two threads don't interfer with each other.

## Drawing Particles With Triple Buffering

If you use asynchronous updating, you should use [triple buffering](https://en.wikipedia.org/wiki/Triple_buffering) to draw your particles.

Drawing your particles involves accessing `physics`, because you need to know the positions and types of your particles (and maybe even their velocity).
Therefore, you need to call `loop.enqueue()`.

However, you can do one of two things inside `loop.enqueue()`:
- Directly draw the particles.
  However, this will block the physics thread until the drawing is finished.
- Just copy the particles to a separate buffer.
  The actual drawing will happen in the main thread again.

While the first approach is simpler, only the second approach takes full advantage of the asynchronous updating and because it blocks the physics thread as short as possible.

However, you also need to consider that the main thread doesn't know when the enqueued command is being executed.
Therefore, the copying operation onto the separate buffer might interfer with the drawing operation, which accesses this second buffer!
Therefore, a third buffer is needed (this is the last one, I promise!).

This technique is called triple buffering.
The [Desktop App](/app/installation) uses this method.


## Avoid Congestions with `Loop.doOnce()`

If your physics update takes very long, your main thread might in the meantime pile up commands via `loop.enqueue()`.
Then, as soon as the physics update is finished, all those commands need to be executed by that thread.
In the meantime, your main thread continues to run and might schedule even more.

Expensive commands, such as drawing your particles, could take 
This is helpful if your loop may take longer, and you don't want expensive commands
to pile up in the meantime (as this could cause the loop to take even longer).

::: info
If you want to understand more what exactly the `Loop` class does, take a look at its source code on GitHub: [`Loop.java`](https://github.com/tom-mohr/particle-life/blob/main/src/main/java/com/particle_life/Loop.java)
:::
