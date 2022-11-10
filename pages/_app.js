import MainLayout from '../components/layouts/mainLayout'
import '../styles/globals.css'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'


const queryClient = new QueryClient()


function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
    <MainLayout>

      <Component {...pageProps} />
    </MainLayout>
    </QueryClientProvider>
   
  
  )
}

export default MyApp
