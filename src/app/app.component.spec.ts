import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

let component;

describe('AppComponent', () => {
  beforeEach(async(() => {
    component = new AppComponent();
  }));

  it('Aplikacja powinna akceptować prawidłowy PESEL 29 luty lata przestępne', () => {
    expect(component.isValidPesel('20222912347')).toBe(true);
  });

  it('Aplikacja powinna odrzucić PESEL 29 luty lata nieprzestępne', () => {
    expect(component.isValidPesel('19222912341')).toBe(false);
  });

  it('Aplikacja powinna odrzucić za krótki PESEL', () => {
    expect(component.isValidPesel('6484299992')).toBe(false);
  });

/*
ZNALEZIONY BŁĄD DZIĘKU SUGESTII STUDENTÓW
  it('Aplikacja powinna odrzucić za długi PESEL', () => {
    expect(component.isValidPesel('648429999222')).toBe(true);
  });
*/

  it('Aplikacja powinna akceptować prawidłowy PESEL dla XIX wieku', () => {
    expect(component.isValidPesel('64842999922')).toBe(true);
  });

  it('Aplikacja powinna akceptować prawidłowy PESEL dla XX wieku', () => {
    expect(component.isValidPesel('64042999928')).toBe(true);
  });

  it('Aplikacja powinna akceptować prawidłowy PESEL dla XXI wieku', () => {
    expect(component.isValidPesel('64242999924')).toBe(true);
  });

  it('Aplikacja powinna akceptować prawidłowy PESEL dla XXII wieku', () => {
    expect(component.isValidPesel('64442999920')).toBe(true);
  });

  it('Aplikacja powinna akceptować prawidłowy PESEL dla XXIII wieku', () => {
    expect(component.isValidPesel('64642999926')).toBe(true);
  });

  it('Aplikacja powinna odrzucić PESEL z nieprawidłową cyfrą kontrolną', () => {
    expect(component.isValidPesel('64042999929')).toBe(false);
  });

});
