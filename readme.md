# Challenge 02 - Métodos de Strings

Implementa como funciones los metodos de strings que se describen a continuación. No puedes usar los métodos nativos de strings excepto - `charCodeAt(pos: number)`: Devuelve el valor Unicode del carácter en la posición indicada.

Todas las funciones deben estar en un modulo, e.g. `strings.js` y exportarse y probarse en otro archivo, e.g. `index.js`.

- `length`: Devuelve la longitud del string.
- `substring(start: number, end: number)`: Devuelve un nuevo string que es una subcadena del original, desde la posición start hasta la end. Si end no se indica, se toma hasta el final.
- `indexOf(substring: string)`: Devuelve la posición de la primera ocurrencia de la subcadena en el string. Si no se encuentra, devuelve -1.
- `includes(substring: string)`: Devuelve true si la subcadena se encuentra en el string, false en caso contrario.
- `startsWith(substring: string)`: Devuelve true si el string comienza con la subcadena, false en caso contrario.
- `endsWith(substring: string)`: Devuelve true si el string termina con la subcadena, false en caso contrario.
- `lastIndexOf(substring: string)`: Devuelve la posición de la última ocurrencia de la subcadena en el string. Si no se encuentra, devuelve -1.

- `toUpperCase`: Devuelve el string en mayúsculas.
- `toLowerCase`: Devuelve el string en minúsculas.
- `charAt(pos: number)`: Devuelve el carácter en la posición indicada.

- `concat(str2: string)`: Devuelve un nuevo string que es la concatenación de ambos.
- `slice(start: number, end: number)`: Devuelve un nuevo string que es una subcadena del original, desde la posición start hasta la end. Si end no se indica, se toma hasta el final.

- `replace(substring: string, newSubstring: string)`: Devuelve un nuevo string que es el resultado de reemplazar la primera ocurrencia de la subcadena por la nueva subcadena.
- `replaceAll(substring: string, newSubstring: string)`: Devuelve un nuevo string que es el resultado de reemplazar todas las ocurrencias de la subcadena por la nueva subcadena.
- `split(separator: string)`: Devuelve un array de strings que son el resultado de dividir el string original en base al separador indicado.
- `trim()`: Devuelve un nuevo string que es el resultado de eliminar los espacios en blanco al principio y al final del string.
- `padStart(length: number, fillString: string)`: Devuelve un nuevo string que es el resultado de rellenar el string original con el fillString hasta alcanzar la longitud indicada.
- `padEnd(length: number, fillString: string)`: Devuelve un nuevo string que es el resultado de rellenar el string original con el fillString hasta alcanzar la longitud indicada.
- `repeat(times: number)`: Devuelve un nuevo string que es el resultado de repetir el string original las veces indicadas.
- `trimStart()`: Devuelve un nuevo string que es el resultado de eliminar los espacios en blanco al principio del string.
- `trimEnd()`: Devuelve un nuevo string que es el resultado de eliminar los espacios en blanco al final del string.
- `toString()`: Devuelve el string.
- `valueOf()`: Devuelve el string.

No es necesario implementar los métodos de Unicode:

- `codePointAt(pos: number)`: Devuelve el valor Unicode del punto de código del carácter en la posición indicada.
- `fromCharCode(code: number)`: Devuelve un string que contiene el carácter correspondiente al valor Unicode indicado.
- `fromCodePoint(code: number)`: Devuelve un string que contiene el carácter correspondiente al punto de código indicado.

No es necesario implementar los métodos de expresiones regulares:

- `match(regexp: RegExp)`: Devuelve un array con las coincidencias del string con la expresión regular indicada.
- `search(regexp: RegExp)`: Devuelve la posición de la primera coincidencia del string con la expresión regular indicada. Si no se encuentra, devuelve -1.

No es necesario implementar los métodos de localización:

- `localeCompare(str2: string)`: Devuelve un número que indica si el string es anterior, posterior o igual al string indicado, en base a la localización.
- `normalize(form: string)`: Devuelve un nuevo string que es el resultado de normalizar el string original en base a la forma indicada.
- `toLocaleLowerCase()`: Devuelve el string en minúsculas, teniendo en cuenta la localización.
- `toLocaleUpperCase()`: Devuelve el string en mayúsculas, teniendo en cuenta la localización.
