import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Overview from './pages/Overview';
import HighlightData from './pages/HighlightData';
import CoreFeatures from './pages/CoreFeatures';
import Details from './pages/Details';
import Benchmark from './pages/Benchmark';
import Download from './pages/Download';
import Research from './pages/Research';
import Contributors from './pages/Contributors';
import Contact from './pages/Contact';
import Demo from './pages/Demo';

function App() {
  return (
    <Box className="App">
      <Navbar />
      <Box component="main">
        <Home />
        <Demo />
        <Overview />
        <HighlightData />
        <CoreFeatures />
        <Details />
        <Benchmark />
        <Download />
        <Research />
        <Contributors />
        <Contact />
      </Box>
    </Box>
  );
}

export default App;
