# Getting Started

## Installation

You need to have Java 16 or higher.
(Contrary to the [Desktop App](/app/installation), you don't need Windows for this.)

Add this to your build.gradle:
```gradle
repositories {
    maven { url "https://jitpack.io" }
}

dependencies {
    implementation "com.github.tom-mohr:particle-life:v0.2.0"
}
```

You can now import the framework in Java:
```java
import com.particle_life.*;
```

## Running the Simulation

First, instantiate an [`Accelerator`](/java-framework/accelerators).
Example:
```java
Accelerator accelerator = (a, pos) -> {
    // this is the force function of particle life:
    double rmin = 0.3;
    double dist = pos.length();
    double force;
    if (dist < rmin) {
        force = (dist / rmin - 1);
    } else {
        force = a * (1 - Math.abs(1 + rmin - 2 * dist) / (1 - rmin));
    }
    return pos.mul(force / dist);
};
```

Next, instantiate the `Physics` class and pass the accelerator to the constructor.
```java

Physics physics = new Physics(accelerator);
```

To run your simulation, you need to repeatedly call `Physics.update()` to recompute the velocities and positions of the particles.

```java
while (true) {
    physics.update();
}

// call this at the end of your program
physics.shutdown(1000);
```

## Number of Update Threads

Use `Physics.preferredNumberOfThreads` to control the number of threads that are used in the Physics.update() method.

::: info
This is independent of whether you use synchronous or [asynchronous](/java-framework/asynchronous-updating) updating.
:::

## Particle Coordinates

Particles have a position, a velocity and a type.
The coordinates of the position are in the range of \[-1.0, 1.0\].
Therefore you may need to map them to screen coordinates when drawing the particles.

By default, `Physics.settings.wrap` is true. This allows the particles move and interact across the world's borders.
If `Physics.settings.wrap` is false, they will collide with the world's borders.

