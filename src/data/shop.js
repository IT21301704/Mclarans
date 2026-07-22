// Central shop settings — edit these to change where orders are sent.
export const shop = {
  name: 'Mclarans Cakes',
  // WhatsApp number in international format, digits only (country code + number).
  // TODO: replace with your real WhatsApp number.
  whatsapp: '94771234567',
  whatsappDisplay: '+94 77 123 4567',
  email: 'menurachamodh@gmail.com',
  address: 'Colombo, Sri Lanka',
  hours: 'Open daily 8.00 AM – 8.00 PM',
  leadTimeNote: 'Please order at least 2 days ahead for custom cakes.',
}

export const formatPrice = (value) =>
  `Rs. ${value.toLocaleString('en-LK')}`
