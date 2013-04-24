Backbone.sync = Nimbus.backbone_sync
# init()
Nimbus.Auth.authorized_callback = ()->
  init()

init = () -> 
  if Nimbus.Auth.authorized()
    $("#loading").fadeOut()
    console.log 'authorized_callback'
    $("#todoapp").trigger('auth_event')