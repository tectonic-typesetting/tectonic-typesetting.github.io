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
resource, but we’ve also set up the
[Tectonic forum site](https://tectonic.newton.cx/) as a place for discussions
that are more specific to Tectonic: release announcements, ideas for new
features, and of course bugs and problems that might be Tectonic-specific. A
great way to start getting more involved in the Tectonic community is to
become an active participant on [the forum](https://tectonic.newton.cx/)!


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

Being a Rust program, Tectonic is built with that language’s standard
[cargo](https://doc.crates.io/) tool. However, various additional tools and
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
  - [graphite2](https://scripts.sil.org/cms/scripts/page.php?site_id=projects&item_id=graphite_home)
  - [libpng](http://www.libpng.org/)
  - [ICU](http://site.icu-project.org/)
  - [zlib](https://www.zlib.net/)

To build your own version of Tectonic, clone the repository to your local
machine, then follow
[the `cargo install` method for installing](install.html#the-cargo-install-method),
but use the command `cargo build` instead of `cargo install`, running it from
the cloned repository directory.

## Building under Windows

Obtaining the required libraries is a bit more cumbersome compared to other
platforms. the Windows build can use the vcpkg tool to achieve this.
Installing vcpkg and the Microsoft C++ Build Tools on your
system is required. For more info see
[github.com/microsoft/vcpkg](https://github.com/microsoft/vcpkg).  
Make sure your
vcpkg install set the Environment Variable `%VCPKG_ROOT%` correctly. If not, see [the
microsoft
documentation](https://docs.microsoft.com/en-US/previous-versions/office/developer/sharepoint-2010/ee537574(v=office.14))
for setting your system wide Environment Variables under Windows. In the example
the `Path` variable is modified, apply this for any variable name you need.

Install the libraries in your preferred terminal application. 

```
vcpkg install --triplet x64-windows-static\
    fontconfig\
    freetype\
    harfbuzz[icu,graphite2]
```

And finally build Tectonic.  
Using a unix-like terminal application under Windows, like the one msys2
provides, you can simply specify your Environment Variables in front of your
command.

```
TECTONIC_DEP_BACKEND=vcpkg\
    RUSTFLAGS="-Ctarget-feature=+crt-static"\
    cargo build --release
```

In Powershell you will need to set the Variables for the whole terminal session
(until the window is closed).

```
set TECTONIC_DEP_BACKEND vcpkg
set RUSTFLAGS "-Ctarget-feature=+crt-static"
cargo build --release
```

 Alternatively use the same method as described for `%VCPKG_ROOT%` to set them system wide.
 
 The produced executable, located in `tectonic\target\release\tectonic.exe`, is statically linked and does not depend and having vcpkg installed.

## Testing Your Build

The `cargo test` command will run a small test suite, including the classic
TeX “TRIP” test. Additional tests are most welcome!
