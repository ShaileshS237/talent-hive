import React, { useEffect, useState } from "react";
import TableData from "./TableData";
import Loader from "../Loader/Loader";
import supabase from "../../supabase/client";


export default function TableComponent() {
	const [candidateData,setcandidateData] = useState([]);
	const [loader,setLoader] = useState(true);

	useEffect(() => {
		fetchData();
	},[candidateData]);

	const fetchData = async () => {
		const {data,error} = await supabase.from('candidates').select('*');
		if(error) console.log(error);
		setcandidateData(data);
		setLoader(false);
	}

	return (
		<div className="py-10">
			{
				loader ? <Loader /> : <TableData candidateData = {candidateData}/>
			}
		</div>
	)
}
