import React, { useRef, useEffect, useState } from 'react';
import { Box, Dialog, LinearProgress, Typography, IconButton } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import * as SPLAT from 'gsplat';

const SplatViewer = ({ height = 600, width = '100%' }) => {
  const canvasRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadingOpen, setLoadingOpen] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    
    // Initialize SPLAT components
    const renderer = new SPLAT.WebGLRenderer(canvas);
    renderer.addProgram(new SPLAT.VideoRenderProgram(renderer));

    const scene = new SPLAT.Scene();
    const camera = new SPLAT.Camera();
    const controls = new SPLAT.OrbitControls(camera, canvas);

    // Store refs
    rendererRef.current = renderer;
    sceneRef.current = scene;
    cameraRef.current = camera;
    controlsRef.current = controls;

    // Load default scene
    loadDefaultScene();

    // Handle resize
    const handleResize = () => {
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };

    // Animation loop
    const frame = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(frame);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    requestAnimationFrame(frame);

    // File drop handling
    const handleDrop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      if (e.dataTransfer?.files?.length > 0) {
        selectFile(e.dataTransfer.files[0]);
      }
    };

    const handleDragOver = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    canvas.addEventListener('drop', handleDrop);
    canvas.addEventListener('dragover', handleDragOver);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('drop', handleDrop);
      canvas.removeEventListener('dragover', handleDragOver);
    };
  }, []);

  const loadDefaultScene = async () => {
    if (!sceneRef.current || !cameraRef.current || !controlsRef.current) return;
    
    try {
      setLoading(true);
      setLoadingOpen(true);
      setProgress(0);

      const url = "https://huggingface.co/datasets/dylanebert/3dgs/resolve/main/4d/flame/flame.splatv";
      
      await SPLAT.SplatvLoader.LoadAsync(
        url, 
        sceneRef.current, 
        cameraRef.current, 
        (progressValue) => {
          setProgress(progressValue * 100);
        }
      );

      controlsRef.current.setCameraTarget(
        cameraRef.current.position.add(cameraRef.current.forward.multiply(5))
      );
      
      setLoadingOpen(false);
    } catch (error) {
      console.error('Failed to load default scene:', error);
      setLoadingOpen(false);
    } finally {
      setLoading(false);
    }
  };

  const selectFile = async (file) => {
    if (loading || !sceneRef.current || !cameraRef.current) return;
    
    if (file.name.endsWith('.splatv')) {
      try {
        setLoading(true);
        setLoadingOpen(true);
        setProgress(0);

        sceneRef.current.reset();
        
        await SPLAT.SplatvLoader.LoadFromFileAsync(
          file, 
          sceneRef.current, 
          cameraRef.current, 
          (progressValue) => {
            setProgress(progressValue * 100);
          }
        );
        
        setLoadingOpen(false);
      } catch (error) {
        console.error('Failed to load file:', error);
        setLoadingOpen(false);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      selectFile(file);
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: width,
        height: height,
        border: '2px dashed #ccc',
        borderRadius: 2,
        overflow: 'hidden',
        '&:hover': {
          borderColor: '#43ea6d',
        },
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
      
      {/* File upload overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          zIndex: 10,
        }}
      >
        <input
          accept=".splatv"
          style={{ display: 'none' }}
          id="file-upload"
          type="file"
          onChange={handleFileUpload}
        />
        <label htmlFor="file-upload">
          <IconButton
            component="span"
            sx={{
              bgcolor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.8)',
              },
            }}
          >
            <CloudUpload />
          </IconButton>
        </label>
      </Box>

      {/* Loading dialog */}
      <Dialog
        open={loadingOpen}
        PaperProps={{
          sx: {
            padding: 3,
            minWidth: 300,
          },
        }}
      >
        <Typography variant="h6" gutterBottom>
          Loading 3D Scene...
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={progress} 
          sx={{ mb: 2 }}
        />
        <Typography variant="body2" color="text.secondary">
          {Math.round(progress)}% complete
        </Typography>
      </Dialog>
    </Box>
  );
};

export default SplatViewer; 