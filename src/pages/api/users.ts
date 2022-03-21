import { NextApiRequest, NextApiResponse } from 'next'

export default (request, response) => {
  const users = [
    { id: 1, name: 'Vini' },
    { id: 2, name: 'Beca' },
    { id: 3, name: 'Chico' },
  ]

  return response.json(users)
}
