# Configuración para Servidor Web Estático

## Build Output
El proyecto se construye en: `dist/nova-x2025-landing/browser`

## Comandos de Despliegue

### Build de Producción:
```bash
npm install
npm run build
```

### Servidor de Desarrollo:
```bash
npm start
```

## Configuración EasyPanel

**Build Command:**
```
npm install && npm run build
```

**Output Directory:**
```
dist/nova-x2025-landing/browser
```

**Node Version:**
```
20.x
```

**Framework:**
Static Site / Angular

## Archivos Importantes

- `dist/` - Carpeta de build (no incluida en Git)
- `public/assets/images/` - Imágenes del proyecto
- `angular.json` - Configuración de Angular

## Notas

- El proyecto está configurado para ser un sitio estático
- Todas las rutas se sirven desde el archivo `index.html`
- Las imágenes se encuentran en `public/assets/images/`
