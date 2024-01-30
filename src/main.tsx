import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import App from './App.tsx';
import VideoScreen from './screens/video.tsx';
import TermsScreen from './screens/terms.tsx';
import TestScreen from './screens/test.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/VideoScreen" element={<VideoScreen />} />
      <Route path="/terms" element={<TermsScreen />} />
      <Route path='/test' element={<TestScreen />} />
    </Routes>
  </Router>,
);