import { FormEvent } from "react";
import { Button, Input, Label } from "react-aria-components";

const Index = () => {

    function onsubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        alert("Raxmat siz kirdingiz")
    }

    return (
        <form onSubmit={onsubmit}>
            <Label
                htmlFor="username"
            >
                Isminggizni kiriting
            </Label>
            <Input
                id="username"
                aria-labelledby="username"
                aria-placeholder="Misol uchun: user23"
            />
            <Label
                htmlFor="email"
            >
                Emailinggizni kiriting
            </Label>
            <Input
                id="email"
                aria-labelledby="email"
                aria-placeholder="Misol uchun: user23@gmail.com"
            />
            <Label
                htmlFor="password"
            >
                Parolni kiriting
            </Label>
            <Input
                id="password"
                aria-labelledby="password"
                aria-placeholder="Misol uchun: 123jsh6"
                type="password"
            />
            <Button type="submit" aria-label="Buni bosib ro'yxatdan o'ting">Submit</Button>
        </form>
    );
};

export default Index;
