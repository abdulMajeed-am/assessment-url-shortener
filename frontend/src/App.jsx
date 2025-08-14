import React, { useState, useEffect } from 'react';
import {
  Container, TextField, Button, Typography, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper, Snackbar, IconButton, Box
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleShorten = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/urls/shorten', { original_url: url });
      setShortUrl(response.data.short_url);
      setError('');
      setOpenSnackbar(true);
      fetchHistory();
    } catch (err) {
      setError('Invalid URL or server error');
      setOpenSnackbar(true);
    }
  };

  const fetchHistory = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/urls/history');
      setUrls(response.data);
    } catch (err) {
      setError('Failed to fetch history');
      setOpenSnackbar(true);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setOpenSnackbar(true);
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        URL Shortener
      </Typography>
      <Box component="form" onSubmit={handleShorten} sx={{ mb: 4 }}>
        <TextField
          fullWidth
          label="Enter Long URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          margin="normal"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Shorten URL
        </Button>
      </Box>
      {shortUrl && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6">Shortened URL:</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ mr: 2 }}>
              <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
            </Typography>
            <IconButton onClick={copyToClipboard} color="primary">
              <ContentCopyIcon />
            </IconButton>
          </Box>
        </Box>
      )}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Original URL</TableCell>
              <TableCell>Short URL</TableCell>
              <TableCell>Clicks</TableCell>
              <TableCell>Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {urls.map((url) => (
              <TableRow key={url.short_code}>
                <TableCell>
                  <a href={url.original_url} target="_blank" rel="noopener noreferrer">
                    {url.original_url.length > 50 ? url.original_url.substring(0, 50) + '...' : url.original_url}
                  </a>
                </TableCell>
                <TableCell>
                  <a href={`http://localhost:8000/${url.short_code}`} target="_blank" rel="noopener noreferrer">
                    {`http://localhost:8000/${url.short_code}`}
                  </a>
                </TableCell>
                <TableCell>{url.clicks}</TableCell>
                <TableCell>{new Date(url.created_at).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message={error || 'Action completed successfully!'}
      />
    </Container>
  );
}

export default App;