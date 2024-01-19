import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import App from './App.tsx';
import VideoScreen from './screens/VideoScreen';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/VideoScreen" element={<VideoScreen />} />
    </Routes>
  </Router>,
);