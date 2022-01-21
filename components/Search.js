import { useEffect } from "react";
import { useResultContext } from "@/context/ResultContextProvider";

import { useDebounce } from "use-debounce";

export default function Search() {
    const { results, isLoading, getResults, searchTerm, setSearchTerm } =
        useResultContext();

    const [debouncedValue] = useDebounce(searchTerm, 400);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        if (searchTerm) {
            // getResults(`search/q=${searchTerm}`);
            // getResults(`search/q=${searchTerm}`);
            console.log({ searchTerm });
        }
    }, [debouncedValue]);
    return (
        <div className="mb-12">
            <input
                type="text"
                onChange={handleChange}
                className="border"
                placeholder="Search here"
                value={searchTerm}
            />
        </div>
    );
}
