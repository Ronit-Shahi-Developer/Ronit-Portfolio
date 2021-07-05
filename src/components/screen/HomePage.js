import React from 'react'
import Header from "../Header";
import Particles from "react-particles-js";

const HomePage = () => {
    return (
        <div>
            <Particles
        className="partical-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />


<Header />

        </div>
    )
}

export default HomePage
