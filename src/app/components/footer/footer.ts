import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `<footer
    class="flex gap-10 justify-center py-5 border-t border-white text-white font-agdasima xl:text-xl"
  >
    <p>Legal notice</p>
    <p>Copyright</p>
  </footer> `,
})
export class Footer {}
