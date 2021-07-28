import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');

  constructor() {
    const themeUrl =
      localStorage.getItem('theme') || './assets/css/colors/default-dark.css';

    this.linkTheme?.setAttribute('href', themeUrl);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme?.setAttribute('href', url);

    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    // Obtiene todos los elementos que contengan la clases selector
    const links: NodeListOf<Element> = document.querySelectorAll('.selector');

    // Obtener el url del theme actual
    const currentTheme = this.linkTheme?.getAttribute('href');

    // a cada uno de los elementos anteriores
    links.forEach((elem) => {
      // quitarles la clase working
      elem.classList.remove('working');
      // Obtener el atributo data-theme (que es el que contiene el nombre del tema al que hace referencia el elemento)
      const btnTheme = elem.getAttribute('data-theme');
      // Obtener el url del tema al que ese boton hace referencia
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;

      // verificar si el url del tema actual y el theme del boton es el mismo
      if (btnThemeUrl === currentTheme) {
        // agregarle la clase working
        elem.classList.add('working');
      }
    });
  }
}
