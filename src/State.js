import React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const DetailComponent = () => {
    return (
      <section>
        <p>
          <strong>Cities:</strong> 
        </p>
        <p>
          <strong>Zip Code:</strong> 
        </p>
      </section>
    );
  };

const State = () => {
    const [data, setData] = useState();
  

    useEffect(() => {
        async function getData() {
          const res = await axios.get(`https://api.npoint.io/2c71ded6354de7428006`);
          console.log(res);
          console.log(res.data);
          console.log(res.data.AK);
          console.log(res.data.AK.cities);
        }
        // console.log(data);
        getData();
      });

  return (
    <div>
      <Grid
        data={data}
        detail={DetailComponent}
        style={{
          height: "400px",
        }}
        expandField="expanded"
        // onExpandChange={expandChange}
      >
        <Column field="ProductName" title="State" />
      </Grid>
    </div>
  );
};

export default State;
