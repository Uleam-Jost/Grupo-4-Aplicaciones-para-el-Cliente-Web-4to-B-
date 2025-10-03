/**
 * @typedef {Object} ValidationResult
 * @property {boolean} isValid - Indica si la validacion fue exitosa.
 * @property {string} [errorMessage] - Mensaje de error si la validacion falla.
 * @property {string} [errorCode] - Codigo corto que identifica el error.
 * @property {Object} [parameters] - Parametros usados en la validacion.
 */

// Verifica que un campo no este vacio (ejemplo: campo "usuario" en GamesGauges)
function validarRequerido(value) {
    const isValid = value.trim().length > 0;
    return {
        isValid,
        errorMessage: isValid ? null : "El campo es obligatorio.",
        errorCode: isValid ? null : "REQUIRED",
        parameters: { value }
    };
}

// Verifica que el formato de email sea valido (ejemplo: registro de usuario en GamesGauges)
function validarFormatoEmail(value) {
    const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const isValid = regex.test(value);
    return {
        isValid,
        errorMessage: isValid ? null : "El correo electronico no es valido.",
        errorCode: isValid ? null : "INVALID_EMAIL_FORMAT",
        parameters: { value, regexUsed: regex.toString() }
    };
}

// Valida longitud minima y maxima (ejemplo: contraseña de usuario)
function validarLongitud(value, min, max) {
    const isValid = value.length >= min && value.length <= max;
    return {
        isValid,
        errorMessage: isValid ? null : `La longitud debe estar entre ${min} y ${max} caracteres.`,
        errorCode: isValid ? null : "INVALID_LENGTH",
        parameters: { value, min, max }
    };
}
