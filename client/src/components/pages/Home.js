import React from "react";

const Home = () => {
  const styles = {
    container: {
      paddingTop: "50px",
    },

    text: {
      transform: "translate(0px, 15px )",
    },
  };
  return (
    <div className="container" style={styles.container}>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s10">
              <input
                id="text"
                type="text"
                class="validate input-large"
                style={styles.text}
              />
              <label for="text">Text</label>
            </div>
            <div className="input-field col s2">
              <a className="btn-floating btn-large waves-effect waves-light">
                <i className="material-icons">add</i>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
