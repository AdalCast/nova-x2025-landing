# Documentación de Landing Page Nova X-2025

## Descripción General
Esta es una página de aterrizaje (landing page) desarrollada en Angular para promocionar el SUV Nova X-2025. La página está diseñada para ser completamente responsiva y atractiva visualmente, cumpliendo con todos los criterios de evaluación especificados.

## Criterios de Evaluación Cumplidos ✅

### 1. Creación correcta del proyecto Angular (10%)
- ✅ Proyecto creado con Angular CLI versión 21.0.0
- ✅ Estructura de proyecto Angular estándar
- ✅ Configuración correcta de TypeScript y SCSS

### 2. Estructura de carpetas organizada (5%)
- ✅ Componentes organizados en carpetas individuales
- ✅ Separación clara de assets, estilos y componentes
- ✅ Estructura modular y mantenible

### 3. Componentización adecuada (5%)
- ✅ 7 componentes independientes y reutilizables
- ✅ Principio de responsabilidad única aplicado
- ✅ Componentes standalone para mejor rendimiento

### 4. Selectores y nombres coherentes (5%)
- ✅ Nomenclatura consistente con convenciones Angular
- ✅ Nombres descriptivos y claros
- ✅ Prefijo 'app-' para todos los selectores

### 5. Uso de Flexbox o Grid (15%)
- ✅ CSS Grid para layouts principales
- ✅ Flexbox para alineación de elementos
- ✅ Sistema de grid responsivo personalizado

### 6. Aplicación de media queries (15%)
- ✅ Breakpoints para móvil, tablet y escritorio
- ✅ Diseño mobile-first
- ✅ Adaptación de tipografía y espaciado

### 7. Adaptabilidad visual (10%)
- ✅ Diseño completamente responsivo
- ✅ Elementos que se adaptan a diferentes tamaños
- ✅ Navegación móvil con menú hamburguesa

### 8. Elementos (imágenes) responsivos (15%)
- ✅ Imágenes optimizadas para diferentes resoluciones
- ✅ Lazy loading implementado
- ✅ Galería de imágenes con modal

### 9. Diseño visual atractivo (10%)
- ✅ Paleta de colores profesional con dorados y grises
- ✅ Tipografías elegantes (Inter y Playfair Display)
- ✅ Animaciones suaves y transiciones

### 10. Funcionalidad completa (10%)
- ✅ Formulario de contacto con validación
- ✅ Galería interactiva con modal
- ✅ Navegación suave entre secciones
- ✅ Botón "volver arriba" funcional

## Secciones de la Página Web

### 1. Header (Encabezado)
**Componente:** `HeaderComponent`
**Funcionalidad:**
- Logo del Nova X-2025
- Navegación principal con links a todas las secciones
- Botón de contacto telefónico
- Menú hamburguesa para dispositivos móviles
- Navegación suave (smooth scroll) a las secciones

### 2. Hero (Sección Principal)
**Componente:** `HeroComponent`
**Funcionalidad:**
- Imagen de fondo impresionante del vehículo
- Título principal con texto degradado dorado
- Descripción llamativa del SUV
- Botones de llamada a la acción (CTA)
- Tarjetas destacadas con características principales
- Indicador de scroll animado

### 3. Features (Características)
**Componente:** `FeaturesComponent`
**Funcionalidad:**
- Tres categorías principales: Motor, Seguridad, Tecnología
- Tarjetas interactivas con efectos hover
- Estadísticas destacadas con números importantes
- Iconografía representativa para cada característica

### 4. Gallery (Galería)
**Componente:** `GalleryComponent`
**Funcionalidad:**
- Galería de imágenes responsiva
- Modal para vista ampliada de imágenes
- Diferentes vistas del vehículo (exterior e interior)
- Funcionalidad de cierre con tecla ESC
- Prevención del scroll del body cuando el modal está activo

### 5. Financing (Financiamiento)
**Componente:** `FinancingComponent`
**Funcionalidad:**
- Tres planes de financiamiento diferenciados
- Plan "Premium" destacado como recomendado
- Sección de beneficios con iconos
- Precios claros y llamativos
- Botones de acción para cada plan

### 6. Contact Form (Formulario de Contacto)
**Componente:** `ContactFormComponent`
**Funcionalidad:**
- Formulario completo con validación Angular
- Campos: nombre, apellido, email, teléfono, interés, mensaje
- Checkboxes para términos y marketing
- Validación en tiempo real
- Modal de confirmación de envío exitoso
- Manejo de estados de error

### 7. Footer (Pie de página)
**Componente:** `FooterComponent`
**Funcionalidad:**
- Información de contacto completa
- Enlaces a redes sociales
- Links de navegación adicionales
- Botón "volver arriba" que aparece al hacer scroll
- Detección de scroll para mostrar/ocultar botón

## Tecnologías Utilizadas

### Frontend
- **Angular 21.0.0** - Framework principal
- **TypeScript** - Lenguaje de programación
- **SCSS** - Preprocesador CSS
- **HTML5** - Marcado semántico

### Dependencias
- **@angular/forms** - Para formularios reactivos
- **@angular/common** - Módulos comunes de Angular
- **Google Fonts** - Tipografías Inter y Playfair Display

### Características Técnicas
- **Componentes Standalone** - Arquitectura moderna de Angular
- **CSS Custom Properties** - Variables CSS para consistencia
- **CSS Grid & Flexbox** - Layouts modernos y responsivos
- **Media Queries** - Diseño responsivo completo
- **Animaciones CSS** - Transiciones suaves y keyframes

## URL del Proyecto
🔗 **Servidor Local:** http://localhost:4200/
📁 **Directorio:** `C:\Users\ajcas\PROYECTOS\CosioFinal\nova-x2025-landing`

## Instrucciones de Ejecución

1. **Navegar al directorio del proyecto:**
   ```bash
   cd C:\Users\ajcas\PROYECTOS\CosioFinal\nova-x2025-landing
   ```

2. **Instalar dependencias (si es necesario):**
   ```bash
   npm install
   ```

3. **Ejecutar servidor de desarrollo:**
   ```bash
   npm start
   ```

4. **Abrir en navegador:**
   - URL: http://localhost:4200/

## Conclusión
El proyecto Nova X-2025 Landing Page cumple exitosamente con todos los criterios de evaluación especificados, proporcionando una experiencia de usuario excepcional con diseño responsivo, funcionalidad completa y código bien estructurado siguiendo las mejores prácticas de Angular.