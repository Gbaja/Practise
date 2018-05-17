import React from "react";
import { connect } from "react-redux";
import { fetchMentors } from "../../actions/get_requests";

const Pagination = props => {
  console.log(props.numberOfPages);
  return (
    <div>
      {props.numberOfPages.length > 0
        ? props.numberOfPages.map(num => {
          <button key={num} onClick={props.fetchMentors(num)}>
            {num}
          </button>;
        })
        : false}
    </div>
  );
};

export default connect(null, { fetchMentors })(Pagination);
