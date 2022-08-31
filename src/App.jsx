import './App.css'
import Header from './Header.jsx';
import Content from './Content'
import Footer from './Footer'
import Employee from './Employee'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (<>
    <Header />
    <Employee />
    <Content />
    <Footer />
  </>
  )
}
