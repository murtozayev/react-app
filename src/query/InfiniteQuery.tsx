import { useInfiniteQuery } from "@tanstack/react-query";
import { getData } from "./query.config";

const InfiniteQuery = () => {

    const {
        data,
        isLoading,
        hasNextPage,
        fetchNextPage,
    } = useInfiniteQuery({
        queryKey: ["users"],
        queryFn: getData,
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            return lastPage?.nextPage || undefined;
        },
    });


    return (
        <div>
            {data?.pages.map((group, i) => (
                <div key={i}>
                    {group?.map((user: { name: string }, i: number) => (
                        <ul key={i}>
                            <li>{user.name}</li>
                        </ul>
                    ))}
                </div>
            ))}

            <button
                disabled={!hasNextPage}
                onClick={() => fetchNextPage()}
            >
                {isLoading ? "Loading..." : "Load more"}
            </button>
        </div>
    );
};

export default InfiniteQuery;
