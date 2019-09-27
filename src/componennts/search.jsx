import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "../commons/pagination";
import SearchBox from "../commons/searchbox";
import Apartments from "./apartments";
import { getApartments } from "../services/apartmentService";
import { paginate } from "../utils/paginate";

class Search extends Component {
  state = {
    apartments: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: ""
  };

  async componentDidMount() {
    const { data: apartments } = await getApartments();

    this.setState({ apartments });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      searchQuery,
      apartments: allApartments
    } = this.state;

    let filtered = allApartments;
    if (searchQuery)
      filtered = allApartments.filter(a =>
        a.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const apartments = paginate(filtered, currentPage, pageSize);

    return { totalCount: filtered.length, data: apartments };
  };

  render() {
    const { length: count } = this.state.apartments;
    const { pageSize, currentPage } = this.state;
    const { user } = this.props;

    if (count === 0) return <p>Loading .......</p>;

    const { totalCount, data: apartments } = this.getPagedData();

    return (
      <div>
        {user && (
          <Link
            to="/newapartment"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Home ?
          </Link>
        )}

        <SearchBox
          value={this.state.searchQuery}
          onChange={this.handleSearch}
        />
        <p>Showing {totalCount} apartments for this search</p>
        <Apartments apartments={apartments} />
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Search;
