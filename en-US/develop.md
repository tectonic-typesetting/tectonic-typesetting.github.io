---
layout: default
title: Developing Tectonic
---

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

An important part of this open development process is Tectonic’s
[Code of Conduct](https://github.com/tectonic-typesetting/tectonic/blob/master/CODE_OF_CONDUCT.md).
In summary, it says that you should not act like a jerk. Good-faith efforts to
follow the letter and spirit of the Code of Conduct are *required* of all
Tectonic community members.

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
- The following system libraries, which can be installed through whichever means are
  standard for your OS:
  - [fontconfig](https://www.freedesktop.org/wiki/Software/fontconfig/) (Linux only)
  - [freetype2](https://www.freetype.org/)
  - [harfbuzz](https://www.freedesktop.org/wiki/Software/HarfBuzz/)
  - [graphite2](http://graphite.sil.org/)
  - [libpng](http://www.libpng.org/)
  - [ICU](http://site.icu-project.org/)
  - [zlib](https://www.zlib.net/)

To build your own version of Tectonic, clone the repository to your local
machine, then follow
[the `cargo install` method for installing](install.html#the-cargo-install-method),
but use the command `cargo build` instead of `cargo install`, running it from
the cloned repository directory.


## Testing Your Build

The `cargo test` command will run a small test suite, including the classic
TeX “TRIP” test. Additional tests are most welcome!
