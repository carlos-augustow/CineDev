const callingApi = async function getStaticPaths() {
      const api = "https://api.pexels.com/videos";
      const qtd_videos = 15;
      const page = 1;
      const res = await fetch(`${api}/popular?per_page=${qtd_videos}&page=${page}`, {
            headers: {
                  Authorization: "563492ad6f91700001000001ab6eb3dda42d46a8a0d200cb85026f38",
            },
      });
      const data = await res.json();
      const videos = data.videos;
      return {
            videos,
      };
};

export default callingApi;
