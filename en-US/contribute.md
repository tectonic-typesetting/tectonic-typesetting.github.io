---
layout: default
title: Contributing to the Tectonic Project
---

Tectonic is a project that is actively growing and evolving. We’d love for you
to contribute!

When we write “contribute,” we’re not just talking about modifying Tectonic’s
source code. We mean all sorts of things that help the project: answering
questions from new users, sharing ideas, writing documentation, helping make
the website more awesome, and more. The only restriction is that you must
abide by Tectonic’s
[Code of Conduct](https://github.com/tectonic-typesetting/tectonic/blob/master/CODE_OF_CONDUCT.md).
In summary, it says that you should not act like a jerk. Good-faith efforts to
follow the letter and spirit of the Code of Conduct are *required* of all
Tectonic community members.


# Participating on the forums

The TeX/LaTeX ecosystem is powerful but complex, which means that even
longtime users will run into problems that they can’t solve on their own. The
[TeX/LaTeX StackExchange](https://tex.stackexchange.com/) site is a great
resource, but we’ve also set up a
[Tectonic discussion forum site][forum] on GitHub as a place for discussions
that are more specific to Tectonic: release announcements, ideas for new
features, and of course bugs and problems that might be Tectonic-specific. A
great way to start getting more involved in the Tectonic community is to
become an active participant on [the forum][forum]!

[forum]: https://github.com/tectonic-typesetting/tectonic/discussions/


# Working on the Source Code

It’s certainly true, though, that there’s a lot of work to be done on the
Tectonic source code! Here’s some information about the code and how to work
with it.

Due to its historical baggage, Tectonic is written in a combination of C, C++,
and [Rust](https://www.rust-lang.org/). The aim is to eventually transition it
to be fully written in Rust, but that is going to take a *long* time.

We recognize that Rust is a new language that not many people are familiar
with, but it is technically *excellent*. It would have been *massively* more
challenging implement Tectonic’s web-based bundle functionality in a language
like C. By porting more and more of Tectonic to Rust, we hope to eventually be
able to deploy it over more of the target systems that Rust supports, like
[WebAssembly](https://webassembly.org/).

Tectonic is developed in the open
[on GitHub](https://www.github.com/tectonic-typesetting/tectonic/). This
includes
[its issue tracker](https://www.github.com/tectonic-typesetting/tectonic/issues/)
through which you can report bugs and suggest enhancements.


## Rust API documentation

The API of the Tectonic Rust crate is documented on
[the nifty docs.rs website](https://docs.rs/tectonic). Please note, however,
that this documentation has not been a focus of effort and is *very* spotty.
Improvements are of course welcome!


## Building Tectonic

See [The Tectonic Book: How to Build Tectonic][book-building] for the latest
guidance on how to build Tectonic.

[book-building]: /book/latest/howto/build-tectonic/
