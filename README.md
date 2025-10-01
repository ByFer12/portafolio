# Sistema de Gestión de Eventos – "Ola ke hace"

Aplicación web desarrollada en **PHP (XAMPP), React y MySQL/MariaDB** bajo el patrón **MVC**.  
El sistema permite la gestión y publicación de eventos en Xela con un control basado en roles de usuario.

##  Funcionalidades principales

###  Administrador
- Gestionar usuarios.
- Aprobar o rechazar publicaciones y reportes.
- Restringir privilegios a publicadores con reportes confirmados.

###  Publicador de anuncios
- Crear publicaciones (lugar, fecha, hora, cupo limitado, URL, tipo de público).
- Sus publicaciones requieren aprobación hasta acumular 2 anuncios aceptados.
- Puede perder privilegios de publicación automática en caso de reportes.

###  Usuario registrado
- Marcar eventos con "Deseo asistir" y recibir notificaciones con conteo regresivo.
- Reportar anuncios, indicando el motivo.

###  Usuario visitante
- Acceso a la vista pública de eventos.

##  Reglas de negocio
- Publicadores sin experiencia necesitan aprobación de un administrador hasta tener 2 publicaciones aprobadas.
- Publicaciones con **3 reportes** se eliminan automáticamente de la vista general.
- Publicadores con reportes confirmados pierden privilegios de publicación automática o son baneados.

##  Tecnologías utilizadas
- **Backend:** PHP (XAMPP) con patrón **MVC**.
- **Frontend:** React, HTML, CSS, JavaScript.
- **Base de datos:** MySQL/MariaDB.
- Manejo de sesiones, autenticación y notificaciones dinámicas.

##  Descripción
El sistema fomenta la **gestión organizada de eventos**, con un control sólido por roles, reglas de negocio específicas y escalabilidad en su arquitectura.
