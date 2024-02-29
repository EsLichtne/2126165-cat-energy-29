# Седона

[Опубликованная версия🡕](https://eslichtne.github.io/cat-energy/)

<img src='assets/screenshot.webp'>

## Описание 

Магазин с широким ассортиментом функционального питания для котов, которое поддерживает здоровье питомцев.

Проект выполнен во время обучения на образовательной платформе [HTML-Academy🡕](https://htmlacademy.ru/study)

:bulb: Проект полностью адаптивен для мобильной / планшетной / десктопной версии.

## :gear: Функциональные возможности 

- Перемещение ползунка слайдера для просмотра изображения кота до/после;
- Просмотре местоположения магазина на интерактивной карте;
- Просмотр города на интерактивной карте (использован API [Яндекс.Карт🡕](https://yandex.ru/maps-api/products));
- Отправка формы заявки;
- Валидация формы заявки (выполнена с помощью библиотеки [PristineJS🡕](https://pristine.js.org/));
- Просмотр каталога; добавление товаров в корзину.

## :hammer: Установка и запуск

1. Установка зависимостей:
```Shell
npm ci
```

2. Запуск сборки на локальном сервере:
```Shell
npm run start
```

3. Запуск продакшн-сборки (папка `build`):
```Shell
npm run build
```

## :crystal_ball: Используемые технологии
<table>
  <tr>
    <td width="70" align='center'>
      <img width='36' height='36'
        src='https://files.svgcdn.io/vscode-icons/file-type-html.svg'
        alt='HTML'>
      <br>
      <sub>HTML</sub>
    </td>
    <td width="70" align='center'>
      <img width='36' height='36'
        src='https://files.svgcdn.io/vscode-icons/file-type-scss2.svg'
        alt='SCSS'>
      <br>
      <sub>SCSS</sub>
    </td>
    <td width="70" align='center'>
      <img width='36' height='36'
        src='https://files.svgcdn.io/logos/javascript.svg'
        alt='JavaScript'>
      <br>
      <sub>JavaScript</sub>
    </td>
    <td width="70" align='center'>
      <img width='36' height='36'
        src='https://files.svgcdn.io/logos/npm-icon.svg'
        alt='NPM'>
      <br>
      <sub>NPM</sub>
    </td>
    <td width="70" align='center'>
      <img width='36' height='36'
        src='https://git-scm.com/images/logos/logomark-orange@2x.png'
        alt='GIT'>
      <br>
      <sub>GIT</sub>
    </td>
  </tr>
</table>

### Инструменты сборки

<table>
  <tr>
    <td width="70" align='center'>
      <img width='48' height='48'
        src='https://files.svgcdn.io/skill-icons/gulp.svg'
        alt='Gulp'>
      <br>
      <sub>Gulp</sub>
    </td>
    <td width="70" align='center'>
      <img width='36' height='36'
        src='https://files.svgcdn.io/logos/autoprefixer.svg'
        alt='Autoprefixer'>
      <br>
      <sub>Autoprefixer</sub>
    </td>
    <td width="70" align='center'>
      <img width='36' height='36'
        src='https://files.svgcdn.io/logos/postcss.svg'
        alt='PostCSS'>
      <br>
      <sub>PostCSS</sub>
    </td>
    <td width="70" align='center'>
      <img width='36' height='36'
        src='https://files.svgcdn.io/simple-icons/stylelint.svg'
        alt='Stylelint'>
      <br>
      <sub>Stylelint</sub>
    </td>
  </tr>
</table>

### Дополнительные технологии

<table>
  <tr>
    <td width="70" align='center'>
      <img width='36' height='36'
        src='https://files.svgcdn.io/fluent/document-javascript-24-regular.svg'
        alt='PristineJS'>
      <br>
      <sub>PristineJS</sub>
    </td>
    <td width="70" align='center'>
      <img width='36' height='36'
        src='https://files.svgcdn.io/logos/yandex-ru.svg'
        alt='Я.Карты'>
      <br>
      <sub>Я.Карты</sub>
    </td>
  </tr>
</table>

### Методологии

<table>
  <tr>
    <td width="70" align='center'>
      <img width='36' height='36'
        src='https://files.svgcdn.io/logos/bem.svg'
        alt='BEM'>
      <br>
      <sub>БЭМ</sub>
    </td>
  </tr>
</table>

## :game_die: Архитектура

### Препроцессор SCSS

- Стили разделены на компоненты;
- Использованы переменные для хранения цветов, шрифтов и других стилевых свойств.

### Gulp-сборка

Gulp используется для автоматизации различных задач сборки проекта, таких как компиляция SCSS в CSS, транспиляция ES-модулей, оптимизация изображений, запуск локального сервера и т.д.

### ECMAScript-модули

JavaScript-код разделён на модули, каждый из которых отвечает за управление своим функционалом.

### БЭМ-методология

Стили и название классов организованы с использованием БЭМ-нотации.

## :star2: Преимущества

### Оптимизация и производительность

- Файлы, которые попадают в готовую сборку, минифицированы (html, css, js);
- Изображения оптимизированы под стандартную и двойную плотность пикселей;
- Изображения кадрированы с учётом различных размеров экрана мобильных устройств, планшетов и десктопов;
- Использован спрайт для векторных изображений.

### Адаптивность

Выполнена резиновая вёрстка всех состояний страниц: мобильной, планшетной, десктопной.

### Доступность

- Использованы семантичные HTML-теги;
- Использованы ARIA-атрибуты для повышения доступности пользователей с ограниченными возможностями.

### Кроссбраузерность

Вёрстка идентично отображается в последних версиях браузеров (`Chrome`, `Firefox`, `Safari`).

### Pixel Perfect

Веб-страница в браузере выглядит так же, как было задумано дизайнером в графическом редакторе.
