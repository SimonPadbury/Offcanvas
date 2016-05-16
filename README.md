#Offcanvas

*Version 2.0*

Offcanvas is an easy-to-use, touch enabled jQuery off-canvas sidebar plugin with multiple options for configuration. It should be compatible with any CSS framework. The animations are all performed by CSS3.

##Features

* Easy to use
* Touch enabled
* Small filesizes for JS (`offcanvas.min.js`: 1 KB) and CSS (`offcanvas.min.css`: 3 KB)
* SCSS project
* Six off-canvas position/animation configuration options
* Example HTML

```
<!doctype html>
<html>
  <head>
    ...
    <link href="path/to/offcanvas.css" rel="stylesheet" type="text/css" media="screen">
  </head>
  <body>

    <section id="offcanvas-sidebar"> ... </section>

    <section id="page-wrap"> ... </section>

    <script src="path/to/jquery.js"></script>
    <script src="path/to/offcanvas.js"></script>
  </body>
</html>
```

##Behaviour

The Offcanvas JS injects a [http://www.transformicons.com/](Transformicon)-style animated "hamburger" navicon, a semi-transparent dismiss overlay, and any Offcanvas child menu links and child menu back links as required.

The navicon is CSS `position:fixed` to the top-right or top-left corner of the window, depending on whether you configure a left or right off-canvas sidebar.

The Offcanvas sidebar is set to be always available wherever your visitor activates it, from any scroll position on the webpage. And it resets to its starting scroll/ first-level menu state whenever a visitor dismisses it.

The dismiss overlay is raised (from being hidden at `z-index: -1`) to cover the webpage during Offcanvas sidebar exposure. Click or tap this overlay (or the navicon) to dismiss it sidebar and hide the overlay again.

Changing the window-width (e.g. phone or tablet orientation change) will also dismiss the sidebar (and hide the overlay).

##Setup

You can use the example HTML above to get you going.

All you need to do next is add your list of links. Be sure to put any 2nd level (child) lists within their parent `<li>` in the usual way.

```
<h4>Menu 1</h4>
<ul>
  <li><a href="">Link 1.1</a>
    <ul>
      <li><a href="">Link 1.1.1</a></li>
      <li><a href="">Link 1.1.2</a></li>
      <li><a href="">Link 1.1.3</a></li>
      <li><a href="">Link 1.1.4</a></li>
    </ul>
  </li>
  <li><a href="">Link 1.2</a></li>
  <li><a href="">Link 1.3</a></li>
  <li><a href="">Link 1.4</a></li>
</ul>
```
Note: all your other webpage content must be placed within a block element with `id="page-wrap"`.

##Tap or click

The Offcanvas JS will respond either to taps (using `touchstart()`) or clicks (`using click()`) depending on whichever pointing device your visitor uses.

##Child menus

Offcanvas can display 2nd level (child) menus. You simply need to place an unordered list within the parent `<li>` and Offcanvas handle everything.

The jQuery script will insert a `<span>` containing "»" into the parent list item – visitors clicking this will see the Offvanvas sidebar slide to the left, revealing the child menu. And above the child menu the script will insert a `<span>` containing "« Back" – visitors clicking this will see the Offcanvas slide to the right, revealing the parent menu again.

##Responsive or not – you choose

No media queries have been set for Offcanvas. This is deliberate. It is up to you to set media queries as you choose (or not). You may choose to have Offcanvas to display and operate only for phones, or for tablets and phones, or for any size screen.

Simply set the Offcanvas components to display: none for the screen screen sizes where you don't require it, as in the following example.

```
@media (min-width: 768px) {
  #offcanvas-navicon,
  #offcanvas-overlay,
  #offcanvas-sidebar {
    display: none
  }
}
```

##6 sidebar options

Offcanvas is configured for one sidebar instance. But that sidebar could be any one of 6 options.

Simply include one of `@mixin`s from `scss/import/_options.scss` in your body style rule, as in the following example.

```
body {
  @include offcanvas-under-left;
  ...
}
```

* `@include offcanvas-over-left` – the off-canvas sidebar slides in from the left on a layer over the webpage content (which must be wrapped in a block with `id="page-wrap"`).
* `@include offcanvas-over-right` – the off-canvas sidebar slides in from the right on a layer over the webpage content.
* `@include offcanvas-under-left` – the webpage content slides right revealing the off-canvas sidebar to the left.
* `@include offcanvas-under-right` – the webpage content slides left revealing the off-canvas sidebar to the right.
* `@include offcanvas-push-left` – the off-canvas sidebar slides in from the left, and the webpage content slides right to accommodate it.
* `@include offcanvas-push-right` – the off-canvas sidebar slides in from the right, and the webpage content slides left to accommodate it.

All these movements are performed by CSS3 transforms.

##SCSS files included

See `scss/`.