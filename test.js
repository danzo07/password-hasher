// Le script de test utilise le module créé passwordHasher pour tester les fonctions.
const passwordHasher = require("./index");

// Example password
const plainPassword = "mySecurePassword123";

// Test hashPassword
passwordHasher
  .hashPassword(plainPassword)
  .then((hashedPassword) => {
    console.log("Hashed Password:", hashedPassword);

    // Test validatePassword
    return passwordHasher.validatePassword(plainPassword, hashedPassword);
  })
  .then((isMatch) => {
    console.log("Password Match:", isMatch);
  })
  .catch((error) => {
    console.error(error.message);
  });
