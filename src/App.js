import MobileView from "./pages/mobileView";
import WebView from "./pages/webView";
import ResponsiveView from "./responsiveView";
import './assets/style/global.scss';
import './assets/icon/style.css';

function App() {
  return (
    <>

<ResponsiveView mobileView={<MobileView/>} webView={<WebView/>}/>

    </>
  );
}

export default App;