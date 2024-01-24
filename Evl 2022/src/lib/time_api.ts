import axios from 'axios';

export interface timeResponse {
    utc_datetime: Date,
    unixtime: number
}

const TIME_API_URL = "http://worldtimeapi.org/api/timezone";

export const getUtcAsync = async (region: string, city: string): Promise<timeResponse> => {
    const resp = await axios.get<timeResponse>(`${TIME_API_URL}/${region}/${city}`)

    return resp.data;
}
