import { useEffect, useState } from "react"

export const useAttackStrength = (pokemon, rival) => {
    const [pokemonStrength, setPokemonStrength] = useState(3)
    const [rivalStrength, setRivalStrength] = useState(3)
    const [pokemonType, setPokemonType] = useState([])
    const [rivalType, setRivalType] = useState([])

    useEffect(() => {

        if (pokemon && pokemon.types) {
            const types = []
            pokemon.types.map((type) => {
                types.push(type.type.name)
            })
            setPokemonType(types)
        }
        if (rival && rival.types) {
            const types = []
            rival.types.forEach((type) => {
                types.push(type.type.name)
            })
            setRivalType(types)
        }
    }, [rival])


    useEffect(() => {
        if ((pokemonType.includes("grass") && rivalType.includes("fire")) ||
            (pokemonType.includes("fire") && rivalType.includes("water")) ||
            (pokemonType.includes("water") && rivalType.includes("grass")) ||
            (pokemonType.includes("water") && rivalType.includes("electric")) ||
            (pokemonType.includes("electric") && rivalType.includes("grass"))
        ) {
            setRivalStrength(4)
            setPokemonStrength(2)
        } else if ((rivalType.includes("grass") && pokemonType.includes("fire")) ||
            (rivalType.includes("fire") && pokemonType.includes("water")) ||
            (rivalType.includes("water") && pokemonType.includes("grass")) ||
            (rivalType.includes("water") && pokemonType.includes("electric")) ||
            (rivalType.includes("electric") && pokemonType.includes("grass"))
        ) {
            setPokemonStrength(4)
            setRivalStrength(2)
        } else {
            setPokemonStrength(3)
            setRivalStrength(3)
        }
    }, [rivalType, pokemonType])


    return { pokemonStrength, rivalStrength }
}