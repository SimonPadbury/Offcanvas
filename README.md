#Offcanvas – a jQuery plugin with multiple sidebar options

###Version 1.1

Here is a simple off-canvas sidebar with multiple options for configuration.

_Offcanvas_ should be compatible with any CSS framework (e.g. Bootstrap, Foundation). If it isn't, then probably the only thing you will have to do is rename the _Offcanvas_ CSS classes.

###jQuery required 

In `example.html` I have linked to the Google CDN but you can use other jQuery libraries, local (to your site deployment) or hosted.

###Example HTML

```
<!doctype html>
<html lang="en">
    <head>
        <title>Offcanvas</title>
        <link href="css/offcanvas.min.css" rel="stylesheet" type="text/css" media="all">
    </head>
    <body>
        <div id="page-wrapper" class="offcanvas-push-right">
            <div class="offcanvas-navicon"><span></span></div>
            <div class="offcanvas-overlay"></div>
            <section class="offcanvas-sidebar">
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
            </section>
            <section class="main-section">
                    <!-- Your entire page goes in here -->
            </section>
        </div><!-- /.page-wrapper -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="js/offcanvas.js"></script>
    </body>
</html>	
```

###Behaviour

The hamburger navicon is CSS position:fixed to the top-right or top-left corner of the window, depending on whether you configure a left or right off-canvas sidebar.

The _Offcanvas_ is configured to always be available wherever your visitor is in his/her scroll down the webpage. This is achieved initially by CSS position:fixed – but also by a rapid scroll reset of the off-canvas sidebar that occurs after a visitor has dismissed it. Therefore if the visitor doesn't choose to click a link in the off-canvas sidebar and dismisses it, next time they open it on the same webpage, they will see that it is at its scroll-top position.

A semi-transparent overlay covers the main-section during _Offcanvas_ exposure. Either his overlay or the navicon can be clicked to dismiss it.

Also, changing the window-width dismisses the _Offcanvas_ (whether browser window resize on a desktop or laptop computer, or reorientation of a tablet or phone portrait <=> landscape).

###NEW in version 1.1: Child menus

_Offcanvas_ can now do "child menus" – you simply place an unordered list within the parent LI item and _Offcanvas_ handle everything. The jQuery script will insert a <span> containing "»" into the parent list item – visitors clicking this will see _Offvanvas_ slide to the left, revealing the child menu. And above the child menu the script will insert a <span> containing "« Back" – visitors clicking this will see _Offcanvas_ slide to the right again, revealing the parent menu.

###Responsive or not; you choose

No media queries have been set for _Offcanvas_. This is deliberate. It is up to you to set media queries as you choose (or not). You may choose to have _Offcanvas_ to display and operate only for phones, or for tablets and phones, or for any size screen.

This is how: simply set the _Offcanvas components_ to "display: none" for the screen screen sizes where you don't require it. For example:

```
@media (min-width: 768px) {
    .offcanvas-navicon;
    .offcanvas-overlay;
    .offcanvas-sidebar {
        display: none
    }
}
```

###6 sidebar options

_Offcanvas_ is configured for one sidebar instance. But that sidebar could be any one of 6 options – for which you assign the appropriate class to the `#page-wrapper` DIV. Simply swap out the class in `example.html` for the class you prefer.

* `offcanvas-over-left` – the off-canvas sidebar slides in from the left on a layer over the main-section.
* `offcanvas-over-right` – the off-canvas sidebar slides in from the right on a layer over the main-section.
* `offcanvas-under-left` – the main-section slides right revealing the off-canvas sidebar to the left.
* `offcanvas-under-right` – the main-section slides left revealing the off-canvas sidebar to the right.
* `offcanvas-push-left` – the off-canvas sidebar slides in from the left, and the main-section moves right to accommodate it.
* `offcanvas-push-right` – the off-canvas sidebar slides in from the right, and the main-section moves left to accommodate it.

All these movements are done by CSS3 transitions. In each case the movement is 15.625rem (250px).

###SCSS file included

A SCSS file is included: `scss/offcanvas.scss`. In fact the CSS files (`css/offcanvas.css` and `css/offcanvas.min.css`) were generated from the SCSS file.
