import React from "react";
import SearchPanel from "./SearchPanel";

const Controllers = ({ handleModal, setSearchTerm }) => {
    return (
        <div>
            <SearchPanel
                setSearchTerm={setSearchTerm}
                handleModal={handleModal}
            ></SearchPanel>
        </div>
    );
};

export default Controllers;
