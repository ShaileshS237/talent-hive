import React, { useEffect, useState } from "react";
import supabase from "../../supabase/client";

export default function TableComponent() {
	const [candidateData,setcandidateData] = useState([]);


	useEffect(() => {
		fetchData();
	},[]);

	const fetchData = async () => {
		const {data,error} = await supabase.from('candidates').select('*');
		if(error) console.log(error);
		setcandidateData(data);
	}

	return (
		<div className="grid my-14 text-center">
			<table>
				<thead>
					<tr>
						<th className="px-3">Id</th>
						<th className="px-3">Name</th>
						<th className="px-3">Email</th>
						<th className="px-3">Ph No.</th>
						<th className="px-3">Year Of Experience</th>
						<th className="px-3">Qualification</th>
						<th className="px-3">Previous Experience</th>
						<th className="px-3">Domain</th>
					</tr>
				</thead>
				<tbody>
					{candidateData.map((data) => (
						<tr key={data.id}>
							<td>{data.id}</td>
							<td>{data.name}</td>
							<td>{data.email}</td>
							<td>{data.number}</td>
							<td>{data.yoe}</td>
							<td>{data.qualification}</td>
							<td>{data.comp}</td>
							<td>{data.post}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
