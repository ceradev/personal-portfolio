# Configuración de Resend para el Formulario de Contacto

## 📧 Configuración de Resend

### 1. Crear cuenta en Resend
1. Ve a [resend.com](https://resend.com)
2. Crea una cuenta gratuita
3. Verifica tu email

### 2. Obtener API Key
1. En el dashboard de Resend, ve a "API Keys"
2. Crea una nueva API key
3. Copia la clave generada

### 3. Configurar Variables de Entorno
Crea un archivo `.env.local` en la raíz del proyecto con:

```env
# Resend Configuration
RESEND_API_KEY=tu_api_key_aqui

# Email Configuration
CONTACT_EMAIL=tu_email@ejemplo.com
FROM_EMAIL=onboarding@resend.dev
```

### 4. Verificar Dominio (Opcional pero Recomendado)
Para usar tu propio dominio en lugar de `onboarding@resend.dev`:

1. En Resend, ve a "Domains"
2. Añade tu dominio
3. Configura los registros DNS
4. Actualiza `FROM_EMAIL` en `.env.local`

### 5. Personalizar Email de Destino
En `app/api/contact/route.ts`, línea 20, cambia:
```typescript
to: ['tu_email@ejemplo.com'],
```

## 🚀 Funcionalidades Implementadas

### ✅ Características del Formulario
- **Validación completa** de todos los campos
- **Envío real de emails** usando Resend
- **Diseño responsive** y animaciones
- **Estados de carga** y feedback visual
- **Manejo de errores** robusto

### ✅ Características del Email
- **Template HTML profesional** con tu branding
- **Información completa** del contacto
- **Reply-to** configurado para responder directamente
- **Timestamp** con zona horaria española
- **Diseño responsive** para móviles

### ✅ Seguridad
- **Validación del lado servidor**
- **Sanitización de datos**
- **Rate limiting** (implementar si es necesario)
- **CORS** configurado correctamente

## 🔧 Personalización

### Cambiar el Template del Email
Edita el HTML en `app/api/contact/route.ts` líneas 25-65.

### Añadir Campos Adicionales
1. Actualiza la interfaz `FormData` en `contact-form.tsx`
2. Añade el campo en `contact-form-fields.tsx`
3. Actualiza la validación en `handleSubmit`
4. Modifica el template del email

### Configurar Notificaciones Adicionales
Puedes añadir:
- Notificación por Slack
- Guardar en base de datos
- Envío de confirmación al usuario

## 📊 Límites de Resend

### Plan Gratuito
- **3,000 emails/mes**
- **100 emails/día**
- **Dominio verificado requerido** para producción

### Plan Pro ($20/mes)
- **50,000 emails/mes**
- **Sin límite diario**
- **Soporte prioritario**

## 🐛 Troubleshooting

### Error: "Invalid API Key"
- Verifica que `RESEND_API_KEY` esté correctamente configurado
- Asegúrate de que no haya espacios extra en el `.env.local`

### Error: "Domain not verified"
- Usa `onboarding@resend.dev` para pruebas
- O verifica tu dominio en Resend

### Emails no llegan
- Revisa la carpeta de spam
- Verifica que el email de destino sea correcto
- Revisa los logs de Resend en el dashboard

## 📝 Próximos Pasos

1. **Configurar Resend** con tu API key
2. **Probar el formulario** en desarrollo
3. **Verificar dominio** para producción
4. **Monitorear** el dashboard de Resend
5. **Considerar** rate limiting para producción
