import React from 'react'
import EpisodeCard from "./EpisodeCard"
import Loading from '../Loading';
import Pagination from "../Pagination/Pagination"


class EpisodeList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          episodes: [],
          episodes2: [],
          currentPage: 0,
          isLoading: false,
          buttonCounts: [1, 2, 3, 4, 5],
      }
    }

    handleChangeSeason = (event) => {
        const seasonCount = event.target.innerText
        const seasonByCount = this.state.episodes.filter(item => item.season === seasonCount)
        console.log(seasonByCount)
        this.setState({
            episodes2: seasonByCount,
        })
    }

    componentDidMount = () => {
        this.setState({isLoading: true})
        fetch(`https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad`)
                .then(response => response.json())
                .then(result => {
                    this.setState({
                        episodes: result,
                        episodes2: result,
                        isLoading: false
                    })
                }
                )
            }
    
    render() {
        return (
            <div className="episodes__wrapper">
                {this.state.isLoading && (<Loading />)}

                <Pagination onClick={this.handleChangeSeason} buttonCounts={this.state.buttonCounts}/>

                {this.state.episodes2.map((item) => 
                    <EpisodeCard {...item} key={item.episode_id}/>
                    )
                }
            </div>
        )
}
}

export default EpisodeList