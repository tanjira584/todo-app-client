import React from "react";

const SearchPanel = ({ handleModal, setSearchTerm }) => {
    return (
        <div className="mb-5">
            <div className="d-flex justify-content-between">
                <input
                    type="search"
                    name="search"
                    className="form-control"
                    placeholder="Enter Search Term"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <button className="ms-4 btn btn-success" onClick={handleModal}>
                    AddTask
                </button>
            </div>
        </div>
    );
};

export default SearchPanel;
