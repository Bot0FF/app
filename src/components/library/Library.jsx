import React from "react";
import axios from "axios";
import { API_URL } from './../../services/UrlService';
import "./library.css";

class Library extends React.Component {

    componentDidMount() {
        axios.get(API_URL + "/library/all").then(response => {
            this.props.setEntities(response.data.entities)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(API_URL + "/library/all").then(response => {
            this.props.setEntities(response.data.entities);
            this.props.setTotalEntitiesCount(response.data.totalCount);
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalEntitiesCount / this.props.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className="library-item">
                <div>
                    {pages.map(p => {
                        return <span onClick={(e) => this.onPageChanged(p)} className={this.props.currentPage === p}>{p}</span>
                    })}
                </div>
                {
                    this.props.entities.map(entity => <div key={entity.id}
                    >
                        <span>
                            <span>
                                <div>{entity.name}</div>
                                <div>{entity.description}</div>
                            </span>
                        </span>
                        <span>
                            <div>
                                <img />
                            </div>
                            {entity.uncover
                                ? <button onClick={() => this.props.open(entity.id)}>Open</button>
                                : <button onClick={() => this.props.hide(entity.id)}>Hide</button>}
                        </span>
                    </div>)
                }
            </div>
        );
    }
}

export default Library;