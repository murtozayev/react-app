import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import userSchema from "./zod";

const Form = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({ resolver: zodResolver(userSchema) });

    const onSubmit = (data: any) => {
        console.log("Submitted Data:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                {errors.username ? (
                    <p>{errors.username.message}</p>
                ) : <p>Username</p>}
            </label>
            <input {...register("username")} type="text" />
            <hr />
            <label>
                {errors.email ? (
                    <p>{errors.email.message}</p>
                ) : <p>Email</p>}
            </label>
            <input {...register("email")} type="text" />
            <hr />
            <label>
                {errors.password?.pass ? (
                    <p>{errors.password?.pass.message}</p>
                ) : <p>Password</p>}
            </label>
            <input {...register("password.pass")} type="password" />
            <hr />
            <label>
                {errors.password?.conPass ? (
                    <p>{errors.password.conPass.message}</p>
                ) : <p>Confirm password</p>}
            </label>
            <input {...register("password.conPass")} type="password" />
            <hr />
            <button type="submit">Sign up</button>
        </form>
    );
};

export default Form;
