# Angular_Day_1

This directory structure is much harder to read and understand from the get go. A newcomer to Angular may be completely turned off by this complex approach, and that is why you see tutorials and examples in Angular following the simpler directory structure found in examples earlier. Let’s dive into the directory structure above and see what’s going on here.

INDEX.HTML

The index.html lives at the root of front-end structure. The index.html file will primarily handle loading in all the libraries and Angular elements.

ASSETS FOLDER

The assets folder is also pretty standard. It will contain all the assets needed for your app that are not related your AngularJS code. There are many great ways to organize this directory but they are out of scope for this article. The example above is good enough for most apps.

APP FOLDER

This is where the meat of your AngularJS app will live. We have two subfolders in here and a couple JavaScript files at the root of the folder. The app.module.js file will handle the setup of your app, load in AngularJS dependencies and so on. The app.route.js file will handle all the routes and the route configuration. After that we have two subfolders – components and shared. Let’s dive into those next.

COMPONENTS FOLDER

The components folder will contain the actual sections for your Angular app. These will be the static views ,directives and services for that specific section of the site (think an admin users section, gallery creation section, etc). Each page should have it’s own subfolder with it’s own controller, services, and HTML files.

Each component here will resemble a mini-MVC application by having a view, controller and potentially services file(s). If the component has multiple related views, it may be a good idea to further separate these files into ‘views’, ‘controllers’, ‘services’ subfolders.

This can be seen as the simpler folder structure shown earlier in this article, just broken down into sections. So you could essentially think of this as multiple mini Angular applications inside of your giant Angular application.

SHARED FOLDER

The shared folder will contain the individual features that your app will have. These features will ideally be directives that you will want to reuse on multiple pages.

Features such as article posts, user comments, sliders, and others should be crafted as AngularJS Directives. Each component here should have it’s own subfolder that contains the directive JavaScript file and the template HTML file.

In some instances, a directive may have it’s own services JavaScript file, and in the case that it does it should also go into this subfolder.

This allows us to have definitive components for our site so that a slider will be a slider across the site. You would probably want to build it so that you could pass in options to extend it. For example, you could have:

<!-- user a slider directive to loop over something -->
<slider id="article-slider" ng-repeat="picture in pictures" size="large" type="square">
</slider>

Now this slider is accessible from any part of our site so we’re not reinventing the wheel. We also just have to change it in one place, the shared folder and it will update sitewide.

If you are developing a really large application in AngularJS, you will want to go even further and modularize your app. Here are some additional tips on how to accomplish this.

MODULARIZE THE HEADER AND FOOTER

A good practice here would be to create a Core subfolder under components, and then a subfolder for the Header and Footer and any additional components that will be shared across many pages.

MODULARIZE THE ROUTES

In the structure above we didn’t do this, but another good practice for very large apps is to separate the routes into separate files. For example you might add a blogRoutes.js file in the /views/blog/ subfolder and there include only the routes relevant to the blog such as /blog/:slug, /blog/:slug/edit, blog/tags:/tags, etc.

DON’T FORGET TO MINIFY

If you do decide to opt in and build your AngularJS apps in a modularized fashion, be sure to concatenate and minify your code before going into production. There are many great extensions for both Grunt and Gulp that will help with this – so don’t be afraid to split code up as much as you need.

You may not want to necessarily have just one giant .js file for your entire app, but concatenating your app into a few logical files like:

app.js (for app initialization, config and routing)
services.js (for all the services)
This will be greatly beneficial for reducing initial load times of your app.

If you need some more tips on minifying, check out our guide: Declaring AngularJS Modules For Minification

KEEP THE NAMES CONSISTENT

This is more of a general tip, but this will save you a headache in the future, when writing components and you need multiple files for the component, try to name them in a consistent pattern. For example, blogView.html, blogServices.js, blogController.js.

The example above shows a modularized approach to building AngularJS. The benefits of this approach include:

CODE MAINTAINABILITY

Follow the approach above will logically compartmentalize your apps and you will easily be able to locate and edit code.

SCALABLE

Your code will be much easier to scale. Adding new directives and pages will not add bloat to existing folders. Onboarding new developers should also be much easier once the structure is explained. Additionally, with this approach, you will be able to drop features in and out of your app with relative ease so testing new functionality or removing it should be a breeze.

DEBUGGING

Debugging your code will be much easier with this modularized approach to app development. It will be easier to find the offending pieces of code and fix them.

TESTING

Writing test scripts and testing modernized apps is a whole lot easier then non-modularized ones.

# In Conclusion

To conclude, this article covered some of the best practices in regards to structuring an AngularJS app. It is easy to ignore good practices in order to save time upfront. We all have a tendency to just want to start writing code. Sometimes this passion can hurt us in the long run when our awesome apps grow and become popular and then we’re stuck rewriting or even worse maintaining badly thought out code. I hope this article had some helpful tips.

I plan on building a barebones AngularJS application structure that should follow the best practices outlined in this article that will help you get started building Angular apps quickly and efficiently. Keep a lookout for that in the coming weeks. Stay tuned for Part 2 where we put these concepts into practice!

In the meantime, be sure to check out John Papa’s AngularJS Style Guide for additional tips on AngularJS best practices and while you’re add it give Todd Motto’s AngularJS Guide a look too.
