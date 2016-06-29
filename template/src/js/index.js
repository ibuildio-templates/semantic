/*
| {{ name }} : {{ description }}
|
| @link      http://websemantics.ca
| @author    Web Semantics, Inc. Dev Team <team@websemantics.ca>
| @author    Adnan M.Sagar, PhD. <adnan@websemantics.ca>
└ */

window.jQuery = window.$ = require('jquery')
window.Masonry = require('masonry-layout')

require('semantic-ui/dist/components/sidebar')
require('semantic-ui/dist/components/sticky')

$(function() {

      $('.toc .ui.sticky').sticky({
          context: $('.pusher > .full.height')
      })

      $('#slider').sidebar('attach events', '.launch.button, .view-ui, .launch.item')
          .sidebar('setting', {
              dimPage: false
          })

      // var masonry = new Masonry( '.masonry', { "itemSelector": ".brick"})

})
