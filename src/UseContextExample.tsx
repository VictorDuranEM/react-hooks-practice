import FunctionContextComponent from './FunctionContextComponent';
import { ThemeProvider } from './ThemeProvider';


export default function App() {
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
      
    </>
  )

}
