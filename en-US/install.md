---
layout: default
title: Installing Tectonic
---

One of the big advantages that Tectonic offers compared to the traditional TeX
stack is that all of Tectonic’s functionality is delivered in a single
executable file — not the usual tree of thousands of interlocking data files and
binary tools.

{% include installer-ui.html %}

There are many different ways that you can install Tectonic, and the Book
provides [all of the details][book-install]. In summary, the major options are:

[book-install]: /book/latest/installation/

- On most systems, you can copy and paste a command into your terminal that will
  download and unpack Tectonic for you
- You can also [find the latest released binaries on GitHub][gh-releases], download
  the appropriate file for your system, and unpack it yourself
- Many package managers provide Tectonic, often in a package simply named
  `tectonic` — the book [has a list][book-packages]
- If you want or need to, you can [compile Tectonic yourself][compile] using the
  Rust package manager [Cargo]

[gh-releases]: https://github.com/tectonic-typesetting/tectonic/releases/tag/tectonic%40{{ site.latest }}
[book-packages]: /book/latest/installation/#pre-built-binary-packages
[compile]: /book/latest/howto/build-tectonic/
[Cargo]: https://doc.rust-lang.org/cargo/

The copy/paste method should cover most use cases, but if you want better
integration with your operating system or computing environment, [packaged
versions][book-packages] might make more sense. There should be no need to
compile Tectonic yourself unless you want to, or you’re hoping to run it on an
unusual platform.
