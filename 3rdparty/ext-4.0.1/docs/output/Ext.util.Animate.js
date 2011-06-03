Ext.data.JsonP.Ext_util_Animate({
  "tagname": "class",
  "name": "Ext.util.Animate",
  "doc": "<p>This animation class is a mixin.</p>\n\n<p>Ext.util.Animate provides an API for the creation of animated transitions of properties and styles.<br/>\nThis class is used as a mixin and currently applied to <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a>, <a href=\"#/api/Ext.CompositeElement\" rel=\"Ext.CompositeElement\" class=\"docClass\">Ext.CompositeElement</a>,\n<a href=\"#/api/Ext.draw.Sprite\" rel=\"Ext.draw.Sprite\" class=\"docClass\">Ext.draw.Sprite</a>, <a href=\"#/api/Ext.draw.CompositeSprite\" rel=\"Ext.draw.CompositeSprite\" class=\"docClass\">Ext.draw.CompositeSprite</a>, and <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.  Note that Components\nhave a limited subset of what attributes can be animated such as top, left, x, y, height, width, and\nopacity (color, paddings, and margins can not be animated).</p>\n\n<h2>Animation Basics</h2>\n\n<p>All animations require three things - <code>easing</code>, <code>duration</code>, and <code>to</code> (the final end value for each property)\nyou wish to animate. Easing and duration are defaulted values specified below.\nEasing describes how the intermediate values used during a transition will be calculated.\n<a href=\"#/api/Ext.fx.Anim-cfg-easing\" rel=\"Ext.fx.Anim-cfg-easing\" class=\"docClass\">Easing</a> allows for a transition to change speed over its duration.\nYou may use the defaults for easing and duration, but you must always set a\n<a href=\"#/api/Ext.fx.Anim-cfg-to\" rel=\"Ext.fx.Anim-cfg-to\" class=\"docClass\">to</a> property which is the end value for all animations.</p>\n\n<p>Popular element 'to' configurations are:</p>\n\n<ul>\n<li>opacity</li>\n<li>x</li>\n<li>y</li>\n<li>color</li>\n<li>height</li>\n<li>width</li>\n</ul>\n\n\n<p>Popular sprite 'to' configurations are:</p>\n\n<ul>\n<li>translation</li>\n<li>path</li>\n<li>scale</li>\n<li>stroke</li>\n<li>rotation</li>\n</ul>\n\n\n<p>The default duration for animations is 250 (which is a 1/4 of a second).  Duration is denoted in\nmilliseconds.  Therefore 1 second is 1000, 1 minute would be 60000, and so on. The default easing curve\nused for all animations is 'ease'.  Popular easing functions are included and can be found in <a href=\"#/api/Ext.fx.Anim-cfg-easing\" rel=\"Ext.fx.Anim-cfg-easing\" class=\"docClass\">Easing</a>.</p>\n\n<p>For example, a simple animation to fade out an element with a default easing and duration:</p>\n\n<pre><code>var p1 = Ext.get('myElementId');\n\np1.animate({\n    to: {\n        opacity: 0\n    }\n});\n</code></pre>\n\n<p>To make this animation fade out in a tenth of a second:</p>\n\n<pre><code>var p1 = Ext.get('myElementId');\n\np1.animate({\n   duration: 100,\n    to: {\n        opacity: 0\n    }\n});\n</code></pre>\n\n<h2>Animation Queues</h2>\n\n<p>By default all animations are added to a queue which allows for animation via a chain-style API.\nFor example, the following code will queue 4 animations which occur sequentially (one right after the other):</p>\n\n<pre><code>p1.animate({\n    to: {\n        x: 500\n    }\n}).animate({\n    to: {\n        y: 150\n    }\n}).animate({\n    to: {\n        backgroundColor: '#f00'  //red\n    }\n}).animate({\n    to: {\n        opacity: 0\n    }\n});\n</code></pre>\n\n<p>You can change this behavior by calling the <a href=\"#/api/Ext.util.Animate-method-syncFx\" rel=\"Ext.util.Animate-method-syncFx\" class=\"docClass\">syncFx</a> method and all\nsubsequent animations for the specified target will be run concurrently (at the same time).</p>\n\n<pre><code>p1.syncFx();  //this will make all animations run at the same time\n\np1.animate({\n    to: {\n        x: 500\n    }\n}).animate({\n    to: {\n        y: 150\n    }\n}).animate({\n    to: {\n        backgroundColor: '#f00'  //red\n    }\n}).animate({\n    to: {\n        opacity: 0\n    }\n});\n</code></pre>\n\n<p>This works the same as:</p>\n\n<pre><code>p1.animate({\n    to: {\n        x: 500,\n        y: 150,\n        backgroundColor: '#f00'  //red\n        opacity: 0\n    }\n});\n</code></pre>\n\n<p>The <a href=\"#/api/Ext.util.Animate-method-stopAnimation\" rel=\"Ext.util.Animate-method-stopAnimation\" class=\"docClass\">stopAnimation</a> method can be used to stop any\ncurrently running animations and clear any queued animations.</p>\n\n<h2>Animation Keyframes</h2>\n\n<p>You can also set up complex animations with <a href=\"#/api/Ext.fx.Anim--keyframe\" rel=\"Ext.fx.Anim--keyframe\" class=\"docClass\">keyframe</a> which follows the\nCSS3 Animation configuration pattern. Note rotation, translation, and scaling can only be done for sprites.\nThe previous example can be written with the following syntax:</p>\n\n<pre><code>p1.animate({\n    duration: 1000,  //one second total\n    keyframes: {\n        25: {     //from 0 to 250ms (25%)\n            x: 0\n        },\n        50: {   //from 250ms to 500ms (50%)\n            y: 0\n        },\n        75: {  //from 500ms to 750ms (75%)\n            backgroundColor: '#f00'  //red\n        },\n        100: {  //from 750ms to 1sec\n            opacity: 0\n        }\n    }\n});\n</code></pre>\n\n<h2>Animation Events</h2>\n\n<p>Each animation you create has events for <a href=\"#/api/Ext.fx.Anim--beforeanimation\" rel=\"Ext.fx.Anim--beforeanimation\" class=\"docClass\">beforeanimation</a>,\n<a href=\"#/api/Ext.fx.Anim-event-afteranimate\" rel=\"Ext.fx.Anim-event-afteranimate\" class=\"docClass\">afteranimate</a>, and <a href=\"#/api/Ext.fx.Anim-event-lastframe\" rel=\"Ext.fx.Anim-event-lastframe\" class=\"docClass\">lastframe</a>.<br/>\nKeyframed animations adds an additional <a href=\"#/api/Ext.fx.Animator-event-keyframe\" rel=\"Ext.fx.Animator-event-keyframe\" class=\"docClass\">keyframe</a> event which\nfires for each keyframe in your animation.</p>\n\n<p>All animations support the <a href=\"#/api/Ext.util.Observable-cfg-listeners\" rel=\"Ext.util.Observable-cfg-listeners\" class=\"docClass\">listeners</a> configuration to attact functions to these events.</p>\n\n<pre><code>startAnimate: function() {\n    var p1 = Ext.get('myElementId');\n    p1.animate({\n       duration: 100,\n        to: {\n            opacity: 0\n        },\n        listeners: {\n            beforeanimate:  function() {\n                // Execute my custom method before the animation\n                this.myBeforeAnimateFn();\n            },\n            afteranimate: function() {\n                // Execute my custom method after the animation\n                this.myAfterAnimateFn();\n            },\n            scope: this\n    });\n},\nmyBeforeAnimateFn: function() {\n  // My custom logic\n},\nmyAfterAnimateFn: function() {\n  // My custom logic\n}\n</code></pre>\n\n<p>Due to the fact that animations run asynchronously, you can determine if an animation is currently\nrunning on any target by using the <a href=\"#/api/Ext.util.Animate-method-getActiveAnimation\" rel=\"Ext.util.Animate-method-getActiveAnimation\" class=\"docClass\">getActiveAnimation</a>\nmethod.  This method will return false if there are no active animations or return the currently\nrunning <a href=\"#/api/Ext.fx.Anim\" rel=\"Ext.fx.Anim\" class=\"docClass\">Ext.fx.Anim</a> instance.</p>\n\n<p>In this example, we're going to wait for the current animation to finish, then stop any other\nqueued animations before we fade our element's opacity to 0:</p>\n\n<pre><code>var curAnim = p1.getActiveAnimation();\nif (curAnim) {\n    curAnim.on('afteranimate', function() {\n        p1.stopAnimation();\n        p1.animate({\n            to: {\n                opacity: 0\n            }\n        });\n    });\n}\n</code></pre>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": "Jamie Avins <jamie@sencha.com>",
  "singleton": false,
  "private": false,
  "cfg": [

  ],
  "method": [
    {
      "tagname": "method",
      "name": "animate",
      "member": "Ext.util.Animate",
      "doc": "<p>Perform custom animation on this object.<p>\n<p>This method is applicable to both the the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a> class and the <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Element</a> class.\nIt performs animated transitions of certain properties of this object over a specified timeline.</p>\n<p>The sole parameter is an object which specifies start property values, end property values, and properties which\ndescribe the timeline. Of the properties listed below, only <b><code>to</code></b> is mandatory.</p>\n<p>Properties include<ul>\n<li><code>from</code> <div class=\"sub-desc\">An object which specifies start values for the properties being animated.\nIf not supplied, properties are animated from current settings. The actual properties which may be animated depend upon\nths object being animated. See the sections below on Element and Component animation.<div></li>\n<li><code>to</code> <div class=\"sub-desc\">An object which specifies end values for the properties being animated.</div></li>\n<li><code>duration</code><div class=\"sub-desc\">The duration <b>in milliseconds</b> for which the animation will run.</div></li>\n<li><code>easing</code> <div class=\"sub-desc\">A string value describing an easing type to modify the rate of change from the default linear to non-linear. Values may be one of:<code><ul>\n<li>ease</li>\n<li>easeIn</li>\n<li>easeOut</li>\n<li>easeInOut</li>\n<li>backIn</li>\n<li>backOut</li>\n<li>elasticIn</li>\n<li>elasticOut</li>\n<li>bounceIn</li>\n<li>bounceOut</li>\n</ul></code></div></li>\n<li><code>keyframes</code> <div class=\"sub-desc\">This is an object which describes the state of animated properties at certain points along the timeline.\nit is an object containing properties who's names are the percentage along the timeline being described and who's values specify the animation state at that point.</div></li>\n<li><code>listeners</code> <div class=\"sub-desc\">This is a standard <a href=\"#/api/Ext.util.Observable-cfg-listeners\" rel=\"Ext.util.Observable-cfg-listeners\" class=\"docClass\">listeners</a> configuration object which may be used\nto inject behaviour at either the <code>beforeanimate</code> event or the <code>afteranimate</code> event.</div></li>\n</ul></p>\n<h3>Animating an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Element</a></h3>\nWhen animating an Element, the following properties may be specified in <code>from</code>, <code>to</code>, and <code>keyframe</code> objects:<ul>\n<li><code>x</code> <div class=\"sub-desc\">The page X position in pixels.</div></li>\n<li><code>y</code> <div class=\"sub-desc\">The page Y position in pixels</div></li>\n<li><code>left</code> <div class=\"sub-desc\">The element's CSS <code>left</code> value. Units must be supplied.</div></li>\n<li><code>top</code> <div class=\"sub-desc\">The element's CSS <code>top</code> value. Units must be supplied.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The element's CSS <code>width</code> value. Units must be supplied.</div></li>\n<li><code>height</code> <div class=\"sub-desc\">The element's CSS <code>height</code> value. Units must be supplied.</div></li>\n<li><code>scrollLeft</code> <div class=\"sub-desc\">The element's <code>scrollLeft</code> value.</div></li>\n<li><code>scrollTop</code> <div class=\"sub-desc\">The element's <code>scrollLeft</code> value.</div></li>\n<li><code>opacity</code> <div class=\"sub-desc\">The element's <code>opacity</code> value. This must be a value between <code>0</code> and <code>1</code>.</div></li>\n</ul>\n<p><b>Be aware than animating an Element which is being used by an <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> Component without in some way informing the Component about the changed element state\nwill result in incorrect Component behaviour. This is because the Component will be using the old state of the element. To avoid this problem, it is now possible to\ndirectly animate certain properties of Components.</b></p>\n<h3>Animating a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a></h3>\nWhen animating an Element, the following properties may be specified in <code>from</code>, <code>to</code>, and <code>keyframe</code> objects:<ul>\n<li><code>x</code> <div class=\"sub-desc\">The Component's page X position in pixels.</div></li>\n<li><code>y</code> <div class=\"sub-desc\">The Component's page Y position in pixels</div></li>\n<li><code>left</code> <div class=\"sub-desc\">The Component's <code>left</code> value in pixels.</div></li>\n<li><code>top</code> <div class=\"sub-desc\">The Component's <code>top</code> value in pixels.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The Component's <code>width</code> value in pixels.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The Component's <code>width</code> value in pixels.</div></li>\n<li><code>dynamic</code> <div class=\"sub-desc\">Specify as true to update the Component's layout (if it is a Container) at every frame\nof the animation. <i>Use sparingly as laying out on every intermediate size change is an expensive operation</i>.</div></li>\n</ul>\n<p>For example, to animate a Window to a new size, ensuring that its internal layout, and any shadow is correct:</p>\n<pre><code>myWindow = Ext.create('Ext.window.Window', {\n    title: 'Test Component animation',\n    width: 500,\n    height: 300,\n    layout: {\n        type: 'hbox',\n        align: 'stretch'\n    },\n    items: [{\n        title: 'Left: 33%',\n        margins: '5 0 5 5',\n        flex: 1\n    }, {\n        title: 'Left: 66%',\n        margins: '5 5 5 5',\n        flex: 2\n    }]\n});\nmyWindow.show();\nmyWindow.header.el.on('click', function() {\n    myWindow.animate({\n        to: {\n            width: (myWindow.getWidth() == 500) ? 700 : 500,\n            height: (myWindow.getHeight() == 300) ? 400 : 300,\n        }\n    });\n});\n</code></pre>\n<p>For performance reasons, by default, the internal layout is only updated when the Window reaches its final <code>\"to\"</code> size. If dynamic updating of the Window's child\nComponents is required, then configure the animation with <code>dynamic: true</code> and the two child items will maintain their proportions during the animation.</p>\n\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>An object containing properties which describe the animation's start and end states, and the timeline of the animation.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Animate.js",
      "linenr": 207,
      "html_filename": "Animate.html",
      "href": "Animate.html#Ext-util-Animate-method-animate",
      "shortDoc": "Perform custom animation on this object.\nThis method is applicable to both the the Component class and the Element cl..."
    },
    {
      "tagname": "method",
      "name": "getActiveAnimation",
      "member": "Ext.util.Animate",
      "doc": "<p>Returns thq current animation if this object has any effects actively running or queued, else returns false.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Mixed",
        "doc": "<p>anim if element has active effects, else false</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Animate.js",
      "linenr": 377,
      "html_filename": "Animate.html",
      "href": "Animate.html#Ext-util-Animate-method-getActiveAnimation",
      "shortDoc": "<p>Returns thq current animation if this object has any effects actively running or queued, else returns false.</p>\n"
    },
    {
      "tagname": "method",
      "name": "hasActiveFx",
      "member": "Ext.util.Animate",
      "doc": "<p>@deprecated 4.0 Replaced by <a href=\"#/api/Ext.util.Animate-method-getActiveAnimation\" rel=\"Ext.util.Animate-method-getActiveAnimation\" class=\"docClass\">getActiveAnimation</a>\nReturns thq current animation if this object has any effects actively running or queued, else returns false.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Mixed",
        "doc": "<p>anim if element has active effects, else false</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Animate.js",
      "linenr": 369,
      "html_filename": "Animate.html",
      "href": "Animate.html#Ext-util-Animate-method-hasActiveFx",
      "shortDoc": "@deprecated 4.0 Replaced by getActiveAnimation\nReturns thq current animation if this object has any effects actively ..."
    },
    {
      "tagname": "method",
      "name": "sequenceFx",
      "member": "Ext.util.Animate",
      "doc": "<p>Ensures that all effects queued after sequenceFx is called on this object are\nrun in sequence.  This is the opposite of <a href=\"#/api/Ext.util.Animate-method-syncFx\" rel=\"Ext.util.Animate-method-syncFx\" class=\"docClass\">syncFx</a>.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Object",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Animate.js",
      "linenr": 357,
      "html_filename": "Animate.html",
      "href": "Animate.html#Ext-util-Animate-method-sequenceFx",
      "shortDoc": "Ensures that all effects queued after sequenceFx is called on this object are\nrun in sequence.  This is the opposite ..."
    },
    {
      "tagname": "method",
      "name": "stopAnimation",
      "member": "Ext.util.Animate",
      "doc": "<p>Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>The Element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Animate.js",
      "linenr": 335,
      "html_filename": "Animate.html",
      "href": "Animate.html#Ext-util-Animate-method-stopAnimation",
      "shortDoc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that ..."
    },
    {
      "tagname": "method",
      "name": "stopFx",
      "member": "Ext.util.Animate",
      "doc": "<p>@deprecated 4.0 Replaced by <a href=\"#/api/Ext.util.Animate-method-stopAnimation\" rel=\"Ext.util.Animate-method-stopAnimation\" class=\"docClass\">stopAnimation</a>\nStops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>The Element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Animate.js",
      "linenr": 326,
      "html_filename": "Animate.html",
      "href": "Animate.html#Ext-util-Animate-method-stopFx",
      "shortDoc": "@deprecated 4.0 Replaced by stopAnimation\nStops any running effects and clears this object's internal effects queue i..."
    },
    {
      "tagname": "method",
      "name": "syncFx",
      "member": "Ext.util.Animate",
      "doc": "<p>Ensures that all effects queued after syncFx is called on this object are\nrun concurrently.  This is the opposite of <a href=\"#/api/Ext.util.Animate-method-sequenceFx\" rel=\"Ext.util.Animate-method-sequenceFx\" class=\"docClass\">sequenceFx</a>.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Object",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Animate.js",
      "linenr": 345,
      "html_filename": "Animate.html",
      "href": "Animate.html#Ext-util-Animate-method-syncFx",
      "shortDoc": "Ensures that all effects queued after syncFx is called on this object are\nrun concurrently.  This is the opposite of ..."
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Animate.js",
  "linenr": 1,
  "html_filename": "Animate.html",
  "href": "Animate.html#Ext-util-Animate",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [

  ],
  "subclasses": [

  ],
  "mixedInto": [
    "Ext.AbstractComponent",
    "Ext.draw.CompositeSprite",
    "Ext.draw.Sprite"
  ],
  "allMixins": [

  ]
});