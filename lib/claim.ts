export function normalizePhone(phone: string) {
  return phone
    .trim()
    .replace(/[\s()-]/g, "")
    .replace(/^\+91/, "");
}

export function validateClaim(name: string, phone: string) {
  const errors: { name?: string; phone?: string } = {};
  if (name.trim().length < 2 || name.trim().length > 80 || !/\p{L}/u.test(name))
    errors.name = `Please enter your name (atleast 2 characters).`;
  if (
    !/^[6-9]\d{9}$/.test(normalizePhone(phone)) ||
    /^(\d)\1{9}$/.test(normalizePhone(phone))
  )
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  return errors;
}
