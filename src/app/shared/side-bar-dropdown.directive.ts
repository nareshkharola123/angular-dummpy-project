import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[sideBarDropdown]'
})
export class SideBarDropdownDirective {

  constructor(private elRef:ElementRef){}

  @HostListener('mouseenter') mouseEnter() {
    let div = this.elRef.nativeElement.querySelector('.dropdown-menu')
    if(div){
      div.classList.add('show');
    }
  }

  @HostListener('mouseleave') mouserLeave(){
    let div = this.elRef.nativeElement.querySelector('.dropdown-menu');
    if(div){
      div.classList.remove('show');
    }
  }
}
