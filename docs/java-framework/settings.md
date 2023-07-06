# Settings

`Physics.settings`

## Matrix

`Physics.settings.matrix`

The values that are passed to the [Accelerator](#accelerators) when updating the particles' velocities.

That is: If a particle of type `i` meets a particle of type `j`, then particle `i` is accelerated with value `matrix.get(i, j)` and particle `j` is accelerated with value `matrix.get(j, i)`.

Naturally, this matrix is quadratic.
Its size is equivalent to the number of types.
That is, if you change the size of the matrix, you need to make sure that all particles in `Physics.particles` that have a `type` <= `Physics.settings.matrix.size()`.
(Types start with 0, just like the indices in the matrix.)

