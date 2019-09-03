
# Kitten Around! - A Chrome Extension

Kitten Around! is a Google Chrome extension that allows users to replace the images on websites they visit with pictures of animals. We implemented this functionality using a combination of HTML, CSS, JavaScript, and Chrome APIs to create a user interface and the necessary code.

### `manifest.json`
All Google Chrome extensions contain a manifest that contain the title, version information, and permissions of the extension. Under the permissions script we are using Google Chrome’s Declarative Content API which enables the extension to take action on web pages without requesting permission from the website host. The “activeTab” permission gives the extension access to the information in the tab that the user has open in their browser. When the user navigates away from the tab, the extension no longer has access to it. The extension is able to work on all websites because of the  "<all_urls>" permission in the manifest.

### `popup.html`
An HTML file that contains text and three clickable `div`s with unique `id`s. These are used to link the user’s choice of animal with JavaScript arrays containing photo urls of each type of animal. The HTML file also links to the stylesheet `popup.css`, and JavaScript file `popup.js`.

### `popup.css`
A CSS file that contains style code for popup.html.

### `popup.js`
A JavaScript file that contains the core functionality of the extension. This code is triggered when the user clicks one of the animal options on
. At the top of the file, we stored the addresses of animal images in three separate arrays, one for each species. We chose to store the image addresses in JavaScript arrays because they allow our code to easily access and iterate through them. This ensures that each successive image on a web page is turned into a different new image, until all the images addresses are utilized.

The `changeImage(x)` function takes an image source or an array of image sources as an input. The function searches the website’s DOM (document object markup) for the `<img>` tag. Using a for loop, the source of each image tag on a website is set to a source contained in the array for the animal that was put into the function. We use a modulus to loop through the array of image sources so that that a variety of images for one type of animal is displayed on the user’s web page.

In this section of code, we are applying an event listener to each element on `popup.html` that is part of the “menu” class. Each time a “menu” is clicked, the event ‘click’ is used in the the `click(e)` function as an input. The click(e) function uses the id of the element that was clicked and calls the changeImage function using the id as an input.

```
// Allows popup to be clicked
document.addEventListener('DOMContentLoaded', function () {
  var options = document.getElementsByClassName('menu');
  for (var i = 0, len = options.length; i < len; i++) {
    options[i].addEventListener('click', click);
  }
});

```

For example, when the extension begins, each menu in the popup window gets an event listener. When the user clicks ‘kitten’ in the extension popup, the id of that section, ‘kitten’, is used as input for the changeImage function and kitten is also the name of an array containing photos of kittens, so the images on the user’s current tab get changed to kittens.
