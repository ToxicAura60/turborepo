'use client'

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { doc, getFirestore, onSnapshot } from 'firebase/firestore';


import Sidebar from "@/app/components/sidebar";
import { User } from '../app/model/user'


export default function Page() {
  const [users, setUsers] = React.useState<User[]>([]);
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')


  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/fetch-user`);
        const result = await response.json();
        setUsers(result.data);
      } catch (e) {
      
        setError(true)
        setErrorMessage((e as Error).message)
        setLoading(false)
      
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, []);


  return (
    <Sidebar>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">PhotoURL</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.email}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.displayName || 'No Name'}
              </TableCell>
              <TableCell align="right"> {user.email || 'No Email'}</TableCell>
              <TableCell align="right">{user.phone || 'No Phone'}</TableCell>
              <TableCell align="right">{user.photoURL || 'No Photo'}</TableCell>
              <TableCell align="right"> <IconButton aria-label="delete" href='/edit'><EditIcon /></IconButton></TableCell>

            </TableRow>
))}
          </TableBody>
        </Table>
      </TableContainer>
    </Sidebar>
  )
}