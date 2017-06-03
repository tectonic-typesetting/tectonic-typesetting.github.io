---
layout: default
title: Installing Tectonic
---

There are several options for installing Tectonic. The best choice depends on
your computing environment.

- [Pre-built binary packages](#pre-built-binary-packages)
  - Only supported for Arch Linux at the moment
- [The `cargo install` method](#the-cargo-install-method)
  - Easiest if you already have C++ and Rust development tools installed
  - Currently the only method available for Windows users
- [The Anaconda method](#the-anaconda-method)
  - Reliable and cross-platform

If unsure, try [the Anaconda method](#the-anaconda-method). It involves a few
steps in the command line and a few downloads, but it is straightforward and
reliable.

<p class="bs-callout bs-callout-warning">Suggestions for additional
installation methods are welcomed! We are happy to provide other installers
but are not sure what the community needs. Please express your preferences <a
href="https://github.com/tectonic-typesetting/tectonic-typesetting.github.io/issues/1">on
GitHub</a>.</p>

<p class="bs-callout bs-callout-warning">If any of these instructions don’t
work for you or can be clarified, please <a
href="https://github.com/tectonic-typesetting/tectonic-typesetting.github.io/issues/">file
an issue</a> on GitHub.</p>


# Pre-built binary packages

These are specific to your operating system. We only provide a few right now.
In fact, just one. For now!

## Arch Linux:

There is a `tectonic` package in the
[AUR](https://aur.archlinux.org/packages/tectonic/).
Follow
[The instructions on the Arch Wiki](https://wiki.archlinux.org/index.php/Arch_User_Repository#Installing_packages)
to download and install it.

First, make sure you have the
[prerequisites](https://wiki.archlinux.org/index.php/Arch_User_Repository#Prerequisites)
installed.
Download the build files using
```
git clone https://aur.archlinux.org/tectonic.git
```
It is good practice to carefully check the `PKGBUILD`
and any `.install` files for malicious commands.
Then install the package and any dependencies
by running `makepkg` in the package directory
```
cd tectonic
makepkg -si
```

# The `cargo install` method

If your system has C++ and Rust compilers installed, you can install Tectonic
using Rust’s packaging tool, [cargo](http://doc.crates.io/index.html).
Make sure that Rust's `bin` folder (`$HOME/.cargo/bin` by default) is in
your `$PATH`.
Tectonic currently requires various system support libraries to be installed,
so you must do some setup before attempting the installation. The various
steps are broken out by operating system below.

## Debian and Ubuntu Linux:

Ensure that the requisite packages are installed with the following command:

```
sudo apt-get install libfontconfig1-dev libgraphite2-dev libharfbuzz-dev zlib1g-dev
```

Once that is done, the following should be sufficient to download and install
the latest Tectonic release:

```
cargo install tectonic
```

You can then run Tectonic with:

```
tectonic
```

## RHEL, CentOS, or Fedora Linux:

Ensure that the requisite packages are installed with the following command:

```
sudo dnf install fontconfig-devel harfbuzz-devel libicu-devel openssl-devel zlib-devel
```

Once that is done, the following should be sufficient to download and install
the latest Tectonic release:

```
cargo install tectonic
```

You can then run Tectonic with:

```
tectonic
```

## MacOS / OS X with Homebrew:

The recommended way to install the required dependencies is with
[Homebrew](http://brew.sh). The following commands will install the required
libraries; please note that an unusual argument is needed for `harfbuzz`:

```
brew install freetype graphite2 icu4c libpng openssl pkg-config zlib
brew install harfbuzz --with-graphite2
```

The `cargo` invocation is then as normal, but requires some auxiliary
environment variables as well:

```
export DEP_OPENSSL_INCLUDE=$(brew --prefix openssl)/include
export PKG_CONFIG_PATH=/usr/local/opt/icu4c/lib/pkgconfig
cargo install tectonic
```

You can then run Tectonic with:

```
tectonic
```

## Windows:

It *may* be possible to install Tectonic using the Ubuntu Linux instructions
above if you have enabled the *Windows Subsystem for Linux*. Please
[file a GitHub issue on this website](https://github.com/tectonic-typesetting/tectonic-typesetting.github.io/issues)
with instructions or a correction if you attempt this!

# The Anaconda method

If the other installation methods do not or cannot work for you, another
reliable installation method is based on
[Continuum Analytics](https://www.continuum.io/)’ Anaconda Python framework,
even though nothing in Tectonic uses Python.

This method works for Linux and MacOS computers.

## If you already have Anaconda Python installed:

The support libraries that we use are only provided through
[conda-forge](http://conda-forge.github.io/), a community-led project that
emulates and updates the official Anaconda system. To use Tectonic you must
start using conda-forge packages. *The packages from conda-forge will replace
nearly all of the ones from a stock Anaconda installation, but that’s OK.* The
replacement packages aim to be drop-in replacements for the standard
distribution.

If you are already using conda-forge, you don’t need to change anything.
Otherwise, run this command to enable conda-forge in your installation:

```
conda config --add channels conda-forge
```

The pre-compiled Tectonic installation is distributed through a separate
“channel” that provides the necessary dependencies. To complete the
installation, run these commands:

```
conda config --add channels pkgw-forge
conda install tectonic
tectonic --help # test that the program works
```

## If you need to install both Tectonic and Anaconda Python:

We recommend that you use Continuum’s “Miniconda” installer to get set up
quickly. First, install Miniconda
[according to these official instructions](https://conda.io/docs/install/quick.html).

Once Miniconda is installed you may need to open a new terminal in order for
its changes to take effect. If all went well, the command `conda` will now be
available in your terminal. Proceed using the instructions given in the
previous section.
