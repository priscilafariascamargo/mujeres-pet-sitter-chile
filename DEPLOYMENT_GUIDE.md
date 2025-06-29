# 🚀 Guía SÚPER DETALLADA de Despliegue - Mujeres Pet Sitter Chile
## Para Principiantes Completos - Paso a Paso

---

## 📋 **¿Qué vamos a hacer?**
Vamos a poner tu sitio web en internet para que cualquier persona pueda verlo. Es como mudarse de tu computadora a una casa en internet.

**Tiempo total estimado: 30-45 minutos**

---

## 🛠️ **PASO 1: Preparar tu Computadora (5 minutos)**

### 1.1 Verificar que el sitio funciona
Antes de subirlo a internet, vamos a asegurarnos de que funciona en tu computadora:

1. **Abrir la terminal/consola:**
   - **Windows**: Presiona `Windows + R`, escribe `cmd` y presiona Enter
   - **Mac**: Presiona `Cmd + Espacio`, escribe `terminal` y presiona Enter
   - **Linux**: Presiona `Ctrl + Alt + T`

2. **Navegar a tu proyecto:**
   ```bash
   # Si tu proyecto está en el escritorio:
   cd Desktop/mujeres-pet-sitter-chile
   
   # Si está en documentos:
   cd Documents/mujeres-pet-sitter-chile
   
   # Si no sabes dónde está, busca con:
   dir (en Windows) o ls (en Mac/Linux)
   ```

3. **Instalar dependencias:**
   ```bash
   npm install
   ```
   *Espera a que termine (puede tomar 2-3 minutos)*

4. **Probar el sitio:**
   ```bash
   npm run dev
   ```
   
5. **Verificar que funciona:**
   - Abre tu navegador
   - Ve a: `http://localhost:5173`
   - ¿Se ve tu sitio web? ✅ ¡Perfecto!
   - Presiona `Ctrl + C` en la terminal para detenerlo

---

## 🐙 **PASO 2: Crear Cuenta en GitHub (10 minutos)**

GitHub es como Google Drive, pero para código. Aquí guardaremos tu sitio web.

### 2.1 Registrarse en GitHub

