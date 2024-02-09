import { bcrypt } from "bcrypt";


bcrypt.hash(process.env.BCRYPT_SECRET, 10, function (err, hash) {
  // Store hash in your password DB.
});
