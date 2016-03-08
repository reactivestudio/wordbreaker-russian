# jQuery.WordWrapper.js
~~Переносятор~~ ~~перенесун~~ ~~переносчик~~ ~~переноситель~~ расстановщик мягких переносов для русского языка

[Демо](http://ohar.github.io/jQuery.WordWrapper.js/)

TODO: полное соответствие [правилам русской орфографии и пунктуации (1956)](http://new.gramota.ru/spravka/rules/141-perenos), §§ 117–124.

№ правила | Готовность | Краткое описание
---       | ---        | ---
117       | +          | При переносе слов нельзя ни оставлять в конце строки, ни переносить на другую строку часть слова, не составляющую слога.
118.0     | +          | Нельзя отделять согласную от следующей за ней гласной.
118.1     | −          | При переносе cлов с односложной приставкой на согласную, стоящую пеpeд гласной (кроме `ы`), желательно не разбивать приставку переносом.
118.2     | −          | Если после приставки стоит буква `ы`, то переносить часть слова, начинающуюся с `ы`, не разрешается.
118.3     | −          | Слова, в которых в настоящее время пpиставка отчетливо не выделяется, переносятся в соответствии с основным правилом настоящего параграфа.
119.1     | +          | Нельзя отрывать буквы `ь` и `ъ` от предшествующей согласной.
119.2     | +          | Нельзя отрывать букву `й` от предшествующей гласной.
119.3     | +          | Нельзя оставлять в конце строки или переносить на другую строку одну букву.
119.4     | +          | При переносе слов с приставками нельзя разбивать односложную приставку, если за приставкой идет согласный.
119.5     | −          | При переносе слов с приставками нельзя оставлять в конце строки при приставке начальную часть корня, не составляющую слога.
119.6     | −          | При переносе сложных cлов нельзя оставлять в конце строки начальную часть второй основы, если эта часть не составляет слога.
119.7     | +          | Нельзя оставлять в конце строки или переносить в начало следующей две одинаковые согласные, стоящие между гласными.
119.8     | −          | Нельзя разбивать переносом односложную часть сложносокращенного слова.
119.9     | −          | Нельзя разбивать переносом буквенные аббревиатуры, как пишущиеся одними прописными, так и пишущиеся частью строчными, частью прописными или прописными с цифрами.
120       | −          | Нельзя переносить сокращенные обозначения мер, отрывая их от цифр, указывающих число измеряемых единиц.
121       | −          | Нельзя переносить «наращения», т. е. отрывать при переносе от цифры соединенное с ней дефисом грамматическое окончание.
122       | −          | Нельзя разбивать переносами условные графические сокращения.
123       | −          | Нельзя переносить на другую строку пунктуационные знаки, кроме тире, стоящего после точки или после двоеточия перед второй частью прерванной прямой речи.
124       | −          | Нельзя оставлять в конце строки открывающую скобку и открывающие кавычки.
