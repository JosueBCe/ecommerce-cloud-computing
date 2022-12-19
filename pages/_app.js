import '../styles/globals.css'
import { Amplify } from "aws-amplify"
import { AmplifyProvider } from "@aws-amplify/ui-react"
import config from "../src/aws-exports"
import {studioTheme} from "../src/ui-components"
import "@aws-amplify/ui-react/styles.css"


Amplify.configure({...config, ssr:true})

function MyApp({ Component, pageProps }) {
  return (<AmplifyProvider theme={studioTheme}> 
      <Component {...pageProps} />
    </AmplifyProvider>)
}

export default MyApp

