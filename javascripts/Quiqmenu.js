// Generated by CoffeeScript 1.4.0

/*
# Copyright (c) 2013, Patrick Finkbeiner <finkbeiner.patrick@gmail.com>
# All rights reserved.
# 
# Redistribution and use in source and binary forms, with or without
# modification, are permitted provided that the following conditions are
# met:
# 
# - Redistributions of source code must retain the above copyright notice,
#   this list of conditions and the following disclaimer.
# - Redistributions in binary form must reproduce the above copyright
#   notice, this list of conditions and the following disclaimer in the
#   documentation and/or other materials provided with the distribution.
# - Neither the name of the kuehlhaus AG nor the names of its
#   contributors may be used to endorse or promote products derived from
#   this software without specific prior written permission.
#
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
# "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
# LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
# A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
# HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
# SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
# LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
# DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
# THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
# (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
# OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/


(function() {
  var QuiqMenu;

  QuiqMenu = (function() {

    QuiqMenu.prototype.selector = {
      base: void 0,
      container: '.container'
    };

    QuiqMenu.prototype.defaults = {
      id: 'quiqmenu',
      use: 'h1, h2',
      searchIn: 'body',
      bootstrap: true,
      smooth: true,
      brand: {
        enable: true,
        title: 'QuiqMenu v1.0'
      }
    };

    QuiqMenu.prototype.settings = {};

    QuiqMenu.prototype.menu = {};

    QuiqMenu.prototype.anchorpos = {};

    QuiqMenu.prototype.amount = 0;

    function QuiqMenu(options, selector) {
      var me;
      me = this;
      this.selector.base = selector;
      this.settings = jQuery.extend(true, this.defaults, options);
      this.prepare();
    }

    QuiqMenu.prototype.prepare = function() {
      var me;
      me = this;
      ((jQuery(this.settings.searchIn)).find(this.settings.use)).each(function(i, el) {
        var heading;
        (jQuery(el)).before;
        heading = (jQuery(el)).text();
        (jQuery(el)).before('<a href="#' + (heading.replace(' ', '-')).toLowerCase() + '"></a>');
        me.menu[i] = heading;
        return me.amount++;
      });
      return this.buildMenu();
    };

    QuiqMenu.prototype.buildMenu = function() {
      var i, me, _i, _ref;
      me = this;
      if (me.settings.bootstrap === true) {
        (jQuery(me.selector.base)).append('<div class="navbar"><div class="navbar-inner"><ul id="' + me.settings.id + '" class="nav"></ul></div></div>');
      } else {
        (jQuery(me.selector.base)).append('<ul id="' + me.settings.id + '" class="nav"></ul>');
      }
      if (me.settings.brand.enable === true) {
        ((jQuery(me.selector.base)).find('.navbar-inner')).prepend('<a class="brand brand-top" href="#">' + me.settings.brand.title + '</a>');
      }
      for (i = _i = 0, _ref = this.amount - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
        ((jQuery(me.selector.base)).find('ul')).append('<li class="' + me.menu[i].toLowerCase() + '"><a href="#' + (me.menu[i].replace(' ', '-')).toLowerCase() + '">' + me.menu[i] + '</a></li>');
      }
      return this.watch();
    };

    QuiqMenu.prototype.watch = function() {
      var me;
      me = this;
      return ((jQuery(this.selector.base)).find('a')).click(function(e) {
        var anchor, pos;
        ((jQuery(me.selector.base)).find('li')).removeClass('active');
        pos = 0;
        if (((jQuery(this)).hasClass('brand-top')) === false) {
          (jQuery(this)).parent().addClass('active');
          anchor = (jQuery(this)).attr('href');
          pos = ((jQuery(me.container)).find('a[href="' + anchor + '"]')).offset().top;
        }
        return me.scrollTo(parseInt(pos, 10));
      });
    };

    QuiqMenu.prototype.scrollTo = function(pos) {
      var duration, space;
      space = (jQuery(this.selector.base)).children().height();
      if (pos === 0) {
        space = 0;
      }
      duration = 500;
      if (this.settings.smooth !== true) {
        duration = 0;
      }
      return (jQuery('html, body')).animate({
        scrollTop: pos - space
      }, duration);
    };

    return QuiqMenu;

  })();

  jQuery.fn.quiqmenu = function(options) {
    return new QuiqMenu(options, this.selector);
  };

}).call(this);
