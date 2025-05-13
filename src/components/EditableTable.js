import React, { useState, useEffect, useRef } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { saveAs } from 'file-saver';
import ReactLoading from "react-loading";
import { Box, Select, InputLabel, FormControl, MenuItem, Grid, } from '@mui/material';


import BaseurlAdmin from "./BaseurlAdmin";
import { Slide, toast } from "react-toastify";
import Baseurl from "./Baseurl";
import { use } from "react";

const EditableTable = () => {
  const [data, setData] = useState([]);
  const [spinner, setSpinner] = useState(false);
  let [invoiceDataflag, setinvoiceDataflag] = useState(true);
  const [flag, setFlag] = useState("0");
  const clientref = useRef('')

  const [dept, setDept] = useState("");
  const [deptlist, setDeptList] = useState([]);



  const handleDept = (e) => {

    setFlag('1')

    clientref.current = e.target.value

    setDept(e.target.value);

    const fetchData = async () => {
      try {
        const response = await fetch(BaseurlAdmin + `igniteinvoice/${clientref.current}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const text = await response.text();
        if (!text) {
          throw new Error("Empty response from server");
        }

        const res = JSON.parse(text);
        setData(res)
        console.log(JSON.stringify(res) + "--------invoiceresp");
      } catch (error) {
        console.error("Error:", error.message);
      }
    };





    fetchData();

  }
  useEffect(() => {

    const fetchData1 = () => {
      fetch(Baseurl + "deptlist")
        .then((data) => {
          const res = data.json();

          return res
        }).then((res) => {
          setDeptList(res)
          console.log("resss", res)
        }).catch(e => {
          console.log("error", e)
        })
    }
    fetchData1();





  }, []);







  const handleInputChange = (e, rowIndex, field) => {
    const updatedData = [...data];
    updatedData[rowIndex][field] = e.target.value;
    setData(updatedData);
  };

  const handleSave = (row) => {
    console.log("Saved Row Data:", row);
  };






  const [newRow, setNewRow] = useState({
    client_id: "",
    total_amount: "",
    quarter: "",
    invoice_no: "",
    invoice_date: "",
    received_amount: "",
    payment_status: "",
    utr_no: "",
    payment_date: "",
    year: ""
  });

  const handleNewRowChange = (e, field) => {
    const value = e.target.value;
    let updatedRow = { ...newRow, [field]: value };

    // Update `quarter` by concatenating quarter and year when both are selected
    if (field === "year" || field === "quarter") {
      const concatenatedQuarter = `${updatedRow.quarter || ""}-${updatedRow.year || ""}`;
      // Remove extra hyphens and sanitize the value
      updatedRow.quarter = concatenatedQuarter.replace(/-+/g, "-").replace(/^-|-$/g, "");
    }

    setNewRow(updatedRow);
  };






  const handleInsert = async () => {
    try {
      // Merge the fetched `dept` value into `newRow` payload
      const payload = {
        ...newRow,
        client_id: dept, // Use `dept` value as `client_id`
      };

      console.log("Payload being sent:", payload); // Debug: Check the payload

      const response = await fetch(`${BaseurlAdmin}invoiceform`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(payload),
      });
      alert("Insert successfully")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
     alert("Insert Result:", result);

      if (result.success) {
        // toast.success("Record inserted successfully!", { transition: Slide });

        // Add the new row with the `dept` value to the table
        setData([...data, { ...newRow, dept, id: result.insertedId || data.length + 1 }]);

        // Reset the `newRow` state
        setNewRow({
          client_id: "",
          total_amount: "",
          quarter: "",
          invoice_no: "",
          invoice_date: "",
          received_amount: "",
          payment_status: "",
          utr_no: "",
          payment_date: "",
        });

        
      } else {
        // toast.error("Failed to insert record: " + result.message, { transition: Slide });
      }
    } catch (error) {
      // toast.error(`Error inserting record: ${error.message}`, { transition: Slide });
      // console.error("Error:", error.message);
    }
  };

  if (flag == '0') {
    return (
      <>

        <Grid container spacing={3}>
          <Grid item lg={6}>
            <div align="right">

              <Box sx={{ minWidth: 100 }}>
                <FormControl style={{ minWidth: 200 }} size='small'>
                  <InputLabel id="demo-simple-select-label">Department List</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Department List"
                    onChange={handleDept}

                  >

                    {deptlist.map((item, index) => (
                      <MenuItem key={index} value={item.username} >
                        {item.dept_name}
                      </MenuItem>
                    ))

                    }

                  </Select>
                </FormControl>
              </Box>
            </div>
          </Grid>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

        </Grid>

      </>
    );
  }
  else if (flag == '1') {
    return (
      <>









        <Grid container spacing={3}>
          <Grid item lg={6}>
            <div align="right">

              <Box sx={{ minWidth: 100 }}>
                <FormControl style={{ minWidth: 200 }} size='small'>
                  <InputLabel id="demo-simple-select-label">Department List</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Department List"
                    onChange={handleDept}

                  >

                    {deptlist.map((item, index) => (
                      <MenuItem key={index} value={item.username} >
                        {item.dept_name}
                      </MenuItem>
                    ))

                    }

                  </Select>
                </FormControl>
              </Box>
            </div>
          </Grid>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

        </Grid>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Client ID</TableCell>
                <TableCell>Total Amount</TableCell>
                <TableCell>Quarter</TableCell>
                <TableCell>Invoice No</TableCell>
                <TableCell>Invoice Date</TableCell>
                <TableCell>Received Amount</TableCell>
                <TableCell>Payment Status</TableCell>
                <TableCell>UTR No</TableCell>
                <TableCell>Payment Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>


              {

                data
                  .map((row, index) => (
                    <TableRow key={row.invoice_id}>
                      <TableCell>
                        <TextField
                          value={row.client_id}
                          onChange={(e) => handleInputChange(e, index, "client_id")}
                          variant="outlined"
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          value={row.total_amount}
                          onChange={(e) => handleInputChange(e, index, "total_amount")}
                          variant="outlined"
                          size="small"
                          type="number"
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          value={row.quarter}
                          onChange={(e) => handleInputChange(e, index, "quarter")}
                          variant="outlined"
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          value={row.invoice_no}
                          onChange={(e) => handleInputChange(e, index, "invoice_no")}
                          variant="outlined"
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          value={row.invoice_date}
                          onChange={(e) => handleInputChange(e, index, "invoice_date")}
                          variant="outlined"
                          size="small"
                          type="date"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          value={row.received_amount}
                          onChange={(e) =>
                            handleInputChange(e, index, "received_amount")
                          }
                          variant="outlined"
                          size="small"
                          type="number"
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          value={row.payment_status}
                          onChange={(e) =>
                            handleInputChange(e, index, "payment_status")
                          }
                          variant="outlined"
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          value={row.utr_no}
                          onChange={(e) => handleInputChange(e, index, "utr_no")}
                          variant="outlined"
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          value={row.payment_date}
                          onChange={(e) => handleInputChange(e, index, "payment_date")}
                          variant="outlined"
                          size="small"
                          type="date"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleSave(row)}
                        >
                          Save
                        </Button>
                      </TableCell>
                      <TableCell>

                      </TableCell>
                    </TableRow>



                  ))
              }

              {Object.keys(newRow).map((field) => (
                <TableCell key={field}>
                  {field === "client_id" ? (
                    <TextField
                      value={dept} // Display the current client_id
                      variant="outlined"
                      size="small"
                      disabled // Makes the field uneditable
                    />
                  ) : field === "payment_status" ? (
                    <FormControl variant="outlined" size="small" fullWidth>
                      <Select
                        value={newRow[field]}
                        onChange={(e) => handleNewRowChange(e, field)}
                      >
                        <MenuItem value="Paid">Paid</MenuItem>
                        <MenuItem value="Pending">Pending</MenuItem>
                      </Select>
                    </FormControl>
                  ) : field === "quarter" ? (
                    // <div style={{ display: "flex", gap: "8px" }}>
                    //   <FormControl variant="outlined" size="small" style={{ flex: 1 }}>
                    //     <Select
                    //       value={newRow[field]}
                    //       onChange={(e) => handleNewRowChange(e, field)}
                    //     >
                    //       <MenuItem value="01-04">Q1</MenuItem>
                    //       <MenuItem value="01-07">Q2</MenuItem>
                    //       <MenuItem value="01-10">Q3</MenuItem>
                    //       <MenuItem value="01-01">Q4</MenuItem>
                    //     </Select>
                    //   </FormControl>
                    //   <FormControl variant="outlined" size="small" style={{ flex: 1 }}>
                    //     <Select
                    //       value={newRow.year || ""}
                    //       onChange={(e) => handleNewRowChange(e, field)}
                    //     >
                    //       {Array.from({ length: 5 }, (_, i) => {
                    //         const year = new Date().getFullYear() - i;
                    //         return (
                    //           <MenuItem key={year} value={year}>
                    //             {year}
                    //           </MenuItem>
                    //         );
                    //       })}
                    //     </Select>
                    //   </FormControl>
                    // </div>



                    <div style={{ display: "flex", gap: "8px" }}>
                      <FormControl variant="outlined" size="small" style={{ flex: 1 }}>
                        <Select
                          value={newRow.quarter.split("-")[0] || ""} // Get the quarter part
                          onChange={(e) => handleNewRowChange(e, "quarter")}
                        >
                          <MenuItem value="01-04">Q1</MenuItem>
                          <MenuItem value="01-07">Q2</MenuItem>
                          <MenuItem value="01-10">Q3</MenuItem>
                          <MenuItem value="01-01">Q4</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl variant="outlined" size="small" style={{ flex: 1 }}>
                        <Select
                          value={newRow.year || ""}
                          onChange={(e) => handleNewRowChange(e, "year")}
                        >
                          {Array.from({ length: 5 }, (_, i) => {
                            const year = new Date().getFullYear() - i;
                            return (
                              <MenuItem key={year} value={year}>
                                {year}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </div>

                  )
                    // : field === "year" ? (
                    //   <FormControl
                    //     variant="outlined"
                    //     size="small"
                    //     style={{ width: "150px" }} // Adjust width as needed
                    //   >
                    //     <Select
                    //       value={newRow[field] || ""}
                    //       onChange={(e) => handleNewRowChange(e, field)}
                    //     >
                    //       {Array.from({ length: 5 }, (_, i) => {
                    //         const year = new Date().getFullYear() - i;
                    //         return (
                    //           <MenuItem key={year} value={year}>
                    //             {year}
                    //           </MenuItem>
                    //         );
                    //       })}
                    //     </Select>
                    //   </FormControl>
                    // )

                    : field === 'total_amount' || field === 'invoice_no' || field === 'received_amount' || field === 'utr_no' ? (
                      <TextField
                        value={newRow[field]}
                        onChange={(e) => handleNewRowChange(e, field)}
                        variant="outlined"
                        size="small"
                        type="text"
                      />
                    ) : field === 'invoice_date' || field === 'payment_date' ? (
                      <TextField
                        value={newRow[field]}
                        onChange={(e) => handleNewRowChange(e, field)}
                        variant="outlined"
                        size="small"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                      />
                    ) : (
                      <Button
                        variant="contained"
                        color="success"
                        onClick={handleInsert}
                      >
                        Insert
                      </Button>
                    )}
                </TableCell>
              ))}



            </TableBody>
          </Table>
        </TableContainer>


      </>
    );
  }
};

export default EditableTable;
