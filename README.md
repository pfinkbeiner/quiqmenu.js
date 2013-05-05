![Quiqmenu.js](https://github.com/pfinkbeiner/quiqmenu.js/blob/master/images/quiqmenu.png?raw=true)
========



## Usage
Setup Quiqmenu.js is really easy. Get the latest script from github and ensure you are using jQuery 1.3 or higher on your site.

After including the script you have to activate Quiqmenu.js with the following snippet.

```html
<div id="menu"></div>
```
```javascript
$(document).ready(function(){
  $("#menu").quiqmenu({
    use: 'h1, h2',
    brand: {
      enable: true,
      title: 'My Plugin'
    }
  });
});
```

## Options
Of course you have the ability to customize your menu with a bunch of
options.

| name        | type          | default | description  |
| ------------- |:-------------:| -----:| ------|
| id     | `string` | `'quiqmenu'` | A unique identifier which will be append on generated menu.|
| use     | `string`      |   `'h1, h2'` | Choose HTML tags which will be collected and used for your menu. Use syntax like »h1, h2, h4, h6« | 
| brand | `object`      | - | If the brand option is enabled it will appear an additional link which goes automatically to top on click. |
| brand.enable | `boolean` | `true` | If true, you should also fill brand.title with some string. |
| brand.title | `string`      | `'Quiqmenu.js'` | Use your own brand title. |
| bootstrap | `boolean`     |   `true` | By default it uses style and markup from bootstrap. Can be turned off and script only creats an simply ul > li construct. You have to style it on your own. |
| smooth | `boolean`     |  `true` | If `false` it jumps to section without smooth scrolling effect. |


## ToDos

* Adding scrollspy. A feature which detects manually scrolling and
  highlights the current section.
* Use images in brand title.

### Licence

<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png"></a><br><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Quiqmenu.js</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://finkbeiner.me" property="cc:attributionName" rel="cc:attributionURL">Patrick Finkbeiner</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/deed.en_US">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.
