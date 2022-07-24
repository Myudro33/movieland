export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2e3698912fmsh05b5795bb64bfedp1bf372jsn9e991a24ced2',
		'X-RapidAPI-Host': '1mdb-data-searching.p.rapidapi.com'
	}
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6789654dc7msh5823a1eeb511a2bp1b7921jsnc3d619f7e365',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  }; 

  export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}