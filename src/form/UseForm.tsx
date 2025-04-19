import { useForm } from "react-hook-form"

const UseForm = () => {
    const { handleSubmit, formState: { errors }, watch, reset, register } = useForm()
    return (
        <div>
            <form>
                <input type="text" {...register("username")} />
            </form>
        </div>
    )
}

export default UseForm