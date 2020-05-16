import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

let component;

describe('AppComponent', () => {
  beforeEach(async(() => {
    component = new AppComponent();
  }));

  it('Aplikacja powinna akceptować prawidłowy PESEL dla XX wieku', () => {
    expect(component.isValidPesel('64042999928')).toBe(true);
  });

  it('Aplikacja powinna akceptować prawidłowy PESEL dla XXI wieku', () => {
    expect(component.isValidPesel('64242999924')).toBe(true);
  });

  it('Aplikacja powinna odrzucić PESEL z nieprawidłową cyfrą kontrolną', () => {
    expect(component.isValidPesel('64042999929')).toBe(false);
  });

});
