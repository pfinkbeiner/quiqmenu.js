###
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
###

class QuiqMenu

  # Contains each selector.
  selector:
    base: undefined
    container: '.container'

  # Slider default settings
  defaults:
    id: 'quiqmenu'
    use: 'h1, h2'
    searchIn: 'body'
    bootstrap: true
    smooth: true
    brand:
      enable: true
      title: 'QuiqMenu v1.0'

  settings: {}

  # Stores menu items
  menu: {}

  # Stores anchor postion items
  anchorpos: {}

  # Amount of menu items
  amount: 0

  # Constructor…
  constructor: (options, selector) ->
    me = @
    @selector.base = selector
    @settings = jQuery.extend true, @defaults, options
    @prepare()

  # Collect headings
  # 
  # @return [Html]
  prepare: ->
    me = @
    ((jQuery @settings.searchIn).find @settings.use).each (i, el) ->
      (jQuery el).before
      heading = (jQuery el).text()
      (jQuery el).before '<a href="#'+(heading.replace(' ','-')).toLowerCase()+'"></a>'
      me.menu[i] = heading
      me.amount++
    @buildMenu()

  # Actually builds menu
  #
  # @return void
  buildMenu: ->
    me = @
    if me.settings.bootstrap is true
      (jQuery me.selector.base).append '<div class="navbar"><div class="navbar-inner"><ul id="'+(me.settings.id)+'" class="nav"></ul></div></div>'
    else
      (jQuery me.selector.base).append '<ul id="'+(me.settings.id)+'" class="nav"></ul>'

    if me.settings.brand.enable is true
      ((jQuery me.selector.base).find '.navbar-inner').prepend '<a class="brand brand-top" href="#">'+(me.settings.brand.title)+'</a>'
    for i in [0..@amount - 1]
      ((jQuery me.selector.base).find 'ul').append '<li class="'+me.menu[i].toLowerCase()+'"><a href="#'+(me.menu[i].replace(' ', '-')).toLowerCase()+'">'+me.menu[i]+'</a></li>'
    @watch()

  # Watch for user interaction
  watch: ->
    me = @
    ((jQuery @selector.base).find 'a').click (e) ->
      ((jQuery me.selector.base).find 'li').removeClass 'active'
      pos = 0
      if ((jQuery @).hasClass 'brand-top') is false
        (jQuery @).parent().addClass 'active'
        anchor = (jQuery @).attr 'href'
        pos = ((jQuery me.container).find 'a[href="'+anchor+'"]').offset().top
      me.scrollTo parseInt pos, 10

  # Scrolls to requested section
  #
  # @param [Integer] pos
  scrollTo: (pos) ->
    space = (jQuery @selector.base).children().height()
    if pos is 0
      space = 0
    duration = 500
    if @settings.smooth isnt true
      duration = 0
    (jQuery 'html, body').animate {scrollTop: pos - space}, duration

jQuery.fn.quiqmenu = (options) ->
  new QuiqMenu(options, @.selector)
