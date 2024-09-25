import React, { useEffect, useState } from "react";
import supabase from "../../supabase/client";

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
		<div className="grid my-14 text-center">
			<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" class="px-6 py-3">Id</th>
						<th scope="col" class="px-6 py-3">Name</th>
						<th scope="col" class="px-6 py-3">Email</th>
						<th scope="col" class="px-6 py-3">Ph No.</th>
						<th scope="col" class="px-6 py-3">Year Of Experience</th>
						<th scope="col" class="px-6 py-3">Qualification</th>
						<th scope="col" class="px-6 py-3">Previous Experience</th>
						<th scope="col" class="px-6 py-3">Domain</th>
						<th scope="col" class="px-6 py-3">Age</th>
					</tr>
				</thead>
				<tbody>
					{candidateData.map((data) => (
						<tr key={data.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td class="px-6 py-4">{data.id}</td>
							<td class="px-6 py-4">{data.name}</td>
							<td class="px-6 py-4">{data.email}</td>
							<td class="px-6 py-4">{data.number}</td>
							<td class="px-6 py-4">{data.yoe}</td>
							<td class="px-6 py-4">{data.qualification}</td>
							<td class="px-6 py-4">{data.comp}</td>
							<td class="px-6 py-4">{data.post}</td>
							<td class="px-6 py-4">{data.age}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
