import React from 'react';
import ecomerse from '../../apis/ecommerce';
import { IMG_URL } from '../../apis/ecommerce';
import OutsideClickHandler from 'react-outside-click-handler';

class Search extends React.Component {
  state = { search: '', count: 0, rows: [] };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const response = await ecomerse.get(
      `/products/search?query_string=${this.state.search}`
    );
    this.setState(response.data);
  };

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
            type="text"
            placeholder="search anything"
            autoComplete="off"
          />
          <OutsideClickHandler
            onOutsideClick={() => {
              this.setState({ count: 0, rows: [] });
            }}
          >
            <div className="results">
              {this.state.rows.map(item => {
                return (
                  <div key={item.product_id} className="item">
                    <div className="photo">
                      <img
                        alt=""
                        width="200"
                        src={`${IMG_URL}${item.thumbnail}`}
                      />
                    </div>
                    <div className="name">{`${item.name}`}</div>
                  </div>
                );
              })}
            </div>
          </OutsideClickHandler>
        </form>
      </div>
    );
  }
}

export default Search;
