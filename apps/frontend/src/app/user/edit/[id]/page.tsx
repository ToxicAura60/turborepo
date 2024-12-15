'use client'

import * as React from 'react'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Alert from '@mui/material/Alert';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRouter } from "next/navigation";
import CircularProgress from '@mui/material/CircularProgress';
import  Sidebar  from "@/app/components/sidebar";

import { useParams } from 'next/navigation';

export default function Page() {
  const { id } = useParams();

  const [email, setEmail] = React.useState('')
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')
  const [disabled, setDisabled] = React.useState(false)
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const router = useRouter();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/fetch-user/${id}`);
        if(!response.ok) {
          router.push('/')
        }
        const result = await response.json();
        
        setEmail(result.data.email);
      } catch (e) {
        setErrorMessage((e as Error).message)
        setError(true)
        router.push('/')
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, []); 



  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setError(false)
    setDisabled(true)
    setLoading(true)
    event.preventDefault()
    if (emailError || passwordError) {
      setLoading(false)
      setDisabled(false)
      return;
    }

    const formData = new FormData(event.currentTarget);
    var email = formData.get('email')
    var password = formData.get('password')
    try {
      const response = await fetch(`http://localhost:3000/api/update-user/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
  
      var jsonData = await response.json()
      if(response.ok) {
        router.push('/user')
        return
      }
     
      setError(true)
      setErrorMessage(jsonData.data.message)
      setLoading(false)
    } catch (e) {
      setError(true)
      setLoading(false)
      setDisabled(false)
      setErrorMessage((e as Error).message);
    }
  }

  const validateInputs = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };
  return (
    <Sidebar>
       <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                error={emailError}
                value={email}
                helperText={emailErrorMessage}
                onChange={(e) => {setEmail(e.target.value)}}
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
        
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
              disabled={disabled}
            >
              {loading ? <CircularProgress />:  'Sign in'}
            </Button>
            {error && <Alert severity="error">{errorMessage}</Alert>}
          </Box>
    </Sidebar>
  )
}