1. **Ir a GitHub:**
   - Abre tu navegador
   - Ve a: [https://github.com](https://github.com)

2. **Crear cuenta:**
   - Clic en **"Sign up"** (esquina superior derecha)
   - **Username**: Elige algo como `tu-nombre-petsitter` (ejemplo: `maria-petsitter`)
   - **Email**: Tu correo electrónico
   - **Password**: Una contraseña segura
   - Clic en **"Create account"**

3. **Verificar email:**
   - Ve a tu correo
   - Busca el email de GitHub
   - Clic en el enlace de verificación

4. **Completar perfil:**
   - Puedes saltar las preguntas opcionales
   - Clic en **"Complete setup"**

### 2.2 Crear el Repositorio (donde vivirá tu código)

1. **Crear nuevo repositorio:**
   - En GitHub, clic en el botón verde **"New"** o **"+"** 
   - O ve directamente a: [https://github.com/new](https://github.com/new)

2. **Configurar el repositorio:**
   - **Repository name**: `mujeres-pet-sitter-chile`
   - **Description**: `Sitio web oficial de Mujeres Pet Sitter Chile`
   - Selecciona **"Public"** (para que sea gratis)
   - ✅ Marca **"Add a README file"**
   - Clic en **"Create repository"**

3. **¡Listo!** Ahora tienes tu "casa" en GitHub

---

## 📤 **PASO 3: Subir tu Código a GitHub (10 minutos)**

Ahora vamos a "mudar" tu código de tu computadora a GitHub.

### 3.1 Preparar Git en tu Computadora

1. **Verificar si tienes Git:**
   ```bash
   git --version
   ```
   
   **Si aparece un número de versión**: ✅ Ya tienes Git
   
   **Si dice "command not found"**: Necesitas instalar Git:
   - **Windows**: Descarga de [https://git-scm.com/download/win](https://git-scm.com/download/win)
   - **Mac**: Instala desde [https://git-scm.com/download/mac](https://git-scm.com/download/mac)
   - **Linux**: `sudo apt install git`

2. **Configurar Git (solo la primera vez):**
   ```bash
   git config --global user.name "Tu Nombre"
   git config --global user.email "tu-email@ejemplo.com"
   ```
   *Usa el mismo email que usaste en GitHub*

### 3.2 Conectar tu Proyecto con GitHub

1. **En la terminal, dentro de tu proyecto:**
   ```bash
   # Inicializar Git
   git init
   
   # Agregar todos los archivos
   git add .
   
   # Hacer el primer "commit" (como una foto de tu código)
   git commit -m "Sitio web inicial de Mujeres Pet Sitter Chile"
   ```

2. **Conectar con GitHub:**
   - Ve a tu repositorio en GitHub
   - Copia la URL (algo como: `https://github.com/tu-usuario/mujeres-pet-sitter-chile.git`)
   
   ```bash
   # Conectar con GitHub (reemplaza con TU URL)
   git remote add origin https://github.com/TU-USUARIO/mujeres-pet-sitter-chile.git
   
   # Cambiar a la rama principal
   git branch -M main
   
   # Subir tu código
   git push -u origin main
   ```

3. **Si te pide usuario y contraseña:**
   - **Usuario**: Tu nombre de usuario de GitHub
   - **Contraseña**: Tu contraseña de GitHub
   
   *Nota: Si tienes problemas, puede que necesites un "Personal Access Token" - te explico más abajo*

4. **Verificar que se subió:**
   - Refresca tu página de GitHub
   - ¿Ves todos tus archivos? ✅ ¡Perfecto!

---

## 🌐 **PASO 4: Desplegar en Netlify (15 minutos)**

Netlify es como un hotel 5 estrellas para sitios web. ¡Y es gratis!

### 4.1 Crear Cuenta en Netlify

1. **Ir a Netlify:**
   - Ve a: [https://netlify.com](https://netlify.com)

2. **Registrarse:**
   - Clic en **"Sign up"**
   - Selecciona **"Sign up with GitHub"**
   - Autoriza a Netlify para acceder a tu GitHub
   - ¡Listo! Ya tienes cuenta

### 4.2 Conectar tu Sitio Web

1. **En el dashboard de Netlify:**
   - Clic en **"New site from Git"**
   - Selecciona **"GitHub"**
   - Autoriza si te lo pide

2. **Seleccionar tu repositorio:**
   - Busca `mujeres-pet-sitter-chile`
   - Clic en tu repositorio

3. **Configurar el despliegue:**
   - **Branch to deploy**: `main` (ya debería estar seleccionado)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - Clic en **"Deploy site"**

4. **¡Esperar la magia!**
   - Netlify construirá tu sitio (2-3 minutos)
   - Verás un progreso en tiempo real
   - Cuando termine, verás ✅ "Site is live"

### 4.3 Ver tu Sitio en Internet

1. **Obtener la URL:**
   - Netlify te dará una URL como: `https://amazing-cupcake-123456.netlify.app`
   - ¡Esa es la dirección de tu sitio web!

2. **Probar tu sitio:**
   - Clic en la URL
   - ¡Tu sitio web está en internet! 🎉
   - Compártela con quien quieras

---

## 🎨 **PASO 5: Personalizar tu Dominio (Opcional - 10 minutos)**

Si quieres una URL más bonita como `mujerespetsitter.cl`:

### 5.1 Cambiar el Nombre en Netlify (Gratis)

1. **En tu sitio de Netlify:**
   - Clic en **"Site settings"**
   - Clic en **"Change site name"**
   - Escribe: `mujeres-pet-sitter-chile`
   - Tu nueva URL será: `https://mujeres-pet-sitter-chile.netlify.app`

### 5.2 Comprar Dominio Personalizado (Opcional - $10-15 USD/año)

1. **Comprar dominio:**
   - Ve a [Namecheap.com](https://namecheap.com) o [GoDaddy.com](https://godaddy.com)
   - Busca: `mujerespetsitter.cl` o `mujerespetsitterchile.com`
   - Cómpralo (cuesta como $10-15 USD por año)

2. **Conectar con Netlify:**
   - En Netlify: **Site settings** → **Domain management**
   - Clic en **"Add custom domain"**
   - Ingresa tu dominio
   - Sigue las instrucciones para configurar DNS

---

## 🔄 **PASO 6: Actualizar tu Sitio Web (Futuro)**

Cuando quieras hacer cambios:

1. **Hacer cambios en tu código**
2. **Subir cambios a GitHub:**
   ```bash
   git add .
   git commit -m "Descripción de los cambios"
   git push
   ```
3. **¡Netlify actualizará automáticamente!** (2-3 minutos)

---

## 🆘 **SOLUCIÓN DE PROBLEMAS COMUNES**

### Problema 1: "Git no reconocido"
**Solución**: Instala Git desde [git-scm.com](https://git-scm.com)

### Problema 2: "Permission denied" en GitHub
**Solución**: Necesitas un Personal Access Token:
1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token → Selecciona "repo" → Generate
3. Usa este token como contraseña

### Problema 3: "Build failed" en Netlify
**Solución**: 
1. Verifica que `npm run build` funciona en tu computadora
2. Revisa los logs de error en Netlify
3. Asegúrate de que todos los archivos estén en GitHub

### Problema 4: El sitio se ve raro
**Solución**:
1. Limpia el caché del navegador (Ctrl+F5)
2. Verifica que todas las imágenes estén en la carpeta `public`

---

## 📞 **¿NECESITAS AYUDA?**

### Recursos Útiles:
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **GitHub Help**: [docs.github.com](https://docs.github.com)
- **Git Tutorial**: [git-scm.com/docs/gittutorial](https://git-scm.com/docs/gittutorial)

### Videos Tutoriales (YouTube):
- "Como usar GitHub para principiantes"
- "Deploy React app to Netlify"
- "Git y GitHub desde cero"

---

## ✅ **CHECKLIST FINAL**

Marca cada paso cuando lo completes:

**Preparación:**
- [ ] ✅ El sitio funciona en mi computadora (`npm run dev`)
- [ ] ✅ Tengo cuenta en GitHub
- [ ] ✅ Creé el repositorio en GitHub

**Subir Código:**
- [ ] ✅ Instalé Git en mi computadora
- [ ] ✅ Configuré Git con mi nombre y email
- [ ] ✅ Subí mi código a GitHub (`git push`)
- [ ] ✅ Veo todos mis archivos en GitHub

**Despliegue:**
- [ ] ✅ Creé cuenta en Netlify
- [ ] ✅ Conecté mi repositorio de GitHub
- [ ] ✅ Configuré el build (npm run build, dist)
- [ ] ✅ El sitio se desplegó exitosamente

**Verificación:**
- [ ] ✅ Mi sitio web funciona en internet
- [ ] ✅ Todas las páginas cargan correctamente
- [ ] ✅ Las imágenes se ven bien
- [ ] ✅ El formulario de contacto funciona
- [ ] ✅ El sitio se ve bien en móvil

**Opcional:**
- [ ] ✅ Cambié el nombre del sitio en Netlify
- [ ] ✅ Configuré dominio personalizado (si aplica)
- [ ] ✅ Configuré Google Analytics (si aplica)

---

## 🎉 **¡FELICITACIONES!**

¡Tu sitio web está en internet! Ahora cualquier persona en el mundo puede:
- Ver tus servicios de pet sitting
- Contactarte a través del formulario
- Conocer a tu equipo
- Leer los testimonios

**Tu sitio web profesional está listo para recibir clientes** 🐕🐱

---

## 📈 **PRÓXIMOS PASOS RECOMENDADOS**

1. **Compartir tu sitio:**
   - Redes sociales
   - WhatsApp Business
   - Tarjetas de presentación

2. **Optimizar para Google:**
   - Google My Business
   - Google Analytics
   - Google Search Console

3. **Marketing:**
   - Facebook Ads
   - Instagram
   - Volantes en veterinarias

¡Tu negocio de pet sitting está listo para crecer! 🚀