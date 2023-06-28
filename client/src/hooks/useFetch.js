import { useEffect, useState } from "react";

export const useFetch = (url, options) => {
	const [data, setData] = useState();
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);
	console.log(options);
	useEffect(() => {
		setLoading(true);
		fetch(url, options ? options : {
			headers: {
				"content-type": "application/json"
			}
		})
			.then((response) => response.json())
			.then(setData)
			.catch(setError)
			.finally(() => setLoading(false));
	}, [url]);

	return { data, error, loading };
};

//Use it in other files by importing it from here and then using it like a hook, for example:
//const { data, loading, error } = useFetch(url);
//And use the individiual data for what should be shown on the page, 
//like a loading icon, error or the actual content
