import "./Cube.css";
import Cube from "react-3d-cube";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Container, Row, Col, Button } from "react-bootstrap";

const LogoCube = () => {
  const [assets, setAssets] = useState([]);
  let dataAssets;

  let altAssets = [
    "https://lh3.googleusercontent.com/PWZaqY9OXEJA2AtbYqXl1jMHWs27Uk2kEs-sRcrGCmscBxKMeNswOIriW6TvV71sG1IJ-o8tllsLarmVq2mky28pipLVwAHgKSWd=w301",
    "https://lh3.googleusercontent.com/He_g8Ne0IYAOYrJWIoa-nd-bNCimHd2kiU4Wz2tuzX9fO83U8dcZwH3aADKswvPVqQvWXPm-jqUIYTC7qrETj88VLWMRXhKf5a_irkM=w301",
    "https://lh3.googleusercontent.com/GWqi_hkZ01enfcGA12p3MUUgM34OCWJvtJBuGwk9AsUhB-lz-6t6FFgJGnVtnah5LARWX3Rg2xqw1JGpDkFh88_dk85N9O3tAin6gQ=w600",
    "https://lh3.googleusercontent.com/v1UkPH1QhG3NnFNuRybll59QoKrJkKB_hb7UmusyZaRXB5LkwLIZcFHjcZKCxdFIwzs8r9VJT0V40-A5XBLtWUYy-7Qk8zsfagmiDQ=w301",
    "https://lh3.googleusercontent.com/tQnHFx1FuJXs1-2ywfh5tfRGqJ0j8uefY60c34qvkSsluKKdEcLUf9EG-97R4iLthgGq-if42S1vJFi7zQ8KuS-GyWL9vUAk1I5m1Jw=w301",
    "https://lh3.googleusercontent.com/PmRyUrZPzKFDXZdhxa8MxDXM8TJ6U5iBlVYGMCMqFetiaWmBYG-31cvTBUcfzREfVs_ojubWAeuRzRYdGHMhnELN9VALTLyajMU-kic=w301",
    "https://lh3.googleusercontent.com/PWZaqY9OXEJA2AtbYqXl1jMHWs27Uk2kEs-sRcrGCmscBxKMeNswOIriW6TvV71sG1IJ-o8tllsLarmVq2mky28pipLVwAHgKSWd=w301",
    "https://lh3.googleusercontent.com/He_g8Ne0IYAOYrJWIoa-nd-bNCimHd2kiU4Wz2tuzX9fO83U8dcZwH3aADKswvPVqQvWXPm-jqUIYTC7qrETj88VLWMRXhKf5a_irkM=w301",
    "https://lh3.googleusercontent.com/GWqi_hkZ01enfcGA12p3MUUgM34OCWJvtJBuGwk9AsUhB-lz-6t6FFgJGnVtnah5LARWX3Rg2xqw1JGpDkFh88_dk85N9O3tAin6gQ=w600",
  ];

  const options = {
    headers: {
      Accept: "application/json",
      "X-API-KEY": "e5d251b38832420abaf8fa88b085aafc",
    },
  };

  const fetchAsset = async () => {
    return axios
      .get(
        "https://api.opensea.io/api/v1/assets?order_direction=desc&offset=5000&limit=6",
        options
      )
      .then((res) => {
        console.log(res.data);
        return res.data;
      });
  };

  //   const fetchAsset = async () => {
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "X-API-KEY": "e5d251b38832420abaf8fa88b085aafc",
  //       },
  //     };

  //     fetch(
  //       "https://api.opensea.io/api/v1/assets?collection_slug=doodles-official&order_by=sale_price&order_direction=desc&limit=20&include_orders=true",
  //       options
  //     )
  //       .then((response) => response.json())
  //       .then((response) => console.log(response))
  //       .catch((err) => console.error(err));
  //   };

  useEffect(() => {
    fetchAsset().then((data) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      dataAssets = Object.entries(data).sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });

      setAssets(dataAssets[0][1]);
    });
  }, []);

  console.log(assets);

  return (
    <div className="cubeComponent">
      <div
        // className="cubeSize"
        style={{
          width: 500,
          height: 500,
        }}
      >
        {assets?.length !== 0 ? (
          <Cube size={500} index="front">
            {assets.map((asset, index) => {
              return (
                <div key={index}>
                  <img
                    style={{
                      width: 500,
                      height: 500,
                      objectFit: "cover",
                    }}
                    src={
                      asset.image_url !== null
                        ? asset.image_url
                        : altAssets[index]
                    }
                    alt="hi"
                  />
                </div>
              );
            })}
          </Cube>
        ) : null}
      </div>
    </div>
  );
};
export default LogoCube;
