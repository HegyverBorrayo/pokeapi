import { useEffect, useState } from "react";
import PokemonThumnail from "../components/PokemonThumnail";

function Home() {
    const [allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

    const getAllPokemons = async() => {
        const res = await fetch(loadMore)
        const data = await res.json()

        setLoadMore(data.next)        
        createPokemonObject(data.results)
    }
    
    const createPokemonObject = (results) => {
        results.forEach( async pokemon => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            const data = await res.json()
            setAllPokemons(currentList => [...currentList, data])
        })
    }

    useEffect(() => {
        getAllPokemons()
    }, [])

    const _loadMore = (e) => {
        getAllPokemons()
    }
    
    return (
        <div>
            <h1 className="text-center">Pokemon Evolution</h1>
            <div className='pokemon-container'>
                <div className='all-container'>
                {allPokemons.map((pokemon, index) =>
                    <PokemonThumnail
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.sprites.other.dream_world.front_default}
                        type={pokemon.types[0].type.name}
                        key={index}/>
                )}
                </div>
                <button className='load-more' onClick={_loadMore}>Load more</button>
            </div>
        </div>
    )
}

export default Home