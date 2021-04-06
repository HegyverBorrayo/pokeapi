import  { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import '../assets/css/Detail.css'

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = {pokemon: {}}

    _infoPokemon = ({ id }) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => {
            const pokemon = res.data
            this.setState({pokemon})
        })
    }

    componentDidMount () {
        const { pokemonId } = this.props.match.params
        this._infoPokemon({id: pokemonId})
    }

    _getType = (types = {}) => {
        const objTypes = Object.values(types);
        const type = objTypes.map(item => {
            if (item.slot === 1) {
                return item.type.name
            }
        })
        return type[0]
    }

    _getImage = (imagesA = {}) => {
        const otherImg = imagesA.other
        if (typeof(otherImg) !== "undefined") {
            let imgDefault = otherImg.dream_world.front_default
            return imgDefault
        }
    }

    render() {
        const { id, name, types, sprites } = this.state.pokemon
        const style = `card ${this._getType(types)}`
        const image = this._getImage(sprites)
        return (
            <div className={style}>
                <div className="thumbnail">
                    <img src={image}/>
                </div>
                <div className="right">
                    <h1 className="tt-uppercase">{name}</h1>
                </div>
                <div className="bottom">
                    
                </div>
            </div>
        )
    }
}
