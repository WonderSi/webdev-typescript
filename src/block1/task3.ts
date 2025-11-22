type UserId = string & { readonly brand: unique symbol }

function isUserId(value: unknown): value is UserId {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

  return typeof value === 'string' && uuidRegex.test(value)
}

function getUserProfile(id: UserId) {
  console.log(`Fetching profile is user: ${id}`)
}

const ids = ['43981ab1-a12c-acd3-e34f-4563f78c90ad', '123456qwerty']

ids.forEach((id) => {
  isUserId(id) ? getUserProfile(id) : console.log(`Invalid: ${id}`)
})
