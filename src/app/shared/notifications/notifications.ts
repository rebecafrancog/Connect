import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
standalone: true,
template: `
<div id="notifications-view" class="view">
  <div class="content-placeholder">
    <i class="fas fa-bell fa-3x"></i>
    <h2>Notificações</h2>
    <p>Suas notificações</p>
  </div>
</div>
`
})
export class Notifications {

}
