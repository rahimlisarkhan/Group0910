export function isValidAZPhone(phone) {
  const azPhoneRegex =
    /^(?:\+994|994|0)(50|51|55|12|70|77|99|10|60|90|40|20)\d{7}$/;

  return azPhoneRegex.test(phone);
}

export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidWebsite(url) {
  const websiteRegex =
    /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/;

  return websiteRegex.test(url);
}
