import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getData, postData } from "./query.config";
import { useEffect } from "react";

const Query = () => {
    const queryClient = useQueryClient();

    // 🔹 Ma'lumot olish (`useQuery`)
    const { error, isLoading, data } = useQuery({
        queryKey: ["Get todos"],
        queryFn: getData, // ✅ `queryFn` faqat API dan ma’lumot olish uchun ishlaydi
        refetchInterval: 5000
    });

    // 🔹 Xatolikni alert qilish
    useEffect(() => {
        if (error) alert(error.message);
    }, [error]);

    // 🔹 Keshdagi ma'lumotni konsolga chiqarish
    useEffect(() => {
        console.log("📌 Keshlangan ma'lumot:", queryClient.getQueryData(["Get todos"]));
    }, [data]); // ✅ Har safar `data` o‘zgarganda konsolga chiqarish

    // 🔹 Ma'lumot qo'shish (`useMutation`)
    const mutation = useMutation({
        mutationKey: ["Post data"],
        mutationFn: (newData: object) => postData(newData),
        onSuccess: (newData) => {
            console.log("✅ Yangi ma'lumot qo‘shildi:", newData);
        },
        onError: (error) => console.log("❌ Xatolik:", error.message)
    });

    function addData() {
        const newData = {
            title: "No system is safe",
            userId: Date.now()
        };

        mutation.mutate(newData);
    }

    // 🔹 Keshni tozalash tugmasi
    function clearCache() {
        queryClient.removeQueries(["Get todos"] as any);
    }

    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            <button onClick={addData}>Add data</button>
            <button onClick={clearCache}>Clear cache</button>
        </div>
    );
};

export default Query;
