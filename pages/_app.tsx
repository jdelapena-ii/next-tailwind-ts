/* eslint-disable react/react-in-jsx-scope */
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
