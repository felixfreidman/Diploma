<h1>Основная сборка</h1>
<p>для запуска необходимо установить node.js не ниже 12.16.3</p>
<p>
<ul>
Команды для запуска:
<li>
npm install - установка модулей
</li>
<li>
npm start - запуск сборки
</li>
</ul>
</p>
<p>Готовые файлы собираются в папку build</p>
<h2>
Структура папок в src:
<h2>
<p>
assets - все вспомогательные файлы

    - fonts - файлы шрифтов
    - images - картинки
      - content - Картинки в коде
js - скрипты

      - components - Вся кодовая база проекта
        - Модули проекта
      - plugins - подключаемые плагины
      - separate - скрипты, которые должны остаться отдельными файлами после компиляции
        - jquery.min.js

styles - стили

      - tools - инструменты (анимации, переменные, миксины)
      - vendors - включения (шрифты, normalize, reset)
      - settings - базовые настройки
      - layout - размещение стилей (контейнеры, строки, сетки)
        style.scss - тут подключаются все папки в прописанном порядке

html

  - папки с повторяющимися блоками
  - сами страницы

php - папка создается для создания php-файлов в процессе настройки панели администрирования

  - папки с повторяющимися блоками
  - сами страницы
 </p>
