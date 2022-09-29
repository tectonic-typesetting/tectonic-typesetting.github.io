// This file STRONGLY derived from `www/rustup.js` in
// https://github.com/rust-lang/rustup/, as of 2022 Sep 28.
//
// Its copyright owners are Diggory Blake, the Mozilla Corporation, and Rustup
// contributors.
//
// Its license terms are:
//
// Licensed under either of
//
//   Apache License, Version 2.0, (LICENSE-APACHE or https://www.apache.org/licenses/LICENSE-2.0)
//   MIT license (LICENSE-MIT or https://opensource.org/licenses/MIT)
//
// at your option.

var platforms = ["unknown", "win64", "unix"];

function detect_platform() {
    "use strict";

    var os = "unknown";

    if (navigator.platform == "Linux x86_64") { os = "unix"; }
    if (navigator.platform == "Linux i686") { os = "unix"; }
    if (navigator.platform == "Linux i686 on x86_64") { os = "unix"; }
    if (navigator.platform == "Linux aarch64") { os = "unix"; }
    if (navigator.platform == "Linux armv6l") { os = "unix"; }
    if (navigator.platform == "Linux armv7l") { os = "unix"; }
    if (navigator.platform == "Linux armv8l") { os = "unix"; }
    if (navigator.platform == "Linux ppc64") { os = "unix"; }
    if (navigator.platform == "Linux mips") { os = "unix"; }
    if (navigator.platform == "Linux mips64") { os = "unix"; }
    if (navigator.platform == "Mac") { os = "unix"; }
    if (navigator.platform == "Win32") { os = "unknown"; } // was "win32"; :-(
    if (navigator.platform == "Win64" ||
        navigator.userAgent.indexOf("WOW64") != -1 ||
        navigator.userAgent.indexOf("Win64") != -1) { os = "win64"; }
    if (navigator.platform == "FreeBSD x86_64") { os = "unix"; }
    if (navigator.platform == "FreeBSD amd64") { os = "unix"; }
    if (navigator.platform == "NetBSD x86_64") { os = "unix"; }
    if (navigator.platform == "NetBSD amd64") { os = "unix"; }
    if (navigator.platform == "SunOS i86pc") { os = "unix"; }

    // I wish I knew by now, but I don't. Try harder.
    if (os == "unknown") {
        if (navigator.appVersion.indexOf("Win") != -1) { os = "unknown"; } // was "win32"; :-(
        if (navigator.appVersion.indexOf("Mac") != -1) { os = "unix"; }
        // rust-www/#692 - FreeBSD epiphany!
        if (navigator.appVersion.indexOf("FreeBSD") != -1) { os = "unix"; }
    }

    // Firefox Quantum likes to hide platform and appVersion but oscpu works
    if (navigator.oscpu) {
        if (navigator.oscpu.indexOf("Win32") != -1) { os = "unknown"; } // was "win32"; :-(
        if (navigator.oscpu.indexOf("Win64") != -1) { os = "win64"; }
        if (navigator.oscpu.indexOf("Mac") != -1) { os = "unix"; }
        if (navigator.oscpu.indexOf("Linux") != -1) { os = "unix"; }
        if (navigator.oscpu.indexOf("FreeBSD") != -1) { os = "unix"; }
        if (navigator.oscpu.indexOf("NetBSD") != -1) { os = "unix"; }
        if (navigator.oscpu.indexOf("SunOS") != -1) { os = "unix"; }
    }

    return os;
}

function vis(elem, value) {
    var possible = ["block", "inline", "none"];
    for (var i = 0; i < possible.length; i++) {
        if (possible[i] === value) {
            elem.classList.add("iui-display-" + possible[i]);
        } else {
            elem.classList.remove("iui-display-" + possible[i]);
        }
    }
}

function adjust_for_platform() {
    "use strict";

    var platform = detect_platform();

    platforms.forEach(function (platform_elem) {
        var platform_div = document.getElementById("platform-instructions-" + platform_elem);
        vis(platform_div, "none");
        if (platform == platform_elem) {
            vis(platform_div, "block");
        }
    });
}

function process_copy_button_click(platform) {
    try {
        var command_id = 'command-' + platform;
        var message_id = 'copy-status-message-' + platform;

        var command = document.getElementById(command_id).innerText;

        navigator.clipboard.writeText(command).then(() =>
            document.getElementById(message_id).style.opacity = '1');

        setTimeout(() => document.getElementById(message_id).style.opacity = '0', 3000);
    } catch (e) {
        console.log('Hit a snag when copying to clipboard: ', e);
    }
}

function handle_copy_button_click(e) {
    switch (e.id) {
        case 'copy-button-unix':
            process_copy_button_click('unix');
            break;
        case 'copy-button-win64':
            process_copy_button_click('win64');
            break;
        case 'copy-button-unknown':
            process_copy_button_click('unknown');
            break;
    }
}

function set_up_copy_button_clicks() {
    var buttons = document.querySelectorAll(".iui-copy-button");
    buttons.forEach(function (element) {
        element.addEventListener('click', function () {
            handle_copy_button_click(element);
        });
    })
}

(function () {
    adjust_for_platform();
    set_up_copy_button_clicks();
}());
