import { useLoaderData, useSearch } from "@tanstack/react-router";
import { users } from "../router.config";
import { useEffect, useState } from "react";

const Users = () => {
    const userss = useLoaderData(users as any)

    console.log(userss)

    const searchRes = useSearch(users as any);

    const [result, setResult] = useState<object[]>([]);

    useEffect(() => {
        if (!searchRes) {
            setResult([]);
            return;
        }

        const arr = userss.filter((user: any) =>
            user.name.toLowerCase().includes(searchRes.name.toLowerCase())
        );

        setResult(arr);
    }, [searchRes, userss]);

    console.log(result);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {result.map((user: any) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
