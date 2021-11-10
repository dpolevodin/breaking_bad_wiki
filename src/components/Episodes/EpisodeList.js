import React from 'react'
import EpisodeCard from "./EpisodeCard"
import Loading from '../Loading';


class EpisodeList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          episodes: [],
          currentPage: 0,
          isLoading: false,
      }
    }

    handleButton = (event) => {
        const offsetCount = event.target.innerText * 10 - 10
        this.setState({currentPage: offsetCount})
        this.componentDidMount(offsetCount)
    }

    componentDidMount = () => {
        this.setState({isLoading: true})
        fetch(`https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad`)
                .then(response => response.json())
                .then(result => {
                    this.setState({
                        episodes: result,
                        isLoading: false
                    })
                }
                )
            }    
    
    render() {
        return (
            <div className="episodes__wrapper">
                {this.state.isLoading && (<Loading />)}
                {this.state.episodes.map((item) => 
                    <EpisodeCard {...item} key={item.episode_id}/>
                    )
                }
            </div>
        )
}
}

export default EpisodeList