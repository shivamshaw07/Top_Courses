import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
const data = [
  {
    id: "1",
    title: "All",
  },
  {
    id: "2",
    title: "Development",
  },
  {
    id: "3",
    title: "Business",
  },
  {
    id: "4",
    title: "Design",
  },
  {
    id: "5",
    title: "Lifestyle",
  },
];

const api = "https://codehelp-apis.vercel.app/api/get-top-courses";
function App() {
  const [courses, setCourses] = useState(null);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(data[0].title)
  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await fetch(api);
      const update = await res.json();
      setCourses(update.data)
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false)
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-slate-900 w-[100vw] min-h-[100vh]">
      <Nav />
      <div className="flex w-[65vw] flex-col  mx-auto">
        <Filter data={data}  category = {category} setCategory={setCategory}/>
        {loading? (<Spinner/>):(<Cards coursesData={courses} category={category}/>)}
      </div>
      
    </div>
  );
}

export default App;
