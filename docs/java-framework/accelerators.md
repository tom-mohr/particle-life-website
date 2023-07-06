# Accelerators

Accelerators decide how particles behave if they come close to each other.

More precicely, they decide how much an individual particle should accelerate and in what direction.

For that, they are only provided with very limited information:
- the [factor](#matrix) between the type of this particle and the type of the neighbor particle
- the position of the neighbor particle, relative to this particle

Accelerators must implement the `Accelerator` interface.
You can do this with a lambda expression:
```java
Accelerator myAccelerator = (a, pos) -> {
    return new Vector3d(0, 0, 0);  // no acceleration
};
```

Pass this to the constructor of the `Physics` class:
```java
Physics physics = new Physics(myAccelerator);
```
To change the accelerator later, simply set the `accelerator` attribute of your `Physics` instance:
```java
physics.accelerator = myAccelerator;
```

For example, you could implement the rules of Particle Life like this:
```java
Accelerator particleLife = (a, pos) -> {
    double rmin = 0.3;
    double dist = pos.length();
    double force = dist < rmin ?
        (dist / rmin - 1) : a * (1 - Math.abs(1 + rmin - 2 * dist) / (1 - rmin));
    return pos.mul(force / dist);
};
```

But that is just one possible accelerator, and there are many other accelerators that show interesting behaviour.

