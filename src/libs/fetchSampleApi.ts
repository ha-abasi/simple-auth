import ResultModel from "@/models/result.model";

export const fetchSampleApi = async () : Promise<ResultModel | null> => {
    try {
        const headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*'); // allow cross-origin request
        headers.append('Content-Type', 'application/json'); // specify content type


        const response = await fetch('https://randomuser.me/api/?results=1&nat=us',
            { mode: 'cors', headers }
        );

        const data = await response.json();
         // assuming only one result for simplicity!
        return data.results[0] as ResultModel;
    } catch (error) {
        console.error(error);
        return null;
    }

}