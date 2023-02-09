// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  guess: string
  isCorrect: boolean
  card: { value: string; suit: string }
  error?: string
}

// POST /api/make-spin
// Required fields in body: { guess: 'red' | 'black' }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Partial<Data>>
) {
  const { guess } = req.body

  if (!guess || (guess !== 'red' && guess !== 'black')) {
    return res
      .status(400)
      .json({ error: 'Invalid guess. Provide either "red" or "black".' })
  }

  try {
    const deck = await fetch(
      'https://deckofcardsapi.com/api/deck/new/draw/?count=1'
    )
    if (!deck.ok) {
      throw new Error(deck.statusText)
    }
    const deckJson = await deck.json()
    const card = deckJson.cards[0]

    const { value, suit } = card
    const isRed = suit === 'HEARTS' || suit === 'DIAMONDS'

    const isCorrect =
      (guess === 'red' && isRed) || (guess === 'black' && !isRed)

    return res.status(200).json({ guess, isCorrect, card: { value, suit } })
  } catch (error) {
    console.error('Error fetching deck :: ', error)
    res.status(500).json({ error: 'Error fetching deck. Check /api/make-spin' })
  }
}
