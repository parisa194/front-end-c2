#  Gestor de Usuarios

Este proyecto es una aplicación web sencilla que permite ver y crear usuarios mediante la extraccion de informacion de una Api.  
Está construida con **React (Vite)** en el frontend y **Express** en el backend.

---

##  Funcionalidades

- Muestra una lista de usuarios con su foto y datos personales.  
- Permite crear nuevos usuarios mediante un formulario.  
- Cada usuario tiene: nombre, teléfono, correo, dirección, edad y foto.  
- Diseño tipo “tarjeta” con animación de volteo.  

---

## ⚙️ Instalación y ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tuusuario/gestor-usuarios.git
```

### 2️⃣ Instalar dependencias

#### Backend
```bash
cd backend
npm install
node index.js
```
> Servidor activo en: http://localhost:3000

#### Frontend
```bash
cd ../frontend
npm install
npm run dev
```
> Aplicación en: http://localhost:5173

---

## Estructura del proyecto

```
src/
├── App.jsx
|── index.css
|── Main.jsx
├── components/
│   ├── Form.jsx
│   ├── User.jsx
|   |── User.css
│   └── Users.jsx
└── App.css
```

---

##  Endpoints del backend

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/users` | Lista todos los usuarios |
| POST | `/users` | Crea un nuevo usuario |

Ejemplo de JSON para crear usuario:

```json
{
  "name": "Jorge García",
  "phone": "3101234567",
  "email": "jorge@example.com",
  "address": "Calle 45 #12-34, Bogotá",
  "age": 28,
  "photoUrl": "https://randomuser.me/api/portraits/men/75.jpg"
}


##  Tecnologías utilizadas

- React + Vite  
- Node.js + Express  
- HTML / CSS / JavaScript



##  Autor

**Jorge Andres García Mojica 1088026128**
**Paola Andrea Rios 1088322161**  
Proyecto desarrollado con fines académicos y de práctica personal.  

**NOTA: las imagenes utilizadas en esta app fueron obtenidas de internet con fines de estudio**
