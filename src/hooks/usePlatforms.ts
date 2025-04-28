import useData from "./useData";

interface Platforms {
  id: string;
  name: string;
  slug: string;
}

const usePlatforms = () => useData<Platforms>("/platforms/lists/parents");

export default usePlatforms;
