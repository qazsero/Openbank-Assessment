import * as yup from 'yup'

/**
 * Esquema para el formulario del registro del usuario
 * */

const ConfirmPasswordSchema = yup.object().shape({
  pass: yup
    .string()
    .required('Contraseña es un campo requerido')
    .min(8, 'Su contraseña debe tener al menos 8 caracteres')
    .max(24, 'Su contraseña no debe tener más de 24 caracteres')
    .matches(/(?=.*\d)(?=.*[A-Z])/, 'Su contraseña debe tener al menos 1 número y 1 mayúscula'),
  repeatPass: yup
    .string()
    .required('Repetir contraseña es un campo requerido')
    .oneOf([yup.ref('pass'), null], 'Las contraseñas no coinciden'),
  hint: yup
    .string()
    .max(255, 'Su pista excede el máximo permitido')
})

export default ConfirmPasswordSchema
