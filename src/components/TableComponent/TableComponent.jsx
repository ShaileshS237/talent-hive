import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import supabase from "../../supabase/client";

const columns = [
	{ field: 'id', headerName: 'ID', width: 70 },
	{ field: 'name', headerName: 'NAME', width: 130 },
	{ field: 'email', headerName: 'EMAIL', width: 220 },
	{field: 'age',headerName: 'AGE',type: 'number',width: 50,},
	{ field: 'date', headerName: 'DOB', width: 110 },
	{ field: 'number', headerName: 'PHONE NO.', width: 110 },
	{ field: 'yoe', headerName: 'EXP', width: 50 },
	{ field: 'resume', headerName: 'RESUME', width: 190 },
	{ field: 'comp', headerName: 'PREVIOUS EXP', width: 120 },
	{ field: 'qualification', headerName: 'QUALIFICATION', width: 130 },
	{ field: 'post', headerName: 'DOMAIN', width: 80 },
	{ field: 'github', headerName: 'GITHUB', width: 190 },
	{ field: 'linkedin', headerName: 'LINKEDIN', width: 190 }
];

const paginationModel = { page: 0, pageSize: 6 };

export default function TableComponent() {
	const [candidateData,setcandidateData] = useState([]);


	useEffect(() => {
		fetchData();
	},[candidateData]);

	const fetchData = async () => {
		const {data,error} = await supabase.from('candidates').select('*');
		if(error) console.log(error);
		setcandidateData(data);
	}

	return (
		<div className="py-10">
			<Paper sx={{
          height: '100%',
          width: '100%',
          maxWidth: 1240,
          overflow: 'auto',  // Enable horizontal scrolling
          margin: '0 auto'  // Center the table
        }}>
				<DataGrid
					rows={candidateData}
					columns={columns}
					initialState={{ pagination: { paginationModel } }}
					pageSizeOptions={[6,8]}
					checkboxSelection
					sx={{ border: 0 }}
				/>
			</Paper>
		</div>
	)
}
