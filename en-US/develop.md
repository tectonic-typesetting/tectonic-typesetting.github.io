---
layout: default
title: For Developers — The Tectonic Project
---

# Developing Tectonic

Due to its historical baggage, Tectonic is written in a combination of C, C++,
and [Rust](https://www.rust-lang.org/). The aim is to eventually transition it
to be fully written in Rust, but that is going to take a *long* time.

We recognize that Rust is a new language that not many people are familiar
with, but it is technically *excellent*. It would have been *massively* more
challenging implement Tectonic’s web-based bundle functionality in a language
like C. By porting more and more of Tectonic to Rust, we hope to eventually be
able to deploy it over more of the target systems that Rust supports, like
[WebAssembly](http://webassembly.org/).

Tectonic is developed in the open
[on GitHub](https://www.github.com/tectonic-typesetting/tectonic/). This
includes
[its issue tracker](https://www.github.com/tectonic-typesetting/tectonic/issues/)
through which you can report bugs and suggest enhancements.

The [API documentation](../api-docs/tectonic/) for Tectonic’s Rust frontend is
available at this website.


## Building Tectonic

Being a Rust program, Tectonic is build with that language’s standard
[cargo](http://doc.crates.io/) tool. However, various additional tools and
libraries are needed due to Tectonic’s aforementioned historical baggage.
Building Tectonic requires:

- The [Rust](https://www.rust-lang.org/) compiler and its
  [Cargo](https://crates.io/) package manager. These are easily installed
  through [rustup.rs](https://www.rustup.rs).
- C and C++ compilers.
- [pkg-config](https://www.freedesktop.org/wiki/Software/pkg-config/).
- For the time being, the following system libraries. On Macs these can all be
  installed with [Homebrew](http://brew.sh), but `harfbuzz` needs to have the
  `--with-graphite2` option enabled. On Linux machines they should be
  installable with your system package manager.
  - freetype2
  - graphite2
  - harfbuzz
  - ICU
  - libpng
  - zlib
- On Linux only:
  - fontconfig

Once you have these, you should be able to build the executable just by
running `cargo build` in the usual way.


## Testing Your Build

The `cargo test` command will run a small test suite, including the classic
TeX “TRIP” test. Additional tests are most welcome!
