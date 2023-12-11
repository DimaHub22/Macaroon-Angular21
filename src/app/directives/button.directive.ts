import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective implements OnInit {
  @Input() backgroundDefault: string = ''
  @Input() backgroundHover: string = ''

  constructor(private btn: ElementRef,
              private rend: Renderer2) {
  }

  @HostListener('mouseover') onMouseOver() {
    this.rend.setStyle(this.btn.nativeElement, 'box-shadow', this.backgroundHover)
  }

  @HostListener('mouseout') onMouseOut() {
    this.rend.setStyle(this.btn.nativeElement, 'box-shadow','none')
  }

  ngOnInit() {
   this.rend.setStyle(this.btn.nativeElement, 'background-image', this.backgroundDefault)
  }

}
