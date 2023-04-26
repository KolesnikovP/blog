# О FSD-методолигии
## Modules
- Внутри модуля пользуемся относительными путями
- Каждый модуль содержит index.ts файл который отдает наружу только то что должно использоваться
в проекте, а внутреннюю логику держать изолированно внутри. 
Так например различные типы интерфейсы нужны только внутри модуля и
следовательно не нужно отдавать их наружу. 
- Модули не должны зависить друг от друга. Это обеспечивает простоту внесения изменений и масштабируемость,
убирая сильную созависимость.


## Exports
- Модули которые имеют асинхронные чанки експортируем по дефолту
  ```export {MainPageAsync} from ...```
- Модули которые не имеют асинхронные чанки экспортируются как именнованные
```
import Button from '...'
export {Button}
```

## Tests
- Файлы тестов держим рядом с тестируемым файлом


