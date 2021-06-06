---
layout: default
title: Installing Tectonic
---

One of the big advantages that Tectonic offers compared to the traditional TeX
stack is that all of Tectonic’s functionality is delivered in a single
executable file — not the usual tree of thousands of interlocking data files and
binary tools.

The Tectonic Book provides [detailed instructions][book-install] for installing
the Tectonic executable. The short version is:

[book-install]: /book/latest/installation/

- [Click here][gh-releases] to find the latest released binaries on GitHub, and
  [read the book][direct-download] for guidance if you’re not sure what to do
  with those files
- Many package managers provide Tectonic, often in a package simply named
  `tectonic` — see [the book][book-packages] for details
- If you want or need to, you can [compile Tectonic yourself][compile] using the
  Rust package manager [Cargo]

[gh-releases]: https://github.com/tectonic-typesetting/tectonic/releases/tag/tectonic%40{{ site.latest }}
[book-packages]: /book/latest/installation/#pre-built-binary-packages
[compile]: /book/latest/howto/build-tectonic/
[Cargo]: https://doc.rust-lang.org/cargo/

The [GitHub download][direct-download] method should cover most use cases, but
if you want better integration with your operating system or computing
environment, [packaged versions][book-packages] might make more sense. There
should be no need to compile Tectonic yourself unless you want to, or you’re
hoping to run it on an unusual platform.

[direct-download]: /book/latest/installation/#direct-download
