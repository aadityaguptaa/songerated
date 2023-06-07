import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const UHMovieListFull = (props) => {
  console.log(props.uid);
  

  return (
    <Box
      component="main"
      sx={{ bgcolor: "transparent", margin: "auto", paddingTop: "10vh",  width:'100hw', height:'100vh',   overflowY: 'auto' }}
    >
      <TableContainer component={Paper} sx={{padding:'16px',}}>
      <Typography sx={{ textAlign:"center"}} variant="h6">Your Favourite movies</Typography>

        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="right">Movie Name</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.tabledata?.map((movie) => (
              <StyledTableRow key={movie.id}>

                <StyledTableCell component="th" scope="row">
                  {movie.id}
                </StyledTableCell>
                <StyledTableCell>{movie.Name}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </Box>
    
  );
};

export default UHMovieListFull;
