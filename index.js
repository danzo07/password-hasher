//Le module utilise la bibliothèque bcrypt pour le hachage sécurisé des mots de passe.
const bcrypt = require("bcrypt");

// La fonction hashPassword prend un mot de passe en clair et renvoie le mot de passe haché.
const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error(`Error hashing password: ${error.message}`);
  }
};

// La fonction validatePassword prend un mot de passe en clair et un mot de passe haché, puis vérifie s'ils correspondent.
const validatePassword = async (password, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    throw new Error(`Error validating password: ${error.message}`);
  }
};

// Export functions
module.exports = {
  hashPassword,
  validatePassword,
};
