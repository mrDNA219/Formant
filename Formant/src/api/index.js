
const base_url = 'http://localhost:3000';

function createHeaders(token)
{
    return token ? {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      } : {
        'Content-Type': 'application/json',
      }
}


export const getAllPaints = async () => {
    try {
        const headers = createHeaders();
        return await fetch(`${base_url}/api/paints`, headers).then(response => response.json());
    } catch (error){
        console.error(error);
    }
};

export const createPaint = async ({...paint}) => {
    try{
        const headers = createHeaders();
        return await fetch(`${base_url}/api/paints`, {
            method: 'POST',
            headers,
            body: JSON.stringify(paint)
        }).then(response => response.json());
    } catch (error){
        console.error(error);
    }
};
