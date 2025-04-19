import { useGetPokemonByNameQuery } from "./redux-saga/redux.config"

const Test = () => {

    const { data } = useGetPokemonByNameQuery()

    console.log(data)

    return (
        <div>Test</div>
    )
}

export default Test