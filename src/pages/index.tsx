import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Patrianna Game Studio Task</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='main'>
        <section className='my-32'>
          <div className='container'>
            <div className='content md:max-w-xl space-y-4'>
              <h1 className='text-5xl'>Game Studio Task.</h1>
              <p>
                Welcome! Today, we shall be building a working game in
                React/Next.js.
              </p>
              <p>
                In this exercise, you will be creating a working game that
                allows players to guess whether the next card in the deck is red
                or black.
              </p>
              <p>
                The goal of this task is to assess your attention to detail,
                ability to create interactive UI elements, basic understanding
                of endpoints, and your thought process.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
