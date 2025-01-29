/**
 * Classe de base pour une règle de validation.
 */
class FieldRuleValidator {
    /**
     * Crée une règle de validation.
     * @param {string} errorMessage - Message d'erreur à afficher si la validation échoue.
     */
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }

    /**
     * Méthode de validation si la méthode validate n'est pas implémenté dans la sous-class.
     * @param {*} value - La valeur à valider.
     * @throws {Error} Lance une erreur si la méthode validate n'est pas implémenté dans la sous-class.
     */
    validate(value) {
        throw new Error("La méthode 'validate' doit être implémentée");
    }
}

/**
 * Règle de validation pour un champ obligatoire.
 * Hérite de FieldRuleValidator.
 */
export class RequiredRule extends FieldRuleValidator {
    /**
     * Valide que la valeur n'est pas vide ou composée uniquement d'espaces.
     * @param {string} value - La valeur à valider.
     * @returns {boolean} Retourne `true` si la valeur est valide, sinon `false`.
     */
    validate(value) {
        return value && value.trim() !== "";
    }
}

/**
 * Règle de validation pour un champ email.
 * Hérite de FieldRuleValidator.
 */
export class EmailRule extends FieldRuleValidator {
    /**
     * Valide que la valeur est bien un email en utilisant un regex de validation.
     * @param {string} value - La valeur à valider.
     * @returns {boolean} Retourne `true` si la valeur est valide, sinon `false`.
     */
    validate(value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(value);
    }
}

/**
 * Règle de validation pour un champ qui doit avoir un minimum de caractère.
 * Hérite de FieldRuleValidator.
 */
export class MinLengthRule extends FieldRuleValidator {
    /**
     * 
     * @param {number} minlength - valeur minimum 
     * @param {*} errorMessage 
     */
    constructor(minLength, errorMessage) {
        super(errorMessage)
        this.minLength = minLength
    }
    /**
     * Valide que la valeur est bien un email en utilisant un regex de validation.
     * @param {string} value - La valeur à valider.
     * @returns {boolean} Retourne `true` si la valeur est valide, sinon `false`.
     */
    validate(value) {
        return value.length >= this.minLength;
    }
}

/**
 * Règle de validation pour un champ qui doit contenir seulement une valeur numerique.
 * Hérite de FieldRuleValidator.
 */
export class NumericRule extends FieldRuleValidator {
    /**
     * Valide que la valeur est un nombre.
     * @param {string} value - La valeur à valider.
     * @returns {boolean} Retourne `true` si la valeur est un nombre valide, sinon `false`.
     */
    validate(value) {
        const parsedValue = Number(value); // Convertit la chaîne en nombre - 
        return !isNaN(parsedValue); // Vérifie si le nombre est valide
    }
}

/**
 * Classe pour valider un champ de formulaire en appliquant plusieurs règles.
 */
export class FieldValidator {
    /**
     * Crée un validateur pour un champ spécifique.
     * @param {string} fieldName - Nom du champ à valider.
     * @param {FieldRuleValidator[]} rules - Liste des règles de validation à appliquer.
     */
    constructor(fieldName, rules = []) {
        this.fieldName = fieldName;
        this.rules = rules;
    }

    /**
     * Valide une valeur en appliquant toutes les règles associées au champ.
     * @param {string} value - La valeur à valider.
     * @returns {string|null} Retourne le message d'erreur de la première règle échouée, ou `null` si tout est valide.
     */
    validate(value) {
        for (const rule of this.rules) {
            if (!rule.validate(value)) {
                return rule.errorMessage;
            }
        }
        return null; // Aucun problème
    }
}
