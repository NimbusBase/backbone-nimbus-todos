Backbone.sync = Nimbus.backbone_sync

Nimbus.Auth.setup("Dropbox", "lejn01o1njs1elo", "2f02rqbnn08u8at", "todomvc_app")

if Nimbus.Auth.authorized()
  $("#loading").fadeOut()
  
Nimbus.Auth.authorized_callback = ()->

  if Nimbus.Auth.authorized()
    $("#loading").fadeOut()