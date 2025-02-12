import { readFile } from "fs/promises";

async function fetchData() {
  try {
    const data = await readFile(
      "/Users/zeropse/Developer/roamly/src/data/data.json",
      "utf-8"
    );
    const jsonData = JSON.parse(data);

    const countries = jsonData.countries.map((country) => ({
      id: country.id,
      name: country.name,
      cities: country.cities.map((city) => ({
        name: city.name,
        imageUrl: city.imageUrl,
        description: city.description,
      })),
    }));

    const temples = jsonData.temples.map((temple) => ({
      id: temple.id,
      name: temple.name,
      imageUrl: temple.imageUrl,
      description: temple.description,
    }));

    const beaches = jsonData.beaches.map((beach) => ({
      id: beach.id,
      name: beach.name,
      imageUrl: beach.imageUrl,
      description: beach.description,
    }));

    const allCities = countries.flatMap((country) => country.cities);

    console.log("Countries:", countries);
    console.log("Cities:", allCities);
    console.log("Temples:", temples);
    console.log("Beaches:", beaches);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
