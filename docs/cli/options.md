# CLI Options

All UI controls have a corresponding CLI option.
To see all available options, run `particle-life -h`.
For example, the `-p <int>` option will set the position mode upon startup:
```sh
particle-life -p 4
```
This initializes particle position with a spiral,
as if the user had pressed `p`, followed by `4`:
```
         8O.
     oOo:  oo:o
   :O.         OO
   @            ::
   0.     @      .
    @0   @@
      0o8:
```

Instead of having the interactive GUI open, you can also simply print the output to stdout with the `-o` flag.
Use `-O` instead if you want the frame to be rendered in-place in the terminal, but still in stdtout.

If you only want the program to display a single frame and then quit, add the `-q` flag.
This allows you to do something like this:
```sh
C:\users\tom> particle-life -oq | tee frame.txt
```
This will write the first rendered frame into a new file `frame.txt`.

If no `-z <float>` option is given, the zoom is set to fit the larger screen dimension,
as if the user had pressed `Z`.
