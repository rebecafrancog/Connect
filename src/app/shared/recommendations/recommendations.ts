import { Component } from '@angular/core';

@Component({
selector: 'app-recommendations',
standalone: true,
template: `
<div id="recommendations-view" class="view">
  <div class="content-placeholder">
    <i class="fas fa-star fa-3x"></i>
    <h2>Para Você</h2>
    <p>Recomendações personalizadas</p>
  </div>
</div>
`
})
export class Recommendations {

}
