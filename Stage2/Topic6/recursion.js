// (function () {
//   console.log("Hello");
// })();

// async function
const countries = [
  {
    id: 1,
    name: "USA",
    children: [
      {
        id: 2,
        name: "California",
        children: [
          { id: 3, name: "Los Angeles", children: [] },
          { id: 4, name: "San Francisco", children: [] },
        ],
      },
      { id: 5, name: "Texas", children: [] },
    ],
  },
  {
    id: 6,
    name: "Canada",
    children: [
      { id: 7, name: "Ontario", children: [] },
      { id: 8, name: "Quebec", children: [] },
    ],
  },
];

const processCountries = (countries) => {
  return countries.map((country) => {
    console.log(`Country/Region: ${country.name}`);
    // list.innerHTML = `Country/Region: ${country.name}`

    if (country.children && country.children.length > 0) {
      // Recursively process children
      processCountries(country.children);
    }
    return country.name; // or return a transformed structure
  });
};

processCountries(countries);
// Country/Region: USA
// Country/Region: California
// Country/Region: Los Angeles
// Country/Region: San Francisco
// Country/Region: Texas
// Country/Region: Canada
// Country/Region: Ontario
// Country/Region: Quebec

const transformCountries = (countries) => {
  return countries.map((country) => ({
    u_id: country.id,
    city_name: country.name,
    children: transformCountries(country.children || []),
  }));
};

const transformedData = transformCountries(countries);

console.log('"transformedData', transformedData);

// Recursion
function A(num) {
  if (num == 0) {
    console.log("num", num);
    return num;
  } else {
    const newNum = num - 1;
    console.log("newNum", newNum);

    return A(newNum);
  }
}

A(10);
