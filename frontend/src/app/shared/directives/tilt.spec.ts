import { TiltDirective } from './tilt';
import { ElementRef, NgZone } from '@angular/core';

describe('TiltDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: {} } as ElementRef;
    const mockNgZone = { runOutsideAngular: (fn: () => void) => fn() } as NgZone;
    const directive = new TiltDirective(mockElementRef, mockNgZone);
    expect(directive).toBeTruthy();
  });
});
