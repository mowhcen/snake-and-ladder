let mix = require("laravel-mix");

mix.autoload({
    jquery: ["$", "window.jQuery"],
});

mix.js("src/js/main.js", "./assets/js/bundle.js");
mix.sass("src/scss/main.scss", "./assets/css/style.css");
mix.browserSync({
    server: "public",
    watch: true,
    files: ["./public/**/*.*"],
    notify: false,
}).setPublicPath("public");
