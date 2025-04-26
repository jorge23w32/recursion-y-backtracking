# 🎄 Recursion y Backtracking 🎁

¡Bienvenido al proyecto de **Recursión y Backtracking**!  
Aquí aprenderás a usar dos herramientas poderosas para resolver problemas dividiendo tareas complejas en partes más pequeñas. 🔍

---

## 🤔 ¿Qué son la recursión y el backtracking?

- **Recursión**: Es una técnica donde una función se llama a sí misma para resolver un problema dividiéndolo en subproblemas más pequeños y manejables. 🔄
- **Backtracking**: Va un paso más allá, añadiendo una capa de toma de decisiones. Permite probar diferentes caminos y retroceder (backtrack) cuando uno no lleva a la solución. ↩️

---

## 🎯 Objetivo del Proyecto

El objetivo es practicar cómo usar recursión para buscar un objeto específico en un arreglo. Aprenderás a:

- Dividir un problema en partes más pequeñas.
- Detener la recursión utilizando un caso base.

---

## 🎅 Problema: Buscar un regalo en una lista de regalos

¡Es Navidad! 🎅🏼 Y tienes una lista de regalos que te dio tu familia. La lista puede ser muy larga, así que necesitas usar recursión para buscar el regalo que te interesa.  
Este proyecto se enfoca en **usar recursión** para buscar un elemento en un arreglo simple.

---

## 📝 Instrucciones

1. ✍️ Escribe una función **recursiva** que busque un regalo específico en un arreglo.
2. ✅ Si el regalo se encuentra, regresa un mensaje indicando su posición.
3. ❌ Si no se encuentra, regresa un mensaje diciendo que no está en la lista.

Puedes consultar un ejemplo de cómo se espera la función en este [Gist de ejemplo](https://gist.github.com/heladio-devf-mx/07642b0746bb8101258995f539ab372e).

---

### 💡 Pistas

- Usa un índice inicial (`index = 0`) para rastrear la posición en el arreglo.
- Implementa los casos base sugeridos:
  - Si `index === gifts.length`, el regalo **no está** en la lista.
  - Si `gifts[index] === giftName`, el regalo **está** en esa posición.
- Realiza la llamada recursiva aumentando el índice (`index + 1`).

---

## 🚀 ¡A programar!

¡Diviértete resolviendo este reto con recursión!  
Recuerda que la práctica es la clave para dominar estas técnicas. 💪✨

---
